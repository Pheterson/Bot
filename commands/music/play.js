module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não esta em um canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não esta em um canal de voz !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Por favor indique o nome da música !`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};