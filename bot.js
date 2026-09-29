const { Client, Intents, Collection } = require("discord.js");
const config = require('./config');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.MESSAGE_CONTENT,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_WEBHOOKS
    ]
});


client.commands = new Collection()
client.events = new Collection()

require("./handlers/commands")(client)
require("./handlers/events")(client)

client.login(config.token);