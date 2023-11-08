/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/


const { System, isPrivate, sendNeko, sendWaifu } = require("../lib/");

System({
    pattern: "waifu",
    fromMe: isPrivate,
    desc: "Send a waifu image",
    type: "anime",
  },
  async (message, match) => {
    await sendWaifu(message)
  });


System({
    pattern: "neko",
    fromMe: isPrivate,
    desc: "Send Neko images",
    type: "anime",
  },
  async (message, match) => {
    await sendNeko(message)
  });
