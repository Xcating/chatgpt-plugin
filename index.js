import fs from "node:fs";
import chalk from "chalk";
import { Config } from "./utils/config.js";
import { checkPackage } from "./utils/DependenciesChecker.js";
if (!global.segment) {
  global.segment = (await import("oicq")).segment;
}

const files = fs
  .readdirSync("./plugins/chatgpt-plugin/apps")
  .filter((file) => file.endsWith(".js"));

let ret = [];

files.forEach((file) => {
  ret.push(import(`./apps/${file}`));
});

ret = await Promise.allSettled(ret);

let apps = {};
for (let i in files) {
  let name = files[i].replace(".js", "");

  if (ret[i].status !== "fulfilled") {
    if (Config.debug) {
      logger.error(`加载插件：${logger.red(name)} 错误`);
      logger.error(
        logger.cyan("[ChatGPT-plugin]"),
        logger.yellow(`[启动]`),
        logger.red(`[DEBUG]`),
        ret[i].reason
      );
    } else {
      logger.error(
        `加载插件：${logger.red(
          name
        )} 错误，请尝试发送指令#chatgpt安装依赖，或者把Yunzai-bot/plugins/chatgpt-plugin/config/config.json 里面的debug后面的值改成true 查看详细信息并联系作者`
      );
      logger.error(
        logger.cyan("[ChatGPT-plugin]"),
        logger.yellow(`[启动]`),
        logger.red(`[DEBUG]`),
        ret[i].reason
      );
    }
    continue;
  }
  apps[name] = ret[i].value[Object.keys(ret[i].value)[0]];
}
//自检借鉴了渔火的ap-plugin
let tealist = ["🍵", "🧉", "🧋", "🫖", "☕", "🥑"];
logger.info("---------------");
logger.mark(
  logger.cyan(
    `[${
      tealist[Math.floor(Math.random() * tealist.length)]
    }] chatgpt-plugin插件自检中......`
  )
);
let passed = await checkPackage();
if (!passed) {
  logger.info(
    logger.red("[ChatGPT-plugin]"),
    logger.yellow(`[加载]`),
    logger.red(`[依赖]`),
    "依赖错误"
  );
}
try {
  await import("keyv");
  logger.info(logger.red("-------------   ٩(๑˃̵ᴗ˂̵)و / / /-------------"));
  logger.info(
    logger.cyan.bold(
      " ________  ___  ___  ________  _________  ________  ________  _________"
    )
  );
  logger.info(
    logger.cyan.bold(
      "|\\   ____\\|\\  \\|\\  \\|\\   __  \\|\\___   ___\\\\   ____\\|\\   __  \\|\\___   ___\\"
    )
  );
  logger.info(
    logger.cyan.bold(
      "\\ \\  \\___|\\ \\  \\\\\\  \\ \\  \\|\\  \\|___ \\  \\_\\ \\  \\___|\\ \\  \\|\\  \\|___ \\  \\_|"
    )
  );
  logger.info(
    logger.cyan.bold(
      " \\ \\  \\    \\ \\   __  \\ \\   __  \\   \\ \\  \\ \\ \\  \\  __\\ \\   ____\\   \\ \\  \\"
    )
  );
  logger.info(
    logger.cyan.bold(
      "  \\ \\  \\____\\ \\  \\ \\  \\ \\  \\ \\  \\   \\ \\  \\ \\ \\  \\|\\  \\ \\  \\___|    \\ \\  \\"
    )
  );
  logger.info(
    logger.cyan.bold(
      "   \\ \\_______\\ \\__\\ \\__\\ \\__\\ \\__\\   \\ \\__\\ \\ \\_______\\ \\__\\        \\ \\__\\"
    )
  );
  logger.info(
    logger.cyan.bold(
      "    \\|_______|\\|__|\\|__|\\|__|\\|__|    \\|__|  \\|_______|\\|__|         \\|__|"
    )
  );
  logger.info(
    `${chalk.red.bold("ChatGPT")}${chalk.yellow.bold("-")}${chalk.blue.bold(
      "Plugin"
    )}${chalk.cyan.bold("加载")}${chalk.green.bold("成功!")}`
  );
  logger.info(`当前插件版本 ${chalk.green.bold(Config.version)}`);
  logger.info(
    chalk.yellow.bold("仓库地址 https://github.com/ikechan8370/chatgpt-plugin")
  );
  logger.info(chalk.cyan.bold("ChatGPT-Plugin交流群号 559567232"));
  logger.info(logger.red("-------------   ٩(๑˃̵ᴗ˂̵)و / / /-------------"));
} catch (err) {
  logger.info(
    logger.red.bold(
      " ________  ___  ___  ________  _________  ________  ________  _________"
    )
  );
  logger.info(
    logger.red.bold(
      "|\\   ____\\|\\  \\|\\  \\|\\   __  \\|\\___   ___\\\\   ____\\|\\   __  \\|\\___   ___\\"
    )
  );
  logger.info(
    logger.red.bold(
      "\\ \\  \\___|\\ \\  \\\\\\  \\ \\  \\|\\  \\|___ \\  \\_\\ \\  \\___|\\ \\  \\|\\  \\|___ \\  \\_|"
    )
  );
  logger.info(
    logger.red.bold(
      " \\ \\  \\    \\ \\   __  \\ \\   __  \\   \\ \\  \\ \\ \\  \\  __\\ \\   ____\\   \\ \\  \\"
    )
  );
  logger.info(
    logger.red.bold(
      "  \\ \\  \\____\\ \\  \\ \\  \\ \\  \\ \\  \\   \\ \\  \\ \\ \\  \\|\\  \\ \\  \\___|    \\ \\  \\"
    )
  );
  logger.info(
    logger.red.bold(
      "   \\ \\_______\\ \\__\\ \\__\\ \\__\\ \\__\\   \\ \\__\\ \\ \\_______\\ \\__\\        \\ \\__\\"
    )
  );
  logger.info(
    logger.red.bold(
      "    \\|_______|\\|__|\\|__|\\|__|\\|__|    \\|__|  \\|_______|\\|__|         \\|__|"
    )
  );
  logger.info(
    `${chalk.red("ChatGPT")}${chalk.yellow("-")}${chalk.gray(
      "Plugin"
    )}${chalk.cyan("加载")}${chalk.red.bold("失败!")}`
  );
  logger.info(
    logger.red("[ChatGPT-plugin]"),
    logger.yellow(`[加载]`),
    logger.red(`[依赖]`),
    "插件未检测到依赖！！！！请发送指令#chatgpt安装依赖"
  );
}
let createServer;
try {
  ({ createServer } = await import("./server/index.js"));
  await createServer();
} catch (error) {
  logger.info(
    logger.red("[ChatGPT-plugin]"),
    logger.yellow(`[加载]`),
    logger.red(`[依赖]`),
    "插件未检测到依赖！！！！请发送指令#chatgpt安装依赖"
  );
}

export { apps };
