const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  contacts: Array,
});

module.exports = mongoose.model('users', usersSchema);
