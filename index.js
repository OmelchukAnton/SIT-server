const express = require('express'),
    app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users');

const usersController = require('./controllers/users');
const conversationsController = require('./controllers/messages');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/users', usersController.getAllContacts);
app.get('/find/:id', usersController.getFilterContacts);
app.get('/users/:id', usersController.getUserById);

app.post('/reg', usersController.createUser);
app.post('/auth', usersController.checkAccount);
app.post('/addId', usersController.addIdNewContact);

app.post('/createChat', conversationsController.createChat);

app.listen(3000, function () {
  console.log('START on PORT 3000!');
});
