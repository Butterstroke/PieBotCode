const Discord = require("discord.js");

exports.run = function(client, message, args) {
  var reason = message.content.split(' ')
  reason.shift()
  var reason = reason.join(' ').replace(".", "");
  const embed = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTimestamp()
    .setFooter(`Rated by ${message.author.username}`);
  
  if (!reason) {
    embed.addField(':mouse2: Rate', "I can't rate with nothingness. Please try again :wink:");
    return message.channel.sendEmbed(embed);
  }
  var response = ["1/10.", "2/10.", "3/10.", "4/10.", "5/10.", "6/10.", "7/10.", "8/10.", "9/10.", "10/10."];
  embed.addField(':mouse2: Rate', `I would rate **${reason}** ${response[~~(Math.random() * response.length)]}`);
  message.channel.send({embed});
}
