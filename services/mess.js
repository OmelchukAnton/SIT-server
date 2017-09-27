const db = require('../db/chat.js');


function addNewMessage(newMessage) {
    return db.addNewMessage(newMessage);
}

function getMessagesByChatId(chatId) {
    return db.getMessagesByChatId(chatId);
}


module.exports = {
    addNewMessage,
    getMessagesByChatId,
};
