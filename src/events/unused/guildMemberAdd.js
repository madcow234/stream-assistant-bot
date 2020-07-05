import { GuildMember } from 'discord.js'
import log             from 'winston'

/**
 * Emitted whenever a user joins a guild.
 *
 * @param member {GuildMember} the member that has joined a guild
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (member) => {
    try {
        log.debug(`Received event 'guildMemberAdd'.`)


    } catch (err) {
        log.error(`[/events/guildMemberAdd#run] ${err}`)
    }
}