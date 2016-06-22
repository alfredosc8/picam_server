var url = process.env.MONGO_DB ? process.env.MONGO_DB : 'mongodb://localhost/cameraserver';

module.exports = {
    url : url
};
