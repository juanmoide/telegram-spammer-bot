const spamJson = require('./../data/spam.json');

module.exports = function (botInstance, channel) {
    // There is spam messages available
    const canSendMessage = spamJson.length;

    if (canSendMessage) {
        // I know that it is irrelevant but it much more readable
        const spamLength = canSendMessage;
        const random = Math.floor(Math.random() * spamLength);

        const message = spamJson[random];

        const { text, preview } = message;

        return botInstance.sendMessage(channel, text, {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: !!!preview
        })
    }

    return
} 