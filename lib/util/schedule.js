var schedule = require('node-schedule');
var diskSpaceChecker = require('./eventFileUtils').checkDiskSpace;


exports.scheduleDiskClean = function(interval, targetFreeSpace) {
    var rule = new schedule.RecurrenceRule();
    rule.minute = interval;
    schedule.scheduleJob(rule, diskSpaceChecker(targetFreeSpace));
};
