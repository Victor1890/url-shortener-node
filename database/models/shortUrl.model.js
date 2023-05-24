const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl: String,
});

const UrlModel = mongoose.model('Url', UrlSchema);

module.exports = {
    UrlModel
}