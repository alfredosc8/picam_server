var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var eventSchema = new Schema({
    cameraName: String,
    cameraLocation: String,
    date: { type: Date, default: Date.now },
    previewImage: String,
    video: String
});

eventSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Event', eventSchema);
