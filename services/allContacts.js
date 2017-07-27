const db = require('../db/users.js');

function getAllContacts() {
    return db.getAllContacts();
}

function getFilterContacts() {
    // TODO: move here logic from controller
    return db.getFilterContacts();
}

function getUserById(id) {
    return db.getUserById(id).then(data => {
        return data;
    });
}

function createUser(newUser) {
    return db.createUser(newUser);
}

function addIdNewContact(ids) {
    return db.addIdNewContact(ids);
    // TODO: для сообщений: go to messages db and create new chat, then db.addIdNewContact(addId)
}

function checkAccount(verifyUser) {
    return db.checkAccount(verifyUser);
}


module.exports = {
    getAllContacts,
    getFilterContacts,
    getUserById,
    createUser,
    checkAccount,
    addIdNewContact
};
