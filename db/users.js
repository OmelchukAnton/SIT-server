const UserModel = require('../models/users');

function getAllContacts() {
    return new Promise((resolve) => {
        UserModel.find((err, users) => {
            resolve(users);
        });
    });
}


function getUserById(data) {
    return new Promise((resolve) => {
        UserModel.find({
            '_id': data
        }, (err, data) => {
            resolve(data);
        });
    });
}


function createUser(data) {
    const user = new UserModel(data);
    const contacts = new Array({});
    return new Promise((resolve) => {
        user.save((err, newUser) => {
            resolve(newUser, contacts);
        });
    });
}


function checkAccount({ email, password }) {
    return new Promise((resolve) => {
        UserModel.find({
            email, password
        }, (err, verifyUser) => {
            resolve(verifyUser);
        });
    });
}


function addIdNewContact(ids) {
    return new Promise((resolve) => {
        UserModel.update({
            "_id" : ids.mainUserId,
        }, {
            $push: {
                contacts: ids.newUserId, // push updated data with chatId
            }
        }, (err, id) => {
            resolve(id);
        });
    });
}


module.exports = {
    getAllContacts,
    getUserById,
    createUser,
    addIdNewContact,
    checkAccount
};
