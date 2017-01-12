module.exports = (function() {
    var env = require('./env.json');

    return {
        getEnvironment: getEnvironment,
        getConfig: getConfig
    };

    function getEnvironment() {
        return process.env.NODE_ENV || 'development';
    }

    function getConfig() {
        return env[getEnvironment()];
    }

})();