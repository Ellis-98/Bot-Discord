module.exports = (client, message) => {
  // Ignorer les messages du Bot.
  if (message.author.bot) return;

  // Ignorer les messages n'ayant pas le préfixe.
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Définir les args et les commandes.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Chercher la commande.
  const cmd = client.commands.get(command);

  // Dans le cas où la commande n'existe pas, celle-ci est annulée.
  if (!cmd) return;

  // Dans le cas où la commande existe, celle-ci est exécutée.
  cmd.run(client, message, args);
};