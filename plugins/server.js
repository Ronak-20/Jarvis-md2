/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const got = require("got");
const Heroku = require("heroku-client");
const {
        version
} = require("../package.json");
const {
	System,
	isPrivate,
	tiny
} = require("../lib/");
const Config = require("../config");
const {
	SUDO
} = require("../config");
const heroku = new Heroku({
	token: Config.HEROKU_API_KEY
});
const baseURI = "/apps/" + Config.HEROKU_APP_NAME;
const simpleGit = require("simple-git");
const {
	secondsToDHMS
} = require("../lib");
const git = simpleGit();
const exec = require("child_process").exec;



System({
    pattern: "shutdown",
    fromMe: true,
    type: "heroku",
    desc: "Dyno off",
    type: "heroku",
}, async (message) => {
    await heroku.get(baseURI + "/formation").then(async (formation) => {
        await message.send(`_Jarvis is shutting down..._`);
        await heroku.patch(baseURI + "/formation/" + formation[0].id, {
            body: { quantity: 0 },
        });
    })
    .catch(async (error) => {
        await message.send(`HEROKU: ${error.body.message}`);
    });
});




System({
    pattern: "setvar ",
    fromMe: true,
    type: "heroku",
    desc: "Set Heroku environment variable",
},
async (message, match) => {
    if (!match)
        return await message.send(`Example: .setvar SUDO:917025673121`);   
    const key = match.slice(0, match.indexOf(':')).trim();
    const value = match.slice(match.indexOf(':') + 1).trim();
    if (!key || !value)
        return await message.send(`Example: .setvar SUDO:917025673121`);
    heroku.patch(baseURI + "/config-vars", {
            body: {
                [key.toUpperCase()]: value,
            },
        })
        .then(async () => {
            await message.send(`${key.toUpperCase()}: ${value}`);
        })
        .catch(async (error) => {
            await message.send(`HEROKU: ${error.body.message}`);
        });
});


System({
    pattern: "delvar ",
    fromMe: true,
    type: "heroku",
    desc: "Delete Heroku environment variable",
},
async (message, match) => {
    if (!match) return await message.send("_Example: delvar sudo_");
    heroku
        .get(baseURI + "/config-vars")
        .then(async (vars) => {
            const key = match.trim().toUpperCase();

            if (vars[key]) {
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        [key]: null,
                    },
                });

                return await message.send(`_Deleted ${key}_`);
            }

            await message.send(`_${key} not found_`);
        })
        .catch(async (error) => {
            await message.send(`*HEROKU: ${error.body.message}*`);
        });
});


System({
    pattern: "allvar",
    fromMe: true,
    type: "heroku",
    desc: "Heroku all environment variables",
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
        await message.send(`HEROKU: ${error.message}`);
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
            return await message.send(`_Jarvis is on the latest version: v${version}_`);
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
            text: `${availupdate}\n\n _type *${Config.HANDLERS} update now*_`
        });
    }
});

