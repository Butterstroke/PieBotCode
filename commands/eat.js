const Discord = require("discord.js");

exports.run = function(client, message, args) {
	var user = message.mentions.users.first();
	const embed = new Discord.RichEmbed()
    		.setColor(0xFFB200)
    		.setTimestamp()
			.setFooter(`Eaten by ${message.author.username}`);
	
    if (message.content== `p.eat <@265071448182358018>` || message.content== `p.eat <@!265071448182358018>`) {
		embed.addField('Eat', `Why would I eat my owner Pie#9196? Why?`);
   		return message.channel.send({embed});
	} if (message.content== `p.eat <@!288221668290068480>` || message.content== `p.eat <@288221668290068480>` || !user) {
  		embed.addField('Eat', `${message.author.username} just took a bite from me. Sad :(`);
 		return message.channel.send({embed});
	}
	else {
		var member = message.guild.member(user);
		embed.addField('Eat', `${message.author.username} just took a bite from ${user.username}. Lucky it wasn't me tho`);
		message.channel.send({embed});
	} 
}
