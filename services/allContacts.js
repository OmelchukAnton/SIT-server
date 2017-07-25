const db = require('../db/users.js');

function getAllContacts() {
    return db.getAllContacts();
}

function getFilterContacts() {
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

function addIdNewContact(addId) {
    return db.addIdNewContact(addId);
}

function checkAccount(verifyUser) {
    return db.checkAccount(verifyUser);
}


module.exports = {
    getAllContacts,
    getFilterContacts,
    getUserById,
    createUser,
    addIdNewContact,
    checkAccount
};
