const Discord = require("discord.js");

exports.run = function(client, message) {
	var user = message.mentions.users.first();
	if (!user) { user = message.author; }
	
	const embed = new Discord.RichEmbed()
      	.setColor(0xFFB200)
		.setThumbnail(user.avatarURL);
	
	if (user.bot) {
		if (user.presence.game === null) {
      		embed.addField(`Here's some info about ${user.username}`, `Status: **${user.presence.status}**\nDiscriminator: **${user.discriminator}**\nID: **${user.id}**\nGame: **None**\nBot: **Yes**\nUser Created at **${user.createdAt}**\nLast message sent: **${user.lastMessage}** *(${user.lastMessageID})*`)
		} else {
      		embed.addField(`Here's some info about ${user.username}`, `Status: **${user.presence.status}**\nDiscriminator: **${user.discriminator}**\nID: **${user.id}**\nGame: **${user.presence.game.name}**\nBot: **Yes**\nUser Created at **${user.createdAt}**\nLast message sent: **${user.lastMessage}** *(${user.lastMessageID})*`)
		}
	} else {
		if (user.presence.game === null) {
      		embed.addField(`Here's some info about ${user.username}`, `Status: **${user.presence.status}**\nDiscriminator: **${user.discriminator}**\nID: **${user.id}**\nGame: **None**\nBot: **No**\nUser Created at **${user.createdAt}**\nLast message sent: **${user.lastMessage}** *(${user.lastMessageID})*`)
		} else {
      		embed.addField(`Here's some info about ${user.username}`, `Status: **${user.presence.status}**\nDiscriminator: **${user.discriminator}**\nID: **${user.id}**\nGame: **${user.presence.game.name}**\nBot: **No**\nUser Created at **${user.createdAt}**\nLast message sent: **${user.lastMessage}** *(${user.lastMessageID})*`)
		}
      return message.channel.send({embed});
	}
}
