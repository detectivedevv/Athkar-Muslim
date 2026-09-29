const { MessageEmbed } = require("discord.js");
const config = require("../config");
const adhkar = require("../athkar.json");
const adhkarList = Array.isArray(adhkar) ? adhkar : adhkar.adhkar;

module.exports = {
  name: "ready",
  once: true,

  execute(client) {
    const channelId = config.room_id;
    if (!channelId) throw new Error("يرجى تحديد AZKAR_CHANNEL_ID");

    const sendDhikr = async () => {
      const channel = await client.channels.fetch(channelId).catch((error) => {
        console.error("تعذر العثور على قناة الأذكار:", error);
        return null;
      });
      if (!channel || !Array.isArray(adhkarList) || adhkarList.length === 0) return;

      const selectedDhikr = adhkarList[Math.floor(Math.random() * adhkarList.length)];
      const dhikrText = typeof selectedDhikr === "string" ? selectedDhikr : selectedDhikr.text;
      if (!dhikrText) {
        console.error("عنصر الذكر المختار لا يحتوي على نص صالح.");
        return;
      }

      const embed = new MessageEmbed()
        .setColor(config.color)
        .setTitle("الذكر")
        .setDescription(dhikrText)
        .setTimestamp()
        .setImage("https://cdn.discordapp.com/attachments/1553079799814299734/1553215596542296170/25eacf37-1318-4fb1-be5e-48d73a60286f.png?ex=6ab8703f&is=6ab71ebf&hm=18ea673c6d21341d33bb49cb5be7dfde5aa27914b659d29ef99c5a0532212f40&")


      channel.send({ embeds: [embed] }).catch((error) => {
        console.error("تعذر إرسال الذكر إلى القناة:", error);
      });
    };

    sendDhikr();
    setInterval(sendDhikr, 60 * 1000);
  }
};