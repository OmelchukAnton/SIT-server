const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fs = require('fs');
const app = express();

// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// })
// app.use(cors())

app.use(cors());

mongoose.connect('mongodb://localhost/users');

// mongoose.model('users', {name: String});
// mongoose.model('posts', {message: String});

//load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
    if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});

app.get('/users',  function (req, res) {
    mongoose.model('users').find(function(err, users) {
        res.send(users);
    });
});

app.get('/posts/:_id',  function (req, res) {
    mongoose.model('users').find({_id: req.params._id}, function(err, _id) {
        res.send(_id);
    });
});

app.get('/posts',  function (req, res) {
    mongoose.model('posts').find(function(err, posts) {
        res.send(posts);
        // mongoose.model('posts').populate(posts, {path: 'user'}, function(err, posts) {
        //     res.send(posts);
        // });
    });
});


app.get('/start', require('./mymiddleware.js'), function (req, res) {
    res.json({msg: 'This is CORS-enabled for all origins'})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
