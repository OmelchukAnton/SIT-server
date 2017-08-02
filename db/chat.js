const ConversationModel = require('../models/conversation');

function createChat(data) {
    const chat = new ConversationModel(data);
    return new Promise((resolve) => {
        chat.save((err, newChat) => {
            resolve(newChat);
        });
    });
}


module.exports = {
    createChat
};
