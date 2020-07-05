import { Guild } from 'discord.js'
import log       from 'winston'

/**
 * Emitted whenever the client joins a guild.
 *
 * @param guild {Guild} the created guild
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (guild) => {
    try {
        log.debug(`Received event 'guildCreate'.`)


    } catch (err) {
        log.error(`[/events/guildCreate#run] ${err}`)
    }
}