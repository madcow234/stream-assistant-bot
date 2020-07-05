import log from 'winston'

/**
 * Emitted when a shard's WebSocket disconnects and will no longer reconnect.
 *
 * @param event {CloseEvent} the WebSocket close event
 * @param id {number} the shard ID that disconnected
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (event, id) => {
    try {
        log.debug(`Received event 'shardDisconnect'.`)


    } catch (err) {
        log.error(`[/events/shardDisconnect#run] ${err}`)
    }
}