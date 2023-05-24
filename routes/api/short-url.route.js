const { Router } = require("express")
const { 
    createShortUrlController,
    getShortUrlController
} = require("../../controllers/short-url")

const router = Router();

router.get("/", getShortUrlController);
router.post("/", createShortUrlController);

module.exports = router;