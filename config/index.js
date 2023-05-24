require('dotenv').config();

module.exports = {
    server: {
        port: parseInt(`${process.env.PORT || 0}`),
    },
    database: {
        url: `${process.env.DB_URL}`
    }
};