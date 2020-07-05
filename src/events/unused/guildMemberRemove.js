import { GuildMember } from 'discord.js'
import log             from 'winston'

/**
 * Emitted whenever a member leaves a guild, or is kicked.
 *
 * @param member {GuildMember} the member that has left/been kicked from the guild
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (member) => {
    try {
        log.debug(`Received event 'guildMemberRemove'.`)


    } catch (err) {
        log.error(`[/events/guildMemberRemove#run] ${err}`)
    }
}