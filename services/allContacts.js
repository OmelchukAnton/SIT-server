const db = require('../db/users.js');
const dbChat = require('../db/chat.js');

function getAllContacts() {
  return db.getAllContacts();
}

function getUserById(id) {
  return db.getUserById(id).then(data => {
    return data;
  });
}

function getFilterContacts(data) {
  const id = data;
  const getAllContactsPromise = getAllContacts();
  const getOwnContactsPromise = getUserById(id);

  return Promise.all([getAllContactsPromise, getOwnContactsPromise])
  .then(([allContactsResponse, userResponse]) => {
    const currentContacts = userResponse[0].contacts;
    const responseData = allContactsResponse.filter(contact => {
      const { _id } = contact;
      return `${_id}` !== `${id}`
      && !currentContacts.some(userContact => `${userContact._id}` === `${_id}`);
    });
    return responseData;
  });
}

function createUser(newUser) {
  return db.createUser(newUser);
}

function createChat(newChat) {
  return dbChat.createChat(newChat);
}

function addIdNewContact(data) {
  const mainContactId = data.mainUserId;
  const newContactId = data.newUserId;
  const getMainContact = db.getUserById(mainContactId);
  const getNewContact = db.getUserById(newContactId);

  return Promise.all([getMainContact, getNewContact])
  .then(([mainContact, newContact])  => {
    return dbChat.createChat().then(chat => {
      const mainUser = {
        chatId: chat._id,
        _id: mainContact[0]._id,
        firstname: mainContact[0].firstname,
        lastname: mainContact[0].lastname,
      };
      const newUser = {
        chatId: chat._id,
        _id: newContact[0]._id,
        firstname: newContact[0].firstname,
        lastname: newContact[0].lastname,
      };
      return Promise.all([
        db.addIdNewContact(mainContactId, newUser),
        db.addIdNewContact(newContactId, mainUser)
      ]);
    });
  });
}

function checkAccount(verifyUser) {
  return db.checkAccount(verifyUser);
}


module.exports = {
  getAllContacts,
  getFilterContacts,
  getUserById,
  createChat,
  createUser,
  checkAccount,
  addIdNewContact
};
