var disk = require('diskusage');
var path = require('path');
var fs = require('fs');
var glob = require('glob');
var uploadDir = require('../../config/store').path;
var removeOldestEvent = require('../../controllers/events').removeOldest;

exports.deleteEventFiles = function(event) {
    fs.unlink(path.join(uploadDir, event.previewImage), function(err) {
        if (err) {
            console.log('error deleting event preview image: ' + event.previewImage);
        }
    });

    fs.unlink(path.join(uploadDir, event.video), function(err) {
        if (err) {
            console.log('error deleting event video: ' + event.video);
        }
    });
};

exports.deleteAllEventFiles = function() {
    glob(path.join(uploadDir, '**/*'), function (err, files) {
        files.filter(function(file) {
            fs.unlink(file, function(err) {
                if (err) {
                    console.log('error deleting event preview file: ' + file);
                }
            });
        });
    });
};

//TODO: Use loop instead of recusion to avoid call stack size problems
var checkDiskSpace = function (target_free_space) {
    disk.check(uploadDir, function(err, info) {
        if (err) {
            console.log('error checking disk space: ' + err);
            return;
        }
        var free_space_percent = parseInt(info.available *  100/info.total);
        if (free_space_percent < target_free_space) {
            removeOldestEvent(function(err, event) {
                if (err) {
                    console.log('error deleting event from DB: ' + err);
                    return;
                }
                if (event) {
                    checkDiskSpace(target_free_space);
                }
            });
        }
    }, target_free_space);
};

exports.checkDiskSpace = checkDiskSpace;
