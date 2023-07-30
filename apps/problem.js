//修改自渔火的ap-plugin
import plugin from "../../../lib/plugins/plugin.js";
import common from "../../../lib/common/common.js";
import fs from "fs";
import {
  formatDuration,
  getAzureRoleList,
  getUserReplySetting,
  getVitsRoleList,
  getVoicevoxRoleList,
  makeForwardMsg,
  parseDuration,
  renderUrl,
  replaceWithAsterisks,
} from "../utils/common.js";
if (!global.segment) {
  global.segment = (await import("oicq")).segment;
}
let keyMap = {};
export class problem extends plugin {
  constructor() {
    let option = {
      name: "ChatGPT-问题合集",
      event: "message",
      priority: -1145,
      rule: [
        {
          reg: "^(#)?(chatgpt-plugin|chatgpt|gpt)(|一切|所有|全部)?问题(合集)?$",
          fnc: "allProblem",
        },
        {
          reg: "^(#)?(chatgpt-plugin|chatgpt|gpt)(问题合集初始化)?$",
          fnc: "init2",
          permission: "master",
        },
      ],
    };
    Object.keys(keyMap).forEach((key) => {
      let reg = `^#?${key}`;
      option.rule.push({
        /** 命令正则匹配 */
        reg,
        /** 执行方法 */
        fnc: "problem",
      });
    });
    super(option);
  }
  async init() {
    keyMap = {};
    let rules = [];
    keyMap = fs.readFileSync(
      "plugins/chatgpt-plugin/resources/problem/rules.json"
    );
    keyMap = JSON.parse(keyMap);
    Object.keys(keyMap).forEach((key) => {
      let reg = `^#?${key}`;
      rules.push({
        /** 命令正则匹配 */
        reg,
        /** 执行方法 */
        fnc: "problem",
      });
    });
    this.rule = rules;
  }
  async init2(e) {
    keyMap = {};
    let rules = [];
    keyMap = fs.readFileSync(
      "plugins/chatgpt-plugin/resources/problem/rules.json"
    );
    keyMap = JSON.parse(keyMap);
    Object.keys(keyMap).forEach((key) => {
      let reg = `^#?${key}`;
      rules.push({
        /** 命令正则匹配 */
        reg,
        /** 执行方法 */
        fnc: "problem",
      });
    });
    this.rule = rules;
    e.reply(`成功手动初始化KeyMAP信息！`, e.isGroup);
  }
  /**
   * rule - 问题合集
   * @returns
   */
  async allProblem(e) {
    const messages = [`目前收集的问题合集,直接发送问题名称：`];
    const keys = Object.keys(keyMap);
    keys.forEach((key) => {
      messages.push(key);
    });
    e.reply(makeForwardMsg(this.e, messages, `GPT问题合集`));
  }
  async problem(e) {
    const _path = process.cwd();
    let msg = e.msg.replace("#", "");
    let keys = Object.keys(keyMap).filter((k) => msg.startsWith(k));
    let target = keys[0];
    let targetCode = keyMap[target];
    const regex = /\/\/\/img(.+?)(?=\/\/\/img|$)/g;
    const matches = targetCode.match(regex);
    if (matches) {
      let img = `file:///${_path}/plugins/chatgpt-plugin/resources/problem/${matches}`;
      msg = [`解决方案：\n ${targetCode}\n`, segment.image(img)];
      e.reply(msg);
      //logger.info(targetCode)
      //logger.info(keys)
    } else {
      e.reply(`解决方案：\n ${targetCode}`);
    }
  }
}
let proble = new problem();
proble.init();
