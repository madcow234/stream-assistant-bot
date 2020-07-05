import log from 'winston'

/**
 * Emitted for general warnings.
 *
 * @param info {string} the warning
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (info) => {
    try {
        log.debug(`Received event 'warn'.`)


    } catch (err) {
        log.error(`[/events/warn#run] ${err}`)
    }
}