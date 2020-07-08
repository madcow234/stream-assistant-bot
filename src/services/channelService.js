import { CHANNEL } from '../enums';
import log         from 'winston';

/**
 * Prepares a {@link Guild} with all configured {@link Channel}s.
 *
 * @param guild the {@link Guild} to prepare with all configured {@link Channel}s
 * @returns {Promise<Boolean>} true if all {@link Channel}s were created, false if not
 */
exports.setupChannelsForGuild = async (guild) => {
    try {
        log.info(`Preparing channels for guild '${guild.name}' (${guild.id}).`)

        for (let [channelType, channels] of Object.entries(CHANNEL)) {
            for (let channel of Object.values(channels)) {
                await module.exports.createChannelIfNotExists(guild, channel.NAME, channelType, channel.PARENT)
            }
        }

        log.info(`Successfully prepared all channels for guild '${guild.name}' (${guild.id}).`)
        return true

    } catch (err) {
        log.error(`[/services/channelService#setupChannelsForGuild] ${err}`)
        return false
    }
}

/**
 * Creates a {@link Channel} for a {@link Guild} if it does not already exist.
 *
 * @param guild the {@link Guild} to update
 * @param channelName the name of the {@link Channel} to create
 * @param channelType the type of the {@link Channel} to create
 * @param parentName the name of the parent to create the {@link Channel} under
 * @returns {Promise<Boolean>} true if {@link Channel} was created, false if not
 */
exports.createChannelIfNotExists = async (guild, channelName, channelType, parentName) => {
    try {
        log.debug(`Checking guild '${guild.name}' (${guild.id}) for channel '${channelName}'.`)
        let channel = guild.channels.cache.find(channel => channel.type === channelType.toLowerCase() && channel.name === channelName)

        if (!channel) {
            log.debug(`Channel '${channelName}' does not exist for guild '${guild.name}' (${guild.id})... creating now.`)
            let parent = guild.channels.cache.find(channel => channel.type === 'category' && channel.name === parentName)
            channel = await guild.channels.create(channelName, { type: channelType, parent: parent?.id } )
            await channel.lockPermissions()
            log.info(`Successfully created '${channelName}' channel for guild '${guild.name}' (${guild.id}).`)

        } else {
            log.info(`Guild '${guild.name}' (${guild.id}) already contains '${channelName}' channel... no need to create.`)
        }

        return true

    } catch (err) {
        log.error(`[/services/channelService#createChannelIfNotExists] ${err}`)
        return false
    }
}