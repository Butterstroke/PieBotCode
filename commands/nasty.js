exports.run = function(client, message) {
  var reason = message.content.split(' ').slice(1).join(' ');
  let role = message.member.hasPermission('ADMINISTRATOR');
  if (!message.member.hasPermission('ADMINISTRATOR')) { return message.channel.send(`Sorry <@${message.author.id}> but you no trusted guy.`); }
  if (!reason) { return message.channel.send('Why are you gonna @ everyone?'); }
  message.delete();
  message.channel.send(`@everyone\n**${reason}**`)
}
