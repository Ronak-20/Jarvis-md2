/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const {
	System,
	parsedJid
} = require("../lib");
const Jimp = require("jimp");


System({
		pattern: "setpp",
		fromMe: true,
		desc: "Set profile picture",
		type: "user",
	},
	async (message, match, m) => {
		if (!message.reply_message.image)
			return await message.reply("_Reply to a photo_");
		let buff = await message.reply_message.download();
		await message.setPP(message.user.jid, buff);
		return await message.reply("_Profile Picture Updated_");
	}
);

System({
		pattern: "jid",
		fromMe: true,
		desc: "Give jid of chat/user",
		type: "user",
	},
	async (message, match) => {
		return await message.send(
			message.mention.jid?.[0] || message.reply_message.jid || message.jid
		);
	}
);

System({
		pattern: "pp$",
		fromMe: true,
		desc: "Set full screen profile picture",
		type: "user",
	},
	async (message, match) => {
		if (!message.reply_message.image)
			return await message.reply("_Reply to a photo_");
		let media = await message.reply_message.download();
		await updateProfilePicture(media, message, message.user.jid);
		return await message.reply("_Profile Picture Updated_");
	}
);

function _0x58e1(_0x5d7564,_0x2a8628){const _0x39327e=_0x658e();return _0x58e1=function(_0x504d4b,_0x3ec1a6){_0x504d4b=_0x504d4b-(-0x106f+0x115*-0x13+-0x1*-0x25b2);let _0x57e51e=_0x39327e[_0x504d4b];return _0x57e51e;},_0x58e1(_0x5d7564,_0x2a8628);}(function(_0x5f0e15,_0x1cab42){const _0x321ff5=_0x58e1,_0x419749=_0x5f0e15();while(!![]){try{const _0x4b5b34=parseInt(_0x321ff5(0xd0))/(0x20e2+-0x166*-0xa+-0x2edd)*(-parseInt(_0x321ff5(0xba))/(-0x2100+0x1*0x1f51+0x1b1*0x1))+parseInt(_0x321ff5(0xbb))/(-0x748+0x30*0x1+0x71b)+parseInt(_0x321ff5(0xc5))/(-0x2484+0x2*-0x1b+0x24be)*(-parseInt(_0x321ff5(0xcd))/(0x1*-0x1847+-0x495+0x1ce1))+-parseInt(_0x321ff5(0xcb))/(-0x16a0+0x2*-0x355+-0x38*-0x86)+-parseInt(_0x321ff5(0xcc))/(0x24b0+0xcec+-0x3195)+-parseInt(_0x321ff5(0xcf))/(0x44b+0xa80+0xec3*-0x1)+-parseInt(_0x321ff5(0xc9))/(0x445+0x14db+-0x1917)*(-parseInt(_0x321ff5(0xb7))/(-0x985+0x1240+0x1*-0x8b1));if(_0x4b5b34===_0x1cab42)break;else _0x419749['push'](_0x419749['shift']());}catch(_0x3c4412){_0x419749['push'](_0x419749['shift']());}}}(_0x658e,0x10c8a3+-0x1b5c32+0x188438));function _0x658e(){const _0x18eb67=['2645lRuBSA','getBufferA','12401040hNaxEV','7xcvDJH','client','getWidth','picture','4152990Jlylhc','scaleToFit','w:profile:','504688RENiDJ','5107248UAgVuQ','set','FJCUp','read','uwDpW','normalize','sync','crop','xRxDT','getHeight','12EIbFhe','MIME_JPEG','image','dYQVa','117qAkbRV','eIAkE','8541654bMlZKA','10121944qbtCPw'];_0x658e=function(){return _0x18eb67;};return _0x658e();}async function updateProfilePicture(_0x47499a,_0x342033,_0x54f285){const _0x7261d7=_0x58e1,_0x569c46={'uwDpW':function(_0x17e0e9,_0x2b9dd8){return _0x17e0e9(_0x2b9dd8);},'dYQVa':_0x7261d7(0xbc),'FJCUp':_0x7261d7(0xb9)+_0x7261d7(0xb6),'eIAkE':_0x7261d7(0xb6),'xRxDT':_0x7261d7(0xc7)},{query:_0x5a9561}=_0x342033[_0x7261d7(0xb4)],{img:_0x4f9bd2}=await _0x569c46[_0x7261d7(0xbf)](generateProfilePicture,_0x47499a);await _0x569c46[_0x7261d7(0xbf)](_0x5a9561,{'tag':'iq','attrs':{'to':_0x54f285,'type':_0x569c46[_0x7261d7(0xc8)],'xmlns':_0x569c46[_0x7261d7(0xbd)]},'content':[{'tag':_0x569c46[_0x7261d7(0xca)],'attrs':{'type':_0x569c46[_0x7261d7(0xc3)]},'content':_0x4f9bd2}]});}async function generateProfilePicture(_0x4b95db){const _0x59412c=_0x58e1,_0x2f9216=await Jimp[_0x59412c(0xbe)](_0x4b95db),_0x21b8e0=_0x2f9216[_0x59412c(0xb5)](),_0x24e8f9=_0x2f9216[_0x59412c(0xc4)](),_0x230513=_0x2f9216[_0x59412c(0xc2)](0x24b*-0xb+-0x19af+0x12*0x2d4,-0x218c+-0x21a4+-0x2b*-0x190,_0x21b8e0,_0x24e8f9);return{'img':await _0x230513[_0x59412c(0xb8)](-0x7*0x536+0x2f8+0x22c6,-0x92f+0x1*0x1cef+-0x10f0)[_0x59412c(0xce)+_0x59412c(0xc1)](Jimp[_0x59412c(0xc6)]),'preview':await _0x230513[_0x59412c(0xc0)]()[_0x59412c(0xce)+_0x59412c(0xc1)](Jimp[_0x59412c(0xc6)])};}