import { GuildEmoji } from 'discord.js'
import log            from 'winston'

/**
 * Emitted whenever a custom emoji is deleted in a guild.
 *
 * @param emoji {GuildEmoji} the emoji that was deleted
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (emoji) => {
    try {
        log.debug(`Received event 'emojiDelete'.`)


    } catch (err) {
        log.error(`[/events/emojiDelete#run] ${err}`)
    }
}