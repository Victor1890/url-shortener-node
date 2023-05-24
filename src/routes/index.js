const { Router } = require("express")
const swaggerUI = require("swagger-ui-express")
const router = Router();

router.use("/api", require("./api"))
router.use("/docs", swaggerUI.serve, swaggerUI.setup(require(`${process.cwd()}/public/docs/swagger.json`)))

router.get("/", (_, res) => {
    return res.sendFile(process.cwd() + "/src/views/index.html");
})

module.exports = router;