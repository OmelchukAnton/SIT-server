const UserModel = require('../models/users');

function getAllContacts() {
    return new Promise((resolve) => {
        UserModel.find(function(err, users) {
            resolve(users);
        });
    });
}

function getUserById() {
    return new Promise((resolve) => {
        UserModel.find({ '_id': '58f9c9301e2a0d8775a37df8' }, function(err, _id) {
            resolve(_id);
        });
    });
}

module.exports = {
    getAllContacts,
    getUserById
};
