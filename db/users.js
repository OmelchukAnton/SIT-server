const UserModel = require('../models/users');

function getAllContacts() {
    return new Promise((resolve) => {
        UserModel.find(function(err, users) {
            resolve(users);
        });
    });
}

function getUserById(data) {
    return new Promise((resolve, reject) => {
        UserModel.find({'_id': data}, function(err, data) {
            if (err) {
                return reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function createUser(data) {
    return new Promise((resolve, reject) => {
        const user = new UserModel(data);
        user.save(function(err, newUser) {
            if (err) {
                return reject(err);
            } else {
                resolve(newUser);
            }
        });
    });
}


function checkAccount(verifyUser) {
    return new Promise((resolve, reject) => {
        UserModel.find(function(err, verifyUser) {
            if (err) {
                return reject('You entered a wrong email or password.');
            } else {
                resolve(verifyUser);
            }
        });
    });
}

module.exports = {
    getAllContacts,
    getUserById,
    createUser,
    checkAccount
};
