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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/bea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// EXTERNAL MODULE: ./components/OurWork/TabsContent/tabsContent.module.scss
var tabsContent_module = __webpack_require__("LSR7");
var tabsContent_module_default = /*#__PURE__*/__webpack_require__.n(tabsContent_module);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/_elements/customButton/customBtn.js
var customBtn = __webpack_require__("f++f");

// EXTERNAL MODULE: ./config/en.js
var en = __webpack_require__("ar21");

// CONCATENATED MODULE: ./utils/imageShimmer.js
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
  <linearGradient id="g">
  <stop stop-color="#213133" offset="20%" />
  <stop stop-color="#1d2829" offset="50%" />
  <stop stop-color="#213133" offset="70%" />
</linearGradient>
</defs>
<rect width="${w}" height="${h}" fill="#213133" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
const toBase64 = str => true ? Buffer.from(str).toString('base64') : undefined;
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./config/routing.js
var routing = __webpack_require__("TTxv");

// EXTERNAL MODULE: ./components/ReusableComponents/Filters/Filters.js
var Filters = __webpack_require__("6uNb");

// EXTERNAL MODULE: ./hooks/useWindowSize.js
var useWindowSize = __webpack_require__("MhZx");

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/OurWork/TabsContent/TabContent.js














const TabContent = ({
  content
}) => {
  const {
    width
  } = Object(useWindowSize["a" /* default */])();

  const setBackground = backgrounds => {
    if (width < 768) {
      return backgrounds['mb'] ? backgrounds['mb'] : backgrounds['tabl'];
    }

    if (width >= 768 && width < 1200) return backgrounds['tabl'];
    if (width >= 1200) return backgrounds['desk'];
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: tabsContent_module_default.a.tabContentWrapper,
    children: content.map(item => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/our-work/[id]",
        as: Object(routing["a" /* default */])(item.id).ourWorkCase,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: external_classnames_default()(tabsContent_module_default.a.sectionWrapper),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            className: tabsContent_module_default.a.titleHidden,
            children: item.title
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            className: tabsContent_module_default.a.subtitle,
            children: item.subtitle
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: tabsContent_module_default.a.imgWrapper,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
              layout: "fill",
              quality: 75,
              className: tabsContent_module_default.a.img,
              src: setBackground(item.images),
              alt: item.title,
              placeholder: "blur",
              blurDataURL: `data:image/svg+xml;base64,${toBase64(shimmer(100, 70))}`
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Filters["a" /* default */], {
            technologies: item.technologies,
            expertise: item.expertise,
            wrapperClassName: tabsContent_module_default.a.filters
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: tabsContent_module_default.a.bottomWrapper,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: tabsContent_module_default.a.title,
              children: item.mainPageTitle ? item.mainPageTitle : item.title
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/our-work/[id]",
              as: Object(routing["a" /* default */])(item.id).ourWorkCase,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(customBtn["a" /* default */], {
                link: Object(routing["a" /* default */])(item.id).ourWorkCase,
                title: en["a" /* en */].btnMoreDetails,
                type: "outline",
                size: width < 756 ? 'small' : 'large'
              })
            })]
          })]
        })
      }, item.id);
    })
  });
};

/* harmony default export */ var TabsContent_TabContent = (TabContent);
// EXTERNAL MODULE: ./components/OurWork/NotResults/NotResults.module.scss
var NotResults_module = __webpack_require__("XY7h");
var NotResults_module_default = /*#__PURE__*/__webpack_require__.n(NotResults_module);

// CONCATENATED MODULE: ./components/OurWork/NotResults/NotResults.js





const NotResults = ({
  setActiveFilter
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: NotResults_module_default.a.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "/images/our-work/notResults.svg",
      alt: "icon",
      className: NotResults_module_default.a.icon
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      children: [en["a" /* en */].ourWorkNotResults, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        onClick: () => setActiveFilter('all'),
        children: "See All cases"
      })]
    })]
  });
};

/* harmony default export */ var NotResults_NotResults = (NotResults);
// EXTERNAL MODULE: ./components/IndustriesFilter/IndustriesFilter.js
var IndustriesFilter = __webpack_require__("Z1Kv");

// EXTERNAL MODULE: ./components/ReusableComponents/CTA/CTA.js
var CTA = __webpack_require__("E0DC");

// EXTERNAL MODULE: ./config/constants.js
var constants = __webpack_require__("wJ4g");

// EXTERNAL MODULE: ./config/metadata.js
var metadata = __webpack_require__("MRCQ");

// EXTERNAL MODULE: ./assets/data/ourWorkCases.json
var ourWorkCases = __webpack_require__("kePR");

// EXTERNAL MODULE: ./styles/pages/ourWork.module.scss
var ourWork_module = __webpack_require__("7/EP");
var ourWork_module_default = /*#__PURE__*/__webpack_require__.n(ourWork_module);

// CONCATENATED MODULE: ./pages/our-work/index.js















const Portfolio = ({
  cases
}) => {
  const {
    ourWorkTitle,
    ourWorkDescription
  } = metadata["a" /* meta */];
  const {
    0: activeFilter,
    1: setActiveFilter
  } = Object(external_react_["useState"])('all');
  const foundLength = Object(external_react_["useCallback"])(type => {
    if (type === 'all') {
      return cases.length;
    } else {
      return cases.filter(item => {
        return item.expertise.find(el => el.toLowerCase() === type.toLowerCase());
      }).length;
    }
  }, [cases]);
  const filteredCases = Object(external_react_["useMemo"])(() => {
    if (activeFilter === 'all') {
      return cases;
    } else {
      return cases.filter(item => {
        return item.expertise.find(el => el.toLowerCase() === activeFilter.toLowerCase());
      });
    }
  }, [activeFilter]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: ourWorkTitle
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: ourWorkDescription
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: ourWork_module_default.a.rightDivider
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: ourWork_module_default.a.leftDivider
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ourWork_module_default.a.portfolioWrapper,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: ourWork_module_default.a.headerWrapper,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: ourWork_module_default.a.title,
          children: en["a" /* en */].ourWorkTitle
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(IndustriesFilter["a" /* default */], {
          foundLength: foundLength,
          activeFilter: activeFilter,
          filterArray: constants["A" /* ourWorkFilters */],
          setActiveFilter: setActiveFilter
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TabsContent_TabContent, {
        content: filteredCases
      })]
    }), !filteredCases.length && /*#__PURE__*/Object(jsx_runtime_["jsx"])(NotResults_NotResults, {
      setActiveFilter: setActiveFilter
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CTA["default"], {
      CTATitle: en["a" /* en */].CTATitle,
      inputClass: ourWork_module_default.a.CTAWrapper
    })]
  });
};

async function getServerSideProps() {
  return {
    props: {
      cases: ourWorkCases
    }
  };
}
/* harmony default export */ var our_work = __webpack_exports__["default"] = (Portfolio);

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

/***/ "1IPs":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/bea");


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

/***/ "2tlT":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "6uNb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_export_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9TSj");
/* harmony import */ var next_export_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_export_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Filters_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7ki8");
/* harmony import */ var _Filters_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Filters_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wJ4g");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const Filters = ({
  expertise,
  technologies,
  wrapperClassName
}) => {
  const {
    t
  } = Object(next_export_i18n__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])();
  const [query] = Object(next_export_i18n__WEBPACK_IMPORTED_MODULE_1__["useLanguageQuery"])();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(wrapperClassName, _Filters_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper),
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", {
        className: _Filters_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerTitle,
        children: t('expertise1')
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        className: _Filters_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerFilters,
        children: expertise.map((name, idx) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Filters_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.filter),
          children: name
        }, idx))
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", {
        className: _Filters_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerTitle,
        children: t('technologies')
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Filters_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerFilters, _Filters_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerFilters2),
        children: technologies.map((name, idx) => {
          const foundTech = _config_constants__WEBPACK_IMPORTED_MODULE_4__[/* existingTechPages */ "y"].find(({
            tech
          }) => tech.includes(name.toLowerCase()));

          if (foundTech) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
              href: {
                pathname: foundTech.link,
                query: query
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Filters_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.filter),
                children: name
              })
            }, idx);
          }

          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Filters_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.filter),
            children: name
          }, idx);
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Filters);

/***/ }),

/***/ "7/EP":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"portfolioWrapper": "ourWork_portfolioWrapper__1FHOI",
	"rightDivider": "ourWork_rightDivider__hJcEI",
	"leftDivider": "ourWork_leftDivider__1DUJ_",
	"headerWrapper": "ourWork_headerWrapper__2Xcuz",
	"title": "ourWork_title__3nuHM",
	"CTAWrapper": "ourWork_CTAWrapper__1Grb2"
};


/***/ }),

/***/ "7ki8":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Filters_wrapper__1mdzn",
	"innerTitle": "Filters_innerTitle__ETOfX",
	"innerFilters": "Filters_innerFilters__2DJAB",
	"innerFilters2": "Filters_innerFilters2__26WXc",
	"filter": "Filters_filter__DIINb"
};


/***/ }),

/***/ "8j2J":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/to-base-64.js");

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

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

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

/***/ "LSR7":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tabContentWrapper": "tabsContent_tabContentWrapper__3zlXH",
	"sectionWrapper": "tabsContent_sectionWrapper__2uSqr",
	"subtitle": "tabsContent_subtitle__2gNOm",
	"imgWrapper": "tabsContent_imgWrapper__1UO7t",
	"img": "tabsContent_img__2FzI4",
	"filters": "tabsContent_filters__2Nce5",
	"bottomWrapper": "tabsContent_bottomWrapper__OhOy_",
	"title": "tabsContent_title__2fAC0",
	"titleHidden": "tabsContent_titleHidden__2laBk"
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

/***/ "OOzg":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"filters": "IndustriesFilter_filters__3fism",
	"filter": "IndustriesFilter_filter__uu0gA",
	"filterActive": "IndustriesFilter_filterActive__2M_f4"
};


/***/ }),

/***/ "OfkW":
/***/ (function(module, exports) {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "Qx0H":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

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

/***/ "XY7h":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "NotResults_wrapper__21Vkt"
};


/***/ }),

/***/ "XgOf":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z1Kv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _IndustriesFilter_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OOzg");
/* harmony import */ var _IndustriesFilter_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_IndustriesFilter_module_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const IndustriesFilter = ({
  activeFilter,
  filterArray,
  setActiveFilter,
  foundLength,
  className
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_IndustriesFilter_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.filters, className),
    children: filterArray.map(filter => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
      onClick: () => setActiveFilter(filter),
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_IndustriesFilter_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.filter, activeFilter === filter && _IndustriesFilter_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.filterActive),
      children: `${filter} (${foundLength(filter)})`
    }, filter))
  });
};

/* harmony default export */ __webpack_exports__["a"] = (IndustriesFilter);

/***/ }),

/***/ "ar21":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return en; });
const en = {
  mainTitle: 'WTT Solutions',
  //general
  CTATitle: 'Here’s how you can get in touch',
  CTATitle2: 'Tell us about your project!',
  getInTouch: 'Get in touch',
  getStarted: 'Get Started',
  btnMoreDetails: 'Read more',
  howWeWork: 'How we work',
  successStories: 'Success Stories',
  //home page
  homeDescription: 'We make complex solutions for business, as well as integration with products from leading global brands. Our solutions are made to make your business work better.',
  makeYour: 'Make your',
  teches: ['MarTech', 'EdTech', 'HRTech'],
  companies: 'more profitable with a reliable tech partner',
  ourCases: 'Our cases',
  clientsAboutUs: 'Clients about us',
  //footer
  wttSolutions: 'WTT SOLUTIONS',
  findUs: 'Find us',
  usa: 'USA',
  israel: 'Israel',
  ukraine: 'Ukraine',
  germany: 'Germany',
  international: 'International',
  australia: 'Australia',
  usAddressTitle: 'US address',
  ukraineAddressTitle: 'Ukraine address',
  usAddress: '8 The Green, Dover, Delaware 19901',
  ukraineAddress: '32 Paladina Avenue, Kyiv 03142',
  aboutWtt: 'About WTT Solutions',
  expertise: 'SOLUTIONS & EXPERTISE',
  marTech: 'MarTech',
  edTech: 'EdTech',
  hrTech: 'HRTech',
  platformsDevelopment: 'Platforms Development',
  userManagement: 'User Management',
  bigData: 'Big Data and AI',
  ml: 'BI and ML',
  services: 'SERVICES',
  enterpriseSoftwareDevelopment: 'Enterprise',
  startups: 'Startups',
  frontendDevelopment: 'Frontend Development',
  discovery: 'Discovery',
  ui: 'UI/UX',
  maintenanceAndSupport: 'Maintenance and support',
  productDevelopment: 'Product Development',
  backendDevelopment: 'Backend Development',
  technologies: 'TECHNOLOGIES',
  webDevelopment: 'Web Development',
  mobileDevelopment: 'Mobile Development',
  flutter: 'Flutter',
  react: 'React',
  angular: 'Angular',
  net: '.Net',
  vue: 'Vue.Js',
  node: 'Node.Js',
  mobilePlatforms: 'Mobile Platforms',
  copyright: 'Copyright 2016 – ',
  allRights: '© WTT Solutions. All rights reserved.',
  //AboutUs
  aboutUs: 'The return on investment you can expect from our work',
  aboutUsDescription: "We're not just talking about great products. We make them together with our clients.",
  link1: 'Our cases',
  link2: 'Clients about us',
  askUsNowBtn: 'Ask us how?',
  whoWeAre: 'Who we are',
  whoWeAreDescription: 'We comprehend the logic of endorsing business online and make use of the best tactics to grow your revenue, conversions, and leads with our solutions. Based on your needs we will become your technical partner or provide a dedicated development team.',
  aboutUsOurCustomers: 'We help a wide range of industries design and develop customized software solutions best suited to their product and business goals.',
  aboutUsTools: 'Languages, tools, and frameworks',
  customersFromDescriptions: "We are a group of software experts who have delivered world-class solutions to businesses of all shapes and sizes. Starting with UX/UI design for web development and mobile design for mobile applications we provide an excellent experience for our customers. Full-stack development, front-end development, back-end development are our strengths. We understand that different businesses have different needs - so we adapt to you. Whether you're a small or medium enterprise or in the Fortune 500, we tailor our approach to you to ensure that you get exactly the solution you need and that the entire process is efficient and easy.",
  viewInPortfolio: 'View in portfolio',
  ourClientAreMarketers: '60% OF OUR CLIENTS ARE MARKETERS',
  show: 'Show',
  more: 'more',
  aboutUsReviewsTitle: 'We Cover a Wide Marketing Technology Development Stack',
  aboutUsSubtitle: 'INDUSTRY RECOGNITION',
  aboutUsCTATitle: 'Let’s make something great together',
  aboutUsCTAMTopTitle: 'You have a vision.<br />We have a way to turn it into a working business',
  aboutUSBlockProcent: '100%',
  aboutUSBlockCount: '100+',
  aboutUSBlockBusiness: 'Your Growth Business',
  aboutUSBlockLabirint: 'Completed Projects',
  aboutUSBlockPersona: 'Satisfied Clients',
  aboutUSBlockDocument: 'Clients Testimonials',
  //home04(Business Tasks)
  businessTasksWeSolved: 'BUSINESS PAINS WE’VE SOLVED',
  businessTasksDescription: 'Our experienced analysts, full-stack engineers, digital marketers, and UI/UX designers team up to guide you through increasing the profit of your business.',
  ourServices: 'Looking for Reliable Custom Software Development Services?',
  // home05 reviews
  askNow: 'ASK NOW',
  clientsSay: 'What our clients are saying',
  readMoreOn: 'Read more references on:',
  youCanAskForRef: 'You can ask for the references in your country',
  viewFull: 'View full review',
  testimonials: 'Testimonials',
  //home06
  mvp: 'MVP',
  weCanHelpWith: 'WE CAN HELP YOU WITH',
  enterpiseSolutions: 'ENTRPRISE SOLUTIONS',
  productScaling: 'PRODUCT SCALING',
  productPrototype: 'PRODUCT PROTOTYPING',
  //home Case Study
  caseStudy: 'Case Study',
  //home page video
  homePageVideoTitle: "your project's creating start here",
  //404 page-not-found
  pageNotFound: "Sorry this page isn't available",
  goToHomePage: 'Go to home page',
  // our-work
  ourWorkTitle: 'Our Work',
  casesSidebarItems1: ['The vision & challenge', 'Business Outcomes', 'Impact', 'Tech stack and team'],
  casesSidebarItems2: ['The vision', 'Challenge', 'Business Outcomes', 'Impact', 'Tech stack and team'],
  casesSidebarItems3: ['The vision', 'Challenge', 'Business Outcomes', 'Impact', 'Review', 'Tech stack and team'],
  ourWorkNotResults: 'While we are working really hard to add content to this tab, please, check out our other cases in',
  //cases
  techTitle: 'Tech stack and team',
  techDescription: 'We use cutting edge technologies to build unique, flawless, and robust solutions.',
  teamTitle: 'Team',
  techStackTitle: 'Tech stack',
  seeAllCases: 'See all cases',
  caseVision: 'The vision',
  caseChallenge: 'The challenge',
  caseOutcomes: 'Business Outcomes',
  casesImpact: 'Impact',
  ownSolution: 'start your own solution',
  // martech
  martechTitle: 'Increase sales, optimize work processes and grow customer retention with next-generation <span>MarTech solutions</span>',
  martechWeCreate: 'We create and implement software solutions that allow you to succeed. We adapt to changing conditions and treat your concerns as our own. Order MarTech development services right now!',
  martechLetsPartner: 'Let’s partner to develop the software that will grow your business',
  // platform-development
  platformDevelopmentTitle: 'Custom <span>Digital Platform Development</span> Services',
  workTogether: 'Let’s work together!',
  workTogetherTitle: 'Unleash the power of intelligent data and deliver personalized and omnichannel experiences to your customers through <span>digital platform development services</span>',
  platformDevelopmentTechnologies: 'Technologies',
  makeCustomPlatform: 'Make your custom platform solutions a foundation for your success.',
  // enterprise-development
  enterpriseTitle: 'YOUR TECH PARTNER FOR SOFTWARE INNOVATION AND DIGITAL TRANSFORMATION',
  enterpriseToolsTitle: 'Enterprise software engineering tools and technologies we use',
  enterpriseHarnessTitle: 'HARNESS THE POWER OF EVER-EVOLVING DIGITAL TECHNOLOGIES TO MEET BUSINESS CHALLENGES WITH <span>ENTERPRISE SOFTWARE DEVELOPMENT COMPANY</span>',
  enterpriseDevelopTitle: 'WE DEVELOP A MEANINGFUL AND UNDERSTANDABLE ENTERPRISE SOFTWARE SOLUTION TO BUILD YOUR BUSINESS',
  letsDiscussProject: "let's discuss your project!",
  //Mobile development
  mobileDevelopmentTitle: 'Mobile application development solutions <span>for taking a business to the next level</span>',
  letDiscuss: 'Let’s discuss your project! ',
  mobiledevelopmentCTATitle: 'HERE’S HOW YOU CAN GET IN TOUCH',
  pitchcard: 'Pitchcard',
  pitchcardSubtitle: 'A PitchCard allows you to do a personal, 59-second sales pitch to people looking for your services.',
  lports: 'Lpors',
  lportsSubtitle: 'System for managing loan payoff requests',
  lporsList: ['Process loan payoff requests more comfortably and more efficiently than in your banking system. The service automatically loads all the necessary data about your customers.', "Easily search for the information you need by the date of the request, the client's name, or the number of that account", 'Keep the list of payoff requests for all your clients in one place'],
  readFull: 'Read full cycle of application design',
  griot: 'Griot',
  griotStartaps: 'Mobile application for startup innovations in the area of Cleantech and the Internet of Things',
  griotStartapsSpan: ' Cleantech and the Internet of Things',
  griotSubtitle: 'Griot is a connectivity IoT platform. A handy mobile application for managing your home, for tracking and controlling all the necessary indicators',
  griotMobileText: 'Support as many devices as you need for your comfort and security',
  mobileImproveCustomer: 'Improve customer interactions and reduce marketing costs with a mobile application for your business. Order application development for mobile platforms right now!',
  // Startups
  startupsTitle: 'PROTOTYPE YOUR IDEAS FROM MVP TO THE WHOLE <span>STARTUP PRODUCT DEVELOPMENT</span> WITH A RELIABLE TECH PARTNER!',
  btnProcess: 'Start Discovery Phase',
  //get in touch page
  getInTouchTitle: "Say Hello and Let's Collaborate",
  simplyFillOut: 'Or simply fill out the form',
  callUsNow: 'Or Call Us Now',
  dropLine: 'Drop a line at',
  getInTouchFirstForm: [{
    label: 'Name',
    required: true,
    type: 'text',
    placeholder: 'How can we call you',
    name: 'name'
  }, {
    label: 'Email',
    required: true,
    type: 'email',
    placeholder: 'We use it to contact you',
    name: 'email'
  }, {
    label: 'I want to discuss',
    required: false,
    type: 'textarea',
    placeholder: 'Tell us briefly about your project, or ask us anything',
    name: 'message'
  }],
  getInTouchFirstFormTitle: 'Simply fill out the form below',
  wantMoreSimply: 'Want it even more simply?',
  getInTouchSecondFormTitle: 'Book your FREE 30-minute consultation with',
  getInTouchSecondForm: [{
    label: 'Email',
    required: true,
    type: 'email',
    placeholder: 'We use it to contact you',
    name: 'email'
  }, {
    label: 'I want to discuss',
    required: false,
    type: 'textarea',
    placeholder: 'Tell us briefly about your project, or ask us anything',
    name: 'message'
  }],
  submitForm: 'Submit form',
  sendMessage: 'send message',
  getInTouchCaseTitle: 'Do you still have doubts? Here, we let our work speak for itself.',
  stillHaveDoubts: 'Do you still have doubts?',
  stillHaveDoubtsSpan: ' Here, we let our work speak for itself.',
  processBuilt: 'A Process Built on Partnership',
  processBuiltDescription: "WTT Solutions is always ready to discuss new ideas ranging from UI/UX design to web and mobile development and SaaS development services. Let's discuss your ideas",
  callUsBtn: 'Call us now',
  dropEmailBtn: 'Drop an Email',
  getInTouchModalText: "Your request has been sent successfully! We'll contact you shortly.",
  CTAForm: [{
    label: 'Name',
    required: true,
    type: 'text',
    placeholder: 'How can we call you',
    name: 'name'
  }, {
    label: 'Email',
    required: true,
    type: 'text',
    placeholder: 'We use it to contact you',
    name: 'email'
  }, {
    label: 'I want to speak about',
    required: false,
    type: 'textarea',
    placeholder: 'Tell us briefly about your project, or ask us anything',
    name: 'message'
  }],
  // Blog
  blog: 'Blog',
  blogFilters: ['Latest', 'Insights', 'Tech', 'Design', 'Marketing'],
  learnMore: 'Learn more',
  receiveNotifications: 'would you like to receive notifications about our updates?',
  subscribe: 'Subscribe',
  subscriptionConfirmed: 'Your subscription is confirmed.',
  thankYou: 'Thank you for being with us.',
  topArticles: 'TOP 10 Articles',
  uniqueArticles: 'Unique articles',
  articles: 'Articles',
  readAll: 'Read all',
  couldntFind: 'Sorry, we couldn’t find any results for',
  tryAgain: 'Please try again with some different keywords.',
  orMaybe: ' Or maybe you will be interested in some of the other topics below.',
  topicsBelow: 'Maybe you will be interested in some of the other topics below.',
  readAll: 'Read all',
  //Article
  offshoreSoftware: 'Looking offshore software development?',
  weAreReadyToHelp: 'We are ready to help! Get consulted with our specialists at no charge.',
  topFive: 'Top 5 posts',
  rateThisArticle: 'Rate this article',
  wrtittenBy: 'Written by ',
  sourse: 'Source',
  relatedPosts: 'Related posts',
  //Tell Us About Form
  TUAForm: [{
    label: 'Name',
    required: true,
    type: 'text',
    placeholder: 'How we can call you',
    name: 'name'
  }, {
    label: 'Email',
    required: true,
    type: 'text',
    placeholder: 'We use it to contact you',
    name: 'email'
  }, {
    label: 'I want to speak about',
    required: false,
    type: 'textarea',
    placeholder: 'Tell us briefly about your project, or ask us anything',
    name: 'message'
  }],
  TUATitle: 'Tell us about your Project',
  TUADescription: 'We’ll contact you within a couple of hours to schedule a meeting to discuss your goals, project requirements, and timeframes.',
  //Table of contents
  TableOfContents: 'Table of contents',
  //Edtech
  edtechTitle: '<span>EdTech</span> software development for a boost in teaching effectiveness',
  edTechDescrition: 'We build custom EdTech software and help make education technologies important to your institutions',
  edtechElearningTitle: 'TRANSFORM EDUCATION SEGMENT WITH ELEARNING SOFTWARE DEVELOPMENT',
  //hrtech
  hrtechTitle: 'we are developing <span>HR tech</span> solutions so that your company can always achieve its business goals',
  //frontend-development
  frontendHeaderTitle: 'Front-end Development Services for the next level user experience!',
  needTeamFrontendExperts: 'Need a team of Frontend experts?',
  //backend-development
  backendTitle: 'Back-end software development <span>services to scale alongside your growing business needs.</span>',
  CFDTechnologiesTitle: 'Technologies that We Use for Front-end Development',
  needTeamBackendExperts: 'Need a team of backend experts?',
  whyChooseUs: 'Why choose us?',
  //cases
  techTitle: 'Tech stack and team',
  techDescription: 'We use cutting edge technologies to build unique, flawless, and robust solutions.',
  teamTitle: 'Team',
  techStackTitle: 'Tech stack',
  //reviews
  reviewsMainTitle: 'We Cover a Wide Marketing Technology Development Stack',
  reviewaSubtitle: 'INDUSTRY RECOGNITION',
  // Technologies
  //react
  reactTitle: 'React JS Consulting <span>by WTT Solutions</span>',
  reactSubtitle: 'React is a JavaScript user interface (UI) library created by the Facebook developers. React is used to render UI components',
  reactSubtitle2: ' Also, the library can fully manage the frontend. In this case, React is used with state management and routing libraries such as Redux and React Router.',
  lukGreenTitle: 'Our dedicated React dev team released the following case studies',
  //node
  nodeTitle: 'Node JS Consulting <span>by WTT Solutions</span>',
  nodeSubtitle: 'NodeJS is an open source cross-platform Javascript runtime developed in JavaScript in V8 Chrome directly into machine code. It is a lightweight framework used to develop server side web applications.',
  nodeSubtitle2: 'It is mainly used for building large-scale applications, mainly for streaming websites, single page and other web applications. Node.js uses an event-driven, non-blocking I / O model, which makes it suitable for real-time data-intensive applications.',
  pillarsGreenTitle: 'Our dedicated Node JS dev team released the following case studies',
  //angular
  angularTitle: 'Angular Consulting <span>by WTT Solutions</span>',
  angularSubtitle: 'Angular is an open source typescript framework from Google used to build client-side single page web applications. Angular took inspiration from React and made radical changes, the largest of which was the move from MVW (Model-View-Whatever) architecture to component-based architecture like React. ',
  angularSubtitle2: 'Angular is one of the most secure JavaScript client frameworks for building enterprise-scale applications today',
  plhGreenTitle: 'Our dedicated Angular dev team released the following case studies',
  //vue
  vueTitle: 'Vue.JS Consulting <span>by WTT Solutions</span>',
  vueSubtitle: 'Vue.js is a progressive JavaScript-based framework used for single-page apps and web interfaces, but can also be used for mobile and desktop development in conjunction with the Electron framework.',
  vueSubtitle2: 'Thanks to the HTML extension and JavaScript base, Vue quickly became a popular tool for user interface development.',
  gmbGreenTitle: 'Our dedicated Vue.JS dev team released the following case studies',
  gmbSUbtitle2: 'GMBCrush allows you to optimize the time spent on collecting and analyzing data, as well as creating recommendations for SEO site optimization regarding its positioning in Google.',
  //flutter
  flutterTitle: 'Flutter Consulting <span>by WTT Solutions</span>',
  flutterSubtitle: "Flutter is Google's platform-independent technology for building applications for use on mobile, desktop and web platforms. It was officially presented in December 2018, and during this time it managed to overtake React Native in popularity both on GitHub and on Stack Overflow.",
  flutterSubtitle2: 'Flutter provides better UX than previous generation platforms, Flutter mobile apps have significantly better performance than native apps.',
  diglogGreenTitle: 'Our dedicated Flutter dev team released the following case studies',
  //net
  netTitle: '.Net Consulting <span>by WTT Solutions</span>',
  netSubtitle: 'The .NET Framework is a technology that supports the creation and execution of Windows web services and applications.',
  pitchGreenTitle: 'Our dedicated .NET dev team released the following case studies',
  //blockchain
  blockchainTitle: 'Blockchain Development Services & Consulting',
  blockchainSubtitle: 'WTT-Solutions is a full-stack blockchain software development company that produces custom blockchain products for different niches and audiences',
  blockchainList: ['Full project support', 'Certified developers', 'FREE quotes'],
  blockchainIncreaseTitle: 'INCREASE YOUR BUSINESS SECURITY & TRANSPARENCY WITH CUSTOM BLOCKCHAIN SOLUTIONS',
  //ai services
  aiServicesTitle: 'Artificial Intelligence(AI) Software Development Services',
  aiServicesSubtitle: 'Enhance your product or automate business processes with the help of artificial intelligence and machine learning development services. We have all the needed expertise to produce projects on time and on budget.',
  aiServicesSolutions: "MAKE YOUR BUSINESS SMARTER WITH CUSTOM AI SOLUTIONS"
};

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

/***/ "jcgO":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "kePR":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"esimplify\",\"mainPageTitle\":\"Esimplify\",\"title\":\"Esimplify\",\"type\":\"edtech\",\"subtitle\":\"eSimplify Launches its new SaaS practice analytics platform for primary care practices\",\"customerId\":0,\"expertise\":[\"HealthCare\"],\"technologies\":[\"React\",\"Redux\",\"Material UI\",\"Amplify (Cognito)\",\"QuickSight embedded dashboards\",\"Node.Js\",\"TypeScript\",\"Express\",\"Microsoft SQL Server\",\"InversifyJS\",\"AWS (Cognito, QuickSight, IAM, S3)\"],\"images\":{\"mb\":\"/images/cases/esi/main/imgMob.png\",\"tabl\":\"/images/cases/esi/main/imgTabl.png\",\"desk\":\"/images/cases/esi/main/imgDesk.png\"},\"metaTitle\":\"eSimplify - new SaaS practice analytics platform | WTT Solutions\",\"metaDescription\":\"The eSimplify provides small to medium size physician practices access to meaningful insights and analytics ✅ Read about HealthCare solution from WTT Solutions\",\"vision\":{\"images\":{\"mb\":\"/images/cases/esi/vision/imgMob.png\",\"tabl\":\"/images/cases/esi/vision/imgTabl.png\",\"desk\":\"/images/cases/esi/vision/imgDesk.png\"},\"description\":\"The eSimplify mission is to provide small to medium size Physician Practices access to meaningful insights and analytics to help administrators identify gaps in care that improve patient health outcomes while maximizing practice revenue.\"},\"challenge\":{\"images\":{\"mb\":\"/images/cases/esi/challenge/imgMob.png\",\"tabl\":\"/images/cases/esi/challenge/imgTabl.png\",\"desk\":\"/images/cases/esi/challenge/imgDesk.png\"},\"list\":[\"Be able to bring together the infrastructure for building and deploying the front end and back end that is secure and protected\",\"Deploy the solution faster that allows our users flexibility to be able to access the platform from anywhere\",\"Open platform to small to mid-sized practices in order to help practices leverage analytics at an affordable price.\"]},\"outcomes\":{\"images\":{\"mb\":\"/images/cases/esi/outcomes/mob.png\",\"tabl\":\"/images/cases/esi/outcomes/tabl.png\",\"desk\":\"/images/cases/esi/outcomes/desk.png\"},\"description\":\"Launched the beta platform for users. The feedback from the beta users have been mostly positive,continued to add enhancements to ensure that platform is intuitive and easy to navigate\"},\"impact\":[{\"text\":\"Integrated with QuickSight to display data in the form of a dashboard for each user\",\"images\":{\"mb\":\"/images/cases/esi/impact/imgMob1.png\",\"tabl\":\"/images/cases/esi/impact/imgTabl1.png\",\"desk\":\"/images/cases/esi/impact/imgDesk1.png\"}},{\"text\":\"Made a hierarchical structure for users management\",\"images\":{\"mb\":\"/images/cases/esi/impact/imgMob2.png\",\"tabl\":\"/images/cases/esi/impact/imgTabl2.png\",\"desk\":\"/images/cases/esi/impact/imgDesk2.png\"}},{\"text\":\"Made authentication through Amplify (Cognito) - sending SMS through the application\",\"images\":{\"mb\":\"/images/cases/esi/impact/imgMob3.png\",\"tabl\":\"/images/cases/esi/impact/imgTabl3.png\",\"desk\":\"/images/cases/esi/impact/imgDesk3.png\"}}],\"tech\":{\"team\":{\"members\":[{\"name\":\"2 Developers\",\"color\":\"linear-gradient(180deg, #EF426C 0%, #F92C37 48.96%, #A92C37 100%)\"},{\"name\":\"PM\",\"color\":\"linear-gradient(90.33deg, #FFC223 -0.02%, #FE59A5 46.03%, #FEB028 100.1%)\"}],\"diagram\":{\"mb\":\"/images/cases/esi/tech/chartMob.png\",\"tabl\":\"/images/cases/esi/tech/chartTabl.png\",\"desk\":\"/images/cases/esi/tech/chartDesk.png\"}},\"techStack\":[{\"name\":\"React\",\"icon\":\"/images/cases/technologies/react.svg\"},{\"name\":\"Redux\",\"icon\":\"/images/cases/technologies/redux.svg\"},{\"name\":\"Materila UI\",\"icon\":\"/images/cases/technologies/mui.svg\"},{\"name\":\"Node.Js\",\"icon\":\"/images/cases/technologies/node.svg\"},{\"name\":\"TypeScript\",\"icon\":\"/images/cases/technologies/typescript.svg\"},{\"name\":\"Express.Js\",\"icon\":\"/images/cases/technologies/express.svg\"},{\"name\":\"Amplify\",\"icon\":\"/images/cases/technologies/amplify.svg\"},{\"name\":\"InversifyJS\",\"icon\":\"/images/cases/technologies/inversify.svg\"},{\"name\":\"QuickSight\",\"icon\":\"/images/cases/technologies/quicksight.svg\"},{\"name\":\"AWS\",\"icon\":\"/images/cases/technologies/amazon.svg\"},{\"name\":\"Microsoft SQL\",\"icon\":\"/images/cases/technologies/microsoftsql.svg\"}]}},{\"id\":\"luk\",\"mainPageTitle\":\"Luklabs\",\"title\":\"Luklabs\",\"type\":\"edtech\",\"subtitle\":\"Connect with students for live 1-on-1 college insights and tours\",\"duration\":\"16 months\",\"efforts\":\"39 person-months\",\"customerId\":0,\"expertise\":[\"Education\"],\"technologies\":[\"React\",\"Redux\",\"Redux-Saga\",\"Express\",\"PostgreSQL\",\"InversifyJS\",\"Braintree\",\"Amazon Web Service\",\"Paypal\"],\"images\":{\"mb\":\"/images/cases/luk/main/imgMob.png\",\"tabl\":\"/images/cases/luk/main/imgTabl.png\",\"desk\":\"/images/cases/luk/main/imgDesk.png\"},\"backgrounds\":{\"mb\":\"/images/cases/common/bgMob.png\",\"tabl\":\"/images/cases/common/bgTabl.png\",\"desk\":\"/images/cases/common/bgDesk.png\"},\"metaTitle\":\"Luklabs helps manage employees and customers | WTT Solutions\",\"metaDescription\":\"Luklabs is an EdTech platform that makes it easy to get insights from college students through live video ✅ Read about the HRTech solution from WTT Solutions\",\"vision\":{\"images\":{\"mb\":\"/images/cases/luk/vision/imgMob.png\",\"tabl\":\"/images/cases/luk/vision/imgTabl.png\",\"desk\":\"/images/cases/luk/vision/imgDesk.png\"},\"description\":[\"For millions of families one of the most important decisions in their teenager's life searching for the right college can be difficult, expensive and time-consuming.\",\"Luklabs was created to make it easy to get these insights, 1-on-1, from the 'right' college students. We match and connect prospective students and their families with vetted and trained college students for live video tours and conversations.\"]},\"challenge\":{\"title\":\"The challenge\",\"list\":[\"Develop an admin panel to track various system indicators by user action.\",\"Create a convenient search for users by different parameters and the priority of displaying the users.\",\"Build a flow for payment for project services and payment by the project to other users who were involved in the provision of services.\",\"Develop a high-quality tool for video meetings between users.\",\"Solve multilingualism problem.\"]},\"outcomes\":{\"title\":\"Business Outcomes\",\"description\":\"Quick recaps and short video training help guides prepare for a tour\"},\"impact\":[{\"title\":\"The impact\",\"text\":\"Implemented smart search with auto-complete for a better experience and faster workflow\",\"stepImg\":\"/images/cases/common/01.svg\",\"images\":{\"mb\":\"/images/cases/luk/impact/imgMob1.png\",\"tabl\":\"/images/cases/luk/impact/imgTabl1.png\",\"desk\":\"/images/cases/luk/impact/imgDesk1.png\"}},{\"title\":\"The impact\",\"text\":\"Set up your own unique itinerary with the topics you want to cover\",\"stepImg\":\"/images/cases/common/02.svg\",\"images\":{\"mb\":\"/images/cases/luk/impact/imgMob2.png\",\"tabl\":\"/images/cases/luk/impact/imgTabl2.png\",\"desk\":\"/images/cases/luk/impact/imgDesk2.png\"}},{\"title\":\"The impact\",\"text\":\"Join your guide for a live video conversation or tour on your phone, desktop, tablet\",\"stepImg\":\"/images/cases/common/03.svg\",\"images\":{\"mb\":\"/images/cases/luk/impact/imgMob3.png\",\"tabl\":\"/images/cases/luk/impact/imgTabl3.png\",\"desk\":\"/images/cases/luk/impact/imgDesk3.png\"}}],\"review\":{\"title\":\"Customer about us\",\"name\":\"LIA ARAN\",\"company\":\"Luklabs\",\"position\":\"Acting CEO\",\"userImg\":\"/images/cases/luk/review/userIcon.png\",\"text\":\"The team is smart, creative, nice, calm, and professional, and they are problem solvers. WTT Solutions paid attention to details. Most of their first iterations were very close to our intended designs.Consequentially, we didn’t have to do a ton of revisions in the QA phase. I greatly enjoyed working with them....\",\"link\":\"https://clutch.co/profile/wtt-solutions#review-1689524\"},\"tech\":{\"team\":{\"members\":[{\"name\":\"2 Frontends, 1 backend\",\"color\":\"linear-gradient(90.33deg, #FFC223 -0.02%, #FE59A5 46.03%, #FEB028 100.1%)\"},{\"name\":\"PM & BA\",\"color\":\"linear-gradient(180deg, #EF426C 0%, #F92C37 48.96%, #A92C37 100%)\"},{\"name\":\"QA\",\"color\":\"linear-gradient(180deg, #8FC424 0%, #1EAA4B 100%)\"}],\"diagram\":{\"mb\":\"/images/cases/luk/tech/chartMob.png\",\"tabl\":\"/images/cases/luk/tech/chartTabl.png\",\"desk\":\"/images/cases/luk/tech/chartDesk.png\"}},\"techStack\":[{\"name\":\"Amazon WS\",\"icon\":\"/images/cases/technologies/amazon.svg\"},{\"name\":\"Redux\",\"icon\":\"/images/cases/technologies/redux.svg\"},{\"name\":\"React\",\"icon\":\"/images/cases/technologies/react.svg\"},{\"name\":\"Redux Saga\",\"icon\":\"/images/cases/technologies/saga.svg\"},{\"name\":\"InversifyJS\",\"icon\":\"/images/cases/technologies/inversify.svg\"},{\"name\":\"PayPal\",\"icon\":\"/images/cases/technologies/paypal.svg\"},{\"name\":\"PostgreSQL\",\"icon\":\"/images/cases/technologies/postgresql.svg\"},{\"name\":\"Braintree\",\"icon\":\"/images/cases/technologies/braintree.svg\"},{\"name\":\"Express\",\"icon\":\"/images/cases/technologies/express.svg\"}]}},{\"id\":\"pitch59\",\"title\":\"Pitch 59\",\"mainPageTitle\":\"Pitch 59\",\"type\":\"martech\",\"subtitle\":\"The video business card that sells for you. Unleash your company’s most powerful sales tool...You.\",\"duration\":\"16 months\",\"efforts\":\"39 person-months\",\"customerId\":0,\"expertise\":[\"Marketing & Advertising\"],\"technologies\":[\"Angular\",\"C#\",\"AWS\",\"API integration\",\"PostgreSQL\"],\"previewBackgrounds\":{\"mb\":\"/images/cases/pitch/previewImg.jpg\",\"tabl\":\"/images/cases/pitch/previewImg.jpg\",\"desk\":\"/images/cases/pitch/previewImg.jpg\"},\"backgrounds\":{\"mb\":\"/images/cases/pitch/headerMob.png\",\"tabl\":\"/images/cases/pitch/headerTabl.png\",\"desk\":\"/images/cases/pitch/headerDesk.png\"},\"images\":{\"mb\":\"/images/cases/pitch/main/imgMob.png\",\"tabl\":\"/images/cases/pitch/main/imgTabl.png\",\"desk\":\"/images/cases/pitch/main/imgDesk.png\"},\"metaTitle\":\"Pitch 59 - the video business card that sells for you | WTT Solutions\",\"metaDescription\":\"Pitch59 is an advertising platform that allows businesses to pitch their ideas in a 59-second video ✅ Read more about the Martech solution from WTT Solutions\",\"vision\":{\"mainTitle\":\"The vision\",\"img\":\"/images/cases/pitch/vision/icon.svg\",\"title\":\"Pitch59 is an advertising platform that allows businesses to pitch their business ideas in a 59-second video.\",\"description1\":\"PitchCard is an effective way of networking, marketing, partner search, and attracting referrals.\",\"description2\":\"You can present yourself in 59 seconds or less.\"},\"challenge\":{\"title\":\"challenge\",\"list\":[\"Fix problems from the previous provider.\",\"Solve communication problems.\",\"Eliminate flaws in the code.\",\"Improve in-app search.\",\"Eliminate memory leaks on the frontend.\",\"Reduce the weight of the client assembly of a web application.\"]},\"outcomes\":{\"title\":\"Business Outcomes\",\"description1\":\"It’s a night and day difference from our previous vendor. Our website is functioning much better, and we’ve had significantly fewer headaches. It’s less buggy.\",\"description2\":\" If they see something that doesn’t look right in the code, they address it right away. Thanks to them, we found security issues left from our previous vendor. They’re very informative too — after they see those things, they give us recommendations on how to fix them.\"},\"impact\":[{\"text1\":\"Optimized SQL queries.\",\"stepImg\":\"/images/cases/common/01.svg\",\"text2\":\"Improved in-app search 15 times.\",\"images\":{\"mb\":\"/images/cases/pitch/impact/img1Tabl.png\",\"tabl\":\"/images/cases/pitch/impact/img1Tabl.png\",\"desk\":\"/images/cases/pitch/impact/img1Desk.png\"}},{\"text\":\"Reduced the application's size from 3 MB to 2 MB, which accelerated loading in the client's browser by 700 milliseconds — 1 second.\",\"stepImg\":\"/images/cases/common/02.svg\",\"images\":{\"mb\":\"/images/cases/pitch/impact/img2Tab.png\",\"tabl\":\"/images/cases/pitch/impact/img2Tabl.png\",\"desk\":\"/images/cases/pitch/impact/img2Desk.png\"}},{\"text\":\"Provided companies with the ability to set the radius of work on online maps and search businesses in the given location with Postgis Geomap.\",\"stepImg\":\"/images/cases/common/03.svg\",\"images\":{\"mb\":\"/images/cases/pitch/impact/img3Tab.png\",\"tabl\":\"/images/cases/pitch/impact/img3Tabl.png\",\"desk\":\"/images/cases/pitch/impact/img3Desk.png\"}}],\"tech\":{\"team\":{\"members\":[{\"name\":\"PM\",\"color\":\"#00A6CA\"},{\"name\":\"Project lead\",\"color\":\"#18712C\"},{\"name\":\"4 developers\",\"color\":\"#838485\"}],\"diagram\":\"/images/cases/pitch/tech/chart.svg\"},\"techStack\":{\"icon1\":\"/images/cases/pitch/tech/icon1.svg\",\"icon2\":\"/images/cases/pitch/tech/icon2.svg\",\"icon3\":\"/images/cases/pitch/tech/icon3.svg\"}}},{\"id\":\"loan\",\"title\":\"Loan\",\"mainPageTitle\":\"Loan\",\"subtitle\":\"Application for quick loan processing\",\"customerId\":0,\"type\":\"fintech\",\"expertise\":[\"Financial services\"],\"technologies\":[\"Flutter\",\"Dart\",\"Getx\"],\"images\":{\"mb\":\"/images/cases/loan/main/imgMob.png\",\"tabl\":\"/images/cases/loan/main/imgTabl.png\",\"desk\":\"/images/cases/loan/main/imgDesk.png\"},\"metaTitle\":\"Loan is a FinTech platform for quick loan processing | WTT Solutions\",\"metaDescription\":\"Loan - FinTech platform that helps you find a loan offer quickly and safely even with a bad credit history ✅ Read about the HRTech solution from WTT Solutions\",\"vision\":{\"images\":{\"mb\":\"/images/cases/loan/vision/imgMob.png\",\"tabl\":\"/images/cases/loan/vision/imgTabl.png\",\"desk\":\"/images/cases/loan/vision/imgDesk.png\"},\"description\":[\"The application helps you find a loan offer quickly and safely, even with a bad credit history. Quick receipt of money after confirmation, save your time and money with low-interest rates.\"]},\"challenge\":{\"images\":{\"mb\":\"/images/cases/loan/challenge/imgMob.png\",\"tabl\":\"/images/cases/loan/challenge/imgTabl.png\",\"desk\":\"/images/cases/loan/challenge/imgDesk.png\"},\"list\":[\"Writing own Introduction Screen.\",\"Reactively check for internet for the full functionality of the application.\",\"Development of new components and their styling in accordance with the layout.\"]},\"outcomes\":{\"images\":{\"mb\":\"/images/cases/loan/outcomes/imgMob.png\",\"tabl\":\"/images/cases/loan/outcomes/imgTabl.png\",\"desk\":\"/images/cases/loan/outcomes/imgDesk.png\"},\"description\":\"To display the web view from the customer's third-party website on the corresponding screens in the application, as well as adaptive layout for all devices.\"},\"impact\":[{\"text\":\"Using the getx package for the first time for state management.\",\"images\":{\"mb\":\"/images/cases/loan/impact/imgMob1.png\",\"tabl\":\"/images/cases/loan/impact/imgTabl1.png\",\"desk\":\"/images/cases/loan/impact/imgDesk1.png\"}},{\"text\":\"Writing all the code without auxiliary plugins (web view only for displaying site pages inside the application).\",\"images\":{\"mb\":\"/images/cases/loan/impact/imgMob2.png\",\"tabl\":\"/images/cases/loan/impact/imgTabl2.png\",\"desk\":\"/images/cases/loan/impact/imgDesk2.png\"}}],\"tech\":{\"team\":{\"members\":[{\"name\":\"Front-End Developer\",\"color\":\"linear-gradient(180deg, #EF426C 0%, #F92C37 48.96%, #A92C37 100%)\"},{\"name\":\"PM\",\"color\":\"linear-gradient(90.33deg, #FFC223 -0.02%, #FE59A5 46.03%, #FEB028 100.1%)\"}],\"diagram\":{\"mb\":\"/images/cases/loan/tech/chartMob.png\",\"tabl\":\"/images/cases/loan/tech/chartTab.png\",\"desk\":\"/images/cases/loan/tech/chartDesk.png\"}},\"techStack\":[{\"name\":\"Flutter\",\"icon\":\"/images/cases/technologies/flutter.svg\"},{\"name\":\"Dart\",\"icon\":\"/images/cases/technologies/dart.svg\"},{\"name\":\"Flutter GETX\",\"icon\":\"/images/cases/technologies/flutter.svg\"}]}},{\"id\":\"plh\",\"mainPageTitle\":\"plh\",\"title\":\"Parenting for lifelong health\",\"title2\":\"For Parents and Teens\",\"subtitle\":\"A parent training program that seeks to establish nurturing caregiver-teen relationships and reduce the risk of violence against teens in and outside the home\",\"customerId\":0,\"expertise\":[\"Education\"],\"technologies\":[\"Ionic\",\"Angular\"],\"images\":{\"mb\":\"/images/cases/plh/imgMob.png\",\"tabl\":\"/images/cases/plh/imgTabl.png\",\"desk\":\"/images/cases/plh/imgDesk.png\"},\"metaTitle\":\"EdTech solution - Parenting for lifelong health (PLH) | WTT Solutions\",\"metaDescription\":\"Parenting for lifelong health (PLH) for Parents and Teens is a parent training program for caregivers ✅ Read about EdTech solution from WTT Solutions experts\",\"vision\":{\"images\":{\"mb\":\"/images/cases/loan/vision/bgMob.png\",\"tabl\":\"/images/cases/loan/vision/bgTabl.png\",\"desk\":\"/images/cases/loan/vision/bgDesk.png\"},\"description\":[\"PLH for Parents and Teens is a parent training program for caregivers and their 10- to 17-year-olds. The program seeks to establish nurturing caregiver-teen relationships and reduce the risk of violence against teens in and outside the home.\",\"It also aims to strengthen the ability of caregivers to provide a protective environment and ensures the health and well-being of their children through positive parenting techniques.\",\"Parents are taught alternative parenting strategies to reduce adolescent problem behaviors and avoid harsh disciplining techniques at home.\"]},\"challenge\":{\"title\":\"The challenge\",\"list\":[\"Development of various components that would be flexible enough to be configured through tables and that could interact with other components\",\"Implementation of a system of styles for components where it would be possible to set various layout parameters\",\"Creation of a flexible system of components, templates with the ability to fully control the behavior and styling of each component\",\"Development of functionality for viewing the application on a computer and phone “reviewing mode”\"]},\"outcomes\":{\"images\":{\"mb\":\"/images/cases/plh/outcomes/imgMob.png\",\"tabl\":\"/images/cases/plh/outcomes/imgTabl.png\",\"desk\":\"/images/cases/plh/outcomes/imgDesk.png\"},\"description\":\"Implementation of a system where the interface of each page of the application can be described by people who have no programming experience through excel tables.\"},\"impact\":[{\"title\":\"The impact\",\"text\":\"The system of classes was used to describe the internal styles of components (for example, the size, color of buttons, etc.)\",\"stepImg\":\"/images/cases/common/01.svg\",\"images\":{\"mb\":\"/images/cases/plh/impact/imgMob.png\",\"tabl\":\"/images/cases/plh/impact/imgDesk.png\",\"desk\":\"/images/cases/plh/impact/imgDesk.png\"}},{\"title\":\"The impact\",\"text\":\"The system of external styles was used (for example, what is the indentation of a component from another component)\",\"stepImg\":\"/images/cases/common/02.svg\",\"images\":{\"mb\":\"/images/cases/plh/impact/imgMob2.png\",\"tabl\":\"/images/cases/plh/impact/imgTabl2.png\",\"desk\":\"/images/cases/plh/impact/imgDesk2.png\"}},{\"title\":\"The impact\",\"text\":\"A Flexible system was used that allows you to combine various components on pages and also embed groups of components on other pages\",\"stepImg\":\"/images/cases/common/03.svg\",\"images\":{\"mb\":\"/images/cases/plh/impact/imgMob3.png\",\"tabl\":\"/images/cases/plh/impact/imgTabl3.png\",\"desk\":\"/images/cases/plh/impact/imgDesk3.png\"}}],\"tech\":{\"team\":{\"members\":[{\"name\":\"Front-End Developer\",\"color\":\"linear-gradient(180deg, #EF426C 0%, #F92C37 48.96%, #A92C37 100%)\"},{\"name\":\"PM\",\"color\":\"linear-gradient(90.33deg, #FFC223 -0.02%, #FE59A5 46.03%, #FEB028 100.1%)\"}],\"diagram\":{\"mb\":\"/images/cases/plh/tech/chartMob.png\",\"tabl\":\"/images/cases/plh/tech/chartTabl.png\",\"desk\":\"/images/cases/plh/tech/chartDesk.png\"}},\"techStack\":[{\"name\":\"Ionic\",\"icon\":\"/images/cases/technologies/ionic.svg\"},{\"name\":\"Angular\",\"icon\":\"/images/cases/technologies/angular.svg\"}]}},{\"id\":\"diglog\",\"title\":\"diglog\",\"subtitle\":\"Manage business accounting and employees on your phone!\",\"type\":\"fintech\",\"customerId\":0,\"expertise\":[\"Financial services\"],\"technologies\":[\"Flutter\",\"NesJS\",\"PostgreSQL\",\"Cognito\",\"Amplify\",\"CodecommitJS\"],\"images\":{\"mb\":\"/images/cases/diglog/imgMob.png\",\"tabl\":\"/images/cases/diglog/imgTabl.png\",\"desk\":\"/images/cases/diglog/imgDesk.png\"},\"metaTitle\":\"Diglog is a Fintech plaform for managing accounting | WTT Solutions\",\"metaDescription\":\"Content IQ reimagining your current business through digital transformation and new digital enterprises ✅ Read more about Martech solution from WTT Solutions\",\"vision\":{\"images\":{\"mb\":\"/images/cases/diglog/vision/imgMob.png\",\"tabl\":\"/images/cases/diglog/vision/imgTabl.png\",\"desk\":\"/images/cases/diglog/vision/imgDesk.png\"},\"description\":[\"We help MSME businesses transition from using manual financial and employee management processes to using a mobile device to perform critical and mundane activities in a secure, efficient, and productive way\"]},\"challenge\":{\"images\":{\"mb\":\"/images/cases/diglog/challenge/imgMob.png\",\"tabl\":\"/images/cases/diglog/challenge/imgTabl.png\",\"desk\":\"/images/cases/diglog/challenge/imgDesk.png\"},\"list\":[\"Implement a system for correcting errors in the schedule and wages\",\"Add annual and quarterly pay period for pay items\",\"Implement a system of deactivation business users\",\"Implement sign up in AWS Cognito\"]},\"outcomes\":{\"images\":{\"mb\":\"/images/cases/diglog/outcomes/imgMob.png\",\"tabl\":\"/images/cases/diglog/outcomes/imgTabl.png\",\"desk\":\"/images/cases/diglog/outcomes/imgDesk.png\"},\"description\":\"Make an accounting and business management app that will help a business owner to administrate employees, control their timesheets, regulate salaries, allowances, and other finance, and also will become a great time for employees to organize finance processes\"},\"impact\":[{\"text\":\"Implement a system for total awareness about employees presence (truck number of employees present, absent, late, and overtime)\",\"images\":{\"mb\":\"/images/cases/diglog/impact/imgMob1.png\",\"tabl\":\"/images/cases/diglog/impact/imgTabl1.png\",\"desk\":\"/images/cases/diglog/impact/imgDesk1.png\"}},{\"text\":\"Make flexible settings for business payrolls and customer settings for employees for absolute control over business finances\",\"images\":{\"mb\":\"/images/cases/diglog/impact/imgMob2.png\",\"tabl\":\"/images/cases/diglog/impact/imgTabl2.png\",\"desk\":\"/images/cases/diglog/impact/imgDesk2.png\"}},{\"text\":\"Use system of easily submitting attendance via selfie\",\"images\":{\"mb\":\"/images/cases/diglog/impact/imgMob3.png\",\"tabl\":\"/images/cases/diglog/impact/imgTabl3.png\",\"desk\":\"/images/cases/diglog/impact/imgDesk3.png\"}}],\"tech\":{\"team\":{\"members\":[{\"name\":\"Flutter Developer\",\"color\":\"linear-gradient(90.33deg, #FFC223 -0.02%, #FE59A5 46.03%, #FEB028 100.1%)\"},{\"name\":\"Front-End Developer\",\"color\":\"linear-gradient(180deg, #EF426C 0%, #F92C37 48.96%, #A92C37 100%)\"},{\"name\":\"UX/UI designer\",\"color\":\"linear-gradient(180deg, #8FC424 0%, #1EAA4B 100%)\"},{\"name\":\"Pm\",\"color\":\"#259198\"}],\"diagram\":{\"mb\":\"/images/cases/diglog/tech/chartMob.png\",\"tabl\":\"/images/cases/diglog/tech/chartTabl.png\",\"desk\":\"/images/cases/diglog/tech/chartDesk.png\"}},\"techStack\":[{\"name\":\"PostgreSQL\",\"icon\":\"/images/cases/technologies/postgresql.svg\"},{\"name\":\"NestJS\",\"icon\":\"/images/cases/technologies/nest.svg\"},{\"name\":\"Flutter\",\"icon\":\"/images/cases/technologies/flutter.svg\"},{\"name\":\"Codecommit\",\"icon\":\"/images/cases/technologies/codecommit.svg\"},{\"name\":\"Cognito\",\"icon\":\"/images/cases/technologies/cognito.svg\"},{\"name\":\"Amplify\",\"icon\":\"/images/cases/technologies/amplify.svg\"}]}},{\"id\":\"gmb\",\"mainPageTitle\":\"gmb crush\",\"title\":\"Gmb Crush\",\"title2\":\"Struggling to dominate the local 3-Pack?\",\"subtitle\":\"GMBCrush allows you to optimize the time spent on collecting and analyzing data, as well as creating recommendations for SEO site optimization regarding its positioning in Google.\",\"customerId\":0,\"expertise\":[\"Marketing & Advertising\"],\"technologies\":[\"React\",\"Node.Js\",\"SerpApi\",\"MongoDB\",\"Google My Business\"],\"images\":{\"mb\":\"/images/cases/gmb/imgMob.png\",\"tabl\":\"/images/cases/gmb/imgTabl.png\",\"desk\":\"/images/cases/gmb/imgDesk.png\"},\"metaTitle\":\"GMBCrush is a Martech platform for collecting data | WTT Solutions\",\"metaDescription\":\"GMBCrush is creating recommendations for SEO site optimization regarding its positioning in Google ✅ Read more about the MarTech solution from WTT Solutions experts\",\"vision\":{\"images\":{\"mb\":\"/images/cases/gmb/vision/imgMob.png\",\"tabl\":\"/images/cases/gmb/vision/imgTabl.png\",\"desk\":\"/images/cases/gmb/vision/imgDesk.png\"},\"description\":[\"Our product allows you to conduct SEO analytics of your business, determine the effectiveness of marketing activities and carry out SEO optimization\"]},\"challenge\":{\"images\":{\"mb\":\"/images/cases/gmb/challenge/imgMob.png\",\"tabl\":\"/images/cases/gmb/challenge/imgTabl.png\",\"desk\":\"/images/cases/gmb/challenge/imgDesk.png\"},\"list\":[\"Business profile creation\",\"Adding a competitor card with a description\",\"SEO text optimization based on competitors\"]},\"outcomes\":{\"images\":{\"mb\":\"/images/cases/gmb/outcomes/imgMob.png\",\"tabl\":\"/images/cases/gmb/outcomes/imgTabl.png\",\"desk\":\"/images/cases/gmb/outcomes/imgDesk.png\"},\"description\":\"Building MVP, the platform is intuitive and easy to navigate\"},\"impact\":[{\"text\":\"Integration with Data For SEO and Serp Api\",\"images\":{\"mb\":\"/images/cases/gmb/impact/imgMob.png\",\"tabl\":\"/images/cases/gmb/impact/imgDesk.png\",\"desk\":\"/images/cases/gmb/impact/imgDesk.png\"}},{\"text\":\"Integration with Google My Business\",\"images\":{\"mb\":\"/images/cases/gmb/impact/imgMob2.png\",\"tabl\":\"/images/cases/gmb/impact/imgTabl2.png\",\"desk\":\"/images/cases/gmb/impact/imgDesk2.png\"}},{\"text\":\"Creating a list of competitors, submitting information via CSV\",\"images\":{\"mb\":\"/images/cases/gmb/impact/imgMob3.png\",\"tabl\":\"/images/cases/gmb/impact/imgTabl3.png\",\"desk\":\"/images/cases/gmb/impact/imgDesk3.png\"}}],\"tech\":{\"team\":{\"members\":[{\"name\":\"2 Developers\",\"color\":\" linear-gradient(90.33deg, #FFC223 -0.02%, #FE59A5 46.03%, #FEB028 100.1%)\"},{\"name\":\"PM\",\"color\":\"linear-gradient(180deg, #EF426C 0%, #F92C37 48.96%, #A92C37 100%)\"}],\"diagram\":{\"mb\":\"/images/cases/gmb/tech/chartMob.png\",\"tabl\":\"/images/cases/gmb/tech/chartTabl.png\",\"desk\":\"/images/cases/gmb/tech/chartDesk.png\"}},\"techStack\":[{\"name\":\"Flutter\",\"icon\":\"/images/cases/technologies/flutter.svg\"},{\"name\":\"Node.Js\",\"icon\":\"/images/cases/technologies/node.svg\"},{\"name\":\"MongoDB\",\"icon\":\"/images/cases/technologies/mongodb.svg\"},{\"name\":\"Google My Business\",\"icon\":\"/images/cases/technologies/googlebs.svg\"},{\"name\":\"SerpApi\",\"icon\":\"/images/cases/technologies/serpApi.svg\"}]}},{\"id\":\"content-iq\",\"title\":\"Content IQ\",\"mainPageTitle\":\"Content IQ\",\"subtitle\":\"Moving away from legacy approaches and reimagining business through digital transformation and new digital enterprises\",\"duration\":\"23 months\",\"efforts\":\"39 person-months\",\"customerId\":0,\"expertise\":[\"Marketing & Advertising\"],\"technologies\":[\"React\",\"Node.Js\",\"UI/UX Design\",\"AWS\",\"API integration\",\"MongoDB\"],\"backgrounds\":{\"mb\":\"/images/cases/content-iq/bgMob.jpg\",\"tabl\":\"/images/cases/content-iq/bgTablet.jpg\",\"desk\":\"/images/cases/content-iq/bgDesktop.jpg\"},\"images\":{\"mb\":\"/images/cases/content-iq/main/imgMob.png\",\"tabl\":\"/images/cases/content-iq/main/imgTabl.png\",\"desk\":\"/images/cases/content-iq/main/imgDesk.png\"},\"metaTitle\":\"Content IQ - digital transformation of your business | WTT Solutions\",\"metaDescription\":\"Content IQ reimagining your current business through digital transformation and new digital enterprises ✅ Read more about Martech solution from WTT Solutions\",\"vision\":[{\"title\":\"The vision\",\"img\":\"/images/cases/content-iq/vision/icon1.svg\",\"boldDescription\":\"Provide real-time market intelligence \",\"description\":\"which provides insights on what companies are researching about or actively buying. \"},{\"title\":\"Challenge\",\"img\":\"/images/cases/content-iq/vision/icon2.svg\",\"boldDescription\":\"Develop a SaaS solution for market research, lead generation, nurturing, and scoring.\",\"description\":\" A client approached us with a request to create a platform for searching, processing, and evaluating potential clients and companies. It was necessary to collect requirements, develop a design, find optimal solutions for integration with existing APIs, check the received data for qualitative and quantitative indicators, make sure that the services with which we are integrating are working smoothly.\"}],\"outcomes\":[{\"title\":\"Business Outcomes\",\"text\":\"We introduced a first-class product, a sleek digital tool that offers a much better experience, increases utilization, and helps reps - and end customers - close deals quickly. Our expert marketing technology developers build scalable web and mobile applications to make your business profitable.\"},{\"title\":\"Choose your target audience\",\"text\":\"We will monitor companies and leads looking to purchase your product and services or that are actively researching information about offering\",\"stepImg\":\"/images/cases/content-iq/outcomes/01.png\",\"img\":\"/images/cases/content-iq/outcomes/second1.png\"},{\"title\":\"Upload Your data\",\"text\":\"Provide us one pages case studies, product sheets, e-books and white papers based on leads particular issues. Leverage automation to understand key words and patterns. Match those to your ideal buying personas.\",\"stepImg\":\"/images/cases/content-iq/outcomes/02.png\",\"img\":\"/images/cases/content-iq/outcomes/second2.png\"},{\"title\":\"Hit your numbers\",\"text\":\"Empower your team with actionable insights and buying signals to close more business by saving time and focusing their efforts\",\"stepImg\":\"/images/cases/content-iq/outcomes/03.png\",\"img\":\"/images/cases/content-iq/outcomes/second3.png\"}],\"impact\":[{\"img\":\"/images/cases/content-iq/impact/icon1.svg\",\"text\":\"The number of transactions sent through the app in the first 3 months increased by \",\"percent\":\"203%\"},{\"img\":\"/images/cases/content-iq/impact/icon2.svg\",\"text\":\"Finance approval time has been reduced by\",\"percent\":\"99%\"},{\"img\":\"/images/cases/content-iq/impact/icon3.svg\",\"text\":\"Time spent on completing deal improvements has been reduced by\",\"percent\":\"97%\"}],\"tech\":{\"team\":{\"members\":[{\"name\":\"Quality Assurance\",\"color\":\"#00A6CA\"},{\"name\":\"Project manager\",\"color\":\"#00D1CD\"},{\"name\":\"Business analytic\",\"color\":\"#17752C\"},{\"name\":\"3 developers\",\"color\":\"#838485\"}],\"diagram\":\"/images/cases/content-iq/tech/diagram.svg\"},\"techStack\":{\"icon1\":\"/images/cases/content-iq/tech/react.svg\",\"icon2\":\"/images/cases/content-iq/tech/redux.svg\",\"icon3\":\"/images/cases/content-iq/tech/express.svg\",\"icon4\":\"/images/cases/content-iq/tech/node.svg\",\"icon5\":\"/images/cases/content-iq/tech/mongo.svg\"}}},{\"id\":\"ouzo\",\"title\":\"Ouzo Games\",\"mainPageTitle\":\"Ouzo Games\",\"type\":\"martech\",\"subtitle\":\"Find high-potential, hyper-casual games by automating the sorting process\",\"duration\":\"23 months\",\"efforts\":\"39 person-months\",\"customerId\":0,\"expertise\":[\"Marketing & Advertising\"],\"technologies\":[\"React\",\"Node.Js\",\"UI/UX Design\",\"AWS\",\"API integration\",\"MongoDB\"],\"backgrounds\":{\"mb\":\"/images/cases/ouzo/bgMob.png\",\"tabl\":\"/images/cases/ouzo/bgTabl.png\",\"desk\":\"/images/cases/ouzo/bgDesk.png\"},\"images\":{\"mb\":\"/images/cases/ouzo/main/imgMob.png\",\"tabl\":\"/images/cases/ouzo/main/imgTabl.png\",\"desk\":\"/images/cases/ouzo/main/imgDesk.png\"},\"metaTitle\":\"Ouzo Games helps find profitable games using AI | WTT Solutions\",\"metaDescription\":\"Ouzo Games a self-serve solution for developers by automating the sorting process and allows them to find games for accurately and quickly | WTT Solutions\",\"vision\":{\"title\":\"Ouzo Games helps mobile game publishers find profitable games effectively using AI.\",\"img\":\"/images/cases/ouzo/vision/icon.svg\",\"description\":\" The platform offers a self-serve solution for developers by automating the sorting process. Integrated into the publisher's business process, the platform allows them to find games more accurately, quickly, and with way less investment.\",\"list\":[\"Review and verify\",\"Watch and change details of your tests\",\"Upload ad creatives\",\"Make new creatives\",\"Follow tips regarding formats and sizes\"]},\"challenge\":{\"title\":\"Publishers invest millions in sorting and locating 1-2% of games that can be profitable\",\"img\":\"/images/cases/ouzo/challenge/icon.svg\",\"description1\":\"It is necessary to test the game for attractiveness to the market\",\"description2\":\"Collect statistics based on the use of the game or application in the first week\",\"description3\":\"Create a built-in utility that automatically generates all advertising videos for various social networks based on one input video.\"},\"outcomes\":{\"description1\":\"WTT Solutions provided excellent development services. They understood our vision and backed it 100%.\",\"description2\":\"The team was always engaged, available, and up for the challenge throughout our partnership.\",\"img\":\"/images/cases/content-iq/outcomes/second3.png\"},\"impact\":[{\"title\":\"WTT Solutions have provided excellent development services. They understood our vision and backed it 100%.\",\"text\":\"The team was always engaged, available, and up for the challenge throughout our partnership.\",\"stepImg\":\"/images/cases/content-iq/outcomes/01.png\",\"images\":{\"mb\":\"/images/cases/ouzo/impact/img1Mob.png\",\"tabl\":\"/images/cases/ouzo/impact/img1Tabl.png\",\"desk\":\"/images/cases/ouzo/impact/img1Desk.png\"}},{\"title\":\"Reduced commercial creation for each product by 30-40 minutes.\",\"text\":\"We connected the data scraping from Facebook Retention.  In combination with the Facebook Graph API, it brought us first installations. As a result, the platform has received its unique competitive advantages on the market.        \",\"stepImg\":\"/images/cases/content-iq/outcomes/02.png\",\"images\":{\"mb\":\"/images/cases/ouzo/impact/img2Mob.png\",\"tabl\":\"/images/cases/ouzo/impact/img2Tabl.png\",\"desk\":\"/images/cases/ouzo/impact/img2Desk.png\"}},{\"text\":\"Integration of our platform with Facebook Ads Manager, automatic creation of advertising campaigns, automated receipt, and preparation of statistics on the use of the application based on the Facebook Graph API.\",\"stepImg\":\"/images/cases/content-iq/outcomes/03.png\",\"images\":{\"mb\":\"/images/cases/ouzo/impact/img3Mob.png\",\"tabl\":\"/images/cases/ouzo/impact/img3Tabl.png\",\"desk\":\"/images/cases/ouzo/impact/img3Desk.png\"}}],\"tech\":{\"team\":{\"members\":[{\"name\":\"Project Lead\",\"color\":\"#00A6CA\"},{\"name\":\"2 developers\",\"color\":\"#838485\"}],\"diagram\":\"/images/cases/ouzo/tech/chart.svg\"},\"techStack\":{\"icon1\":\"/images/cases/content-iq/tech/react.svg\",\"icon2\":\"/images/cases/content-iq/tech/redux.svg\",\"icon3\":\"/images/cases/content-iq/tech/mongo.svg\",\"icon4\":\"/images/cases/content-iq/tech/node.svg\",\"icon5\":\"/images/cases/content-iq/tech/express.svg\"}}},{\"id\":\"amigoes\",\"title\":\"Amigoes\",\"subtitle\":\"Create and promote activities you host, target your audience and be ready to welcome them\",\"type\":\"fintech\",\"customerId\":0,\"expertise\":[\"Marketing & Advertising\"],\"technologies\":[\"Flutter\",\"Dart\",\"Express.Js\",\"TypeScript\",\"PostgreSQL\"],\"images\":{\"mb\":\"/images/cases/ami/imgMob.png\",\"tabl\":\"/images/cases/ami/imgTabl.png\",\"desk\":\"/images/cases/ami/imgDesk.png\"},\"metaTitle\":\"Amigoes is a platform for advertising your business  | WTT Solutions\",\"metaDescription\":\"Amigoes - Create and promote activities you host, target your audience and be ready to welcome them ✅ Read more about the MarTech solution from WTT Solutions\",\"vision\":{\"images\":{\"mb\":\"/images/cases/ami/vision/imgMob.png\",\"tabl\":\"/images/cases/ami/vision/imgTabl.png\",\"desk\":\"/images/cases/ami/vision/imgDesk.png\"},\"description\":\"It`s a platform for advertising your business. As a business owner, you can either promote activities you host or promote video/image ads. You can publish an activity with location, photos, price, etc. If you add a coupon with some special offer we will promote it to your target audience\"},\"challenge\":{\"images\":{\"mb\":\"/images/cases/ami/challenge/imgMob.png\",\"tabl\":\"/images/cases/ami/challenge/imgTabl.png\",\"desk\":\"/images/cases/ami/challenge/imgDesk.png\"},\"list\":[\"Build the right architecture of a product\",\"Connect Google Maps and display custom markers\",\"Implement separate for business and separate for user croppers\",\"Realization of the gallery and selection of pictures for a horizontal and vertical preview\",\"Introduction of a grouping of custom markers\"]},\"outcomes\":{\"images\":{\"mb\":\"/images/cases/ami/outcomes/imgMob.png\",\"tabl\":\"/images/cases/ami/outcomes/imgTabl.png\",\"desk\":\"/images/cases/ami/outcomes/imgDesk.png\"},\"description\":\"Building MVP, the platform is intuitive and easy to navigate\"},\"impact\":[{\"text\":\"Use RxVMS as a basis when building an architecture\",\"images\":{\"mb\":\"/images/cases/ami/impact/imgMob1.png\",\"tabl\":\"/images/cases/ami/impact/imgTabl1.png\",\"desk\":\"/images/cases/ami/impact/imgDesk1.png\"}},{\"text\":\"Use Google maps API (Geocoding + Google places API) for maps\",\"images\":{\"mb\":\"/images/cases/ami/impact/imgMob2.png\",\"tabl\":\"/images/cases/ami/impact/imgTabl2.png\",\"desk\":\"/images/cases/ami/impact/imgDesk2.png\"}},{\"text\":\"The image_picker, multi_image_picker plug-in was used to implement the gallery and select images for horizontal and vertical previews\",\"images\":{\"mb\":\"/images/cases/ami/impact/imgMob3.png\",\"tabl\":\"/images/cases/ami/impact/imgTabl3.png\",\"desk\":\"/images/cases/ami/impact/imgDesk3.png\"}},{\"text\":\"The image_crop package was used to implement croppers\",\"images\":{\"mb\":\"/images/cases/ami/impact/imgMob4.png\",\"tabl\":\"/images/cases/ami/impact/imgTabl4.png\",\"desk\":\"/images/cases/ami/impact/imgDesk4.png\"}}],\"tech\":{\"team\":{\"members\":[{\"name\":\"2 Developers\",\"color\":\"linear-gradient(90.33deg, #FFC223 -0.02%, #FE59A5 46.03%, #FEB028 100.1%)\"},{\"name\":\"Pm\",\"color\":\"linear-gradient(180deg, #EF426C 0%, #F92C37 48.96%, #A92C37 100%)\"}],\"diagram\":{\"mb\":\"/images/cases/ami/tech/chartMob.png\",\"tabl\":\"/images/cases/ami/tech/chartTabl.png\",\"desk\":\"/images/cases/ami/tech/chartDesk.png\"}},\"techStack\":[{\"name\":\"PostgreSQL\",\"icon\":\"/images/cases/technologies/postgresql.svg\"},{\"name\":\"Flutter\",\"icon\":\"/images/cases/technologies/flutter.svg\"},{\"name\":\"ExpressJs\",\"icon\":\"/images/cases/technologies/express.svg\"},{\"name\":\"Dart\",\"icon\":\"/images/cases/technologies/dart.svg\"},{\"name\":\"TypeScript\",\"icon\":\"/images/cases/technologies/typescript.svg\"}]}},{\"id\":\"paidiem\",\"mainPageTitle\":\"paidiem\",\"title\":\"Paidiem\",\"subtitle\":\"Early payment options for contingent workers and suppliers\",\"subtitle2\":\"Early payment options for contingent workers and suppliers. Paidiem provides on-demand payment options with no changes to your current workflow or cashflow\",\"customerId\":0,\"expertise\":[\"Financial services\"],\"technologies\":[\"Node.Js\",\"MongoDB\",\"AWS\",\"React\",\"JavaScript\",\"TypeScript\",\"SendGrid\"],\"images\":{\"mb\":\"/images/cases/paidiem/imgMob.png\",\"tabl\":\"/images/cases/paidiem/imgTabl.png\",\"desk\":\"/images/cases/paidiem/imgDesk.png\"},\"metaTitle\":\"Paidiem - Payment options for workers and suppliers | WTT Solutions\",\"metaDescription\":\"GMBCrush is creating recommendations for SEO site optimization regarding its positioning in Google ✅ Read more about the MarTech solution from WTT Solutions\",\"vision\":{\"images\":{\"mb\":\"/images/cases/paidiem/vision/imgMob.png\",\"tabl\":\"/images/cases/paidiem/vision/imgTabl.png\",\"desk\":\"/images/cases/paidiem/vision/imgDesk.png\"},\"description\":\"When you have the right tools and the support you need, going out on your own is a choice anyone can feel confident making. Because when independent workers and employers feel empowered, that’s a win-win\"},\"challenge\":{\"images\":{\"mb\":\"/images/cases/paidiem/challenge/imgMob.png\",\"tabl\":\"/images/cases/paidiem/challenge/imgTabl.png\",\"desk\":\"/images/cases/paidiem/challenge/imgDesk.png\"},\"list\":[\"Develop online services for four leading roles: admins, managers, approvers, workers\",\"Adding salary payments for managers\",\"Implementation of the function of filling in timesheets and control over the receipt of wages for workers\",\"Implementation of the function of creation / deleting / editing organizations for admins\",\"Implementation of the function of checking the correctness of the stored timesheets for approvers\"]},\"outcomes\":{\"images\":{\"mb\":\"/images/cases/paidiem/outcomes/imgMob.png\",\"tabl\":\"/images/cases/paidiem/outcomes/imgTabl.png\",\"desk\":\"/images/cases/paidiem/outcomes/imgDesk.png\"},\"description\":\"Developing a contingent and workforce all-in-one management platform\"},\"impact\":[{\"text\":\"Deploy the server part to AWS\",\"images\":{\"mb\":\"/images/cases/paidiem/impact/imgMob1.png\",\"tabl\":\"/images/cases/paidiem/impact/imgTabl1.png\",\"desk\":\"/images/cases/paidiem/impact/imgDesk1.png\"}},{\"text\":\"We implemented UI using React and Typescript for hard typing.\",\"images\":{\"mb\":\"/images/cases/paidiem/impact/imgMob2.png\",\"tabl\":\"/images/cases/paidiem/impact/imgTabl2.png\",\"desk\":\"/images/cases/paidiem/impact/imgDesk2.png\"}},{\"text\":\"Mongodb was used for the database\",\"images\":{\"mb\":\"/images/cases/paidiem/impact/imgMob3.png\",\"tabl\":\"/images/cases/paidiem/impact/imgTabl3.png\",\"desk\":\"/images/cases/paidiem/impact/imgDesk3.png\"}},{\"text\":\"Use sendgrid to send email messages\",\"images\":{\"mb\":\"/images/cases/paidiem/impact/imgMob4.png\",\"tabl\":\"/images/cases/paidiem/impact/imgTabl4.png\",\"desk\":\"/images/cases/paidiem/impact/imgDesk4.png\"}}],\"tech\":{\"team\":{\"members\":[{\"name\":\"3 Developers\",\"color\":\"linear-gradient(90.33deg, #FFC223 -0.02%, #FE59A5 46.03%, #FEB028 100.1%)\"},{\"name\":\"PM\",\"color\":\"linear-gradient(180deg, #EF426C 0%, #F92C37 48.96%, #A92C37 100%)\"}],\"diagram\":{\"mb\":\"/images/cases/paidiem/tech/chartMob.png\",\"tabl\":\"/images/cases/paidiem/tech/chartTabl.png\",\"desk\":\"/images/cases/paidiem/tech/chartDesk.png\"}},\"techStack\":[{\"name\":\"Node.JS\",\"icon\":\"/images/cases/technologies/node.svg\"},{\"name\":\"MongoDB\",\"icon\":\"/images/cases/technologies/mongodb.svg\"},{\"name\":\"TypeScript\",\"icon\":\"/images/cases/technologies/typescript.svg\"},{\"name\":\"AWS\",\"icon\":\"/images/cases/technologies/amazon.svg\"},{\"name\":\"JavaScript\",\"icon\":\"/images/cases/technologies/javascript.svg\"},{\"name\":\"React\",\"icon\":\"/images/cases/technologies/react.svg\"},{\"name\":\"SendGrid\",\"icon\":\"/images/cases/technologies/sendgrid.svg\"}]}},{\"id\":\"forecheck\",\"title\":\"Forecheck\",\"title2\":\"Incident Management & Remediation SAAS\",\"subtitle\":\"Instantly cover more attacker techniques and more hours of the day. With Forecheck as an extension of your team, you’ll reduce risk over time and improve security overnight.\",\"type\":\"fintech\",\"customerId\":0,\"expertise\":[\"Computer Software\"],\"technologies\":[\"React.Js\",\"TypeScript\",\"Material UI\",\"OAuth\",\"Axios\"],\"images\":{\"mb\":\"/images/cases/forecheck/imgMob.png\",\"tabl\":\"/images/cases/forecheck/imgTabl.png\",\"desk\":\"/images/cases/forecheck/imgDesk.png\"},\"metaTitle\":\"Forecheck - incident management and remediation SAAS | WTT Solutions\",\"metaDescription\":\"Forecheck is a full-featured application ( APP) for infrastructure administration and security ✅ Read about Computer Software solutions from WTT Solutions\",\"vision\":{\"images\":{\"mb\":\"/images/cases/forecheck/vision/imgMob.png\",\"tabl\":\"/images/cases/forecheck/vision/imgTabl.png\",\"desk\":\"/images/cases/forecheck/vision/imgDesk.png\"},\"description\":\"Full featured front-end application including authentication and session management for infrastructure administration\"},\"challenge\":{\"images\":{\"mb\":\"/images/cases/forecheck/challenge/imgMob.png\",\"tabl\":\"/images/cases/forecheck/challenge/imgTabl.png\",\"desk\":\"/images/cases/forecheck/challenge/imgDesk.png\"},\"list\":[\"Setting up an authorization process via OAuth without storing secret data on the user side\",\"Coordination of the format of the data that came from the backend for drawing tables in the interface and control of the correspondence of the incoming data\",\"Optimization cycle of reimaging/redeploying or incidents repeating over and over\"]},\"outcomes\":{\"images\":{\"mb\":\"/images/cases/forecheck/outcomes/imgMob.png\",\"tabl\":\"/images/cases/forecheck/outcomes/imgTabl.png\",\"desk\":\"/images/cases/forecheck/outcomes/imgDesk.png\"},\"description\":\"Building a product for intaking security data. The product is multi-tenant and hosted in AWS\"},\"impact\":[{\"text\":\"Improving security configuration for the client environment\",\"images\":{\"mb\":\"/images/cases/forecheck/impact/imgMob1.png\",\"tabl\":\"/images/cases/forecheck/impact/imgTabl1.png\",\"desk\":\"/images/cases/forecheck/impact/imgDesk1.png\"}},{\"text\":\"Using the IMR frontend to map resilience documents that exist across all clients to client/tenant\",\"images\":{\"mb\":\"/images/cases/forecheck/impact/imgMob2.png\",\"tabl\":\"/images/cases/forecheck/impact/imgTabl2.png\",\"desk\":\"/images/cases/forecheck/impact/imgDesk2.png\"}},{\"text\":\"Creating a clear user interface using UI / UX\",\"images\":{\"mb\":\"/images/cases/forecheck/impact/imgMob3.png\",\"tabl\":\"/images/cases/forecheck/impact/imgTabl3.png\",\"desk\":\"/images/cases/forecheck/impact/imgDesk3.png\"}},{\"text\":\"Implement and interact with Amazon Cognito for RBAC and user database actions.\",\"images\":{\"mb\":\"/images/cases/forecheck/impact/imgMob4.png\",\"tabl\":\"/images/cases/forecheck/impact/imgTabl4.png\",\"desk\":\"/images/cases/forecheck/impact/imgDesk4.png\"}},{\"text\":\"Using OAuth authentication for facilitate API connections\",\"images\":{\"mb\":\"/images/cases/forecheck/impact/imgMob5.png\",\"tabl\":\"/images/cases/forecheck/impact/imgTabl5.png\",\"desk\":\"/images/cases/forecheck/impact/imgDesk5.png\"}},{\"text\":\"To save MVP time, we handle version control outside of the frontend.\",\"images\":{\"mb\":\"/images/cases/forecheck/impact/imgMob6.png\",\"tabl\":\"/images/cases/forecheck/impact/imgTabl6.png\",\"desk\":\"/images/cases/forecheck/impact/imgDesk6.png\"}}],\"tech\":{\"team\":{\"members\":[{\"name\":\"3 Developers\",\"color\":\"linear-gradient(180deg, #EF426C 0%, #F92C37 48.96%, #A92C37 100%)\"},{\"name\":\"ux/ui designer\",\"color\":\"linear-gradient(90.33deg, #FFC223 -0.02%, #FE59A5 46.03%, #FEB028 100.1%)\"},{\"name\":\"pm\",\"color\":\"linear-gradient(180deg, #8FC424 0%, #1EAA4B 100%)\"},{\"name\":\"qa\",\"color\":\"#259198\"}],\"diagram\":{\"mb\":\"/images/cases/forecheck/tech/chartMob.png\",\"tabl\":\"/images/cases/forecheck/tech/chartTabl.png\",\"desk\":\"/images/cases/forecheck/tech/chartDesk.png\"}},\"techStack\":[{\"name\":\"React.Js\",\"icon\":\"/images/cases/technologies/react.svg\"},{\"name\":\"TypeScript\",\"icon\":\"/images/cases/technologies/typescript.svg\"},{\"name\":\"Material UI\",\"icon\":\"/images/cases/technologies/mui.svg\"},{\"name\":\"OAuth\",\"icon\":\"/images/cases/technologies/oauth.svg\"},{\"name\":\"Axios\",\"icon\":\"/images/cases/technologies/axios.svg\"}]}},{\"id\":\"wisecube\",\"title\":\"Wisecube\",\"subtitle\":\"These AI models can then be later used to score chemical compound lists\",\"subtitle2\":\"These AI models can then be later used to score chemical compound lists. They can give a descriptive name to the AI model when doing so and the system will keep track of the dataset used.\",\"type\":\"healthcare\",\"customerId\":0,\"expertise\":[\"HealthCare\"],\"technologies\":[\"React\",\"Plotly.js\",\"Smiles-drawer\"],\"images\":{\"mb\":\"/images/cases/wisecube/imgMob.png\",\"tabl\":\"/images/cases/wisecube/imgTabl.png\",\"desk\":\"/images/cases/wisecube/imgDesk.png\"},\"metaTitle\":\"Custom HealthCare solution from our experts - Wisecube | WTT Solutions\",\"metaDescription\":\"AI models can be later used to score chemical compound lists ✅ Learn how to accelerate drug discovery and development from Wisecube AI platform | WTT Solutions\",\"vision\":{\"images\":{\"mb\":\"/images/cases/wisecube/vision/imgMob.png\",\"tabl\":\"/images/cases/wisecube/vision/imgTabl.png\",\"desk\":\"/images/cases/wisecube/vision/imgDesk.png\"},\"description\":\"We`re reimagining how small molecule drugs are ideated, screened, and validated using AI. If you are looking to accelerate your drug discovery and development, you need to learn about the Wisecube AI platform.\"},\"challenge\":{\"images\":{\"mb\":\"/images/cases/wisecube/challenge/imgMob.png\",\"tabl\":\"/images/cases/wisecube/challenge/imgTabl.png\",\"desk\":\"/images/cases/wisecube/challenge/imgDesk.png\"},\"list\":[\"Developing and upload datasets and train models\",\"Add compounds, score them with trained models\",\"Developing compounds favorite lists\"]},\"outcomes\":{\"images\":{\"mb\":\"/images/cases/wisecube/outcomes/imgMob.png\",\"tabl\":\"/images/cases/wisecube/outcomes/imgTabl.png\",\"desk\":\"/images/cases/wisecube/outcomes/imgDesk.png\"},\"description\":\"Formation of a UI prototype and combine it with back-end\"},\"impact\":[{\"text\":\"To visualize the data decided to use Open Source Graphing Library - plotly.js\",\"images\":{\"mb\":\"/images/cases/wisecube/impact/imgMob.png\",\"tabl\":\"/images/cases/wisecube/impact/imgTabl.png\",\"desk\":\"/images/cases/wisecube/impact/imgDesk.png\"}},{\"text\":\"To grind the molecules, we decided to use the smiles-drawer module\",\"images\":{\"mb\":\"/images/cases/wisecube/impact/imgMob2.png\",\"tabl\":\"/images/cases/wisecube/impact/imgTabl2.png\",\"desk\":\"/images/cases/wisecube/impact/imgDesk2.png\"}},{\"text\":\"Creating a straightforward user interface using UI / UX\",\"images\":{\"mb\":\"/images/cases/wisecube/impact/imgMob3.png\",\"tabl\":\"/images/cases/wisecube/impact/imgTabl3.png\",\"desk\":\"/images/cases/wisecube/impact/imgDesk3.png\"}},{\"text\":\"We implemented UI using React\",\"images\":{\"mb\":\"/images/cases/wisecube/impact/imgMob4.png\",\"tabl\":\"/images/cases/wisecube/impact/imgTabl4.png\",\"desk\":\"/images/cases/wisecube/impact/imgDesk4.png\"}}],\"tech\":{\"team\":{\"members\":[{\"name\":\"2 Developers\",\"color\":\"linear-gradient(90.33deg, #FFC223 -0.02%, #FE59A5 46.03%, #FEB028 100.1%)\"},{\"name\":\"Pm\",\"color\":\"linear-gradient(180deg, #EF426C 0%, #F92C37 48.96%, #A92C37 100%)\"}],\"diagram\":{\"mb\":\"/images/cases/wisecube/tech/chartMob.png\",\"tabl\":\"/images/cases/wisecube/tech/chartTabl.png\",\"desk\":\"/images/cases/wisecube/tech/chartDesk.png\"}},\"techStack\":[{\"name\":\"React\",\"icon\":\"/images/cases/technologies/react.svg\"},{\"name\":\"Plotly.JS\",\"icon\":\"/images/cases/technologies/plotly.svg\"},{\"name\":\"Smiles-drawer\",\"icon\":\"/images/cases/technologies/smilesDrawer.svg\"}]}},{\"id\":\"knowledge-pillars\",\"title\":\"Knowledge Pillars\",\"subtitle\":\"Technology-driven Skills Validation for Future Careers\",\"expertise\":[\"Education\"],\"technologies\":[\"Node.Js\",\"TypeScript\",\"Express\",\"MongoDB\",\"Amazon Cognito\",\"Amazon Lightsail\",\"Amazon Amplify\",\"React\",\"Redux\"],\"metaTitle\":\"Knowledge Pillars - technology-driven skills validation\",\"metaDescription\":\"Knowledge Pillars - industry-leading practice and certification exams for students and industry professionals ✅ Read about EdTech solutions from WTT Solutions\",\"images\":{\"mb\":\"/images/cases/pillars/imgMob.png\",\"tabl\":\"/images/cases/pillars/imgTabl.png\",\"desk\":\"/images/cases/pillars/imgDesk.png\"},\"vision\":{\"images\":{\"mb\":\"/images/cases/pillars/vision/imgMob.png\",\"tabl\":\"/images/cases/pillars/vision/imgTabl.png\",\"desk\":\"/images/cases/pillars/vision/imgDesk.png\"},\"description\":\"Knowledge Pillars provides industry-leading practice and certification exams aimed at K-12 or college-level students and industry professionals. Our mission to help students and aspiring professionals validate their IT capabilities by verifying their skills through in-app vendor-neutral and globally recognized certifications, that benefit both employers and jobseekers alike.\"},\"challenge\":{\"images\":{\"mb\":\"/images/cases/pillars/challenge/imgMob.png\",\"tabl\":\"/images/cases/pillars/challenge/imgTabl.png\",\"desk\":\"/images/cases/pillars/challenge/imgDesk.png\"},\"list\":[\"Implement the process of examining the skills using WordPress\",\"The process of creating and preparing a server with WordPress is automated\",\"Integrate WordPress into the site page\"]},\"outcomes\":{\"description\":\"Make a minimal working version of technical skills testing services of students.The service is implemented in such a way that students passing the WordPress exam do not interfere with each other\",\"images\":{\"mb\":\"/images/cases/pillars/outcomes/imgMob.png\",\"tabl\":\"/images/cases/pillars/outcomes/imgTabl.png\",\"desk\":\"/images/cases/pillars/outcomes/imgDesk.png\"}},\"impact\":[{\"text\":\"Use the Amazon Lightsail service, which offered ready-made builds of virtual servers with WordPress\",\"images\":{\"mb\":\"/images/cases/pillars/impact/imgMob1.png\",\"tabl\":\"/images/cases/pillars/impact/imgTabl1.png\",\"desk\":\"/images/cases/pillars/impact/imgDesk1.png\"}},{\"text\":\"A new virtual server was created for each exam. Once completed, it was removed\",\"images\":{\"mb\":\"/images/cases/pillars/impact/imgMob2.png\",\"tabl\":\"/images/cases/pillars/impact/imgTabl2.png\",\"desk\":\"/images/cases/pillars/impact/imgDesk2.png\"}},{\"text\":\"Changing the content of the test site on WordPress as the tasks were completed. Before starting the task, the software created the articles, pages, etc. necessary for its execution\",\"text2\":\"After the student completed the task, all changes were cleared before preparing for the next task\",\"images\":{\"mb\":\"/images/cases/pillars/impact/imgMob3.png\",\"tabl\":\"/images/cases/pillars/impact/imgTabl3.png\",\"desk\":\"/images/cases/pillars/impact/imgDesk3.png\"}}],\"tech\":{\"team\":{\"members\":[{\"name\":\"2 Developers\",\"color\":\"linear-gradient(180deg, #EF426C 0%, #F92C37 48.96%, #A92C37 100%)\"},{\"name\":\"Pm\",\"color\":\"linear-gradient(90.33deg, #FFC223 -0.02%, #FE59A5 46.03%, #FEB028 100.1%)\"}],\"diagram\":{\"mb\":\"/images/cases/pillars/tech/chartMob.png\",\"tabl\":\"/images/cases/pillars/tech/chartTabl.png\",\"desk\":\"/images/cases/pillars/tech/chartDesk.png\"}},\"techStack\":[{\"name\":\"Node.Js\",\"icon\":\"/images/cases/technologies/node.svg\"},{\"name\":\"TypeScript\",\"icon\":\"/images/cases/technologies/typescript.svg\"},{\"name\":\"Express.Js\",\"icon\":\"/images/cases/technologies/express.svg\"},{\"name\":\"MongoDB\",\"icon\":\"/images/cases/technologies/mongodb.svg\"},{\"name\":\"React\",\"icon\":\"/images/cases/technologies/react.svg\"},{\"name\":\"Redux\",\"icon\":\"/images/cases/technologies/redux.svg\"},{\"name\":\"Amazon Cognito\",\"icon\":\"/images/cases/technologies/amazonCognito.svg\"},{\"name\":\"Amazon Lightsail\",\"icon\":\"/images/cases/technologies/amazonLightsail.svg\"},{\"name\":\"Amazon Amplify\",\"icon\":\"/images/cases/technologies/amazonAmplify.svg\"}]}},{\"id\":\"ezydispatch\",\"mainPageTitle\":\"ezydispatch\",\"title\":\"Ezydispatch\",\"subtitle\":\"Management system for delivery services. Manage your employees and customers.\",\"customerId\":0,\"expertise\":[\"HR\"],\"technologies\":[\"Node.Js\",\"MongoDB\",\"TypeScript\",\"Express.Js\",\"SendGrid\",\"JSONWebToken\",\"AWS\",\"React\",\"JavaScript\",\"Socket.Io\",\"Bootstrap\"],\"images\":{\"mb\":\"/images/cases/ezydispatch/imgMob.png\",\"tabl\":\"/images/cases/ezydispatch/imgTabl.png\",\"desk\":\"/images/cases/ezydispatch/imgDesk.png\"},\"metaTitle\":\"Ezydispatch helps manage employees and customers | WTT Solutions\",\"metaDescription\":\"Ezydispatch is a management software tool for delivery services that manage your employees and customers ✅ Read about the HRTech solution from WTT Solutions\",\"vision\":{\"description\":[\"Only software tool your moving company needs. Whether you’re a one man operation or you have franchises across the country, maximize your sales, marketing, operations, and profits with the one software tool that makes every part of your company achieve its potential\"],\"images\":{\"mb\":\"/images/cases/ezydispatch/vision/imgMob.png\",\"tabl\":\"/images/cases/ezydispatch/vision/imgTabl.png\",\"desk\":\"/images/cases/ezydispatch/vision/imgDesk.png\"}},\"challenge\":{\"images\":{\"mb\":\"/images/cases/ezydispatch/challenge/imgMob.png\",\"tabl\":\"/images/cases/ezydispatch/challenge/imgTabl.png\",\"desk\":\"/images/cases/ezydispatch/challenge/imgDesk.png\"},\"list\":[\"Develop online services for three leading roles: admin, foreman, worker\",\"Implementation of the function of forming a team for a specific order for the foreman\",\"Implementation of the function of filling out reports for the workers\",\"Implementation of the function of creating new roles and editing old ones for the admins\"]},\"outcomes\":{\"images\":{\"mb\":\"/images/cases/ezydispatch/outcomes/imgMob.png\",\"tabl\":\"/images/cases/ezydispatch/outcomes/imgTabl.png\",\"desk\":\"/images/cases/ezydispatch/outcomes/imgDesk.png\"},\"description\":\"Developing a contingent and workforce all-in-one management platform\"},\"impact\":[{\"text\":\"Deploy the server part to AWS\",\"images\":{\"mb\":\"/images/cases/ezydispatch/impact/imgMob.png\",\"tabl\":\"/images/cases/ezydispatch/impact/imgDesk.png\",\"desk\":\"/images/cases/ezydispatch/impact/imgDesk.png\"}},{\"text\":\"We implemented UI using bootstrap, React and Typescript for hard typing\",\"images\":{\"mb\":\"/images/cases/ezydispatch/impact/imgMob2.png\",\"tabl\":\"/images/cases/ezydispatch/impact/imgTabl2.png\",\"desk\":\"/images/cases/ezydispatch/impact/imgDesk2.png\"}},{\"text\":\"Write a chat using socket.io\",\"images\":{\"mb\":\"/images/cases/ezydispatch/impact/imgMob3.png\",\"tabl\":\"/images/cases/ezydispatch/impact/imgTabl3.png\",\"desk\":\"/images/cases/ezydispatch/impact/imgDesk3.png\"}},{\"text\":\"Mongodb was used for the database\",\"images\":{\"mb\":\"/images/cases/ezydispatch/impact/imgMob4.png\",\"tabl\":\"/images/cases/ezydispatch/impact/imgTabl4.png\",\"desk\":\"/images/cases/ezydispatch/impact/imgDesk4.png\"}},{\"text\":\"Use sendgrid to send email messages\",\"images\":{\"mb\":\"/images/cases/ezydispatch/impact/imgMob5.png\",\"tabl\":\"/images/cases/ezydispatch/impact/imgTabl5.png\",\"desk\":\"/images/cases/ezydispatch/impact/imgDesk5.png\"}}],\"tech\":{\"team\":{\"members\":[{\"name\":\"2 Developers\",\"color\":\"linear-gradient(180deg, #EF426C 0%, #F92C37 48.96%, #A92C37 100%)\"},{\"name\":\"2 UI/UX Designers\",\"color\":\"linear-gradient(90.33deg, #FFC223 -0.02%, #FE59A5 46.03%, #FEB028 100.1%)\"},{\"name\":\"PM & BA\",\"color\":\"linear-gradient(180deg, #8FC424 0%, #1EAA4B 100%)\"}],\"diagram\":{\"mb\":\"/images/cases/ezydispatch/tech/chartMob.png\",\"tabl\":\"/images/cases/ezydispatch/tech/chartTabl.png\",\"desk\":\"/images/cases/ezydispatch/tech/chartDesk.png\"}},\"techStack\":[{\"name\":\"Node.Js\",\"icon\":\"/images/cases/technologies/node.svg\"},{\"name\":\"React\",\"icon\":\"/images/cases/technologies/react.svg\"},{\"name\":\"MongoDB\",\"icon\":\"/images/cases/technologies/mongodb.svg\"},{\"name\":\"TypeScript\",\"icon\":\"/images/cases/technologies/typescript.svg\"},{\"name\":\"Express.Js\",\"icon\":\"/images/cases/technologies/express.svg\"},{\"name\":\"SendGrid\",\"icon\":\"/images/cases/technologies/sendgrid.svg\"},{\"name\":\"Socket.io\",\"icon\":\"/images/cases/technologies/socketio.svg\"},{\"name\":\"AWS\",\"icon\":\"/images/cases/technologies/amazon.svg\"},{\"name\":\"JavaScript\",\"icon\":\"/images/cases/technologies/javascript.svg\"},{\"name\":\"Bootstrap\",\"icon\":\"/images/cases/technologies/bootstrap.svg\"},{\"name\":\"JSONWebToken\",\"icon\":\"/images/cases/technologies/jwt.svg\"}]}}]");

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

/***/ "pfUk":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "q5Ud":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });