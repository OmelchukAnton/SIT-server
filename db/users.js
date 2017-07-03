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
        const contacts = new Array({});
        user.save(function(err, newUser, contacts) {
            if (err) {
                return reject(err);
            } else {
                resolve(newUser);
            }
        });
    });
}

function addIdNewContact(data) {
    return new Promise((resolve, reject) => {
        UserModel.update({"_id" : "594273ea30212e0e204c5209"},
        {$push: {contacts: {"_id" : data }}}, function(err, id) {
            resolve(id);
        });
    });
}



function checkAccount({ email, password }) {
    return new Promise((resolve, reject) => {
        UserModel.find({ email, password }, function(err, verifyUser) {
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
    // getContactsUserById,
    createUser,
    addIdNewContact,
    checkAccount
};
