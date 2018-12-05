'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateType;

var _lodash = require('lodash');

var _ruleError = require('./ruleError');

var _ruleError2 = _interopRequireDefault(_ruleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateType(element, _ref) {
  var components = _ref.components,
      initializeType = _ref.initializeType;
  var attributes = element.attributes,
      tagName = element.tagName;


  var Component = components[tagName];

  if (!Component) {
    return null;
  }

  return (0, _lodash.compact)((0, _lodash.map)(attributes, function (value, attr) {
    var attrType = Component.allowedAttributes && Component.allowedAttributes[attr];
    if (!attrType) return null; // attribute not allowed

    var TypeChecker = initializeType(attrType);
    var result = new TypeChecker(value);
    if (result.isValid()) return null;
    return (0, _ruleError2.default)('Attribute ' + attr + ' ' + result.getErrorMessage(), element);
  }));
}
module.exports = exports['default'];