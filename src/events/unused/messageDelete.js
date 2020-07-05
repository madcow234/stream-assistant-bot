import { Message } from 'discord.js'
import log         from 'winston'

/**
 * Emitted whenever a message is deleted.
 *
 * @param message {Message} the deleted message
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (message) => {
    try {
        log.debug(`Received event 'messageDelete'.`)


    } catch (err) {
        log.error(`[/events/messageDelete#run] ${err}`)
    }
}