const ConversationModel = require('../models/conversation');

function createChat(newChat) {
    const chat = new ConversationModel(newChat);
    return new Promise((resolve) => {
        chat.save((err, newChat) => {
            resolve(newChat);
        });
    });
}


module.exports = {
    createChat
};
