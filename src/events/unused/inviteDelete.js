import { Invite } from 'discord.js'
import log        from 'winston'

/**
 * Emitted when an invite is deleted.
 * NOTE: This event only triggers if the client has MANAGE_GUILD permissions for the guild, or MANAGE_CHANNEL permissions for the channel.
 *
 * @param invite {Invite} the invite that was deleted
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (invite) => {
    try {
        log.debug(`Received event 'inviteDelete'.`)


    } catch (err) {
        log.error(`[/events/inviteDelete#run] ${err}`)
    }
}