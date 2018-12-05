'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _lodash = require('lodash');

var _type = require('../types/type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (attributes, allowedAttributes) {
  return (0, _lodash.reduce)(attributes, function (acc, val, attrName) {
    if (allowedAttributes && allowedAttributes[attrName]) {
      var TypeConstructor = (0, _type.initializeType)(allowedAttributes[attrName]);

      if (TypeConstructor) {
        var type = new TypeConstructor(val);

        return (0, _extends5.default)({}, acc, (0, _defineProperty3.default)({}, attrName, type.getValue()));
      }
    }

    return (0, _extends5.default)({}, acc, (0, _defineProperty3.default)({}, attrName, val));
  }, {});
};

module.exports = exports['default'];