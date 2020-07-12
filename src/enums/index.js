import { mainContext } from '../application'

exports.ROLE = {
    STREAMING_CAST: {
        NAME: '🔴 Streaming (Cast) 🔴',
        COLOR: 'RED',
        HOIST: true
    },
    STREAMING_GUESTS: {
        NAME: '🔴 Streaming (Guests) 🔴',
        COLOR: 'DARK_RED',
        HOIST: true
    },
    CAST: {
        NAME: 'Cast',
        COLOR: 'LUMINOUS_VIVID_PINK',
        HOIST: true
    },
    SPECIAL_GUESTS: {
        NAME: 'Special Guests',
        COLOR: 'DARK_PURPLE',
        HOIST: true
    },
    GUESTS: {
        NAME: 'Guests',
        COLOR: 'DARK_AQUA',
        HOIST: true
    },
    MODS: {
        NAME: 'Moderators',
        COLOR: 'GOLD',
        HOIST: true
    },
    CREW: {
        NAME: 'Crew',
        COLOR: 'DARK_BLUE',
        HOIST: true
    },
    SUBSCRIBERS: {
        NAME: 'Subscribers',
        COLOR: 'DARK_GREEN',
        HOIST: true
    }
}

exports.CHANNEL = {
    CATEGORY: {
        LIVE: {
            NAME: 'Live',
            PERMISSIONS: [
                {
                    ROLE: mainContext.application_name,
                    ALLOW: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'VIEW_CHANNEL']
                },
                {
                    ROLE: exports.ROLE.CAST.NAME,
                    ALLOW: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'USE_EXTERNAL_EMOJIS',
                            'ADD_REACTIONS', 'CONNECT', 'SPEAK', 'STREAM', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']
                },
                {
                    ROLE: '@everyone',
                    DENY: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES',
                           'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS',
                           'CONNECT', 'SPEAK', 'STREAM', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS', 'USE_VAD', 'PRIORITY_SPEAKER']
                }
            ]
        },
        ARCHIVES: {
            NAME: 'Archives',
            PERMISSIONS: [
                {
                    ROLE: mainContext.application_name,
                    ALLOW: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'VIEW_CHANNEL']
                },
                {
                    ROLE: exports.ROLE.CAST.NAME,
                    ALLOW: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY']
                },
                {
                    ROLE: '@everyone',
                    DENY: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES',
                           'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS',
                           'CONNECT', 'SPEAK', 'STREAM', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS', 'USE_VAD', 'PRIORITY_SPEAKER']
                }
            ]
        }
    },
    TEXT: {
        STREAM_NOTES: {
            NAME: 'stream-notes',
            PARENT: 'Live'
        }
    },
    VOICE: {
        STAGING: {
            NAME: 'Staging',
            PARENT: 'Live'
        },
        STREAMING: {
            NAME: '🔴 Streaming 🔴',
            PARENT: 'Live',
            PERMISSIONS: [
                {
                    ROLE: mainContext.application_name,
                    ALLOW: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'VIEW_CHANNEL']
                },
                {
                    ROLE: exports.ROLE.STREAMING_CAST.NAME,
                    ALLOW: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK', 'STREAM', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS', 'PRIORITY_SPEAKER']
                },
                {
                    ROLE: exports.ROLE.STREAMING_GUESTS.NAME,
                    DENY: ['USE_VAD'],
                    ALLOW: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK']
                },
                {
                    ROLE: '@everyone',
                    DENY: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES',
                           'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS',
                           'CONNECT', 'SPEAK', 'STREAM', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS', 'USE_VAD', 'PRIORITY_SPEAKER']
                }
            ]
        }
    }
}

exports.EMBED = {
    THUMBNAIL: {
        SUCCESS: 'https://cdn.discordapp.com/attachments/673213456526082053/729887363286695998/success.gif',
        ERROR: 'https://cdn.discordapp.com/attachments/673213456526082053/682402598724436032/general_error.gif',
        LIVE: 'https://cdn.discordapp.com/attachments/673213456526082053/729886822477463572/on-air.gif',
        STOP: 'https://cdn.discordapp.com/attachments/673213456526082053/729885862510198854/stream-stopped.gif'
    }
}

exports.ACTION = {
    SUCCESS: 'Success',
    ERROR: 'Error'
}