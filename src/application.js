import { initLogger } from './conf/logging'
import { loadEvents } from './events'
import { Client }     from 'discord.js'
import log            from 'winston'

/**
 * Sets up logging, registers events with Discord, and bring the bot online.
 *
 * @returns {Promise<void>} an empty promise
 */
exports.initApplication = async () => {
    try {
        // Initialize the logger to use throughout the application.
        await initLogger()

        log.info(``)
        log.info(`*************************`)
        log.info(`*  Server has started.  *`)
        log.info(`*************************`)
        log.info(``)
        log.info(`Successfully configured the logging framework.`)

        // Loads all of the events in the /events/ directory.
        await loadEvents()

        // Tell the bot to wake up.
        await exports.mainContext.client.login(process.env.BOT_TOKEN);

    } catch (err) {
        // If any error is thrown during initialization, log the error to the console and exit.
        console.error(`NOT LOGGED IN: '${err}'`)
        process.exit()
    }
}

/**
 * A global context object for the application.
 */
exports.mainContext = {
    client: new Client()
};
