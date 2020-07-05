import log from 'winston'

/**
 * Emitted for general debugging information.
 *
 * @param info {string} the debug information
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (info) => {
    try {
        log.debug(`Received event 'debug'.`)


    } catch (err) {
        log.error(`[/events/debug#run] ${err}`)
    }
}