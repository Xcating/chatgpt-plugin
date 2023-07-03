import fetch from 'node-fetch'
import {Config} from "./config.js";
export async function createCaptcha (e, tokenU) {
  let baseUrl = Config.sydneyReverseProxy
  let imageResponse = await fetch(`${baseUrl}/edgesvc/turing/captcha/create`, {
    headers: {
      Cookie: `_U=${tokenU};`
    }
  })
  const blob = await imageResponse.blob()
  let id = imageResponse.headers.id
  const arrayBuffer = await blob.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const base64String = buffer.toString('base64')
  // await e.reply(segment.image(base64String))
  return { id, image: base64String }
}

export async function solveCaptcha (id, text, token) {
  let baseUrl = Config.sydneyReverseProxy
  let url = `${baseUrl}/edgesvc/turing/captcha/verify?type=visual&id=${id}&regionId=1&value=${text}`
  let res = await fetch(url, {
    headers: {
      Cookie: '_U=' + token
    }
  })
  res = await res.json()
  if (res.solved) {
    return {
      result: true,
      detail: res
    }
  } else {
    return {
      result: false,
      detail: res
    }
  }
}