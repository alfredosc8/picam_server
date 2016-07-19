var express = require('express');
var events = require('./../controllers/events');
var store = require('./../config/store');
var router = express.Router();



router.get('/events', events.list);
router.post('/events', store.videoUpload, events.create);
router.get('/events/:event_id', events.get);
router.delete('/events/:event_id', events.delete);

module.exports = router;
