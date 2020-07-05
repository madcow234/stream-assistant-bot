import { GuildMember, Speaking } from 'discord.js'
import log                       from 'winston'

/**
 * Emitted once a guild member changes speaking state.
 *
 * @param member {GuildMember} the member that started/stopped speaking
 * @param speaking {Readonly<Speaking>} the speaking state of the member
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (member, speaking) => {
    try {
        log.debug(`Received event 'guildMemberSpeaking'.`)


    } catch (err) {
        log.error(`[/events/guildMemberSpeaking#run] ${err}`)
    }
}