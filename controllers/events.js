var Event = require('../models/event');
var Moment = require('moment');

exports.list = function(req, res) {

    if (req.query.day) {
        if (req.query.day === "latest") {

        } else {
            returnDayEventList(res, Moment(req.query.day));
        }
    } else {
        returnLatestEventList(res);
    }
};

exports.create = function(req, res) {
    Event.create({
            cameraName: req.body.cameraName,
            cameraLocation: req.body.cameraLocation,
            date: req.body.date,
            images: req.body.images
        },
        function(err) {
            if (err) {
                res.send(err);
            }
            returnLatestEventList(res);
        });
};

exports.get = function(req, res) {
    Event.findOne({'_id' : req.params.event_id }, function(err, event) {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};

exports.delete = function(req, res) {
    var query = ("all" === req.params.event_id) ? {} : {_id: req.params.event_id};

    Event.remove(query, function (err, event) {
        if (err) {
            res.send(err);
        }
        returnLatestEventList(res);
    });
};

function returnLatestEventList(res) {
    Event.find({}, null, {sort: {date: -1}}, function (err, events) {
        if (err) {
            res.send(err);
        }
        res.json(events);
    });
}

function returnDayEventList(res, queryDate) {
    var startOfDay = Moment(queryDate).utc().startOf('day').toDate();
    var endOfDay = Moment(queryDate).utc().endOf('day').toDate();
    var previousEventDay = {};
    var nextEventDay = {};

    Event.find({"date": { "$gte": startOfDay,  "$lt": endOfDay }}, null, {sort: {date: -1}}, function (err, events) {
        if (err) {
            res.send(err);
        }
        Event.findOne({"date": {"$lt": startOfDay}}, null, {sort: {date: -1}}, function(err, event) {
            if (err) {
                res.send(err);
            }
            if (event) {
                previousEventDay = Moment(event.date).utc().startOf('day').toDate();
            }
            Event.findOne({"date": {"$gte": endOfDay}}, null, {sort: {date: -1}}, function (err, event) {
                if (err) {
                    res.send(err);
                }
                if (event) {
                    nextEventDay = Moment(event.date).utc().startOf('day').toDate();
                }
                res.json({
                    events,
                    date: startOfDay,
                    nextEventDay: nextEventDay,
                    previousEventDay: previousEventDay
                });
            });
        });
    });
}