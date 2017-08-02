const db = require('../db/users.js');
const dbChat = require('../db/chat.js');

function getAllContacts() {
    return db.getAllContacts();
}

function getUserById(id) {
    return db.getUserById(id).then(data => {
        return data;
    });
}

function getFilterContacts(data) {
    const id = data;
    const getAllContactsPromise = getAllContacts();
    const getOwnContactsPromise = getUserById(id);

    return Promise.all([getAllContactsPromise, getOwnContactsPromise]).then(([allContactsResponse, userResponse]) => {
        const currentContacts = userResponse[0].contacts;
        const responseData = allContactsResponse.filter(contact => {
            const { _id } = contact;

            return `${_id}` !== `${id}` && !currentContacts.some(userContact => `${userContact._id}` === `${_id}`);
        });
        return responseData;
    });
}

function createUser(newUser) {
    return db.createUser(newUser);
}

function createChat(newChat) {
    console.log(newChat)
    return dbChat.createChat(newChat);
}

function addIdNewContact(data) {
    const mainContactId = data.mainUserId;
    const newContactId = data.newUserId;
    return db.getUserById(newContactId).then(contact => {
        const newUser = {
            _id: contact[0]._id,
            firstname: contact[0].firstname,
            lastname: contact[0].lastname,
        };
    return db.addIdNewContact(mainContactId, newUser);
    // return dbChat.createChat(newChat).then(db.addIdNewContact(mainContactId, newUser));
    });
}

function checkAccount(verifyUser) {
    return db.checkAccount(verifyUser);
}


module.exports = {
    getAllContacts,
    getFilterContacts,
    getUserById,
    createUser,
    checkAccount,
    addIdNewContact
};
