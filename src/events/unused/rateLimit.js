import log from 'winston'

/**
 * Emitted when the client hits a rate limit while making a request.
 *
 * @param rateLimitInfo {Object} object containing the rate limit info
 *     timeout {number} timeout in ms
 *     limit {number} Number of requests that can be made to this endpoint
 *     method {string} HTTP method used for request that triggered this event
 *     path {string} path used for request that triggered this event
 *     route {string} route used for request that triggered this event
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (rateLimitInfo) => {
    try {
        log.debug(`Received event 'rateLimit'.`)


    } catch (err) {
        log.error(`[/events/rateLimit#run] ${err}`)
    }
}