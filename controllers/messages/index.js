const messagesService = require('../../services/mess.js');

function addNewMessage(req, res) {
    const newMessage = req.body;
    return messagesService.addNewMessage(newMessage).then(data => {
        return res.json({ ok: true, data });
    });
}

function getAllMessages(req, res) {
    return messagesService.getAllMessages().then(data => {
        return res.json({ ok: true, data });
    });
}


module.exports = {
    addNewMessage,
    getAllMessages,
};
