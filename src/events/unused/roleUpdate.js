import { Role } from 'discord.js'
import log      from 'winston'

/**
 * Emitted whenever a guild role is updated.
 *
 * @param oldRole {Role} the role before the update
 * @param newRole {Role} the role after the update
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (oldRole, newRole) => {
    try {
        log.debug(`Received event 'roleUpdate'.`)


    } catch (err) {
        log.error(`[/events/roleUpdate#run] ${err}`)
    }
}