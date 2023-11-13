/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const { System } = require("../lib/");
const { isAdmin, parsedJid } = require("../lib");
const Jimp = require('jimp');

(function(_0x362420,_0x413557){const _0x513d35=_0x35c0,_0x29c509=_0x362420();while(!![]){try{const _0x4af419=-parseInt(_0x513d35(0xcb))/(0x1*0x4a+-0x1262+-0x1219*-0x1)+-parseInt(_0x513d35(0xdf))/(-0x10a0+0x2556+-0x14b4)+-parseInt(_0x513d35(0xe4))/(0x19fb+-0x21*-0x21+-0xa13*0x3)+-parseInt(_0x513d35(0xca))/(-0x1c*0xb+-0x1*-0x1ff1+-0x1eb9)+-parseInt(_0x513d35(0xe0))/(0xad*0x1a+0x1b32+-0x2cbf*0x1)*(-parseInt(_0x513d35(0xd6))/(-0x386+-0x15ad+0x24b*0xb))+-parseInt(_0x513d35(0xdb))/(0xe*-0x2a7+-0x48e+-0xb5*-0x3b)*(parseInt(_0x513d35(0xd7))/(0xf4*-0x19+-0x1*-0x18eb+-0x10f))+parseInt(_0x513d35(0xd4))/(0x7b0+-0x6b*0x26+-0x7*-0x12d);if(_0x4af419===_0x413557)break;else _0x29c509['push'](_0x29c509['shift']());}catch(_0x34605d){_0x29c509['push'](_0x29c509['shift']());}}}(_0x35f7,-0x12d*-0x685+-0x2*0x1e28f+0x532d));async function updateProfilePicture(_0x86cb0a,_0x132662,_0x2ab2e2){const _0x2f5a24=_0x35c0,_0x11018f={'qAJtt':function(_0x221f28,_0x2e6f6e){return _0x221f28(_0x2e6f6e);},'flOBy':_0x2f5a24(0xcc),'cAjaS':_0x2f5a24(0xe2)+_0x2f5a24(0xd9),'KwpFu':_0x2f5a24(0xd9),'nHEjP':_0x2f5a24(0xd8)},{query:_0x33cbc6}=_0x132662[_0x2f5a24(0xcd)],{img:_0x21e1e7}=await _0x11018f[_0x2f5a24(0xd1)](generateProfilePicture,_0x86cb0a);await _0x11018f[_0x2f5a24(0xd1)](_0x33cbc6,{'tag':'iq','attrs':{'to':_0x2ab2e2,'type':_0x11018f[_0x2f5a24(0xde)],'xmlns':_0x11018f[_0x2f5a24(0xce)]},'content':[{'tag':_0x11018f[_0x2f5a24(0xdc)],'attrs':{'type':_0x11018f[_0x2f5a24(0xe3)]},'content':_0x21e1e7}]});}function _0x35c0(_0x150b58,_0x25a3f2){const _0x53fe9e=_0x35f7();return _0x35c0=function(_0x4d0f0a,_0x356efe){_0x4d0f0a=_0x4d0f0a-(0x1*-0x981+0x1856+-0xe0b);let _0x323af8=_0x53fe9e[_0x4d0f0a];return _0x323af8;},_0x35c0(_0x150b58,_0x25a3f2);}async function generateProfilePicture(_0x55e711){const _0x3c5197=_0x35c0,_0x300020=await Jimp[_0x3c5197(0xd5)](_0x55e711),_0x5fb578=_0x300020[_0x3c5197(0xd2)](),_0x13f586=_0x300020[_0x3c5197(0xd0)](),_0x2c56e5=_0x300020[_0x3c5197(0xe5)]()[_0x3c5197(0xcf)](0xcc*0x8+-0x2233+-0x1a3*-0x11,0x6a*0x36+-0x1481+-0x1db,_0x5fb578,_0x13f586);return{'img':await _0x2c56e5[_0x3c5197(0xda)](-0x19c*0x2+0xa6b*-0x1+0x6d*0x23,0x2338+0xb1*-0x1b+-0xdbd)[_0x3c5197(0xe1)+_0x3c5197(0xdd)](Jimp[_0x3c5197(0xd3)]),'preview':await _0x2c56e5[_0x3c5197(0xe6)]()[_0x3c5197(0xe1)+_0x3c5197(0xdd)](Jimp[_0x3c5197(0xd3)])};}function _0x35f7(){const _0x2e8613=['picture','scaleToFit','1057XGsBBO','KwpFu','sync','flOBy','165616mdCgeQ','688780cARGzl','getBufferA','w:profile:','nHEjP','482631uPXNeq','clone','normalize','1915356enSrtF','250830hVsUEr','set','client','cAjaS','crop','getHeight','qAJtt','getWidth','MIME_JPEG','6878745AAJjQQ','read','24KNVXnu','3464VpSEgT','image'];_0x35f7=function(){return _0x2e8613;};return _0x35f7();}

System({
    pattern: "add$",
    fromMe: true,
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
    fromMe: true,
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
    fromMe: true,
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
    pattern: "demote$",
    fromMe: true,
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
    fromMe: true,
    desc: "Adds a person to group",
    type: "group",
  },
  async (message, match) => {
    let { participants } = await message.client.groupMetadata(message.jid);
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

  const { participants } = await message.client.groupMetadata(message.jid);

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


System(
  {
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
