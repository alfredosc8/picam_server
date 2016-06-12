var Event = require('../models/event');

exports.list = function(req, res) {
    if (req.query.page) {
        returnPaginatedEventList(res, req.query.page);
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

function returnPaginatedEventList(res, pageNumber) {
    Event.paginate({}, { page: pageNumber, limit: 10 }, function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
}