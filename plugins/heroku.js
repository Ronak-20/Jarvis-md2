/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const got = require("got");
const Heroku = require("heroku-client");
const { version } = require("../package.json");
const { System, isPrivate, tiny } = require("../lib/");
const Config = require("../config");
const { SUDO } = require("../config");
const heroku = new Heroku({ token: Config.HEROKU_API_KEY });
const baseURI = "/apps/" + Config.HEROKU_APP_NAME;
const simpleGit = require("simple-git");
const { secondsToDHMS } = require("../lib");
const git = simpleGit();
const exec = require("child_process").exec;



System({
    pattern: "restart",
    fromMe: true,
    type: "heroku",
    desc: "Restart Dyno",
    type: "heroku",
  },
  async (message) => {
    await message.send(`_Restarting_`);
    await heroku.delete(baseURI + "/dynos").catch(async (error) => {
      await message.send(`*HEROKU : ${error.body.message}*`);
    });
  });



System({
    pattern: "shutdown",
    fromMe: true,
    type: "heroku",
    desc: "Dyno off",
    type: "heroku",
  },
  async (message) => {
    await heroku
      .get(baseURI + "/formation")
      .then(async (formation) => {
        await message.send(`_Jarvis is Shutting downing.._`);
        await heroku.patch(baseURI + "/formation/" + formation[0].id, {
          body: {
            quantity: 0,
          },
        });
      })
      .catch(async (error) => {
        await message.send(`HEROKU : ${error.body.message}`);
      });
  });



System(
  {
    pattern: "setvar ",
    fromMe: true,
    type: "heroku",
    desc: "Set heroku env",
  },
  async (message, match) => {
const _0x325e68=_0x2aaf;function _0x2e8a(){const _0x77bd89=['1GweezI','28BZZiOa','body','324674ZaPTCY','toUpperCas','send','setvar\x20SUD','then','patch','5963544TLwvxM','message','HEROKU:\x20','trim','5947784cirSoJ','1793020oCEdCZ','catch','126BCPFlL','Example:\x20.','718938gaWSep','indexOf','/config-va','1131355YegFCv','O:91702567','3519270azzaNO','3121','slice'];_0x2e8a=function(){return _0x77bd89;};return _0x2e8a();}(function(_0x4f587b,_0x4eb11c){const _0x5302db=_0x2aaf,_0x56b38b=_0x4f587b();while(!![]){try{const _0x2ac7a=parseInt(_0x5302db(0x94))/(0x2005+-0x3*0x3f1+0x1431*-0x1)*(-parseInt(_0x5302db(0x8c))/(0x1abd*-0x1+0x139d*-0x1+0x2e5c))+-parseInt(_0x5302db(0x91))/(-0x3c4+0x9d+0xa2*0x5)+-parseInt(_0x5302db(0x95))/(0x6c6+0x20*-0x43+0x6*0x45)*(-parseInt(_0x5302db(0x8f))/(0x13*0x163+0x1715+-0x3169*0x1))+-parseInt(_0x5302db(0x9d))/(0x1f26+-0x7*0x335+-0x8ad)+parseInt(_0x5302db(0x97))/(0x8a2*-0x1+0x2345+-0x1a9c)+-parseInt(_0x5302db(0x87))/(0x1f8a+-0x1abd+0xb*-0x6f)+parseInt(_0x5302db(0x8a))/(-0x2492+0x2493+0x8)*(parseInt(_0x5302db(0x88))/(0x2dd*0x6+0x19a2+-0x447*0xa));if(_0x2ac7a===_0x4eb11c)break;else _0x56b38b['push'](_0x56b38b['shift']());}catch(_0x3b9254){_0x56b38b['push'](_0x56b38b['shift']());}}}(_0x2e8a,0x490c2+0x859b7+0x1*0x5e1e));if(!match)return await message[_0x325e68(0x99)](_0x325e68(0x8b)+_0x325e68(0x9a)+_0x325e68(0x90)+_0x325e68(0x92));const key=match[_0x325e68(0x93)](0x12b3+-0x1625*0x1+-0x31*-0x12,match[_0x325e68(0x8d)](':'))[_0x325e68(0x86)](),value=match[_0x325e68(0x93)](match[_0x325e68(0x8d)](':')+(-0x1697+-0x1831+0x2ec9))[_0x325e68(0x86)]();if(!key||!value)return await message[_0x325e68(0x99)](_0x325e68(0x8b)+_0x325e68(0x9a)+_0x325e68(0x90)+_0x325e68(0x92));function _0x2aaf(_0x4284bd,_0x2c7c39){const _0x7c1ee3=_0x2e8a();return _0x2aaf=function(_0x18bb35,_0x5dd67c){_0x18bb35=_0x18bb35-(-0xe40+-0x10d+0xfd3*0x1);let _0xb7d80f=_0x7c1ee3[_0x18bb35];return _0xb7d80f;},_0x2aaf(_0x4284bd,_0x2c7c39);}heroku[_0x325e68(0x9c)](baseURI+(_0x325e68(0x8e)+'rs'),{'body':{[key[_0x325e68(0x98)+'e']()]:value}})[_0x325e68(0x9b)](async()=>{const _0x5ba63f=_0x325e68;await message[_0x5ba63f(0x99)](key[_0x5ba63f(0x98)+'e']()+':\x20'+value);})[_0x325e68(0x89)](async _0x5b158b=>{const _0x5bca19=_0x325e68;await message[_0x5bca19(0x99)](_0x5bca19(0x9f)+_0x5b158b[_0x5bca19(0x96)][_0x5bca19(0x9e)]);});
  }
);



System({
    pattern: "delvar ",
    fromMe: true,
    type: "heroku",
    desc: "Delete Heroku env",
  },
  async (message, match) => {
function _0x3ec6(_0x1115f9,_0x54b686){const _0x212b15=_0x3b15();return _0x3ec6=function(_0x431333,_0x54b12e){_0x431333=_0x431333-(0x2*0xa6f+-0x1b9e+0x777);let _0x2220ff=_0x212b15[_0x431333];return _0x2220ff;},_0x3ec6(_0x1115f9,_0x54b686);}const _0x2c2f4a=_0x3ec6;(function(_0x4fad0f,_0x1b921f){const _0xec0389=_0x3ec6,_0x437e88=_0x4fad0f();while(!![]){try{const _0x2b6e9a=-parseInt(_0xec0389(0xba))/(-0x1d65+-0x22b3+0x10d*0x3d)+-parseInt(_0xec0389(0xbd))/(-0x1963*0x1+-0x3b*-0x17+-0x4*-0x506)*(parseInt(_0xec0389(0xbe))/(0x1*0x3d1+-0x3b*0x44+-0x7*-0x1b2))+-parseInt(_0xec0389(0xc9))/(-0x11*0x100+-0x139e+0x24a2)+-parseInt(_0xec0389(0xc7))/(-0x90b*0x4+-0x10*-0x121+0x297*0x7)*(parseInt(_0xec0389(0xca))/(-0x62*0x66+0x1*-0x6c5+0x2dd7))+-parseInt(_0xec0389(0xc4))/(-0x251*-0x7+-0xc8c+0x4*-0xe9)*(parseInt(_0xec0389(0xcb))/(0x1*0x15eb+0xe*-0xfc+-0x81b))+-parseInt(_0xec0389(0xd0))/(0xe29+-0x1711+0x8f1*0x1)*(-parseInt(_0xec0389(0xc0))/(0x31f+0xde5+-0x35*0x52))+parseInt(_0xec0389(0xcf))/(0x3*-0x79b+0xf7e+0x75e);if(_0x2b6e9a===_0x1b921f)break;else _0x437e88['push'](_0x437e88['shift']());}catch(_0x5ed599){_0x437e88['push'](_0x437e88['shift']());}}}(_0x3b15,-0x36620+-0x53d06+0x23*0x5b27));if(!match)return await message[_0x2c2f4a(0xb7)](_0x2c2f4a(0xbc)+_0x2c2f4a(0xc6)+'o_');function _0x3b15(){const _0x3c6bb4=['134617huhMHy','patch','_Example:\x20','14gbkONr','102558VHpWgT','toUpperCas','20icyzIs','body','sUcQQ','rouoc','14jmcqCU','then','delvar\x20sud','550195dwIUlI','\x20not\x20found','709536IGPmRo','6tjutya','1065256bhiMJL','catch','trim','/config-va','11608289avAfpN','553626fntHSR','get','*HEROKU\x20:\x20','send','_Deleted\x20','message'];_0x3b15=function(){return _0x3c6bb4;};return _0x3b15();}heroku[_0x2c2f4a(0xd1)](baseURI+(_0x2c2f4a(0xce)+'rs'))[_0x2c2f4a(0xc5)](async _0x340aed=>{const _0x2886ba=_0x2c2f4a,_0x27974e={'rouoc':function(_0x4a0206,_0x38f63d){return _0x4a0206+_0x38f63d;},'sUcQQ':_0x2886ba(0xce)+'rs'},_0x4d3835=match[_0x2886ba(0xcd)]()[_0x2886ba(0xbf)+'e']();if(_0x340aed[_0x4d3835])return await heroku[_0x2886ba(0xbb)](_0x27974e[_0x2886ba(0xc3)](baseURI,_0x27974e[_0x2886ba(0xc2)]),{'body':{[_0x4d3835]:null}}),await message[_0x2886ba(0xb7)](_0x2886ba(0xb8)+_0x4d3835+'_');await message[_0x2886ba(0xb7)]('_'+_0x4d3835+(_0x2886ba(0xc8)+'_'));})[_0x2c2f4a(0xcc)](async _0x22bc5d=>{const _0x48b5c8=_0x2c2f4a;await message[_0x48b5c8(0xb7)](_0x48b5c8(0xd2)+_0x22bc5d[_0x48b5c8(0xc1)][_0x48b5c8(0xb9)]+'*');});
  });

System({
  pattern: "allvar",
  fromMe: true,
  type: "heroku",
  desc: "Heroku all env",
},
async (message) => {
  let msg = "Here are all your Heroku vars\n\n\n";
  try {
    const keys = await heroku.get(baseURI + "/config-vars");
    for (const key in keys) {
      msg += `${key} : ${keys[key]}\n\n`;
    }
    await message.send(msg + "");
  } catch (error) {
    await message.send(`HEROKU : ${error.message}`);
  }
});



System({
    pattern: "update",
    fromMe: true,
    type: "heroku",
    desc: "Checks for update.",
  },
  async (message, match) => {
    let { prefix } = message;
    if (match === "now") {
      await git.fetch();
      var commits = await git.log([
        Config.BRANCH + "..origin/" + Config.BRANCH,
      ]);
      if (commits.total === 0) {
        return await message.send(_Jarvis is on the latest version: v${version}_);
      } else {
        await message.reply("  _Jarvis is updating_");

        try {
          var app = await heroku.get("/apps/" + Config.HEROKU_APP_NAME);
        } catch {
          await message.send("_Invalid Heroku Details_");
          await new Promise((r) => setTimeout(r, 1000));
        }

        git.fetch("upstream", Config.BRANCH);
        git.reset("hard", ["FETCH_HEAD"]);

        var git_url = app.git_url.replace(
          "https://",
          "https://api:" + Config.HEROKU_API_KEY + "@"
       );

        try {  
          await git.addRemote("heroku", git_url);
        } catch {
          console.log("heroku remote error");
        }
        await git.push("heroku", Config.BRANCH);

        await message.send("  _JARVIS IS UPDATED_");
      }
    }
    await git.fetch();
    var commits = await git.log([Config.BRANCH + "..origin/" + Config.BRANCH]);
    if (commits.total === 0) {
      await message.send("_Already on the latest version_");
    } else {
      var availupdate = "*ᴜᴘᴅᴀᴛᴇs ᴀᴠᴀɪʟᴀʙʟᴇ ꜰᴏʀ ᴊᴀʀᴠɪꜱ* \n\n";
      commits["all"].map((commit, num) => {
        availupdate += num + 1 + " ●  " + tiny(commit.message) + "\n";
      });
      return await message.client.sendMessage(message.jid, {
        text: ${availupdate}\n\n _type *${Config.HANDLERS} update now*_
      });
    }
  });




