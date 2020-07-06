import { MessageEmbed } from 'discord.js'
import { embeds }        from '../enums'

exports.newErrorEmbed = (errorDescription) => {
    return new MessageEmbed()
        .setDescription(errorDescription)
        .setThumbnail(embeds.images.errorThumbnailUrl)
        .setColor('RED')
        .setTimestamp()
};