/*
* Script Name: Script Template
* Version: v0.1
* Last Updated:
* Author: Skrish
* Author URL:
* Author Contact:
* Approved: N/A
* Approved Date: N/A
* Mod: N/A
*/

var scriptData = {
    name: 'Script Template',
    version: '',
    author: '',
    authorUrl: '',
    helpLink: '',
};

// User Input
if (typeof DEBUG !== 'boolean') DEBUG = false;

// CONSTANTS
var DUMMY_CONSTANT = 0;

// Globals
var allowedGameScreens = ['overview_villages'];
var allowedGameModes = ['prod'];

// Translations
var translations = {
    en_DK: {
        'Script Template': 'Script Template',
        Help: 'Help',
        'Invalid game mode!': 'Invalid game mode!',
    },
    en_US: {
        'Script Template': 'Script Template',
        Help: 'Help',
        'Invalid game mode!': 'Invalid game mode!',
    },
};

// Init Debug
initDebug();

// Init Translations Notice
initTranslationsNotice();

// Helper: Get parameter by name
function getParameterByName(name, url = window.location.href) {
    return new URL(url).searchParams.get(name);
}

// Helper: Generates script info
function scriptInfo() {
    return `[${scriptData.name} ${scriptData.version}]`;
}

// Helper: Prints universal debug information
function initDebug() {
    console.debug(`${scriptInfo()} It works !`);
    console.debug(`${scriptInfo()} HELP:`, scriptData.helpLink);
    if (DEBUG) {
        console.debug(`${scriptInfo()} Market:`, game_data.market);
        console.debug(`${scriptInfo()} World:`, game_data.world);
        console.debug(`${scriptInfo()} Screen:`, game_data.screen);
        console.debug(`${scriptInfo()} Game Version:`, game_data.majorVersion);
        console.debug(`${scriptInfo()} Game Build:`, game_data.version);
        console.debug(`${scriptInfo()} Locale:`, game_data.locale);
        console.debug(`${scriptInfo()} Premium:`, game_data.features.Premium.active);
    }
}

// Helper: Text Translator
function tt(string) {
    var gameLocale = game_data.locale;

    if (translations[gameLocale] !== undefined) {
        return translations[gameLocale][string];
    } else {
        return translations['en_DK'][string];
    }
}

// Helper: Translations Notice
function initTranslationsNotice() {
    const gameLocale = game_data.locale;

    if (translations[gameLocale] === undefined) {
        UI.ErrorMessage(
            `No translation found for <b>${gameLocale}</b>. <a href="${scriptData.helpLink}" class="btn" target="_blank" rel="noreferrer noopener">Add Yours</a> by replying to the thread.`,
            4000
        );
    }
}

// Initialize Script
(function () {
    const gameScreen = getParameterByName('screen');
    const gameMode = getParameterByName('mode');

    if (allowedGameScreens.includes(gameScreen)) {
        if (allowedGameModes.includes(gameMode)) {
            console.log('We are on a valid game screen and mode, init script!');
            console.log('If a lot of stuff are going to be done from the script encapsulate in a function');
        } else {
            UI.ErrorMessage(`${tt('Invalid game mode!')}`);
        }
    } else {
        console.log('Show a notice or redirect to the correct place!');
    }
})();