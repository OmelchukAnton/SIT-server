const express = require('express'),
    app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');

const homepage = require('./controllers/homepage');
const usersController = require('./controllers/users');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/users');


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
// app.post('/reg', (req, res) => {
//     const name = req.body.userData;
//     console.log("name = " + name);
//     res.json({ ok: true });
// });


app.listen(3000, function () {
  console.log('START on PORT 3000!');
});
