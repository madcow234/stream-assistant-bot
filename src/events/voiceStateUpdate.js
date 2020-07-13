import { CHANNEL, ROLE } from '../enums'
import { removeRole }    from '../services/roleService'
import { VoiceState }    from 'discord.js'
import log               from 'winston'

/**
 * Emitted whenever a member changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
 *
 * @param oldState {VoiceState} the user before the update
 * @param newState {VoiceState} the user after the update
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (oldState, newState) => {
    try {
        log.debug(`Received event 'voiceStateUpdate'.`)

        if (oldState.channel && oldState.channel.name === CHANNEL.VOICE.RETROSPECTIVE.NAME) {
            await removeRole(oldState.guild, oldState.member.user, ROLE.RETROSPECTIVE.NAME)
        }

    } catch (err) {
        log.error(`[/events/voiceStateUpdate#run] ${err}`)
    }
}