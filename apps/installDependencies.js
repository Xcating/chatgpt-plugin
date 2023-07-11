//修改自渔火的ap-plugin
import plugin from "../../../lib/plugins/plugin.js";
import { createRequire } from "module";
import { Restart } from "../../other/restart.js";
import common from "../../../lib/common/common.js";
import fs from "fs";
const _path = process.cwd();
const require = createRequire(import.meta.url);

/**
 * 处理插件更新
 */
export class checkDependencies extends plugin {
  constructor() {
    super({
      name: "ChatGPT-安装依赖",
      event: "message",
      priority: -1145,
      rule: [
        {
          reg: "^#chatgpt检查依赖$",
          fnc: "checkDependencies",
          permission: "master",
        },
        {
          reg: "^#chatgpt(强制)?安装依赖$",
          fnc: "installDependencies",
          permission: "master",
        },
      ],
    });
  }

  /**
   * rule - 安装依赖
   * @returns
   */
  async checkDependencies(e) {
    let packageList = JSON.parse(
      fs.readFileSync("./plugins/chatgpt-plugin/package.json")
    ).dependencies;
    try {
      await this.execSync(`pnpm -v`);
    } catch (err) {
      e.reply(`检测到您未安装pnpm，正在为您安装pnpm，请稍等...`);
      let { error, stdout, stderr } = await this.execSync(
        `npm install -g pnpm`
      );
      if (error) {
        e.reply(`安装pnpm失败：${error.message}`);
        return true;
      }
      if (stderr) {
        e.reply(`安装pnpm失败：${stderr}`);
        return true;
      }
      e.reply(`pnpm安装完成，正在为您检查依赖，请稍等...`);
    }
    let installList = [];
    for (let key in packageList) {
      try {
        let installedList = execSync(
          `cd ./plugins/chatgpt-plugin && pnpm list ${key}`
        ).toString();
        if (installedList.indexOf(key) == -1) {
          installList.push(key);
        } else {
          logger.info(`${key}已安装`);
        }
      } catch (error) {
        installList.push(key);
      }
    }
    if (installList.length > 0) {
      e.reply(
        `检测到以下chatgpt-plugin所需依赖未安装：\n${installList.join(
          "\n"
        )}\n您可用使用【#chatgpt安装依赖】进行安装，或者手动进行安装`
      );
    } else {
      e.reply(`所有依赖已安装完成，尽情享受chatgpt-plugin的所有功能吧！`);
    }
    return true;
  }
  async installDependencies(e) {
    e.reply("🍵[ChatGPT-Plugin]🥑 正在安装依赖中，请稍等片刻，1~3分钟即可安装完毕", true)
    try {
      await this.execSync(`pnpm -v`);
    } catch (err) {
      e.reply(`🍵[ChatGPT-Plugin]🥑检测到您未安装pnpm，正在为您安装pnpm，请稍等...`);
      let { error, stdout, stderr } = await this.execSync(
        `npm install -g pnpm`
      );
      if (error) {
        e.reply(`🍵[ChatGPT-Plugin]🥑安装pnpm失败：${error.message}`);
        return true;
      }
      if (stderr) {
        e.reply(`🍵[ChatGPT-Plugin]🥑安装pnpm失败：${stderr}`);
        return true;
      }
      e.reply(`🍵[ChatGPT-Plugin]🥑pnpm安装完成，正在为您安装依赖，请稍等...`);
    }
    //执行的逻辑功能
    var exec = require('child_process').exec;
    var ls = exec(`cd ${_path}/plugins/chatgpt-plugin && pnpm i`, function (error, stdout, stderr){
      if (error) {
        e.reply("依赖安装失败：\n" +error.stack);
      } else{
        e.reply("🍵[ChatGPT-Plugin]🥑 依赖安装成功！尽情享受ChatGPT-Plugin的所有功能吧！5秒后将重启云崽！")
        common.sleep(5000);
        new Restart(this.e).restart();
        return true; //返回true 阻挡消息不再往下
      }
    })
    return false; //返回false，未完成安装
  }
  async execSync(cmd) {
    return new Promise((resolve, reject) => {
      exec(cmd, { windowsHide: true }, (error, stdout, stderr) => {
        resolve({ error, stdout, stderr });
      });
    });
  }
}
