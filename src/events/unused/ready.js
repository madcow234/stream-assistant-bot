import log from 'winston'

/**
 * Emitted when the client becomes ready to start working.
 *
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async () => {
    try {
        log.debug(`Received event 'ready'.`)


    } catch (err) {
        log.error(`[/events/ready#run] ${err}`)
    }
}