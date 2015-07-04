"use strict";

var p = require('path');

var extensions = /\.jsx?$/;
function stripExtensions(filename) {
    if (extensions.test(filename)) {
        return stripExtensions(filename.replace(extensions, ''));
    }
    return filename;
}

var main = function promiseMap(module, subpath, funcs) {

    var r = {};
    for (var i = 0, l = funcs.length; i < l; i++) {
        r[stripExtensions(funcs[i])] = require(p.join(module, subpath, funcs[i]));
    }
    return r;

};

main.stripExtensions = stripExtensions;

module.exports = main;

