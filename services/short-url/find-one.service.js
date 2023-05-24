const { UrlModel } = require("../../database/models/shortUrl.model")
const shortUrlCache = require("../../cache/short-url.cache");

/**
 * 
 * @param {string} originalUrl 
 */
module.exports.findOneShortUrlService = (originalUrl) => {

    return new Promise((resolve, reject) => {

        const originalUrlCache = shortUrlCache.get(originalUrl);
        if(originalUrlCache) return resolve(originalUrlCache);

        UrlModel.findOne({ originalUrl }).then(url => {
            shortUrlCache.set(originalUrl, url);
            return resolve(url);
        }).catch(error => {
            console.error("ERROR TO FIND: ", error)
            return reject({ message: "Cannot find the website in our services", code: 500 });
        });

    });
}