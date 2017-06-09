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
    // author    : ObjectId,
    // title     : String,
    // body      : String,
    // date      : Date
});

module.exports = mongoose.model('users', usersSchema);
