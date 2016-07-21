var disk = require('diskusage');
var path = require('path');

function checkDiskSpace(target_free_space) {
    console.log("Checking");
    disk.check(path.join(__dirname, '../../public/uploads'), function(err, info) {
        if (err) {
            console.log("error checking:" + err);
            return;
        }
        let free_space_percent = parseInt(info.available *  100/info.total);
        if (free_space_percent < target_free_space) {
            console.log("Delete oldest event");
            checkDiskSpace(target_free_space);
        }
    }, target_free_space);
}

module.exports = checkDiskSpace;
