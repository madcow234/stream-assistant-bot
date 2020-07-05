import { Message } from 'discord.js'
import log         from 'winston'

/**
 * An example of a command definition.
 * When the bot responds to a message, the message will be in a form of:
 *      prefix command arg1 arg2 arg3
 * In order to add a command that a user can invoke, add a file to the /commands/ directory with a filename of the desired command.
 *
 * For example: This command can be invoked by typing "!prefix example" in any channel in a guild that contains this bot.
 * Any file added to the /commands/ directory can be invoked by a user in the same way.
 *
 * @param message {Message} the full message object that invoked the command
 * @param args {Array<string>} any arguments that were passed with the command
 * @returns {Promise<void>} an empty Promise
 */
exports.run = async (message, args) => {
    try {
        log.debug(`Received command 'example' with ${args.length > 0 ? 'arguments ' + args.join(', ') : 'no arguments'}.`)

    } catch (err) {
        log.error(`[/commands/example.js] ${err}`);
    }
};