/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const fs = require('fs');
const ff = require('fluent-ffmpeg');
const {
	System,
	styletext,
	listall,
	tiny,
	isPrivate,
	sendAudio,
	webp2mp4,
	getBuffer,
	extractUrlFromMessage
} = require("../lib/");


System({
	pattern: "photo",
	fromMe: isPrivate,
	desc: "Sticker to Image",
	type: "converter",
}, async (message, match, m) => {
	if (!(message.reply_message.sticker)) {
		return await message.reply("_Reply to a photo_");
	}
	const buff = await message.reply_message.download();
	await message.send(buff, {}, "image");
});

System({
	pattern: "mp3",
	fromMe: isPrivate,
	desc: "mp3 converter",
	type: "converter",
}, async (message, match, m) => {
	await sendAudio(message, match, m);
});


System({
		pattern: "mp4",
		fromMe: isPrivate,
		desc: "Changes sticker to Video",
		type: "converter",
	},
	async (message, match, m) => {
		if (!(message.reply_message.sticker)) {
			return await message.reply("_Reply to sticker_");
		}
		let buff = await message.reply_message.download();
		let buffer = await webp2mp4(buff);
		return await message.send(buffer, {}, "video");
	});

System({
		pattern: "gif",
		fromMe: isPrivate,
		desc: "Changes sticker to Gif",
		type: "converter",
	},
	async (message, match, m) => {
		if (!(message.reply_message.sticker)) {
			return await message.reply("_Reply to sticker_");
		}
		let buff = await message.reply_message.download();
		let buffer = await webp2mp4(buff);
		return await message.send(buffer, {
			gifPlayback: true
		}, "video");
	});

System({
		pattern: "fancy",
		fromMe: isPrivate,
		desc: "converts text to fancy text",
		type: "converter",
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.text || !match || isNaN(match)) {
			let text = tiny(
				`Fancy text generator\n\nReply to a message\nExample: .fancy 32\n\n`
			);
			listall("Fancy").forEach((txt, num) => {
				text += `${(num += 1)} ${txt}\n`;
			});
			return await message.reply(text);
		} else {
			message.reply(styletext(message.reply_message.text, parseInt(match)));
		}
	});


System({
	pattern: 'black',
	fromMe: isPrivate,
	desc: 'make audio into black video',
	type: "converter"
}, async (message) => {
	try {
		const ffmpeg = ff();

		if (!message.reply_message.audio) return await message.send("_reply to audio message_");

		const file = './lib/system/media/black.jpg';

		const audioFile = './lib/system/media/audio.mp3';
		fs.writeFileSync(audioFile, await message.reply_message.download());

		ffmpeg.input(file);
		ffmpeg.input(audioFile);
		ffmpeg.output('./lib/system/media/videoMixed.mp4');

		ffmpeg.on('end', async () => {
			await message.send(fs.readFileSync('./lib/system/media/videoMixed.mp4'), {}, 'video');
		});

		ffmpeg.on('error', async (err) => {
			await message.reply(err);
		});

		ffmpeg.run();
	} catch (e) {
		return message.send(e);
	}
});