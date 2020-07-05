import { MessageReaction, User } from 'discord.js'
import log                       from 'winston'

/**
 *
 * @param messageReaction {MessageReaction} the reaction object
 * @param user {User} the user whose emoji or reaction emoji was removed
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (messageReaction, user) => {
    try {
        log.debug(`Received event 'messageReactionRemove'.`)


    } catch (err) {
        log.error(`[/events/messageReactionRemove#run] ${err}`)
    }
}