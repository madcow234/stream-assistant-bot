import { newActionReportEmbed, newLiveStreamStartEmbed } from '../services/embedService'
import { assignRole, userHasRoleForGuild, removeRole }   from '../services/roleService'
import { buildMentionsArray }                            from '../services/mentionsService'
import { ROLE, ACTION, CHANNEL }                         from '../enums'
import { Message }                                       from 'discord.js'
import log                                               from 'winston'

/**
 * Perform setup actions before starting a live stream.
 *
 * @param message {Message} the full message object that invoked the command
 * @param args {Array<string>} any arguments that were passed with the command
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (message, args) => {
    try {
        log.debug(`Received command 'start' with ${args.length > 0 ? 'arguments \'' + args.join('\', \'') + '\'' : 'no arguments'}.`)

        if (await userHasRoleForGuild(message.author, ROLE.CAST.NAME, message.guild) || message.author.id === message.guild.owner.id) {
            let mentionsArray = await buildMentionsArray(message.mentions)

            let role = message.guild.roles.cache.find(role => role.name === ROLE.PREPARING.NAME)

            for (let member of role.members.array()) {
                mentionsArray.push(member.user)
            }

            let preparingChannel = message.guild.channels.cache.find(channel => channel.name === CHANNEL.VOICE.PREPARING.NAME)
            let preparingUsersArray = preparingChannel.members.array()

            let notPreparingUsers = mentionsArray.filter(x => !preparingUsersArray.find((user => user.id === x.id)))

            if (notPreparingUsers.length === 0) {
                let streamingChannel = message.guild.channels.cache.find(channel => channel.name === CHANNEL.VOICE.STREAMING.NAME)

                for (let mention of mentionsArray) {
                    await assignRole(message.guild, mention, ROLE.STREAMING_CAST.NAME)
                    await removeRole(message.guild, mention, ROLE.PREPARING.NAME)

                    let guildMember = message.guild.members.cache.find(member => member.user.id === mention.id)

                    await guildMember.voice.setChannel(streamingChannel.id, 'The live stream has started!')
                }

                await message.channel.send(newLiveStreamStartEmbed(mentionsArray))

            } else {
                await message.channel.send(newActionReportEmbed(`**The following cast members are not yet prepared to stream:**\n\n${notPreparingUsers.join('\n\n')}`, ACTION.ERROR))
            }

        } else {
            await message.channel.send(newActionReportEmbed(`<@!${message.author.id}>, you do not have permission to use the \`start\` command!`, ACTION.ERROR))
        }

    } catch (err) {
        log.error(`[/commands/start.js] ${err}`);
    }
};