const dns = require("dns");
const { UrlModel } = require("../../database/models/shortUrl.model")

/**
 *
 * @param {string} original_url
 */
module.exports.createShortUrlService = (original_url) => {
  
    const regex = /^https?:\/\//;
  
    return new Promise((resolve, reject) => {
  
        if (!regex.test(original_url)) return reject({ message: "Invalid URL", code: 400 });
  
        const urlObject = new URL(original_url);
        dns.lookup(urlObject.hostname, (error) => {
            if (error) return reject({ message: "Invalid URL", code: 400 });

            const url = new UrlModel({
                originalUrl: original_url,
                shortUrl: Math.floor(Math.random()*100000).toString(),
            });
            url.save().then(url => {
                console.log({ url })
                return resolve(url)
            }).catch(error => {
                console.error("Error to save: ", error)
                return reject({ message: "Cannot save url in our storages", code: 500 })
            });
        });
    });
};
