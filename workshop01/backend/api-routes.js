
let router = require('express').Router();
const api = require('./api');

router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'welcome to backend'
    });
});

router.route('/getMessage')
    .get(api.retrieveMessage)

//Export API routes
module.exports = router;
