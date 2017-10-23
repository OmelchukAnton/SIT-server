const express = require('express');
const app = express();
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/sitdb');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users', { useMongoClient: true });
// mongoose.connect(db.uri);

const usersController = require('./controllers/users');
const conversationsController = require('./controllers/messages');
let ext = 0 ;
const storage = multer.diskStorage({
  destination: './public',
  filename(req, file, cb) {
    switch (file.mimetype) {
      case 'image/jpeg':
        ext = '.jpeg';
        break;
      case 'image/png':
        ext = '.png';
        break;
    }
    cb(null, file.originalname + ext);
  }
});
const upload = multer({storage: storage});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/users', usersController.getAllContacts);
app.get('/find/:id', usersController.getFilterContacts);
app.get('/users/:id', usersController.getUserById);

app.post('/reg', usersController.createUser);
app.post('/auth', usersController.checkAccount);
app.post('/addId', usersController.addIdNewContact);
app.post('/public', upload.single('photo'), (req, res) => {
    res.sendStatus(200);
});

app.get('/messages/:chatId', conversationsController.getMessagesByChatId);

app.post('/newMessage', conversationsController.addNewMessage);

app.listen(5000, () => {
  console.log('start on PORT 5000!');
});
