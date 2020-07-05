import log from 'winston'

/**
 * Emitted when a shard resumes successfully.
 *
 * @param id {number} the shard ID that resumed
 * @param replayedEvents {number} the amount of replayed events
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (id, replayedEvents) => {
    try {
        log.debug(`Received event 'shardResume'.`)


    } catch (err) {
        log.error(`[/events/shardResume#run] ${err}`)
    }
}