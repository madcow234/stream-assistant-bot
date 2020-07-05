import { Guild } from 'discord.js'
import log       from 'winston'

/**
 * Emitted whenever a guild kicks the client or the guild is deleted/left.
 *
 * @param guild {Guild} the guild that was deleted
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (guild) => {
    try {
        log.debug(`Received event 'guildDelete'.`)


    } catch (err) {
        log.error(`[/events/guildDelete#run] ${err}`)
    }
}