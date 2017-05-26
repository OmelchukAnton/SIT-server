const db = require('../db/users.js');

function getUserById(id) {
    return db.getUserById(id).then(data => {
        return data;
    });
}


module.exports = {
    getUserById
};
