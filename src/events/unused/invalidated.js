import log from 'winston'

/**
 * Emitted when the client's session becomes invalidated.
 * You are expected to handle closing the process gracefully and preventing a boot loop if you are listening to this event.
 *
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async () => {
    try {
        log.debug(`Received event 'invalidated'.`)


    } catch (err) {
        log.error(`[/events/invalidated#run] ${err}`)
    }
}