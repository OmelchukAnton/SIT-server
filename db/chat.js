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
                "_id" : newMessage.chatId,
            }, {
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


function getMessagesByChatId(data) {
    return new Promise((resolve) => {
        ConversationModel.find({
            '_id': data
        }, (err, data) => {
            resolve(data);
        });
    });
}


module.exports = {
    createChat,
    addNewMessage,
    getMessagesByChatId,
};
