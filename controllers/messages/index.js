const messagesService = require('../../services/mess.js');

function createChat(req, res) {
    const newChat = req.body;
    return messagesService.createChat(newChat).then(data => {
        return res.json({ ok: true, data });
    });
}

module.exports = {
    createChat
};
