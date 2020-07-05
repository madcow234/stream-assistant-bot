import { Message } from 'discord.js'
import log         from 'winston'

/**
 * Emitted whenever a message is updated - e.g. embed or content change.
 *
 * @param oldMessage {Message} the message before the update
 * @param newMessage {Message} the message after the update
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (oldMessage, newMessage) => {
    try {
        log.debug(`Received event 'messageUpdate'.`)


    } catch (err) {
        log.error(`[/events/messageUpdate#run] ${err}`)
    }
}