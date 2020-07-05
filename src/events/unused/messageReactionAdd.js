import { MessageReaction, User } from 'discord.js'
import log                       from 'winston'

/**
 * Emitted whenever a reaction is removed from a cached message.
 *
 * @param messageReaction {MessageReaction} the reaction object
 * @param user {User} the user that applied the guild or reaction emoji
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (messageReaction, user) => {
    try {
        log.debug(`Received event 'messageReactionAdd'.`)


    } catch (err) {
        log.error(`[/events/messageReactionAdd#run] ${err}`)
    }
}