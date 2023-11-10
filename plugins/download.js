/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const { System, isPrivate, getSpotify, sendInsta } = require("../lib/");

System({
    pattern: "spotify",
    fromMe: isPrivate,
    desc: "Download Tracks from Spotify",
    type: "download",
  },
  async (message, match) => {
    await getSpotify(message, match)
  });

System({
  pattern: "insta",
  fromMe: isPrivate,
  desc: "Download Instagram media",
  type: "download",
}, async (message, match) => {
  await sendInsta(message, match);
});
