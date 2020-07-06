import { removeRole, userHasRoleForGuild } from '../services/roleService'
import { newErrorEmbed }                   from '../services/embedService'
import { Message }                         from 'discord.js'
import { roles }                           from '../enums'
import log                                 from 'winston'

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

        if (await userHasRoleForGuild(message.author, roles.crew, message.guild)) {
            let castRole = message.guild.roles.cache.find(role => role.name === roles.liveStreamingCast)

            for (let member of castRole.members.array()) {
                await removeRole(message.guild, member.user, roles.liveStreamingCast)
            }

        } else {
            await message.channel.send(newErrorEmbed(`<@!${message.author.id}>, you do not have permission to use the \`stop\` command!`))
        }

    } catch (err) {
        log.error(`[/commands/stop.js] ${err}`);
    }
};