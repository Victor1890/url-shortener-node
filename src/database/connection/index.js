const mongoose = require("mongoose");
const config = require("../../config")

mongoose.connect(config.database.url).then(() => {
    console.log("DB is done")
}).catch(error => {
    console.error("ERROR: ", error)
});