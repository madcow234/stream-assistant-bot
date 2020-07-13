import { newActionReportEmbed, newLiveStreamStoppedEmbed } from '../services/embedService'
import { removeRole, userHasRoleForGuild }                 from '../services/roleService'
import {ROLE, ACTION, CHANNEL} from '../enums'
import { Message }                                         from 'discord.js'
import log                                                 from 'winston'

/**
 * Perform cleanup actions after stopping a live stream.
 *
 * @param message {Message} the full message object that invoked the command
 * @param args {Array<string>} any arguments that were passed with the command
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (message, args) => {
    try {
        log.debug(`Received command 'stop' with ${args.length > 0 ? 'arguments \'' + args.join('\', \'') + '\'' : 'no arguments'}.`)

        if (await userHasRoleForGuild(message.author, ROLE.CAST.NAME, message.guild) || message.author.id === message.guild.owner.id) {
            let streamingChannel = message.guild.channels.cache.find(channel => channel.name === CHANNEL.VOICE.STREAMING.NAME)
            let retrospectiveChannel = message.guild.channels.cache.find(channel => channel.name === CHANNEL.VOICE.RETROSPECTIVE.NAME)

            for (let guildMember of streamingChannel.members.array()) {
                if (await userHasRoleForGuild(guildMember.user, ROLE.STREAMING_CAST.NAME, message.guild)) {
                    await guildMember.voice.setChannel(retrospectiveChannel.id, 'The stream has ended, time for retrospective!')

                } else {
                    await guildMember.voice.setChannel(null, 'The stream has ended, thanks for joining!')
                }
            }

            let castRole = message.guild.roles.cache.find(role => role.name === ROLE.STREAMING_CAST.NAME)
            let guestRole = message.guild.roles.cache.find(role => role.name === ROLE.STREAMING_GUESTS.NAME)

            for (let member of castRole.members.array()) {
                await removeRole(message.guild, member.user, ROLE.STREAMING_CAST.NAME)
            }

            for (let member of guestRole.members.array()) {
                await removeRole(message.guild, member.user, ROLE.STREAMING_GUESTS.NAME)
            }

            await message.channel.send(newLiveStreamStoppedEmbed(message.author.id))

        } else {
            await message.channel.send(newActionReportEmbed(`<@!${message.author.id}>, you do not have permission to use the \`stop\` command!`, ACTION.ERROR))
        }

    } catch (err) {
        log.error(`[/commands/stop.js] ${err}`);
    }
};