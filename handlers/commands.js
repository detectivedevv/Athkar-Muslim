const fs = require('fs');

module.exports = (client) => {
    const loadedCommands = [];

    fs.readdirSync('./commands').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/${folder}/${file}`);
            if (command.name) {
                client.commands.set(command.name, command);
                loadedCommands.push([file, command.name, 'ON']);
            } else {
                loadedCommands.push([file, '', 'OFF']);
                continue;
            }
        }
    });

    const headers = ['File', 'Command', 'Status'];
    const widths = headers.map((header, index) => Math.max(
        header.length,
        ...loadedCommands.map(row => String(row[index]).length)
    ));
    const border = `+${widths.map(width => '-'.repeat(width + 2)).join('+')}+`;
    const row = values => `| ${values.map((value, index) => String(value).padEnd(widths[index])).join(' | ')} |`;

    console.log(border);
    console.log(row(headers));
    console.log(border);
    loadedCommands.forEach(command => console.log(row(command)));
    console.log(border);
}