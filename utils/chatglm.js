import { Config } from "./config.js";
let v4;
let fetch;
let uuidv4;
try {
  v4 = (await import("uuid")).default;
  uuidv4 = v4;
  fetch = (await import("node-fetch")).default;
} catch (e) {
  console.warn("未安装delay，请发送指令#chatgpt安装依赖");
}
async function getKeyv() {
  let Keyv;
  try {
    Keyv = (await import("keyv")).default;
  } catch (error) {
    throw new Error("keyv依赖未安装，请使用pnpm install keyv安装");
  }
  return Keyv;
}

export default class ChatGLMClient {
  constructor(opts) {
    // user: qq号
    this.opts = opts;
  }

  async initCache() {
    if (!this.conversationsCache) {
      const cacheOptions = this.opts.cache || {};
      cacheOptions.namespace = cacheOptions.namespace || "chatglm";
      let Keyv = await getKeyv();
      this.conversationsCache = new Keyv(cacheOptions);
    }
  }

  async sendMessage(prompt, opts) {
    const {
      conversationId = uuidv4(),
      messageId = uuidv4(),
      parentMessageId,
      temperature = Math.max(Config.temperature, 1),
    } = opts;
    await this.initCache();
    let url = Config.chatglmBaseUrl + "/api/chat";
    if (Config.debug) {
      logger.info("use chatglm api server endpoint: " + url);
    }
    const conversationKey = `ChatGLMUser_${this.opts.user}`;
    const conversation = (await this.conversationsCache.get(
      conversationKey
    )) || {
      messages: [],
      createdAt: Date.now(),
    };
    let history = getMessagesForConversation(
      conversation.messages,
      parentMessageId
    );
    if (Config.debug) {
      logger.info(history);
    }
    console.log(history);
    let option = {
      method: "POST",
      body: JSON.stringify({
        prompt,
        temperature,
        history,
      }),
      headers: {
        "content-type": "application/json",
        library: "chatgpt-plugin",
      },
    };
    let response = await fetch(url, option);
    let result = await response.text();
    try {
      result = JSON.parse(result);
      conversation.messages.push({
        id: messageId,
        role: "user",
        content: prompt,
        parentMessageId,
      });
      let responseId = uuidv4();
      conversation.messages.push({
        id: responseId,
        role: "AI",
        content: result.data,
        parentMessageId: messageId,
      });
      await this.conversationsCache.set(conversationKey, conversation);
      return {
        conversationId,
        id: responseId,
        text: result.data,
      };
    } catch (e) {
      console.error(result);
      throw new Error(result);
    }
  }
}

function getMessagesForConversation(messages, parentMessageId) {
  const orderedMessages = [];
  let currentMessageId = parentMessageId;
  while (currentMessageId) {
    const message = messages.find((m) => m.id === currentMessageId);
    if (!message) {
      break;
    }
    orderedMessages.unshift(message);
    currentMessageId = message.parentMessageId;
  }

  return orderedMessages;
}
