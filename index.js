import fs from 'node:fs'
import chalk from 'chalk'
import { Config } from './utils/config.js'
import { createServer } from './server/index.js'

if (!global.segment) {
  global.segment = (await import('oicq')).segment
}

const files = fs.readdirSync('./plugins/chatgpt-plugin/apps').filter(file => file.endsWith('.js'))

let ret = []

files.forEach((file) => {
  ret.push(import(`./apps/${file}`))
})

ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
  let name = files[i].replace('.js', '')

  if (ret[i].status !== 'fulfilled') {
    logger.error(`载入插件错误：${logger.red(name)}`)
    logger.error(ret[i].reason)
    continue
  }
  apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}

// 启动服务器
await createServer()
logger.info(logger.red("-------------\ \ \ ٩(๑˃̵ᴗ˂̵)و / / /-------------"))
logger.info(logger.cyan.bold(" ________  ___  ___  ________  _________  ________  ________  _________"));
logger.info(logger.cyan.bold("|\\   ____\\|\\  \\|\\  \\|\\   __  \\|\\___   ___\\\\   ____\\|\\   __  \\|\\___   ___\\"));
logger.info(logger.cyan.bold("\\ \\  \\___|\\ \\  \\\\\\  \\ \\  \\|\\  \\|___ \\  \\_\\ \\  \\___|\\ \\  \\|\\  \\|___ \\  \\_|"));
logger.info(logger.cyan.bold(" \\ \\  \\    \\ \\   __  \\ \\   __  \\   \\ \\  \\ \\ \\  \\  __\\ \\   ____\\   \\ \\  \\"));
logger.info(logger.cyan.bold("  \\ \\  \\____\\ \\  \\ \\  \\ \\  \\ \\  \\   \\ \\  \\ \\ \\  \\|\\  \\ \\  \\___|    \\ \\  \\"));
logger.info(logger.cyan.bold("   \\ \\_______\\ \\__\\ \\__\\ \\__\\ \\__\\   \\ \\__\\ \\ \\_______\\ \\__\\        \\ \\__\\"));
logger.info(logger.cyan.bold("    \\|_______|\\|__|\\|__|\\|__|\\|__|    \\|__|  \\|_______|\\|__|         \\|__|"));
logger.info(`${chalk.red.bold('ChatGPT')}${chalk.yellow.bold('-')}${chalk.blue.bold('Plugin')}${chalk.cyan.bold('加载')}${chalk.green.bold('成功!')}`)
logger.info(`当前插件版本 ${chalk.green.bold(Config.version)}`)
logger.info(chalk.yellow.bold('仓库地址 https://github.com/ikechan8370/chatgpt-plugin'))
logger.info(chalk.cyan.bold('ChatGPT-Plugin交流群号 559567232'))
logger.info(logger.red("-------------\ \ \ ٩(๑˃̵ᴗ˂̵)و / / /-------------"))

export { apps }
