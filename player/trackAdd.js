module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title} Voce adicionou uma música a playlist  !`);
};