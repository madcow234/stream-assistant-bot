import { Guild, User } from 'discord.js'
import log             from 'winston'

/**
 * Emitted whenever a member is unbanned from a guild.
 *
 * @param guild {Guild} the guild that the unban occurred in
 * @param user {User} the user that was unbanned
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (guild, user) => {
    try {
        log.debug(`Received event 'guildBanRemove'.`)


    } catch (err) {
        log.error(`[/events/guildBanRemove#run] ${err}`)
    }
}