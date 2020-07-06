import { removeRole } from '../services/roleService'
import { Message }    from 'discord.js'
import { roles }      from '../enums'
import log            from 'winston'

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

        let castRole = message.guild.roles.cache.find(role => role.name === roles.liveStreamingCast)

        for (let member of castRole.members.array()) {
            await removeRole(message.guild, member.user, roles.liveStreamingCast)
        }

    } catch (err) {
        log.error(`[/commands/stop.js] ${err}`);
    }
};