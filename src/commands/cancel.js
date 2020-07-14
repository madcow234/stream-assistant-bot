import { newActionReportEmbed, newLiveStreamCancelledEmbed } from '../services/embedService'
import { removeRole, userHasRoleForGuild }                   from '../services/roleService'
import { ROLE, ACTION, CHANNEL }                             from '../enums'
import { Message }                                           from 'discord.js'
import log                                                   from 'winston'

/**
 * Perform cleanup actions after cancelling a live stream preparation.
 *
 * @param message {Message} the full message object that invoked the command
 * @param args {Array<string>} any arguments that were passed with the command
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (message, args) => {
    try {
        log.debug(`Received command 'cancel' with ${args.length > 0 ? 'arguments \'' + args.join('\', \'') + '\'' : 'no arguments'}.`)

        if (await userHasRoleForGuild(message.author, ROLE.CAST.NAME, message.guild) || message.author.id === message.guild.owner.id) {
            await clearChannel(message.guild.channels.cache.find(channel => channel.name === CHANNEL.VOICE.PREPARING.NAME))
            await clearChannel(message.guild.channels.cache.find(channel => channel.name === CHANNEL.VOICE.STREAMING.NAME))
            await clearChannel(message.guild.channels.cache.find(channel => channel.name === CHANNEL.VOICE.RETROSPECTIVE.NAME))

            await message.channel.send(newLiveStreamCancelledEmbed(message.author.id))

        } else {
            await message.channel.send(newActionReportEmbed(`<@!${message.author.id}>, you do not have permission to use the \`cancel\` command!`, ACTION.ERROR))
        }

    } catch (err) {
        log.error(`[/commands/cancel.js] ${err}`);
    }
};

const clearChannel = async (channel) => {
    let stagingChannel = channel.guild.channels.cache.find(channel => channel.name === CHANNEL.VOICE.STAGING.NAME)

    for (let guildMember of channel.members.array()) {
        if (await userHasRoleForGuild(guildMember.user, ROLE.CAST.NAME, channel.guild)) {
            await guildMember.voice.setChannel(stagingChannel.id, 'The stream has been canceled! Moving Cast to Staging.')

        } else {
            await guildMember.voice.setChannel(null, 'The stream has been canceled! Stay tuned for more information.')
        }

        await removeRole(channel.guild, guildMember.user, ROLE.PREPARING.NAME)
        await removeRole(channel.guild, guildMember.user, ROLE.STREAMING_CAST.NAME)
        await removeRole(channel.guild, guildMember.user, ROLE.STREAMING_GUESTS.NAME)
        await removeRole(channel.guild, guildMember.user, ROLE.RETROSPECTIVE.NAME)
    }
}