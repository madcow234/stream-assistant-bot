import { DMChannel, GuildChannel } from 'discord.js'
import log                         from 'winston'

/**
 * Emitted whenever the pins of a channel are updated.
 * Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself.
 *
 * @param channel {DMChannel|GuildChannel} the channel that the pins update occurred in
 * @param time {Date} the time of the pins update
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (channel, time) => {
    try {
        log.debug(`Received event 'channelPinsUpdate'.`)


    } catch (err) {
        log.error(`[/events/channelPinsUpdate#run] ${err}`)
    }
}