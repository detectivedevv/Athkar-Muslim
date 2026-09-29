




const { MessageEmbed } = require("discord.js");
const config = require("../../config");
const { COOLDOWN } = require("../../cooldown.json");
const fs = require("fs");

module.exports = {
  name: "d3ak",
  aliases: ["دعاء"],
  cooldown: COOLDOWN,

    execute(client, message, args) {
        
        const content = args.join(" ").replace(/^(?:!?(?:دعاء|thkrk))\s*/i, "").trim();
        if (!content) {
            return message.reply("يرجى تقديم دعاء لتفعيله.");
        }

        message.delete().catch(() => {});

        const embed = new MessageEmbed()
        .setColor(config.color)
        .setTitle("الدعاء")
        .setDescription(content || "لم يتم تقديم الدعاء")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setImage("https://cdn.discordapp.com/attachments/1553079799814299734/1553215596542296170/25eacf37-1318-4fb1-be5e-48d73a60286f.png?ex=6ab8703f&is=6ab71ebf&hm=18ea673c6d21341d33bb49cb5be7dfde5aa27914b659d29ef99c5a0532212f40&")
        .setFooter({ text: `تم تفعيل الدعاء بواسطة ${message.author.tag}`, iconURL: message.author.displayAvatarURL() })
        .setTimestamp();

      message.channel.send({ embeds: [embed] });
    }
}