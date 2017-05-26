const developersHelper = require('../../helpers/developers');

module.exports = function (req, res) {

    const developers = developersHelper.getAllDevelopers();
    const developerIds = Object.keys(developers);
    const developerNames = developerIds.map(function(id) {

        return developers[id].name;

    });

    const developerNameString = developerNames.join(', ');

    res.send(`Hello developers ${developerNameString}`);
};
