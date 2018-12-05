'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (content) {
  return (
    // find conditionnal comment blocks
    content.replace(/(<!--\[if\s[^\]]+]>)([\s\S]*?)(<!\[endif]-->)/gm, function (match, prefix, content, suffix) {
      // find spaces between tags
      var processedContent = content.replace(/(^|>)(\s+)*(<|$)/gm, function (match, prefix, content, suffix) {
        return '' + prefix + suffix;
      }).replace(/\s{2,}/gm, ' ');
      return '' + prefix + processedContent + suffix;
    })
  );
};

module.exports = exports['default'];