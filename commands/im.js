exports.run = function(client, message, args) {
  let reason = args.join(' ');
  if (!reason) { reason = message.author.username; }

  message.channel.send(`Hi ${reason}, I'm Pie!`);
}
