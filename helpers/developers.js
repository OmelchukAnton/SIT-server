module.exports = {

    getDeveloperById: function(id) {

        const developers = this.getAllDevelopers();

        const developer = developers[id];

        if(developer === undefined) {

            return {
                name: 'nobody',
                favoriteLanguage: 'Nothing',
                gender: 'neither'
            };

        } else {

            return developer;

        }

    },

    getAllDevelopers: function() {

        return {


            'leha': {
                name: 'Leha zadr',
                favoriteLanguage: 'reshetka',
                gender: 'male'
            },

            'julya': {
                name: 'Julya chiter',
                favoriteLanguage: 'pro.js',
                gender: 'female'
            },

            'ihar': {
                name: 'Ihar dniwko',
                favoriteLanguage: 'eshe ne znaet chto eto',
                gender: 'male'

            }
        };
    }
};
