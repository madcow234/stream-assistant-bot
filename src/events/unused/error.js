import log from 'winston'

/**
 * Emitted when the client encounters an error.
 *
 * @param error {string} the error encountered
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (error) => {
    try {
        log.debug(`Received event 'error'.`)


    } catch (err) {
        log.error(`[/events/error#run] ${err}`)
    }
}