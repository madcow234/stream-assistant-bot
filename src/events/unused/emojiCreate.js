import { GuildEmoji } from 'discord.js'
import log            from 'winston'

/**
 * Emitted whenever a custom emoji is created in a guild.
 *
 * @param emoji {GuildEmoji} the emoji that was created
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (emoji) => {
    try {
        log.debug(`Received event 'emojiCreate'.`)


    } catch (err) {
        log.error(`[/events/emojiCreate#run] ${err}`)
    }
}