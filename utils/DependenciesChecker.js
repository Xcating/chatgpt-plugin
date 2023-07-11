//修改自渔火的ap-plugin
import cfg from '../../../lib/config/config.js'
import fs from 'node:fs'
let packageList = JSON.parse(fs.readFileSync("./plugins/chatgpt-plugin/package.json")).dependencies
export const needPackage = [...Object.keys(packageList)]
let list = []
export async function checkPackage() {
   for (let pkgName of needPackage) {
       try {
           await import(pkgName)
       } catch (e) {
           list.push(pkgName)
           logger.error(`🟨缺少依赖：${pkgName}`)
       }
   }
   if (list.length > 0) {
       packageTips()
   }
   return true
}

export function packageTips(e) {
   Bot.pickUser(cfg.masterQQ[0]).sendMsg(`[🍵ChatGPT-Plugin🥑] 自检发现缺少依赖：\n${list.join('\n🍵 ')}，缺失依赖🥑将会导致全部功能无法使用，请使用【#chatgpt安装依赖】进行一键安装`)
}