const express = require('express'),
    app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users');

const homepage = require('./controllers/homepage');
const usersController = require('./controllers/users');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', homepage.controller);
app.get('/users', usersController.getAllContacts);
app.get('/users/:id', usersController.getUserById);

app.post('/reg', usersController.createUser);
app.post('/auth', usersController.checkAccount);
app.post('/addId', usersController.addIdNewContact);

app.listen(3000, function () {
  console.log('START on PORT 3000!');
});
