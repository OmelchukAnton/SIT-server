const db = require('../db/users.js');

function getAllContacts() {
    return db.getAllContacts();
}

function createUser(newUser) {
    // console.log(newUser);
    return db.createUser(newUser);
}

module.exports = {
    getAllContacts,
    createUser
};
