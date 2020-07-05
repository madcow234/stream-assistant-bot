import { Channel, User } from 'discord.js'
import log               from 'winston'

/**
 * Emitted whenever a user starts typing in a channel.
 *
 * @param channel {Channel} the channel the user started typing in
 * @param user {User} the user that started typing
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (channel, user) => {
    try {
        log.debug(`Received event 'typingStart'.`)


    } catch (err) {
        log.error(`[/events/typingStart#run] ${err}`)
    }
}