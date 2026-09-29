const { MessageEmbed } = require("discord.js");
const config = require("../../config");
const { COOLDOWN } = require("../../cooldown.json");
const fs = require("fs");

const devs = `**مطور البوت :  <@1515310178671530065>
المجرب :  <@1509110224684974200>
**`


module.exports = {
  name: "devs",
  aliases: ["المطورين", "المساهمين"],
  cooldown: COOLDOWN,

    execute(client, message, args) {
        
        message.delete().catch(() => {});

        const embed = new MessageEmbed()
        .setColor(config.color)
        .setTitle("المساهمين لتطوير البوت")
        .setDescription(devs)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setImage("https://cdn.discordapp.com/attachments/1553079799814299734/1553215596542296170/25eacf37-1318-4fb1-be5e-48d73a60286f.png?ex=6ab8703f&is=6ab71ebf&hm=18ea673c6d21341d33bb49cb5be7dfde5aa27914b659d29ef99c5a0532212f40&")
        .setTimestamp();

      message.channel.send({ embeds: [embed] });
    }
}