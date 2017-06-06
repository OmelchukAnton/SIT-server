const developersHelper = require('../../helpers/developers');

module.exports = function (req, res) {

    const developerId = req.params.developerId;
    const developer = developersHelper.getDeveloperById(developerId);

    res.send(`Developer ${developer.name}`);
};
