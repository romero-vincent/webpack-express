module.exports = (function() {

    var path = require('path');
    var webpack = require('webpack');
    var webpackMerge = require('webpack-merge');
    var commonConfig = require('./webpack.common');

    return webpackMerge(commonConfig, {
        output: {
            path: './dist',
            filename: "[name].js",
            chunkFilename: '[id].[chunk].js'
        },

        plugins: [
            new webpack.optimize.UglifyJsPlugin()
        ]
    });

})();