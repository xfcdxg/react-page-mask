"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _compose2=_interopRequireDefault(require("ramda/src/compose")),_merge2=_interopRequireDefault(require("ramda/src/merge")),_react=_interopRequireDefault(require("react")),_reactDom=require("react-dom");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a,o=arguments[t];for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}require("./index.css");var MaskList=[],Mask=function(e,t){function a(){(0,_reactDom.unmountComponentAtNode)(l)&&l.remove(),document.documentElement.style.overflow="",document.body.style.overflow=""}var o=document.body,l=document.createElement("div");return MaskList.push(a),document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",l.style.height="100%",l.style.width="100%",o.appendChild(l),(0,_reactDom.render)(_react.default.createElement(MaskContainer,_extends({handleContainerClose:a},t),_react.default.cloneElement(e,{handleContainerClose:a})),l),a};Mask.__proto__.closeAll=function(){0<MaskList.length&&(setTimeout(MaskList.shift(),0),Mask.closeAll(),window.location.hash="")};var localMaskContainerStyle={},localMaskStyle={},localContentStyle={},defultMaskClick=function(){},defaultBgColor={backgroundColor:"#000"},MaskContainer=function(e){var t=e.children,a=e.mask,o=void 0===a||a,l=e.maskClosable,n=void 0===l||l,r=e.style,s=void 0===r?{}:r,c=e.maskStyle,d=void 0===c?{}:c,a=e.contentStyle,l=e.contentClass,r=void 0===l?"":l,c=e.containerClass,l=e.handleContainerClose,e=e.maskClick,e=void 0===e?defultMaskClick:e;return _react.default.createElement("div",{className:"mask-container ".concat(void 0===c?"":c),style:(0,_merge2.default)(localMaskContainerStyle,s)},_react.default.createElement("div",{className:"mask",onClick:n?(0,_compose2.default)(l,e):defultMaskClick,style:o?(0,_compose2.default)((0,_merge2.default)(localMaskStyle),(0,_merge2.default)(defaultBgColor))(d):(0,_merge2.default)(localMaskStyle,d)}),_react.default.createElement("div",{className:"content ".concat(r),style:(0,_merge2.default)(localContentStyle,a)},t))},_default=Mask;exports.default=_default;