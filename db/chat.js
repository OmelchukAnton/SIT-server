const ConversationModel = require('../models/conversations');
const mongoose = require('mongoose');

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
      '_id' : newMessage.chatId,
    }, {
      $push: {
        messages: newMessage,
      }
    }, (err, addMessage) => {
      resolve(addMessage);
    });
  });
}

function selectByChatId(id, cb) {
  ConversationModel.find({
    '_id': id,
  }, cb);
}

function getOnlyNewContacts(chatId, timestamp, cb) {
  ConversationModel.aggregate([
    {
      $match: {
        '_id': mongoose.Types.ObjectId(chatId),
      }
    },
    {
      $unwind: '$messages'
    },
    {
      $match: {
        'messages.sendTime': {
          $gt: timestamp
        }
      }
    },
    {
      $replaceRoot: {
        newRoot: '$messages'
      }
    }
  ]).exec(cb);
}

function getMessagesByChatId(chatId, shouldLoadOnlyNew) {
  return new Promise((resolve) => {
    const onSuccess = (err, messages) => resolve(messages);
     return (
       shouldLoadOnlyNew === undefined
       ? selectByChatId(chatId, onSuccess)
       : getOnlyNewContacts(chatId, shouldLoadOnlyNew, onSuccess)
     );
  });
}

module.exports = {
  createChat,
  addNewMessage,
  getMessagesByChatId
};
