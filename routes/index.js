var express = require('express');
var api = require('./api');
var path = require('path');
var router = express.Router();

router.use('/api', api);

// All other routing via React-Router
router.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, '../public', 'index.html'))
});

module.exports = router;