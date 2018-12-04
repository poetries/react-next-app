module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Banners.js":
/*!*******************************!*\
  !*** ./components/Banners.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banners; });
/* harmony import */ var antd_mobile_lib_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/carousel */ "antd-mobile/lib/carousel");
/* harmony import */ var antd_mobile_lib_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index.js */ "./utils/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .img-background {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: #fbfafa0a;\n    color:#e4dada;\n  }\n  .img-icon{\n    font-size:50px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var Banners =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Banners, _PureComponent);

  function Banners(props) {
    var _this;

    _classCallCheck(this, Banners);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Banners).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    return _this;
  }

  _createClass(Banners, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var imgLoading = this.refs.imgLoading;
      imgLoading && (imgLoading.style.display = 'none');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          height = _this$props.height,
          pathname = _this$props.pathname;
      var isDetail = pathname.indexOf('detail') !== -1;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BannerWrapper, null, data && data.length ? [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_mobile_lib_carousel__WEBPACK_IMPORTED_MODULE_0___default.a, {
        key: "carousels",
        autoplay: true,
        autoplayInterval: 2000,
        swipeSpeed: 12,
        infinite: true
      }, data.map(function (v) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          onClick: function onClick() {
            _utils_index_js__WEBPACK_IMPORTED_MODULE_3__["storage"].set('__DetailGoodsName__', v.goodsName);
            _utils_index_js__WEBPACK_IMPORTED_MODULE_3__["storage"].set('__goodsCategoryId__', v.goodsCategoryId);
            !isDetail && next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/detail/".concat(v.goodsId));
          },
          key: "".concat(v, "_").concat(Math.random()),
          style: {
            display: 'inline-block',
            width: '100%',
            height: height
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: v.imgUrl,
          alt: "",
          style: {
            width: '100%',
            verticalAlign: 'top',
            height: height
          },
          onLoad: function onLoad() {
            // fire window resize event to change height
            window.dispatchEvent(new Event('resize'));

            _this2.setState({
              imgHeight: 'auto'
            });
          }
        }));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-background",
        key: "imgpic",
        ref: "imgLoading",
        style: {
          height: height
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdPhoto"], {
        className: "img-icon"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u52A0\u8F7D\u4E2D..."))] : null);
    }
  }]);

  return Banners;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./components/ErrorFetch.js":
/*!**********************************!*\
  !*** ./components/ErrorFetch.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/icon */ "antd-mobile/lib/icon");
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.info(this.props.err);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "flex column ai-center jc-center plr25 ptb20 h-full"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "cross-circle-o",
        className: "w100 h100",
        style: {
          fill: '#F13642'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "font32 c333 ptb20"
      }, "\u65E0\u6CD5\u663E\u793A\u9875\u9762"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "font28 c999"
      }, "\u62B1\u6B49\uFF0C\u670D\u52A1\u5668\u83B7\u53D6\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./components/GoodsList.js":
/*!*********************************!*\
  !*** ./components/GoodsList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/modal */ "antd-mobile/lib/modal");
/* harmony import */ var antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/badge */ "antd-mobile/lib/badge");
/* harmony import */ var antd_mobile_lib_badge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_badge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd-mobile/lib/flex */ "antd-mobile/lib/flex");
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mobile/lib/toast */ "antd-mobile/lib/toast");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd-mobile/lib/list */ "antd-mobile/lib/list");
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config/index.js */ "./config/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/index.js */ "./utils/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);






function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  .showgototop {\n    position: fixed;\n    width: 35px;\n    height: 35px;\n    right: 4px;\n    bottom: 64px;\n    animation-name: showgototop;\n    animation-duration: 800ms;\n    animation-fill-mode: forwards;\n    animation-timing-function: ease-in;\n  }\n  @keyframes showgototop {\n     from {\n         transform: translateY(200px);\n     }\n     to {\n         transform: translateY(0px);\n     }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 30px 0;\n\t.am-list:first-child {\n\t\tpadding-top: 0;\n  }\n\t.goods-name {\n\t\ttext-align: left;\n\t\tfont-size: 14px;\n\t\tword-break: break-all;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-box-orient: vertical;\n\t\t-webkit-line-clamp: 2;\n\t\toverflow: hidden;\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\t.am-list-item.am-list-item-middle .am-list-content{\n\t\tfont-size: 12px !important;\n\t\tcolor: #ec576c;\n\t\tpadding: 0;\n\t\tpadding-bottom: 8px;\n\t\tpadding-top: 2px;\n\t}\n\t.am-list-line::after {\n\t\t@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx){\n\t\t\theight: 0px !important;\n\t\t}\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t.goods-name {\n\t\ttext-align: left;\n\t\tfont-size: 14px;\n\t\tword-break: break-all;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-box-orient: vertical;\n\t\t-webkit-line-clamp: 2;\n\t\toverflow: hidden;\n\t}\n\t.am-list-body::after {\n\t\t\t@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx){\n\t\t\t\tbackground-color: #fff !important;\n\t\t\t}\n\t}\n\t.am-flexbox-item {\n\t\tfont-size: 12px;\n\t\tcolor: #bcb7b7;\n\t\tmargin-left: 0px;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t}\n\t.am-list-footer {\n\t\tline-height: 20px;\n\t\tpadding-bottom: 6px;\n\t\tpadding-top: 0;\n\t}\n\t.am-list-item.am-list-item-middle{\n\t\tmin-height: 20px;\n\t\tmargin-top: -2px;\n\t}\n\t.price-color {\n\t\tcolor:#f60016\n\t}\n\t.goods-time {\n\t\ttext-align: right;\n\t\tpadding-right: 5px;\n\t}\n\t.timeWrapper {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tflex-direction: row;\n\t}\n\t.timeWrapper .skip-link {\n\t\tcolor: #fafdfb;\n    background: rgb(226,11,40);\n    border-radius: 20px;\n    font-size: 12px;\n    padding: 5px;\n    position: absolute;\n    right: 11px;\n    padding-right: 12px;\n    padding-left: 12px;\n    bottom: 0;\n    font-size: 14px;\n\n\t\t@media screen  and (max-width: 320px) {\n\t\t\tright: 2px;\n\t\t\tpadding:5px;\n\t\t\tborder-radius: 10px;\n\t\t\tfont-size: 12px;\n\t\t}\n\t}\n  .corner-badge {\n\t  height: 50px;\n\t  width: 200px;\n\t}\n\t.special-badge .am-list-line {\n\t  padding-right: 0;\n\t}\n\t.special-badge .am-list-line .am-list-extra {\n\t  padding: 0;\n\t  height: 44px;\n\t}\n\t.special-badge .am-badge {\n\t  transform: rotate(-41deg);\n\t\ttransform-origin: left bottom;\n\t\tleft: -2px;\n\t\ttop: 11px;\n\t\twidth: 50px;\n\t}\n\t.special-badge .am-badge-text {\n\t  border-radius: 1px;\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tborder-radius: 20px;\n\tbackground: rgb(226,11,40);\n\tpadding: 0px 12px;\n\tmargin-right: 2px;\n\ttext-align: center;\n\theight: 30px;\n\tline-height: 30px;\n\tmargin-left: 30px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 20px 0 0 20px;\n  background: rgb(234,69,91);\n  padding: 0 18px;\n  text-align: center;\n  height: 37px;\n  line-height: 37px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: inline-block;\n\tfont-size:12px;\n\tmargin-right:6px;\n\tposition:relative;\n\ttop:2px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var Item = antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item;
var Brief = Item.Brief;
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject());
var WrapperLink = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject2());
var WrapperSkipLink = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject3());
var GoodsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject4());
var IsTopWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject5());
var ModalListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject6());
var BackTop = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject7());

var GoodsList =
/*#__PURE__*/
function (_Component) {
  _inherits(GoodsList, _Component);

  function GoodsList(props) {
    var _this;

    _classCallCheck(this, GoodsList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GoodsList).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      modal: false,
      showBackTop: false,
      like: false,
      isCloseModal: false,
      goodsItem: {},
      goodsData: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function (key) {
      return function () {
        var _this$setState;

        _this.setState((_this$setState = {}, _defineProperty(_this$setState, key, false), _defineProperty(_this$setState, "isCloseModal", true), _this$setState));
      };
    });

    _this.showPopup = _this.showPopup.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.showModal = _this.showModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handeTongKuan = _this.handeTongKuan.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleQuan = _this.handleQuan.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleGoodsUrl = _this.handleGoodsUrl.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.hanldeLike = _this.hanldeLike.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleOverReport = _this.handleOverReport.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.backTop = _this.backTop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(GoodsList, [{
    key: "showPopup",
    value: function showPopup(newState) {
      this.setState({
        modal: newState,
        isCloseModal: false
      });
    }
  }, {
    key: "showModal",
    value: function showModal(e, v) {
      e.stopPropagation(); //阻止冒泡

      this.setState({
        goodsItem: v
      });
      this.showPopup(true);
    }
  }, {
    key: "handleGoodsUrl",
    value: function handleGoodsUrl(data) {
      this.setState({
        modal: false
      });
      var url = data.url,
          deepLink = data.deepLink,
          goodsId = data.goodsId;
      var goodsUrl = url.indexOf('http') !== -1 ? url : "://".concat(url); // 上报点击商品数据

      this.props.dataReport({
        goodsId: goodsId,
        dataType: _config_index_js__WEBPACK_IMPORTED_MODULE_11__["DataReportType"].DataReportType_ORDER
      }); // 延迟等待数据上报

      setTimeout(function () {
        // deep_link与h5链接跳转区分
        if (deepLink) {
          antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3___default.a.loading('正在跳转中...', 0);

          Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_12__["hasInstalledApp"])(deepLink).then(function (hasInstall) {
            antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3___default.a.hide();

            if (!hasInstall) {
              //未安装 直接跳H5
              // window.location.href = goodsUrl
              Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_12__["createA"])(goodsUrl);
            }
          });
        } else {
          Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_12__["createA"])(goodsUrl); // window.location.href = goodsUrl
        }
      }, 100);
    }
  }, {
    key: "handeTongKuan",
    value: function handeTongKuan(v) {
      this.setState({
        modal: false
      });
      var url = v.url,
          deepLink = v.deepLink,
          goodsId = v.goodsId;
      var tongKuanUrl = url.indexOf('http') !== -1 ? url : "://".concat(url); // 上报点击同款数据

      this.props.dataReport({
        goodsId: goodsId,
        dataType: _config_index_js__WEBPACK_IMPORTED_MODULE_11__["DataReportType"].DataReportType_ORDER_SIMILAR
      }); // 延迟等待数据上报

      setTimeout(function () {
        if (deepLink) {
          antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3___default.a.loading('正在跳转中...', 0);

          Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_12__["hasInstalledApp"])(deepLink).then(function (hasInstall) {
            antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3___default.a.hide();

            if (!hasInstall) {
              //未安装 直接跳H5
              Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_12__["createA"])(tongKuanUrl); // window.location.href = tongKuanUrl
            }
          });
        } else {
          Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_12__["createA"])(tongKuanUrl); // window.location.href = tongKuanUrl
        }
      }, 100);
    }
  }, {
    key: "handleQuan",
    value: function handleQuan(data) {
      this.setState({
        modal: false
      });
      var couponLink = data.couponLink,
          goodsId = data.goodsId;
      var link = couponLink.indexOf('http') !== -1 ? couponLink : "://".concat(couponLink); // 上报点击优惠券数据

      this.props.dataReport({
        goodsId: goodsId,
        dataType: _config_index_js__WEBPACK_IMPORTED_MODULE_11__["DataReportType"].DataReportType_COUPON
      }); // 延迟等待数据上报

      setTimeout(function () {
        Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_12__["createA"])(link); // window.location.href = link
      }, 100);
    }
  }, {
    key: "hanldeLike",
    value: function hanldeLike(data) {
      var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var goodsId = data.goodsId;
      var _this$props = this.props,
          goodsList = _this$props.goodsList,
          detailInfo = _this$props.detailInfo;
      var goods = goodsList.find(function (v) {
        return v.goodsId == goodsId;
      });

      if (Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_12__["isOverReportOrLike"])({
        goodsId: goodsId,
        action: 'like'
      })) {
        return antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3___default.a.success('您已喜欢过~', 1);
      } else {
        // 处理详情页点赞
        if (obj && obj.page == 'detail') {
          detailInfo.likeCount = (parseInt(detailInfo.likeCount) || 0) + 1;
          detailInfo.like = true;
          this.setState({
            detailData: detailInfo
          });
        } else {
          goods.like = true;
          goods.likeCount = (parseInt(goods.likeCount) || 0) + 1;
          this.setState({
            goodsData: goodsList
          });
        }
      }

      _utils_index_js__WEBPACK_IMPORTED_MODULE_12__["storage"].set('__curr_like_time__', Date.now()); // 记录当前点赞时间

      this.props.dataReport({
        goodsId: goodsId,
        dataType: _config_index_js__WEBPACK_IMPORTED_MODULE_11__["DataReportType"].DataReportType_LIKE
      });
    }
  }, {
    key: "handleOverReport",
    value: function handleOverReport(data) {
      var goodsId = data.goodsId;

      if (Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_12__["isOverReportOrLike"])({
        goodsId: goodsId,
        action: 'report'
      })) {
        return antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3___default.a.success('您已举报过~', 1);
      }

      this.props.dataReport({
        goodsId: goodsId,
        dataType: _config_index_js__WEBPACK_IMPORTED_MODULE_11__["DataReportType"].DataReportType_REPORT
      });
    }
  }, {
    key: "backTop",
    value: function backTop() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "handleBackTop",
    value: function handleBackTop(e) {
      var scrollTop = document.documentElement.scrollTop;

      if (scrollTop > 500) {
        this.setState({
          showBackTop: true
        });
      } else {
        this.setState({
          showBackTop: false
        });
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      window.addEventListener('scroll', this.handleBackTop.bind(this));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bindEvents();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState = function (state, callback) {
        return;
      };

      window.removeEventListener('scroll', this.handleBackTop.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          goodsList = _this$props2.goodsList,
          history = _this$props2.history,
          detailInfo = _this$props2.detailInfo,
          showShareActionSheet = _this$props2.showShareActionSheet,
          pathname = _this$props2.pathname,
          popup = _this$props2.popup;
      var _this$state = this.state,
          goodsData = _this$state.goodsData,
          goodsItem = _this$state.goodsItem,
          detailData = _this$state.detailData,
          modal = _this$state.modal,
          isCloseModal = _this$state.isCloseModal,
          cacheGoods = _this$state.cacheGoods;
      var updateCacheTime = moment__WEBPACK_IMPORTED_MODULE_8___default()(Date.now()).diff(moment__WEBPACK_IMPORTED_MODULE_8___default()(_utils_index_js__WEBPACK_IMPORTED_MODULE_12__["storage"].get('__curr_like_time__')), 'minute'); //上次点赞时间和当前时间差值 >=10分钟 更新服务器cache的likeCount

      var isDetail = pathname && pathname.indexOf('detail') !== -1;
      var isSearch = pathname && pathname.indexOf('search') !== -1;
      var cacheGoodsList = _utils_index_js__WEBPACK_IMPORTED_MODULE_12__["storage"].get(_config_index_js__WEBPACK_IMPORTED_MODULE_11__["GOODS_DATA"], []);
      var goodsCache = _utils_index_js__WEBPACK_IMPORTED_MODULE_12__["storage"].get(_config_index_js__WEBPACK_IMPORTED_MODULE_11__["GOODS_DATA"], []);
      var showPopupData = detailData || detailInfo || goodsItem; // 还原详情页点赞数

      goodsCache && goodsCache.forEach(function (vv) {
        if (vv.goodsId == showPopupData.goodsId) {
          showPopupData.like = true;
        }
      });
      var list = goodsData.length === goodsList.length ? goodsData : goodsList.length && goodsList.map(function (v) {
        // 从缓存中找出标志like的商品合并到列表
        goodsCache.length && goodsCache.forEach(function (vv) {
          if (v.goodsId == vv.goodsId) {
            v.like = true; // fix:加modal判断 否则点击直达链接会多触发一次这里
            // if(!modal && !isCloseModal && parseInt(updateCacheTime) < 10){// 时间差小于10分钟，从本地读取，否则直接拉取服务器点赞数据
            // 	v.likeCount = (parseInt(v.likeCount) || 0) +1 	// 前台缓存
            // }
          }
        });
        return _objectSpread({}, v);
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(GoodsWrapper, null, list && list.length > 0 && list.map(function (v) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
          key: "".concat(v.goodsId, "_").concat(Math.random()),
          renderHeader: function renderHeader() {
            return '';
          },
          renderFooter: function renderFooter() {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, !isDetail ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(IconWrapper, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosEye"], null)), v.impressionCount), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
              onClick: function onClick(e) {
                return _this2.hanldeLike(v);
              }
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(IconWrapper, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosHeart"], {
              style: {
                color: v.like ? '#d46070' : ''
              }
            })), v.likeCount), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
              onClick: function onClick(e) {
                return _this2.handleOverReport(v);
              }
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(IconWrapper, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosWarning"], null)), "\u4E3E\u62A5"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
              className: "goods-time"
            }, v.inStockTime), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, null, v.source)) : null);
          }
        }, !isDetail && v.isTop ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(IsTopWrapper, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Item, {
          className: "special-badge"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_badge__WEBPACK_IMPORTED_MODULE_1___default.a, {
          text: '顶'
        }))) : !isDetail ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(IsTopWrapper, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Item, {
          className: "special-badge"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_badge__WEBPACK_IMPORTED_MODULE_1___default.a, {
          text: "\u7CBE\u9009",
          style: {
            padding: '0 3px',
            backgroundColor: '#fff',
            borderRadius: 2,
            color: 'rgb(246, 0, 22)',
            border: '1px solid rgb(246, 0, 22)'
          }
        }))) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Item, {
          arrow: "horizontal",
          thumb: v.goodsImageStruct && v.goodsImageStruct.postImage,
          multipleLine: true,
          activeStyle: {
            background: '#fff'
          },
          onClick: function onClick() {
            _utils_index_js__WEBPACK_IMPORTED_MODULE_12__["storage"].set('__DetailGoodsName__', v.goodsName);
            _utils_index_js__WEBPACK_IMPORTED_MODULE_12__["storage"].set('__goodsCategoryId__', v.goodsCategoryId);
            var tabIndex = location.search ? location.search.split('tabIndex=').pop() : '0';

            antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3___default.a.loading('加载数据跳转中,请稍后...', 1);

            next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push("/detail/".concat(v.goodsId, "?categoryId=").concat(v.goodsCategoryId, "&tabIndex=").concat(tabIndex));
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "goods-name"
        }, v.goodsName), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Brief, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "price-color",
          style: {
            color: v.priceByCoupon ? 'rgb(179, 175, 175)' : ''
          }
        }, "\u73B0\u4EF7 ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          style: {
            textDecoration: v.priceByCoupon ? 'line-through' : '',
            fontSize: 15,
            fontWeight: 500
          }
        }, v.price))), v.priceByCoupon && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Brief, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "price-color",
          style: {
            fontSize: 14
          }
        }, "\u5238\u540E\u4EF7 ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          style: {
            fontSize: 12,
            fontStyle: 'normal'
          }
        }, "\uFFE5"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          style: {
            fontSize: 16,
            fontWeight: 700
          }
        }, v.priceByCoupon.replace('￥', '')))), v.sameGoodsStruct && v.sameGoodsStruct.sameGoods.map(function (vv) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Brief, {
            key: "".concat(vv.source, "_").concat(Math.random())
          }, " ", vv.source, " ", vv.price);
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "timeWrapper",
          onClick: function onClick(e) {
            return !isDetail && !isSearch && _this2.showModal(e, v);
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Brief, null, "\u6709\u6548\u671F ", v.beginDate, "~", v.endDate), !isDetail && !isSearch && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "skip-link"
        }, "\u76F4\u8FBE\u94FE\u63A5"))));
      }), isDetail && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
        key: "footer",
        style: {
          paddingTop: 45
        },
        renderFooter: function renderFooter() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a, {
            style: {
              position: 'fixed',
              bottom: 0,
              background: '#fff',
              height: 50,
              width: '100%',
              zIndex: 100,
              right: 0,
              left: 0,
              borderTop: '1px solid #f3f3f3'
            }
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
            style: {
              paddingLeft: 10
            }
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(IconWrapper, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosEye"], null)), showPopupData.impressionCount || 0), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
            onClick: function onClick() {
              return _this2.hanldeLike(showPopupData, {
                page: 'detail'
              });
            }
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(IconWrapper, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosHeart"], {
            style: {
              color: showPopupData.like ? '#d46070' : ''
            }
          })), showPopupData.likeCount), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
            "data-clipboard-text": typeof window !== 'undefined' ? location.href : '',
            className: "copyBtn",
            onClick: function onClick() {
              return showShareActionSheet();
            }
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(IconWrapper, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoMdShare"], null)), "\u5206\u4EAB"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
            onClick: function onClick() {
              return _this2.handleOverReport(showPopupData);
            }
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(IconWrapper, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosWarning"], null)), "\u4E3E\u62A5"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrapperLink, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
            onClick: function onClick() {
              return _this2.showPopup(true);
            },
            style: {
              color: '#fff',
              fontSize: 16
            }
          }, "\u76F4\u8FBE\u94FE\u63A5")));
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, _defineProperty({
        popup: true,
        animationType: "slide-down",
        visible: this.state.modal,
        onClose: this.onClose('modal')
      }, "animationType", "slide-up"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ModalListWrapper, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: {
          marginTop: -30
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        onClick: function onClick() {
          return _this2.handleGoodsUrl(showPopupData);
        },
        key: "goods"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "goods-name"
      }, showPopupData.goodsName)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrapperSkipLink, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        style: {
          color: '#fff'
        }
      }, "\u76F4\u8FBE\u94FE\u63A5")))), showPopupData.couponName && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        onClick: function onClick() {
          return _this2.handleQuan(showPopupData);
        },
        key: "quan"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        className: "goods-name"
      }, showPopupData.couponName), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrapperSkipLink, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        style: {
          color: '#fff'
        }
      }, "\u76F4\u8FBE\u94FE\u63A5")))), showPopupData.sameGoodsStruct && showPopupData.sameGoodsStruct.sameGoods && showPopupData.sameGoodsStruct.sameGoods.map(function (vvv) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
          onClick: function onClick() {
            return _this2.handeTongKuan(vvv);
          },
          key: "".concat(vvv, "_").concat(Math.random())
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
          className: "goods-name"
        }, vvv.source), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrapperSkipLink, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
          style: {
            color: '#fff'
          }
        }, "\u76F4\u8FBE\u94FE\u63A5"))));
      })))), this.state.showBackTop && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(BackTop, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "showgototop",
        onClick: function onClick() {
          return _this2.backTop();
        },
        src: "https://cdn.yesdat.com/BAAAAAAAAArBb7iWwCMt56vbc.png"
      })));
    }
  }]);

  return GoodsList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

GoodsList.propTypes = {
  goodsList: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array.isRequired,
  dataReport: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  showPopup: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (GoodsList);

/***/ }),

/***/ "./components/GoodsTab.js":
/*!********************************!*\
  !*** ./components/GoodsTab.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoodsTab; });
/* harmony import */ var antd_mobile_lib_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/tabs */ "antd-mobile/lib/tabs");
/* harmony import */ var antd_mobile_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/toast */ "antd-mobile/lib/toast");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd-mobile/lib/badge */ "antd-mobile/lib/badge");
/* harmony import */ var antd_mobile_lib_badge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_badge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/index.js */ "./config/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/index.js */ "./utils/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var GoodsTab =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(GoodsTab, _PureComponent);

  function GoodsTab(props) {
    var _this;

    _classCallCheck(this, GoodsTab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GoodsTab).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    return _this;
  }

  _createClass(GoodsTab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fetchGoods = _this$props.fetchGoods,
          clearGoodsList = _this$props.clearGoodsList,
          clearSearchList = _this$props.clearSearchList,
          categoryId = _this$props.categoryId,
          isServer = _this$props.isServer,
          fetchTopGoods = _this$props.fetchTopGoods,
          path = _this$props.path,
          asPath = _this$props.asPath,
          tabIndex = _this$props.tabIndex,
          location = _this$props.location,
          onTabChange = _this$props.onTabChange;
      var isDetail = path.indexOf('detail') !== -1;
      var queryCategory = _utils_index_js__WEBPACK_IMPORTED_MODULE_6__["storage"].get('__queryCategory__');
      var clientTabIdx = queryCategory && queryCategory.tabIndex || 0;
      var currTab = tabIndex == clientTabIdx ? tabIndex : clientTabIdx; //客户端和服务端对比

      var findIdx = _config_index_js__WEBPACK_IMPORTED_MODULE_4__["tabs"].findIndex(function (v) {
        return v.categoryId == categoryId;
      });
      var tabIdx = findIdx !== -1 ? findIdx : 0;
      var initialTab = isDetail ? tabIdx : currTab; // 详情页和首页对比

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_mobile_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default.a, {
        tabs: _config_index_js__WEBPACK_IMPORTED_MODULE_4__["tabs"].map(function (v) {
          if (v.categoryId == '18') {
            v.title = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_mobile_lib_badge__WEBPACK_IMPORTED_MODULE_2___default.a, {
              text: "\u70ED"
            }, "\u7206\u6B3E\u699C\u5355");
          }

          return _objectSpread({}, v);
        }),
        tabBarActiveTextColor: "#f00",
        tabBarUnderlineStyle: {
          border: '1px #f60016 solid'
        },
        initialPage: initialTab,
        onTabClick: function onTabClick(tab, index) {
          _utils_index_js__WEBPACK_IMPORTED_MODULE_6__["storage"].set('__queryCategory__', {
            categoryId: tab.categoryId,
            tabIndex: index
          });
          _utils_index_js__WEBPACK_IMPORTED_MODULE_6__["storage"].set('fromDetailTriggle', isDetail ? true : false);

          antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default.a.loading('加载中,请稍后...', 1.5);

          onTabChange && onTabChange(tab);

          if (!tab.categoryId) {
            fetchTopGoods();
          } else {
            fetchGoods({
              goodsCategoryId: tab.categoryId
            });
          }

          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/?categoryId=".concat(tab.categoryId, "&tabIndex=").concat(index));
        }
      });
    }
  }]);

  return GoodsTab;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);



/***/ }),

/***/ "./components/LoadMore.js":
/*!********************************!*\
  !*** ./components/LoadMore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-top: 1px dashed #ddd;\n  .load-more{\n    text-align: center;\n    padding: 10px 0;\n    background-color: #fff;\n    color: #999;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var LoadMoreWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var LoadMore =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(LoadMore, _PureComponent);

  function LoadMore(props, context) {
    _classCallCheck(this, LoadMore);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadMore).call(this, props, context));
  }

  _createClass(LoadMore, [{
    key: "_loadMoreHandle",
    value: function _loadMoreHandle() {
      // 执行传递过来的loadMoreData
      this.props.loadMoreFn();
    }
  }, {
    key: "render",
    value: function render() {
      var hasMore = this.props.hasMore;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadMoreWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "load-more",
        ref: "wrapper"
      }, this.props.isLoadingMore && hasMore ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "loading"
      }, "\u52A0\u8F7D\u4E2D...") : hasMore ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this._loadMoreHandle.bind(this)
      }, "\u52A0\u8F7D\u66F4\u591A") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6CA1\u6709\u66F4\u591A\u4E86")));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var wrapper = this.refs.wrapper;
      var hasMore = this.props.hasMore;
      var timeoutId;
      window.addEventListener('scroll', function () {
        if (_this.props.isLoadingMore) return;
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
          // 获取加载更多这个节点距离顶部的距离
          var top = wrapper.getBoundingClientRect().top;
          var windowHeight = window.screen.height;

          if (hasMore && top && top < windowHeight) {
            // 当wrapper已经在页面可视范围之内触发
            _this.props.loadMoreFn();
          }
        }, 50);
      }, false);
    }
  }]);

  return LoadMore;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

LoadMore.propTypes = {
  isLoadingMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  hasMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  loadMoreFn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LoadMore);

/***/ }),

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Loader = function Loader() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3198062752" + " " + 'loader'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3198062752",
    css: ".loader.jsx-3198062752{border:8px solid #f3f3f3;border-top:8px solid #3498db;border-radius:50%;width:40px;height:40px;-webkit-animation:spin-jsx-3198062752 2s linear infinite;animation:spin-jsx-3198062752 2s linear infinite;margin-left:auto;margin-right:auto;margin-top:40px;}@-webkit-keyframes spin-jsx-3198062752{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-jsx-3198062752{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2V0cnkvd29ya3NwYWNlL3dvcmsveWVzZGF0anMvZ29vZHMtYXBwL2dvb2RzYXBwLWg1LW5leHQtc3NyL2NvbXBvbmVudHMvTG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlnQixBQUdrQyxBQVlBLEFBR0UseUJBZEUsNkJBQ1gsa0JBQ1AsU0FVWCxFQVRZLElBWVosUUFYa0MsMEdBQ2pCLGlCQUNDLGtCQUNGLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvcG9ldHJ5L3dvcmtzcGFjZS93b3JrL3llc2RhdGpzL2dvb2RzLWFwcC9nb29kc2FwcC1oNS1uZXh0LXNzci9jb21wb25lbnRzL0xvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgTG9hZGVyID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyJz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubG9hZGVyIHtcbiAgICAgICAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgIzM0OThkYjsgLyogQmx1ZSAqL1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIl19 */\n/*@ sourceURL=/Users/poetry/workspace/work/yesdatjs/goods-app/goodsapp-h5-next-ssr/components/Loader.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/SearchBox.js":
/*!*********************************!*\
  !*** ./components/SearchBox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_search_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/search-bar */ "antd-mobile/lib/search-bar");
/* harmony import */ var antd_mobile_lib_search_bar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_search_bar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_activity_indicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/activity-indicator */ "antd-mobile/lib/activity-indicator");
/* harmony import */ var antd_mobile_lib_activity_indicator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_activity_indicator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd-mobile/lib/menu */ "antd-mobile/lib/menu");
/* harmony import */ var antd_mobile_lib_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mobile/lib/toast */ "antd-mobile/lib/toast");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd-mobile/lib/list */ "antd-mobile/lib/list");
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/index.js */ "./config/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/index.js */ "./utils/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.js */ "./components/index.js");
/* harmony import */ var _styles_no_content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/no-content */ "./components/styles/no-content.js");






function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tposition: fixed;\n\tz-index: 2;\n\ttop: -10px;\n\twidth:100%;\n\n\t.single-foo-menu {\n\t  position: absolute;\n\t  z-index: 90 !important;\n\t  width: 100%;\n\t}\n\n\t.single-menu-active .single-top-nav-bar{\n\t  z-index: 90;\n\t}\n\n\t.single-top-nav-bar {\n\t  position: relative;\n\t  background-color: #008AE6;\n\t  color: #FFF;\n\t}\n\t.am-navbar-title {\n\t  color: #FFF!important;\n\t}\n\t.menu-mask {\n\t  position: absolute;\n\t  top: 0;\n\t  width: 100%;\n\t  height: 100%;\n\t  background-color: #000;\n\t  opacity: 0.4;\n\t  z-index: 89;\n\t}\n\t.single-foo-menu .am-list-item{\n\t  border-bottom: 1px dashed #ece7e7 !important;\n\t}\n\t.am-menu .am-flexbox .am-flexbox-item:only-child .am-list .am-list-item:last-child{\n\t\tpadding-bottom: 120px;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t\t.title {\n\t\t\tfont-size: 14px;\n\t\t}\n\t\t.history .am-list-brief,.hot-search .am-list-brief{\n\t\t\tfont-size: 12px;\n\t\t}\n\t\t.history.am-list {\n \t\t  margin-top: 5px;\n \t\t}\n\t .refresh-text {\n\t\t color: #c1b7b3;\n\t\t font-size: 12px;\n\t }\n\t .refresh-icon {\n\t   font-size: 18px;\n\t\t position: relative;\n\t\t top: 5px;\n\t\t color: #d9cfcb;\n\t }\n\t .refresh-icon.huanyipi{\n\t\t transition:all .2s ease-in;\n\t\t transform:rotate(0deg);\n\t\t transform-origin:center center;\n\t }\n\t .hot-tags {\n\t\t padding:2px;\n     display:inline-flex;\n     flex-direction:row;\n     flex-wrap:wrap;\n\t\t justify-content: flex-start;\n\t }\n\t .tag-item {\n     border-radius:5px;\n     padding:4px;\n     border: 1px solid #dddddd;\n     margin-right:2px;\n\t\t font-size: 12px;\n\t\t color: #b4afaf;\n\t }\n\t .history-icon {\n\t\t padding-right: 3px;\n\t }\n\t .close-icon {\n\t\t font-size: 25px;\n\t\t position: relative;\n\t\t left: 3px;\n\t\t top: 5px;\n\t\t color: #ddd;\n\t }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 50px;\n\tbackground-color: #fff;\n\tborder-bottom: 0px solid #f5f5f9;\n\tbackground-color: white;\n\tjustify-content: space-around;\n\talign-items: center;\n\n\t.logo-img{\n\t\theight: 28px;\n    width: 74px;\n\t}\n  > .bar-wrapper {\n    width:60%;\n  }\n  .bar-wrapper > div{\n    margin-right:10px\n  }\n  > .icon-menu {\n    font-size:36px;\n    margin-top:10px;\n\t\tmargin-left: 5px;\n    color:#bdb9b9;\n  }\n\t.search-bar {\n\t\tbackground-color:#fff;\n\t\tborder-radius:5px;\n\t\tmargin-left:10px;\n\t\tmargin-top:10px;\n\t\theight:40px\n\t}\n\t.am-search-input{\n\t\tborder-radius: 20px;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var Item = antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item;
var Brief = Item.Brief;
var HOT_TAGS = Object(_config_index_js__WEBPACK_IMPORTED_MODULE_9__["disOrderHotTag"])();
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject());
var HotSearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject2());
var SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject3());

var SearchBox =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchBox, _Component);

  function SearchBox(props) {
    var _this;

    _classCallCheck(this, SearchBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchBox).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      visible: false,
      changeFlag: false,
      historyTag: [],
      searchValue: '',
      hotTags: HOT_TAGS,
      initData: '',
      show: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMaskClick", function () {
      _this.setState({
        show: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popupMenu", function (e) {
      e.preventDefault(); // Fix event propagation on Android

      _this.setState({
        show: !_this.state.show
      }); // mock for async data loading


      if (!_this.state.initData) {
        setTimeout(function () {
          _this.setState({
            initData: _config_index_js__WEBPACK_IMPORTED_MODULE_9__["CATEGORY_TAGS"]
          });
        }, 500);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuChange", function (value) {
      _this.setState({
        show: false
      });

      var label = '';
      var categoryId = value[0];
      _config_index_js__WEBPACK_IMPORTED_MODULE_9__["CATEGORY_TAGS"].forEach(function (dataItem) {
        if (dataItem.value === value[0]) {
          label = dataItem.label;

          if (dataItem.children && value[1]) {
            dataItem.children.forEach(function (cItem) {
              if (cItem.value === value[1]) {
                label += " ".concat(cItem.label);
              }
            });
          }
        }
      });

      _this.onSelectCategory({
        categoryName: label,
        categoryId: categoryId
      });
    });

    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleHotTagAndHistory = _this.handleHotTagAndHistory.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleHistory = _this.handleHistory.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.refreshText = _this.refreshText.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SearchBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var categoryParam = Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_10__["getUrlParam"])();
      var isSearchPage = this.props.path.indexOf('search') !== -1;
      this.autoFocusInst.focus(); // 从首页点击类目跳转过来 查询类目

      if (isSearchPage && categoryParam.length) {
        var category_name = categoryParam[3];
        var category_id = categoryParam[6].replace(':', '').replace('}', '');
        Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_10__["saveSearch"])(category_name);
        this.props.onChange({
          goodsCategoryId: category_id
        });
      } //加载历史记录


      isSearchPage && this.setState({
        historyTag: Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_10__["loadSearch"])()
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(val) {
      this.setState({
        searchValue: val,
        changeFlag: true
      });
      this.handleSubmit(val);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(val) {
      var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!val) {
        return this.props.onBlur(); // 清空搜索列表数据
      }

      ;
      Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_10__["saveSearch"])(val);
      this.setState({
        historyTag: Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_10__["loadSearch"])()
      }); // 查询类目

      if (obj.action && obj.action == 'querryCategory') {
        return this.props.onChange({
          goodsCategoryId: obj.categoryId
        });
      } // 查询商品关键词


      this.props.onChange({
        searchKeyword: val
      });
    }
  }, {
    key: "handleHotTagAndHistory",
    value: function handleHotTagAndHistory(v) {
      this.setState({
        searchValue: v
      });
      this.handleSubmit(v);
    }
  }, {
    key: "handleHistory",
    value: function handleHistory(obj) {
      if (obj.action == 'deleteItem') {
        Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_10__["deleteSearch"])(obj.value);
      } else if (obj.action == 'deleteAll') {
        Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_10__["clearSearch"])();
      } // 更新状态


      this.setState({
        historyTag: Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_10__["loadSearch"])()
      });
    }
  }, {
    key: "onSelectCategory",
    // 类目选择
    value: function onSelectCategory(_ref) {
      var categoryName = _ref.categoryName,
          categoryId = _ref.categoryId;
      var isSearchPage = this.props.path.indexOf('search') !== -1;
      var value = {
        category_name: categoryName,
        category_id: categoryId // find tabIndex

      };
      var tabIndex = _config_index_js__WEBPACK_IMPORTED_MODULE_9__["tabs"].findIndex(function (v) {
        return v.categoryId == categoryId;
      });
      _utils_index_js__WEBPACK_IMPORTED_MODULE_10__["storage"].set('__queryCategory__', {
        categoryId: categoryId,
        tabIndex: tabIndex === -1 ? '' : tabIndex
      });
      this.setState({
        searchValue: categoryName,
        visible: false
      }); // 从首页跳转过来参数处理

      if (!isSearchPage) {
        antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3___default.a.loading('正在搜索中,请稍等...', 1);
      } else {
        this.handleSubmit(categoryName, {
          action: 'querryCategory',
          categoryId: categoryId
        });
      }

      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push({
        pathname: '/search',
        query: {
          category: JSON.stringify(value)
        }
      });
    }
  }, {
    key: "refreshText",
    value: function refreshText(refreshIcon) {
      var rotateAngle = refreshIcon.style.transform.replace(/[^0-9]/ig, '');

      if (rotateAngle) {
        rotateAngle = parseInt(rotateAngle, 10);
      } else {
        rotateAngle = 0;
      }

      refreshIcon.style.transform = "rotate(".concat(rotateAngle + 360, "deg)");
      this.setState({
        hotTags: Object(_config_index_js__WEBPACK_IMPORTED_MODULE_9__["disOrderHotTag"])()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          path = _this$props.path,
          hasnoGoods = _this$props.hasnoGoods,
          isLoading = _this$props.isLoading,
          history = _this$props.history,
          clearSearchList = _this$props.clearSearchList,
          fetchTopGoods = _this$props.fetchTopGoods,
          clearGoodsList = _this$props.clearGoodsList,
          tags = _this$props.tags;
      var _this$state = this.state,
          searchValue = _this$state.searchValue,
          changeFlag = _this$state.changeFlag,
          hotTags = _this$state.hotTags,
          historyTag = _this$state.historyTag,
          initData = _this$state.initData,
          show = _this$state.show;
      var categoryParam = typeof window !== 'undefined' ? Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_10__["getUrlParam"])() : '';
      var categoryName = categoryParam.length ? categoryParam[3] : '';
      var isSearchPage = path.indexOf('search') !== -1;
      var isDetailPage = path.indexOf('detail') !== -1;
      var searchKeyword = searchValue || !changeFlag && categoryName || '';
      var menuH = typeof document !== 'undefined' ? document.documentElement.clientHeight : '';
      var menuEl = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "single-foo-menu",
        data: initData,
        value: ['1'],
        level: 1,
        onChange: this.onMenuChange,
        height: menuH
      });
      var loadingEl = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          position: 'absolute',
          width: '100%',
          height: menuH * 0.6,
          display: 'flex',
          justifyContent: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_activity_indicator__WEBPACK_IMPORTED_MODULE_1___default.a, {
        size: "large"
      }));
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(SearchWrapper, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HeaderWrapper, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "logo-img",
        src: "https://cdn.yesdat.com/BAAAAAAAAJ8Bb4lSIC1RrF9zn.png",
        alt: "\u597D\u7269"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bar-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        onClick: function onClick(e) {
          return !isSearchPage && next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push('/search');
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_search_bar__WEBPACK_IMPORTED_MODULE_0___default.a, {
        onChange: function onChange(val) {
          return _this2.handleChange(val);
        },
        onBlur: function onBlur() {
          return !searchKeyword && _this2.props.onBlur();
        },
        value: searchKeyword,
        onCancel: function onCancel() {
          if (isSearchPage) {
            fetchTopGoods();
            _utils_index_js__WEBPACK_IMPORTED_MODULE_10__["storage"].set('__queryCategory__', {
              categoryId: '',
              tabIndex: '0'
            });
            next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push('/');
          }
        },
        ref: function ref(_ref2) {
          return _this2.autoFocusInst = _ref2;
        },
        disabled: isSearchPage ? false : true,
        placeholder: "\u641C\u7D22\u5546\u54C1/\u6807\u7B7E",
        maxLength: 8,
        className: "search-bar"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosMenu"], {
        className: "icon-menu",
        onClick: this.popupMenu
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: show ? 'single-menu-active' : ''
      }, show ? initData ? menuEl : loadingEl : null, show ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "menu-mask",
        onClick: this.onMaskClick
      }) : null), isSearchPage && !searchKeyword && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HotSearchWrapper, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: "hot-search"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Item, {
        extra: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          ref: function ref(icon) {
            return _this2.refreshIcon = icon;
          },
          className: "refresh-text",
          onClick: function onClick() {
            return _this2.refreshText(_this2.refreshIcon.children[0]);
          }
        }, "\u6362\u4E00\u6279 ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoMdSync"], {
          className: "refresh-icon huanyipi"
        }))
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Brief, {
        className: "title"
      }, "\u70ED\u95E8\u641C\u7D22")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Item, {
        wrap: true
      }, hotTags.map(function (v) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "hot-tags",
          key: v,
          onClick: function onClick() {
            return _this2.handleHotTagAndHistory(v);
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "tag-item"
        }, v));
      }))), historyTag && historyTag.length > 0 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: "history"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Item, {
        extra: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosTrash"], {
          className: "refresh-icon",
          onClick: function onClick() {
            return _this2.handleHistory({
              action: 'deleteAll'
            });
          }
        })
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Brief, {
        className: "title"
      }, "\u5386\u53F2\u641C\u7D22")), historyTag.map(function (v) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Item, {
          wrap: true,
          extra: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosClose"], {
            className: "close-icon",
            onClick: function onClick() {
              return _this2.handleHistory({
                action: 'deleteItem',
                value: v
              });
            }
          }),
          key: v
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.handleHotTagAndHistory(v);
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Brief, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoMdTime"], {
          className: "history-icon"
        }), v)));
      }))), searchKeyword && hasnoGoods && !isLoading && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles_no_content__WEBPACK_IMPORTED_MODULE_14__["Nocontent"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "no-data-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "https://cdn.yesdat.com/BAAAAAAAAAABb4kHVDwt3MTGu.png",
        className: "img"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "no-data__text"
      }, "\u8FD9\u91CC\u4EC0\u4E48\u90FD\u6CA1\u6709\uFF0C\u53BB\u770B\u770B\u522B\u7684"))), !isSearchPage && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_index_js__WEBPACK_IMPORTED_MODULE_13__["GoodsTab"], this.props));
    }
  }]);

  return SearchBox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

SearchBox.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  hasnoGoods: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  clearSearchList: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  tags: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

/***/ }),

/***/ "./components/Skeleton.js":
/*!********************************!*\
  !*** ./components/Skeleton.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skeleton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .skeleton {\n      display: flex;\n      padding: 10px;\n      width: 380px;\n    }\n\n    .skeleton .skeleton-head,\n    .skeleton .skeleton-title,\n    .skeleton .skeleton-content {\n        background: rgba(220, 228, 232, 0.41);\n    }\n    .skeleton .skeleton-head{\n      padding:20px;\n      margin-right:10px;\n    }\n\n    .skeleton-body {\n        width: 100%;\n    }\n\n    .skeleton-title {\n        width: 100%;\n        height: 15px;\n        transform-origin: left;\n        animation: skeleton-stretch .5s linear infinite alternate;\n        border-radius: 5px;\n    }\n\n    .skeleton-content {\n        width: 100%;\n        height: 15px;\n        margin-top: 10px;\n        transform-origin: left;\n        animation: skeleton-stretch .5s -.3s linear infinite alternate;\n        border-radius: 5px;\n    }\n\n    @keyframes skeleton-stretch {\n        from {\n            transform: scalex(1);\n        }\n        to {\n            transform: scalex(.3);\n        }\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var Skeleton =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Skeleton, _PureComponent);

  function Skeleton(props, context) {
    _classCallCheck(this, Skeleton);

    return _possibleConstructorReturn(this, _getPrototypeOf(Skeleton).call(this, props, context));
  }

  _createClass(Skeleton, [{
    key: "render",
    value: function render() {
      var count = this.props.count;
      var arr = [];

      if (count) {
        for (var i = 0; i < count; i++) {
          arr.push({});
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, arr.map(function (v) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "skeleton",
          key: Math.random()
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "skeleton-head"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "skeleton-body"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "skeleton-title"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "skeleton-content"
        })));
      }));
    }
  }]);

  return Skeleton;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);


Skeleton.propTypes = {
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};

/***/ }),

/***/ "./components/WrapLink.js":
/*!********************************!*\
  !*** ./components/WrapLink.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // 判断是否为站内路由

var isLink = function isLink(path) {
  return path && (typeof path === 'string' && !path.includes('http') || Object.prototype.toString.call(path) === '[object Object]');
}; // 判断是否为站外链接


var isHref = function isHref(path) {
  return path && typeof path === 'string' && path.includes('http');
};

var _default =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(_default, _PureComponent);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          clickparams = _this$props.clickparams;

      if (onClick) {
        onClick(clickparams);
      }
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          href = _this$props2.href,
          children = _this$props2.children,
          className = _this$props2.className,
          as = _this$props2.as,
          style = _this$props2.style,
          rest = _objectWithoutProperties(_this$props2, ["href", "children", "className", "as", "style"]);

      if (isLink(href)) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          prefetch: true,
          href: href,
          as: as
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({
          className: className,
          style: style
        }, rest), children));
      } else if (isHref(href)) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({
          href: href,
          className: className,
          style: style
        }, rest), children);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.onClick,
        tabIndex: "0",
        role: "button",
        onKeyDown: this.onClick,
        className: className,
        style: style
      }, children);
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);



/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: WrapLink, LoadMore, SearchBox, GoodsList, ErrorFetch, GoodsTab, Banners, Skeleton, Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WrapLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WrapLink */ "./components/WrapLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapLink", function() { return _WrapLink__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _LoadMore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadMore */ "./components/LoadMore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadMore", function() { return _LoadMore__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBox */ "./components/SearchBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return _SearchBox__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _GoodsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GoodsList */ "./components/GoodsList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodsList", function() { return _GoodsList__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ErrorFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorFetch */ "./components/ErrorFetch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorFetch", function() { return _ErrorFetch__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _GoodsTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GoodsTab */ "./components/GoodsTab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodsTab", function() { return _GoodsTab__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Banners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Banners */ "./components/Banners.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Banners", function() { return _Banners__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Skeleton */ "./components/Skeleton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return _Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Loader */ "./components/Loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _Loader__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./components/styles/no-content.js":
/*!*****************************************!*\
  !*** ./components/styles/no-content.js ***!
  \*****************************************/
/*! exports provided: Nocontent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nocontent", function() { return Nocontent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor:#ddd;\n\tfont-size: 12px;\n\tpadding-top: 122px;\n\tmargin-top: -150px;\n\n\t.no-data-wrapper {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tcolor:#ddd;\n\t\tfont-size: 12px;\n\t\tpadding: 160px 0;\n\t}\n\t.no-data__text {\n\t\tpadding: 10px;\n\t}\n\t.img{\n\t\twidth: 51.4%;\n\t\tdisplay:block;\n\t}\n\t.loading-text {\n\t\tpadding: 30px;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Nocontent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

/***/ }),

/***/ "./config/apiConfig.js":
/*!*****************************!*\
  !*** ./config/apiConfig.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  apiDomain: "api.wechat.yesdat.com"
});

/***/ }),

/***/ "./config/constants.js":
/*!*****************************!*\
  !*** ./config/constants.js ***!
  \*****************************/
/*! exports provided: PAGE_SIZE, GOODS_DATA, DataReportType, CATEGORY_TAGS, tabs, GoodsSourceMap, disOrderHotTag, DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_SIZE", function() { return PAGE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOODS_DATA", function() { return GOODS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataReportType", function() { return DataReportType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_TAGS", function() { return CATEGORY_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsSourceMap", function() { return GoodsSourceMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disOrderHotTag", function() { return disOrderHotTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var PAGE_SIZE = 20; //每次加载20条数据

var GOODS_DATA = '__goods_data__'; // 需要上报的数据

var DataReportType = {
  DataReportType_VIEW: 1,
  // 查看
  DataReportType_LIKE: 2,
  // 点赞
  DataReportType_REPORT: 3,
  // 举报
  DataReportType_COUPON: 4,
  // 优惠券
  DataReportType_ORDER: 5,
  // 下单
  DataReportType_ORDER_SIMILAR: 6 //购买同类
  // 类目约定写死

};
var CATEGORY_TAGS = [{
  label: '男鞋',
  value: 1
}, {
  label: '女鞋',
  value: 2
}, {
  label: '手机',
  value: 3
}, {
  label: '电脑',
  value: 4
}, {
  label: '箱包',
  value: 5
}, {
  label: '女装',
  value: 6
}, {
  label: '男装',
  value: 7
}, {
  label: '护肤',
  value: 8
}, {
  label: '化妆品',
  value: 9
}, {
  label: '食品',
  value: 10
}, {
  label: '家电',
  value: 11
}, {
  label: '生活用品',
  value: 12
}, {
  label: '个人护理',
  value: 13
}, {
  label: '运动户外',
  value: 14
}, {
  label: '家纺家饰',
  value: 15
}, {
  label: '灯具电工',
  value: 16
}, {
  label: '图书音像',
  value: 17
}, {
  label: '母婴玩具',
  value: 19
}, {
  label: '其他',
  value: 999
}];
var tabs = [{
  title: '全部',
  categoryId: ''
}, {
  title: '爆款榜单',
  categoryId: '18'
}, {
  title: '生活用品',
  categoryId: '12'
}, {
  title: '化妆品',
  categoryId: '9'
}, {
  title: '女鞋',
  categoryId: '2'
}, {
  title: '女装',
  categoryId: '6'
}];
var GoodsSourceMap = {
  1: '天猫',
  2: '京东',
  3: '亚马逊',
  4: '淘宝',
  5: '苏宁',
  6: '国美' // 热门标签

};
var HOT_SEARCH_TAGS = ['钟表珠宝', '美妆护肤', '内衣配饰', 'iPhone', '抽纸', '时尚连衣裙', '衬衫', '新款男鞋', '风衣', '夹克外套', '牛仔裤', '夹克', '时尚休闲裤', '沙发', '保温杯', '定制窗帘', '床垫', '男装', '女装', '女鞋', '母婴孕童', '个护清洁']; // 随机打乱 取10个

var disOrderHotTag = function disOrderHotTag() {
  var tags = HOT_SEARCH_TAGS.sort(function () {
    return Math.random() > .5 ? -1 : 1;
  });
  return tags.slice(0, 10);
};
var DATA = {
  DATE_TODAY: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD'),
  DATE_YESTERDAY: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'days').format('YYYY-MM-DD'),
  DATE_1_WEEK_BEFORE: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'weeks').format('YYYY-MM-DD'),
  DATE_2_WEEKS_BEFORE: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(2, 'weeks').format('YYYY-MM-DD'),
  DATE_3_WEEKS_BEFORE: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(3, 'weeks').format('YYYY-MM-DD'),
  DATE_1_MONTH_BEFORE: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'months').format('YYYY-MM-DD'),
  DATE_2_MONTH_BEFORE: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(2, 'months').format('YYYY-MM-DD'),
  DATE_3_MONTHS_BEFORE: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(3, 'months').format('YYYY-MM-DD'),
  DATE_1_YEAR_BEFORE: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'years').format('YYYY-MM-DD'),
  DATE_3_MONTHS_AFTER: moment__WEBPACK_IMPORTED_MODULE_0___default()().add(3, 'months').format('YYYY-MM-DD'),
  DATE_1_YEAR_AFTER: moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'year').format('YYYY-MM-DD'),
  DATE_FIRST_DAY_OF_MONTH: moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf('month').format('YYYY-MM-DD'),
  DATE_LAST_DAY_OF_MONTH: moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf('month').format('YYYY-MM-DD'),
  DATE_7_DAYS_BEFORE: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(7, 'days').format('YYYY-MM-DD'),
  DATE_30_DAYS_BEFORE: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(30, 'days').format('YYYY-MM-DD'),
  DATE_90_DAYS_BEFORE: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(90, 'days').format('YYYY-MM-DD'),
  DATE_100_DAYS_BEFORE: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(100, 'days').format('YYYY-MM-DD')
};

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: config, PAGE_SIZE, GOODS_DATA, DataReportType, CATEGORY_TAGS, tabs, GoodsSourceMap, disOrderHotTag, DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiConfig */ "./config/apiConfig.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./config/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAGE_SIZE", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GOODS_DATA", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["GOODS_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataReportType", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["DataReportType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_TAGS", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["CATEGORY_TAGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["tabs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodsSourceMap", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["GoodsSourceMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disOrderHotTag", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["disOrderHotTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["DATA"]; });




/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_storeConfig_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/storeConfig.js */ "./store/storeConfig.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-page-transitions */ "next-page-transitions");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/index.js */ "./components/index.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_12__);


var _class;



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_12___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var API_URL = publicRuntimeConfig.API_URL;

var MyApp = Object(_store_storeConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_class = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(_class =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  _createClass(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).call(this));
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeStart = function (url) {
        nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.start();
      };

      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeComplete = function () {
        return nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.done();
      };

      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeError = function () {
        return nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.done();
      };

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          reduxStore = _this$props.reduxStore,
          pathname = _this$props.router.pathname;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
        store: reduxStore
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
        className: "jsx-1586328328"
      }, "\u597D\u7269\u4E3A\u60A8\u805A\u96C6\u5927\u5E73\u53F0\u7684\u4F18\u60E0\u5546\u54C1\uFF0C\u8BA9\u4F60\u66F4\u4FBF\u6377\u7684\u627E\u5230\u4F60\u60F3\u8981\u7684\u5B9D\u7269")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, _extends({}, pageProps, {
        className: "jsx-1586328328" + " " + (pageProps.className != null && pageProps.className || "")
      })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1586328328",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2V0cnkvd29ya3NwYWNlL3dvcmsveWVzZGF0anMvZ29vZHMtYXBwL2dvb2RzYXBwLWg1LW5leHQtc3NyL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0QyQiIsImZpbGUiOiIvVXNlcnMvcG9ldHJ5L3dvcmtzcGFjZS93b3JrL3llc2RhdGpzL2dvb2RzLWFwcC9nb29kc2FwcC1oNS1uZXh0LXNzci9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcbmltcG9ydCBBcHAsIHtDb250YWluZXJ9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IFJlYWN0LHtGcmFnbWVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0b3JlQ29uZmlnIGZyb20gJ0BzdG9yZUNvbmZpZydcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUGFnZVRyYW5zaXRpb24gfSBmcm9tICduZXh0LXBhZ2UtdHJhbnNpdGlvbnMnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXG5pbXBvcnQge0xvYWRlcn0gZnJvbSAnQGNvbXBvbmVudHMnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xuXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXG5jb25zdCB7IEFQSV9VUkwgfSA9IHB1YmxpY1J1bnRpbWVDb25maWdcblxuQHN0b3JlQ29uZmlnXG5Ad2l0aFJvdXRlclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IENvbXBvbmVudCwgY3R4IH0pIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge31cblxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICB9XG5cbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBSb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKHVybCkgPT4ge1xuICAgICAgTlByb2dyZXNzLnN0YXJ0KClcbiAgICB9XG4gICAgUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcbiAgICBSb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxuXG4gICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlLCByb3V0ZXI6IHtwYXRobmFtZX19ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxuXHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdFx0XHQ8dGl0bGU+5aW954mp5Li65oKo6IGa6ZuG5aSn5bmz5Y+w55qE5LyY5oOg5ZWG5ZOB77yM6K6p5L2g5pu05L6/5o2355qE5om+5Yiw5L2g5oOz6KaB55qE5a6d54mpPC90aXRsZT5cblx0XHRcdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gIC8+XG5cdFx0XHRcdFx0PC9GcmFnbWVudD5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/poetry/workspace/work/yesdatjs/goods-app/goodsapp-h5-next-ssr/pages/_app.js */"
      }));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_3___default.a)) || _class) || _class;



/***/ }),

/***/ "./store/actions/goods.js":
/*!********************************!*\
  !*** ./store/actions/goods.js ***!
  \********************************/
/*! exports provided: CLERA_SEARCH_LIST, CLEAR_TOP_GOODS, MEGER_GOODS_TO_TOPGOODS, MERGE_GOODS, mergeGoods, clearSearchList, clearGoodsList, FETCH_BANNER_REQUEST, FETCH_BANNER_SUCCESS, FETCH_BANNER_FAILURE, fetchBanners, FETCH_GOODS_REQUEST, FETCH_GOODS_SUCCESS, FETCH_GOODS_FAILURE, fetchGoods, FETCH_TOP_GOODS_REQUEST, FETCH_TOP_GOODS_SUCCESS, FETCH_TOP_GOODS_FAILURE, fetchTopGoods, FETCH_GOODS_DETAIL_REQUEST, FETCH_GOODS_DETAIL_SUCCESS, FETCH_GOODS_DETAIL_FAILURE, fetchGoodsDetail, GOODS_DATA_REPORT_REQUEST, GOODS_DATA_REPORT_SUCCESS, GOODS_DATA_REPORT_FAILURE, goodsDataReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLERA_SEARCH_LIST", function() { return CLERA_SEARCH_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_TOP_GOODS", function() { return CLEAR_TOP_GOODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEGER_GOODS_TO_TOPGOODS", function() { return MEGER_GOODS_TO_TOPGOODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MERGE_GOODS", function() { return MERGE_GOODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeGoods", function() { return mergeGoods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSearchList", function() { return clearSearchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearGoodsList", function() { return clearGoodsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BANNER_REQUEST", function() { return FETCH_BANNER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BANNER_SUCCESS", function() { return FETCH_BANNER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BANNER_FAILURE", function() { return FETCH_BANNER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBanners", function() { return fetchBanners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_REQUEST", function() { return FETCH_GOODS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_SUCCESS", function() { return FETCH_GOODS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_FAILURE", function() { return FETCH_GOODS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGoods", function() { return fetchGoods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOP_GOODS_REQUEST", function() { return FETCH_TOP_GOODS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOP_GOODS_SUCCESS", function() { return FETCH_TOP_GOODS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOP_GOODS_FAILURE", function() { return FETCH_TOP_GOODS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTopGoods", function() { return fetchTopGoods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_DETAIL_REQUEST", function() { return FETCH_GOODS_DETAIL_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_DETAIL_SUCCESS", function() { return FETCH_GOODS_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_DETAIL_FAILURE", function() { return FETCH_GOODS_DETAIL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGoodsDetail", function() { return fetchGoodsDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOODS_DATA_REPORT_REQUEST", function() { return GOODS_DATA_REPORT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOODS_DATA_REPORT_SUCCESS", function() { return GOODS_DATA_REPORT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOODS_DATA_REPORT_FAILURE", function() { return GOODS_DATA_REPORT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goodsDataReport", function() { return goodsDataReport; });
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/toast */ "antd-mobile/lib/toast");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/api */ "./store/middleware/api.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/index.js */ "./config/index.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var CLERA_SEARCH_LIST = 'CLERA_SEARCH_LIST';
var CLEAR_TOP_GOODS = 'CLEAR_TOP_GOODS';
var MEGER_GOODS_TO_TOPGOODS = 'MEGER_GOODS_TO_TOPGOODS';
var MERGE_GOODS = 'MERGE_GOODS';
var mergeGoods = function mergeGoods(goods) {
  return {
    type: MERGE_GOODS,
    goods: goods
  };
};
var clearSearchList = function clearSearchList() {
  return {
    type: CLERA_SEARCH_LIST
  };
};
var clearGoodsList = function clearGoodsList() {
  return {
    type: CLEAR_TOP_GOODS
  };
};
var FETCH_BANNER_REQUEST = 'FETCH_BANNER_REQUEST';
var FETCH_BANNER_SUCCESS = 'FETCH_BANNER_SUCCESS';
var FETCH_BANNER_FAILURE = 'FETCH_BANNER_FAILURE';
var fetchBanners = function fetchBanners() {
  return function (dispatch, getState) {
    return dispatch(_defineProperty({}, _middleware_api__WEBPACK_IMPORTED_MODULE_1__["CALL_API"], {
      types: [FETCH_BANNER_REQUEST, FETCH_BANNER_SUCCESS, FETCH_BANNER_FAILURE],
      endpoint: "/v1/goods-slides",
      schema: 'banners',
      query: {
        method: 'get',
        data: {}
      }
    }));
  };
};
var FETCH_GOODS_REQUEST = 'FETCH_GOODS_REQUEST';
var FETCH_GOODS_SUCCESS = 'FETCH_GOODS_SUCCESS';
var FETCH_GOODS_FAILURE = 'FETCH_GOODS_FAILURE';
var fetchGoods = function fetchGoods() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var onSuccess = arguments.length > 1 ? arguments[1] : undefined;
  return function (dispatch, getState) {
    return dispatch(_defineProperty({}, _middleware_api__WEBPACK_IMPORTED_MODULE_1__["CALL_API"], {
      types: [FETCH_GOODS_REQUEST, FETCH_GOODS_SUCCESS, FETCH_GOODS_FAILURE],
      endpoint: "/v1/goods",
      schema: 'goods',
      query: {
        method: 'get',
        data: _objectSpread({
          current_page: params.page || 1,
          page_size: params.pageSize || _config_index_js__WEBPACK_IMPORTED_MODULE_3__["PAGE_SIZE"]
        }, params)
      }
    })).then(onSuccess);
  };
}; // 置顶列表

var FETCH_TOP_GOODS_REQUEST = 'FETCH_TOP_GOODS_REQUEST';
var FETCH_TOP_GOODS_SUCCESS = 'FETCH_TOP_GOODS_SUCCESS';
var FETCH_TOP_GOODS_FAILURE = 'FETCH_TOP_GOODS_FAILURE';
var fetchTopGoods = function fetchTopGoods() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (dispatch, getState) {
    dispatch(fetchBanners());
    return dispatch(_defineProperty({}, _middleware_api__WEBPACK_IMPORTED_MODULE_1__["CALL_API"], {
      types: [FETCH_TOP_GOODS_REQUEST, FETCH_TOP_GOODS_SUCCESS, FETCH_TOP_GOODS_FAILURE],
      endpoint: "/v1/top-goods",
      schema: 'topGoods',
      query: {
        method: 'get',
        data: {}
      }
    })).then(function (res) {
      if (res && res.topGoods) {
        return dispatch(fetchGoods(params)).then(function (d) {
          dispatch(mergeGoods(d.goods.list));
        });
      }
    });
  };
}; // 商品详情

var FETCH_GOODS_DETAIL_REQUEST = 'FETCH_GOODS_DETAIL_REQUEST';
var FETCH_GOODS_DETAIL_SUCCESS = 'FETCH_GOODS_DETAIL_SUCCESS';
var FETCH_GOODS_DETAIL_FAILURE = 'FETCH_GOODS_DETAIL_FAILURE';
var fetchGoodsDetail = function fetchGoodsDetail() {
  var goodsId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (dispatch, getState) {
    return dispatch(_defineProperty({}, _middleware_api__WEBPACK_IMPORTED_MODULE_1__["CALL_API"], {
      types: [FETCH_GOODS_DETAIL_REQUEST, FETCH_GOODS_DETAIL_SUCCESS, FETCH_GOODS_DETAIL_FAILURE],
      endpoint: "/v1/goods/".concat(goodsId),
      schema: 'goodsDetail',
      query: {
        method: 'get',
        data: {}
      }
    }));
  };
}; // 数据上报

var GOODS_DATA_REPORT_REQUEST = 'GOODS_DATA_REPORT_REQUEST';
var GOODS_DATA_REPORT_SUCCESS = 'GOODS_DATA_REPORT_SUCCESS';
var GOODS_DATA_REPORT_FAILURE = 'GOODS_DATA_REPORT_FAILURE';
var goodsDataReport = function goodsDataReport(params) {
  return function (dispatch, getState) {
    return dispatch(_defineProperty({}, _middleware_api__WEBPACK_IMPORTED_MODULE_1__["CALL_API"], {
      types: [GOODS_DATA_REPORT_REQUEST, GOODS_DATA_REPORT_SUCCESS, GOODS_DATA_REPORT_FAILURE],
      endpoint: '/v1/special-selling-data-reports',
      schema: 'dataReport',
      query: {
        method: 'post',
        data: _objectSpread({}, params)
      }
    })).then(function (res) {
      if (res && res.dataReport && params.dataType == '3') {
        antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0___default.a.success('举报成功~^_^~', 1);
      }
    });
  };
};

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: COMMON_FETCHING, COMMON_OVER, MSG_SHOW, MSG_INIT, CLERA_SEARCH_LIST, CLEAR_TOP_GOODS, MEGER_GOODS_TO_TOPGOODS, MERGE_GOODS, mergeGoods, clearSearchList, clearGoodsList, FETCH_BANNER_REQUEST, FETCH_BANNER_SUCCESS, FETCH_BANNER_FAILURE, fetchBanners, FETCH_GOODS_REQUEST, FETCH_GOODS_SUCCESS, FETCH_GOODS_FAILURE, fetchGoods, FETCH_TOP_GOODS_REQUEST, FETCH_TOP_GOODS_SUCCESS, FETCH_TOP_GOODS_FAILURE, fetchTopGoods, FETCH_GOODS_DETAIL_REQUEST, FETCH_GOODS_DETAIL_SUCCESS, FETCH_GOODS_DETAIL_FAILURE, fetchGoodsDetail, GOODS_DATA_REPORT_REQUEST, GOODS_DATA_REPORT_SUCCESS, GOODS_DATA_REPORT_FAILURE, goodsDataReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_FETCHING", function() { return COMMON_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_OVER", function() { return COMMON_OVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSG_SHOW", function() { return MSG_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSG_INIT", function() { return MSG_INIT; });
/* harmony import */ var _goods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods */ "./store/actions/goods.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLERA_SEARCH_LIST", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["CLERA_SEARCH_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLEAR_TOP_GOODS", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["CLEAR_TOP_GOODS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MEGER_GOODS_TO_TOPGOODS", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["MEGER_GOODS_TO_TOPGOODS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MERGE_GOODS", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["MERGE_GOODS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeGoods", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["mergeGoods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearSearchList", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["clearSearchList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearGoodsList", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["clearGoodsList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FETCH_BANNER_REQUEST", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["FETCH_BANNER_REQUEST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FETCH_BANNER_SUCCESS", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["FETCH_BANNER_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FETCH_BANNER_FAILURE", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["FETCH_BANNER_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchBanners", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["fetchBanners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_REQUEST", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["FETCH_GOODS_REQUEST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_SUCCESS", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["FETCH_GOODS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_FAILURE", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["FETCH_GOODS_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchGoods", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["fetchGoods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOP_GOODS_REQUEST", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["FETCH_TOP_GOODS_REQUEST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOP_GOODS_SUCCESS", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["FETCH_TOP_GOODS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOP_GOODS_FAILURE", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["FETCH_TOP_GOODS_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchTopGoods", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["fetchTopGoods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_DETAIL_REQUEST", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["FETCH_GOODS_DETAIL_REQUEST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_DETAIL_SUCCESS", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["FETCH_GOODS_DETAIL_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_DETAIL_FAILURE", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["FETCH_GOODS_DETAIL_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchGoodsDetail", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["fetchGoodsDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GOODS_DATA_REPORT_REQUEST", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["GOODS_DATA_REPORT_REQUEST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GOODS_DATA_REPORT_SUCCESS", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["GOODS_DATA_REPORT_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GOODS_DATA_REPORT_FAILURE", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["GOODS_DATA_REPORT_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "goodsDataReport", function() { return _goods__WEBPACK_IMPORTED_MODULE_0__["goodsDataReport"]; });

var COMMON_FETCHING = 'COMMON_FETCHING';
var COMMON_OVER = 'COMMON_OVER';
var MSG_SHOW = 'MSG_SHOW';
var MSG_INIT = 'MSG_INIT';


/***/ }),

/***/ "./store/middleware/api.js":
/*!*********************************!*\
  !*** ./store/middleware/api.js ***!
  \*********************************/
/*! exports provided: CALL_API, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALL_API", function() { return CALL_API; });
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/toast */ "antd-mobile/lib/toast");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalizr */ "normalizr");
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalizr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! humps */ "humps");
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(humps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/index.js */ "./store/actions/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/index.js */ "./config/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/index.js */ "./utils/index.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! md5 */ "md5");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








 // 生成签名

var KEY = 'ojdqfi5xqetvj6rk'; //后台约定的key

var nonce_str = Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_6__["randomWord"])(false, 32);
var timestamp = Date.now();
var stringA = "nonce_str=".concat(nonce_str, "&timestamp=").concat(timestamp);
var sign = md5__WEBPACK_IMPORTED_MODULE_7___default()("".concat(stringA, "&key=").concat(KEY)).toUpperCase();
var TOKEN = "timestamp=".concat(timestamp, "&nonce_str=").concat(nonce_str, "&sign=").concat(sign);
var API_ROOT = 'http://' + _config_index_js__WEBPACK_IMPORTED_MODULE_5__["config"].apiDomain;

var callApi = function callApi(endpoint, schema) {
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var isDownload = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var fullUrl = endpoint;

  var _ref = query || {},
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'get' : _ref$method,
      data = _ref.data,
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? {} : _ref$headers,
      _ref$withCredentials = _ref.withCredentials,
      withCredentials = _ref$withCredentials === void 0 ? true : _ref$withCredentials;

  if (method.toLowerCase() === 'get') {
    var q = Object(humps__WEBPACK_IMPORTED_MODULE_2__["decamelizeKeys"])(data || {});

    if (q && q.query_optional) {
      Object.keys(q.query_optional).forEach(function (v) {
        q.query_optional[v] = JSON.parse(q.query_optional[v]);
      });
    }

    var ps = Object.keys(q).map(function (v) {
      if (v && q[v]) return "".concat(v, "=").concat(q[v]);else return '';
    }).filter(function (v) {
      return v && v.length;
    });

    if (fullUrl.indexOf('?') === -1) {
      fullUrl += '?';
    } else {
      fullUrl += '&';
    }

    fullUrl += '&current_page=' + q.current_page + '&page_size=' + q.page_size + '&q=' + encodeURIComponent(JSON.stringify(q));
  }

  if (isDownload) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', API_ROOT + fullUrl);
    xhr.setRequestHeader('Accept', 'application/octet-stream');
    xhr.responseType = 'blob';
    xhr.send(null);

    xhr.onload = function (e) {
      if (this.status === 200 && this.readyState === 4) {
        var blob = new Blob([this.response], {
          type: 'application/octet-stream'
        });
        var a = document.createElement('a');
        a.style = "display:none";
        document.body.appendChild(a);
        var url = window.URL.createObjectURL(blob);
        var filename = this.getResponseHeader('content-disposition').split(' ')[1].split('=')[1].replace(/\"/g, '');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    };

    return false;
  } else {
    var _config = {
      method: method,
      withCredentials: withCredentials,
      baseURL: API_ROOT,
      url: fullUrl,
      data: data,
      transformRequest: [function (data) {
        if (data && data.toString() !== '[object FormData]') {
          return JSON.stringify(Object(humps__WEBPACK_IMPORTED_MODULE_2__["decamelizeKeys"])(data));
        }

        return data;
      }],
      headers: {}
    };
    method.toLowerCase() === 'post' && delete _config.headers;
    return axios__WEBPACK_IMPORTED_MODULE_4___default()(_config).then(function (res) {
      if (res.status === 204) {
        return {};
      }

      var json = Object(humps__WEBPACK_IMPORTED_MODULE_2__["camelizeKeys"])(res.data);

      if (json.code !== 0) {
        return Promise.reject({
          data: json
        });
      }

      var camelizedJson = Object(humps__WEBPACK_IMPORTED_MODULE_2__["camelizeKeys"])(json.data);

      if (_typeof(schema) === 'object') {
        return Object.assign({}, Object(normalizr__WEBPACK_IMPORTED_MODULE_1__["normalize"])(camelizedJson, schema));
      } else if (typeof schema === 'string') {
        return Object.assign({}, _defineProperty({}, schema, camelizedJson), {});
      }

      return json;
    }, function (error) {
      return Promise.reject(Object(humps__WEBPACK_IMPORTED_MODULE_2__["camelizeKeys"])(error.response));
    });
  }
};

var CALL_API = 'Call API';
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return function (next) {
    return function (action) {
      var callAPI = action[CALL_API];
      var popUpMsgWhenSuccess = action.popUpMsgWhenSuccess;

      if (typeof callAPI === 'undefined') {
        return next(action);
      }

      var endpoint = callAPI.endpoint;
      var schema = callAPI.schema,
          types = callAPI.types,
          query = callAPI.query;

      if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState());
      }

      if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
      }

      if (!schema) {
        throw new Error('Specify one of the exported Schemas.');
      } // if (!Array.isArray(types) || types.length !== 3) {


      if (!Array.isArray(types)) {
        throw new Error('Expected an array of action types.');
      }

      if (!types.every(function (type) {
        return typeof type === 'string';
      })) {
        throw new Error('Expected action types to be strings.');
      }

      var actionWith = function actionWith(data) {
        var finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
      };

      if (endpoint.indexOf('?') !== -1) {
        endpoint += '&';
      } else {
        endpoint += '?';
      }

      endpoint += TOKEN;

      if (types.length === 1) {
        var isDownload = true;
        return callApi(endpoint, schema, query, isDownload);
      }

      var _types = _slicedToArray(types, 3),
          requestType = _types[0],
          successType = _types[1],
          failureType = _types[2];

      next(actionWith({
        type: requestType
      }));
      next({
        type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__["COMMON_FETCHING"]
      });
      return callApi(endpoint, schema, query).then(function (response) {
        if (popUpMsgWhenSuccess) {
          next({
            type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__["MSG_SHOW"],
            msg: popUpMsgWhenSuccess,
            showType: 'success'
          });
          setTimeout(function () {
            next({
              type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__["MSG_INIT"]
            });
          }, 350);
        }

        next(actionWith({
          response: response,
          type: successType
        }));
        setTimeout(function () {
          next({
            type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__["COMMON_OVER"]
          });
        }, 1500);
        return response;
      }, function (error) {
        var _ref2 = (error || {}).data || {},
            code = _ref2.code,
            message = _ref2.message,
            status = _ref2.status;

        var errMsg = message || '服务异常';

        if (status === 401) {}

        antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0___default.a.offline(errMsg, 2);

        next({
          type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__["MSG_SHOW"],
          msg: errMsg,
          showType: 'error'
        });
        next(actionWith({
          type: failureType,
          response: error
        }));
        setTimeout(function () {
          next({
            type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__["MSG_INIT"]
          });
          next({
            type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__["COMMON_OVER"]
          });
        }, 1500);
        return error;
      });
    };
  };
});

/***/ }),

/***/ "./store/reducers/banners.js":
/*!***********************************!*\
  !*** ./store/reducers/banners.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ "./store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    fetching: false,
    error: false,
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["FETCH_BANNER_SUCCESS"]) {
    var banners = action.response.banners;
    return Object.assign({}, state, {
      fetching: false,
      error: false,
      data: banners.list.length ? banners.list.map(function (v) {
        return {
          goodsId: v.goodsId,
          goodsName: v.goodsName,
          goodsCategoryId: v.goodsCategoryId,
          imgUrl: v.slideImage
        };
      }) : []
    });
  } else if (action.type === _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["FETCH_BANNER_REQUEST"]) {
    return Object.assign({}, state, {
      fetching: true,
      error: false
    });
  }

  return state;
});

/***/ }),

/***/ "./store/reducers/goods.js":
/*!*********************************!*\
  !*** ./store/reducers/goods.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ "./store/actions/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./utils/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    fetching: false,
    error: false,
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["FETCH_GOODS_SUCCESS"]) {
    var goods = action.response.goods;
    var _goods$pagination = goods.pagination,
        totalCount = _goods$pagination.totalCount,
        pageSize = _goods$pagination.pageSize;
    return Object.assign({}, state, {
      fetching: false,
      error: false,
      totalPage: Math.ceil(parseInt(totalCount) / parseInt(pageSize)),
      data: goods.list.length ? goods.list.map(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["formatGoodsListData"]) : []
    });
  } else if (action.type === _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["FETCH_GOODS_REQUEST"]) {
    return Object.assign({}, state, {
      fetching: true,
      error: false
    });
  } else if (action.type === _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["CLERA_SEARCH_LIST"]) {
    return Object.assign({}, state, {
      fetching: false,
      error: false,
      data: []
    });
  }

  return state;
});

/***/ }),

/***/ "./store/reducers/goodsDetail.js":
/*!***************************************!*\
  !*** ./store/reducers/goodsDetail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ "./store/actions/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./utils/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/index.js */ "./config/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    fetching: false,
    error: false,
    data: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["FETCH_GOODS_DETAIL_SUCCESS"]) {
    var goodsDetail = action.response.goodsDetail;
    var data = goodsDetail;
    data.inStockTime = moment__WEBPACK_IMPORTED_MODULE_3___default()(data.inStockTime * 1000).format('MM-DD');
    data.source = "\u6765\u81EA".concat(_config_index_js__WEBPACK_IMPORTED_MODULE_2__["GoodsSourceMap"][data.source]);
    data.price = "\uFFE5".concat(data.price);
    data.priceByCoupon = data.priceByCoupon ? "\uFFE5".concat(data.priceByCoupon) : '';
    data.beginDate = String(data.beginDate).slice(4).replace(/(\d{2})(\d{2})/, '$1-$2');
    data.endDate = String(data.endDate).slice(4).replace(/(\d{2})(\d{2})/, '$1-$2');
    data.impressionCount = data.impressionCount >= 10000 ? "".concat(parseFloat(data.impressionCount / 1000).toFixed(1), "k") : data.impressionCount;
    data.likeCount = data.likeCount >= 1000 ? "".concat(parseFloat(data.likeCount / 1000).toFixed(1), "k") : data.likeCount;

    if (data.sameGoodsStruct) {
      data.sameGoodsStruct.sameGoods.forEach(function (v) {
        v.price = "\uFFE5".concat(v.price);
        v.source = "".concat(_config_index_js__WEBPACK_IMPORTED_MODULE_2__["GoodsSourceMap"][v.source], "\u540C\u6B3E");
      });
    }

    return Object.assign({}, state, {
      fetching: false,
      error: false,
      data: data
    });
  } else if (action.type === _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["FETCH_GOODS_DETAIL_REQUEST"]) {
    return Object.assign({}, state, {
      fetching: true,
      error: false
    });
  }

  return state;
});

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);

var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  goods: __webpack_require__(/*! ./goods */ "./store/reducers/goods.js").default,
  topGoods: __webpack_require__(/*! ./topGoods */ "./store/reducers/topGoods.js").default,
  goodsDetail: __webpack_require__(/*! ./goodsDetail */ "./store/reducers/goodsDetail.js").default,
  banners: __webpack_require__(/*! ./banners */ "./store/reducers/banners.js").default
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./store/reducers/topGoods.js":
/*!************************************!*\
  !*** ./store/reducers/topGoods.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ "./store/actions/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./utils/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    fetching: false,
    error: false,
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["FETCH_TOP_GOODS_SUCCESS"]) {
    var topGoods = action.response.topGoods;
    return Object.assign({}, state, {
      fetching: false,
      error: false,
      data: topGoods.list.length ? topGoods.list.map(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["formatGoodsListData"]).map(function (vv) {
        vv.isTop = true;
        return vv;
      }) : []
    });
  } else if (action.type === _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["FETCH_TOP_GOODS_REQUEST"]) {
    return Object.assign({}, state, {
      fetching: true,
      error: false
    });
  } else if (action.type === _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["MERGE_GOODS"]) {
    //合并Goods数据
    var goods = action.goods;
    return Object.assign({}, state, {
      fetching: false,
      error: false,
      data: _toConsumableArray(state.data).concat(goods)
    });
  } else if (action.type === _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["CLEAR_TOP_GOODS"]) {
    return Object.assign({}, state, {
      data: []
    });
  }

  return state;
});

/***/ }),

/***/ "./store/reduxStore.js":
/*!*****************************!*\
  !*** ./store/reduxStore.js ***!
  \*****************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleware/api */ "./store/middleware/api.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");





function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a, _middleware_api__WEBPACK_IMPORTED_MODULE_3__["default"]];
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middlewares)));
}

/***/ }),

/***/ "./store/storeConfig.js":
/*!******************************!*\
  !*** ./store/storeConfig.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reduxStore */ "./store/reduxStore.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var isServer = typeof window === 'undefined';
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_reduxStore__WEBPACK_IMPORTED_MODULE_2__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_reduxStore__WEBPACK_IMPORTED_MODULE_2__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(AppWithRedux, _React$Component);

      _createClass(AppWithRedux, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {
            var reduxStore, appProps;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Get or Create the store with `undefined` as initialState
                    // This allows you to set a custom default initialState
                    reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

                    appContext.ctx.reduxStore = reduxStore;
                    appProps = {};

                    if (!(typeof App.getInitialProps === 'function')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return App.getInitialProps.call(App, appContext);

                  case 6:
                    appProps = _context.sent;

                  case 7:
                    return _context.abrupt("return", _objectSpread({}, appProps, {
                      initialReduxState: reduxStore.getState()
                    }));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      function AppWithRedux(props) {
        var _this;

        _classCallCheck(this, AppWithRedux);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(AppWithRedux).call(this, props));
        _this.reduxStore = getOrCreateStore(props.initialReduxState);
        return _this;
      }

      _createClass(AppWithRedux, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, _extends({}, this.props, {
            reduxStore: this.reduxStore
          }));
        }
      }]);

      return AppWithRedux;
    }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)
  );
});

/***/ }),

/***/ "./utils/cache.js":
/*!************************!*\
  !*** ./utils/cache.js ***!
  \************************/
/*! exports provided: saveSearch, deleteSearch, clearSearch, loadSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSearch", function() { return saveSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSearch", function() { return deleteSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSearch", function() { return clearSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSearch", function() { return loadSearch; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./utils/index.js");

var SEARCH_KEY = '__search__';
var SEARCH_MAX_LEN = 15;

function insertArray(arr, val, compare, maxLen) {
  var index = arr.findIndex(compare);

  if (index === 0) {
    return;
  }

  if (index > 0) {
    arr.splice(index, 1);
  }

  arr.unshift(val);

  if (maxLen && arr.length > maxLen) {
    arr.pop();
  }
}

function deleteFromArray(arr, compare) {
  var index = arr.findIndex(compare);

  if (index > -1) {
    arr.splice(index, 1);
  }
}

function saveSearch(query) {
  var searches = _index_js__WEBPACK_IMPORTED_MODULE_0__["storage"].get(SEARCH_KEY, []);
  insertArray(searches, query, function (item) {
    return item === query;
  }, SEARCH_MAX_LEN);
  _index_js__WEBPACK_IMPORTED_MODULE_0__["storage"].set(SEARCH_KEY, searches);
  return searches;
}
function deleteSearch(query) {
  var searches = _index_js__WEBPACK_IMPORTED_MODULE_0__["storage"].get(SEARCH_KEY, []);
  deleteFromArray(searches, function (item) {
    return item === query;
  });
  _index_js__WEBPACK_IMPORTED_MODULE_0__["storage"].set(SEARCH_KEY, searches);
  return searches;
}
function clearSearch() {
  _index_js__WEBPACK_IMPORTED_MODULE_0__["storage"].remove(SEARCH_KEY);
  return [];
}
function loadSearch() {
  return _index_js__WEBPACK_IMPORTED_MODULE_0__["storage"].get(SEARCH_KEY, []);
}

/***/ }),

/***/ "./utils/common.js":
/*!*************************!*\
  !*** ./utils/common.js ***!
  \*************************/
/*! exports provided: randomWord, checkPhone, openQuickapp, createA, hasInstalledApp, isOverReportOrLike, getUrlParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomWord", function() { return randomWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPhone", function() { return checkPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openQuickapp", function() { return openQuickapp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createA", function() { return createA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasInstalledApp", function() { return hasInstalledApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOverReportOrLike", function() { return isOverReportOrLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParam", function() { return getUrlParam; });
/* harmony import */ var antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/modal */ "antd-mobile/lib/modal");
/* harmony import */ var antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./utils/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/index.js */ "./config/index.js");



var randomWord = function randomWord(randomFlag, min, max) {
  var str = "",
      range = min,
      pos,
      arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // 随机产生

  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;
  }

  for (var i = 0; i < range; i++) {
    pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }

  return str;
}; // 检测手机型号

var checkPhone = function checkPhone() {
  var MobileDetect = __webpack_require__(/*! mobile-detect */ "mobile-detect");

  var device_type = navigator.userAgent; //获取userAgent信息

  var md = new MobileDetect(device_type); //初始化mobile-detect

  var os = md.os(); //获取系统

  var model = ""; //判断数组中是否包含某字符串

  Array.prototype.contains = function (needle) {
    for (i in this) {
      if (this[i].indexOf(needle) > 0) return i;
    }

    return -1;
  };

  if (os == "iOS") {
    //ios系统的处理
    os = md.os() + md.version("iPhone");
    model = md.mobile();
  } else if (os == "AndroidOS") {
    //Android系统的处理
    os = md.os() + md.version("Android");
    var sss = device_type.split(";");
    var i = sss.contains("Build/");

    if (i > -1) {
      model = sss[i].substring(0, sss[i].indexOf("Build/"));
    }

    var phoneModel = model.toLocaleLowerCase(); //判断是否是oppo

    if (phoneModel.indexOf('oppo') !== -1) {
      return true;
    } else if (phoneModel.indexOf('mi') !== -1) {
      return true;
    }
  }

  return false;
}; // H5页面中呼起快应用

var openQuickapp = function openQuickapp(_ref) {
  var page = _ref.page,
      goods_id = _ref.goods_id,
      goods_category_id = _ref.goods_category_id,
      goods_name = _ref.goods_name,
      is_deeplink = _ref.is_deeplink;

  var appRouter = function appRouter(path) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _index_js__WEBPACK_IMPORTED_MODULE_1__["quickapp"].appRouter('com.application.goodsapp', "/".concat(path), params);
  }; // 检测OPPO手机下呼起好物快应用首页


  if (!checkPhone()) {
    return false;
  }

  antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a.alert('提示', '请求去往好物快应用?', [{
    text: '取消',
    onPress: function onPress() {
      console.log('cancel');
    }
  }, {
    text: '确认',
    onPress: function onPress() {
      if (page == 'home') {
        appRouter('Home', {
          is_deeplink: is_deeplink
        });
      } else if (page == 'detail') {
        appRouter('Detail', {
          goods_id: goods_id,
          goods_name: goods_name,
          goods_category_id: goods_category_id
        });
      } else if (page == 'search') {
        appRouter('Search');
      }
    }
  }]);
};
var createA = function createA(url) {
  var a = document.createElement('a');
  a.href = url;
  a.style.display = 'none'; //取消<a>标签原先的onclick事件,使<a>标签点击后通过href跳转(因为无法用js跳转)^-^

  a.setAttribute("onclick", '');
  a.setAttribute("target", '_blank'); //激发标签点击事件OVER

  a.click("return false");
  a = null;
}; // h5页面呼起客户端
// 检查app是否打开
// 原理：若通过url scheme 打开app成功，那么当前h5会进入后台，通过计时器会有明显延迟。利用时间来判断。

var hasInstalledApp = function hasInstalledApp(deepLink) {
  return new Promise(function (resolve, reject) {
    var timeout,
        t = 1000,
        hasApp = true;
    setTimeout(function () {
      if (hasApp) {
        resolve(true);
      } else {
        resolve(false);
      }

      document.body.removeChild(ifr);
    }, 2000);
    var t1 = Date.now();
    var ifr = document.createElement("iframe");
    ifr.setAttribute('src', deepLink);
    ifr.setAttribute('style', 'display:none');
    document.body.appendChild(ifr);
    timeout = setTimeout(function () {
      var t2 = Date.now();

      if (!t1 || t2 - t1 < t + 100) {
        hasApp = false;
      }
    }, t);
  });
}; // 检测是否举报、点赞数据

var isOverReportOrLike = function isOverReportOrLike(_ref2) {
  var goodsId = _ref2.goodsId,
      action = _ref2.action;
  var arr = _index_js__WEBPACK_IMPORTED_MODULE_1__["storage"].get(_config_index_js__WEBPACK_IMPORTED_MODULE_2__["GOODS_DATA"], []);
  var goodsItem = arr.find(function (v) {
    return v.goodsId == goodsId;
  }) || {};

  if (goodsItem && goodsItem.report && action === 'report' || goodsItem && goodsItem.like && action === 'like') {
    return true;
  }

  if (goodsItem.goodsId == goodsId) {
    if (action == 'like') {
      goodsItem.like = true;
    } else {
      goodsItem.report = true;
    }
  } else {
    if (action == 'like') {
      goodsItem.like = true;
    } else {
      goodsItem.report = true;
    }

    goodsItem.goodsId = goodsId;
    arr.unshift(goodsItem);
  }

  _index_js__WEBPACK_IMPORTED_MODULE_1__["storage"].set(_config_index_js__WEBPACK_IMPORTED_MODULE_2__["GOODS_DATA"], arr);
};
var getUrlParam = function getUrlParam() {
  return decodeURIComponent(location.search).split('"').filter(function (v) {
    return v.length;
  }) || [];
};

/***/ }),

/***/ "./utils/formatData.js":
/*!*****************************!*\
  !*** ./utils/formatData.js ***!
  \*****************************/
/*! exports provided: formatGoodsListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatGoodsListData", function() { return formatGoodsListData; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/index.js */ "./config/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var formatGoodsListData = function formatGoodsListData(v) {
  v.inStockTime = moment__WEBPACK_IMPORTED_MODULE_0___default()(v.inStockTime * 1000).format('MM-DD');
  v.source = "\u6765\u81EA".concat(_config_index_js__WEBPACK_IMPORTED_MODULE_1__["GoodsSourceMap"][v.source]);
  v.beginDate = String(v.beginDate).slice(4).replace(/(\d{2})(\d{2})/, '$1-$2');
  v.endDate = String(v.endDate).slice(4).replace(/(\d{2})(\d{2})/, '$1-$2');
  v.impressionCount = v.impressionCount >= 10000 ? "".concat(parseFloat(v.impressionCount / 1000).toFixed(1), "k") : v.impressionCount;
  v.likeCount = v.likeCount >= 1000 ? "".concat(parseFloat(v.likeCount / 1000).toFixed(1), "k") : v.likeCount;
  v.price = "\uFFE5".concat(v.price);
  v.priceByCoupon = v.priceByCoupon ? "\uFFE5".concat(v.priceByCoupon) : '';

  if (v.sameGoodsStruct) {
    v.sameGoodsStruct.sameGoods.forEach(function (vv) {
      vv.source = "".concat(_config_index_js__WEBPACK_IMPORTED_MODULE_1__["GoodsSourceMap"][vv.source], "\u540C\u6B3E");
      vv.price = "\uFFE5".concat(vv.price);
    });
  }

  return _objectSpread({}, v);
};

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: storage, randomWord, checkPhone, openQuickapp, createA, hasInstalledApp, isOverReportOrLike, getUrlParam, saveSearch, deleteSearch, clearSearch, loadSearch, formatGoodsListData, quickapp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./utils/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomWord", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["randomWord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkPhone", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["checkPhone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openQuickapp", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["openQuickapp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createA", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["createA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasInstalledApp", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["hasInstalledApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOverReportOrLike", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["isOverReportOrLike"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUrlParam", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["getUrlParam"]; });

/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ "./utils/cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveSearch", function() { return _cache__WEBPACK_IMPORTED_MODULE_1__["saveSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteSearch", function() { return _cache__WEBPACK_IMPORTED_MODULE_1__["deleteSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearSearch", function() { return _cache__WEBPACK_IMPORTED_MODULE_1__["clearSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadSearch", function() { return _cache__WEBPACK_IMPORTED_MODULE_1__["loadSearch"]; });

/* harmony import */ var _formatData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatData */ "./utils/formatData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatGoodsListData", function() { return _formatData__WEBPACK_IMPORTED_MODULE_2__["formatGoodsListData"]; });

/* harmony import */ var _quickapp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quickapp */ "./utils/quickapp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quickapp", function() { return _quickapp__WEBPACK_IMPORTED_MODULE_3__["quickapp"]; });

/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./utils/storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return _storage__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./utils/quickapp.js":
/*!***************************!*\
  !*** ./utils/quickapp.js ***!
  \***************************/
/*! exports provided: quickapp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quickapp", function() { return quickapp; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var quickapp = function () {
  if (typeof window !== 'undefined') {
    !function (e) {
      "use strict";

      window.appRouter = function (e, t, a, o) {
        return a = a || {}, o && (a.__PROMPT__ = 1, a.__NAME__ = o), n(e, t, a);
      }, window.installShortcut = function (e, t) {
        return n("command", "", {
          type: "shortcut",
          package: e,
          name: t
        });
      }, window.channelReady = function (e) {
        var n = {
          available: new Function(),
          availableTimeout: 2e3
        };
        return "function" == typeof e ? n.available = e : "object" == _typeof(e) && function (e, n) {
          n = n || {};

          for (var t in n) {
            e[t] = n[t];
          }
        }(n, e), function (e) {
          var n = "http://thefatherofsalmon.com/images",
              t = document.createElement("img");
          if (t.style.width = "1px", t.style.height = "1px", t.style.display = "none", n += "/" + 1e20 * Math.random(), t.src = n, document.body.appendChild(t), t.complete) e.available.call(null, !0);else {
            t.onload = function () {
              clearTimeout(a), e.available.call(null, !0);
            };

            var a = setTimeout(function () {
              e.available.call(null, !1);
            }, e.availableTimeout);
          }
        }(n);
      };

      function n(e, n, t) {
        var a = "http://thefatherofsalmon.com/",
            o = "";

        if (e && (a = a + "?i=" + e), n && (a = a + "&p=" + n), function (e) {
          if (!e) return !0;
          var n = void 0;

          for (n in e) {
            return !1;
          }

          return !0;
        }(t)) {
          var i = window.location.search;
          i.indexOf("?") > -1 && (o = i.substr(1));
        } else {
          o = Object.keys(t).map(function (e) {
            return e + "=" + encodeURIComponent(t[e]);
          }).join("&");
        }

        "" !== o && (a = a + "&a=" + encodeURIComponent(o));
        var l = document.createElement("img");
        l.src = a, l.style.width = "1px", l.style.height = "1px", l.style.display = "none", document.body.appendChild(l);
      }
    }();
    return {
      appRouter: window.appRouter,
      installShortcut: window.installShortcut,
      channelReady: window.channelReady
    };
  }
}();

/***/ }),

/***/ "./utils/storage.js":
/*!**************************!*\
  !*** ./utils/storage.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DB = function () {
  function Storage(path, opts) {
    opts = opts || {};
    var db = {};
    Object.defineProperty(this, '___priv_bk___', {
      value: {
        path: path
      },
      writable: false,
      enumerable: false
    });
    Object.defineProperty(this, '___priv_strict___', {
      value: !!opts.strict,
      writable: false,
      enumerable: false
    });
    Object.defineProperty(this, '___priv_ws___', {
      value: opts.ws || '  ',
      writable: false,
      enumerable: false
    });
    Object.keys(db).forEach(function (key) {
      this[key] = db[key];
    }, this);
  }

  Storage.prototype.getItem = function (key) {
    if (this.hasOwnProperty(key)) {
      if (this.___priv_strict___) {
        return String(this[key]);
      } else {
        return this[key];
      }
    }

    return null;
  };

  Storage.prototype.setItem = function (key, val) {
    if (val === undefined) {
      this[key] = null;
    } else if (this.___priv_strict___) {
      this[key] = String(val);
    } else {
      this[key] = val;
    }

    this.___save___();
  };

  Storage.prototype.removeItem = function (key) {
    delete this[key];

    this.___save___();
  };

  Storage.prototype.clear = function () {
    var self = this; // filters out prototype keys

    Object.keys(self).forEach(function (key) {
      self[key] = undefined;
      delete self[key];
    });
  };

  Storage.prototype.key = function (i) {
    i = i || 0;
    return Object.keys(this)[i];
  };

  Object.defineProperty(Storage.prototype, 'length', {
    get: function get() {
      return Object.keys(this).length;
    }
  });

  Storage.prototype.___save___ = function () {
    var self = this;

    if (!this.___priv_bk___.path) {
      return;
    }

    if (this.___priv_bk___.lock) {
      this.___priv_bk___.wait = true;
      return;
    }

    this.___priv_bk___.lock = true;
  };

  Object.defineProperty(Storage, 'create', {
    value: function value(path, opts) {
      return new Storage(path, opts);
    },
    writable: false,
    enumerable: false
  });
  return new Storage(null, {
    strict: true
  });
}();
/**
 * 本地存储实现,封装localStorage
 */


var store = {
  /* eslint-disable no-undef */
  version: '1.1.0',
  storage: typeof window !== 'undefined' ? window.localStorage : DB //区分客户端和服务端

};
var api = {
  set: function set(key, val) {
    if (this.disabled) {
      return;
    }

    if (val === undefined) {
      return this.remove(key);
    }

    this.storage.setItem(key, serialize(val));
    return val;
  },
  get: function get(key, def) {
    if (this.disabled) {
      return def;
    }

    var val = deserialize(this.storage.getItem(key));
    return val === undefined ? def : val;
  },
  has: function has(key) {
    return this.get(key) !== undefined;
  },
  remove: function remove(key) {
    if (this.disabled) {
      return;
    }

    this.storage.removeItem(key);
  },
  clear: function clear() {
    if (this.disabled) {
      return;
    }

    this.storage.clear();
  },
  getAll: function getAll() {
    if (this.disabled) {
      return null;
    }

    var ret = {};
    this.forEach(function (key, val) {
      ret[key] = val;
    });
    return ret;
  },
  forEach: function forEach(callback) {
    if (this.disabled) {
      return;
    }

    for (var i = 0; i < this.storage.length; i++) {
      var key = this.storage.key(i);
      callback(key, this.get(key));
    }
  }
};
Object.assign(store, api);

function serialize(val) {
  return JSON.stringify(val);
}

function deserialize(val) {
  if (typeof val !== 'string') {
    return undefined;
  }

  try {
    return JSON.parse(val);
  } catch (e) {
    return val || undefined;
  }
}

try {
  var testKey = '__storejs__';
  store.set(testKey, testKey);

  if (store.get(testKey) !== testKey) {
    store.disabled = true;
  }

  store.remove(testKey);
} catch (e) {
  store.disabled = true;
}

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd-mobile/lib/activity-indicator":
/*!*****************************************************!*\
  !*** external "antd-mobile/lib/activity-indicator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/activity-indicator");

/***/ }),

/***/ "antd-mobile/lib/badge":
/*!****************************************!*\
  !*** external "antd-mobile/lib/badge" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/badge");

/***/ }),

/***/ "antd-mobile/lib/carousel":
/*!*******************************************!*\
  !*** external "antd-mobile/lib/carousel" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/carousel");

/***/ }),

/***/ "antd-mobile/lib/flex":
/*!***************************************!*\
  !*** external "antd-mobile/lib/flex" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/flex");

/***/ }),

/***/ "antd-mobile/lib/icon":
/*!***************************************!*\
  !*** external "antd-mobile/lib/icon" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/icon");

/***/ }),

/***/ "antd-mobile/lib/list":
/*!***************************************!*\
  !*** external "antd-mobile/lib/list" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/list");

/***/ }),

/***/ "antd-mobile/lib/menu":
/*!***************************************!*\
  !*** external "antd-mobile/lib/menu" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/menu");

/***/ }),

/***/ "antd-mobile/lib/modal":
/*!****************************************!*\
  !*** external "antd-mobile/lib/modal" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/modal");

/***/ }),

/***/ "antd-mobile/lib/search-bar":
/*!*********************************************!*\
  !*** external "antd-mobile/lib/search-bar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/search-bar");

/***/ }),

/***/ "antd-mobile/lib/tabs":
/*!***************************************!*\
  !*** external "antd-mobile/lib/tabs" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/tabs");

/***/ }),

/***/ "antd-mobile/lib/toast":
/*!****************************************!*\
  !*** external "antd-mobile/lib/toast" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/toast");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "humps":
/*!************************!*\
  !*** external "humps" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("humps");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("md5");

/***/ }),

/***/ "mobile-detect":
/*!********************************!*\
  !*** external "mobile-detect" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-page-transitions":
/*!****************************************!*\
  !*** external "next-page-transitions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-page-transitions");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "normalizr":
/*!****************************!*\
  !*** external "normalizr" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map