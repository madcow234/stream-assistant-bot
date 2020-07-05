import { Role } from 'discord.js'
import log      from 'winston'

/**
 * Emitted whenever a guild role is deleted.
 *
 * @param role {Role} te role that was deleted
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (role) => {
    try {
        log.debug(`Received event 'roleDelete'.`)


    } catch (err) {
        log.error(`[/events/roleDelete#run] ${err}`)
    }
}