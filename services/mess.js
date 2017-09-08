const db = require('../db/chat.js');


function addNewMessage(newMessage) {
    return db.addNewMessage(newMessage);
}

function getAllMessages() {
    return db.getAllMessages();
}


module.exports = {
    addNewMessage,
    getAllMessages,
};
