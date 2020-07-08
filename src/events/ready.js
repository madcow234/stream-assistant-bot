import { setupChannelsForGuild } from '../services/channelService'
import { setupRolesForGuild }    from '../services/roleService'
import { mainContext }           from '../application'
import log                       from 'winston'

/**
 * Emitted when the client becomes ready to start working.
 *
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async () => {
    try {
        log.debug(`Received event 'ready'.`)

        for (let guild of mainContext.client.guilds.cache.array()) {
            await setupRolesForGuild(guild)
            await setupChannelsForGuild(guild)
        }


    } catch (err) {
        log.error(`[/events/ready#run] ${err}`)
    }
}