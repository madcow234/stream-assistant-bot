import { GuildMember } from 'discord.js'
import log             from 'winston'

/**
 * Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
 *
 * @param oldMember {GuildMember} the member before the update
 * @param newMember {GuildMember} the member after the update
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (oldMember, newMember) => {
    try {
        log.debug(`Received event 'guildMemberUpdate'.`)


    } catch (err) {
        log.error(`[/events/guildMemberUpdate#run] ${err}`)
    }
}