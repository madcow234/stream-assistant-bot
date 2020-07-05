import log from 'winston'

/**
 * Emitted whenever a shard's WebSocket encounters a connection error.
 *
 * @param error {Error} the encountered error
 * @param shardID {number} the shard that encountered this error
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (error, shardID) => {
    try {
        log.debug(`Received event 'shardError'.`)


    } catch (err) {
        log.error(`[/events/shardError#run] ${err}`)
    }
}