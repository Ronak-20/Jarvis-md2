/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const Jimp = require("jimp")
const { exec } = require("child_process");
const { System, parsedJid } = require("../lib");


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
  });


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
  });


System({
    pattern: "restart",
    fromMe: true,
    type: "user",
    desc: "restart your bot",
  },
  async (message) => {
await message.send("Restarting...");
    exec("pm2 restart all", (error, stdout, stderr) => {
      if (error) {
        return message.send(`Error: ${error}`);
      }
      return;
    });
  });


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
    await updateProfilePicture(media, message,message.user.jid);
    return await message.reply("_Profile Picture Updated_");
  });


function _0x3c95(){const _0x561110=['getBufferA','getWidth','sync','read','1785144eckNRW','picture','1489LaOJVl','iApFZ','scaleToFit','MIME_JPEG','crop','IoGte','7760nmGfwS','32evVDPF','411942jSJKdN','set','image','1006WgllZj','client','1541897qkkoTM','hkOLn','517554WDFkDV','normalize','yjOXQ','w:profile:','23103470gJuVii','76psboFr','ZqRVW','getHeight'];_0x3c95=function(){return _0x561110;};return _0x3c95();}(function(_0x1285b7,_0x3f6dc4){const _0x370ee5=_0x54ce,_0x3d35f0=_0x1285b7();while(!![]){try{const _0xfe740a=-parseInt(_0x370ee5(0xba))/(0x1*0xbd9+0x1*0x26fd+-0x8f*0x5b)*(parseInt(_0x370ee5(0xc5))/(0x133e+0x2ba+-0x15f6))+-parseInt(_0x370ee5(0xd5))/(0x6fb*-0x1+-0xaf2+0x2*0x8f8)+parseInt(_0x370ee5(0xce))/(-0xd66+-0x18b+0xef5)*(-parseInt(_0x370ee5(0xc0))/(-0x1*-0x7+0x1d3f+-0x1d41))+-parseInt(_0x370ee5(0xc2))/(0x34f+0x1b6+-0x4ff)+-parseInt(_0x370ee5(0xc7))/(-0x1d56+0x91*0x8+0x18d5)+-parseInt(_0x370ee5(0xc1))/(-0x94c+0xc97+0x5*-0xa7)*(parseInt(_0x370ee5(0xc9))/(-0x38*-0x2e+-0x46*-0x7f+-0x39*0xc9))+parseInt(_0x370ee5(0xcd))/(0x3*-0x632+0x7+0x1299);if(_0xfe740a===_0x3f6dc4)break;else _0x3d35f0['push'](_0x3d35f0['shift']());}catch(_0x4cf425){_0x3d35f0['push'](_0x3d35f0['shift']());}}}(_0x3c95,0x51743+0x4c742+-0x37e21));async function updateProfilePicture(_0x13db5d,_0x5062cf,_0x54452b){const _0x1477e7=_0x54ce,_0x20ee13={'IoGte':function(_0x254853,_0x509836){return _0x254853(_0x509836);},'iApFZ':_0x1477e7(0xc3),'hkOLn':_0x1477e7(0xcc)+_0x1477e7(0xd6),'ZqRVW':_0x1477e7(0xd6),'yjOXQ':_0x1477e7(0xc4)},{query:_0xfabcb4}=_0x5062cf[_0x1477e7(0xc6)],{img:_0x132680}=await _0x20ee13[_0x1477e7(0xbf)](generateProfilePicture,_0x13db5d);await _0x20ee13[_0x1477e7(0xbf)](_0xfabcb4,{'tag':'iq','attrs':{'to':_0x54452b,'type':_0x20ee13[_0x1477e7(0xbb)],'xmlns':_0x20ee13[_0x1477e7(0xc8)]},'content':[{'tag':_0x20ee13[_0x1477e7(0xcf)],'attrs':{'type':_0x20ee13[_0x1477e7(0xcb)]},'content':_0x132680}]});}function _0x54ce(_0x2135ca,_0xfc137b){const _0x2635cf=_0x3c95();return _0x54ce=function(_0x49c1b8,_0x474e6e){_0x49c1b8=_0x49c1b8-(0x2c3*0x6+-0x1*0x13ea+0x412);let _0x2d4414=_0x2635cf[_0x49c1b8];return _0x2d4414;},_0x54ce(_0x2135ca,_0xfc137b);}async function generateProfilePicture(_0x53b400){const _0x47e16c=_0x54ce,_0x21ad99=await Jimp[_0x47e16c(0xd4)](_0x53b400),_0x199c0a=_0x21ad99[_0x47e16c(0xd2)](),_0x1524be=_0x21ad99[_0x47e16c(0xd0)](),_0x754f37=_0x21ad99[_0x47e16c(0xbe)](-0x6*-0x38f+-0x2dd*0x7+-0x14f,-0x37*0xb1+-0x1209+0x3810,_0x199c0a,_0x1524be);return{'img':await _0x754f37[_0x47e16c(0xbc)](0x68e+-0x2*-0xd1+-0x6ec,0x41*-0x37+-0x3a6+0x9*0x245)[_0x47e16c(0xd1)+_0x47e16c(0xd3)](Jimp[_0x47e16c(0xbd)]),'preview':await _0x754f37[_0x47e16c(0xca)]()[_0x47e16c(0xd1)+_0x47e16c(0xd3)](Jimp[_0x47e16c(0xbd)])};}
