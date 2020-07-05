import { Guild } from 'discord.js'
import log       from 'winston'

/**
 * Emitted whenever a guild integration is updated.
 *
 * @param guild {Guild} the guild whose integrations were updated
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (guild) => {
    try {
        log.debug(`Received event 'guildIntegrationsUpdate'.`)


    } catch (err) {
        log.error(`[/events/guildIntegrationsUpdate#run] ${err}`)
    }
}