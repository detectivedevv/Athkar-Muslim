const fs = require('fs');

module.exports = (client) => {
    const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
    const loadedEvents = [];

    for (const file of eventFiles) {
        const event = require(`../events/${file}`);
        loadedEvents.push([file, event.name, event.once ? 'Once' : 'On']);

        if (event.once) {
            client.once(event.name, (...args) => event.execute(client, ...args));
        } else {
            client.on(event.name, (...args) => event.execute(client, ...args));
        }
    }

    const headers = ['File', 'Event', 'Type'];
    const widths = headers.map((header, index) => Math.max(
        header.length,
        ...loadedEvents.map(row => String(row[index]).length)
    ));
    const border = `+${widths.map(width => '-'.repeat(width + 2)).join('+')}+`;
    const row = values => `| ${values.map((value, index) => String(value).padEnd(widths[index])).join(' | ')} |`;

    console.log(border);
    console.log(row(headers));
    console.log(border);
    loadedEvents.forEach(event => console.log(row(event)));
    console.log(border);
}