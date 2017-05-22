const contactData = require('./contactsData.js');

// console.log(contactData);


module.exports = function (req, res) {
    res.json(contactData);
  // res.send('The views directory is ' + req.app.get('views'));
};
