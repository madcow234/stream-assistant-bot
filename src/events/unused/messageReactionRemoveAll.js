import { Message } from 'discord.js'
import log         from 'winston'

/**
 * Emitted whenever all reactions are removed from a cached message.
 *
 * @param message {Message} the message the reactions were removed from
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (message	) => {
    try {
        log.debug(`Received event 'messageReactionRemoveAll'.`)


    } catch (err) {
        log.error(`[/events/messageReactionRemoveAll#run] ${err}`)
    }
}