//修改自渔火的ap-plugin
import plugin from "../../../lib/plugins/plugin.js";
import { createRequire } from "module";
import { Restart } from "../../other/restart.js";
import common from "../../../lib/common/common.js";
import fs from "fs";

const require = createRequire(import.meta.url);
const { exec, execSync } = require("child_process");

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
        `检测到以下chatgpt-plugin-Plugin所需依赖未安装：\n${installList.join(
          "\n"
        )}\n您可用使用【#chatgpt安装依赖】进行安装，或者手动进行安装`
      );
    } else {
      e.reply(`所有依赖已安装完成，尽情享受chatgpt-plugin的所有功能吧！`);
    }
    return true;
  }
  async installDependencies(e) {
    if (e.msg.match("强制")) {
      e.reply(`正在为您安装依赖，请稍等...您需要等待大约5~10分钟时间完成依赖安装，不用着急，安装过程无提示，请耐心等待`);
      let { error, stdout, stderr } = await this.execSync(
        `cd ./plugins/chatgpt-plugin && pnpm install -P`
      );
      if (error) {
        e.reply(`安装依赖失败，请尝试手动安装：${error.message}`);
        return true;
      }
      if (stderr) {
        e.reply(`安装依赖失败，请尝试手动安装：${stderr}`);
        return true;
      }
      e.reply(
        `所有依赖安装完成，机器人即将重启，尽情享受chatgpt-plugin的所有功能吧！`
      );
      common.sleep(3000);
      await new Restart(this.e).restart();
    } else {
      let packageList = JSON.parse(
        fs.readFileSync("./plugins/chatgpt-plugin/package.json")
      ).dependencies;
      let installList = [];
      for (let key in packageList) {
        try {
          require.resolve(key);
        } catch (error) {
          installList.push(key);
        }
      }
      if (installList.length > 0) {
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
        }
        e.reply(`正在为您安装依赖，请稍等...`);
        let { error, stdout, stderr } = await this.execSync(
          `cd ./plugins/chatgpt-plugin && pnpm install -P`
        );
        if (error) {
          e.reply(`安装依赖失败，请尝试手动安装：${error.message}`);
          return true;
        }
        if (stderr) {
          e.reply(`安装依赖失败，请尝试手动安装：${stderr}`);
          return true;
        }
        e.reply(
          `所有依赖安装完成，机器人即将重启，尽情享受chatgpt-plugin的所有功能吧！`
        );
        common.sleep(3000);
        await new Restart(this.e).restart();
      } else {
        e.reply(`所有依赖已安装完成，尽情享受chatgpt-plugin的所有功能吧！`);
      }
    }
  }
  /**
   * 异步执行git相关命令
   * @param {string} cmd cmd命令
   * @returns
   */
  async execSync(cmd) {
    return new Promise((resolve, reject) => {
      exec(cmd, { windowsHide: true }, (error, stdout, stderr) => {
        resolve({ error, stdout, stderr });
      });
    });
  }
}
