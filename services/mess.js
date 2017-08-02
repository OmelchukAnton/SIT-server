const db = require('../db/chat.js');

function createChat(newChat) {
    return db.createChat(newChat);
}

module.exports = {
    createChat
};
