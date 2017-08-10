const db = require('../db/chat.js');

function createChat(newChat) {
    return db.createChat(newChat);
}

// function getConversations() {
//     return db.getConversations();
// }

module.exports = {
    createChat,
    // getConversations
};
