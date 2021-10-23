async function handle(message) {
    return message.send("Test is worked!")
}

module.exports = {
    reg: /test/i,
    handle: handle
}