const ConversationModel = require('../models/conversations');

function createChat(newChat) {
    const chat = new ConversationModel(newChat);
    return new Promise((resolve) => {
        chat.save((err, newChat) => {
            resolve(newChat);
        });
    });
}

function addNewMessage(newMessage) {
    return new Promise((resolve) => {
        ConversationModel.update({
            $push: {
                messages: {
                    whoSend: newMessage.whoSend,
                    text: newMessage.text,
                    sendTime: newMessage.sendTime,
                }
            }
        }, (err, newMessage) => {
            resolve(newMessage);
        });
    });
}


function getAllMessages() {
    return new Promise((resolve) => {
        ConversationModel.find((err, conversations) => {
            resolve(conversations);
        });
    });
}


module.exports = {
    createChat,
    addNewMessage,
    getAllMessages,
};
