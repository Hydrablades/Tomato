const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    
    client.user.setActivity("t.help", {  
		type: "PLAYING"
    });
    
});

client.on('guildMemberAdd', member => {

    let welcomeChannel = member.guild.channels.cache.find(channel => channel.id === '703694816646660096')
    
    let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(`**Willkommen bei 𝘵𝘰𝘮𝘢𝘵𝘰𝘪𝘴𝘮𝘶𝘴 :crab:**`)
        .addField("Vergiss nicht", '\u200B\n╭✧<#790906706942361650>\n ︰<#703684830784913418>\n ╰✧<#759471610998292480>\n\n**Abzuchecken! Viel Spaß auf dem Server :)**')
        .setImage('https://i.pinimg.com/originals/87/7b/41/877b415bce7717c1a9cc69a72464cf6f.gif')
        .setThumbnail('https://cdn.discordapp.com/icons/640154835223838723/a_5bfa87f402f577a3d9bafbae1f5e6c3f.webp')
        .setAuthor( member.user.username, member.user.avatarURL())
        
    welcomeChannel.send(`Hey <@${member.id}>`)
    welcomeChannel.send(embed)

});

client.on('message', message => {

    if(message.content.toLowerCase() == 't.help') {

        let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Hilfe")
            .addField("t.message", 'Sende eine Nachricht im Namen des Bots (noch nicht verfügbar)')
            .addField("t.info", 'Allgemeine Informationen über den Tomato Bot')
            .addField("Wartung", 'Bei Problemen einfach Hydrablades#0103 per PN anschreiben oder hier auf dem Server taggen.')
        message.channel.send(embed);
    };

    if(message.content.toLowerCase() == 't.info') {

        let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Informationen über den Tomato Bot")
            .setDescription("Der Bot vom 𝘵𝘰𝘮𝘢𝘵𝘰𝘪𝘴𝘮𝘶𝘴 :crab: Server")
            .addField("Bot Version", 'Beta v1.0')
            .addField("Discord.js Version", 'v12')
            .addField("Node.js Version", 'v14.15.3')
            .addField("Source Code", 'TBA')
            .addField("Creator", 'Hydrablades#0103')
            .addField("Befehlsliste", 'Eine Liste mit allen Befehlen des Bots bekommst du mit t.help')
            
        message.channel.send(embed)
    };

    if(message.content.toLowerCase() == 't.test') {
        
        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField("Test", 'Test 3 bestanden')
            
        message.channel.send(embed)
    }



});

client.login('token')