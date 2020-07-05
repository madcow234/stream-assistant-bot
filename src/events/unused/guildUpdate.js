import { Guild } from 'discord.js'
import log       from 'winston'

/**
 * Emitted whenever a guild is updated - e.g. name change.
 *
 * @param oldGuild {Guild} the guild before the update
 * @param newGuild {Guild} the guild after the update
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (oldGuild, newGuild) => {
    try {
        log.debug(`Received event 'guildUpdate'.`)


    } catch (err) {
        log.error(`[/events/guildUpdate#run] ${err}`)
    }
}