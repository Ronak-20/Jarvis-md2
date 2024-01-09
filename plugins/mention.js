const { System, mention } = require("../lib/");

System({
  pattern: 'mention',
  on: 'all',
  allowBot: true,
  fromMe: 'public',
  dontAddCommandList: true,
},
async (message, match) => {
  try {
    if (!message.mention.isOwner) {
      return;
    }
    return await mention(message, match);
  } catch (error) {
    console.error('Error in System setup:', error);
  }
});


System({
  pattern: 'mention ?(.*)',
  fromMe: true,
  desc: 'mention',
  type: 'user',
}, async (message, match) => {
  const msg = await getMention();
  if (match === 'get' && message.sudo.includes(message.sender)) {
    return await message.send(msg);
  } else if (match && message.sudo.includes(message.sender)) {
    await setMention(match);
    return await message.send('_Mention Updated_');
  }
  return await message.send("_You can check the format of mention https://github.com/Loki-Xer/Jarvis-md/wiki_");
});
