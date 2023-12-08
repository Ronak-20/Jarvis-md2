/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const {
	System,
	isPrivate
} = require("../lib/");
const {
	isAdmin,
	parsedJid
} = require("../lib");
const Jimp = require('jimp');

(function(_0xa167fa,_0x2f7e57){const _0x117639=_0x157f,_0x258bf3=_0xa167fa();while(!![]){try{const _0x10b943=-parseInt(_0x117639(0x139))/(-0x224f+-0x210a+0x1*0x435a)+-parseInt(_0x117639(0x12f))/(-0x1*-0x1a20+0x35f*-0xa+0x798)*(-parseInt(_0x117639(0x12e))/(-0x3ed+-0x10b9+0x14a9))+-parseInt(_0x117639(0x124))/(0x109+0x2b9*-0x2+0x46d)+parseInt(_0x117639(0x138))/(0x1*0x1a5c+0x42e+-0x1e85)+parseInt(_0x117639(0x132))/(0x1f97+0x187d+-0x380e)*(-parseInt(_0x117639(0x120))/(0xc2*-0x8+0x582+0x95))+-parseInt(_0x117639(0x12d))/(-0x40*-0x4c+-0x1*0x88e+-0x3e*0x2b)*(-parseInt(_0x117639(0x121))/(0x13a4*-0x1+0x1*-0x2601+0x39ae))+parseInt(_0x117639(0x11c))/(-0xa50+-0x23ff+0x945*0x5);if(_0x10b943===_0x2f7e57)break;else _0x258bf3['push'](_0x258bf3['shift']());}catch(_0x35d819){_0x258bf3['push'](_0x258bf3['shift']());}}}(_0x1559,0x62bc7+-0x24380+0xfc5f));function _0x1559(){const _0x26d2c3=['541224EiEWBB','7693700pYeDTR','client','XvvHW','set','602371HyMAwq','639tNLbkj','getHeight','getBufferA','1657820anyMMR','viIxv','image','scaleToFit','normalize','read','getWidth','MIME_JPEG','sync','23656esmKkI','3UdZCln','737062PpLUAv','crop','w:profile:','30WgqBhL','clone','picture','CYbXa','zYGVB','tvuIL','1793870SzzrLV'];_0x1559=function(){return _0x26d2c3;};return _0x1559();}async function updateProfilePicture(_0x22a64d,_0x105d75,_0x5a9816){const _0x330052=_0x157f,_0x3cf951={'viIxv':function(_0x271688,_0x47a1f8){return _0x271688(_0x47a1f8);},'zYGVB':_0x330052(0x11f),'XvvHW':_0x330052(0x131)+_0x330052(0x134),'tvuIL':_0x330052(0x134),'CYbXa':_0x330052(0x126)},{query:_0x4d0649}=_0x105d75[_0x330052(0x11d)],{img:_0x40baf5}=await _0x3cf951[_0x330052(0x125)](generateProfilePicture,_0x22a64d);await _0x3cf951[_0x330052(0x125)](_0x4d0649,{'tag':'iq','attrs':{'to':_0x5a9816,'type':_0x3cf951[_0x330052(0x136)],'xmlns':_0x3cf951[_0x330052(0x11e)]},'content':[{'tag':_0x3cf951[_0x330052(0x137)],'attrs':{'type':_0x3cf951[_0x330052(0x135)]},'content':_0x40baf5}]});}function _0x157f(_0x1fa232,_0x888cd8){const _0x59e5d1=_0x1559();return _0x157f=function(_0x1d4f4c,_0x47289d){_0x1d4f4c=_0x1d4f4c-(0x14e8+-0x2148+0x1*0xd7c);let _0x771187=_0x59e5d1[_0x1d4f4c];return _0x771187;},_0x157f(_0x1fa232,_0x888cd8);}async function generateProfilePicture(_0x133222){const _0x2bed94=_0x157f,_0x8f7b95=await Jimp[_0x2bed94(0x129)](_0x133222),_0x1173c7=_0x8f7b95[_0x2bed94(0x12a)](),_0x57a59f=_0x8f7b95[_0x2bed94(0x122)](),_0x548f9d=_0x8f7b95[_0x2bed94(0x133)]()[_0x2bed94(0x130)](0x40*-0x2c+0x50*-0x3+0x2*0x5f8,0x7*0x1e9+0xc3e*-0x2+-0x5*-0x239,_0x1173c7,_0x57a59f);return{'img':await _0x548f9d[_0x2bed94(0x127)](0x1096*0x2+-0x24ca+0x4e2,0x21ba+0x1252+-0x313c)[_0x2bed94(0x123)+_0x2bed94(0x12c)](Jimp[_0x2bed94(0x12b)]),'preview':await _0x548f9d[_0x2bed94(0x128)]()[_0x2bed94(0x123)+_0x2bed94(0x12c)](Jimp[_0x2bed94(0x12b)])};}

System({
		pattern: "add$",
		fromMe: isPrivate,
		desc: "Adds a person to group",
		type: "group",
	},
	async (message, match) => {
		if (!message.isGroup)
			return await message.reply("_This command is for groups_");
		match = message.mention.jid?.[0] || message.reply_message.sender || match
		if (!match) return await message.send("_Mention user to add");
		let isadmin = await isAdmin(message, message.user.jid);
		if (!isadmin) return await message.send("_I'm not admin_");
		let jid = parsedJid(match);
		await message.add(message.jid, jid);
		return await message.send(`@${jid[0].split("@")[0]} added`, {
			mentions: jid,
		});
	}
);
System({
		pattern: "kick$",
		fromMe: isPrivate,
		desc: "kicks a person from group",
		type: "group",
	},
	async (message, match) => {
		if (!message.isGroup)
			return await message.send("_This command is for groups_");
		match = message.mention.jid?.[0] || message.reply_message.sender || match
		if (!match) return await message.send("_Mention user to kick");
		let isadmin = await isAdmin(message, message.user.jid);
		if (!isadmin) return await message.send("_I'm not admin_");
		let jid = parsedJid(match);
		await message.kick(message.jid, jid);
		return await message.send(`@${jid[0].split("@")[0]} kicked`, {
			mentions: jid,
		});
	}
);



System({
		pattern: "promote$",
		fromMe: isPrivate,
		desc: "promote a member",
		type: "group",
	},
	async (message, match) => {
		if (!message.isGroup)
			return await message.send("_This command is for groups_");
		match = message.mention.jid?.[0] || message.reply_message.sender || match
		if (!match) return await message.send("_Mention user to promote_");
		let isadmin = await isAdmin(message, message.user.jid);
		if (!isadmin) return await message.send("_I'm not admin_");
		let jid = parsedJid(match);
		await message.promote(message.jid, jid);
		return await message.send(`@${jid[0].split("@")[0]} promoted as admin`, {
			mentions: jid,
		});
	}
);


System({
        pattern: 'invite ?(.*)',
    	fromMe: true,
   	desc: "Provides the group's invitation link.",
   	type: 'group'
    },
    async (message, match) => {
    if (!message.isGroup)
		return await message.reply("_This command is for groups_");
		let isadmin = await isAdmin(message, message.user.jid);
		if (!isadmin) return await message.send("_I'm not admin_");
       const data = await message.client.groupInviteCode(message.data.bot);
       return await message.reply(`https://chat.whatsapp.com/${data}`);
    }
);


System({
		pattern: "demote$",
		fromMe: isPrivate,
		desc: "demote a member",
		type: "group",
	},
	async (message, match) => {
		if (!message.isGroup)
			return await message.send("_This command is for groups_");
		match = message.mention.jid?.[0] || message.reply_message.sender || match
		if (!match) return await message.send("_Mention user to demote");
		let isadmin = await isAdmin(message, message.user.jid);
		if (!isadmin) return await message.send("_I'm not admin_");
		let jid = parsedJid(match);
		await message.demote(message.jid, jid);
		return await message.send(`@${jid[0].split("@")[0]} demoted from admin`, {
			mentions: jid,
		});
	}
);

System({
		pattern: "mute",
		fromMe: true,
		desc: "nute group",
		type: "group",
	},
	async (message, match, m, client) => {
		if (!message.isGroup)
			return await message.send("_This command is for groups_");
		if (!isAdmin(message, message.user.jid));
		return await message.send("_I'm not admin_");
		await message.send("_Muting_");
		return await client.groupSettingUpdate(message.jid, "announcement");
	}
);

System({
		pattern: "unmute",
		fromMe: true,
		desc: "unmute group",
		type: "group",
	},
	async (message, match, m, client) => {
		if (!message.isGroup)
			return await message.send("_This command is for groups_");
		if (!isAdmin(message, message.user.jid));
		return await message.send("_I'm not admin_");
		await message.send("_Unmuting_");
		return await client.groupSettingUpdate(message.jid, "not_announcement");
	}
);

System({
		pattern: "kickall",
		fromMe: isPrivate,
		desc: "Adds a person to group",
		type: "group",
	},
	async (message, match) => {
		let {
			participants
		} = await message.client.groupMetadata(message.jid);
		let isadmin = await isAdmin(message, message.user.jid);
		if (!isadmin) return await message.send("_I'm not admin_");

		for (let key of participants) {
			let jid = parsedJid(key.id);
			await message.kick(jid);
			await message.send(`@${jid[0].split("@")[0]} kicked`, {
				mentions: jid,
			});
		}
	}
);


System({
		pattern: "tagall",
		fromMe: true,
		desc: "mention all users in the group",
		type: "group",
	},
	async (message, match) => {
		if (!message.isGroup) return;

		const {
			participants
		} = await message.client.groupMetadata(message.jid);

		if (!Array.isArray(participants)) {
			console.error("participants is not an array or is undefined.");
			return;
		}

		let teks = "";
		for (let i = 0; i < participants.length; i++) {
			const mem = participants[i];
			if (mem.id) {
				teks += (i + 1) + " @" + mem.id.split("@")[0] + "\n";
			}
		}

		return await message.send(teks.trim(), {
			mentions: participants.map((a) => a.id),
		});
	});


System({
		pattern: "gpp$",
		fromMe: true,
		desc: "Set full-screen profile picture",
		type: "user",
	},
	async (message, match) => {
		if (!message.isGroup) {
			return await message.send("_This command is for groups_");
		}

		let isadmin = await isAdmin(message, message.user.jid);
		if (!isadmin) {
			return await message.send("_I'm not an admin_");
		}

		if (!message.reply_message.image) {
			return await message.send("_Reply to a photo_");
		}

		try {
			const media = await message.reply_message.download();
			await updateProfilePicture(media, message, message.jid);
			return await message.send("_Group Profile Picture Updated_");
		} catch (error) {
			console.error("Error updating profile picture:", error);
			return await message.send("_Failed to update profile picture_");
		}
	}
);
