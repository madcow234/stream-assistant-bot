import { Role } from 'discord.js'
import log      from 'winston'

/**
 * Emitted whenever a role is created.
 *
 * @param role {Role} the role that was created
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (role) => {
    try {
        log.debug(`Received event 'roleCreate'.`)


    } catch (err) {
        log.error(`[/events/roleCreate#run] ${err}`)
    }
}