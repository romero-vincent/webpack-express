module.exports = (function() {
    
    var path = require('path');
    var webpack = require('webpack');
    var webpackMerge = require('webpack-merge');
    var commonConfig = require('./webpack.common');

    return webpackMerge(commonConfig, {
        devtool: 'source-map',

        output: {
            path: './tmp',
            filename: "[name].js",
            chunkFilename: '[id].[chunk].js',
            publicPath: 'http://localhost:9772/'
        }
    });

})();