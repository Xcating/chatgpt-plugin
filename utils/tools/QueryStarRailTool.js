import { AbstractTool } from './AbstractTool.js'

export class QueryStarRailTool extends AbstractTool {
  name = 'queryStarRail'

  parameters = {
    properties: {
      qq: {
        type: 'string',
        description: '要查询的用户的qq号，将使用该qq号绑定的uid进行查询，默认为当前聊天对象'
      },
      uid: {
        type: 'string',
        description: '游戏的uid，如果用户提供了则传入并优先使用'
      },
      character: {
        type: 'string',
        description: '游戏角色名'
      }
    },
    required: ["character"]
  }

  func = async function (opts, e) {
    let { qq, uid, character } = opts
    qq = isNaN(qq) || !qq ? e.sender.user_id : parseInt(qq.trim())
    if (e.at === e.bot.uin) {
      e.at = null
    }
    e.atBot = false

    if (!uid) {
      try {
        let { Panel } = await import('../../../StarRail-plugin/apps/panel.js')
        uid = await redis.get(`STAR_RAILWAY:UID:${qq}`)
        if (!uid) {
          return '用户没有绑定uid，无法查询。可以让用户主动提供uid进行查询'
        }
      } catch (e) {
        // todo support miao-plugin and sruid
        return '未安装StarRail-Plugin，无法查询'
      }
    }
    try {
      let { Panel } = await import('../../../StarRail-plugin/apps/panel.js')
      e.msg = character ? `*${character}面板${uid}` : '*更新面板' + uid
      e.user_id = qq
      e.isSr = true
      let panel = new Panel(e)
      panel.e = e
      panel.panel(e).catch(e => logger.warn(e))
      //let uidRes = await fetch('https://avocado.wiki/v1/info/' + uid)
      //luidRes = await uidRes.json()
      //llet { assistAvatar, displayAvatars } = uidRes.playerDetailInfo
      //lfunction dealAvatar (avatar) {
      //l  delete avatar.position
      //l  delete avatar.vo_tag
      //l  delete avatar.desc
      //l  delete avatar.promption
      //l  delete avatar.relics
      //l  delete avatar.behaviorList
      //l  delete avatar.images
      //l  delete avatar.ranks
      //l  if (avatar.equipment) {
      //l    avatar.equipment = {
      //l      level: avatar.equipment.level,
      //l      rank: avatar.equipment.rank,
      //l      name: avatar.equipment.name,
      //l      skill_desc: avatar.equipment.skill_desc
      //l    }
      //l  }
      //l}
      //ldealAvatar(assistAvatar)
      //lif (displayAvatars) {
      //l  displayAvatars.forEach(avatar => {
      //l    dealAvatar(avatar)
      //l  })
      //l}
      //luidRes.playerDetailInfo.assistAvatar = assistAvatar
      //luidRes.playerDetailInfo.displayAvatars = displayAvatars
      //ldelete uidRes.repository
      //ldelete uidRes.version
      return `The panel has already been sent to the group`
    } catch (err) {
      return `failed to query, error: ${err.toString()}`
    }
  }

  description = 'Useful when you want to query player information of Honkai Star Rail(崩坏：星穹铁道). '
}
