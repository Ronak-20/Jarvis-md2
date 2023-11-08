/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const { System, isPrivate, LokiXer } = require("../lib/");
const config = require('../config');

System({
    pattern: "wm",
    fromMe: isPrivate,
    desc: "wame generator",
    type: "misc",
  },
  async (message, match) => {
let sender = 'https://wa.me/' + (message.reply_message.sender || message.mention[0] || message.text).split('@')[0];
await message.reply(sender);
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
      await message.send("_making text into attp it take upto 1 minute_");
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
  pattern: "ss",
  fromMe: isPrivate,
  desc: "taking website screenshot",
  type: "tool",
}, async (message, match) => {
  try {
    match = match || (message.reply_message && message.reply_message.text);
    if (!match) {
      return await message.reply("_Give me a web URL eg: https://lokiser.xyz/_");
    } else if (match.startsWith("https")) {
      const ss = await LokiXer(`ssweb?link=${match}`);
      return await message.client.sendMessage(message.chat, { image: { url: ss } });
    } else {
      return await message.reply("_Give me a web URL starting with 'https' eg: https://lokiser.xyz/_");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    await message.reply("An error occurred while fetching the API data.");
  }
});


System({
        pattern: "tinyurl",
        fromMe: isPrivate,
        desc: "To get URL short",
        type: "misc",
    },
    async (message, match) => {
        try {
            match = match || message.reply_message.text;
            if (!match) {
                return await message.reply("_Give me a URL, e.g., https://lokiser.xyz._");
            } else if (match.startsWith("https")) {
                const bb = await LokiXer(`tinyurl?link=${match}`);
                const { result } = await getJson(bb);
                return await message.send(`_${result}_`);
            } else {
                return await message.reply("_Invalid URL format. It should start with 'https'._");
            }
        } catch (error) {
            console.error("An error occurred:", error);
            return await message.reply("_An error occurred while shortening the URL._");
        }
    }
);


System({
    pattern: 'whois ?(.*)',
    type: 'user',
    desc: 'to find how is'
}, async (message, match) => {
function _0x199d(_0x396c71,_0x47ef3b){const _0x4286d6=_0x1e90();return _0x199d=function(_0x5a300b,_0x2099ee){_0x5a300b=_0x5a300b-(0x3a1+-0x10b6+0x2b9*0x5);let _0x1d0c68=_0x4286d6[_0x5a300b];return _0x1d0c68;},_0x199d(_0x396c71,_0x47ef3b);}function _0x1e90(){const _0xb3ba86=['mention','replace','380333cPliSp','1638060keHKnj','split','client','t\x20Date\x20:*\x20','31032VigDkJ','image','810NxDsbR','\x20:*\x20','@s.whatsap','reply_mess','\x0a*About\x20Se','https://i.','send','numeric','long','\x0a*About\x20:*','er!','status','16373zOyXhm','toLocaleSt','Failed','.me/','ring','profilePic','8542120TAORJy','fetchStatu','2kdEUGK','b3hlzl5.jp','_Need\x20a\x20Us','en-US','text','80pmjQZP','https://wa','2714816VzsSFk','age','1494639RELiMS','\x0a*whatsapp','setAt','sender','imgur.com/','tureUrl','*Name\x20:*\x20@','p.net'];_0x1e90=function(){return _0xb3ba86;};return _0x1e90();}const _0x5581ff=_0x199d;(function(_0x2ebdad,_0x59d658){const _0x336e57=_0x199d,_0x2f85a8=_0x2ebdad();while(!![]){try{const _0x18c426=-parseInt(_0x336e57(0x9b))/(0x1*-0x242b+-0x47*0x2d+0x30a7)*(-parseInt(_0x336e57(0x88))/(-0x1*-0xdc4+0x2355+0x3*-0x105d))+parseInt(_0x336e57(0xa0))/(0x1ae1+-0x1e1b+0x1*0x33d)*(parseInt(_0x336e57(0x8d))/(-0x23bd+-0x1e3a+0x41fb))+parseInt(_0x336e57(0x9c))/(0x146c+0xa6c+-0x1ed3)+parseInt(_0x336e57(0xa2))/(0xb+-0x93e+-0x1*-0x939)*(parseInt(_0x336e57(0xae))/(0x1d5*0x9+0xfbc+0x1a*-0x13d))+-parseInt(_0x336e57(0x8f))/(-0x21*0xd+0x220f+-0x205a)+parseInt(_0x336e57(0x91))/(-0x1d37+0x497*0x6+0x6*0x49)+-parseInt(_0x336e57(0xb4))/(-0x1edb+-0x18e1+0x37c6);if(_0x18c426===_0x59d658)break;else _0x2f85a8['push'](_0x2f85a8['shift']());}catch(_0xed3211){_0x2f85a8['push'](_0x2f85a8['shift']());}}}(_0x1e90,0x90*-0x6b5+0xe2bb+0x5fc6e));try{let user=message[_0x5581ff(0xa5)+_0x5581ff(0x90)][_0x5581ff(0x94)]||match[_0x5581ff(0x9a)](/[^0-9]/g,'')+(_0x5581ff(0xa4)+_0x5581ff(0x98)),pp;if(!user)return message[_0x5581ff(0xa8)](_0x5581ff(0x8a)+_0x5581ff(0xac));try{pp=await message[_0x5581ff(0x9e)][_0x5581ff(0xb3)+_0x5581ff(0x96)](user,_0x5581ff(0xa1));}catch{pp=_0x5581ff(0xa7)+_0x5581ff(0x95)+_0x5581ff(0x89)+'g';}let status=await message[_0x5581ff(0x9e)][_0x5581ff(0xb5)+'s'](user);const date=new Date(status[_0x5581ff(0x93)]),options={'year':_0x5581ff(0xa9),'month':_0x5581ff(0xaa),'day':_0x5581ff(0xa9),'hour':_0x5581ff(0xa9),'minute':_0x5581ff(0xa9),'second':_0x5581ff(0xa9)};let wm=_0x5581ff(0x8e)+_0x5581ff(0xb1)+(message[_0x5581ff(0xa5)+_0x5581ff(0x90)][_0x5581ff(0x94)]||message[_0x5581ff(0x99)][-0x235f*0x1+-0x1*-0x1e15+-0x2*-0x2a5]||message[_0x5581ff(0x8c)])[_0x5581ff(0x9d)]('@')[-0x3a*-0x9+-0x303*0x3+-0x3*-0x255],nu=''+(message[_0x5581ff(0xa5)+_0x5581ff(0x90)][_0x5581ff(0x94)]||message[_0x5581ff(0x99)][-0x203d+0x8f8+0x7*0x353]||message[_0x5581ff(0x8c)])[_0x5581ff(0x9d)]('@')[-0x1*0xdbe+0xb61+0x25d];const setAt=date[_0x5581ff(0xaf)+_0x5581ff(0xb2)](_0x5581ff(0x8b),options);await message[_0x5581ff(0xa8)]({'url':pp},{'caption':_0x5581ff(0x97)+user[_0x5581ff(0x9a)](/[^0-9]/,'')+(_0x5581ff(0xab)+'\x20')+status[_0x5581ff(0xad)]+(_0x5581ff(0xa6)+_0x5581ff(0x9f))+setAt+(_0x5581ff(0x92)+_0x5581ff(0xa3))+wm,'quoted':message},_0x5581ff(0xa1));}catch(_0x9b04e2){return await message[_0x5581ff(0xa8)](_0x5581ff(0xb0));}
});
