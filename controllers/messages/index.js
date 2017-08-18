const messagesService = require('../../services/mess.js');

function createChat(req, res) {
    const newChat = req.body;
    return messagesService.createChat(newChat).then(data => {
        return res.json({ ok: true, data });
    });
}

function getAllMessages(req, res) {
    return messagesService.getAllMessages().then(data => {
        return res.json({ ok: true, data });
    });
}

// function getConversations(req, res) {
//     return messagesService.getConversations().then(data => {
//         return res.json({ ok: true, data});
//     });
// }

module.exports = {
    createChat,
    getAllMessages,
};
