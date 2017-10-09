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


function getMessagesByChatId(chatId, shouldLoadOnlyNew) {
    return new Promise((resolve) => {
        { shouldLoadOnlyNew === undefined ? (ConversationModel.find({

            '_id': chatId,

        }, (err, chatId) => {
            resolve(chatId)
        })) : (ConversationModel.find({

                '_id': chatId,
                'sendTime': [{ $gte: shouldLoadOnlyNew }]
            }, (err, chatId) => {
                resolve(chatId);
            }));
        }
    });
}


module.exports = {
    createChat,
    addNewMessage,
    getMessagesByChatId,
};
