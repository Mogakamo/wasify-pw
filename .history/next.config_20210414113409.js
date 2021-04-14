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
    webpack: (config, {dev}) => {
        const oldEntry = config.entry
        config.entry = () => oldEntry().then( => {
            
        })
    }
};