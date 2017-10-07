exports.run = function(client, message, args) {
  if (message.content.includes('nothing')) return message.channel.send(`Nice try ${message.author.username} <:yellow_fruit:325965631818170369>`);
  if (message.content.includes('@everyone') || message.content.includes("@here") || !message.guild || !message.member) return;
  args = args.join(' ');
  if (!args) {
    return message.channel.send(`I can't say nothing ${message.author.username}! Make me say something. kthx.`);
  }
  message.delete();
  message.channel.send(`${args}`);
};
