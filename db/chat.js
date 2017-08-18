const ConversationModel = require('../models/conversations');
// const Message = require('../models/message');

function createChat(newChat) {
    const chat = new ConversationModel(newChat);
    return new Promise((resolve) => {
        chat.save((err, newChat) => {
            resolve(newChat);
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

// function getConversations() {
//     // Only return one message from each conversation to display as snippet
//     return new Promise((resolve) => {
//         ConversationModel.find({
//             participants: req.user._id
//         }, (err, data) => {
//             resolve(data);
//             // Set up empty array to hold conversations + most recent message
//             const fullConversations = [];
//             conversations.forEach(function(conversation) {
//                 Message.find({
//                     conversationId: conversation._id,
//                 }),
//                 // .sort('-createdAt')
//                 // .limit(1)
//                 // .populate({
//                 //   path: "author",
//                 //   select: "profile.firstName profile.lastName"
//                 // })
//                 return new Promise((resolve) => {
//                     fullConversations.update({
//                         conversationId: conversation._id,
//                     }, {
//                         $push: {
//                             conversationId: message;
//                         }
//                     });
//                 });
//             });
//         });
//     });
// }


module.exports = {
    createChat,
    getAllMessages,
};
