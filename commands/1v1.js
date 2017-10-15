const Discord = require('discord.js');

exports.run = function(client, message, args) {
    var item = message.content.split(' ').slice(2).join(' ');

    if (!user) { var user = client.users.find("id", `288221668290068480`); } //Finds PieBot and sets the user to the bot.
    else { var user = message.mentions.users.first(); }

    var health = ["20", "10", "60", "40", "80", "50", "70", "30", "90", "100"];
    var action = ["uses their ultimate", "uses boss baby", "calls the boss baby", "uses oven", "uses poisonous covfefe", "calls Michael Stevens", "uses <:1000degree:275751132595486720>"]
    var actitem = [` to smash ${user.username}'s head into the ground`, ` to clean up ${user.username}'s mess`];

    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField('1v1', response[~~(Math.random() * response.length)])
        .setFooter(`1v1ed by ${msg.author.username}`);

    if (!item) {
        var response = [`${message.author.username} ${action[~~(Math.random() * action.length)]}!\n${user.username} loses ${health[~~(Math.random() * health.length)]} hp.\n${user.username} ${action[~~(Math.random() * action.length)]}. ${message.author.username} loses ${health[~~(Math.random() * health.length)]} hp.`];
    }
    else { 
        var response = [`${msg.author.username} uses ${item}${actitem[~~(Math.random() * actitem.length)]}!\n${user.username} loses ${health[~~(Math.random() * health.length)]} hp.\n${user.username} ${action[~~(Math.random() * action.length)]}. ${msg.author.username} loses ${health[~~(Math.random() * health.length)]} hp.`];
    }
    message.channel.send({embed});
}
