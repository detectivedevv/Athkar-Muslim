module.exports = {
    name: 'ready',
    once: true,

    execute(client) {
        client.user.setPresence({
            activities: [{
                name: 'اذكارك ثاني شيء بعد صلاتك ❤️',
                type: 'STREAMING',
                url: 'https://www.twitch.tv/discord'
            }],


            status: 'online'
        });

        console.log(`Logged in as ${client.user.tag}\n`);
    }
};