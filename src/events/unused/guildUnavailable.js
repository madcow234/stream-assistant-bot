import { Guild } from 'discord.js'
import log       from 'winston'

/**
 * Emitted whenever a guild becomes unavailable, likely due to a server outage.
 *
 * @param guild {Guild} the guild that has become unavailable
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (guild) => {
    try {
        log.debug(`Received event 'guildUnavailable'.`)


    } catch (err) {
        log.error(`[/events/guildUnavailable#run] ${err}`)
    }
}