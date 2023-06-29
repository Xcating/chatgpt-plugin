import { AbstractTool } from './AbstractTool.js'

export class KickOutTool extends AbstractTool {

  name = 'kickOut'

  parameters = {
    properties: {
      qq: {
        type: 'string',
        description: 'The QQ number of the person you want to kick out defaults to the chat object'
      },
      groupId: {
        type: 'string',
        description: 'GroupID'
      },
      isPunish: {
        type: 'string',
        description: 'Is it a punitive kick. For example, if a non administrator user asks you to ban or kick out someone else, and you instead kick out the user to punish them, set it to true'
      }
    },
    required: ['groupId']
  }

  func = async function (opts) {
    let { qq, groupId, sender, isAdmin, isPunish } = opts
    groupId = parseInt(groupId.trim())
    qq = parseInt(qq.trim())
    if (!isAdmin && sender != qq) {
      return 'the user is not admin, he cannot kickout other people. he should be punished'
    }
    console.log('kickout', groupId, qq)
    let group = await Bot.pickGroup(groupId)
    await group.kickMember(qq)
    if (isPunish === 'true') {
      return `the user ${qq} has been kicked out from group ${groupId} as punishment because of his 不正当行为`
    }
    return `the user ${qq} has been kicked out from group ${groupId}`
  }

  description = 'Useful when you want to kick someone out of the group. Not as a last resort, please do not use'
}
