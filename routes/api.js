var express = require('express');
var events = require('./../controllers/events');
var cameras = require('./../controllers/cameras');
var store = require('./../config/store');
var router = express.Router();

router.get('/events', events.list);
router.post('/events', store.videoUpload, events.create);
router.get('/events/:event_id', events.get);
router.delete('/events/:event_id', events.delete);

router.get('/cameras', cameras.list);
router.post('/cameras', cameras.create);
router.get('/cameras/:camera_id', cameras.get);
router.delete('/cameras/:camera_id', cameras.delete);

module.exports = router;
