const messagesService = require('../../services/mess.js');

function addNewMessage(req, res) {
    const newMessage = req.body;
    return messagesService.addNewMessage(newMessage).then(data => {
        return res.json({ ok: true, data });
    });
}

function getMessagesByChatId(req, res) {
    const chatId = req.params.chatId;
    return messagesService.getMessagesByChatId(chatId).then(data => {
        return res.json({ ok: true, data });
    });
}


module.exports = {
    addNewMessage,
    getMessagesByChatId,
};
