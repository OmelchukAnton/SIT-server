const userService = require('../../services/users.js');
const contactsService = require('../../services/allContacts.js');


function getAllContacts(req, res) {
    return contactsService.getAllContacts().then(data => {
        return res.json({ ok: true, data });
    });
}

function getUserById(req, res) {
    const id = req.params.id;

    return userService.getUserById(id).then(data => {
        return res.json({ ok: true, data });
    });
}


function createUser(req, res) {
    const newUser = req.body;
    return contactsService.createUser(newUser).then(data => {
        return res.json({ ok: true, data });
    });
}

function addIdNewContact(req, res) {
    // console.log(req.body.id);
    const addId = req.body.id;
    return contactsService.addIdNewContact(addId).then(id => {
        return res.json({ ok: true, id });
    });
}

function checkAccount(req, res) {
    const verifyUser = req.body;

    return contactsService.checkAccount(verifyUser).then(data => {
        return res.json({ ok: true, data });
    });
}

module.exports = {
    getAllContacts,
    getUserById,
    createUser,
    addIdNewContact,
    checkAccount
};
