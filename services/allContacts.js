const db = require('../db/users.js');

function getAllContacts() {
    return db.getAllContacts();
}

module.exports = {
    getAllContacts
};
