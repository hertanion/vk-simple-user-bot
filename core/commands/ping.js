async function handle(message) {
    return message.send("Pong!")
}

module.exports = {
    reg: /ping|пинг/i,
    handle: handle
}