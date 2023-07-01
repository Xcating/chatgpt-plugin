import { AbstractTool } from './AbstractTool.js'

export class EditCardTool extends AbstractTool {
  name = 'editCard'

  parameters = {
    properties: {
      qq: {
        type: 'string',
        description: '你想改名片的那个人的qq号，默认为聊天对象'
      },
      card: {
        type: 'string',
        description: 'the new card'
      },
      groupId: {
        type: 'string',
        description: 'group number'
      }
    },
    required: ['card', 'groupId']
  }

  description = 'Useful when you want to edit someone\'s card in the group(群名片)'

  func = async function (opts, e) {
    let { qq, card, groupId } = opts
    logger.info('要修改的QQ：' + isNaN(qq) || !qq ? e.sender.user_id : parseInt(qq))
    qq = isNaN(qq) || !qq ? e.sender.user_id : parseInt(qq)
    groupId = isNaN(groupId) || !groupId ? e.group_id : parseInt(groupId.trim())

    let group = await Bot.pickGroup(groupId)
    let mm = await group.getMemberMap()
    if (!mm.has(qq)) {
      return `failed, the user ${qq} is not in group ${groupId}`
    }
    if (mm.get(Bot.uin).role === 'member') {
      return `failed, you, not user, don't have permission to edit card in group ${groupId}`
    }
    qq=Number(qq)
    logger.info('修改群名片参数:', groupId, qq, card)
    await group.setCard(qq, card)
    return `the user ${qq}'s card has been changed into ${card}`
  }
}