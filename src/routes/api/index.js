const { Router } = require("express")

const router = Router();

router.use("/shorturl", require("./short-url.route"))

module.exports = router;