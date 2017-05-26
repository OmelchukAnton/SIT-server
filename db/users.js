const UserModel = require('../models/users');

exports.getAllContacts = () => {
    return new Promise((resolve, reject) => {
        UserModel.find(function(err, users) {
            resolve(users);
        });
    });
}

exports.getUserById = (id) => {
    return new Promise((resolve, reject) => {
        UserModel.find({ '_id': '58f9c9301e2a0d8775a37df8' }, function(err, _id) {
            resolve(_id);
        });
    });
}
