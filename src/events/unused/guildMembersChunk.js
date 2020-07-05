import { Snowflake, Guild, GuildMember } from 'discord.js'
import log                               from 'winston'

/**
 * Emitted whenever a chunk of guild members is received (all members come from the same guild).
 *
 * @param members {Collection<Snowflake, GuildMember>} the members in the chunk
 * @param guild {Guild} the guild related to the member chunk
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (members, guild) => {
    try {
        log.debug(`Received event 'guildMembersChunk'.`)


    } catch (err) {
        log.error(`[/events/guildMembersChunk#run] ${err}`)
    }
}