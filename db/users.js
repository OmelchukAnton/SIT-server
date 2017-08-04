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
    return new Promise((resolve) => {
        user.save((err, newUser) => {
            resolve(newUser);
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


function addIdNewContact(mainContactId, newUser, newChat) {
    return new Promise((resolve) => {
        UserModel.update({
            "_id" : mainContactId,
        }, {
            $push: {
                // contacts: {
                //     ...newUser,
                // }
                contacts: newUser, // push updated data with chatId
                chatsId: newChat,
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
