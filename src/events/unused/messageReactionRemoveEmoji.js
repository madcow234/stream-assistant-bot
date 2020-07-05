import { MessageReaction } from 'discord.js'
import log                 from 'winston'

/**
 * Emitted when a bot removes an emoji reaction from a cached message.
 *
 * @param reaction {MessageReaction} the reaction that was removed
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (reaction) => {
    try {
        log.debug(`Received event 'messageReactionRemoveEmoji'.`)


    } catch (err) {
        log.error(`[/events/messageReactionRemoveEmoji#run] ${err}`)
    }
}