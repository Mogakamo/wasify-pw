const path = require('path')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')


module.exports = {
    future: {
        webpack5: true
    },
    webpack: function (config, options) {
        console.log(options.webpack.version); // 5.18.0
        config.experiments = {};
      return config;
    },
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        CLOUDINARY_URL: process.env.CLOUDINARY_URL,
        DB_NAME: process.env.DB_NAME,
        WEB_URI: process.env.WEB_URI,
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
        EMAIL_FROM: process.env.EMAIL_FROM,
        SESSION_SECRET: process.env.SESSION_SECRET,
    }
};