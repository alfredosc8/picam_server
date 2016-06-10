var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var eventSchema = new Schema({
    cameraName: String,
    cameraLocation: String,
    date: { type: Date, default: Date.now },
    images: [{ name: String, path: String, date: Date }]
});

eventSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Event', eventSchema);
