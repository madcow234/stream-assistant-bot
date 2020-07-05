import { mainContext } from '../application'
import { getCommands } from '../commands'
import { Message }     from 'discord.js'
import log             from 'winston'

/**
 * Emitted whenever a message is created.
 * Filters which messages should be sent to the command monitor.
 *
 * @param message {Message} the created message
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (message) => {
    try {
        log.debug(`Received event 'message'.`)

        // Don't respond to bots...unless I'm the one talking
        if (message.author.bot && message.author.id !== mainContext.client.user.id) return

        log.debug(`Checking if message begins with prefix '${process.env.PREFIX}'.`)

        // Don't respond if the message doesn't start with the prefix
        if (!message.content.toLowerCase().startsWith(process.env.PREFIX.toLowerCase())) {
            log.debug(`Message does not begin with prefix, no need to respond.`)
            return
        }

        // Now we know the message is probably meant for us, so tokenize it into an array of arguments
        let args = message.content.trim().split(/ +/g)

        // Remove and return the first element in the array as the prefix
        let prefix = args.shift().toLowerCase()

        // Ensure that the first argument is exactly the prefix and not just startsWith
        // We do this because it is cheaper to first check startsWith on every message
        // This allows us to have both !app and !app-dev prefixes on separate bots
        // This also reduces the possible namespace collisions on the prefix from other bots
        if (prefix !== process.env.PREFIX.toLowerCase()) {
            log.debug(`Message does not begin with prefix, no need to respond.`)
            return
        }

        // Remove and return the first element in the array as the command
        let command = args.shift()

        // We need to fetch the full channel object
        let channel = await message.channel.fetch()

        let author = message.author
        let guild = message.guild

        log.info(`Successfully determined a message in guild '${guild.name}' (${guild.id}) and channel '${channel.name}' (${channel.id}) is intended for me, checking for user command now.`)

        // Delete the command message
        await message.delete()

        // If the command does not contain any arguments, return
        if (!command) {
            log.info(`User '${author.username}' (${author.id}) sent a message without a command in guild '${guild.name}' (${guild.id}) and channel '${channel.name}' (${channel.id}).`)
            log.info(`It may be a good idea to update the 'message' event to notify the user that they should issue a command in order to use the bot.`)
            return
        }

        log.info(`User '${author.username}' (${author.id}) has requested command '${command}' in guild '${guild.name}' (${guild.id}) and channel '${channel.name}' (${channel.id}).`)

        // Read the /commands/ folder and create a list of available commands to verify user-issued commands against
        // This is very important because the required commandFile below relies on user input to call a file, which can be very dangerous
        // We need to ensure that ONLY commands already available in the /commands/ directory actually load a file
        let availableCommands = await getCommands()

        // Log a warning if there are no files in the directory
        if (availableCommands.length === 0) {
            log.warn(`No commands were found on the server, add some user commands to the /commands/ directory to make the bot useful.`)
            return
        }

        // Exit if the user attempted to issue a command that is not available in the /commands/ folder
        if (availableCommands.lastIndexOf(command.toLowerCase()) === -1) {
            log.info(`User '${author.username}' (${author.id}) attempted to execute an invalid command '${command}' in guild '${guild.name}' (${guild.id}) and channel '${channel.name}' (${channel.id}).`)
            return
        }

        log.info(`Request is validated, executing command '${command}' for user '${author.username}' (${author.id}) in guild '${guild.name}' (${guild.id}) and channel '${channel.name}' (${channel.id}).`)

        // Execute the proper command file, passing in the remaining arguments (does not include the prefix or the command)
        let commandFile = require(`../commands/${command.toLowerCase()}.js`)
        await commandFile.run(message, args)

    } catch (err) {
        log.error(`[/events/message#run] ${err}`)
    }
}