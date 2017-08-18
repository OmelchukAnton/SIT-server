const db = require('../db/chat.js');

function createChat(newChat) {
    return db.createChat(newChat);
}

function getAllMessages() {
    return db.getAllMessages();
}

// function getConversations() {
//     return db.getConversations();
// }

module.exports = {
    createChat,
    getAllMessages,
    // getConversations
};
