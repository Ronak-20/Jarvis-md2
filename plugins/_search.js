/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const { System, isPrivate, SearchPins, sendGitInfo, getIg } = require("../lib/");

System({
  pattern: "searchpin",
  fromMe: isPrivate,
  desc: "Search pinterest image",
  type: "search",
}, async (message, match) => {
  await SearchPins(message, match);
});

System({
  pattern: "github",
  fromMe: isPrivate,
  desc: "Fetch GitHub user information",
  type: "search",
},
async (message, match) => {
  await sendGitInfo(message, match);
});


System({
  pattern: 'ig ?(.*)',
  fromMe: isPrivate,
  desc: "Search Instagram Profile",
  type: "search",
}, async (message, match) => {
  await getIg(message, match);
});
