import { GuildEmoji } from 'discord.js'
import log            from 'winston'

/**
 * Emitted whenever a custom emoji is updated in a guild.
 *
 * @param oldEmoji {GuildEmoji} the old emoji
 * @param newEmoji {GuildEmoji} the new emoji
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (oldEmoji, newEmoji) => {
    try {
        log.debug(`Received event 'emojiUpdate'.`)


    } catch (err) {
        log.error(`[/events/emojiUpdate#run] ${err}`)
    }
}