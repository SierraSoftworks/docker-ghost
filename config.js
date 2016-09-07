// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

"use strict";

var path = require('path'),
    config = require('./config.example');

Object.keys(process.env).filter(key => !key.indexOf("GHOST")).forEach(key => {
    let conf = config;
    const keys = key.split("_");
    keys.forEach((k, i) => {
        let trueKey = k;
        if (trueKey.toUpperCase() === k) {
            trueKey = trueKey.toLowerCase();
        }

        if (!i) return;
        if (i === keys.length - 1) return;
        conf = (conf[k.toLowerCase()] = conf[k.toLowerCase()] || {});
    });

    conf[keys[keys.length - 1].toLowerCase()] = process.env[key];
});

module.exports = config;