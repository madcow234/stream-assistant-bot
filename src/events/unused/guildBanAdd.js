import { Guild, User } from 'discord.js'
import log             from 'winston'

/**
 * Emitted whenever a member is banned from a guild.
 *
 * @param guild {Guild} the guild that the ban occurred in
 * @param user {User} the user that was banned
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (guild, user) => {
    try {
        log.debug(`Received event 'guildBanAdd'.`)


    } catch (err) {
        log.error(`[/events/guildBanAdd#run] ${err}`)
    }
}