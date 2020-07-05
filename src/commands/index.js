import { readdirSync } from 'fs'
import log             from 'winston'

/**
 * Reads the commands directory and returns a list of valid command names.
 *
 * @returns {Promise<[String]>} an list of valid command names
 */
exports.getCommands = async () => {
    try {
        log.debug('Retrieving valid user commands.')

        let commandsArray = []

        // Read the files in this directory
        let commandFiles = await readdirSync(__dirname)

        // Remove this file from the commandFiles list
        commandFiles.splice(commandFiles.indexOf('index.js'), 1)

        // Remove any filenames that do not include a dot because we don't want to include directories
        commandFiles = commandFiles.filter(file => file.includes('.'))

        // Log a warning if the directory is empty or the index.js file is the only one in the directory
        if (commandFiles.length === 0) {
            log.warn(`Could not retrieve commands. Reason: 'No commands have been defined in the /commands/ directory.'`)
            return commandsArray
        }

        log.debug(`Found ${commandFiles.length} command definition file${commandFiles.length === 1 ? '' : 's'}:`)
        for (let file of commandFiles) {
            log.debug(`  - ${file}`)
            let commandName = file.split('.')[0]
            commandsArray.push(commandName.toLowerCase())
        }

        return commandsArray

    } catch (err) {
        log.error(`[/commands/index#getCommands] Could not retrieve commands. Reason: '${err}'`)
    }
}
