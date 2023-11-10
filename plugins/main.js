/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const { System, isPrivate, tiny, sendMenu, runtime, take, sendSticker, takeExif, sendList, getvv } = require("../lib/");

System({
  pattern: "ping",
  fromMe: isPrivate,
  desc: "To check ping",
  type: "user",
}, async (message) => {
        const start = new Date().getTime();
        const ping = await message.send(tiny("*𝆺𝅥 running 𝆺𝅥*"));
        const end = new Date().getTime();
        return await ping.edit( "*☇ ꜱᴩᷨᴇͦᴇͭᴅ ☁ :* " + (end - start) + " *ᴍꜱ* ");
});

System({
    pattern: "menu",
    fromMe: isPrivate,
    desc: "Show All commands",
    dontAddCommandList: true,
    type: "user",
  },async (message, match) => {
    await sendMenu(message, match);
});

System({
        pattern: "runtime", 
        fromMe: isPrivate,
        desc: "To check runtime", 
        type: "user",
    }, async (message) => {
    const time = await runtime()
    await message.send(`_runtime ${time}_`)
});

System({
    pattern: "take",
    fromMe: isPrivate,
    desc: "Changes Exif data of stickers",
    type: "tool",
  },
  async (message, match, m) => {
     await take(message, match, m);
});

System({
    pattern: "sticker",
    fromMe: isPrivate,
    desc: "_Converts Photo or video to sticker_",
    type: "converter",
  },
  async (message, match, m) => {
    await sendSticker(message, match, m);
});

System({
        pattern: "exif", 
        fromMe: isPrivate,
        desc: "get exif data", 
        type: "tool",
    }, async (message, match, m) => {
  await takeExif(message, match, m);
});

System({
        pattern: "vv", 
        fromMe: true,
        desc: "get view ones message", 
        type: "user",
    }, async (message, match, m) => {
  await getvv(message, match, m);
});

System({
    pattern: "list",
    fromMe: isPrivate,
    desc: "Show All commands",
    type:"user",
    dontAddCommandList: true,
  },
  async (message, match, { prefix }) => {
    await sendList(message, match, { prefix });
});
