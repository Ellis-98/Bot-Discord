module.exports = (client) => {
  console.log(`Je suis opérationnel et prêt à servir `+client.guilds.cache.size +" serveurs et "+client.users.cache.size+" utilisateurs");
}
