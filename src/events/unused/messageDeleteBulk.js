import { Message } from 'discord.js'
import log         from 'winston'

/**
 * Emitted whenever messages are deleted in bulk.
 *
 * @param messages {Collection<Snowflake, Message>} the deleted messages, mapped by their ID
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (messages) => {
    try {
        log.debug(`Received event 'messageDeleteBulk'.`)


    } catch (err) {
        log.error(`[/events/messageDeleteBulk#run] ${err}`)
    }
}