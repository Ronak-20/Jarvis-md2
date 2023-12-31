/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const {
  isUrl,
  Bitly,
  System,
  LokiXer,
  isPrivate,
} = require("../lib/");
const config = require('../config');


System({
        pattern: "wm",
	fromMe: isPrivate,
	desc: "wame generator",
	type: "misc",
},async (message, match) => {
	let sender = 'https://wa.me/' + (message.reply_message.sender || message.mention[0] || message.text).split('@')[0];
	await message.reply(sender);
});


System({
    pattern: "save", 
    fromMe: true,
    desc: "used to save messages", 
    type: "misc",
},
async (message, match) => {
    if (!message.reply_message) {
        return;
    } else {
        await message.forward(message.dm, message.reply_message, { quoted: message.data });
    }
});


System({
    pattern: "attp",
    fromMe: isPrivate,
    desc: "Text to animated sticker",
    type: "converter",
}, async (message, match) => {
    try {
        match = match || (message.reply_message && message.reply_message.text);

        if (!match) {
            return await message.reply("_Give me some text_");
        } else {
            await message.send("_making text into attp, it may take up to 1 minute_");
            const buff = await LokiXer(`attp?text=${encodeURIComponent(match)}`);
            const stickerPackNameParts = config.STICKER_PACKNAME.split(";");
            const packname = stickerPackNameParts[0];
            const author = stickerPackNameParts[1];
            await message.send(buff, { packname, author }, "sticker");
        }
    } catch (error) {
        console.error("An error occurred:", error);
        await message.reply("An error occurred while fetching the API data.");
    }
});


System({
    pattern: "attp",
    fromMe: isPrivate,
    desc: "Text to animated sticker",
    type: "converter",
}, async (message, match) => {
    try {
        match = match || (message.reply_message && message.reply_message.text);

        if (!match) {
            return await message.reply("_Give me some text_");
        } else {
            await message.send("_making text into attp, it may take up to 1 minute_");
            const buff = await LokiXer(`attp?text=${encodeURIComponent(match)}`);
            const stickerPackNameParts = config.STICKER_PACKNAME.split(";");
            const packname = stickerPackNameParts[0];
            const author = stickerPackNameParts[1];
            await message.send(buff, { packname, author }, "sticker");
        }
    } catch (error) {
        console.error("An error occurred:", error);
        await message.reply("An error occurred while fetching the API data.");
    }
});


System({
    pattern: "bitly",
    fromMe: isPrivate,
    desc: "To get URL short",
    type: "misc",
}, async (message, match) => {
    try {
        match = match || (message.reply_message && message.reply_message.text);

        if (!match) {
            return await message.reply("_Reply to a URL or enter a URL_");
        }

        if (!isUrl(match)) {
            return await message.reply("_Not a valid URL_");
        }

        let short = await Bitly(match);
        return await message.reply(short.link);
    } catch (error) {
        console.error("An error occurred:", error);
        return await message.reply("_An error occurred while shortening the URL._");
    }
});


System({
    pattern: 'whois ?(.*)',
    type: 'user',
    desc: 'to find how is'
}, async (message, match) => {
    try {
        let user = message.reply_message?.sender || (match ? match.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null);
        if (!user) {
            return message.send('_Need a User!');
        }

        let pp;
        try {
            pp = await message.client.profilePictureUrl(user, 'image');
        } catch {
            pp = 'https://i.imgur.com/b3hlzl5.jpg';
        }

        let status = await message.client.fetchStatus(user);
        const date = new Date(status.setAt);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };

        let wm = 'https://wa.me/' + user.split('@')[0];
        const setAt = date.toLocaleString('en-US', options);

        await message.send({
            url: pp
        }, {
            caption: `*Name :* @${user.replace(/[^0-9]/g, '')}\n*About :* ${status.status}\n*About Set Date :* ${setAt}\n*whatsapp :* ${wm}`,
            quoted: message
        },
        'image');
    } catch (e) {
        console.error('An error occurred:', e);
        return await message.send('Failed');
    }
});
