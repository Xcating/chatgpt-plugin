import { AbstractTool } from './AbstractTool.js'
import {Config} from "../config.js";

export class WeatherTool extends AbstractTool {
  name = 'weather'

  parameters = {
    properties: {
      city: {
        type: 'string',
        description: '要查询的地点'
      },
      targetGroupIdOrQQNumber: {
        type: 'string',
        description: 'Fill in the target user\'s qq number or groupId when you need to send avatar to specific user or group, otherwise leave blank'
      }
    },
    required: ['city']
  }

  func = async function (opts,e) {
    let { city , targetGroupIdOrQQNumber } = opts
    let img = segment.image(`http://api.caonm.net/api/qqtq/t?msg=${city}&key=9eEVLhmjy98VKTkg4jSuUo2vVO`)
    const target = isNaN(targetGroupIdOrQQNumber) || !targetGroupIdOrQQNumber
      ? e.isGroup ? e.group_id : e.sender.user_id
      : parseInt(targetGroupIdOrQQNumber.trim())
    let groupList = await Bot.getGroupList()
    console.log('SendWether', target, img)
    if (groupList.get(target)) {
      let group = await Bot.pickGroup(target)
      await group.sendMsg(img)
    }
    return `天气信息已经发送到目标群，你只需要告诉用户已经发了`
  }

  description = 'Useful when you want to query weather '
}
