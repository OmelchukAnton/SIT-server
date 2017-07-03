const db = require('../db/users.js');

function getAllContacts() {
    return db.getAllContacts();
}

function createUser(newUser) {
    return db.createUser(newUser);
}

function addIdNewContact(addId) {
    return db.addIdNewContact(addId);
}

function checkAccount(verifyUser) {
    return db.checkAccount(verifyUser);
}

module.exports = {
    getAllContacts,
    createUser,
    addIdNewContact,
    checkAccount
};
