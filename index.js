const vk = require("./core/vk");
const fs = require("fs");

function loadCommands() {
    let commands = fs.readdirSync("./core/commands");
    commands.map((file) => {
        console.log(`Loading command ${file}`)
        const command = require(`./core/commands/${file}`)
        vk.commands.push({
            reg: command.reg,
            handle: command.handle
        })
    })
}

(async function () {
    await loadCommands();
    await vk.initialize();
    console.log("[BOT] Started...");
})();