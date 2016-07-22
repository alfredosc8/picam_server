var Camera = require('../models/camera');

exports.list = function(req, res) {
    Camera.find({}, function (err, cameras) {
        if (err) {
            res.send(err);
        }
        res.json(cameras);
    });
};

exports.create = function(req, res) {
    if (req.body.cameraName &&
        req.body.cameraLocation &&
        req.body.liveUrl) {
        Camera.create({
                cameraName: req.body.cameraName,
                cameraLocation: req.body.cameraLocation,
                liveUrl: req.body.liveUrl
            },
            function (err) {
                if (err) {
                    res.send(err);
                }
                res.sendStatus(200);
            });
    } else {
        res.sendStatus(400);
    }
};

exports.get = function(req, res) {
    Camera.findOne({'_id' : req.params.camera_id }, function(err, camera) {
        if (err) {
            res.send(err);
        }
        res.json(camera);
    });
};

exports.delete = function(req, res) {
    if ('all' === req.params.camera_id) {
        Camera.remove({}, function (err) {
            if (err) {
                res.send(err);
            } else {
                res.sendStatus(200);
            }
        });
    } else {
        Camera.findOne({_id: req.params.camera_id}, function (err, camera) {
            if (err) {
                res.send(err);
            } else {
                if (camera) {
                    camera.remove();
                    res.sendStatus(200);
                } else {
                    res.sendStatus(400);
                }
            }
        });
    }
};
