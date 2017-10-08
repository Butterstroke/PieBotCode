exports.run = function(client, message) {
	const embed = new Discord.RichEmbed()
		.setColor(0xFFB200)
		.setAuthor(message.guild.name, message.guild.iconURL)
		.addField(`Here's some info about ${message.guild.name}`, `Total Members: **${message.guild.memberCount}**\nChannels: **${message.guild.channels.size}**\nOwner: **${message.guild.owner.user.username}** *(${message.guild.owner.id})*\nEmojis: **${message.guild.emojis.size}**\nRoles: **${message.guild.roles.size}**\nServer Creation Date:**\n${message.guild.createdAt}**`)
		.setTimestamp()
		.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL);
	
	message.channel.send({embed});
}
