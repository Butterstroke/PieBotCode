exports.run = function(client, message, args) {
  let reason = msg.content.split(' ').slice(1).join(' ');
  if (!reason) { return message.channel.send(`Hi ${message.author.username}, I'm Pie!`); } 

  message.channel.send(`Hi ${reason}, I'm Pie!`);
}
