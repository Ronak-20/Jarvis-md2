/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const { System, isPrivate, SearchPins, sendGitInfo, getIg, getJson } = require("../lib/");

System({
  pattern: "searchpin",
  fromMe: isPrivate,
  desc: "Search pinterest image",
  type: "search",
}, async (message, match) => {
  await SearchPins(message, match);
});

System({
  pattern: "github",
  fromMe: isPrivate,
  desc: "Fetch GitHub user information",
  type: "search",
},
async (message, match) => {
  await sendGitInfo(message, match);
});


System({
  pattern: 'ig ?(.*)',
  fromMe: isPrivate,
  desc: "Search Instagram Profile",
  type: "search",
}, async (message, match) => {
  await getIg(message, match);
});

System({
    pattern: "gpt",
    fromMe: isPrivate,
    desc: "open ai",
    type: "search",
},
async (message, match) => {
  function _0xea71(_0x2fa681,_0xeeb0ce){const _0x130419=_0x4f66();return _0xea71=function(_0x29e4ba,_0x470707){_0x29e4ba=_0x29e4ba-(-0x2345*0x1+-0x16c1+0x3be8);let _0xd7e17e=_0x130419[_0x29e4ba];return _0xd7e17e;},_0xea71(_0x2fa681,_0xeeb0ce);}const _0x567a0b=_0xea71;(function(_0x31c4c5,_0x4287d2){const _0x486bfa=_0xea71,_0x46ed52=_0x31c4c5();while(!![]){try{const _0x3327a6=parseInt(_0x486bfa(0x1fa))/(-0xf63+-0x1*-0x1859+-0x8f5)*(parseInt(_0x486bfa(0x1e5))/(0x73+-0x3*0x327+0x904))+-parseInt(_0x486bfa(0x1e7))/(0x1b0b*-0x1+-0x1c7*-0x5+0x122b)+-parseInt(_0x486bfa(0x1f1))/(-0x1*0x1a51+-0x1ea7+0x1c7e*0x2)+-parseInt(_0x486bfa(0x1f6))/(0x5*0x595+0xdf2+-0x29d6)*(parseInt(_0x486bfa(0x1e4))/(0x8a5+0x14da+-0xf*0x1f7))+-parseInt(_0x486bfa(0x1f4))/(0x17*0x115+0xbc2*0x2+0x2*-0x1830)*(parseInt(_0x486bfa(0x1eb))/(-0x1*-0x2623+-0x112*0x5+-0x20c1))+parseInt(_0x486bfa(0x1e9))/(-0x411+-0x130d*0x1+0x1727)+parseInt(_0x486bfa(0x1e2))/(0x3*-0x71+0x13d+0x20);if(_0x3327a6===_0x4287d2)break;else _0x46ed52['push'](_0x46ed52['shift']());}catch(_0x202c96){_0x46ed52['push'](_0x46ed52['shift']());}}}(_0x4f66,-0x1047a9+0x1*0x13ef65+-0x5d0e*-0x16));let textToUse=message[_0x567a0b(0x1f8)+_0x567a0b(0x1e6)][_0x567a0b(0x1ef)]||match;if(textToUse)try{const {result}=await getJson(_0x567a0b(0x1e3)+_0x567a0b(0x1ed)+_0x567a0b(0x1f9)+textToUse);result?await message[_0x567a0b(0x1ec)](''+result):await message[_0x567a0b(0x1ec)](_0x567a0b(0x1ea)+_0x567a0b(0x1f0));}catch(_0x5bead7){await message[_0x567a0b(0x1ec)](_0x567a0b(0x1e8)+_0x567a0b(0x1f7)+_0x567a0b(0x1f2)+_0x567a0b(0x1f5)+'r.');}else await message[_0x567a0b(0x1ec)](_0x567a0b(0x1ee)+_0x567a0b(0x1f3));function _0x4f66(){const _0x1da211=['103360FUnSPt','age','140901RpZTDh','An\x20error\x20o','625716XLpHhz','No\x20result\x20','7530576lAXOdv','send','mt.me/open','No\x20text\x20to','text','found.','4056616FZZIqF','lease\x20try\x20','\x20process.','7ZtiCEW','again\x20late','715ZnHNXd','ccurred.\x20P','reply_mess','ai?text=','8vWlqiu','37661640MMaave','https://ae','62226zKvyky'];_0x4f66=function(){return _0x1da211;};return _0x4f66();}
})
