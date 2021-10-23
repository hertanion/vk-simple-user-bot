const { VK } = require("vk-io");
const settings = require("./settings.json");

const vk = new VK(settings.vk);
const commands = [];

async function init() {
    await vk.updates.start().catch(console.error);
}

vk.updates.on("message_new", async (message) => {
    if (message.senderId === settings.owner && !message.isOutbox) {
        const command = commands.find(e => e.reg.test(message.text))
        if (command) {
            return await command.handle(message);
        }
    }
});

module.exports = {
    vk: vk,
    initialize: init,
    commands: commands
}