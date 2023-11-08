/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/


const { System, sendPlugin, Remove } = require("../lib");

System({
        pattern: "plugin",
        fromMe: true,
        desc: "Installs External plugins",
        type: "user",
}, async (message, match) => {
         await sendPlugin(message, match);
});


System({
    pattern: "remove", 
    fromMe: true,
    desc: "remove external plugins",
    type: "user",
}, async (message, match) => {
         await Remove(message, match);
});
