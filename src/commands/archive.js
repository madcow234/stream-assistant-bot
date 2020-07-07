import { newActionReportEmbed } from '../services/embedService'
import { userHasRoleForGuild }  from '../services/roleService'
import { ROLE, ACTION }         from '../enums'
import { Message }              from 'discord.js'
import log                      from 'winston'

/**
 * Archives the current stream-notes channel and creates a new one.
 *
 * @param message {Message} the full message object that invoked the command
 * @param args {Array<string>} any arguments that were passed with the command
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (message, args) => {
    try {
        log.debug(`Received command 'archive' with ${args.length > 0 ? 'arguments \'' + args.join('\', \'') + '\'' : 'no arguments'}.`)

        if (await userHasRoleForGuild(message.author, ROLE.CREW, message.guild) || message.author.id === message.guild.owner.id) {

            let archiveCategory = message.guild.channels.cache.find(channel => channel.type === 'category' && channel.name === 'Archives')
            let liveCategory = message.guild.channels.cache.find(channel => channel.type === 'category' && channel.name === 'Live')

            let streamNotesChannel = message.guild.channels.cache.find(channel => channel.name === 'stream-notes')

            if (streamNotesChannel) {
                await streamNotesChannel.setParent(archiveCategory.id)
                await streamNotesChannel.setName(`${new Date().toLocaleString('default', { timeZone: 'UTC', dateStyle: 'medium', timeStyle: 'short' })}-utc`)
            }

            await message.guild.channels.create('stream-notes', { type: 'text', parent: liveCategory.id })

            await message.channel.send(newActionReportEmbed(`**The stream notes have been archived.**`, ACTION.SUCCESS))

        } else {
            await message.channel.send(newActionReportEmbed(`<@!${message.author.id}>, you do not have permission to use the \`archive\` command!`, ACTION.ERROR))
        }

    } catch (err) {
        log.error(`[/commands/archive.js] ${err}`);
    }
};