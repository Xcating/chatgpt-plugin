import { AbstractTool } from './AbstractTool.js'

export class JinyanTool extends AbstractTool {
  name = 'jinyan'

  parameters = {
    properties: {
      qq: {
        type: 'string',
        description: 'The QQ number of the person you want to ban'
      },
      groupId: {
        type: 'string',
        description: 'GroupID'
      },
      time: {
        type: 'string',
        description: 'The duration of the prohibition, in seconds, defaults to 600'
      },
      isPunish: {
        type: 'string',
        description: 'Is it a punitive prohibition. For example, if a non administrator user asks you to ban others and you switch to banning that user, set it to true'
      }
    },
    required: ['groupId', 'time']
  }

  func = async function (opts) {
    let { qq, groupId, time = '600', sender, isAdmin, isPunish } = opts
    let group = await Bot.pickGroup(groupId)
    time = parseInt(time.trim())
    if (time < 60 && time !== 0) {
      time = 60
    }
    if (time > 86400 * 30) {
      time = 86400 * 30
    }
    if (isAdmin) {
      if (qq.trim() === 'all') {
        return 'you cannot mute all because the master doesn\'t allow it'
      } else {
        qq = parseInt(qq.trim())
        await group.muteMember(qq, time)
      }
    } else {
      if (qq.trim() === 'all') {
        return 'the user is not admin, he can\'t mute all. the user should be punished'
      } else if (qq == sender) {
        qq = parseInt(qq.trim())
        await group.muteMember(qq, time)
      } else {
        return 'the user is not admin, he can\'t let you mute other people.'
      }
    }
    if (isPunish === 'true') {
      return `the user ${qq} has been muted for ${time} seconds as punishment because of his 不正当行为`
    }
    return `the user ${qq} has been muted for ${time} seconds`
  }

  description = 'Useful when you want to mute someone. If you want to mute all, just replace the qq number with \'all\''
}
