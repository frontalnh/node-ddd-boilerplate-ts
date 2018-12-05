'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _min = require('lodash/min');

var _min2 = _interopRequireDefault(_min);

var _mjmlCore = require('mjml-core');

var _widthParser2 = require('mjml-core/lib/helpers/widthParser');

var _widthParser3 = _interopRequireDefault(_widthParser2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjImage = (_temp2 = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjImage, _BodyComponent);

  function MjImage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MjImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MjImage.__proto__ || (0, _getPrototypeOf2.default)(MjImage)).call.apply(_ref, [this].concat(args))), _this), _this.headStyle = function (breakpoint) {
      return '\n    @media only screen and (max-width:' + breakpoint + ') {\n      table.full-width-mobile { width: 100% !important; }\n      td.full-width-mobile { width: auto !important; }\n    }\n  ';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MjImage, [{
    key: 'getStyles',
    value: function getStyles() {
      var width = this.getContentWidth();
      var fullWidth = this.getAttribute('full-width') === 'full-width';

      var _widthParser = (0, _widthParser3.default)(width),
          parsedWidth = _widthParser.parsedWidth,
          unit = _widthParser.unit;

      return {
        img: {
          border: this.getAttribute('border'),
          'border-left': this.getAttribute('left'),
          'border-right': this.getAttribute('right'),
          'border-top': this.getAttribute('top'),
          'border-bottom': this.getAttribute('bottom'),
          'border-radius': this.getAttribute('border-radius'),
          display: 'block',
          outline: 'none',
          'text-decoration': 'none',
          height: this.getAttribute('height'),
          'min-width': fullWidth ? '100%' : null,
          width: '100%',
          'max-width': fullWidth ? '100%' : null
        },
        td: {
          width: fullWidth ? null : '' + parsedWidth + unit
        },
        table: {
          'min-width': fullWidth ? '100%' : null,
          'max-width': fullWidth ? '100%' : null,
          width: fullWidth ? '' + parsedWidth + unit : null,
          'border-collapse': 'collapse',
          'border-spacing': '0px'
        }
      };
    }
  }, {
    key: 'getContentWidth',
    value: function getContentWidth() {
      var width = this.getAttribute('width') ? parseInt(this.getAttribute('width'), 10) : Infinity;

      var _getBoxWidths = this.getBoxWidths(),
          box = _getBoxWidths.box;

      return (0, _min2.default)([box, width]);
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      var height = this.getAttribute('height');

      var img = '\n      <img\n        ' + this.htmlAttributes({
        alt: this.getAttribute('alt'),
        height: height && (height === 'auto' ? height : parseInt(height, 10)),
        src: this.getAttribute('src'),
        srcset: this.getAttribute('srcset'),
        style: 'img',
        title: this.getAttribute('title'),
        width: this.getContentWidth()
      }) + '\n      />\n    ';

      if (this.getAttribute('href')) {
        return '\n        <a\n          ' + this.htmlAttributes({
          href: this.getAttribute('href'),
          target: this.getAttribute('target'),
          rel: this.getAttribute('rel'),
          name: this.getAttribute('name')
        }) + '\n        >\n          ' + img + '\n        </a>\n      ';
      }

      return img;
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      <table\n        ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table',
        class: this.getAttribute('fluid-on-mobile') ? 'full-width-mobile' : null
      }) + '\n      >\n        <tbody>\n          <tr>\n            <td ' + this.htmlAttributes({
        style: 'td',
        class: this.getAttribute('fluid-on-mobile') ? 'full-width-mobile' : null
      }) + '>\n              ' + this.renderImage() + '\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }]);
  return MjImage;
}(_mjmlCore.BodyComponent), _class.tagOmission = true, _class.allowedAttributes = {
  alt: 'string',
  href: 'string',
  name: 'string',
  src: 'string',
  srcset: 'string',
  title: 'string',
  rel: 'string',
  align: 'enum(left,center,right)',
  border: 'string',
  'border-bottom': 'string',
  'border-left': 'string',
  'border-right': 'string',
  'border-top': 'string',
  'border-radius': 'unit(px,%){1,4}',
  'container-background-color': 'color',
  'fluid-on-mobile': 'boolean',
  padding: 'unit(px,%){1,4}',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  target: 'string',
  width: 'unit(px)',
  height: 'unit(px)'
}, _class.defaultAttributes = {
  align: 'center',
  border: '0',
  height: 'auto',
  padding: '10px 25px',
  target: '_blank'
}, _temp2);
exports.default = MjImage;
module.exports = exports['default'];