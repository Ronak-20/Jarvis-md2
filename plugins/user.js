/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const {
	System,
	parsedJid,
	isAdmin,
	updateProfilePicture,
} = require("../lib");
const {exec} = require("child_process");
const { WarnDB } = require("../lib/database");
const { WARN_COUNT } = require("../config");
const { saveWarn, resetWarn } = WarnDB;


System({
	pattern: "setpp",
	fromMe: true,
	desc: "Set profile picture",
	type: "user",
}, async (message, match, m) => {
	if (!message.reply_message.image)
	return await message.reply("_Reply to a photo_");
	let buff = await message.reply_message.download();
	await message.setPP(message.user.jid, buff);
	return await message.reply("_Profile Picture Updated_");
});

System({
	pattern: "jid",
	fromMe: true,
	desc: "Give jid of chat/user",
	type: "user",
}, async (message, match) => {
	return await message.send( message.mention.jid?.[0] || message.reply_message.jid || message.jid);
});

System({
	pattern: "pp$",
	fromMe: true,
	desc: "Set full screen profile picture",
	type: "user",
}, async (message, match) => {
	if (!message.reply_message.image)
	return await message.reply("_Reply to a photo_");
	let media = await message.reply_message.download();
	await updateProfilePicture(media, message, message.user.jid);
	return await message.reply("_Profile Picture Updated_");
});

System({
	pattern: "reboot",
	fromMe: true,
	desc: "to reboot your bot",
	type: "user",
}, async (message, match, m) => {
    await message.reply('_Rebooting..._')
    require('pm2').restart('index.js');
});

System({
    pattern: "dlt",
    fromMe: true,
    desc: "deletes a message",
    type: "user",
}, async (message) => {
    await message.client.sendMessage(message.chat, { delete: message.reply_message });
});


System({
    pattern: "lastseen", 
    fromMe: isPrivate,
    desc: "To change lastseen", 
    type: "user"
},
async (message, match) => {
    let updateType, responseMessage;

    switch (match) {
        case "everyone":
            updateType = "all";
            responseMessage = "_*Last seen update to everyone*_";
            break;
        case "nobody":
            updateType = "none";
            responseMessage = "_*Last seen update to nobody*_";
            break;
        case "my contacts except":
            updateType = "contact_blacklist";
            responseMessage = "_*Last seen update to my contacts except*_";
            break;
        case "my contacts":
            updateType = "contacts";
            responseMessage = "_*Last seen update to my contacts*_";
            break;
        default:
            await message.sendPoll(message.chat, "Choose one to update last seen", ["lastseen everyone", "lastseen nobody", "lastseen my contacts except", "lastseen my contacts"]);
            return;
    }

    await message.updateLastSeen(updateType);
    await message.reply(responseMessage);
});
