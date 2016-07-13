var path = require('path');
var multer = require('multer');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, '../public/uploads'));
  },
  filename: function (req, file, callback) {
    var ext = file.fieldname === 'previewImage' ? '.jpg' : '.mov';
    callback(null, file.fieldname + '-' + Date.now() + ext);
  }
});

var upload = multer({ storage : storage }).fields([{ name: 'previewImage', maxCount: 1 }, { name: 'video', maxCount: 1 }]);

module.exports = {
    videoUpload: upload
};
