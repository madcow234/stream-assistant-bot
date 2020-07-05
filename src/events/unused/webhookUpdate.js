import { TextChannel } from 'discord.js'
import log             from 'winston'

/**
 * Emitted whenever a guild text channel has its webhooks changed.
 *
 * @param channel {TextChannel} the user before the update
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (channel) => {
    try {
        log.debug(`Received event 'webhookUpdate'.`)


    } catch (err) {
        log.error(`[/events/webhookUpdate#run] ${err}`)
    }
}