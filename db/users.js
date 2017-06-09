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

function createUser(data) {
    return new Promise((resolve, reject) => {
        const user = new UserModel();
        user.save(function(err, newUser) {
            if (err) {
                return console.log(err);
            } else {
                resolve(newUser);
            }
        });
    });
}
// function createUser(data) {
//     return new Promise((resolve, reject) => {
//         UserModel.save(data, function(err, newUser) {
//             resolve(newUser);
//         });
//     });
// }

module.exports = {
    getAllContacts,
    getUserById,
    createUser
};
