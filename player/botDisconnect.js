module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - A música foi parada automaticamente por Slout você se desconectou do canal !`);
};