import { EMBED, ACTION } from '../enums'
import { MessageEmbed }  from 'discord.js'

exports.newActionReportEmbed = (description, action) => {
    let color, thumbnailUrl
    switch (action) {
        case ACTION.SUCCESS:
            color = 'DARK_GREEN'
            thumbnailUrl = EMBED.THUMBNAIL.SUCCESS
            break
        case ACTION.ERROR:
            color = 'DARK_RED'
            thumbnailUrl = EMBED.THUMBNAIL.ERROR
            break
    }
    return new MessageEmbed()
        .setDescription(description)
        .setThumbnail(thumbnailUrl)
        .setColor(color)
        .setTimestamp()
}

exports.newLiveStreamPrepEmbed = (mentions, started, oneMember) => {
    return new MessageEmbed()
        .setDescription(`**${started ? 'Screen Room has started preparation for a new stream' : `${oneMember ? 'Another cast member has' : 'More cast members have'} been added to tonight's stream`}!\n\n${started ? 'Members' : 'Welcome'}:**\n\n${mentions.join('\n\n')}`)
        .setThumbnail(EMBED.THUMBNAIL.LOADING)
        .setColor('ORANGE')
        .setTimestamp()
}

exports.newLiveStreamStartEmbed = (castMentions) => {
    return new MessageEmbed()
        .setDescription(`**A new live stream has started!\n\nCast:**\n\n${castMentions.join('\n\n')}\n\n**Watch on [Twitch](https://www.twitch.tv/screenroom)!**`)
        .setThumbnail(EMBED.THUMBNAIL.LIVE)
        .setColor('RED')
        .setTimestamp()
}

exports.newLiveStreamStoppedEmbed = (userId) => {
    return new MessageEmbed()
        .setDescription(`**The stream has been stopped by <@!${userId}>.**`)
        .setThumbnail(EMBED.THUMBNAIL.SUCCESS)
        .setColor('GREEN')
        .setTimestamp()
}