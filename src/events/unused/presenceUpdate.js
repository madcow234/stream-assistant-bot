import { Presence } from 'discord.js'
import log          from 'winston'

/**
 * Emitted whenever a guild member's presence (e.g. status, activity) is changed.
 *
 * @param oldPresence {?Presence} the presence before the update, if one at all
 * @param newPresence {Presence} the presence after the update
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (oldPresence, newPresence) => {
    try {
        log.debug(`Received event 'presenceUpdate'.`)


    } catch (err) {
        log.error(`[/events/presenceUpdate#run] ${err}`)
    }
}