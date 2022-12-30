module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Epr":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mouseWrapper": "scroll_mouseWrapper__Wt0HU",
	"mouse": "scroll_mouse__2v2a8",
	"colorSlide": "scroll_colorSlide__11-Sk",
	"trackBallSlide": "scroll_trackBallSlide__rBYyu",
	"colorText": "scroll_colorText__Gmrct",
	"dotParent": "scroll_dotParent__2Qqyx",
	"controlsDot": "scroll_controlsDot__1va1I",
	"activeDot": "scroll_activeDot__TYJxn",
	"Scroll": "scroll_Scroll__3lFvQ",
	"Scroll__section": "scroll_Scroll__section__1NU_1",
	"Scroll--normal": "scroll_Scroll--normal__AF4Y3",
	"ScrollControls": "scroll_ScrollControls__1u3Ov",
	"ScrollControls__wrp": "scroll_ScrollControls__wrp__22aEB",
	"ScrollControls--top": "scroll_ScrollControls--top__2jAwF",
	"ScrollControls__top": "scroll_ScrollControls__top__2Ky-L",
	"ScrollControls--bottom": "scroll_ScrollControls--bottom__2NwH0",
	"ScrollControls__bottom": "scroll_ScrollControls__bottom__3vkby"
};


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "0KOP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MhZx");


const setBackground = backgrounds => {
  const {
    width
  } = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();

  if (width < 768) {
    return backgrounds["mb"] ? backgrounds["mb"] : backgrounds["tabl"];
  }

  if (width >= 768 && width < 1200) return backgrounds["tabl"];
  if (width >= 1200) return backgrounds["desk"];
};

/* harmony default export */ __webpack_exports__["a"] = (setBackground);

/***/ }),

/***/ "0Oyr":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Industries we serve\",\"reasons\":[{\"img\":\"/images/platform-development/weServe/marketing-agency.svg\",\"text\":\"Marketing Agencies\",\"position\":\"40\",\"positionTabl\":\"0\",\"positionDesk\":\"26\"},{\"img\":\"/images/platform-development/weServe/eLearning.svg\",\"text\":\"Edtech\",\"position\":\"23\",\"positionTabl\":\"10\",\"positionDesk\":\"42\"},{\"img\":\"/images/platform-development/weServe/real-estate.svg\",\"text\":\"Real Estate\",\"position\":\"45\",\"positionTabl\":\"8\",\"positionDesk\":\"36\"},{\"img\":\"/images/platform-development/weServe/healthcare.svg\",\"text\":\"Travel and Hospitality\",\"position\":\"30\",\"positionTabl\":\"6\",\"positionDesk\":\"43\"},{\"img\":\"/images/platform-development/weServe/retail.svg\",\"text\":\"Retail and eCommerce\",\"position\":\"10\",\"positionTabl\":\"2\",\"positionDesk\":\"26\"}]}");

/***/ }),

/***/ "1IPs":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "2MRG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wJ4g");


const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _config_constants__WEBPACK_IMPORTED_MODULE_1__[/* API_URL */ "a"]
});
/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),

/***/ "2qAQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Reviews_wrapper__K_v8w",
	"title": "Reviews_title__2rGgF",
	"subtitle": "Reviews_subtitle__1b7SH",
	"carouselWrap": "Reviews_carouselWrap__2AcdG",
	"carouselItem": "Reviews_carouselItem__2OGPb",
	"carouselControls": "Reviews_carouselControls__3ht_e",
	"head": "Reviews_head__U2-dC",
	"imgWrap": "Reviews_imgWrap__3kC0f",
	"infoWrap": "Reviews_infoWrap__3MxCH",
	"name": "Reviews_name__1mBh_",
	"company": "Reviews_company__fHC6c",
	"workPlace": "Reviews_workPlace__3eVrn",
	"review": "Reviews_review__3MXxy",
	"linkWrap": "Reviews_linkWrap__1hR4N",
	"linkText": "Reviews_linkText__1H0wO",
	"link": "Reviews_link__2LO6W",
	"referencesWrap": "Reviews_referencesWrap__13XWQ",
	"moreReference": "Reviews_moreReference__12YQT",
	"iconsWrap": "Reviews_iconsWrap__2f-G9",
	"reference": "Reviews_reference__14Xz7",
	"clutch": "Reviews_clutch__vEbeW",
	"upwork": "Reviews_upwork__3y85R",
	"goodfirms": "Reviews_goodfirms__5vJ9J",
	"stars": "Reviews_stars__3By0x",
	"rightEmptyBlock": "Reviews_rightEmptyBlock__3l5Y5",
	"bottom": "Reviews_bottom__3R1bu",
	"iconsWrapper": "Reviews_iconsWrapper__2dqBn"
};


/***/ }),

/***/ "2tlT":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zNKW");


/***/ }),

/***/ "7bSg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-export-i18n"
var external_next_export_i18n_ = __webpack_require__("9TSj");

// EXTERNAL MODULE: ./config/constants.js
var constants = __webpack_require__("wJ4g");

// EXTERNAL MODULE: ./components/ReusableComponents/Reviews/Reviews.module.scss
var Reviews_module = __webpack_require__("2qAQ");
var Reviews_module_default = /*#__PURE__*/__webpack_require__.n(Reviews_module);

// EXTERNAL MODULE: ./components/ReusableComponents/Carousel/Carousel.js + 1 modules
var Carousel = __webpack_require__("pqM0");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/ReusableComponents/Reviews/CarouselItem.js







const CarouselItem = ({
  item
}) => {
  var _item$description;

  const {
    t
  } = Object(external_next_export_i18n_["useTranslation"])();
  const description = ((_item$description = item.description) === null || _item$description === void 0 ? void 0 : _item$description.length) > 350 ? `${item.description.slice(0, 350)}...` : item.description;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Reviews_module_default.a.carouselItem,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Reviews_module_default.a.head,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Reviews_module_default.a.imgWrap,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
          layout: "fill",
          src: item.avatar,
          className: Reviews_module_default.a.img,
          alt: "carousel-img"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Reviews_module_default.a.infoWrap,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: Reviews_module_default.a.name,
          children: item.name
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: Reviews_module_default.a.company,
          children: item.company
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: Reviews_module_default.a.workPlace,
          children: item.workPlace
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: Reviews_module_default.a.review,
      dangerouslySetInnerHTML: {
        __html: description
      }
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Reviews_module_default.a.linkWrap,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: item.link,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          className: Reviews_module_default.a.link,
          target: "_blank",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: Reviews_module_default.a.linkText,
            children: t('viewFull')
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            alt: "arrow",
            src: "/images/elements/reviewArrow.svg"
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var Reviews_CarouselItem = (CarouselItem);
// CONCATENATED MODULE: ./components/ReusableComponents/Reviews/Reviews.js








const Reviews = ({
  data,
  title,
  id = null,
  width
}) => {
  const {
    t
  } = Object(external_next_export_i18n_["useTranslation"])();

  if (!title) {
    title = t('reviewsMainTitle');
  }

  const config = {
    superLargeDesktop: {
      breakpoint: {
        max: 4000,
        min: 3000
      },
      items: 2
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1199
      },
      items: 2
    },
    tablet: {
      breakpoint: {
        max: 1199,
        min: 768
      },
      items: 2
    },
    mobile: {
      breakpoint: {
        max: 767,
        min: 0
      },
      items: 1
    }
  };
  const slides = data.map((review, index) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Reviews_CarouselItem, {
      item: review
    }, index);
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Reviews_module_default.a.wrapper,
    id: id,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: Reviews_module_default.a.title,
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      className: Reviews_module_default.a.subtitle,
      children: t('reviewaSubtitle')
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Carousel["a" /* default */], {
      data: data,
      config: config,
      containerClass: Reviews_module_default.a.carouselWrap,
      doubledItems: width >= 768,
      slides: slides,
      carouselControlsClass: Reviews_module_default.a.carouselControls,
      className: Reviews_module_default.a.carousel,
      isControls: !(data.length <= 2 && width < 1200 && width >= 768)
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Reviews_module_default.a.bottom,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Reviews_module_default.a.referencesWrap,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: Reviews_module_default.a.moreReference,
          children: t('readMoreOn')
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Reviews_module_default.a.iconsWrap,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Reviews_module_default.a.reference,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              href: constants["c" /* CLUTCH_LINK */],
              target: "_blank",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: Reviews_module_default.a.clutch,
                src: "/images/socialNetwork/clutch.svg",
                alt: "img"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                loading: "lazy",
                className: Reviews_module_default.a.stars,
                src: "/images/socialNetwork/stars.svg",
                alt: "img"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Reviews_module_default.a.reference,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              href: constants["q" /* UPWORK_LINK */],
              target: "_blank",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                loading: "lazy",
                className: Reviews_module_default.a.upwork,
                src: "/images/socialNetwork/upwork.svg",
                alt: "img"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "TOP RATED PLUS"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Reviews_module_default.a.reference,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              href: constants["l" /* GOODFIRMS_LINK */],
              target: "_blank",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: Reviews_module_default.a.goodfirms,
                loading: "lazy",
                src: "/images/socialNetwork/goodfirms.svg",
                alt: "img"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                loading: "lazy",
                className: Reviews_module_default.a.stars,
                src: "/images/socialNetwork/stars.svg",
                alt: "img"
              })]
            })
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Reviews_module_default.a.rightEmptyBlock
      })]
    })]
  });
};

/* harmony default export */ var Reviews_Reviews = __webpack_exports__["a"] = (Reviews);

/***/ }),

/***/ "7jmx":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "Technologies_title__lqL9r"
};


/***/ }),

/***/ "8j2J":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "9T3l":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "CTA_wrapper__1fMXi",
	"mainTitle": "CTA_mainTitle__3NwWb",
	"formWrapper": "CTA_formWrapper__2t5UV",
	"photosWrapper": "CTA_photosWrapper__1j35_",
	"ceoWrapper": "CTA_ceoWrapper__uDaOR",
	"messageWrapper": "CTA_messageWrapper__3w7TG"
};


/***/ }),

/***/ "9TSj":
/***/ (function(module, exports) {

module.exports = require("next-export-i18n");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "CUol":
/***/ (function(module) {

module.exports = JSON.parse("{\"reviews\":[{\"name\":\"Michael Kauffman\",\"company\":\"Werkcrush\",\"avatar\":\"/images/reviews/MichaelKauffman.jpg\",\"workPlace\":\"Founder\",\"description\":\"WTT Solutions has integrated APIs, improved user experience, and launched a working platform. The updated platform has become more convenient and scalable. Clear communication and a high level of knowledge were the hallmarks of this collaboration. The work of WTT will allow us to launch and scale a business much faster and more efficiently.\",\"link\":\"https://clutch.co/profile/wtt-solutions?page=1#review-1280721\",\"linkPlatform\":\"https://www.goodfirms.co/company/wtt-solutions\",\"icon\":\"/images/socialNetwork/goodfirms.svg\"},{\"name\":\"Shai Rosenzweig\",\"company\":\"Intentify\",\"avatar\":\"/images/reviews/img1.jpg\",\"workPlace\":\"CEO\",\"description\":\"WTT Solutions offers web back-end & application development services to support creating a SaaS product. It's easy and straightforward to work with the company. They have structured work processes. The project manager always stays in touch and answers all questions. The company proved to be a reliable partner and supported the product after realizing it.\",\"link\":\"https://clutch.co/profile/wtt-solutions#review-1432776\",\"linkPlatform\":\"https://www.upwork.com/ag/wttsolutions/\",\"icon\":\"/images/socialNetwork/upwork.svg\"},{\"name\":\"Larry Vollmer\",\"company\":\"ROI·DNA\",\"avatar\":\"/images/reviews/LarryVollmer.jpg\",\"workPlace\":\"Senior Engineering Manager\",\"description\":\"WTT Solutions stood out immediately because they have excellent reviews and track record and the talent to tackle all three of my projects. I supplied WTT solutions with static HTML/CSS/JS markup and they were able to build the websites for me from that markup. The quality and timeliness of the work were most impressive.\",\"link\":\"https://clutch.co/profile/wtt-solutions#review-1609625\",\"linkPlatform\":\"https://clutch.co/profile/wtt-solutions\",\"icon\":\"/images/socialNetwork/clutch.svg\"}]}");

/***/ }),

/***/ "D+jC":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Btn": "customBtn_Btn__2EnyG",
	"customBtn": "customBtn_customBtn__2-tN-",
	"disabledBtn": "customBtn_disabledBtn__31wjV",
	"outlineBtn": "customBtn_outlineBtn__30MPl",
	"largeBtn": "customBtn_largeBtn__3_bCl",
	"smallBtn": "customBtn_smallBtn__2AH_h"
};


/***/ }),

/***/ "D6mf":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "CarouselControls_wrapper__1eIEu",
	"leftArrow": "CarouselControls_leftArrow__1Oq4O",
	"dashWrapper": "CarouselControls_dashWrapper__1rU_O",
	"dash": "CarouselControls_dash__kCrEc",
	"activeDash": "CarouselControls_activeDash__HbPnT"
};


/***/ }),

/***/ "DArJ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Ouzo_wrapper__s_9gU",
	"contentWrapper": "Ouzo_contentWrapper__2Y4dd",
	"mainTitle": "Ouzo_mainTitle__gjyTO",
	"subtitle": "Ouzo_subtitle__2sm3U",
	"bottomText": "Ouzo_bottomText__2I8Pj",
	"screen": "Ouzo_screen__3mn75",
	"absluteDesk": "Ouzo_absluteDesk__30Dw1",
	"relativeDesk": "Ouzo_relativeDesk__UtoPq",
	"listItem": "Ouzo_listItem__1mV4B",
	"icon": "Ouzo_icon__3VhCa",
	"btn": "Ouzo_btn__1y3Zu",
	"buttons": "Ouzo_buttons__3nkWQ",
	"list": "Ouzo_list__3dzZV"
};


/***/ }),

/***/ "E0DC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Aiso");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_export_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9TSj");
/* harmony import */ var next_export_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_export_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CTA_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9T3l");
/* harmony import */ var _CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CTA_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CTAForm_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vnZR");
/* harmony import */ var _modal_Modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("lwWn");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("wJ4g");
/* harmony import */ var _services_sendEmail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("d6iV");
/* harmony import */ var _utils_validation_validateEmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("hYHy");
/* harmony import */ var _utils_validation_validateEmail__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_validation_validateEmail__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_setBackground__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("0KOP");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const CTA = ({
  CTATitle,
  topTitle,
  inputClass,
  wrapperClass
}) => {
  const {
    t
  } = Object(next_export_i18n__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])();
  const CTAForm = t('CTAForm');
  const submitForm = t('submitForm');
  const getInTouchModalText = t('getInTouchModalText');
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setModal(!modal);

  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    email: '',
    message: '',
    formName: _config_constants__WEBPACK_IMPORTED_MODULE_7__[/* FORM_NAMES */ "k"].PAGES_FORM
  });
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setError('');
  }, [values.email]);
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(({
    target
  }) => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [target.name]: target.value
    }));
  }, [setValues, values]);

  const handleSubmit = e => {
    e.preventDefault();

    if (_utils_validation_validateEmail__WEBPACK_IMPORTED_MODULE_9___default.a.validate(values.email)) {
      _services_sendEmail__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].send(values);
      setValues({
        name: '',
        email: '',
        message: '',
        formName: _config_constants__WEBPACK_IMPORTED_MODULE_7__[/* FORM_NAMES */ "k"].PAGES_FORM
      });
      setModal(!modal);
    } else {
      setError('Invalid email address!');
      return;
    }
  };

  const messageImages = {
    mb: '/images/CTA/cloudMob.png',
    tabl: '/images/CTA/cloudTabl.png',
    desk: '/images/CTA/cloudDesk.png'
  };
  const ceoImages = {
    mb: '/images/CTA/ceoMob.png',
    tabl: '/images/CTA/ceoTabl.png',
    desk: '/images/CTA/ceoDesk.png'
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper, wrapperClass),
    children: [topTitle && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
      className: _CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mainTitle,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("span", {
        dangerouslySetInnerHTML: {
          __html: topTitle
        }
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])("div", {
      className: _CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.photosWrapper,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
        className: _CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ceoWrapper,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
          layout: "fill",
          src: Object(_utils_setBackground__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(ceoImages),
          alt: "img",
          quality: 20
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])("div", {
        className: _CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.messageWrapper,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
          layout: "fill",
          src: Object(_utils_setBackground__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(messageImages),
          alt: "img",
          quality: 75
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("span", {
            children: t('CTAMessage.name')
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("span", {
            children: t('CTAMessage.position')
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("span", {
            children: t('CTAMessage.message')
          })]
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])("div", {
      className: _CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.formWrapper,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("h3", {
        children: CTATitle
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_CTAForm_Form__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        data: CTAForm,
        btnTitle: submitForm,
        values: values,
        formClassName: inputClass,
        handleChange: handleChange,
        handleSubmit: handleSubmit,
        errors: {
          email: error
        }
      }), modal && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_modal_Modal_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        toggle: toggle,
        modal: modal,
        bodyText: getInTouchModalText
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CTA);

/***/ }),

/***/ "EZkr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userAgent; });
const userAgent = () => {
  if (false) {}
};

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FhS1":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Why choose us?\",\"subtitle\":\"We design, invent, develop, share your burden on your path to leadership. We understand the development of websites, applications, portals, products, and more that complement your enterprise\",\"list\":[{\"icon\":\"images/backend-development/whyUs/icon1.svg\",\"subTitle\":\"Flexible approach\",\"text\":\"Our agile design ensures on-time delivery to our customers, higher product quality, and lower overall risks.\"},{\"icon\":\"images/backend-development/whyUs/icon2.svg\",\"subTitle\":\"Fast availability\",\"text\":\"We promise the fast availability of suitable candidates for your web or mobile application project.\"},{\"icon\":\"images/backend-development/whyUs/icon3.svg\",\"subTitle\":\"Excellent results\",\"text\":\"Our back-end developers have solid experience and a good reputation. See for yourself on our case studies page.\"},{\"icon\":\"images/backend-development/whyUs/icon4.svg\",\"subTitle\":\"Scalability and reliability\",\"text\":\"We always make sure that your development team is ideally suited to your project's needs and requirements.\"},{\"icon\":\"images/backend-development/whyUs/icon5.svg\",\"subTitle\":\"Clear communication\",\"text\":\"Work with backend programmers who speak, read, and write English fluently.\"}]}");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KSbk":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "Form_form__2ZGkc",
	"recaptcha": "Form_recaptcha__3CHcl"
};


/***/ }),

/***/ "LjSu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5rI");
/* harmony import */ var _CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["name", "type", "labelText", "labelIcon", "note", "onChange", "error", "value", "className", "forwardRef", "children", "placeholder", "required"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CustomInput = _ref => {
  let {
    name,
    type = 'text',
    labelText,
    labelIcon,
    note,
    onChange,
    error,
    value,
    className,
    forwardRef,
    children,
    placeholder = '',
    required = false
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const key = `${name}_${type}_input`;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
    className: _CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
      className: _CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.labelWrapper,
      children: [labelText && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("label", {
        htmlFor: key,
        className: _CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.inputLabel,
        children: [labelIcon, labelText, required && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
          className: _CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.require,
          children: "*"
        })]
      }), error && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("p", {
        className: _CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.error,
        children: [required && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
          className: _CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.require,
          children: "*"
        }), error]
      })]
    }), type === 'textarea' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("textarea", _objectSpread({
      id: key,
      value: value,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.textareaField, className),
      onChange: onChange,
      name: name,
      required: required,
      placeholder: placeholder,
      ref: forwardRef
    }, rest), key) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("input", _objectSpread({
      id: key,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.inputField, className),
      onChange: onChange,
      name: name,
      required: required,
      value: value,
      type: type,
      ref: forwardRef,
      placeholder: placeholder
    }, rest), key), children]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (CustomInput);

/***/ }),

/***/ "MRCQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
const meta = {
  //home page
  homePageTitle: 'Software Development Company and Service Provider | WTT Solutions',
  homePageDescription: 'WTT Solutions is a reliable software development company - we provide a range of web development services, design, and custom software development solutions',
  //get in touch page
  contactTitle: 'Tell us about your project vision - get in touch on WTT Solutions',
  contactDescription: 'If you have any project in mind - contact WTT Solutions and tell us what you are looking for in terms of software services ✅ Free estimates and confidentiality',
  //about us page
  aboutUsTitle: 'About Us | WTT Solutions',
  aboutUsDescription: 'About Us on WTT Solutions',
  //martech
  martechTitle: 'New Marketing technologies and MarTech software | WTT Solutions',
  martechDescription: 'WTT Solutions helps improve your MarTech experience with new marketing technologies ✅ We will help you develop MarTech software to get information from data',
  martechKeywords: 'MarTech developers, custom software solutions, MarTech solutions, MarTech Software Development, MarTech development services, Development services for MarTech, MarTech developers, Marketing Technology Development',
  //Mobile development
  mobileDevelopmentTitle: 'Custom Mobile ( APP) Development Company | WTT Solutions',
  mobileDevelopmentDescription: 'WTT Solutions is a custom mobile development company ✅ We can help you create an MVP and scale your business with the latest technology using a mobile SDK',
  mobileDevelopmentKeywords: 'mobile app development company, cross platform, solution, iOS, Android, Mobile application development solutions, mobile development services, mobile software development services, mobile application development solutions, mobile app development services, application development for mobile, mobile app as a service, mobile software development services, application development for mobile',
  //our work page
  ourWorkTitle: 'Our work experience - Software Company Portfolio | WTT Solutions',
  ourWorkDescription: 'Work experience of WTT Solutions ✅ Information about our technology stack, industries we work with and the projects we created for enterprises and startups',
  //Enterprise Development
  enterpriseTitle: 'Enterprise Software Development Company | WTT Solutions',
  enterpriseDescription: 'Custom enterprise software development company that offers software engineering services ✅ Enjoy software solutions tailored to your specific needs and plans',
  //platform development
  platformDevelopmentTitle: 'Digital Platform Development Services | WTT Solutions',
  platformDevelopmentDescription: 'Digital platform development for your business - WTT Solutions ✅ We can build cross platform app, cloud-based apps and customize ready-made solutions for your business',
  // Software Development for Startups
  developmentForStartupsTitle: 'Software Development for Startups | WTT Solutions',
  developmentForStartupsDescription: 'We provide startup development services, covering all aspects of performance, scalability, and security ✅ Web development and app for startups | WTT Solutions',
  //edtech
  edtechTitle: 'Ed-tech Software Development Services | WTT Solutions',
  edtechDescription: 'WTT Solutions is an eLearning software development company.✔️ We build a custom development solution for your business.',
  //hrTech
  hrTechTitle: 'HR technologies - Development HR( HRM) Software | WTT Solutions',
  hrTechDescription: 'Improve your recruiting process and HR analytics with HRTech solutions ✅ WTT Solutions provides human resources software that helps to manage employees',
  //frontend develop
  frontendTitle: 'Custom Front-end Development Services | WTT Solutions',
  frontendDescription: 'WTT Solutions is a front-end development company ✅ We apply our cross-industry expertise and custom front-end services to create scalable and secure projects ',
  //backend-development
  backendDevelopmentTitle: 'Custom Back-end Development Services | WTT Solutions',
  backendDevelopmentDescription: 'WTT Solutions is a back-end development company ✅ We apply our cross-industry expertise and custom back-end services to create scalable and secure projects',
  // blog
  blogDescription: 'On the WTT Solutions blog you can find news and trends on how to boost your business growth with custom software development solutions',
  // Technologies
  //react
  reactTitle: 'React JS Development Company and Consultancy - WTT Solutions',
  reactDescription: 'See how WTT Solutions react development company provides its services and read real life testimonials and case studies.',
  //angular
  angularTitle: 'Angular Development Company and Consultancy - WTT Solutions',
  angularDescription: 'See how WTT Solutions angular development company provides its services and read real-life testimonials and case studies.',
  //node
  nodeTitle: 'Node JS Development Company and Consultancy - WTT Solutions',
  nodeDescription: 'See how WTT Solutions NodeJS development company provides its services and read real-life testimonials and case studies',
  //net
  netTitle: '.NET Development Company and Consultancy - WTT Solutions',
  netDescription: 'See how WTT Solutions .NET the development company provides its services and reads real-life testimonials and case studies.',
  //vue
  vueTitle: 'Vue.JS Development Company and Consultancy - WTT Solutions',
  vueDescription: 'See how WTT Solutions Vue.JS development company provides its services and read real-life testimonials and case studies.',
  //flutter
  flutterTitle: 'Flutter Development Company and Consultancy - WTT Solutions',
  flutterDescription: 'See how WTT Solutions Flutter development company provides its services and read real life testimonials and case studies.',
  //blockchain
  blockchainTitle: 'Blockchain development (AMP) and consulting | WTT Solutions',
  blockchainDescription: 'WTT Solutions is a full-stack blockchain development company that produces custom products for different audiences ✅ Free blockchain consulting and quotes',
  //ai services
  aiServicesTitle: 'Artificial Intelligence (AI) development company | WTT Solutions',
  aiServicesDescription: 'Automate business processes with the help of machine learning and Artificial Intelligence development ✅ Uncover hidden potential of your data - WTT Solutions'
};

/***/ }),

/***/ "MhZx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useWindowSize() {
  let isSSR = true;

  if (false) {}

  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

/* harmony default export */ __webpack_exports__["a"] = (useWindowSize);

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("SpTj"));

var _requestIdleCallback = __webpack_require__("0G5g");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (false) {}

    if (true) {
      (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
        if (!cancelled) {
          reject(err);
        }
      }, ms));
    }
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (false) {}

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "NlVh":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Services_wrapper__2KXwq",
	"mainTitle": "Services_mainTitle__2bt87",
	"list": "Services_list__2da_b",
	"listItem": "Services_listItem__2otdI",
	"btn": "Services_btn__2w16f"
};


/***/ }),

/***/ "OfkW":
/***/ (function(module, exports) {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "PssJ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "ArrowWithText_wrapper__2mvlZ",
	"text": "ArrowWithText_text__2Wrtz",
	"img": "ArrowWithText_img__1tQM3"
};


/***/ }),

/***/ "Qx0H":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "Rv5q":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Faq_wrapper__1cJ4F",
	"mainTitle": "Faq_mainTitle__2QwPn",
	"item": "Faq_item__1MLrk",
	"icon": "Faq_icon__1HeGh",
	"questionBlock": "Faq_questionBlock__X_z0u",
	"answer": "Faq_answer__2cbjp",
	"wrapperQuestions": "Faq_wrapperQuestions__3oyqU"
};


/***/ }),

/***/ "SEFy":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Header_wrapper__9vuyc",
	"linksWrapper": "Header_linksWrapper__1KQ-A",
	"title": "Header_title__2_1Xf",
	"btn": "Header_btn__37hAN"
};


/***/ }),

/***/ "Sgtc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("OfkW");

var _normalizeLocalePath = __webpack_require__("TJ0d");

var _mitt = _interopRequireDefault(__webpack_require__("jcgO"));

var _utils = __webpack_require__("1IPs");

var _isDynamic = __webpack_require__("WSU2");

var _parseRelativeUrl = __webpack_require__("pfUk");

var _querystring = __webpack_require__("2tlT");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("XgOf"));

var _routeMatcher = __webpack_require__("Qx0H");

var _routeRegex = __webpack_require__("q5Ud");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "SpTj":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "T5rI":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "CustomInput_wrapper__msXfw",
	"labelWrapper": "CustomInput_labelWrapper__2H2ps",
	"inputLabel": "CustomInput_inputLabel__2-lcR",
	"error": "CustomInput_error__14zE5",
	"require": "CustomInput_require__1uw3X",
	"inputField": "CustomInput_inputField__21bBM",
	"textareaField": "CustomInput_textareaField__2-Wae",
	"required": "CustomInput_required__1QeG6"
};


/***/ }),

/***/ "TJ0d":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "TTxv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
function routing(params) {
  return {
    root: '/',
    getStarted: '/get-started',
    platformDevelopment: '/platform-development',
    ourWork: '/our-work',
    ourWorkCase: `/our-work/${params}`,
    aboutUs: '/about-us',
    martech: '/martech',
    edtech: '/edtech',
    hrtech: '/hrtech',
    frontendDevelopment: '/frontend-development',
    mobileDevelopment: '/mobile-development',
    enterpriseDevelopment: '/enterprise-development',
    backendDevelopment: '/backend-development',
    startups: '/startups',
    blog: `/blog`,
    blogCategory: `/blog/${params}`,
    article: `/blog/${params}`,
    aboutAuthor: '/blog/about-author',
    react: '/react',
    node: '/node',
    vue: '/vue',
    angular: '/angular',
    flutter: '/flutter',
    net: '/net',
    ceoBio: "/blog/ceo",
    blockchain: '/blockchain',
    aiServices: "/ai-services"
  };
}

/***/ }),

/***/ "VimR":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Back-end Development Services We Deliver\",\"list\":[{\"title\":\"Back-end API management\",\"text\":\"We work with APIs in scalable and secure environments, both in the cloud and on-premises.\",\"img\":\"/images/backend-development/services/icon1.svg\"},{\"title\":\"Back-end CRM development\",\"text\":\"Get a complete CRM platform that fully meets your requirements with our development services and implementation support. \",\"img\":\"/images/backend-development/services/icon2.svg\"},{\"title\":\"Data storage back-end application\",\"text\":\"We are developing an ideal server application that can store data and scale when hosted on cloud computing services.\",\"img\":\"/images/backend-development/services/icon3.svg\"},{\"title\":\"Back-end app development services\",\"text\":\"Using back-end programming services, we can easily add a robust cloud database, tracking analytics, and push notifications to your mobile apps.\",\"img\":\"/images/backend-development/services/icon4.svg\"},{\"title\":\"Back-end development services for enterprises\",\"text\":\"We create sophisticated electronic design automation workflows, middle tiers, SOAP web services using frameworks to provide enterprise business solutions.\",\"img\":\"/images/backend-development/services/icon5.svg\"},{\"title\":\"Migration to cloud\",\"text\":\"Have an outdated system or want to reduce system maintenance costs? We help migrate server systems to public, private, and hybrid clouds according to your business needs.\",\"img\":\"/images/backend-development/services/icon6.svg\"},{\"title\":\"Сustom server solutions\",\"text\":\"We provide custom back-end development services for businesses of any scale. Get custom server solutions whether you have a straightforward or more complex & innovative web application that stores and manages data from multiple sources.\",\"img\":\"/images/backend-development/services/icon7.svg\"}]}");

/***/ }),

/***/ "WSU2":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XgOf":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YP82":
/***/ (function(module) {

module.exports = JSON.parse("[{\"question\":\"What is backend development?\",\"answer\":\"Backend development relates to the server-side of a product and focuses on scripting, database, and product architecture. It is responsible for all the 'behind-the-scenes' activities that take place when a user performs an action on a website or within a product.\"},{\"question\":\"How do I choose the right backend technology for my app?\",\"answer\":\"Since there's no definite answer to the question of which backend technology is best, we recommend that you base your choice primarily on your business needs.\"},{\"question\":\"Which backend technology is the fastest?\",\"answer\":\"There are a lot of backend technologies that you can implement for software development and, in a nutshell, the choice between one or another boils down to the objectives and goals set before the product. Get in touch with our team so we can provide you with a comprehensive consultation on this subject.\"},{\"question\":\"Which cloud platform to choose: AWS or Azure?\",\"answer\":\"Both products offer pretty much the same capabilities in terms of security, storage, scalability and pricing. In order to choose between these back-end services, assess your budget and review the pool of features you want to implement. This way, you'll understand which one suits your needs best.\"},{\"question\":\"What is the backend API?\",\"answer\":\"A backend API is an Application Programming Interface used by mobile and web apps to 'talk' to the backend. It serves as middleware which receives requests from the frontend, extracts the needed data from the backend, and returns them back to the frontend (=to a user).\"}]");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("Sgtc");

var _router1 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (false) {} else {
    child = _react.default.Children.only(children);
  }

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "d6iV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendEmailService; });
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wJ4g");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2MRG");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SendEmailService {
  static send(credentials) {
    const isMessageInCredentials = credentials.message.trim();

    const data = _objectSpread({
      name: credentials.name,
      email: credentials.email
    }, isMessageInCredentials && {
      message: credentials.message
    });

    fetch(_config_constants__WEBPACK_IMPORTED_MODULE_0__[/* EMAIL_SENDER_URL */ "j"], {
      method: 'POST',
      headers: {
        origin: 'http://localhost:3000'
      },
      body: JSON.stringify(data)
    }).then(res => res.ok ? res : Promise.reject(res)).then(() => {
      return _api__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post('/api/request/rfsd1sdsfds454v36789s3', _objectSpread(_objectSpread({
        name: credentials.name,
        email: credentials.email
      }, isMessageInCredentials && {
        message: credentials.message
      }), {}, {
        response: 'good',
        form_name: credentials.formName
      }));
    }).catch(() => {
      return _api__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post('/api/request/rfsd1sdsfds454v36789s3', _objectSpread(_objectSpread({
        name: credentials.name,
        email: credentials.email
      }, isMessageInCredentials && {
        message: credentials.message
      }), {}, {
        response: 'bad',
        form_name: credentials.formName
      }));
    });
  }

}

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("xirb"));

var _toBase64 = __webpack_require__("8j2J");

var _imageConfig = __webpack_require__("o04+");

var _useIntersection = __webpack_require__("vNVm");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[768,1200],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (false) { var ref; }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (false) {}

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "e5fm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Scroll

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Scroll/utils/ease-in-out-cubic.js
function easeInOutCubic(currentTime, startValue, changeInValue, duration) {
  const time = currentTime / duration - 1;
  const timeCubic = time * time * time;
  return changeInValue * (timeCubic + 1) + startValue;
}
// CONCATENATED MODULE: ./components/Scroll/utils/animated-scroll-to.js

function animatedScrollTo(scrollTo, duration, callback) {
  let scrollFrom = window.scrollY || window.pageYOffset || 0;
  const scrollDiff = scrollTo - scrollFrom;
  let currentTime = 0;
  const increment = 20;
  const url = document.location.pathname;

  (function animateScroll() {
    currentTime += increment;
    const newScrollPos = easeInOutCubic(currentTime, scrollFrom, scrollDiff, duration);

    if (currentTime > duration || url !== document.location.pathname) {
      callback();
      return;
    }

    window.scrollTo(0, newScrollPos);
    setTimeout(animateScroll, increment);
  })();
}
// CONCATENATED MODULE: ./components/Scroll/utils/is-mobile.js
function isMobileDevice() {
  return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
}
// CONCATENATED MODULE: ./components/Scroll/utils/helpers.js
const getObjectValues = obj => Object.keys(obj).map(key => obj[key]);
// EXTERNAL MODULE: ./components/Scroll/style/scroll.module.scss
var scroll_module = __webpack_require__("+Epr");
var scroll_module_default = /*#__PURE__*/__webpack_require__.n(scroll_module);

// EXTERNAL MODULE: ./config/constants.js
var constants = __webpack_require__("wJ4g");

// CONCATENATED MODULE: ./components/Scroll/utils/eventListeners.js
 //add event listener to sidebar items on case pages

const caseSidebarEventListener = (elementsArr, scrollFnDesk, scrollFnTablet) => {
  Array.from(elementsArr).forEach(el => {
    el.addEventListener('click', () => {
      if (window.innerWidth < 1200) {
        scrollFnTablet(Number(el.parentElement.value));
      } else {
        scrollFnDesk(Number(el.parentElement.value));
      }
    });
  });
}; //event listener to buttons "Clients about us" on pages

const clientsAboutUsBtnEventListeners = scrollFn => {
  const values = Object.values(constants["v" /* clientsAboutUsScroll */]);
  values.forEach(({
    buttonScrollID,
    slide
  }) => {
    const button = document.getElementById(buttonScrollID);

    if (button && window.innerWidth > 1199) {
      button.addEventListener('click', () => {
        scrollFn(slide);
      });
    }
  });
};
// EXTERNAL MODULE: ./components/Scroll/ScrollSection.jsx
var ScrollSection = __webpack_require__("gvAc");

// CONCATENATED MODULE: ./assets/icons/scroll-arrow.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgScrollArrow(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    width: 9,
    height: 28,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M4.754 27.2V1.865l2.8 2.75.7-.688-4-3.927-4 3.927.7.688 2.8-2.75V27.2h1z",
    fill: "#A4ADBB"
  })));
}
/* harmony default export */ var scroll_arrow = (SvgScrollArrow);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/Scroll/ScrollControls.jsx


 // icons




const scrollPosition = {
  TOP: "top",
  MIDDLE: "middle",
  BOTTOM: "bottom"
};

const ScrollControls = props => {
  const {
    activeSlide,
    slidesCount,
    onPrev,
    onNext,
    scrollToSlide,
    titles
  } = props;
  const {
    0: position,
    1: setPosition
  } = Object(external_react_["useState"])(scrollPosition.TOP);
  const isFullsreen = global.window && window.document.fullscreen;
  Object(external_react_["useEffect"])(() => {
    if (isFullsreen === false) {
      scrollToSlide(activeSlide);
    }

    if (activeSlide === 0) setPosition(scrollPosition.TOP);else if (activeSlide > 0 && activeSlide < slidesCount - 1) setPosition(scrollPosition.MIDDLE);else setPosition(scrollPosition.BOTTOM);
  }, [activeSlide, isFullsreen]);

  const getClassName = () => {
    switch (position) {
      case scrollPosition.TOP:
        return scroll_module_default.a["ScrollControls--top"];

      case scrollPosition.BOTTOM:
        return scroll_module_default.a["ScrollControls--bottom"];

      default:
        return null;
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: external_classnames_default()(scroll_module_default.a.ScrollControls, getClassName()),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: scroll_module_default.a.ScrollControls__wrp,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: scroll_module_default.a.ScrollControls__top,
        onClick: onPrev,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(scroll_arrow, {})
      }), titles.map((el, i) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: scroll_module_default.a.dotParent,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            onClick: () => scrollToSlide(i),
            className: external_classnames_default()(scroll_module_default.a.controlsDot, i === activeSlide && scroll_module_default.a.activeDot)
          }), el && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: el
          })]
        }, i);
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: scroll_module_default.a.ScrollControls__bottom,
        onClick: onNext,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(scroll_arrow, {})
      })]
    })
  });
};

/* harmony default export */ var Scroll_ScrollControls = (ScrollControls);
// CONCATENATED MODULE: ./components/Scroll/Scroll.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // utils





 // Components





const scrollMode = {
  FULL_PAGE: "full-page",
  NORMAL: "normal"
};
class Scroll_Scroll extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onResize", () => {
      this._slides = [];

      if (window.innerWidth < 1200 || window.innerHeight < 411) {
        this._scrollMode = scrollMode.NORMAL;
      } else this._scrollMode = scrollMode.FULL_PAGE;

      for (let i = 0; i < this._slidesCount; i++) {
        this._slides.push(window.innerHeight * i);
      }

      this.setState({
        height: window.innerHeight
      });
    });

    _defineProperty(this, "onTouchStart", evt => {
      this._touchStart = evt.touches[0].clientY;
      this._isScrolledAlready = false;
    });

    _defineProperty(this, "onTouchMove", evt => {
      if (this._scrollMode !== scrollMode.FULL_PAGE) {
        return;
      }

      evt.preventDefault();
      const touchEnd = evt.changedTouches[0].clientY;

      if (!this._isScrollPending && !this._isScrolledAlready) {
        if (this._touchStart > touchEnd + this._touchSensitivity) {
          this.scrollToSlide(this.state.activeSlide + 1);
        } else if (this._touchStart < touchEnd - this._touchSensitivity) {
          this.scrollToSlide(this.state.activeSlide - 1);
        }
      }
    });

    _defineProperty(this, "onScroll", evt => {
      if (this._scrollMode !== scrollMode.FULL_PAGE) {
        return;
      }

      evt.preventDefault();

      if (this._isScrollPending) {
        return;
      }

      const scrollDown = (evt.wheelDelta || -evt.deltaY || -evt.detail) < 0;

      if (scrollDown) {
        this.scrollToSlide(this.state.activeSlide + 1);
      } else {
        this.scrollToSlide(this.state.activeSlide - 1);
      }
    });

    _defineProperty(this, "getSlidesCount", () => this._slidesCount);

    _defineProperty(this, "getCurrentSlideIndex", () => this.state.activeSlide);

    _defineProperty(this, "scrollNext", () => {
      this.scrollToSlide(this.state.activeSlide + 1);
    });

    _defineProperty(this, "scrollPrev", () => {
      this.scrollToSlide(this.state.activeSlide - 1);
    });

    _defineProperty(this, "scrollToSlide", slide => {
      if (!this._isScrollPending && slide >= 0 && slide < this._slidesCount) {
        const currentSlide = this.state.activeSlide;
        this.props.beforeChange({
          from: currentSlide,
          to: slide
        });
        sessionStorage.setItem("slide", slide);
        this.setState({
          activeSlide: slide
        });
        this._isScrollPending = true;
        animatedScrollTo(this._slides[slide], this.props.duration, () => {
          this._isScrollPending = false;
          this._isScrolledAlready = true;
          this.props.afterChange({
            from: currentSlide,
            to: slide
          });
        });
      }
    });

    _defineProperty(this, "scrollToSlideTablet", slide => {
      const elem = document.getElementById(`caseSection-${slide}`);
      this.setState({
        activeSlide: slide
      });
      sessionStorage.setItem("slide", slide);
      elem.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    });

    this._isScrollPending = false;
    this._isScrolledAlready = false;
    this._slides = [];
    this._slidesCount = Scroll_Scroll.getChildrenCount(this.props.children) + this.props.additionalElements;
    this._touchSensitivity = 5;
    this._touchStart = 0;
    this._isMobile = null;
    this._scrollMode = scrollMode.FULL_PAGE;
    this.state = {
      activeSlide: props.initialSlide
    };
  }

  componentDidMount() {
    // scroll to previous page slide
    const shouldScrollRestore = JSON.parse(sessionStorage.getItem("shouldScrollRestore"));
    const scrollPos = JSON.parse(sessionStorage.getItem(this.props.router.asPath));

    if (shouldScrollRestore && scrollPos) {
      this.setState({
        activeSlide: +scrollPos.slide
      });
      sessionStorage.setItem("slide", scrollPos.slide);

      if (window.innerWidth < 1200) {
        window.scroll(0, +scrollPos.y);
      }
    } else {
      this.setState({
        activeSlide: 0
      });
      sessionStorage.setItem("slide", "0");
    } // end scroll to previous page slide


    this._isMobile = isMobileDevice();

    if (this._isMobile) {
      document.addEventListener("touchmove", this.onTouchMove, {
        passive: false
      });
      document.addEventListener("touchstart", this.onTouchStart);
    } else {
      document.addEventListener("wheel", this.onScroll, {
        passive: false
      });
    }

    window.addEventListener("resize", this.onResize);
    const casePageScrollItems = document.getElementsByClassName("caseScroll");
    caseSidebarEventListener(casePageScrollItems, this.scrollToSlide, this.scrollToSlideTablet);
    clientsAboutUsBtnEventListeners(this.scrollToSlide);
    this.onResize(); //hide scrollbar

    document.body.style.overflow = "hidden";
  }

  componentDidUpdate() {
    if (this._scrollMode == "normal") {
      document.body.style.overflow = "visible";
    }

    if (this._scrollMode == "full-page") {
      document.body.style.overflow = "hidden";
    }
  }

  componentWillUnmount() {
    if (this._isMobile) {
      document.removeEventListener("touchmove", this.onTouchMove);
      document.removeEventListener("touchstart", this.onTouchStart);
    } else {
      document.removeEventListener("wheel", this.onScroll);
    }

    window.removeEventListener("resize", this.onResize);
    document.body.style.overflow = "visible";
    sessionStorage.setItem("scrollY", window.scrollY);
  }

  renderControls() {
    const {
      controls,
      controlsProps,
      titles
    } = this.props;
    if (!controls) return null;
    const controlsBasicProps = {
      activeSlide: this.state.activeSlide,
      getCurrentSlideIndex: this.getCurrentSlideIndex,
      onNext: this.scrollNext,
      onPrev: this.scrollPrev,
      scrollToSlide: this.scrollToSlide,
      slidesCount: this.getSlidesCount(),
      titles
    };

    if (controls === true) {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Scroll_ScrollControls, _objectSpread(_objectSpread({}, controlsBasicProps), controlsProps));
    }

    const CustomControls = controls;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomControls, _objectSpread(_objectSpread({}, controlsBasicProps), controlsProps));
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: external_classnames_default()(scroll_module_default.a.Scroll, this.props.className, this._scrollMode === scrollMode.NORMAL ? scroll_module_default.a["Scroll--normal"] : ""),
      children: [this.renderControls(), this.props.children, !this.props.router.asPath.includes("our-work") && !this.props.router.asPath.includes("get-started") && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: scroll_module_default.a.mouseWrapper,
        onClick: () => this.scrollToSlide(1),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: scroll_module_default.a.mouse,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Scroll"
          })
        })
      })]
    });
  }

}

_defineProperty(Scroll_Scroll, "defaultProps", {
  afterChange: () => {},
  beforeChange: () => {},
  controls: true,
  controlsProps: {},
  duration: 1000,
  initialSlide: 0,
  additionalElements: 1
});

_defineProperty(Scroll_Scroll, "getChildrenCount", children => {
  const childrenArr = external_react_default.a.Children.toArray(children);
  const slides = childrenArr.filter(({
    type
  }) => type === ScrollSection["a" /* default */]);
  return slides.length;
});

/* harmony default export */ var components_Scroll_Scroll = __webpack_exports__["a"] = (Object(router_["withRouter"])(Scroll_Scroll));

/***/ }),

/***/ "f++f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomBtn; });
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wJ4g");
/* harmony import */ var _customBtn_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("D+jC");
/* harmony import */ var _customBtn_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_customBtn_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function CustomBtn(props) {
  const {
    PRIMARY,
    OUTLINE,
    LARGE,
    SMALL
  } = _config_constants__WEBPACK_IMPORTED_MODULE_0__[/* customBtn */ "x"];
  const {
    type = PRIMARY,
    btnType,
    size = LARGE,
    title,
    onClick,
    buttonStyle,
    disabled = false,
    classes,
    link,
    targetBlank = false
  } = props;

  const generateBtnType = () => {
    switch (type) {
      case PRIMARY:
        return _customBtn_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.customBtn;

      case OUTLINE:
        return _customBtn_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.outlineBtn;
    }
  };

  const generateBtnSize = () => {
    switch (size) {
      case LARGE:
        return _customBtn_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.largeBtn;

      case SMALL:
        return _customBtn_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.smallBtn;
    }
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: link ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
      href: link,
      onClick: onClick,
      target: !targetBlank ? "_self" : "_blank",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_customBtn_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Btn, classes, generateBtnType(), generateBtnSize()),
      children: title
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
      onClick: onClick,
      type: btnType,
      style: buttonStyle,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_customBtn_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Btn, classes, generateBtnType(), generateBtnSize(), disabled && _customBtn_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.disabledBtn),
      disabled: disabled,
      children: title
    })
  });
}

/***/ }),

/***/ "gvAc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scroll_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+Epr");
/* harmony import */ var _style_scroll_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scroll_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ScrollSection = props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", _objectSpread(_objectSpread({}, props), {}, {
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_scroll_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Scroll__section, props.className),
  children: props.children
}));

ScrollSection.defaultProps = {
  children: null,
  style: {}
};
ScrollSection.isSlideOfFullpage = true;
/* harmony default export */ __webpack_exports__["a"] = (ScrollSection);

/***/ }),

/***/ "hYHy":
/***/ (function(module, exports) {

exports.validate = function (email) {
  if (!email) return false;
  const emailParts = email.split('@');
  if (emailParts.length !== 2) return false;
  const account = emailParts[0];
  const address = emailParts[1];
  if (account.length > 64) return false;else if (account.includes('_')) return false;else if (address.length > 255) return false;
  const domainParts = address.split('.');
  if (domainParts.some(part => {
    return part.length > 63;
  })) return false;
  const sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
  const sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
  const sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
  const sQuotedPair = '\\x5c[\\x00-\\x7f]';
  const sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
  const sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
  const sDomain_ref = sAtom;
  const sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
  const sWord = '(' + sAtom + '|' + sQuotedString + ')';
  const sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
  const sLocalPart = sWord + '(\\x2e' + sWord + ')*';
  const sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec

  const sValidEmail = '^' + sAddrSpec + '$'; // as whole string

  const reValidEmail = new RegExp(sValidEmail);
  return reValidEmail.test(email);
};

/***/ }),

/***/ "hZ/p":
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"React Native\",\"icon\":\"/images/aboutUs/tools/native.svg\",\"department\":[\"fe\"]},{\"name\":\"React\",\"icon\":\"/images/aboutUs/tools/react.svg\",\"department\":[\"fe\"]},{\"name\":\"Node.Js\",\"icon\":\"/images/aboutUs/tools/node.svg\",\"department\":[\"be\"]},{\"name\":\"Bootstrap\",\"icon\":\"/images/aboutUs/tools/bootstrap.svg\",\"department\":[\"fe\"]},{\"name\":\"JS\",\"icon\":\"/images/aboutUs/tools/JS.svg\",\"department\":[\"fe\"]},{\"name\":\"Angular JS\",\"icon\":\"/images/aboutUs/tools/angular.svg\",\"department\":[\"fe\"]},{\"name\":\"Nuxt.Js\",\"icon\":\"/images/aboutUs/tools/nuxt.svg\",\"department\":[\"be\",\"fe\"]},{\"name\":\".NET\",\"icon\":\"/images/aboutUs/tools/net.svg\",\"department\":[\"be\",\"fe\"]},{\"name\":\"Docker\",\"icon\":\"/images/aboutUs/tools/docker.svg\",\"department\":[\"be\"]},{\"name\":\"Python\",\"icon\":\"/images/aboutUs/tools/python.svg\",\"department\":[\"be\"]},{\"name\":\"Mongo DB\",\"icon\":\"/images/aboutUs/tools/mongo.svg\",\"department\":[\"be\"]},{\"name\":\"jQuery\",\"icon\":\"/images/aboutUs/tools/jQuery.svg\",\"department\":[\"fe\"]},{\"name\":\"Scala\",\"icon\":\"/images/aboutUs/tools/scala.svg\",\"department\":[\"be\",\"fe\"]},{\"name\":\"Ember.js\",\"icon\":\"/images/aboutUs/tools/ember.svg\",\"department\":[\"fe\"]},{\"name\":\"Vue.Js\",\"icon\":\"/images/aboutUs/tools/vue.svg\",\"department\":[\"fe\"]},{\"name\":\"Perl\",\"icon\":\"/images/aboutUs/tools/perl.svg\",\"department\":[\"be\",\"fe\"]},{\"name\":\"MySQL\",\"icon\":\"/images/aboutUs/tools/mySQL.svg\",\"department\":[\"be\"]},{\"name\":\"Gulp\",\"icon\":\"/images/aboutUs/tools/gulp.svg\",\"department\":[\"fe\"]},{\"name\":\"Ruby\",\"icon\":\"/images/aboutUs/tools/ruby.svg\",\"department\":[\"be\",\"fe\"]},{\"name\":\"Flutter\",\"icon\":\"/images/aboutUs/tools/flutter.svg\",\"department\":[\"fe\"]}]");

/***/ }),

/***/ "jMIM":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Industries_wrapper__2LjxB",
	"mainTitle": "Industries_mainTitle__3JzQU",
	"coverCity": "Industries_coverCity__23RMU",
	"gridWrapper": "Industries_gridWrapper__pmyy6",
	"grid": "Industries_grid__3gieu",
	"title": "Industries_title__1oC_u",
	"listItem": "Industries_listItem__3gjRW",
	"icon": "Industries_icon__9sbee",
	"wrapLine": "Industries_wrapLine__hKSGl",
	"line": "Industries_line__2Xd4c",
	"bottomLine": "Industries_bottomLine__LqTVE",
	"divider": "Industries_divider__1r-2E",
	"btn": "Industries_btn__1hHOE"
};


/***/ }),

/***/ "jcgO":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "jwZM":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Ouzo Games\",\"subtitle\":\"Ouzo Games helps mobile game publishers find profitable games effectively using AI. The platform offers a self-serve solution for developers by automating the sorting process. Integrated into the publisher's business process, the platform allows them to find games more accurately, quickly, and with way less investment.\",\"subtitle2\":\"WTT-Solutions offered startup back-end development services to solve the original problem of the customer\",\"list\":[{\"text\":\"Review and verify\"},{\"text\":\"Watch and change details of your tests\"},{\"text\":\"Upload ad creatives\"},{\"text\":\"Make new creatives\"},{\"text\":\"Follow tips regarding formats and sizes\"}]}");

/***/ }),

/***/ "laLd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_export_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9TSj");
/* harmony import */ var next_export_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_export_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tools_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qFTE");
/* harmony import */ var _Tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Tools_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_data_tools_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hZ/p");
var _assets_data_tools_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("hZ/p", 1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_setBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0KOP");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("wJ4g");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











const Tools = ({
  title,
  department = 'all',
  subtitle,
  columnCount = {
    mb: 3,
    tabl: 4,
    desk: 10
  },
  titleClass,
  itemsWrapperClass
}) => {
  const {
    t
  } = Object(next_export_i18n__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])();
  const [query] = Object(next_export_i18n__WEBPACK_IMPORTED_MODULE_1__["useLanguageQuery"])();

  if (!title) {
    title = t('aboutUsTools');
  }

  const toolsDeparment = department === 'all' ? _assets_data_tools_json__WEBPACK_IMPORTED_MODULE_3__ : _assets_data_tools_json__WEBPACK_IMPORTED_MODULE_3__.filter(el => el.department.includes(department));
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper, subtitle && _Tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.withSubtitle),
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h2", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mainTitle, titleClass),
      children: title
    }), subtitle && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h3", {
      className: _Tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.subtitle,
      children: subtitle
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.itemsWrapper, itemsWrapperClass),
      style: {
        gridTemplateColumns: `repeat(${Object(_utils_setBackground__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(columnCount)}, 1fr)`
      },
      children: toolsDeparment.map(({
        name,
        icon
      }, index) => {
        const foundTech = _config_constants__WEBPACK_IMPORTED_MODULE_6__[/* existingTechPages */ "y"].find(el => el.tech.includes(name.toLowerCase()));
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
          className: _Tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item,
          children: foundTech ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
              href: {
                pathname: foundTech.link,
                query: query
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("a", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("div", {
                  className: _Tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inner,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("img", {
                    src: icon,
                    alt: "icon"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {
                    children: name
                  })]
                })
              })
            })
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("div", {
            className: _Tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inner,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("img", {
              src: icon,
              alt: "icon"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {
              children: name
            })]
          })
        }, index);
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Tools);

/***/ }),

/***/ "lwWn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./components/modal/modal.module.scss
var modal_module = __webpack_require__("xTWq");
var modal_module_default = /*#__PURE__*/__webpack_require__.n(modal_module);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./assets/icons/close.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgClose(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    width: 20,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M19.334 2.553L17.447.667 10 8.113 2.554.667.667 2.553 8.114 10 .667 17.447l1.887 1.886L10 11.887l7.447 7.446 1.887-1.886L11.887 10l7.447-7.447z",
    fill: "#CCD1DA"
  })));
}
/* harmony default export */ var icons_close = (SvgClose);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/modal/Modal.js






const ModalComponent = ({
  toggle,
  modal,
  bodyText
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: modal_module_default.a.modal,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_close, {
      onClick: () => toggle()
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      alt: "icon",
      src: "/images/get-started/modalIcon.svg"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: bodyText
    })]
  });
};

/* harmony default export */ var Modal = __webpack_exports__["a"] = (ModalComponent);

/***/ }),

/***/ "mriD":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Router", {
  enumerable: true,
  get: function () {
    return _router.default;
  }
});
Object.defineProperty(exports, "withRouter", {
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
});
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = _interopRequireDefault(__webpack_require__("Sgtc"));

var _routerContext = __webpack_require__("mriD");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "o04+":
/***/ (function(module, exports) {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "ogi8":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Crumbs_wrapper__2SjF0",
	"currentPage": "Crumbs_currentPage__3TL5g"
};


/***/ }),

/***/ "pbeF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const scrollClientsAboutUsBtn = (id, width) => {
  if (!id) return;

  if (width < 1200) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (scrollClientsAboutUsBtn);

/***/ }),

/***/ "pfUk":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "pqM0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__("99J/");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);

// EXTERNAL MODULE: ./components/ReusableComponents/CarouselControls/CarouselControls.module.scss
var CarouselControls_module = __webpack_require__("D6mf");
var CarouselControls_module_default = /*#__PURE__*/__webpack_require__.n(CarouselControls_module);

// EXTERNAL MODULE: ./hooks/useWindowSize.js
var useWindowSize = __webpack_require__("MhZx");

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/ReusableComponents/CarouselControls/CarouselControls.js
const _excluded = ["data", "activeIndex", "next", "previous", "className", "doubledItems", "isShowDash", "tripleItems"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const CarouselControls = _ref => {
  var _rest$carouselState;

  let {
    data,
    activeIndex,
    next,
    previous,
    className,
    doubledItems = false,
    //for reviews on desktop screen
    isShowDash = true,
    tripleItems = false
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    width
  } = Object(useWindowSize["a" /* default */])();
  activeIndex = (_rest$carouselState = rest.carouselState) === null || _rest$carouselState === void 0 ? void 0 : _rest$carouselState.currentSlide;

  const handleDashClick = ({
    target
  }) => {
    rest === null || rest === void 0 ? void 0 : rest.goToSlide(Number(target.id));
  };

  const handlePreviousClick = () => {
    previous();
  };

  const handleNexClick = () => {
    next();
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: external_classnames_default()(CarouselControls_module_default.a.wrapper, className, 'carouselControls'),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      onClick: handlePreviousClick,
      disabled: activeIndex === 0,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/elements/carouselArrow.svg",
        alt: "img",
        className: CarouselControls_module_default.a.leftArrow
      })
    }), isShowDash && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: CarouselControls_module_default.a.dashWrapper,
      children: data.map((_, index) => {
        if (doubledItems) {
          if (index >= data.length - 1) return;
        }

        if (tripleItems) {
          if (index >= data.length - 2) return;
        }

        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          id: index,
          onClick: handleDashClick,
          className: external_classnames_default()(CarouselControls_module_default.a.dash, index === activeIndex && CarouselControls_module_default.a.activeDash)
        }, index);
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      onClick: handleNexClick,
      disabled: doubledItems ? activeIndex === data.length - 2 : tripleItems ? activeIndex === data.length - 3 : activeIndex === data.length - 1,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/elements/carouselArrow.svg",
        alt: "img",
        className: CarouselControls_module_default.a.rightArrow
      })
    })]
  });
};

/* harmony default export */ var CarouselControls_CarouselControls = (CarouselControls);
// CONCATENATED MODULE: ./components/ReusableComponents/Carousel/Carousel.js





const Reviews = ({
  data,
  slides,
  config,
  containerClass,
  className,
  carouselControlsClass,
  doubledItems,
  //for home reviews on desktop
  isShowDash,
  tripleItems,
  //for pages reviews on desktop
  isControls = true
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_multi_carousel_default.a, {
    swipeable: true,
    draggable: false,
    arrows: false,
    infinite: false,
    responsive: config,
    containerClass: containerClass,
    renderButtonGroupOutside: true,
    ssr: true,
    customButtonGroup: isControls ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(CarouselControls_CarouselControls, {
      data: data,
      className: external_classnames_default()(carouselControlsClass),
      doubledItems: doubledItems,
      isShowDash: isShowDash,
      tripleItems: tripleItems
    }) : null,
    className: className,
    centerMode: false,
    children: slides
  });
};

/* harmony default export */ var Carousel = __webpack_exports__["a"] = (Reviews);

/***/ }),

/***/ "q5Ud":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "qFTE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Tools_wrapper__3Ic__",
	"withSubtitle": "Tools_withSubtitle__1UAfT",
	"mainTitle": "Tools_mainTitle__2dXaw",
	"subtitle": "Tools_subtitle__1iLU2",
	"itemsWrapper": "Tools_itemsWrapper__fHMCp",
	"item": "Tools_item__3c_v6",
	"inner": "Tools_inner__ZBbD2"
};


/***/ }),

/***/ "slPS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ArrowWithText_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("PssJ");
/* harmony import */ var _ArrowWithText_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ArrowWithText_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const ArrowWithText = ({
  text,
  link,
  className,
  onClick,
  id = null
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: link ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      href: link,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
        id: id,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_ArrowWithText_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper, className),
        onClick: onClick,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
          className: _ArrowWithText_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
          children: text
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
          className: _ArrowWithText_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img,
          src: "/images/elements/linkArrow.svg",
          alt: "icon"
        })]
      })
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
      id: id,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_ArrowWithText_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper, className),
      onClick: onClick,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        className: _ArrowWithText_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
        onClick: onClick,
        children: text
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
        className: _ArrowWithText_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img,
        src: "/images/elements/linkArrow.svg",
        alt: "icon",
        onClick: onClick
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ArrowWithText);

/***/ }),

/***/ "tvSH":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "WhyUs_wrapper__hmWVE",
	"brackets": "WhyUs_brackets__10RdU",
	"mainTitle": "WhyUs_mainTitle__2ZcWb",
	"subtitle": "WhyUs_subtitle__1NsnI",
	"list": "WhyUs_list__3kuDh",
	"listItem": "WhyUs_listItem__oAQkW",
	"asideRightLine": "WhyUs_asideRightLine__2axDS",
	"asideLeftLine": "WhyUs_asideLeftLine__20-8f"
};


/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vR1E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "next-export-i18n"
var external_next_export_i18n_ = __webpack_require__("9TSj");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/Technologies/components/Crumbs/Crumbs.module.scss
var Crumbs_module = __webpack_require__("ogi8");
var Crumbs_module_default = /*#__PURE__*/__webpack_require__.n(Crumbs_module);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/Technologies/components/Crumbs/Crumbs.js







const Crumbs = () => {
  var _t$find;

  const {
    t
  } = Object(external_next_export_i18n_["useTranslation"])();
  let {
    asPath
  } = Object(router_["useRouter"])();
  const path = asPath.split("?");
  let mainpath = path[0];
  const section = (_t$find = t('menuItems').find(({
    dropdownItems,
    name
  }) => {
    const top = dropdownItems === null || dropdownItems === void 0 ? void 0 : dropdownItems.find(({
      link
    }) => mainpath === link);
    if (top) return name;
  })) === null || _t$find === void 0 ? void 0 : _t$find.name;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Crumbs_module_default.a.wrapper,
    children: [section && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Crumbs_module_default.a.currentPage,
        children: section
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: '/images/elements/crumbsArrow.png',
        alt: "icon"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: Crumbs_module_default.a.currentPage,
      children: mainpath.replace('/', '')
    })]
  });
};

/* harmony default export */ var Crumbs_Crumbs = (Crumbs);
// EXTERNAL MODULE: ./components/Faq/Faq.module.scss
var Faq_module = __webpack_require__("Rv5q");
var Faq_module_default = /*#__PURE__*/__webpack_require__.n(Faq_module);

// CONCATENATED MODULE: ./components/Faq/Faq.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const FAQ = ({
  data,
  width
}) => {
  const {
    t
  } = Object(external_next_export_i18n_["useTranslation"])();
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false
  });

  const toggleCollapse = id => {
    if (width < 1200) {
      setIsOpen(prev => _objectSpread(_objectSpread({}, prev), {}, {
        [`item${id}`]: !isOpen[`item${id}`]
      }));
      return;
    }

    if (id === 2 || id === 4) {
      setIsOpen(prev => _objectSpread(_objectSpread({}, prev), {}, {
        [`item${id}`]: !isOpen[`item${id}`],
        item1: false,
        item3: false,
        item5: false
      }));
    } else if (id === 3) {
      setIsOpen(prev => _objectSpread(_objectSpread({}, prev), {}, {
        [`item${id}`]: !isOpen[`item${id}`],
        item4: false,
        item5: false
      }));
    } else {
      setIsOpen(prev => _objectSpread(_objectSpread({}, prev), {}, {
        [`item${id}`]: !isOpen[`item${id}`],
        item2: false,
        item3: false,
        item4: false
      }));
    }
  };

  const Answer = ({
    question,
    answer,
    id
  }) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Faq_module_default.a.item,
      id: id,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Faq_module_default.a.questionBlock,
        onClick: () => toggleCollapse(id),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Faq_module_default.a.icon,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: !isOpen[`item${id}`] ? '+' : '-'
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: Faq_module_default.a.question,
          children: question
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Collapse"], {
        isOpen: isOpen[`item${id}`],
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Faq_module_default.a.answer,
          dangerouslySetInnerHTML: {
            __html: answer
          }
        })
      })]
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Faq_module_default.a.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: Faq_module_default.a.mainTitle,
      children: t('questions')
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Faq_module_default.a.wrapperQuestions,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: data.map((item, i) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_["Fragment"], {
            children: i <= 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Answer, {
              id: i + 1,
              question: item.question,
              answer: item.answer
            }, i)
          }, i);
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: data.map((item, i) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_["Fragment"], {
            children: i > 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Answer, {
              id: i + 1,
              question: item.question,
              answer: item.answer
            }, i)
          }, i);
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Crumbs_Crumbs, {})]
  });
};

/* harmony default export */ var Faq = __webpack_exports__["a"] = (FAQ);

/***/ }),

/***/ "vnZR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KSbk");
/* harmony import */ var _Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Form_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_elements_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("LjSu");
/* harmony import */ var _components_elements_customButton_customBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("f++f");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const CustomForm = ({
  handleChange,
  btnTitle,
  handleButtonClick,
  data,
  handleSubmit,
  values,
  id,
  formClassName,
  inputClassName,
  errors
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("form", {
    onSubmit: handleSubmit,
    id: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.form, formClassName),
    children: [data.map(({
      name,
      type,
      placeholder,
      required,
      label
    }, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_elements_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        labelText: label,
        name: name,
        placeholder: placeholder,
        required: required,
        type: type,
        className: inputClassName,
        onChange: handleChange,
        value: values[name],
        error: errors && errors[name]
      }, index)
    }, index)), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_elements_customButton_customBtn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      title: btnTitle,
      onClick: handleButtonClick,
      btnType: "submit"
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (CustomForm);

/***/ }),

/***/ "wJ4g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SITE_DOMAIN; });
/* unused harmony export WTT_SOLUTIONS_EMAIL */
/* unused harmony export SENDGRID_API */
/* unused harmony export SENDGRID_API_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SOCIAL_NETWORKS_LINKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GOODFIRMS_LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLUTCH_LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return UPWORK_LINK; });
/* unused harmony export CEO_LINKEDIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return customBtn; });
/* unused harmony export getStartedStepsLabel */
/* unused harmony export getStartedShortSteps */
/* unused harmony export getStartedLongSteps */
/* unused harmony export fadeInUp */
/* unused harmony export CALENDLY_ACTIVE */
/* unused harmony export EMAIL_ACTIVE */
/* unused harmony export PHONE_ACTIVE */
/* unused harmony export CALENDLY_VIEWED */
/* unused harmony export CALENDLY_SELECTED */
/* unused harmony export CALENDLY_SCHEDULED */
/* unused harmony export CUSTOMERS_FROM_ARRAY_SIZE */
/* unused harmony export PORTFOLIO_PAGINATION_STEP */
/* unused harmony export PORTFOLIO_PAGINATION_SLICE_STEP */
/* unused harmony export CLIENTS_NUMBER_ON_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHART_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return WINDOW_SIZE_BREAKPOINTS; });
/* unused harmony export menuItems */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return casesSlidesSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CONTACT_NUMBER_USA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CONTACT_NUMBER_UKRAINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return INTERNATIONAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CONTACT_NUMBER_GERMANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return MAIN_CONTACT_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return COMPANY_STREET_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return COMPANY_ADDRESS_LOCALITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return COMPANY_POSTAL_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return EMAIL_SENDER_URL; });
/* unused harmony export RECAPCHA_SITEKEY */
/* unused harmony export RECAPCHA_SITEKEY_SECRET */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return clutchLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return fuseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return blogFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FORM_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return clientsAboutUsScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return existingTechPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ourWorkFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return authorsPageAndName; });
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TTxv");

const SITE_DOMAIN = 'https://wtt-solutions.com';
const WTT_SOLUTIONS_EMAIL = 'serge.lytvyn@wtt-solutions.com';
const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';
const SENDGRID_API_KEY = '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';
const API_URL = 'https://admin-wtt.herokuapp.com';
const SOCIAL_NETWORKS_LINKS = {
  FACEBOOK: 'https://www.facebook.com/wttsolutions',
  BEHANCE: 'https://www.behance.net/yamaks',
  UPWORK: 'https://www.upwork.com/ag/wttsolutions/',
  LINKEDIN: 'https://www.linkedin.com/company/wtt-solutions',
  TWITTER: 'https://twitter.com/SolutionsWtt'
};
const GOODFIRMS_LINK = 'https://www.goodfirms.co/company/wtt-solutions';
const CLUTCH_LINK = 'https://clutch.co/profile/wtt-solutions';
const UPWORK_LINK = 'https://www.upwork.com/ag/wttsolutions/';
const CEO_LINKEDIN = 'https://www.linkedin.com/in/serge-lytvyn/?originalSubdomain=ua';
const customBtn = {
  LARGE: 'large',
  SMALL: 'small',
  PRIMARY: 'primary',
  OUTLINE: 'outline',
  BUTTON: 'button',
  SUBMIT: 'submit'
};
const getStartedStepsLabel = ['Questions', 'Attachments', 'Contacts'];
const getStartedShortSteps = [1, 2, 3];
const getStartedLongSteps = [1, 2, 3, 4, 5, 6, 7, 8];
const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easing
    }
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easing
    }
  }
};
const CALENDLY_ACTIVE = 'calendlyActive';
const EMAIL_ACTIVE = 'emailActive';
const PHONE_ACTIVE = 'phoneActive';
const CALENDLY_VIEWED = 'calendly.event_type_viewed';
const CALENDLY_SELECTED = 'calendly.date_and_time_selected';
const CALENDLY_SCHEDULED = 'calendly.event_scheduled';
const CUSTOMERS_FROM_ARRAY_SIZE = 4;
const PORTFOLIO_PAGINATION_STEP = 7;
const PORTFOLIO_PAGINATION_SLICE_STEP = 4;
const CLIENTS_NUMBER_ON_PAGE = 20;
const CHART_COLORS = {
  1: '#1ba94c',
  2: '#006621',
  3: '#496d53',
  4: '#186351',
  5: '#00576b',
  6: '#3aafe0',
  7: '#9dd1dc',
  8: '#3aa78d'
};
const WINDOW_SIZE_BREAKPOINTS = {
  LARGE: 1700,
  MEDIUM: 1480,
  HD: 1280,
  TABLET: 805,
  MOBILE: 670,
  SMALL_MOBILE: 488,
  MOBILE_MINI: 400
};
const menuItems = [{
  name: 'Solutions',
  dropdownItems: [{
    name: 'Martech',
    link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().martech
  }, {
    name: 'Edtech',
    link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().edtech
  }, {
    name: 'Hrtech',
    link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().hrtech
  }]
}, {
  name: 'Expertise',
  dropdownItems: [{
    name: 'Platform Development',
    link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().platformDevelopment
  }, {
    name: 'Mobile Development',
    link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mobileDevelopment
  }]
}, {
  name: 'Services',
  dropdownItems: [{
    name: 'Enterprise Development',
    link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().enterpriseDevelopment
  }, {
    name: 'Startups',
    link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().startups
  }, {
    name: 'Frontend Development',
    link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().frontendDevelopment
  }, {
    name: 'Backend Development',
    link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().backendDevelopment
  }, {
    name: 'Blockchain',
    link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().blockchain
  }, {
    name: 'AI services',
    link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().aiServices
  }]
}, {
  name: 'Our Work',
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().ourWork
}, {
  name: 'About Us',
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().aboutUs
}, {
  name: 'Blog',
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('Latest').blog
}, {
  name: 'Get In touch',
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().getStarted
}];
const casesSlidesSequence = [{
  sequence: [1, 2, 3, 4, 7],
  id: 'esimplify'
}, {
  sequence: [1, 2, 6, 7],
  id: 'content-iq'
}, {
  sequence: [1, 2, 3, 4, 7],
  id: 'pitch59'
}, {
  sequence: [1, 2, 3, 4, 7],
  id: 'ouzo'
}, {
  sequence: [1, 2, 3, 4, 6],
  id: 'loan'
}, {
  sequence: [1, 2, 3, 4, 7, 8],
  id: 'luk'
}, {
  sequence: [1, 2, 3, 4, 7],
  id: 'plh'
}, {
  sequence: [1, 2, 3, 4, 7],
  id: 'gmb'
}, {
  sequence: [1, 2, 3, 4, 7],
  id: 'diglog'
}, {
  sequence: [1, 2, 3, 4, 8],
  id: 'amigoes'
}, {
  sequence: [1, 2, 3, 4, 8],
  id: 'paidiem'
}, {
  sequence: [1, 2, 3, 4, 10],
  id: 'forecheck'
}, {
  sequence: [1, 2, 3, 4, 8],
  id: 'wisecube'
}, {
  sequence: [1, 2, 3, 4, 7],
  id: 'knowledge-pillars'
}, {
  sequence: [1, 2, 3, 4, 9],
  id: 'ezydispatch'
}];
const CONTACT_NUMBER_USA = `+1 302.538.9755`;
const CONTACT_NUMBER_UKRAINE = `+380 (67) 223-62-56`;
const INTERNATIONAL = `+1 302.538.9755`;
const CONTACT_NUMBER_GERMANY = `+49 160 1451345`;
const MAIN_CONTACT_EMAIL = 'info@wtt-solutions.com';
const COMPANY_STREET_ADDRESS = '8 The Green, Dover,';
const COMPANY_ADDRESS_LOCALITY = 'Delaware';
const COMPANY_POSTAL_CODE = '19901';
const EMAIL_SENDER_URL = 'https://qy24b9h659.execute-api.eu-central-1.amazonaws.com/default/corp-site-email-sender';
const RECAPCHA_SITEKEY = '6LeXPBoaAAAAAI3x_A_DS_aJ_ZjV2iDS6kIvtgMR';
const RECAPCHA_SITEKEY_SECRET = '6LeXPBoaAAAAAGnU5tx2LooBMiKMsFHOoHkZvQU_';
const clutchLinks = {
  griot: 'https://clutch.co/profile/wtt-solutions',
  pitchcard: 'https://clutch.co/profile/wtt-solutions#review-1422723',
  lpors: 'https://clutch.co/profile/wtt-solutions#review-1197665'
};
const fuseOptions = {
  includeMatches: true,
  findAllMatches: true,
  useExtendedSearch: true,
  keys: ['title', 'text']
};
const blogFilters = [{
  name: 'all',
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().blog,
  metaTitle: 'Custom Software Development Company Blog'
}, {
  name: 'martech',
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('martech').blogCategory
}, {
  name: 'edtech',
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('edtech').blogCategory
}, {
  name: 'hrtech',
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('hrtech').blogCategory
}, {
  name: 'design',
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('design').blogCategory
}, {
  name: 'insights',
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('insights').blogCategory
}];
const FORM_NAMES = {
  GET_IN_TOUCH_FORM: 'getInTouchForm',
  BLOG_ARTICLE_FORM: 'blogArticleForm',
  PAGES_FORM: 'pagesForm'
};
const clientsAboutUsScroll = {
  home: {
    reviewComponentID: 'homeReviews',
    slide: 2,
    buttonScrollID: 'scrollToHomeReviews'
  },
  platformDevelopment: {
    reviewComponentID: 'platformDevelopmentReviews',
    slide: 2,
    buttonScrollID: 'scrollToPlatformDevelopmentReviews'
  },
  aboutUs: {
    reviewComponentID: 'aboutUsReviews',
    slide: 2,
    buttonScrollID: 'scrollToAboutUsReviews'
  },
  mobileDevelopment: {
    reviewComponentID: 'mobileDevelopmentReviews',
    slide: 2,
    buttonScrollID: 'scrollToMobileDevelopmentReviews'
  },
  backendDevelopment: {
    reviewComponentID: 'backendDevelopmentReviews',
    slide: 2,
    buttonScrollID: 'scrollToBackendDevelopmentReviews'
  },
  enterpriseDevelopment: {
    reviewComponentID: 'enterpriseDevelopmentReviews',
    slide: 2,
    buttonScrollID: 'scrollToEnterpriseDevelopmentReviews'
  },
  frontendDevelopment: {
    reviewComponentID: 'frontendDevelopmentReviews',
    slide: 2,
    buttonScrollID: 'scrollTofrontendDevelopmentReviews'
  },
  startups: {
    reviewComponentID: 'startupsReviews',
    slide: 2,
    buttonScrollID: 'scrollToStartupsReviews'
  },
  edtech: {
    reviewComponentID: 'edtechReviews',
    slide: 4,
    buttonScrollID: 'scrollToEdtechReviews'
  },
  martech: {
    reviewComponentID: 'martechReviews',
    slide: 5,
    buttonScrollID: 'scrollToMartechReviews'
  },
  hrtech: {
    reviewComponentID: 'hrtechReviews',
    slide: 2,
    buttonScrollID: 'scrollToHrtechReviews'
  },
  blockchain: {
    reviewComponentID: 'blockchainReviews',
    slide: 2,
    buttonScrollID: 'scrollToBlockchainReviews'
  },
  aiServices: {
    reviewComponentID: 'aiServicesReviews',
    slide: 2,
    buttonScrollID: 'scrollToAiServicesReviews'
  }
};
const existingTechPages = [{
  tech: ['react', 'react.js'],
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().react
}, {
  tech: ['node.js', 'nodejs'],
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().node
}, {
  tech: ['vue.js', 'vuejs', 'vue'],
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().vue
}, {
  tech: ['flutter.js', 'flutterjs', 'flutter'],
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().flutter
}, {
  tech: ['.net', 'net'],
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().net
}, {
  tech: ['angular', 'angular.js', 'angular js'],
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().angular
}];
const ourWorkFilters = ['all', 'HR', 'Education', 'HealthCare', 'Computer Software', 'Financial services', 'Marketing & Advertising'];
const authorsPageAndName = [{
  name: 'Serge Lytvyn',
  link: Object(_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().ceoBio
}];

/***/ }),

/***/ "xTWq":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "modal_modal__2c4cG"
};


/***/ }),

/***/ "xirb":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zNKW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next-export-i18n"
var external_next_export_i18n_ = __webpack_require__("9TSj");

// EXTERNAL MODULE: ./components/Scroll/Scroll.jsx + 7 modules
var Scroll = __webpack_require__("e5fm");

// EXTERNAL MODULE: ./components/Scroll/ScrollSection.jsx
var ScrollSection = __webpack_require__("gvAc");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/BackendDevelopment/Services/Services.module.scss
var Services_module = __webpack_require__("NlVh");
var Services_module_default = /*#__PURE__*/__webpack_require__.n(Services_module);

// EXTERNAL MODULE: ./config/routing.js
var routing = __webpack_require__("TTxv");

// EXTERNAL MODULE: ./components/_elements/customButton/customBtn.js
var customBtn = __webpack_require__("f++f");

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/BackendDevelopment/Services/Services.js








const Services = ({
  data
}) => {
  const {
    t
  } = Object(external_next_export_i18n_["useTranslation"])();
  const [query] = Object(external_next_export_i18n_["useLanguageQuery"])();
  const {
    title,
    list
  } = data;
  const buttonStyle = {
    whiteSpace: 'normal',
    wordWrap: 'break-word'
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Services_module_default.a.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: Services_module_default.a.mainTitle,
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Services_module_default.a.list,
      children: [list.map((el, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Services_module_default.a.listItem,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: el.img,
            alt: "icon"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            children: el.title
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: el.text
        })]
      }, index)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: {
          pathname: Object(routing["a" /* default */])().getStarted,
          query: query
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Services_module_default.a.btn,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(customBtn["a" /* default */], {
            title: t('needTeamBackendExperts'),
            btnType: "button",
            buttonStyle: buttonStyle
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var Services_Services = (Services);
// EXTERNAL MODULE: ./components/BackendDevelopment/Industries/Industries.module.scss
var Industries_module = __webpack_require__("jMIM");
var Industries_module_default = /*#__PURE__*/__webpack_require__.n(Industries_module);

// CONCATENATED MODULE: ./components/BackendDevelopment/Industries/Industries.js








const IndustriesWeServe = ({
  data,
  width
}) => {
  const {
    t
  } = Object(external_next_export_i18n_["useTranslation"])();
  const [query] = Object(external_next_export_i18n_["useLanguageQuery"])();
  const {
    title,
    reasons
  } = data;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Industries_module_default.a.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: Industries_module_default.a.mainTitle,
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Industries_module_default.a.gridWrapper,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Industries_module_default.a.coverCity
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Industries_module_default.a.grid,
        children: reasons.map((el, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            style: {
              marginTop: `${width >= 1200 ? el.positionDesk : width >= 768 ? el.positionTabl : el.position}vh`
            },
            className: Industries_module_default.a.listItem,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: el.img,
              alt: "icon",
              className: Industries_module_default.a.icon
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: el.text
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: Industries_module_default.a.wrapLine,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: Industries_module_default.a.line
              })
            })]
          }, index);
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: {
          pathname: Object(routing["a" /* default */])().getStarted,
          query: query
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Industries_module_default.a.btn,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(customBtn["a" /* default */], {
            title: t('getInTouch'),
            btnType: "button"
          })
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Industries_module_default.a.bottomLine
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Industries_module_default.a.divider
    })]
  });
};

/* harmony default export */ var Industries = (IndustriesWeServe);
// EXTERNAL MODULE: ./components/ReusableComponents/Tools/Tools.js
var Tools = __webpack_require__("laLd");

// EXTERNAL MODULE: ./components/BackendDevelopment/Technologies/Technologies.module.scss
var Technologies_module = __webpack_require__("7jmx");
var Technologies_module_default = /*#__PURE__*/__webpack_require__.n(Technologies_module);

// CONCATENATED MODULE: ./components/BackendDevelopment/Technologies/Technologies.js





const Technologies = () => {
  const {
    t
  } = Object(external_next_export_i18n_["useTranslation"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tools["a" /* default */], {
    title: t('CBDTechnologiesTitle'),
    department: "be",
    columnCount: {
      mb: 3,
      tabl: 4,
      desk: 5
    },
    subtitle: t('CBDTechnologiesSubtitle'),
    titleClass: Technologies_module_default.a.title
  });
};

/* harmony default export */ var Technologies_Technologies = (Technologies);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// EXTERNAL MODULE: ./utils/setBackground.js
var setBackground = __webpack_require__("0KOP");

// EXTERNAL MODULE: ./components/BackendDevelopment/WhyUs/WhyUs.module.scss
var WhyUs_module = __webpack_require__("tvSH");
var WhyUs_module_default = /*#__PURE__*/__webpack_require__.n(WhyUs_module);

// CONCATENATED MODULE: ./components/BackendDevelopment/WhyUs/WhyUs.js






const WhyUs = ({
  data
}) => {
  const {
    title,
    subtitle,
    list
  } = data;
  const bgImage = {
    mb: '/images/backend-development/whyUs/bgMob.png',
    tabl: '/images/backend-development/whyUs/bgTabl.png',
    desk: '/images/backend-development/whyUs/bgDesk.png'
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: WhyUs_module_default.a.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
      layout: "fill",
      src: Object(setBackground["a" /* default */])(bgImage),
      alt: "img",
      quality: 100
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: WhyUs_module_default.a.asideRightLine
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: WhyUs_module_default.a.asideLeftLine
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: WhyUs_module_default.a.mainTitle,
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      className: WhyUs_module_default.a.subtitle,
      children: subtitle
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: WhyUs_module_default.a.list,
      children: [list.map((el, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: WhyUs_module_default.a.listItem,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: el.icon,
            alt: "icon"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            className: WhyUs_module_default.a.title,
            children: el.subTitle
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: WhyUs_module_default.a.title,
          children: el.text
        })]
      }, index)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: WhyUs_module_default.a.brackets,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
          layout: "fill",
          src: '/images/backend-development/whyUs/brackets.png',
          alt: "img",
          quality: 100
        })
      })]
    })]
  });
};

/* harmony default export */ var WhyUs_WhyUs = (WhyUs);
// EXTERNAL MODULE: ./components/BackendDevelopment/Ouzo/Ouzo.module.scss
var Ouzo_module = __webpack_require__("DArJ");
var Ouzo_module_default = /*#__PURE__*/__webpack_require__.n(Ouzo_module);

// EXTERNAL MODULE: ./config/constants.js
var constants = __webpack_require__("wJ4g");

// CONCATENATED MODULE: ./components/BackendDevelopment/Ouzo/Ouzo.js











const Ouzo = ({
  data
}) => {
  const {
    t
  } = Object(external_next_export_i18n_["useTranslation"])();
  const [query] = Object(external_next_export_i18n_["useLanguageQuery"])();
  const {
    title,
    subtitle,
    subtitle2,
    list
  } = data;
  const {
    OUTLINE
  } = constants["x" /* customBtn */];
  const buttonStyle = {
    whiteSpace: 'normal',
    wordWrap: 'break-word'
  };
  const compImage = {
    mb: '/images/backend-development/ouzo/compMob.png',
    tabl: '/images/backend-development/ouzo/compTabl.png',
    desk: '/images/backend-development/ouzo/compDesk.png'
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Ouzo_module_default.a.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: Ouzo_module_default.a.mainTitle,
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Ouzo_module_default.a.contentWrapper,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: Ouzo_module_default.a.subtitle,
        children: subtitle
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Ouzo_module_default.a.list,
        children: list.map((el, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: Ouzo_module_default.a.listItem,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              className: Ouzo_module_default.a.icon,
              buttonStyle: true,
              src: "/images/elements/listBullet.svg",
              alt: "icon"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: el.text
            })]
          }, index);
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Ouzo_module_default.a.absluteDesk,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Ouzo_module_default.a.relativeDesk,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            layout: "fill",
            src: Object(setBackground["a" /* default */])(compImage),
            alt: "img",
            quality: 100
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Ouzo_module_default.a.bottomText,
        children: subtitle2
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Ouzo_module_default.a.buttons,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: {
            pathname: Object(routing["a" /* default */])('ouzo').ourWorkCase,
            query: query
          },
          as: {
            pathname: Object(routing["a" /* default */])('ouzo').ourWorkCase,
            query: query
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Ouzo_module_default.a.btn,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(customBtn["a" /* default */], {
              title: t('btnMoreDetails')
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: {
            pathname: Object(routing["a" /* default */])().ourWork,
            query: query
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Ouzo_module_default.a.btn,
            buttonStyle: true,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(customBtn["a" /* default */], {
              title: t('seeAllCases'),
              type: OUTLINE,
              buttonStyle: buttonStyle
            })
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var Ouzo_Ouzo = (Ouzo);
// EXTERNAL MODULE: ./components/ReusableComponents/Reviews/Reviews.js + 1 modules
var Reviews = __webpack_require__("7bSg");

// EXTERNAL MODULE: ./components/ReusableComponents/CTA/CTA.js
var CTA = __webpack_require__("E0DC");

// EXTERNAL MODULE: ./components/BackendDevelopment/Header/Header.module.scss
var Header_module = __webpack_require__("SEFy");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// EXTERNAL MODULE: ./components/ReusableComponents/ArrowWithText/ArrowWithText.js
var ArrowWithText = __webpack_require__("slPS");

// EXTERNAL MODULE: ./utils/userAgent.js
var userAgent = __webpack_require__("EZkr");

// EXTERNAL MODULE: ./utils/scrollClientsAboutUsBtn.js
var scrollClientsAboutUsBtn = __webpack_require__("pbeF");

// CONCATENATED MODULE: ./components/BackendDevelopment/Header/Header.js














const Header = ({
  width
}) => {
  const {
    t
  } = Object(external_next_export_i18n_["useTranslation"])();
  const [query] = Object(external_next_export_i18n_["useLanguageQuery"])();
  const bgImages = {
    mb: '/images/backend-development/header/bgMob.png',
    tabl: '/images/backend-development/header/bgTabl.png',
    desk: '/images/backend-development/header/bgDesk.jpg'
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Header_module_default.a.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
      layout: "fill",
      src: Object(setBackground["a" /* default */])(bgImages),
      alt: "img",
      priority: Object(userAgent["a" /* userAgent */])(),
      quality: 100
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Header_module_default.a.linksWrapper,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrowWithText["a" /* default */], {
        link: {
          pathname: Object(routing["a" /* default */])().ourWork,
          query: query
        },
        text: t('ourCases')
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrowWithText["a" /* default */], {
        text: t('clientsAboutUs'),
        id: constants["v" /* clientsAboutUsScroll */].frontendDevelopment.buttonScrollID,
        onClick: () => Object(scrollClientsAboutUsBtn["a" /* default */])(constants["v" /* clientsAboutUsScroll */].frontendDevelopment.reviewComponentID, width)
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      className: Header_module_default.a.title,
      dangerouslySetInnerHTML: {
        __html: t('backendTitle')
      }
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: {
        pathname: Object(routing["a" /* default */])().getStarted,
        query: query
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Header_module_default.a.btn,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(customBtn["a" /* default */], {
          title: t('getInTouch'),
          btnType: "button"
        })
      })
    })]
  });
};

/* harmony default export */ var Header_Header = (Header);
// EXTERNAL MODULE: ./components/Faq/Faq.js + 1 modules
var Faq = __webpack_require__("vR1E");

// EXTERNAL MODULE: ./assets/data/backend-development/faq.json
var faq = __webpack_require__("YP82");

// EXTERNAL MODULE: ./assets/data/backend-development/services.json
var backend_development_services = __webpack_require__("VimR");

// EXTERNAL MODULE: ./assets/data/backend-development/industries.json
var backend_development_industries = __webpack_require__("0Oyr");

// EXTERNAL MODULE: ./assets/data/backend-development/whyUs.json
var backend_development_whyUs = __webpack_require__("FhS1");

// EXTERNAL MODULE: ./assets/data/backend-development/ouzo.json
var backend_development_ouzo = __webpack_require__("jwZM");

// EXTERNAL MODULE: ./assets/data/backend-development/reviews.json
var backend_development_reviews = __webpack_require__("CUol");

// EXTERNAL MODULE: ./config/metadata.js
var metadata = __webpack_require__("MRCQ");

// EXTERNAL MODULE: ./hooks/useWindowSize.js
var useWindowSize = __webpack_require__("MhZx");

// CONCATENATED MODULE: ./pages/backend-development/index.js

























function Index() {
  const {
    t
  } = Object(external_next_export_i18n_["useTranslation"])();
  const services = t('backend.services');
  const industries = t('backend.industries');
  const whyUs = t('backend.whyUs');
  const ouzo = t('backend.ouzo');
  const reviews = t('backend.reviews');
  const faqData = t('backend.faqData');
  const {
    width
  } = Object(useWindowSize["a" /* default */])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Scroll["a" /* default */], {
    titles: [t('backendTitle').replace(/<\/?[^>]+>/gi, ''), t('backend.services.title'), t('testimonials'), t('backend.industries.title'), t('backend.ouzo.title'), t('CBDTechnologiesTitle'), t('backend.whyUs.title'), t('CTATitle'), t('questions')],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: metadata["a" /* meta */].backendDevelopmentTitle
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: metadata["a" /* meta */].backendDevelopmentDescription
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header_Header, {
        width: width
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Services_Services, {
        data: services,
        width: width
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Reviews["a" /* default */], {
        data: reviews,
        width: width,
        id: constants["v" /* clientsAboutUsScroll */].backendDevelopment.reviewComponentID,
        title: t('testimonials')
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Industries, {
        data: industries,
        width: width
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Ouzo_Ouzo, {
        data: ouzo
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Technologies_Technologies, {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(WhyUs_WhyUs, {
        data: whyUs
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CTA["default"], {
        CTATitle: t('CTATitle')
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Faq["a" /* default */], {
        data: faqData,
        width: width
      })
    })]
  });
}

async function getServerSideProps() {
  return {
    props: {
      services: backend_development_services,
      industries: backend_development_industries,
      whyUs: backend_development_whyUs,
      ouzo: backend_development_ouzo,
      reviews: backend_development_reviews,
      faqData: faq
    }
  };
}
/* harmony default export */ var backend_development = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });