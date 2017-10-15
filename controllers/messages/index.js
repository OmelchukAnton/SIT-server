const messagesService = require('../../services/mess.js');

function addNewMessage(req, res) {
  const newMessage = req.body;
  return messagesService.addNewMessage(newMessage).then(data => {
    return res.json({ ok: true, data });
  });
}

function getMessagesByChatId(req, res) {
  const datas = {
    chatId: req.params.chatId,
    shouldLoadOnlyNew: req.query.timestamp,
  };
  return messagesService.getMessagesByChatId(datas).then(data => {
    return res.json({ ok: true, data });
  });
}


module.exports = {
  addNewMessage,
  getMessagesByChatId
};
