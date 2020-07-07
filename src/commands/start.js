import { newActionReportEmbed, newLiveStreamStartEmbed } from '../services/embedService'
import { assignRole, userHasRoleForGuild }               from '../services/roleService'
import { buildMentionsArray }                            from '../services/mentionsService'
import { ROLE, ACTION }                                  from '../enums'
import { mainContext }                                   from '../application'
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

        if (await userHasRoleForGuild(message.author, ROLE.CREW, message.guild)) {
            let mentionsArray = await buildMentionsArray(message.mentions)

            for (let mention of mentionsArray) {
                await assignRole(message.guild, mention, ROLE.CAST)
            }

            await mainContext.client.user.setAvatar(`https://cdn.discordapp.com/attachments/673213456526082053/729899982890467368/StreamAssistantBotLiveAvatar.png`)

            await message.channel.send(newLiveStreamStartEmbed(mentionsArray))

        } else {
            await message.channel.send(newActionReportEmbed(`<@!${message.author.id}>, you do not have permission to use the \`start\` command!`, ACTION.ERROR))
        }

    } catch (err) {
        log.error(`[/commands/start.js] ${err}`);
    }
};