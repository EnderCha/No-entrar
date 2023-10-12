const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const config = require('./config.json');

const {loadEvents} = require('./Handlers/eventHandler')

const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)],
});

client.setMaxListeners(0);

client.login(config.token).then(() => {
    console.log('El bot esta online');
});