'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (classes, suffix) {
    return classes ? classes.split(' ').map(function (c) {
        return c + '-' + suffix;
    }).join(' ') : '';
};

module.exports = exports['default'];