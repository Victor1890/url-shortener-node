const { request, response } = require("express")
const { createShortUrlService } = require("../../services/short-url/create.service")

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
module.exports = (req, res) => {
    createShortUrlService(req.body.url).then(result => {
        return res.status(201).json(result);
    }).catch(err => {
        const { code, ...error } = err;
        return res.status(code || 500).json({ error });
    });
}