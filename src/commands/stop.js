import { newActionReportEmbed, newLiveStreamStoppedEmbed } from '../services/embedService'
import { removeRole, userHasRoleForGuild }                 from '../services/roleService'
import { ROLE, ACTION }                                    from '../enums'
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

        if (await userHasRoleForGuild(message.author, ROLE.CREW, message.guild) || message.author.id === message.guild.owner.id) {
            let castRole = message.guild.roles.cache.find(role => role.name === ROLE.CAST)

            for (let member of castRole.members.array()) {
                await removeRole(message.guild, member.user, ROLE.CAST)
            }

            await message.channel.send(newLiveStreamStoppedEmbed(message.author.id))

        } else {
            await message.channel.send(newActionReportEmbed(`<@!${message.author.id}>, you do not have permission to use the \`stop\` command!`, ACTION.ERROR))
        }

    } catch (err) {
        log.error(`[/commands/stop.js] ${err}`);
    }
};