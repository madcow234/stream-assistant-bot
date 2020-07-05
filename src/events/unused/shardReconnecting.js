import log from 'winston'

/**
 * Emitted when a shard is attempting to reconnect or re-identify.
 *
 * @param id {number} the shard ID that is attempting to reconnect
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (id) => {
    try {
        log.debug(`Received event 'shardReconnecting'.`)


    } catch (err) {
        log.error(`[/events/shardReconnecting#run] ${err}`)
    }
}