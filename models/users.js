const mongoose = require('mongoose');
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const usersSchema = new Schema({
    name: String,

    firstname: String,
    lastname: String,
    city: String,
    email: String,
    password: String,
    contacts: Array,
});

module.exports = mongoose.model('users', usersSchema);
