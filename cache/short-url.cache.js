const shortUrlCache = new Map();

module.exports = {

    /**
     * 
     * @param {string} key 
     */
    get: (key) => shortUrlCache.get(key),

    /**
     * 
     * @param {string} key 
     * @param {any} value 
     */
    set: (key, value) => {
        shortUrlCache.set(key, value);
    },
};