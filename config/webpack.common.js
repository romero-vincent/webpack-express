module.exports = (function() {

    var path = require('path');
    var webpack = require('webpack');
    var ExtractTextPlugin = require('extract-text-webpack-plugin');
    //var precss  = require('precss');

    return {
        entry: {
            app: path.resolve(__dirname, '../src/script/app.js')
        },

        resolve: ['.js'],

        module: {
            loaders: [
                {
                    test:  /\.scss$/,
                    loader: ExtractTextPlugin.extract("css?sourceMap!sass?sourceMap")
                },
                {
                    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'url?limit=100000&mimetype=application/font-woff'
                },
                {
                    test: /\.(eot|ttf|png|jpe?g|gif)$/,
                    loader: 'file?name=font/[name].[ext]'
                }
            ]
        },

        postcss: function () {
            return {
                defaults: [precss]
            };
        },

        plugins: [
            new ExtractTextPlugin("[name].css", {
                allChunks: false
            })
        ]
    };

})();