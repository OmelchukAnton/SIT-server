const UserModel = require('../models/users');

function getAllContacts() {
  return new Promise((resolve) => {
    UserModel.find((err, allContacts) => {
      resolve(allContacts);
    });
  });
}

function getUserById(data) {
  return new Promise((resolve) => {
    UserModel.find({
      '_id': data
    }, (err, user) => {
      resolve(user);
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

function addIdNewContact(mainContactId, newUser) {
  return new Promise((resolve) => {
    UserModel.update({
      '_id' : mainContactId,
    }, {
      $push: {
        contacts: newUser,
      }
    }, (err, newContact) => {
      resolve(newContact);
    });
  });
}

function addIdNewContact(newContactId, mainUser) {
  return new Promise((resolve) => {
    UserModel.update({
      '_id' : newContactId,
    }, {
      $push: {
        contacts: mainUser,
      }
    }, (err, addContact) => {
      resolve(addContact);
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
