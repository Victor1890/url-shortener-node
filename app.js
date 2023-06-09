const express = require("express")
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes'));

module.exports = app