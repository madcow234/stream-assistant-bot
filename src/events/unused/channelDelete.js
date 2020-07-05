import { DMChannel, GuildChannel } from 'discord.js'
import log                         from 'winston'

/**
 * Emitted whenever a channel is deleted.
 *
 * @param channel {DMChannel|GuildChannel} the channel that was deleted
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (channel) => {
    try {
        log.debug(`Received event 'channelDelete'.`)


    } catch (err) {
        log.error(`[/events/channelDelete#run] ${err}`)
    }
}