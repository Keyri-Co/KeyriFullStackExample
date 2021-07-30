require('dotenv').config();

const config = {
    PORT: process.env.PORT,
    VERIFY_URL: process.env.VERIFY_URL,
    HARDCODE_SERVICE_KEY: process.env.HARDCODE_SERVICE_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    MONGO_URL: process.env.MONGO_URL,
    SET_HEADER_URL: process.env.SET_HEADER_URL
}

module.exports = config;