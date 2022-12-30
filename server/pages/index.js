module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		23: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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

/***/ "1IPs":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2GLX":
/***/ (function(module, exports) {

module.exports = require("react-player/lazy");

/***/ }),

/***/ "2tlT":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8j2J":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "9Lja":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "9TSj":
/***/ (function(module, exports) {

module.exports = require("next-export-i18n");

/***/ }),

/***/ "BPOQ":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "EWbg":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "OfkW":
/***/ (function(module, exports) {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "QOVn":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "Qx0H":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__("Vvt1");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);

// EXTERNAL MODULE: external "next-export-i18n"
var external_next_export_i18n_ = __webpack_require__("9TSj");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/Scroll/Scroll.jsx + 7 modules
var Scroll = __webpack_require__("e5fm");

// EXTERNAL MODULE: ./components/Scroll/ScrollSection.jsx
var ScrollSection = __webpack_require__("gvAc");

// EXTERNAL MODULE: ./assets/data/home/bussiness.json
var bussiness = __webpack_require__("EWbg");

// EXTERNAL MODULE: ./assets/data/home/reviews.json
var home_reviews = __webpack_require__("BPOQ");

// EXTERNAL MODULE: ./assets/data/home/services.json
var home_services = __webpack_require__("QOVn");

// EXTERNAL MODULE: ./assets/data/home/reasons.json
var home_reasons = __webpack_require__("tDMk");

// EXTERNAL MODULE: ./config/metadata.js
var metadata = __webpack_require__("MRCQ");

// CONCATENATED MODULE: ./utils/typeWriterAnimation.js
const TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  const i = this.loopNum % this.toRotate.length;
  const fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  const that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

const InitTextWriterAnimation = () => {
  if (false) { var i; }
};

/* harmony default export */ var typeWriterAnimation = (InitTextWriterAnimation);
// EXTERNAL MODULE: ./hooks/useWindowSize.js
var useWindowSize = __webpack_require__("MhZx");

// EXTERNAL MODULE: ./utils/microdata/index.js
var microdata = __webpack_require__("WaFN");

// EXTERNAL MODULE: ./config/constants.js
var constants = __webpack_require__("wJ4g");

// EXTERNAL MODULE: ./config/routing.js
var routing = __webpack_require__("TTxv");

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./pages/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const loading = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  children: "Loading..."
});

const CaseStudy = dynamic_default()(() => __webpack_require__.e(/* import() */ 36).then(__webpack_require__.bind(null, "deDR")), {
  loading,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("deDR")],
    modules: ["index.js -> " + '../components/ReusableComponents/SuccessStories/SuccessStories']
  }
});
const Reasons = dynamic_default()(() => __webpack_require__.e(/* import() */ 38).then(__webpack_require__.bind(null, "mWJt")), {
  loading,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("mWJt")],
    modules: ["index.js -> " + '../components/HomePage/Reasons/HomeReasons']
  }
});
const Reviews = dynamic_default()(() => __webpack_require__.e(/* import() */ 39).then(__webpack_require__.bind(null, "obpT")), {
  loading,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("obpT")],
    modules: ["index.js -> " + '../components/HomePage/Reviews/Reviews']
  }
});
const Header = dynamic_default()(() => __webpack_require__.e(/* import() */ 34).then(__webpack_require__.bind(null, "v9K6")), {
  loading,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("v9K6")],
    modules: ["index.js -> " + '../components/HomePage/Header/Header']
  }
});
const Services = dynamic_default()(() => __webpack_require__.e(/* import() */ 37).then(__webpack_require__.bind(null, "pQg0")), {
  loading,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("pQg0")],
    modules: ["index.js -> " + '../components/HomePage/Services/Services']
  }
});
const BusinessPains = dynamic_default()(() => __webpack_require__.e(/* import() */ 42).then(__webpack_require__.bind(null, "lyWB")), {
  loading,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("lyWB")],
    modules: ["index.js -> " + '../components/HomePage/BusinessPains/BusinessPains']
  }
});
const Video = dynamic_default()(() => __webpack_require__.e(/* import() */ 40).then(__webpack_require__.bind(null, "1rkf")), {
  loading,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("1rkf")],
    modules: ["index.js -> " + '../components/HomePage/Video/Video']
  }
});
const CTA = dynamic_default()(() => __webpack_require__.e(/* import() */ 35).then(__webpack_require__.bind(null, "E0DC")), {
  loading,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("E0DC")],
    modules: ["index.js -> " + '../components/ReusableComponents/CTA/CTA']
  }
});

 // import CaseStudy from '../components/ReusableComponents/SuccessStories/SuccessStories';
// import Reasons from '../components/HomePage/Reasons/HomeReasons';
// import Reviews from '../components/HomePage/Reviews/Reviews';
// import Header from '../components/HomePage/Header/Header';
// import Services from '../components/HomePage/Services/Services';
// import BusinessPains from '../components/HomePage/BusinessPains/BusinessPains';
// import Video from '../components/HomePage/Video/Video';
// import CTA from '../components/ReusableComponents/CTA/CTA';















function Index({
  geolocation
}) {
  const router = Object(router_["useRouter"])();
  const {
    t
  } = Object(external_next_export_i18n_["useTranslation"])();
  const business = t('home.business');
  const reviews = t('home.reviews');
  const services = t('home.services');
  const reasons = t('home.reasons');
  const {
    width
  } = Object(useWindowSize["a" /* default */])();
  Object(external_react_["useEffect"])(() => {
    if (false) {}
  }, [false]);
  Object(external_react_["useEffect"])(() => {
    const deFlag = localStorage.getItem('deFlag');
    const GermanCountries = ['Germany', 'Switzerland', 'Austria', 'Mexico', 'Hong Kong', 'Japan', 'Finland', 'Italy', 'France'];
    console.log('--------', geolocation);

    if (GermanCountries.includes(geolocation.country_name) && deFlag !== 'off') {
      console.log('!!!!!!!!', geolocation.country_name);
      localStorage.setItem('deFlag', 'off');
      router.push(Object(routing["a" /* default */])().root + '?lang=de');
    } else {
      localStorage.removeItem('deFlag');
    }
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Scroll["a" /* default */], {
      titles: [t('makeYour') + ' EDTECH ' + t('companies'), t('ourServices'), t('clientsSay'), t('homePageVideoTitle'), t('home.reasons.title'), t('caseStudy'), t('CTATitle')],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
          children: metadata["a" /* meta */].homePageTitle
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "description",
          content: metadata["a" /* meta */].homePageDescription
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {
          width: width
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Services, {
          data: services
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Reviews, {
          data: reviews,
          id: constants["v" /* clientsAboutUsScroll */].home.reviewComponentID,
          width: width
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Video, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Reasons, {
          data: reasons
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CaseStudy, {
          mainTopTitle: t('caseStudy')
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BusinessPains, {
          data: business,
          width: width
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScrollSection["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CTA, {
          CTATitle: t('CTATitle')
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify(Object(microdata["c" /* OrganizationShema */])())
      }
    })]
  });
}

const fetcher = async (url, init) => {
  return fetch(url, _objectSpread(_objectSpread({}, init), {}, {
    headers: {
      Accept: 'application/json'
    }
  })).then(res => res.json()).catch(error => error);
};

async function getStaticProps() {
  let geoIP = await fetcher('https://api.ipify.org/?format=json');
  let geolocation = await fetcher("https://api.ipgeolocation.io/ipgeo?apiKey=0f4e06b0721a4a2b82bce38abc80b31a&ip=" + geoIP.ip);
  return {
    props: {
      geolocation
    }
  };
}
/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "SpTj":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

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

/***/ "Vvt1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rqUP")


/***/ }),

/***/ "WSU2":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "WaFN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return breadcrumbShema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return articleShema; });
/* unused harmony export ratingShema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FAQShema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OrganizationShema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorPageShema; });
/* harmony import */ var _config_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TTxv");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wJ4g");


const breadcrumbShema = (blog, category, id, name) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{
      '@type': 'ListItem',
      position: 1,
      name: blog,
      item: `${_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* SITE_DOMAIN */ "o"]}${Object(_config_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().blog}`
    }, {
      '@type': 'ListItem',
      position: 2,
      name: category,
      item: `${_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* SITE_DOMAIN */ "o"]}${Object(_config_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(category).blogCategory}`
    }, {
      '@type': 'ListItem',
      position: 3,
      name: name,
      item: `${_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* SITE_DOMAIN */ "o"]}${Object(_config_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(id).article}`
    }]
  };
};
const articleShema = ({
  id,
  title,
  author,
  img,
  date,
  logo
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      id: `${_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* SITE_DOMAIN */ "o"]}${Object(_config_routing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(id).article}`
    },
    headline: title,
    image: [img],
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'WTT Solutions',
      logo: {
        '@type': 'ImageObject',
        url: logo
      }
    },
    datePublished: date,
    dateModified: date
  };
};
const ratingShema = (title, ratingValue, reviewCount) => {
  return {
    '@context': 'http://schema.org',
    '@type': 'CreativeWorkSeries',
    name: title,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount
    }
  };
};
const FAQShema = questions => {
  const mainEntity = questions.map(({
    question,
    answer
  }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer
    }
  }));
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainEntity
  };
};
const OrganizationShema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: `${_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* SITE_DOMAIN */ "o"]}`,
    name: 'ScienceSoft',
    logo: '/logo.svg',
    email: `${_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* MAIN_CONTACT_EMAIL */ "n"]}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* COMPANY_STREET_ADDRESS */ "f"]}`,
      addressLocality: `${_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* COMPANY_ADDRESS_LOCALITY */ "d"]}`,
      postalCode: `${_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* COMPANY_POSTAL_CODE */ "e"]}`
    },
    telePhone: `${_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* INTERNATIONAL */ "m"]}`
  };
};
const AuthorPageShema = ({
  name,
  id,
  seoImages,
  socialNetworks,
  position
}) => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: name,
    url: `${_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* SITE_DOMAIN */ "o"]}${id}`,
    image: seoImages.mb,
    sameAs: !socialNetworks ? [] : Object.values(socialNetworks),
    jobTitle: position,
    worksFor: {
      '@type': 'Organization',
      name: "WTT Solutions"
    }
  };
};

/***/ }),

/***/ "XgOf":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "jcgO":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "mriD":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router-context.js");

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

/***/ "rqUP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _loadable = _interopRequireDefault(__webpack_require__("9Lja"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (false) {}

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ "tDMk":
/***/ (function(module) {

module.exports = JSON.parse("{}");

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