import log from 'winston'

/**
 * Emitted when a shard turns ready.
 *
 * @param id {number} the shard ID that turned ready
 * @param unavailableGuilds {?Set<string>} set of unavailable guild IDs, if any
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (id, unavailableGuilds) => {
    try {
        log.debug(`Received event 'shardReady'.`)


    } catch (err) {
        log.error(`[/events/shardReady#run] ${err}`)
    }
}