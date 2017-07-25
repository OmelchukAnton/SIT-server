const contactsService = require('../../services/allContacts.js');


function getAllContacts(req, res) {
    return contactsService.getAllContacts().then(data => {
        return res.json({ ok: true, data });
    });
}

function getFilterContacts(req, res) {
    const id = req.params.id;

    const getAllContactsPromise = contactsService.getAllContacts();
    const getOwnContactsPromise = contactsService.getUserById(id);

    return Promise.all([getAllContactsPromise, getOwnContactsPromise]).then(([allContactsResponse, userResponse]) => {
        const currentContacts = userResponse[0].contacts;
        const responseData = allContactsResponse.filter(contact => {
            const { _id } = contact;
            //const id = _id && _id.toString();

            return `${_id}` !== `${id}` && !currentContacts.some(userContact => `${userContact._id}` === `${_id}`);
        });

         return res.json({ok: true, data: responseData });
    });
}


function getUserById(req, res) {
    const id = req.params.id;
    return contactsService.getUserById(id).then(data => {
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
    const addId = req.body.contact._id;
    // {
    //     mainUserId: 'в локал сторедже',
    //     newContact: {
    //         id: 'id выбранного пользователя'
    //     }
    // }
    return contactsService.addIdNewContact(addId).then(contact => {
        return res.json({ ok: true, contact });
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
    getFilterContacts,
    getUserById,
    createUser,
    addIdNewContact,
    checkAccount
};
