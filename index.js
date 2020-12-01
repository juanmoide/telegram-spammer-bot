const { TOKEN, CHANNEL } = process.env;

if (!TOKEN) {
    throw new Error('Missing Token');
} else if (!CHANNEL) {
    throw new Error('Missing channel');
} else {
    const TelegramBot = require('node-telegram-bot-api');

    const bot = new TelegramBot(TOKEN);

    const sendSpamMessage = require('./utils/spam')

    sendSpamMessage(bot, CHANNEL);
}