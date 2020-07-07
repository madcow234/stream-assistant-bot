import { ROLE } from '../enums'
import log       from 'winston'

/**
 * Prepares a {@link Guild} with all configured {@link Role}s.
 *
 * @param guild the {@link Guild} to prepare with all configured {@link Role}s
 * @returns {Promise<Boolean>} true if all {@link Role}s were created, false if not
 */
exports.setupRolesForGuild = async (guild) => {
    try {
        log.info(`Preparing roles for guild '${guild.name}' (${guild.id}).`)

        for (let role of Object.values(ROLE)) {
            await module.exports.createRoleIfNotExists(guild, role)
        }

        log.info(`Successfully prepared all roles for guild '${guild.name}' (${guild.id}).`)
        return true

    } catch (err) {
        log.error(`[/services/roleService#setupRolesForGuild] ${err}`)
        return false
    }
}

/**
 * Creates a {@link Role} for a {@link Guild} if it does not already exist.
 *
 * @param guild the {@link Guild} to update
 * @param roleName the name of the {@link Role} to create
 * @returns {Promise<Boolean>} true if {@link Role} was created, false if not
 */
exports.createRoleIfNotExists = async (guild, roleName) => {
    try {
        log.debug(`Checking guild '${guild.name}' (${guild.id}) for role '${roleName}'.`)
        let role = guild.roles.cache.find(role => role.name === roleName)

        if (!role) {
            log.debug(`Role '${roleName}' does not exist for guild '${guild.name}' (${guild.id})... creating now.`)
            await guild.roles.create( { data: { name: roleName } } )
            log.info(`Successfully created '${roleName}' role for guild '${guild.name}' (${guild.id}).`)

        } else {
            log.info(`Guild '${guild.name}' (${guild.id}) already contains '${roleName}' role... no need to create.`)
        }

        return true

    } catch (err) {
        log.error(`[/services/roleService#createRoleIfNotExists] ${err}`)
        return false
    }
}

/**
 * Checks if a {@link User} has a {@link Role} for a {@link Guild}.
 *
 * @param user the {@link User} to check
 * @param roleName the name of the {@link Role} to check
 * @param guild the {@link Guild} that should be queried
 * @returns {Promise<boolean>} true if the {@link User} has the {@link Role} assigned, false if not
 */
exports.userHasRoleForGuild = async (user, roleName, guild) => {
    try {
        log.debug(`Checking if user '${user.username}' (${user.id}) has the '${roleName}' role for guild '${guild.name}' (${guild.id}).`)

        let guildMember = await guild.members.fetch(user)
        let role = guild.roles.cache.find(role => role.name === roleName)

        if (!role) {
            log.warn(`The '${role.name}' role does not exist for guild '${guild.name}' (${guild.id}).`)
            return false
        }

        if (role && guildMember.roles.cache.has(role.id)) {
            await guildMember.roles.add(role)
            log.debug(`Yes, user '${user.username}' (${user.id}) has the '${role.name}' role for guild '${guild.name}' (${guild.id}).`)
            return true

        } else {
            log.debug(`No, user '${user.username}' (${user.id}) does not have the '${role.name}' role for guild '${guild.name}' (${guild.id}).`)
            return false
        }

    } catch (err) {
        log.error(`[/services/roleService#userHasRoleForGuild] ${err}`)
        return false
    }
}

/**
 * Assigns a {@link Role} to a {@link User} for a {@link Guild}.
 *
 * @param guild the {@link Guild}
 * @param user the {@link User} to assign the {@link Role} to
 * @param roleName the name of the {@link Role} to assign
 * @returns {Promise<boolean>} true if {@link Role} is assigned, false if not
 */
exports.assignRole = async (guild, user, roleName) => {
    try {
        let guildMember = await guild.members.fetch(user)
        let role = guild.roles.cache.find(role => role.name === roleName)

        if (!role) {
            log.warn(`The '${role.name}' role does not exist for guild '${guild.name}' (${guild.id}).`)
            return false
        }

        if (!guildMember.roles.cache.has(role.id)) {
            log.debug(`Assigning '${role.name}' role to user '${user.username}' (${user.id}) for guild '${guild.name}' (${guild.id}).`)
            await guildMember.roles.add(role)
            log.info(`Successfully assigned '${role.name}' role to user '${user.username}' (${user.id}) for guild '${guild.name}' (${guild.id}).`)

        } else {
            log.debug(`User '${user.username}' (${user.id}) already has '${role.name}' role for guild '${guild.name}' (${guild.id})...no need to assign.`)
        }
        return true

    } catch (err) {
        log.error(`[/services/roleService#assignRole] ${err}`)
        return false
    }
}

/**
 * Removes a {@link Role} from a {@link User} fpr a {@link Guild}.
 *
 * @param guild the {@link Guild}
 * @param user the {@link User} to assign the {@link Role} to
 * @param roleName the name of the {@link Role} to assign
 * @returns {Promise<boolean>} true if {@link Role} is removed, false if not
 */
exports.removeRole = async (guild, user, roleName) => {
    try {
        let guildMember = await guild.members.fetch(user)
        let role = guild.roles.cache.find(role => role.name === roleName)

        if (!role) {
            log.warn(`The '${role.name}' role does not exist for guild '${guild.name}' (${guild.id}).`)
            return false
        }

        if (guildMember.roles.cache.has(role.id)) {
            log.debug(`Removing '${role.name}' role from user '${user.username}' (${user.id}) for guild '${guild.name}' (${guild.id}).`)
            await guildMember.roles.remove(role)
            log.info(`Successfully removed '${role.name}' role from user '${user.username}' (${user.id}) for guild '${guild.name}' (${guild.id}).`)

        } else {
            log.debug(`User '${user.username}' (${user.id}) does not have '${role.name}' role for guild '${guild.name}' (${guild.id})...no need to remove.`)
        }
        return true

    } catch (err) {
        log.error(`[/services/roleService#removeRole] ${err}`)
        return false
    }
}