const express = require('express'),
    app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users');
// const connection = mongoose.connection;

const homepage = require('./controllers/homepage');
const usersController = require('./controllers/users');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/users');


app.get('/', homepage.controller);

app.get('/users', usersController.getAllContacts);
app.get('/users/:id', usersController.getUserById);

app.get('/start', require('./mymiddleware.js'), function (req, res) {
    res.json({msg: 'This is CORS-enabled for all origins'});
});


app.post('/re', (req, res) => {
    res.send('anton postman');
});

app.post('/reg', usersController.createUser);


app.listen(3000, function () {
  console.log('START on PORT 3000!');
});
