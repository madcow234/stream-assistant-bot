import { newActionReportEmbed, newLiveStreamPrepEmbed } from '../services/embedService'
import { assignRole, userHasRoleForGuild }              from '../services/roleService'
import { buildMentionsArray }                           from '../services/mentionsService'
import { ROLE, ACTION }                                 from '../enums'
import { Message }                                      from 'discord.js'
import log                                              from 'winston'

/**
 *
 *
 * @param message {Message} the full message object that invoked the command
 * @param args {Array<string>} any arguments that were passed with the command
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (message, args) => {
    try {
        log.debug(`Received command 'prep' with ${args.length > 0 ? 'arguments \'' + args.join('\', \'') + '\'' : 'no arguments'}.`)

        if (await userHasRoleForGuild(message.author, ROLE.CAST.NAME, message.guild) || message.author.id === message.guild.owner.id) {
            let mentionsArray = await buildMentionsArray(message.mentions)

            let started = false
            let role = message.guild.roles.cache.find(role => role.name === ROLE.PREPARING.NAME)

            if (role.members.size === 0) { started = true }

            for (let mention of mentionsArray) {
                await assignRole(message.guild, mention, ROLE.PREPARING.NAME)
            }

            await message.channel.send(newLiveStreamPrepEmbed(mentionsArray, started, mentionsArray.length === 1))

        } else {
            await message.channel.send(newActionReportEmbed(`<@!${message.author.id}>, you do not have permission to use the \`prep\` command!`, ACTION.ERROR))
        }

    } catch (err) {
        log.error(`[/commands/prep.js] ${err}`);
    }
};