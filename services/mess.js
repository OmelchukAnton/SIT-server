const db = require('../db/chat.js');


function addNewMessage(newMessage) {
    return db.addNewMessage(newMessage);
}

function getMessagesByChatId(datas) {
    const chatId = datas.chatId;
    const shouldLoadOnlyNew = datas.shouldLoadOnlyNew;

    return db.getMessagesByChatId(chatId, shouldLoadOnlyNew);
}


module.exports = {
    addNewMessage,
    getMessagesByChatId,
};
