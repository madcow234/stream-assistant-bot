import { assignRole, userHasRoleForGuild } from '../services/roleService'
import { buildMentionsArray }              from '../services/mentionsService'
import { newErrorEmbed }                   from '../services/embedService'
import { Message }                         from 'discord.js'
import { roles }                           from '../enums'
import log                                 from 'winston'

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

        if (await userHasRoleForGuild(message.author, roles.crew, message.guild)) {
            let mentionsArray = await buildMentionsArray(message.mentions)

            for (let mention of mentionsArray) {
                await assignRole(message.guild, mention, roles.liveStreamingCast)
            }

        } else {
            await message.channel.send(newErrorEmbed(`<@!${message.author.id}>, you do not have permission to use the \`start\` command!`))
        }

    } catch (err) {
        log.error(`[/commands/start.js] ${err}`);
    }
};