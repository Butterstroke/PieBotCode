const Discord = require("discord.js");

exports.run = function(client, message) {		
	let large = (() => {
		var x = 0;
		for (guild of client.guilds.array()) { if (guild.large) x++; }
		return x;
	})();
	let small = (() => {
		var x = 0;
		for (guild of client.guilds.array()) { if (!guild.large) x++; }
		return x;
	})();
	const embed = new Discord.RichEmbed()
		.setColor(0xFFB200)
		.setAuthor("Bot Info and Stats", "https://cdn.discordapp.com/avatars/288221668290068480/37d470e3ef6bd80279e47e23797558f5.jpg?size=128")
		.setDescription(`**${client.user.username}**Bot: A bot which can do more than just say hi!`)
		.addField(`About ${client.user.username}Bot`, `To start using me, do **p.helpme**. \n**${client.user.username}**Bot is a bot made for those who likes memes, dog pics and pies. \n[Click here](http://www.piebot.weebly.com) for the website & [click here](https://discordapp.com/oauth2/authorize?client_id=288221668290068480&scope=bot&permissions=2146827519) to invite **${client.user.username}**Bot.`)
		.addField("General Info", `**Prefix: **p.\n**Version: 6.0.0 **\n**${client.user.username}**Bot's Oven: [discord.gg/PXAuQyG](https://discord.gg/PXAuQyG)`)
		.addField("Some stats for you nerds", "**Uptime: **" + [Math.floor((client.uptime / 1000) / 60)] + " minutes" + "\n" + "**Ping: **" + Math.round(message.client.ping) + "ms" + "\n" + "**Total Users: **" + client.users.size + " users" + "\n" + "**Total Channels: **" + client.channels.size + " channels" + "\n" + "**Memory: **" + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + " mb" + "\n" + `**Large Servers** *(+250 members)*: ${large} servers\n**Small Servers** *(Less than 250 members)*: ${small} servers\n**Large to Small:** ${large}/${small} servers`);
		
    message.channel.send({embed});
}
