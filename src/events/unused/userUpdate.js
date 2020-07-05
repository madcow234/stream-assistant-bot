import { User } from 'discord.js'
import log      from 'winston'

/**
 * Emitted whenever a user's details (e.g. username) are changed.
 *
 * @param oldUser {User} the user before the update
 * @param newUser {User} the user after the update
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (oldUser, newUser) => {
    try {
        log.debug(`Received event 'userUpdate'.`)


    } catch (err) {
        log.error(`[/events/userUpdate#run] ${err}`)
    }
}