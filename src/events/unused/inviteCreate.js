import { Invite } from 'discord.js'
import log        from 'winston'

/**
 * Emitted when an invite is created.
 * NOTE: This event only triggers if the client has MANAGE_GUILD permissions for the guild, or MANAGE_CHANNEL permissions for the channel.
 *
 * @param invite {Invite} the invite that was created
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (invite) => {
    try {
        log.debug(`Received event 'inviteCreate'.`)


    } catch (err) {
        log.error(`[/events/inviteCreate#run] ${err}`)
    }
}