const express = require('express'),
    app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');

const homepage = require('./controllers/homepage');
    // developersLanding = require('./controllers/developers-landing'),
    // developersDetail = require('./controllers/developers-detail'),

const usersController = require('./controllers/users');

app.use(cors());

app.use(bodyParser.raw({ extended: false}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/users');

// app.get('/users',  function (req, res) {
//     mongoose.model('users').find(function(err, users) {
//         res.send(users);
//     });
// });
app.get('/users', usersController.getAllContacts);

app.get('/users/:id', usersController.getUserById);

app.get('/start', require('./mymiddleware.js'), function (req, res) {
    res.json({msg: 'This is CORS-enabled for all origins'});
});


app.get('/', homepage.controller);

app.post('/re', (req, res) => {
    res.send('anton postman');
});

app.post('/reg', (req, res) => {
    const name = req.body.firstname;
    console.log("name = " + name);
    res.end("yes");
});

// app.get('/developers', developersLanding.controller);

// app.get('/developers/:developerId', developersDetail.controller);


app.listen(3000, function () {
  console.log('START on PORT 3000!');
});
