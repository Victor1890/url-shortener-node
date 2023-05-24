const { request, response } = require("express")
const { findOneShortUrlService } = require("../../services/short-url/find-one.service")

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
module.exports = (req, res) => {

    const { url } = req.params;
    findOneShortUrlService(url).then(url => {
        return res.json(url);
    }).catch(err => {
        const { code, ...error } = err;
        return res.status(code || 500).json({ error });
    });

}