"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compose2 = _interopRequireDefault(require("ramda/src/compose"));

var _merge2 = _interopRequireDefault(require("ramda/src/merge"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MaskList = [];

var Mask = function Mask(content, options) {
  var body = document.body;
  var node = document.createElement('div');

  var preventDefaul = function preventDefaul(e) {
    return e.preventDefault();
  };

  var handleContainerClose = function handleContainerClose() {
    if ((0, _reactDom.unmountComponentAtNode)(node)) node.remove();
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  };

  MaskList.push(handleContainerClose);
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  node.style.height = '100%';
  node.style.width = '100%';
  body.appendChild(node);
  (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(MaskContainer, _extends({
    handleContainerClose: handleContainerClose
  }, options), /*#__PURE__*/_react.default.cloneElement(content, {
    handleContainerClose: handleContainerClose
  })), node);
  return handleContainerClose;
};

Mask.__proto__.closeAll = function () {
  if (MaskList.length > 0) {
    setTimeout(MaskList.shift(), 0);
    Mask.closeAll();
    window.location.hash = '';
  }
}; // 以下为扩展属性


var localMaskContainerStyle = {};
var localMaskStyle = {};
var localContentStyle = {};

var defultMaskClick = function defultMaskClick() {};

var defaultBgColor = {
  backgroundColor: '#000'
};

var MaskContainer = function MaskContainer(_ref) {
  var children = _ref.children,
      _ref$mask = _ref.mask,
      mask = _ref$mask === void 0 ? true : _ref$mask,
      _ref$maskClosable = _ref.maskClosable,
      maskClosable = _ref$maskClosable === void 0 ? true : _ref$maskClosable,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$maskStyle = _ref.maskStyle,
      maskStyle = _ref$maskStyle === void 0 ? {} : _ref$maskStyle,
      contentStyle = _ref.contentStyle,
      _ref$contentClass = _ref.contentClass,
      contentClass = _ref$contentClass === void 0 ? '' : _ref$contentClass,
      _ref$containerClass = _ref.containerClass,
      containerClass = _ref$containerClass === void 0 ? '' : _ref$containerClass,
      handleContainerClose = _ref.handleContainerClose,
      _ref$maskClick = _ref.maskClick,
      maskClick = _ref$maskClick === void 0 ? defultMaskClick : _ref$maskClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mask-container ".concat(containerClass),
    style: (0, _merge2.default)(localMaskContainerStyle, style)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mask",
    onClick: maskClosable ? (0, _compose2.default)(handleContainerClose, maskClick) : defultMaskClick,
    style: !mask ? (0, _merge2.default)(localMaskStyle, maskStyle) : (0, _compose2.default)((0, _merge2.default)(localMaskStyle), (0, _merge2.default)(defaultBgColor))(maskStyle)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "content ".concat(contentClass),
    style: (0, _merge2.default)(localContentStyle, contentStyle)
  }, children));
};

var _default = Mask;
exports.default = _default;