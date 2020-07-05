import { DMChannel, GuildChannel } from 'discord.js'
import log                         from 'winston'

/**
 * Emitted whenever a channel is created.
 *
 * @param channel {DMChannel|GuildChannel} the channel that was created
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (channel) => {
    try {
        log.debug(`Received event 'channelCreate'.`)


    } catch (err) {
        log.error(`[/events/channelCreate#run] ${err}`)
    }
}