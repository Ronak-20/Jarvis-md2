/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const { System, isPrivate, sendInsta, youtube, yta } = require("../lib/");

System({
  pattern: "insta",
  fromMe: isPrivate,
  desc: "Download Instagram media",
  type: "downloader",
}, async (message, match) => {
  await sendInsta(message, match);
});

