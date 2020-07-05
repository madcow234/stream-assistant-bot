import { DMChannel, GuildChannel } from 'discord.js'
import log                         from 'winston'

/**
 * Emitted whenever a channel is updated - e.g. name change, topic change, channel type change.
 *
 * @param oldChannel {DMChannel|GuildChannel} the channel before the update
 * @param newChannel {DMChannel|GuildChannel} the channel after the update
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (oldChannel, newChannel) => {
    try {
        log.debug(`Received event 'channelUpdate'.`)


    } catch (err) {
        log.error(`[/events/channelUpdate#run] ${err}`)
    }
}