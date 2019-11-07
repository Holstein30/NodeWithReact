const reqireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/surveys', requireLogin, (req, res) => {
        // check if enough credits
    });
};
