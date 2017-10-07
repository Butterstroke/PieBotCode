exports.run = function(client, message, args) {
  var reason = args.join(' ');
  const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
  
  if (!reason) {
    embed.addField('Discrim', 'What discriminator would you like to search?');
    return  message.channel.send({embed});
  } else {
    numberOfDiscrims = 0;
    message.guild.fetchMembers().then(function(newguild) { newguild.members.forEach(function(member) { if(member.user.discriminator.endsWith(reason)) { numberOfDiscrims++; } }}));
    embed.addField(`#${reason}`, `The amount of people on this server with the discriminator **${reason}** is: **${numberOfDiscrims}`);
    return message.channel.send({embed});
  }
}
