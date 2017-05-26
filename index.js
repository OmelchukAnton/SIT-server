const express = require('express'),
    app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const homepage = require('./controllers/homepage');
    // developersLanding = require('./controllers/developers-landing'),
    // developersDetail = require('./controllers/developers-detail'),

const usersController = require('./controllers/users');

app.use(cors());

mongoose.connect('mongodb://localhost/users');


// app.get('/users', usersController.getAllContacts);

app.get('/users/:id', usersController.getUserById);

app.get('/users',  function (req, res) {
    mongoose.model('users').find(function(err, users) {
        res.send(users);
    });
});

app.get('/start', require('./mymiddleware.js'), function (req, res) {
    res.json({msg: 'This is CORS-enabled for all origins'})
});


app.get('/', homepage.controller);

// app.get('/developers', developersLanding.controller);

// app.get('/developers/:developerId', developersDetail.controller);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
