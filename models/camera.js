var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var cameraSchema = new Schema({
    cameraName: String,
    cameraLocation: String,
    liveUrl: String
});

module.exports = mongoose.model('Camera', cameraSchema);
