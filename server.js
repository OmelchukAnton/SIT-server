const express = require('express');
const app = express();

// app.use(function(req, res, next) {
//     if(req.path === '/contact') {
//         res.send('dfggrft')
//     } else {
//         next()
//     }
// })

app.get('/about', (req, res, next) => {
    res.send('about');
});

app.get('/contact', (req, res, next) => {
    res.send('CONTAACT');
});

app.get('/info', (req, res) => {
    res.send('hello <strong> info </strong');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000);
