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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd-mobile/lib/modal"
var modal_ = __webpack_require__(16);
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: ./config/index.js + 2 modules
var config = __webpack_require__(2);

// CONCATENATED MODULE: ./utils/common.js



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
  var MobileDetect = __webpack_require__(32);

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

var common_openQuickapp = function openQuickapp(_ref) {
  var page = _ref.page,
      goods_id = _ref.goods_id,
      goods_category_id = _ref.goods_category_id,
      goods_name = _ref.goods_name,
      is_deeplink = _ref.is_deeplink;

  var appRouter = function appRouter(path) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return quickapp.appRouter('com.application.goodsapp', "/".concat(path), params);
  }; // 检测OPPO手机下呼起好物快应用首页


  if (!checkPhone()) {
    return false;
  }

  modal_default.a.alert('提示', '请求去往好物快应用?', [{
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

var common_isOverReportOrLike = function isOverReportOrLike(_ref2) {
  var goodsId = _ref2.goodsId,
      action = _ref2.action;
  var arr = storage.get(config["c" /* GOODS_DATA */], []);
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

  storage.set(config["c" /* GOODS_DATA */], arr);
};
var getUrlParam = function getUrlParam() {
  return decodeURIComponent(location.search).split('"').filter(function (v) {
    return v.length;
  }) || [];
};
// CONCATENATED MODULE: ./utils/cache.js

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
  var searches = storage.get(SEARCH_KEY, []);
  insertArray(searches, query, function (item) {
    return item === query;
  }, SEARCH_MAX_LEN);
  storage.set(SEARCH_KEY, searches);
  return searches;
}
function deleteSearch(query) {
  var searches = storage.get(SEARCH_KEY, []);
  deleteFromArray(searches, function (item) {
    return item === query;
  });
  storage.set(SEARCH_KEY, searches);
  return searches;
}
function clearSearch() {
  storage.remove(SEARCH_KEY);
  return [];
}
function loadSearch() {
  return storage.get(SEARCH_KEY, []);
}
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(3);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./utils/formatData.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var formatData_formatGoodsListData = function formatGoodsListData(v) {
  v.inStockTime = external_moment_default()(v.inStockTime * 1000).format('MM-DD');
  v.source = "\u6765\u81EA".concat(config["d" /* GoodsSourceMap */][v.source]);
  v.beginDate = String(v.beginDate).slice(4).replace(/(\d{2})(\d{2})/, '$1-$2');
  v.endDate = String(v.endDate).slice(4).replace(/(\d{2})(\d{2})/, '$1-$2');
  v.impressionCount = v.impressionCount >= 10000 ? "".concat(parseFloat(v.impressionCount / 1000).toFixed(1), "k") : v.impressionCount;
  v.likeCount = v.likeCount >= 1000 ? "".concat(parseFloat(v.likeCount / 1000).toFixed(1), "k") : v.likeCount;
  v.price = "\uFFE5".concat(v.price);
  v.priceByCoupon = v.priceByCoupon ? "\uFFE5".concat(v.priceByCoupon) : '';

  if (v.sameGoodsStruct) {
    v.sameGoodsStruct.sameGoods.forEach(function (vv) {
      vv.source = "".concat(config["d" /* GoodsSourceMap */][vv.source], "\u540C\u6B3E");
      vv.price = "\uFFE5".concat(vv.price);
    });
  }

  return _objectSpread({}, v);
};
// CONCATENATED MODULE: ./utils/quickapp.js
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
// CONCATENATED MODULE: ./utils/storage.js
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

/* harmony default export */ var storage = (store);
// CONCATENATED MODULE: ./utils/index.js
/* concated harmony reexport randomWord */__webpack_require__.d(__webpack_exports__, "k", function() { return randomWord; });
/* unused concated harmony import checkPhone */
/* concated harmony reexport openQuickapp */__webpack_require__.d(__webpack_exports__, "i", function() { return common_openQuickapp; });
/* concated harmony reexport createA */__webpack_require__.d(__webpack_exports__, "b", function() { return createA; });
/* concated harmony reexport hasInstalledApp */__webpack_require__.d(__webpack_exports__, "f", function() { return hasInstalledApp; });
/* concated harmony reexport isOverReportOrLike */__webpack_require__.d(__webpack_exports__, "g", function() { return common_isOverReportOrLike; });
/* concated harmony reexport getUrlParam */__webpack_require__.d(__webpack_exports__, "e", function() { return getUrlParam; });
/* concated harmony reexport saveSearch */__webpack_require__.d(__webpack_exports__, "l", function() { return saveSearch; });
/* concated harmony reexport deleteSearch */__webpack_require__.d(__webpack_exports__, "c", function() { return deleteSearch; });
/* concated harmony reexport clearSearch */__webpack_require__.d(__webpack_exports__, "a", function() { return clearSearch; });
/* concated harmony reexport loadSearch */__webpack_require__.d(__webpack_exports__, "h", function() { return loadSearch; });
/* concated harmony reexport formatGoodsListData */__webpack_require__.d(__webpack_exports__, "d", function() { return formatData_formatGoodsListData; });
/* concated harmony reexport quickapp */__webpack_require__.d(__webpack_exports__, "j", function() { return quickapp; });
/* concated harmony reexport storage */__webpack_require__.d(__webpack_exports__, "m", function() { return storage; });






/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./config/apiConfig.js
/* harmony default export */ var apiConfig = ({
  apiDomain: "api.wechat.yesdat.com"
});
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(3);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./config/constants.js

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
  DATE_TODAY: external_moment_default()().format('YYYY-MM-DD'),
  DATE_YESTERDAY: external_moment_default()().subtract(1, 'days').format('YYYY-MM-DD'),
  DATE_1_WEEK_BEFORE: external_moment_default()().subtract(1, 'weeks').format('YYYY-MM-DD'),
  DATE_2_WEEKS_BEFORE: external_moment_default()().subtract(2, 'weeks').format('YYYY-MM-DD'),
  DATE_3_WEEKS_BEFORE: external_moment_default()().subtract(3, 'weeks').format('YYYY-MM-DD'),
  DATE_1_MONTH_BEFORE: external_moment_default()().subtract(1, 'months').format('YYYY-MM-DD'),
  DATE_2_MONTH_BEFORE: external_moment_default()().subtract(2, 'months').format('YYYY-MM-DD'),
  DATE_3_MONTHS_BEFORE: external_moment_default()().subtract(3, 'months').format('YYYY-MM-DD'),
  DATE_1_YEAR_BEFORE: external_moment_default()().subtract(1, 'years').format('YYYY-MM-DD'),
  DATE_3_MONTHS_AFTER: external_moment_default()().add(3, 'months').format('YYYY-MM-DD'),
  DATE_1_YEAR_AFTER: external_moment_default()().add(1, 'year').format('YYYY-MM-DD'),
  DATE_FIRST_DAY_OF_MONTH: external_moment_default()().startOf('month').format('YYYY-MM-DD'),
  DATE_LAST_DAY_OF_MONTH: external_moment_default()().endOf('month').format('YYYY-MM-DD'),
  DATE_7_DAYS_BEFORE: external_moment_default()().subtract(7, 'days').format('YYYY-MM-DD'),
  DATE_30_DAYS_BEFORE: external_moment_default()().subtract(30, 'days').format('YYYY-MM-DD'),
  DATE_90_DAYS_BEFORE: external_moment_default()().subtract(90, 'days').format('YYYY-MM-DD'),
  DATE_100_DAYS_BEFORE: external_moment_default()().subtract(100, 'days').format('YYYY-MM-DD')
};
// CONCATENATED MODULE: ./config/index.js
/* concated harmony reexport config */__webpack_require__.d(__webpack_exports__, "f", function() { return apiConfig; });
/* concated harmony reexport PAGE_SIZE */__webpack_require__.d(__webpack_exports__, "e", function() { return PAGE_SIZE; });
/* concated harmony reexport GOODS_DATA */__webpack_require__.d(__webpack_exports__, "c", function() { return GOODS_DATA; });
/* concated harmony reexport DataReportType */__webpack_require__.d(__webpack_exports__, "b", function() { return DataReportType; });
/* concated harmony reexport CATEGORY_TAGS */__webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORY_TAGS; });
/* concated harmony reexport tabs */__webpack_require__.d(__webpack_exports__, "h", function() { return tabs; });
/* concated harmony reexport GoodsSourceMap */__webpack_require__.d(__webpack_exports__, "d", function() { return GoodsSourceMap; });
/* concated harmony reexport disOrderHotTag */__webpack_require__.d(__webpack_exports__, "g", function() { return disOrderHotTag; });
/* unused concated harmony import DATA */



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/flex");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/toast");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd-mobile/lib/toast"
var toast_ = __webpack_require__(7);
var toast_default = /*#__PURE__*/__webpack_require__.n(toast_);

// EXTERNAL MODULE: ./store/middleware/api.js
var api = __webpack_require__(12);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(3);

// EXTERNAL MODULE: ./config/index.js + 2 modules
var config = __webpack_require__(2);

// CONCATENATED MODULE: ./store/actions/goods.js


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
var goods_fetchBanners = function fetchBanners() {
  return function (dispatch, getState) {
    return dispatch(_defineProperty({}, api["a" /* CALL_API */], {
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
var goods_fetchGoods = function fetchGoods() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var onSuccess = arguments.length > 1 ? arguments[1] : undefined;
  return function (dispatch, getState) {
    return dispatch(_defineProperty({}, api["a" /* CALL_API */], {
      types: [FETCH_GOODS_REQUEST, FETCH_GOODS_SUCCESS, FETCH_GOODS_FAILURE],
      endpoint: "/v1/goods",
      schema: 'goods',
      query: {
        method: 'get',
        data: _objectSpread({
          current_page: params.page || 1,
          page_size: params.pageSize || config["e" /* PAGE_SIZE */]
        }, params)
      }
    })).then(onSuccess);
  };
}; // 置顶列表

var FETCH_TOP_GOODS_REQUEST = 'FETCH_TOP_GOODS_REQUEST';
var FETCH_TOP_GOODS_SUCCESS = 'FETCH_TOP_GOODS_SUCCESS';
var FETCH_TOP_GOODS_FAILURE = 'FETCH_TOP_GOODS_FAILURE';
var goods_fetchTopGoods = function fetchTopGoods() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (dispatch, getState) {
    dispatch(goods_fetchBanners());
    return dispatch(_defineProperty({}, api["a" /* CALL_API */], {
      types: [FETCH_TOP_GOODS_REQUEST, FETCH_TOP_GOODS_SUCCESS, FETCH_TOP_GOODS_FAILURE],
      endpoint: "/v1/top-goods",
      schema: 'topGoods',
      query: {
        method: 'get',
        data: {}
      }
    })).then(function (res) {
      if (res && res.topGoods) {
        return dispatch(goods_fetchGoods(params)).then(function (d) {
          dispatch(mergeGoods(d.goods.list));
        });
      }
    });
  };
}; // 商品详情

var FETCH_GOODS_DETAIL_REQUEST = 'FETCH_GOODS_DETAIL_REQUEST';
var FETCH_GOODS_DETAIL_SUCCESS = 'FETCH_GOODS_DETAIL_SUCCESS';
var FETCH_GOODS_DETAIL_FAILURE = 'FETCH_GOODS_DETAIL_FAILURE';
var goods_fetchGoodsDetail = function fetchGoodsDetail() {
  var goodsId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (dispatch, getState) {
    return dispatch(_defineProperty({}, api["a" /* CALL_API */], {
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
var goods_goodsDataReport = function goodsDataReport(params) {
  return function (dispatch, getState) {
    return dispatch(_defineProperty({}, api["a" /* CALL_API */], {
      types: [GOODS_DATA_REPORT_REQUEST, GOODS_DATA_REPORT_SUCCESS, GOODS_DATA_REPORT_FAILURE],
      endpoint: '/v1/special-selling-data-reports',
      schema: 'dataReport',
      query: {
        method: 'post',
        data: _objectSpread({}, params)
      }
    })).then(function (res) {
      if (res && res.dataReport && params.dataType == '3') {
        toast_default.a.success('举报成功~^_^~', 1);
      }
    });
  };
};
// CONCATENATED MODULE: ./store/actions/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COMMON_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return COMMON_OVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return MSG_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return MSG_INIT; });
/* concated harmony reexport CLERA_SEARCH_LIST */__webpack_require__.d(__webpack_exports__, "b", function() { return CLERA_SEARCH_LIST; });
/* concated harmony reexport CLEAR_TOP_GOODS */__webpack_require__.d(__webpack_exports__, "a", function() { return CLEAR_TOP_GOODS; });
/* unused concated harmony import MEGER_GOODS_TO_TOPGOODS */
/* concated harmony reexport MERGE_GOODS */__webpack_require__.d(__webpack_exports__, "m", function() { return MERGE_GOODS; });
/* unused concated harmony import mergeGoods */
/* concated harmony reexport clearSearchList */__webpack_require__.d(__webpack_exports__, "q", function() { return clearSearchList; });
/* concated harmony reexport clearGoodsList */__webpack_require__.d(__webpack_exports__, "p", function() { return clearGoodsList; });
/* concated harmony reexport FETCH_BANNER_REQUEST */__webpack_require__.d(__webpack_exports__, "e", function() { return FETCH_BANNER_REQUEST; });
/* concated harmony reexport FETCH_BANNER_SUCCESS */__webpack_require__.d(__webpack_exports__, "f", function() { return FETCH_BANNER_SUCCESS; });
/* unused concated harmony import FETCH_BANNER_FAILURE */
/* concated harmony reexport fetchBanners */__webpack_require__.d(__webpack_exports__, "r", function() { return goods_fetchBanners; });
/* concated harmony reexport FETCH_GOODS_REQUEST */__webpack_require__.d(__webpack_exports__, "i", function() { return FETCH_GOODS_REQUEST; });
/* concated harmony reexport FETCH_GOODS_SUCCESS */__webpack_require__.d(__webpack_exports__, "j", function() { return FETCH_GOODS_SUCCESS; });
/* unused concated harmony import FETCH_GOODS_FAILURE */
/* concated harmony reexport fetchGoods */__webpack_require__.d(__webpack_exports__, "s", function() { return goods_fetchGoods; });
/* concated harmony reexport FETCH_TOP_GOODS_REQUEST */__webpack_require__.d(__webpack_exports__, "k", function() { return FETCH_TOP_GOODS_REQUEST; });
/* concated harmony reexport FETCH_TOP_GOODS_SUCCESS */__webpack_require__.d(__webpack_exports__, "l", function() { return FETCH_TOP_GOODS_SUCCESS; });
/* unused concated harmony import FETCH_TOP_GOODS_FAILURE */
/* concated harmony reexport fetchTopGoods */__webpack_require__.d(__webpack_exports__, "u", function() { return goods_fetchTopGoods; });
/* concated harmony reexport FETCH_GOODS_DETAIL_REQUEST */__webpack_require__.d(__webpack_exports__, "g", function() { return FETCH_GOODS_DETAIL_REQUEST; });
/* concated harmony reexport FETCH_GOODS_DETAIL_SUCCESS */__webpack_require__.d(__webpack_exports__, "h", function() { return FETCH_GOODS_DETAIL_SUCCESS; });
/* unused concated harmony import FETCH_GOODS_DETAIL_FAILURE */
/* concated harmony reexport fetchGoodsDetail */__webpack_require__.d(__webpack_exports__, "t", function() { return goods_fetchGoodsDetail; });
/* unused concated harmony import GOODS_DATA_REPORT_REQUEST */
/* unused concated harmony import GOODS_DATA_REPORT_SUCCESS */
/* unused concated harmony import GOODS_DATA_REPORT_FAILURE */
/* concated harmony reexport goodsDataReport */__webpack_require__.d(__webpack_exports__, "v", function() { return goods_goodsDataReport; });
var COMMON_FETCHING = 'COMMON_FETCHING';
var COMMON_OVER = 'COMMON_OVER';
var MSG_SHOW = 'MSG_SHOW';
var MSG_INIT = 'MSG_INIT';


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/list");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/badge");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CALL_API; });
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalizr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(humps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








 // 生成签名

var KEY = 'ojdqfi5xqetvj6rk'; //后台约定的key

var nonce_str = Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_6__[/* randomWord */ "k"])(false, 32);
var timestamp = Date.now();
var stringA = "nonce_str=".concat(nonce_str, "&timestamp=").concat(timestamp);
var sign = md5__WEBPACK_IMPORTED_MODULE_7___default()("".concat(stringA, "&key=").concat(KEY)).toUpperCase();
var TOKEN = "timestamp=".concat(timestamp, "&nonce_str=").concat(nonce_str, "&sign=").concat(sign);
var API_ROOT = 'http://' + _config_index_js__WEBPACK_IMPORTED_MODULE_5__[/* config */ "f"].apiDomain;

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
/* harmony default export */ __webpack_exports__["b"] = (function (store) {
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
        type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__[/* COMMON_FETCHING */ "c"]
      });
      return callApi(endpoint, schema, query).then(function (response) {
        if (popUpMsgWhenSuccess) {
          next({
            type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__[/* MSG_SHOW */ "o"],
            msg: popUpMsgWhenSuccess,
            showType: 'success'
          });
          setTimeout(function () {
            next({
              type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__[/* MSG_INIT */ "n"]
            });
          }, 350);
        }

        next(actionWith({
          response: response,
          type: successType
        }));
        setTimeout(function () {
          next({
            type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__[/* COMMON_OVER */ "d"]
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
          type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__[/* MSG_SHOW */ "o"],
          msg: errMsg,
          showType: 'error'
        });
        next(actionWith({
          type: failureType,
          response: error
        }));
        setTimeout(function () {
          next({
            type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__[/* MSG_INIT */ "n"]
          });
          next({
            type: _actions_index_js__WEBPACK_IMPORTED_MODULE_3__[/* COMMON_OVER */ "d"]
          });
        }, 1500);
        return error;
      });
    };
  };
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("humps");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(22);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/WrapLink.js
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

var WrapLink_default =
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
        return external_react_default.a.createElement(link_default.a, {
          prefetch: true,
          href: href,
          as: as
        }, external_react_default.a.createElement("a", _extends({
          className: className,
          style: style
        }, rest), children));
      } else if (isHref(href)) {
        return external_react_default.a.createElement("a", _extends({
          href: href,
          className: className,
          style: style
        }, rest), children);
      }

      return external_react_default.a.createElement("div", {
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
}(external_react_["PureComponent"]);


// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(14);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(4);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/LoadMore.js
function LoadMore_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LoadMore_typeof = function _typeof(obj) { return typeof obj; }; } else { LoadMore_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LoadMore_typeof(obj); }

function LoadMore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LoadMore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LoadMore_createClass(Constructor, protoProps, staticProps) { if (protoProps) LoadMore_defineProperties(Constructor.prototype, protoProps); if (staticProps) LoadMore_defineProperties(Constructor, staticProps); return Constructor; }

function LoadMore_possibleConstructorReturn(self, call) { if (call && (LoadMore_typeof(call) === "object" || typeof call === "function")) { return call; } return LoadMore_assertThisInitialized(self); }

function LoadMore_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LoadMore_getPrototypeOf(o) { LoadMore_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LoadMore_getPrototypeOf(o); }

function LoadMore_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) LoadMore_setPrototypeOf(subClass, superClass); }

function LoadMore_setPrototypeOf(o, p) { LoadMore_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LoadMore_setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-top: 1px dashed #ddd;\n  .load-more{\n    text-align: center;\n    padding: 10px 0;\n    background-color: #fff;\n    color: #999;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var LoadMoreWrapper = external_styled_components_default.a.div(_templateObject());

var LoadMore_LoadMore =
/*#__PURE__*/
function (_PureComponent) {
  LoadMore_inherits(LoadMore, _PureComponent);

  function LoadMore(props, context) {
    LoadMore_classCallCheck(this, LoadMore);

    return LoadMore_possibleConstructorReturn(this, LoadMore_getPrototypeOf(LoadMore).call(this, props, context));
  }

  LoadMore_createClass(LoadMore, [{
    key: "_loadMoreHandle",
    value: function _loadMoreHandle() {
      // 执行传递过来的loadMoreData
      this.props.loadMoreFn();
    }
  }, {
    key: "render",
    value: function render() {
      var hasMore = this.props.hasMore;
      return external_react_default.a.createElement(LoadMoreWrapper, null, external_react_default.a.createElement("div", {
        className: "load-more",
        ref: "wrapper"
      }, this.props.isLoadingMore && hasMore ? external_react_default.a.createElement("span", {
        className: "loading"
      }, "\u52A0\u8F7D\u4E2D...") : hasMore ? external_react_default.a.createElement("span", {
        onClick: this._loadMoreHandle.bind(this)
      }, "\u52A0\u8F7D\u66F4\u591A") : external_react_default.a.createElement("span", null, "\u6CA1\u6709\u66F4\u591A\u4E86")));
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
}(external_react_["PureComponent"]);

/* harmony default export */ var components_LoadMore = (LoadMore_LoadMore);
// EXTERNAL MODULE: external "antd-mobile/lib/search-bar"
var search_bar_ = __webpack_require__(23);
var search_bar_default = /*#__PURE__*/__webpack_require__.n(search_bar_);

// EXTERNAL MODULE: external "antd-mobile/lib/activity-indicator"
var activity_indicator_ = __webpack_require__(24);
var activity_indicator_default = /*#__PURE__*/__webpack_require__.n(activity_indicator_);

// EXTERNAL MODULE: external "antd-mobile/lib/menu"
var menu_ = __webpack_require__(25);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "antd-mobile/lib/toast"
var toast_ = __webpack_require__(7);
var toast_default = /*#__PURE__*/__webpack_require__.n(toast_);

// EXTERNAL MODULE: external "antd-mobile/lib/list"
var list_ = __webpack_require__(9);
var list_default = /*#__PURE__*/__webpack_require__.n(list_);

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__(6);

// EXTERNAL MODULE: ./config/index.js + 2 modules
var config = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/index.js + 5 modules
var utils = __webpack_require__(1);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(33);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(10);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/styles/no-content.js
var no_content = __webpack_require__(20);

// CONCATENATED MODULE: ./components/SearchBox.js






function SearchBox_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SearchBox_typeof = function _typeof(obj) { return typeof obj; }; } else { SearchBox_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SearchBox_typeof(obj); }

function SearchBox_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchBox_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SearchBox_createClass(Constructor, protoProps, staticProps) { if (protoProps) SearchBox_defineProperties(Constructor.prototype, protoProps); if (staticProps) SearchBox_defineProperties(Constructor, staticProps); return Constructor; }

function SearchBox_possibleConstructorReturn(self, call) { if (call && (SearchBox_typeof(call) === "object" || typeof call === "function")) { return call; } return SearchBox_assertThisInitialized(self); }

function SearchBox_getPrototypeOf(o) { SearchBox_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SearchBox_getPrototypeOf(o); }

function SearchBox_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SearchBox_setPrototypeOf(subClass, superClass); }

function SearchBox_setPrototypeOf(o, p) { SearchBox_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SearchBox_setPrototypeOf(o, p); }

function SearchBox_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SearchBox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = SearchBox_taggedTemplateLiteral(["\n\tposition: fixed;\n\tz-index: 2;\n\ttop: -10px;\n\twidth:100%;\n\n\t.single-foo-menu {\n\t  position: absolute;\n\t  z-index: 90 !important;\n\t  width: 100%;\n\t}\n\n\t.single-menu-active .single-top-nav-bar{\n\t  z-index: 90;\n\t}\n\n\t.single-top-nav-bar {\n\t  position: relative;\n\t  background-color: #008AE6;\n\t  color: #FFF;\n\t}\n\t.am-navbar-title {\n\t  color: #FFF!important;\n\t}\n\t.menu-mask {\n\t  position: absolute;\n\t  top: 0;\n\t  width: 100%;\n\t  height: 100%;\n\t  background-color: #000;\n\t  opacity: 0.4;\n\t  z-index: 89;\n\t}\n\t.single-foo-menu .am-list-item{\n\t  border-bottom: 1px dashed #ece7e7 !important;\n\t}\n\t.am-menu .am-flexbox .am-flexbox-item:only-child .am-list .am-list-item:last-child{\n\t\tpadding-bottom: 120px;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = SearchBox_taggedTemplateLiteral(["\n\t\t.title {\n\t\t\tfont-size: 14px;\n\t\t}\n\t\t.history .am-list-brief,.hot-search .am-list-brief{\n\t\t\tfont-size: 12px;\n\t\t}\n\t\t.history.am-list {\n \t\t  margin-top: 5px;\n \t\t}\n\t .refresh-text {\n\t\t color: #c1b7b3;\n\t\t font-size: 12px;\n\t }\n\t .refresh-icon {\n\t   font-size: 18px;\n\t\t position: relative;\n\t\t top: 5px;\n\t\t color: #d9cfcb;\n\t }\n\t .refresh-icon.huanyipi{\n\t\t transition:all .2s ease-in;\n\t\t transform:rotate(0deg);\n\t\t transform-origin:center center;\n\t }\n\t .hot-tags {\n\t\t padding:2px;\n     display:inline-flex;\n     flex-direction:row;\n     flex-wrap:wrap;\n\t\t justify-content: flex-start;\n\t }\n\t .tag-item {\n     border-radius:5px;\n     padding:4px;\n     border: 1px solid #dddddd;\n     margin-right:2px;\n\t\t font-size: 12px;\n\t\t color: #b4afaf;\n\t }\n\t .history-icon {\n\t\t padding-right: 3px;\n\t }\n\t .close-icon {\n\t\t font-size: 25px;\n\t\t position: relative;\n\t\t left: 3px;\n\t\t top: 5px;\n\t\t color: #ddd;\n\t }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function SearchBox_templateObject() {
  var data = SearchBox_taggedTemplateLiteral(["\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 50px;\n\tbackground-color: #fff;\n\tborder-bottom: 0px solid #f5f5f9;\n\tbackground-color: white;\n\tjustify-content: space-around;\n\talign-items: center;\n\n\t.logo-img{\n\t\theight: 28px;\n    width: 74px;\n\t}\n  > .bar-wrapper {\n    width:60%;\n  }\n  .bar-wrapper > div{\n    margin-right:10px\n  }\n  > .icon-menu {\n    font-size:36px;\n    margin-top:10px;\n\t\tmargin-left: 5px;\n    color:#bdb9b9;\n  }\n\t.search-bar {\n\t\tbackground-color:#fff;\n\t\tborder-radius:5px;\n\t\tmargin-left:10px;\n\t\tmargin-top:10px;\n\t\theight:40px\n\t}\n\t.am-search-input{\n\t\tborder-radius: 20px;\n\t}\n"]);

  SearchBox_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function SearchBox_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var Item = list_default.a.Item;
var Brief = Item.Brief;
var HOT_TAGS = Object(config["g" /* disOrderHotTag */])();
var HeaderWrapper = external_styled_components_default.a.div(SearchBox_templateObject());
var HotSearchWrapper = external_styled_components_default.a.div(_templateObject2());
var SearchWrapper = external_styled_components_default.a.div(_templateObject3());

var SearchBox_SearchBox =
/*#__PURE__*/
function (_Component) {
  SearchBox_inherits(SearchBox, _Component);

  function SearchBox(props) {
    var _this;

    SearchBox_classCallCheck(this, SearchBox);

    _this = SearchBox_possibleConstructorReturn(this, SearchBox_getPrototypeOf(SearchBox).call(this, props));

    SearchBox_defineProperty(SearchBox_assertThisInitialized(SearchBox_assertThisInitialized(_this)), "state", {
      visible: false,
      changeFlag: false,
      historyTag: [],
      searchValue: '',
      hotTags: HOT_TAGS,
      initData: '',
      show: false
    });

    SearchBox_defineProperty(SearchBox_assertThisInitialized(SearchBox_assertThisInitialized(_this)), "onMaskClick", function () {
      _this.setState({
        show: false
      });
    });

    SearchBox_defineProperty(SearchBox_assertThisInitialized(SearchBox_assertThisInitialized(_this)), "popupMenu", function (e) {
      e.preventDefault(); // Fix event propagation on Android

      _this.setState({
        show: !_this.state.show
      }); // mock for async data loading


      if (!_this.state.initData) {
        setTimeout(function () {
          _this.setState({
            initData: config["a" /* CATEGORY_TAGS */]
          });
        }, 500);
      }
    });

    SearchBox_defineProperty(SearchBox_assertThisInitialized(SearchBox_assertThisInitialized(_this)), "onMenuChange", function (value) {
      _this.setState({
        show: false
      });

      var label = '';
      var categoryId = value[0];
      config["a" /* CATEGORY_TAGS */].forEach(function (dataItem) {
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

    _this.handleSubmit = _this.handleSubmit.bind(SearchBox_assertThisInitialized(SearchBox_assertThisInitialized(_this)));
    _this.handleHotTagAndHistory = _this.handleHotTagAndHistory.bind(SearchBox_assertThisInitialized(SearchBox_assertThisInitialized(_this)));
    _this.handleHistory = _this.handleHistory.bind(SearchBox_assertThisInitialized(SearchBox_assertThisInitialized(_this)));
    _this.refreshText = _this.refreshText.bind(SearchBox_assertThisInitialized(SearchBox_assertThisInitialized(_this)));
    return _this;
  }

  SearchBox_createClass(SearchBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var categoryParam = Object(utils["e" /* getUrlParam */])();
      var isSearchPage = this.props.path.indexOf('search') !== -1;
      this.autoFocusInst.focus(); // 从首页点击类目跳转过来 查询类目

      if (isSearchPage && categoryParam.length) {
        var category_name = categoryParam[3];
        var category_id = categoryParam[6].replace(':', '').replace('}', '');
        Object(utils["l" /* saveSearch */])(category_name);
        this.props.onChange({
          goodsCategoryId: category_id
        });
      } //加载历史记录


      isSearchPage && this.setState({
        historyTag: Object(utils["h" /* loadSearch */])()
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
      Object(utils["l" /* saveSearch */])(val);
      this.setState({
        historyTag: Object(utils["h" /* loadSearch */])()
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
        Object(utils["c" /* deleteSearch */])(obj.value);
      } else if (obj.action == 'deleteAll') {
        Object(utils["a" /* clearSearch */])();
      } // 更新状态


      this.setState({
        historyTag: Object(utils["h" /* loadSearch */])()
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
      var tabIndex = config["h" /* tabs */].findIndex(function (v) {
        return v.categoryId == categoryId;
      });
      utils["m" /* storage */].set('__queryCategory__', {
        categoryId: categoryId,
        tabIndex: tabIndex === -1 ? '' : tabIndex
      });
      this.setState({
        searchValue: categoryName,
        visible: false
      }); // 从首页跳转过来参数处理

      if (!isSearchPage) {
        toast_default.a.loading('正在搜索中,请稍等...', 1);
      } else {
        this.handleSubmit(categoryName, {
          action: 'querryCategory',
          categoryId: categoryId
        });
      }

      router_default.a.push({
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
        hotTags: Object(config["g" /* disOrderHotTag */])()
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
      var categoryParam = typeof window !== 'undefined' ? Object(utils["e" /* getUrlParam */])() : '';
      var categoryName = categoryParam.length ? categoryParam[3] : '';
      var isSearchPage = path.indexOf('search') !== -1;
      var isDetailPage = path.indexOf('detail') !== -1;
      var searchKeyword = searchValue || !changeFlag && categoryName || '';
      var menuH = typeof document !== 'undefined' ? document.documentElement.clientHeight : '';
      var menuEl = external_react_default.a.createElement(menu_default.a, {
        className: "single-foo-menu",
        data: initData,
        value: ['1'],
        level: 1,
        onChange: this.onMenuChange,
        height: menuH
      });
      var loadingEl = external_react_default.a.createElement("div", {
        style: {
          position: 'absolute',
          width: '100%',
          height: menuH * 0.6,
          display: 'flex',
          justifyContent: 'center'
        }
      }, external_react_default.a.createElement(activity_indicator_default.a, {
        size: "large"
      }));
      return external_react_default.a.createElement(SearchWrapper, null, external_react_default.a.createElement(HeaderWrapper, null, external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        className: "logo-img",
        src: "https://cdn.yesdat.com/BAAAAAAAAJ8Bb4lSIC1RrF9zn.png",
        alt: "\u597D\u7269"
      })), external_react_default.a.createElement("div", {
        className: "bar-wrapper"
      }, external_react_default.a.createElement("div", {
        onClick: function onClick(e) {
          return !isSearchPage && router_default.a.push('/search');
        }
      }, external_react_default.a.createElement(search_bar_default.a, {
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
            utils["m" /* storage */].set('__queryCategory__', {
              categoryId: '',
              tabIndex: '0'
            });
            router_default.a.push('/');
          }
        },
        ref: function ref(_ref2) {
          return _this2.autoFocusInst = _ref2;
        },
        disabled: isSearchPage ? false : true,
        placeholder: "\u641C\u7D22\u5546\u54C1/\u6807\u7B7E",
        maxLength: 8,
        className: "search-bar"
      }))), external_react_default.a.createElement(io_["IoIosMenu"], {
        className: "icon-menu",
        onClick: this.popupMenu
      })), external_react_default.a.createElement("div", {
        className: show ? 'single-menu-active' : ''
      }, show ? initData ? menuEl : loadingEl : null, show ? external_react_default.a.createElement("div", {
        className: "menu-mask",
        onClick: this.onMaskClick
      }) : null), isSearchPage && !searchKeyword && external_react_default.a.createElement(HotSearchWrapper, null, external_react_default.a.createElement(list_default.a, {
        className: "hot-search"
      }, external_react_default.a.createElement(Item, {
        extra: external_react_default.a.createElement("span", {
          ref: function ref(icon) {
            return _this2.refreshIcon = icon;
          },
          className: "refresh-text",
          onClick: function onClick() {
            return _this2.refreshText(_this2.refreshIcon.children[0]);
          }
        }, "\u6362\u4E00\u6279 ", external_react_default.a.createElement(io_["IoMdSync"], {
          className: "refresh-icon huanyipi"
        }))
      }, external_react_default.a.createElement(Brief, {
        className: "title"
      }, "\u70ED\u95E8\u641C\u7D22")), external_react_default.a.createElement(Item, {
        wrap: true
      }, hotTags.map(function (v) {
        return external_react_default.a.createElement("div", {
          className: "hot-tags",
          key: v,
          onClick: function onClick() {
            return _this2.handleHotTagAndHistory(v);
          }
        }, external_react_default.a.createElement("span", {
          className: "tag-item"
        }, v));
      }))), historyTag && historyTag.length > 0 && external_react_default.a.createElement(list_default.a, {
        className: "history"
      }, external_react_default.a.createElement(Item, {
        extra: external_react_default.a.createElement(io_["IoIosTrash"], {
          className: "refresh-icon",
          onClick: function onClick() {
            return _this2.handleHistory({
              action: 'deleteAll'
            });
          }
        })
      }, external_react_default.a.createElement(Brief, {
        className: "title"
      }, "\u5386\u53F2\u641C\u7D22")), historyTag.map(function (v) {
        return external_react_default.a.createElement(Item, {
          wrap: true,
          extra: external_react_default.a.createElement(io_["IoIosClose"], {
            className: "close-icon",
            onClick: function onClick() {
              return _this2.handleHistory({
                action: 'deleteItem',
                value: v
              });
            }
          }),
          key: v
        }, external_react_default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.handleHotTagAndHistory(v);
          }
        }, external_react_default.a.createElement(Brief, null, external_react_default.a.createElement(io_["IoMdTime"], {
          className: "history-icon"
        }), v)));
      }))), searchKeyword && hasnoGoods && !isLoading && external_react_default.a.createElement(no_content["a" /* Nocontent */], null, external_react_default.a.createElement("div", {
        className: "no-data-wrapper"
      }, external_react_default.a.createElement("img", {
        src: "https://cdn.yesdat.com/BAAAAAAAAAABb4kHVDwt3MTGu.png",
        className: "img"
      }), external_react_default.a.createElement("span", {
        className: "no-data__text"
      }, "\u8FD9\u91CC\u4EC0\u4E48\u90FD\u6CA1\u6709\uFF0C\u53BB\u770B\u770B\u522B\u7684"))), !isSearchPage && external_react_default.a.createElement(GoodsTab_GoodsTab, this.props));
    }
  }]);

  return SearchBox;
}(external_react_["Component"]);

/* harmony default export */ var components_SearchBox = (SearchBox_SearchBox);
// EXTERNAL MODULE: external "antd-mobile/lib/modal"
var modal_ = __webpack_require__(16);
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd-mobile/lib/badge"
var badge_ = __webpack_require__(11);
var badge_default = /*#__PURE__*/__webpack_require__.n(badge_);

// EXTERNAL MODULE: external "antd-mobile/lib/flex"
var flex_ = __webpack_require__(5);
var flex_default = /*#__PURE__*/__webpack_require__.n(flex_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(3);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(17);

// CONCATENATED MODULE: ./components/GoodsList.js






function GoodsList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GoodsList_typeof = function _typeof(obj) { return typeof obj; }; } else { GoodsList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GoodsList_typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { GoodsList_defineProperty(target, key, source[key]); }); } return target; }

function GoodsList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GoodsList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GoodsList_createClass(Constructor, protoProps, staticProps) { if (protoProps) GoodsList_defineProperties(Constructor.prototype, protoProps); if (staticProps) GoodsList_defineProperties(Constructor, staticProps); return Constructor; }

function GoodsList_possibleConstructorReturn(self, call) { if (call && (GoodsList_typeof(call) === "object" || typeof call === "function")) { return call; } return GoodsList_assertThisInitialized(self); }

function GoodsList_getPrototypeOf(o) { GoodsList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GoodsList_getPrototypeOf(o); }

function GoodsList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GoodsList_setPrototypeOf(subClass, superClass); }

function GoodsList_setPrototypeOf(o, p) { GoodsList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GoodsList_setPrototypeOf(o, p); }

function GoodsList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GoodsList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject7() {
  var data = GoodsList_taggedTemplateLiteral(["\n  .showgototop {\n    position: fixed;\n    width: 35px;\n    height: 35px;\n    right: 4px;\n    bottom: 64px;\n    animation-name: showgototop;\n    animation-duration: 800ms;\n    animation-fill-mode: forwards;\n    animation-timing-function: ease-in;\n  }\n  @keyframes showgototop {\n     from {\n         transform: translateY(200px);\n     }\n     to {\n         transform: translateY(0px);\n     }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = GoodsList_taggedTemplateLiteral(["\n\tpadding: 30px 0;\n\t.am-list:first-child {\n\t\tpadding-top: 0;\n  }\n\t.goods-name {\n\t\ttext-align: left;\n\t\tfont-size: 14px;\n\t\tword-break: break-all;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-box-orient: vertical;\n\t\t-webkit-line-clamp: 2;\n\t\toverflow: hidden;\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = GoodsList_taggedTemplateLiteral(["\n\t.am-list-item.am-list-item-middle .am-list-content{\n\t\tfont-size: 12px !important;\n\t\tcolor: #ec576c;\n\t\tpadding: 0;\n\t\tpadding-bottom: 8px;\n\t\tpadding-top: 2px;\n\t}\n\t.am-list-line::after {\n\t\t@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx){\n\t\t\theight: 0px !important;\n\t\t}\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = GoodsList_taggedTemplateLiteral(["\n\t.goods-name {\n\t\ttext-align: left;\n\t\tfont-size: 14px;\n\t\tword-break: break-all;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-box-orient: vertical;\n\t\t-webkit-line-clamp: 2;\n\t\toverflow: hidden;\n\t}\n\t.am-list-body::after {\n\t\t\t@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx){\n\t\t\t\tbackground-color: #fff !important;\n\t\t\t}\n\t}\n\t.am-flexbox-item {\n\t\tfont-size: 12px;\n\t\tcolor: #bcb7b7;\n\t\tmargin-left: 0px;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t}\n\t.am-list-footer {\n\t\tline-height: 20px;\n\t\tpadding-bottom: 6px;\n\t\tpadding-top: 0;\n\t}\n\t.am-list-item.am-list-item-middle{\n\t\tmin-height: 20px;\n\t\tmargin-top: -2px;\n\t}\n\t.price-color {\n\t\tcolor:#f60016\n\t}\n\t.goods-time {\n\t\ttext-align: right;\n\t\tpadding-right: 5px;\n\t}\n\t.timeWrapper {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tflex-direction: row;\n\t}\n\t.timeWrapper .skip-link {\n\t\tcolor: #fafdfb;\n    background: rgb(226,11,40);\n    border-radius: 20px;\n    font-size: 12px;\n    padding: 5px;\n    position: absolute;\n    right: 11px;\n    padding-right: 12px;\n    padding-left: 12px;\n    bottom: 0;\n    font-size: 14px;\n\n\t\t@media screen  and (max-width: 320px) {\n\t\t\tright: 2px;\n\t\t\tpadding:5px;\n\t\t\tborder-radius: 10px;\n\t\t\tfont-size: 12px;\n\t\t}\n\t}\n  .corner-badge {\n\t  height: 50px;\n\t  width: 200px;\n\t}\n\t.special-badge .am-list-line {\n\t  padding-right: 0;\n\t}\n\t.special-badge .am-list-line .am-list-extra {\n\t  padding: 0;\n\t  height: 44px;\n\t}\n\t.special-badge .am-badge {\n\t  transform: rotate(-41deg);\n\t\ttransform-origin: left bottom;\n\t\tleft: -2px;\n\t\ttop: 11px;\n\t\twidth: 50px;\n\t}\n\t.special-badge .am-badge-text {\n\t  border-radius: 1px;\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function GoodsList_templateObject3() {
  var data = GoodsList_taggedTemplateLiteral(["\n\tborder-radius: 20px;\n\tbackground: rgb(226,11,40);\n\tpadding: 0px 12px;\n\tmargin-right: 2px;\n\ttext-align: center;\n\theight: 30px;\n\tline-height: 30px;\n\tmargin-left: 30px;\n"]);

  GoodsList_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function GoodsList_templateObject2() {
  var data = GoodsList_taggedTemplateLiteral(["\n  border-radius: 20px 0 0 20px;\n  background: rgb(234,69,91);\n  padding: 0 18px;\n  text-align: center;\n  height: 37px;\n  line-height: 37px;\n"]);

  GoodsList_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function GoodsList_templateObject() {
  var data = GoodsList_taggedTemplateLiteral(["\n\tdisplay: inline-block;\n\tfont-size:12px;\n\tmargin-right:6px;\n\tposition:relative;\n\ttop:2px;\n"]);

  GoodsList_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function GoodsList_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var GoodsList_Item = list_default.a.Item;
var GoodsList_Brief = GoodsList_Item.Brief;
var IconWrapper = external_styled_components_default.a.div(GoodsList_templateObject());
var WrapperLink = external_styled_components_default.a.div(GoodsList_templateObject2());
var WrapperSkipLink = external_styled_components_default.a.div(GoodsList_templateObject3());
var GoodsWrapper = external_styled_components_default.a.div(_templateObject4());
var IsTopWrapper = external_styled_components_default.a.div(_templateObject5());
var ModalListWrapper = external_styled_components_default.a.div(_templateObject6());
var BackTop = external_styled_components_default.a.div(_templateObject7());

var GoodsList_GoodsList =
/*#__PURE__*/
function (_Component) {
  GoodsList_inherits(GoodsList, _Component);

  function GoodsList(props) {
    var _this;

    GoodsList_classCallCheck(this, GoodsList);

    _this = GoodsList_possibleConstructorReturn(this, GoodsList_getPrototypeOf(GoodsList).call(this, props));

    GoodsList_defineProperty(GoodsList_assertThisInitialized(GoodsList_assertThisInitialized(_this)), "state", {
      modal: false,
      showBackTop: false,
      like: false,
      isCloseModal: false,
      goodsItem: {},
      goodsData: []
    });

    GoodsList_defineProperty(GoodsList_assertThisInitialized(GoodsList_assertThisInitialized(_this)), "onClose", function (key) {
      return function () {
        var _this$setState;

        _this.setState((_this$setState = {}, GoodsList_defineProperty(_this$setState, key, false), GoodsList_defineProperty(_this$setState, "isCloseModal", true), _this$setState));
      };
    });

    _this.showPopup = _this.showPopup.bind(GoodsList_assertThisInitialized(GoodsList_assertThisInitialized(_this)));
    _this.showModal = _this.showModal.bind(GoodsList_assertThisInitialized(GoodsList_assertThisInitialized(_this)));
    _this.handeTongKuan = _this.handeTongKuan.bind(GoodsList_assertThisInitialized(GoodsList_assertThisInitialized(_this)));
    _this.handleQuan = _this.handleQuan.bind(GoodsList_assertThisInitialized(GoodsList_assertThisInitialized(_this)));
    _this.handleGoodsUrl = _this.handleGoodsUrl.bind(GoodsList_assertThisInitialized(GoodsList_assertThisInitialized(_this)));
    _this.hanldeLike = _this.hanldeLike.bind(GoodsList_assertThisInitialized(GoodsList_assertThisInitialized(_this)));
    _this.handleOverReport = _this.handleOverReport.bind(GoodsList_assertThisInitialized(GoodsList_assertThisInitialized(_this)));
    _this.backTop = _this.backTop.bind(GoodsList_assertThisInitialized(GoodsList_assertThisInitialized(_this)));
    return _this;
  }

  GoodsList_createClass(GoodsList, [{
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
        dataType: config["b" /* DataReportType */].DataReportType_ORDER
      }); // 延迟等待数据上报

      setTimeout(function () {
        // deep_link与h5链接跳转区分
        if (deepLink) {
          toast_default.a.loading('正在跳转中...', 0);

          Object(utils["f" /* hasInstalledApp */])(deepLink).then(function (hasInstall) {
            toast_default.a.hide();

            if (!hasInstall) {
              //未安装 直接跳H5
              // window.location.href = goodsUrl
              Object(utils["b" /* createA */])(goodsUrl);
            }
          });
        } else {
          Object(utils["b" /* createA */])(goodsUrl); // window.location.href = goodsUrl
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
        dataType: config["b" /* DataReportType */].DataReportType_ORDER_SIMILAR
      }); // 延迟等待数据上报

      setTimeout(function () {
        if (deepLink) {
          toast_default.a.loading('正在跳转中...', 0);

          Object(utils["f" /* hasInstalledApp */])(deepLink).then(function (hasInstall) {
            toast_default.a.hide();

            if (!hasInstall) {
              //未安装 直接跳H5
              Object(utils["b" /* createA */])(tongKuanUrl); // window.location.href = tongKuanUrl
            }
          });
        } else {
          Object(utils["b" /* createA */])(tongKuanUrl); // window.location.href = tongKuanUrl
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
        dataType: config["b" /* DataReportType */].DataReportType_COUPON
      }); // 延迟等待数据上报

      setTimeout(function () {
        Object(utils["b" /* createA */])(link); // window.location.href = link
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

      if (Object(utils["g" /* isOverReportOrLike */])({
        goodsId: goodsId,
        action: 'like'
      })) {
        return toast_default.a.success('您已喜欢过~', 1);
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

      utils["m" /* storage */].set('__curr_like_time__', Date.now()); // 记录当前点赞时间

      this.props.dataReport({
        goodsId: goodsId,
        dataType: config["b" /* DataReportType */].DataReportType_LIKE
      });
    }
  }, {
    key: "handleOverReport",
    value: function handleOverReport(data) {
      var goodsId = data.goodsId;

      if (Object(utils["g" /* isOverReportOrLike */])({
        goodsId: goodsId,
        action: 'report'
      })) {
        return toast_default.a.success('您已举报过~', 1);
      }

      this.props.dataReport({
        goodsId: goodsId,
        dataType: config["b" /* DataReportType */].DataReportType_REPORT
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
      var updateCacheTime = external_moment_default()(Date.now()).diff(external_moment_default()(utils["m" /* storage */].get('__curr_like_time__')), 'minute'); //上次点赞时间和当前时间差值 >=10分钟 更新服务器cache的likeCount

      var isDetail = pathname && pathname.indexOf('detail') !== -1;
      var isSearch = pathname && pathname.indexOf('search') !== -1;
      var cacheGoodsList = utils["m" /* storage */].get(config["c" /* GOODS_DATA */], []);
      var goodsCache = utils["m" /* storage */].get(config["c" /* GOODS_DATA */], []);
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
      return external_react_default.a.createElement(GoodsWrapper, null, list && list.length > 0 && list.map(function (v) {
        return external_react_default.a.createElement(list_default.a, {
          key: "".concat(v.goodsId, "_").concat(Math.random()),
          renderHeader: function renderHeader() {
            return '';
          },
          renderFooter: function renderFooter() {
            return external_react_default.a.createElement("div", null, !isDetail ? external_react_default.a.createElement(flex_default.a, null, external_react_default.a.createElement(flex_default.a.Item, null, external_react_default.a.createElement(IconWrapper, null, external_react_default.a.createElement(io_["IoIosEye"], null)), v.impressionCount), external_react_default.a.createElement(flex_default.a.Item, {
              onClick: function onClick(e) {
                return _this2.hanldeLike(v);
              }
            }, external_react_default.a.createElement(IconWrapper, null, external_react_default.a.createElement(io_["IoIosHeart"], {
              style: {
                color: v.like ? '#d46070' : ''
              }
            })), v.likeCount), external_react_default.a.createElement(flex_default.a.Item, {
              onClick: function onClick(e) {
                return _this2.handleOverReport(v);
              }
            }, external_react_default.a.createElement(IconWrapper, null, external_react_default.a.createElement(io_["IoIosWarning"], null)), "\u4E3E\u62A5"), external_react_default.a.createElement(flex_default.a.Item, {
              className: "goods-time"
            }, v.inStockTime), external_react_default.a.createElement(flex_default.a.Item, null, v.source)) : null);
          }
        }, !isDetail && v.isTop ? external_react_default.a.createElement(IsTopWrapper, null, external_react_default.a.createElement(GoodsList_Item, {
          className: "special-badge"
        }, external_react_default.a.createElement(badge_default.a, {
          text: '顶'
        }))) : !isDetail ? external_react_default.a.createElement(IsTopWrapper, null, external_react_default.a.createElement(GoodsList_Item, {
          className: "special-badge"
        }, external_react_default.a.createElement(badge_default.a, {
          text: "\u7CBE\u9009",
          style: {
            padding: '0 3px',
            backgroundColor: '#fff',
            borderRadius: 2,
            color: 'rgb(246, 0, 22)',
            border: '1px solid rgb(246, 0, 22)'
          }
        }))) : null, external_react_default.a.createElement(GoodsList_Item, {
          arrow: "horizontal",
          thumb: v.goodsImageStruct && v.goodsImageStruct.postImage,
          multipleLine: true,
          activeStyle: {
            background: '#fff'
          },
          onClick: function onClick() {
            utils["m" /* storage */].set('__DetailGoodsName__', v.goodsName);
            utils["m" /* storage */].set('__goodsCategoryId__', v.goodsCategoryId);
            var tabIndex = location.search ? location.search.split('tabIndex=').pop() : '0';

            toast_default.a.loading('加载数据跳转中,请稍后...', 1);

            router_default.a.push("/detail/".concat(v.goodsId, "?categoryId=").concat(v.goodsCategoryId, "&tabIndex=").concat(tabIndex));
          }
        }, external_react_default.a.createElement("div", {
          className: "goods-name"
        }, v.goodsName), external_react_default.a.createElement(GoodsList_Brief, null, external_react_default.a.createElement("span", {
          className: "price-color",
          style: {
            color: v.priceByCoupon ? 'rgb(179, 175, 175)' : ''
          }
        }, "\u73B0\u4EF7 ", external_react_default.a.createElement("span", {
          style: {
            textDecoration: v.priceByCoupon ? 'line-through' : '',
            fontSize: 15,
            fontWeight: 500
          }
        }, v.price))), v.priceByCoupon && external_react_default.a.createElement(GoodsList_Brief, null, external_react_default.a.createElement("span", {
          className: "price-color",
          style: {
            fontSize: 14
          }
        }, "\u5238\u540E\u4EF7 ", external_react_default.a.createElement("i", {
          style: {
            fontSize: 12,
            fontStyle: 'normal'
          }
        }, "\uFFE5"), external_react_default.a.createElement("span", {
          style: {
            fontSize: 16,
            fontWeight: 700
          }
        }, v.priceByCoupon.replace('￥', '')))), v.sameGoodsStruct && v.sameGoodsStruct.sameGoods.map(function (vv) {
          return external_react_default.a.createElement(GoodsList_Brief, {
            key: "".concat(vv.source, "_").concat(Math.random())
          }, " ", vv.source, " ", vv.price);
        }), external_react_default.a.createElement("div", {
          className: "timeWrapper",
          onClick: function onClick(e) {
            return !isDetail && !isSearch && _this2.showModal(e, v);
          }
        }, external_react_default.a.createElement(GoodsList_Brief, null, "\u6709\u6548\u671F ", v.beginDate, "~", v.endDate), !isDetail && !isSearch && external_react_default.a.createElement("span", {
          className: "skip-link"
        }, "\u76F4\u8FBE\u94FE\u63A5"))));
      }), isDetail && external_react_default.a.createElement(list_default.a, {
        key: "footer",
        style: {
          paddingTop: 45
        },
        renderFooter: function renderFooter() {
          return external_react_default.a.createElement(flex_default.a, {
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
          }, external_react_default.a.createElement(flex_default.a.Item, {
            style: {
              paddingLeft: 10
            }
          }, external_react_default.a.createElement(IconWrapper, null, external_react_default.a.createElement(io_["IoIosEye"], null)), showPopupData.impressionCount || 0), external_react_default.a.createElement(flex_default.a.Item, {
            onClick: function onClick() {
              return _this2.hanldeLike(showPopupData, {
                page: 'detail'
              });
            }
          }, external_react_default.a.createElement(IconWrapper, null, external_react_default.a.createElement(io_["IoIosHeart"], {
            style: {
              color: showPopupData.like ? '#d46070' : ''
            }
          })), showPopupData.likeCount), external_react_default.a.createElement(flex_default.a.Item, {
            "data-clipboard-text": typeof window !== 'undefined' ? location.href : '',
            className: "copyBtn",
            onClick: function onClick() {
              return showShareActionSheet();
            }
          }, external_react_default.a.createElement(IconWrapper, null, external_react_default.a.createElement(io_["IoMdShare"], null)), "\u5206\u4EAB"), external_react_default.a.createElement(flex_default.a.Item, {
            onClick: function onClick() {
              return _this2.handleOverReport(showPopupData);
            }
          }, external_react_default.a.createElement(IconWrapper, null, external_react_default.a.createElement(io_["IoIosWarning"], null)), "\u4E3E\u62A5"), external_react_default.a.createElement(WrapperLink, null, external_react_default.a.createElement(flex_default.a.Item, {
            onClick: function onClick() {
              return _this2.showPopup(true);
            },
            style: {
              color: '#fff',
              fontSize: 16
            }
          }, "\u76F4\u8FBE\u94FE\u63A5")));
        }
      }), external_react_default.a.createElement(modal_default.a, GoodsList_defineProperty({
        popup: true,
        animationType: "slide-down",
        visible: this.state.modal,
        onClose: this.onClose('modal')
      }, "animationType", "slide-up"), external_react_default.a.createElement(ModalListWrapper, null, external_react_default.a.createElement(list_default.a, {
        style: {
          marginTop: -30
        }
      }, external_react_default.a.createElement(list_default.a.Item, {
        onClick: function onClick() {
          return _this2.handleGoodsUrl(showPopupData);
        },
        key: "goods"
      }, external_react_default.a.createElement(flex_default.a, null, external_react_default.a.createElement(flex_default.a.Item, null, external_react_default.a.createElement("div", {
        className: "goods-name"
      }, showPopupData.goodsName)), external_react_default.a.createElement(WrapperSkipLink, null, external_react_default.a.createElement(flex_default.a.Item, {
        style: {
          color: '#fff'
        }
      }, "\u76F4\u8FBE\u94FE\u63A5")))), showPopupData.couponName && external_react_default.a.createElement(list_default.a.Item, {
        onClick: function onClick() {
          return _this2.handleQuan(showPopupData);
        },
        key: "quan"
      }, external_react_default.a.createElement(flex_default.a, null, external_react_default.a.createElement(flex_default.a.Item, {
        className: "goods-name"
      }, showPopupData.couponName), external_react_default.a.createElement(WrapperSkipLink, null, external_react_default.a.createElement(flex_default.a.Item, {
        style: {
          color: '#fff'
        }
      }, "\u76F4\u8FBE\u94FE\u63A5")))), showPopupData.sameGoodsStruct && showPopupData.sameGoodsStruct.sameGoods && showPopupData.sameGoodsStruct.sameGoods.map(function (vvv) {
        return external_react_default.a.createElement(list_default.a.Item, {
          onClick: function onClick() {
            return _this2.handeTongKuan(vvv);
          },
          key: "".concat(vvv, "_").concat(Math.random())
        }, external_react_default.a.createElement(flex_default.a, null, external_react_default.a.createElement(flex_default.a.Item, {
          className: "goods-name"
        }, vvv.source), external_react_default.a.createElement(WrapperSkipLink, null, external_react_default.a.createElement(flex_default.a.Item, {
          style: {
            color: '#fff'
          }
        }, "\u76F4\u8FBE\u94FE\u63A5"))));
      })))), this.state.showBackTop && external_react_default.a.createElement(BackTop, null, external_react_default.a.createElement("img", {
        className: "showgototop",
        onClick: function onClick() {
          return _this2.backTop();
        },
        src: "https://cdn.yesdat.com/BAAAAAAAAArBb7iWwCMt56vbc.png"
      })));
    }
  }]);

  return GoodsList;
}(external_react_["Component"]);

/* harmony default export */ var components_GoodsList = (GoodsList_GoodsList);
// EXTERNAL MODULE: external "antd-mobile/lib/icon"
var icon_ = __webpack_require__(21);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// CONCATENATED MODULE: ./components/ErrorFetch.js


function ErrorFetch_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ErrorFetch_typeof = function _typeof(obj) { return typeof obj; }; } else { ErrorFetch_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ErrorFetch_typeof(obj); }

function ErrorFetch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ErrorFetch_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ErrorFetch_createClass(Constructor, protoProps, staticProps) { if (protoProps) ErrorFetch_defineProperties(Constructor.prototype, protoProps); if (staticProps) ErrorFetch_defineProperties(Constructor, staticProps); return Constructor; }

function ErrorFetch_possibleConstructorReturn(self, call) { if (call && (ErrorFetch_typeof(call) === "object" || typeof call === "function")) { return call; } return ErrorFetch_assertThisInitialized(self); }

function ErrorFetch_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ErrorFetch_getPrototypeOf(o) { ErrorFetch_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ErrorFetch_getPrototypeOf(o); }

function ErrorFetch_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ErrorFetch_setPrototypeOf(subClass, superClass); }

function ErrorFetch_setPrototypeOf(o, p) { ErrorFetch_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ErrorFetch_setPrototypeOf(o, p); }



var ErrorFetch_default =
/*#__PURE__*/
function (_React$Component) {
  ErrorFetch_inherits(_default, _React$Component);

  function _default() {
    ErrorFetch_classCallCheck(this, _default);

    return ErrorFetch_possibleConstructorReturn(this, ErrorFetch_getPrototypeOf(_default).apply(this, arguments));
  }

  ErrorFetch_createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.info(this.props.err);
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "flex column ai-center jc-center plr25 ptb20 h-full"
      }, external_react_default.a.createElement(icon_default.a, {
        type: "cross-circle-o",
        className: "w100 h100",
        style: {
          fill: '#F13642'
        }
      }), external_react_default.a.createElement("div", {
        className: "font32 c333 ptb20"
      }, "\u65E0\u6CD5\u663E\u793A\u9875\u9762"), external_react_default.a.createElement("div", {
        className: "font28 c999"
      }, "\u62B1\u6B49\uFF0C\u670D\u52A1\u5668\u83B7\u53D6\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"));
    }
  }]);

  return _default;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "antd-mobile/lib/tabs"
var tabs_ = __webpack_require__(26);
var tabs_default = /*#__PURE__*/__webpack_require__.n(tabs_);

// CONCATENATED MODULE: ./components/GoodsTab.js




function GoodsTab_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GoodsTab_typeof = function _typeof(obj) { return typeof obj; }; } else { GoodsTab_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GoodsTab_typeof(obj); }

function GoodsTab_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { GoodsTab_defineProperty(target, key, source[key]); }); } return target; }

function GoodsTab_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GoodsTab_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GoodsTab_createClass(Constructor, protoProps, staticProps) { if (protoProps) GoodsTab_defineProperties(Constructor.prototype, protoProps); if (staticProps) GoodsTab_defineProperties(Constructor, staticProps); return Constructor; }

function GoodsTab_possibleConstructorReturn(self, call) { if (call && (GoodsTab_typeof(call) === "object" || typeof call === "function")) { return call; } return GoodsTab_assertThisInitialized(self); }

function GoodsTab_getPrototypeOf(o) { GoodsTab_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GoodsTab_getPrototypeOf(o); }

function GoodsTab_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GoodsTab_setPrototypeOf(subClass, superClass); }

function GoodsTab_setPrototypeOf(o, p) { GoodsTab_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GoodsTab_setPrototypeOf(o, p); }

function GoodsTab_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GoodsTab_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var GoodsTab_GoodsTab =
/*#__PURE__*/
function (_PureComponent) {
  GoodsTab_inherits(GoodsTab, _PureComponent);

  function GoodsTab(props) {
    var _this;

    GoodsTab_classCallCheck(this, GoodsTab);

    _this = GoodsTab_possibleConstructorReturn(this, GoodsTab_getPrototypeOf(GoodsTab).call(this, props));

    GoodsTab_defineProperty(GoodsTab_assertThisInitialized(GoodsTab_assertThisInitialized(_this)), "state", {});

    return _this;
  }

  GoodsTab_createClass(GoodsTab, [{
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
      var queryCategory = utils["m" /* storage */].get('__queryCategory__');
      var clientTabIdx = queryCategory && queryCategory.tabIndex || 0;
      var currTab = tabIndex == clientTabIdx ? tabIndex : clientTabIdx; //客户端和服务端对比

      var findIdx = config["h" /* tabs */].findIndex(function (v) {
        return v.categoryId == categoryId;
      });
      var tabIdx = findIdx !== -1 ? findIdx : 0;
      var initialTab = isDetail ? tabIdx : currTab; // 详情页和首页对比

      return external_react_default.a.createElement(tabs_default.a, {
        tabs: config["h" /* tabs */].map(function (v) {
          if (v.categoryId == '18') {
            v.title = external_react_default.a.createElement(badge_default.a, {
              text: "\u70ED"
            }, "\u7206\u6B3E\u699C\u5355");
          }

          return GoodsTab_objectSpread({}, v);
        }),
        tabBarActiveTextColor: "#f00",
        tabBarUnderlineStyle: {
          border: '1px #f60016 solid'
        },
        initialPage: initialTab,
        onTabClick: function onTabClick(tab, index) {
          utils["m" /* storage */].set('__queryCategory__', {
            categoryId: tab.categoryId,
            tabIndex: index
          });
          utils["m" /* storage */].set('fromDetailTriggle', isDetail ? true : false);

          toast_default.a.loading('加载中,请稍后...', 1.5);

          onTabChange && onTabChange(tab);

          if (!tab.categoryId) {
            fetchTopGoods();
          } else {
            fetchGoods({
              goodsCategoryId: tab.categoryId
            });
          }

          router_default.a.push("/?categoryId=".concat(tab.categoryId, "&tabIndex=").concat(index));
        }
      });
    }
  }]);

  return GoodsTab;
}(external_react_["PureComponent"]);


// EXTERNAL MODULE: external "antd-mobile/lib/carousel"
var carousel_ = __webpack_require__(27);
var carousel_default = /*#__PURE__*/__webpack_require__.n(carousel_);

// CONCATENATED MODULE: ./components/Banners.js


function Banners_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Banners_typeof = function _typeof(obj) { return typeof obj; }; } else { Banners_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Banners_typeof(obj); }

function Banners_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Banners_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Banners_createClass(Constructor, protoProps, staticProps) { if (protoProps) Banners_defineProperties(Constructor.prototype, protoProps); if (staticProps) Banners_defineProperties(Constructor, staticProps); return Constructor; }

function Banners_possibleConstructorReturn(self, call) { if (call && (Banners_typeof(call) === "object" || typeof call === "function")) { return call; } return Banners_assertThisInitialized(self); }

function Banners_getPrototypeOf(o) { Banners_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Banners_getPrototypeOf(o); }

function Banners_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Banners_setPrototypeOf(subClass, superClass); }

function Banners_setPrototypeOf(o, p) { Banners_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Banners_setPrototypeOf(o, p); }

function Banners_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Banners_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Banners_templateObject() {
  var data = Banners_taggedTemplateLiteral(["\n  .img-background {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: #fbfafa0a;\n    color:#e4dada;\n  }\n  .img-icon{\n    font-size:50px;\n  }\n"]);

  Banners_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Banners_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var BannerWrapper = external_styled_components_default.a.div(Banners_templateObject());

var Banners_Banners =
/*#__PURE__*/
function (_PureComponent) {
  Banners_inherits(Banners, _PureComponent);

  function Banners(props) {
    var _this;

    Banners_classCallCheck(this, Banners);

    _this = Banners_possibleConstructorReturn(this, Banners_getPrototypeOf(Banners).call(this, props));

    Banners_defineProperty(Banners_assertThisInitialized(Banners_assertThisInitialized(_this)), "state", {});

    return _this;
  }

  Banners_createClass(Banners, [{
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
      return external_react_default.a.createElement(BannerWrapper, null, data && data.length ? [external_react_default.a.createElement(carousel_default.a, {
        key: "carousels",
        autoplay: true,
        autoplayInterval: 2000,
        swipeSpeed: 12,
        infinite: true
      }, data.map(function (v) {
        return external_react_default.a.createElement("div", {
          onClick: function onClick() {
            utils["m" /* storage */].set('__DetailGoodsName__', v.goodsName);
            utils["m" /* storage */].set('__goodsCategoryId__', v.goodsCategoryId);
            !isDetail && router_default.a.push("/detail/".concat(v.goodsId));
          },
          key: "".concat(v, "_").concat(Math.random()),
          style: {
            display: 'inline-block',
            width: '100%',
            height: height
          }
        }, external_react_default.a.createElement("img", {
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
      })), external_react_default.a.createElement("div", {
        className: "img-background",
        key: "imgpic",
        ref: "imgLoading",
        style: {
          height: height
        }
      }, external_react_default.a.createElement(md_["MdPhoto"], {
        className: "img-icon"
      }), external_react_default.a.createElement("span", null, "\u52A0\u8F7D\u4E2D..."))] : null);
    }
  }]);

  return Banners;
}(external_react_["PureComponent"]);


// CONCATENATED MODULE: ./components/Skeleton.js
function Skeleton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Skeleton_typeof = function _typeof(obj) { return typeof obj; }; } else { Skeleton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Skeleton_typeof(obj); }

function Skeleton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Skeleton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Skeleton_createClass(Constructor, protoProps, staticProps) { if (protoProps) Skeleton_defineProperties(Constructor.prototype, protoProps); if (staticProps) Skeleton_defineProperties(Constructor, staticProps); return Constructor; }

function Skeleton_possibleConstructorReturn(self, call) { if (call && (Skeleton_typeof(call) === "object" || typeof call === "function")) { return call; } return Skeleton_assertThisInitialized(self); }

function Skeleton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Skeleton_getPrototypeOf(o) { Skeleton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Skeleton_getPrototypeOf(o); }

function Skeleton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Skeleton_setPrototypeOf(subClass, superClass); }

function Skeleton_setPrototypeOf(o, p) { Skeleton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Skeleton_setPrototypeOf(o, p); }

function Skeleton_templateObject() {
  var data = Skeleton_taggedTemplateLiteral(["\n    .skeleton {\n      display: flex;\n      padding: 10px;\n      width: 380px;\n    }\n\n    .skeleton .skeleton-head,\n    .skeleton .skeleton-title,\n    .skeleton .skeleton-content {\n        background: rgba(220, 228, 232, 0.41);\n    }\n    .skeleton .skeleton-head{\n      padding:20px;\n      margin-right:10px;\n    }\n\n    .skeleton-body {\n        width: 100%;\n    }\n\n    .skeleton-title {\n        width: 100%;\n        height: 15px;\n        transform-origin: left;\n        animation: skeleton-stretch .5s linear infinite alternate;\n        border-radius: 5px;\n    }\n\n    .skeleton-content {\n        width: 100%;\n        height: 15px;\n        margin-top: 10px;\n        transform-origin: left;\n        animation: skeleton-stretch .5s -.3s linear infinite alternate;\n        border-radius: 5px;\n    }\n\n    @keyframes skeleton-stretch {\n        from {\n            transform: scalex(1);\n        }\n        to {\n            transform: scalex(.3);\n        }\n    }\n\n"]);

  Skeleton_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Skeleton_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Wrapper = external_styled_components_default.a.div(Skeleton_templateObject());

var Skeleton_Skeleton =
/*#__PURE__*/
function (_PureComponent) {
  Skeleton_inherits(Skeleton, _PureComponent);

  function Skeleton(props, context) {
    Skeleton_classCallCheck(this, Skeleton);

    return Skeleton_possibleConstructorReturn(this, Skeleton_getPrototypeOf(Skeleton).call(this, props, context));
  }

  Skeleton_createClass(Skeleton, [{
    key: "render",
    value: function render() {
      var count = this.props.count;
      var arr = [];

      if (count) {
        for (var i = 0; i < count; i++) {
          arr.push({});
        }
      }

      return external_react_default.a.createElement(Wrapper, null, arr.map(function (v) {
        return external_react_default.a.createElement("div", {
          className: "skeleton",
          key: Math.random()
        }, external_react_default.a.createElement("div", {
          className: "skeleton-head"
        }), external_react_default.a.createElement("div", {
          className: "skeleton-body"
        }, external_react_default.a.createElement("div", {
          className: "skeleton-title"
        }), external_react_default.a.createElement("div", {
          className: "skeleton-content"
        })));
      }));
    }
  }]);

  return Skeleton;
}(external_react_["PureComponent"]);


// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(19);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/Loader.js



var Loader_Loader = function Loader() {
  return external_react_default.a.createElement("div", {
    className: "jsx-3198062752" + " " + 'loader'
  }, external_react_default.a.createElement(style_default.a, {
    styleId: "3198062752",
    css: [".loader.jsx-3198062752{border:8px solid #f3f3f3;border-top:8px solid #3498db;border-radius:50%;width:40px;height:40px;-webkit-animation:spin-jsx-3198062752 2s linear infinite;animation:spin-jsx-3198062752 2s linear infinite;margin-left:auto;margin-right:auto;margin-top:40px;}", "@-webkit-keyframes spin-jsx-3198062752{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes spin-jsx-3198062752{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]
  }));
};

/* harmony default export */ var components_Loader = (Loader_Loader);
// CONCATENATED MODULE: ./components/index.js
/* concated harmony reexport WrapLink */__webpack_require__.d(__webpack_exports__, "h", function() { return WrapLink_default; });
/* concated harmony reexport LoadMore */__webpack_require__.d(__webpack_exports__, "e", function() { return components_LoadMore; });
/* concated harmony reexport SearchBox */__webpack_require__.d(__webpack_exports__, "f", function() { return components_SearchBox; });
/* concated harmony reexport GoodsList */__webpack_require__.d(__webpack_exports__, "c", function() { return components_GoodsList; });
/* concated harmony reexport ErrorFetch */__webpack_require__.d(__webpack_exports__, "b", function() { return ErrorFetch_default; });
/* concated harmony reexport GoodsTab */__webpack_require__.d(__webpack_exports__, "d", function() { return GoodsTab_GoodsTab; });
/* concated harmony reexport Banners */__webpack_require__.d(__webpack_exports__, "a", function() { return Banners_Banners; });
/* concated harmony reexport Skeleton */__webpack_require__.d(__webpack_exports__, "g", function() { return Skeleton_Skeleton; });
/* unused concated harmony import Loader */










/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/modal");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nocontent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
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
/* 21 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/icon");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/search-bar");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/activity-indicator");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/menu");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/tabs");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/carousel");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("md5");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);


var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 4px;\n\t.am-search.am-search-start .am-search-input input[type=\"search\"] {\n\t\tpadding-left: 10px;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var util = __webpack_require__(35);

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject());
var Search = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (_ref) {
  var goods = _ref.goods,
      topGoods = _ref.topGoods,
      goodsDetail = _ref.goodsDetail;
  return {
    goods: goods,
    topGoods: topGoods.data,
    goodsDetail: goodsDetail.data
  };
}, {
  fetchGoods: _store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__[/* fetchGoods */ "s"],
  clearSearchList: _store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__[/* clearSearchList */ "q"],
  clearGoodsList: _store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__[/* clearGoodsList */ "p"],
  fetchGoodsDetail: _store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__[/* fetchGoodsDetail */ "t"],
  fetchTopGoods: _store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__[/* fetchTopGoods */ "u"],
  goodsDataReport: _store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__[/* goodsDataReport */ "v"]
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Search, _Component);

  _createClass(Search, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var reduxStore, isServer, pathname;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // err req res pathname query asPath isServer
                reduxStore = ctx.reduxStore, isServer = ctx.isServer, pathname = ctx.pathname;
                return _context.abrupt("return", {
                  pathname: pathname
                });

              case 2:
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

  function Search(props) {
    var _this2;

    _classCallCheck(this, Search);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      goodsList: [],
      // 存储列表信息
      hasMore: true,
      // 记录当前状态下还有没有更多的数据可供加载
      isLoadingMore: false,
      //记录当前状态下，是加载中，还是点击可加载更多
      page: 1 //页码

    });

    return _this2;
  }

  _createClass(Search, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // OPPO手机下呼起好物快应用搜索页
      Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_7__[/* openQuickapp */ "i"])({
        page: 'search'
      });
      this.props.clearSearchList();
    } // 加载更多

  }, {
    key: "_loadMoreData",
    value: function _loadMoreData() {
      var goods = this.props.goods;

      var _this = this;

      _this.setState({
        isLoadingMore: true
      });

      if (_this.state.hasMore) {
        _this.setState({
          page: ++_this.state.page
        }); // 页码累加


        _this.props.fetchGoods(_objectSpread({}, _this.state.params, {
          page: _this.state.page
        })).then(function (res) {
          var data = res.goods.list;
          var dataList = _this.state.goodsList;

          if (!dataList.length) {
            dataList = goods.data;
          }

          if (data && data.length < _config_index_js__WEBPACK_IMPORTED_MODULE_4__[/* PAGE_SIZE */ "e"]) {
            _this.setState({
              hasMore: false,
              goodsList: dataList.concat(data)
            });
          } else {
            _this.setState({
              goodsList: dataList.concat(data),
              hasMore: true,
              isLoadingMore: false
            });
          }
        });
      } else {
        this.setState({
          isLoadingMore: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          goods = _this$props.goods,
          err = _this$props.err,
          pathname = _this$props.pathname;
      var data = this.state.goodsList.length > 0 ? this.state.goodsList : goods && goods.data;

      if (err) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_index_js__WEBPACK_IMPORTED_MODULE_8__[/* ErrorFetch */ "b"], {
          err: err
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_index_js__WEBPACK_IMPORTED_MODULE_8__[/* SearchBox */ "f"], _extends({
        path: pathname,
        tags: _config_index_js__WEBPACK_IMPORTED_MODULE_4__[/* CATEGORY_TAGS */ "a"],
        isLoading: goods.fetching,
        hasnoGoods: data.length == 0,
        onBlur: function onBlur() {
          return _this3.props.clearSearchList();
        },
        onChange: function onChange(params) {
          params.page = _this3.state.page;

          _this3.setState({
            params: params
          });

          _this3.props.fetchGoods(params);
        }
      }, this.props)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_index_js__WEBPACK_IMPORTED_MODULE_8__[/* GoodsList */ "c"], {
        pathname: pathname,
        goodsList: data || [],
        dataReport: this.props.goodsDataReport
      }), data.length >= _config_index_js__WEBPACK_IMPORTED_MODULE_4__[/* PAGE_SIZE */ "e"] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_index_js__WEBPACK_IMPORTED_MODULE_8__[/* LoadMore */ "e"], {
        isLoadingMore: this.state.isLoadingMore,
        hasMore: this.state.hasMore,
        loadMoreFn: this._loadMoreData.bind(this)
      }));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"])) || _class);


/***/ })
/******/ ]);