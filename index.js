module.exports = (function() {
    
    var path = require('path');
    var webpack = require('webpack');
    var express = require('express');
    var liveReload = require('express-livereload');
    var helper = require('./config/helper');

    var app = express();
    var webpackCompiler;

    main();

    function main() {
        setupExpress();
        runWebpackCompiler();
        
        if (helper.getEnvironment() == 'development') {
            watchWebpackChanges();
            runLiveReloader();
        }
    }

    function setupExpress() {
        app.use(express.static(path.join(__dirname, 'public')));
        app.use(express.static(path.join(__dirname, 'tmp')));
    }

    function runWebpackCompiler() {
        var environmentConfig = helper.getConfig();
        var webpackConfig = require(environmentConfig.webpackConfig);
        webpackCompiler = webpack(webpackConfig);
    }

    function watchWebpackChanges() {
        webpackCompiler.watch({
            aggregateTimeout: 1000
        }, function(err, stats) {
            // ...
        });
    }

    function runLiveReloader() {
        liveReload(app, {
            watchDir: process.cwd() + '/tmp'
        });
    }

    return app;

})();
