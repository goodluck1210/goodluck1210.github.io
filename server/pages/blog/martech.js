module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/yi9":
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

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "fuse.js"
var external_fuse_js_ = __webpack_require__("jYXs");
var external_fuse_js_default = /*#__PURE__*/__webpack_require__.n(external_fuse_js_);

// EXTERNAL MODULE: external "use-debounce"
var external_use_debounce_ = __webpack_require__("NFqN");

// EXTERNAL MODULE: ./utils/validation/validateEmail.js
var validateEmail = __webpack_require__("hYHy");
var validateEmail_default = /*#__PURE__*/__webpack_require__.n(validateEmail);

// EXTERNAL MODULE: ./components/MainLayout/MainLayoutBorders.js
var MainLayoutBorders = __webpack_require__("QM50");

// EXTERNAL MODULE: ./components/Blog/ArticlePreview/ArticlePreview.js + 1 modules
var ArticlePreview = __webpack_require__("Mdix");

// EXTERNAL MODULE: ./components/Blog/Subscription/Subscription.js
var Subscription = __webpack_require__("PDuF");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./config/constants.js
var constants = __webpack_require__("wJ4g");

// EXTERNAL MODULE: ./hooks/useWindowSize.js
var useWindowSize = __webpack_require__("MhZx");

// EXTERNAL MODULE: ./assets/data/blogArticles.json
var data_blogArticles = __webpack_require__("ygR4");

// CONCATENATED MODULE: ./utils/findBlogFilters.js
const findBlogFilters = (articles, blogs) => {
  let availableCategories = [];
  articles.map(article => {
    return article.category.map(cat => availableCategories.push(cat));
  });
  let newBlogFilters = blogs.filter(item => {
    if (availableCategories.every(category => category !== item.name && item.name !== 'all')) {
      return;
    } else {
      return item;
    }
  });
  return newBlogFilters;
};
// CONCATENATED MODULE: ./assets/icons/searchIcon.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgSearchIcon(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    width: 21,
    height: 20,
    fill: "#CCD1DA",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M20.378 19.289l-6.085-6.086a7.876 7.876 0 002.04-5.286C16.333 3.55 12.782 0 8.417 0 4.05 0 .5 3.551.5 7.917c0 4.365 3.551 7.916 7.917 7.916a7.876 7.876 0 005.286-2.04l6.086 6.085a.416.416 0 00.589 0 .417.417 0 000-.59zM8.417 15a7.092 7.092 0 01-7.084-7.083A7.092 7.092 0 018.417.833 7.092 7.092 0 0115.5 7.917C15.5 11.822 12.322 15 8.417 15z"
  })));
}
/* harmony default export */ var searchIcon = (SvgSearchIcon);
// CONCATENATED MODULE: ./assets/icons/inputCross.svg
var inputCross_path;
function inputCross_extends() { inputCross_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return inputCross_extends.apply(this, arguments); }

function SvgInputCross(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", inputCross_extends({
    width: 13,
    height: 12,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), inputCross_path || (inputCross_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M12.334 1.346l-1.18-1.18L6.5 4.822 1.846.167.667 1.346 5.321 6 .667 10.654l1.18 1.18L6.5 7.178l4.655 4.654 1.179-1.179L7.679 6l4.655-4.654z",
    fill: "#CCD1DA"
  })));
}
/* harmony default export */ var inputCross = (SvgInputCross);
// EXTERNAL MODULE: ./components/_elements/CustomInput/CustomInput.js
var CustomInput = __webpack_require__("LjSu");

// EXTERNAL MODULE: ./components/Blog/Header/Header.module.scss
var Header_module = __webpack_require__("Mpui");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./config/routing.js
var routing = __webpack_require__("TTxv");

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/Blog/Header/Header.js

















const Header = ({
  handleChange,
  setSearchValue,
  searchValue
}) => {
  const {
    0: inputRef,
    1: setInpurRef
  } = Object(external_react_["useState"])(null);
  const router = Object(router_["useRouter"])();
  const {
    width
  } = Object(useWindowSize["a" /* default */])();
  const category = router.pathname === Object(routing["a" /* default */])().blog ? constants["t" /* blogFilters */][0].name : router.pathname.replace(`${Object(routing["a" /* default */])().blog}/`, '');
  const {
    0: isHide,
    1: setIsHide
  } = Object(external_react_["useState"])(false);
  const {
    0: zIndex,
    1: setZIndex
  } = Object(external_react_["useState"])(false);
  const arrow = Object(external_react_["useRef"])(null);
  const availablBlogFilters = Object(external_react_["useMemo"])(() => findBlogFilters(data_blogArticles, constants["t" /* blogFilters */]), [data_blogArticles]);
  Object(external_react_["useEffect"])(() => {
    if (isHide && inputRef) {
      inputRef.focus();
    }
  }, [isHide, inputRef]);

  const handleMobileDropdownItem = () => {
    const {
      current
    } = arrow || {};
    setZIndex(!zIndex);

    if (current) {
      if (current.style.transform === '' || current.style.transform === 'rotate(180deg)') {
        current.style.transform = 'rotate(0deg)';
        return;
      }

      current.style.transform = 'rotate(180deg)';
    }
  };

  const setRef = Object(external_react_["useCallback"])(ref => {
    setInpurRef(ref);
  }, [inputRef, setInpurRef]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: external_classnames_default()(Header_module_default.a.filters, isHide && Header_module_default.a.hide),
      children: [width <= 1200 ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Header_module_default.a.dropdown,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
            onClick: handleMobileDropdownItem,
            children: [category, /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              height: 7,
              width: 42,
              src: "/navigateDown.svg",
              ref: arrow,
              alt: "icon"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: external_classnames_default()(Header_module_default.a.dropdownItemWrapper, `dropdown`, zIndex && Header_module_default.a.changeZIndex),
          children: availablBlogFilters.map(({
            name,
            link
          }, key) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Header_module_default.a.dropdownItem,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: link,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                id: name,
                children: name
              })
            })
          }, key))
        })]
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Header_module_default.a.deskDropdown,
        children: availablBlogFilters.map(({
          name,
          link
        }, key) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: link,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: external_classnames_default()(Header_module_default.a.deskDropdownItem, category === name && Header_module_default.a.selected),
            children: name
          })
        }, key))
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Header_module_default.a.search,
        onClick: () => setIsHide(true),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(searchIcon, {})
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: external_classnames_default()(Header_module_default.a.inputWrapper, !isHide && Header_module_default.a.hide),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomInput["a" /* default */], {
        forwardRef: setRef,
        placeholder: "Search",
        type: "text",
        className: Header_module_default.a.input,
        onChange: handleChange,
        name: "search",
        value: searchValue
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(inputCross, {
        className: Header_module_default.a.cross,
        onClick: () => {
          setIsHide(false);
          setSearchValue('');
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(searchIcon, {
        className: Header_module_default.a.search
      })]
    })]
  });
};

/* harmony default export */ var Header_Header = (Header);
// EXTERNAL MODULE: ./components/Blog/Pagination/Pagination.module.scss
var Pagination_module = __webpack_require__("NEQR");
var Pagination_module_default = /*#__PURE__*/__webpack_require__.n(Pagination_module);

// CONCATENATED MODULE: ./components/Blog/Pagination/Pagination.js





const PaginationComp = ({
  totalPages,
  pathname,
  pageNumber
}) => {
  const paginationNumbersArray = [...Array(totalPages).keys()].map(item => item + 1);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Pagination_module_default.a.pagination,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      disabled: pageNumber === 1,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: pageNumber === 1 || paginationNumbersArray.length === 2 ? pathname : `${pathname}?page=${pageNumber - 1}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          height: 21,
          width: 13,
          alt: "icon",
          src: "/images/blog/elements/paginationArrow.svg"
        })
      })
    }), paginationNumbersArray.map(item => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: item === 1 ? pathname : `${pathname}?page=${item}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: pageNumber === item ? Pagination_module_default.a.paginationActiveItem : undefined,
          children: item
        })
      }, item);
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      disabled: pageNumber === paginationNumbersArray[paginationNumbersArray.length - 1],
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: `${pathname}?page=${pageNumber + 1}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          height: 21,
          width: 13,
          alt: "icon",
          src: "/images/blog/elements/paginationArrow.svg",
          style: {
            transform: 'rotate(180deg)'
          }
        })
      })
    })]
  });
};

/* harmony default export */ var Pagination = (PaginationComp);
// EXTERNAL MODULE: ./components/ReusableComponents/CTA/CTA.js
var CTA = __webpack_require__("E0DC");

// EXTERNAL MODULE: ./config/en.js
var en = __webpack_require__("ar21");

// EXTERNAL MODULE: ./config/metadata.js
var metadata = __webpack_require__("MRCQ");

// EXTERNAL MODULE: ./services/subscription.js
var subscription = __webpack_require__("4rMk");

// EXTERNAL MODULE: ./styles/pages/blog.module.scss
var blog_module = __webpack_require__("wmCF");
var blog_module_default = /*#__PURE__*/__webpack_require__.n(blog_module);

// CONCATENATED MODULE: ./pages/blog/index.js






















function Blog({
  blogArticles,
  canonicalLink
}) {
  const {
    blog,
    receiveNotifications,
    subscribe
  } = en["a" /* en */];
  let filteredByCategories = [];
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])('');
  const {
    0: search,
    1: setSearch
  } = Object(external_react_["useState"])('');
  const {
    0: debouncedSearch,
    1: setDebouncedSearch
  } = Object(external_react_["useState"])('');
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])('');
  const {
    0: isConfirmed,
    1: setConfirmed
  } = Object(external_react_["useState"])(false);
  const router = Object(router_["useRouter"])();
  const {
    query,
    pathname,
    asPath
  } = router; //pagination

  const pageNumber = query.page ? Number(query.page) : 1;
  const PER_PAGE = 12;
  const {
    0: firstSliceValue,
    1: setFirstSliceValue
  } = Object(external_react_["useState"])(0);
  const {
    0: secondSliceValue,
    1: setSecondSliceValue
  } = Object(external_react_["useState"])(PER_PAGE);
  Object(external_react_["useEffect"])(() => {
    if (pageNumber > Math.ceil(filteredByCategories.length / PER_PAGE) || asPath.includes('page=1')) {
      router.replace(pathname);
    }
  }, []);
  Object(external_react_["useEffect"])(() => {
    setFirstSliceValue(pageNumber * PER_PAGE - PER_PAGE);
    setSecondSliceValue(pageNumber * PER_PAGE);
  }, [pageNumber]); // end pagination

  const category = router.pathname === Object(routing["a" /* default */])().blog ? constants["t" /* blogFilters */][0].name : router.pathname.replace(`${Object(routing["a" /* default */])().blog}/`, '');
  const uppercaseCategory = `${category[0].toUpperCase()}${category.slice(1)}`;
  const currentArticle = constants["t" /* blogFilters */].find(item => item.name === category); // filtration by search or categories

  blogArticles.filter(article => {
    if (category === constants["t" /* blogFilters */][0].name) {
      filteredByCategories.push(article);
    }

    if (article.category.some(cat => cat.toLowerCase() === category)) {
      filteredByCategories.push(article);
    }

    if (search === '') {
      return blogArticles;
    }

    if (debouncedSearch) {
      const fuse = new external_fuse_js_default.a(filteredByCategories, constants["z" /* fuseOptions */]);
      filteredByCategories = fuse.search(debouncedSearch).map(el => el.item);
      return filteredByCategories;
    }

    return filteredByCategories;
  });
  const handleDebounseSearch = Object(external_use_debounce_["useDebouncedCallback"])(value => {
    setDebouncedSearch(value);
  }, 400);

  const handleSearchChange = value => {
    setSearch(value);
    handleDebounseSearch.callback(value);
  };

  const handleSubscriptionChange = ({
    target
  }) => {
    if (error) {
      setError('');
    }

    setEmail(target.value);
  };

  Object(external_react_["useEffect"])(() => {
    if (validateEmail_default.a.validate(email)) {
      setError('');
    }
  }, [email]);

  const handleSubmit = () => {
    if (validateEmail_default.a.validate(email)) {
      subscription["a" /* default */].subscribe(email, setConfirmed, setEmail, setError);
    } else {
      setError('Invalid email address!');
      return;
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MainLayoutBorders["a" /* MainLayoutBorders */], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("title", {
        children: [currentArticle.metaTitle || `Software Development Company Blog ${uppercaseCategory}`, ' ', "- Page ", pageNumber, " | WTT Solutions"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: `${metadata["a" /* meta */].blogDescription} ${uppercaseCategory === 'All' ? '' : `- ${uppercaseCategory}`} | Page ${pageNumber}`
      }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "canonical",
        href: canonicalLink || 'https://wtt-solutions.com/blog'
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: blog_module_default.a.headerWrapper,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h1", {
        className: blog_module_default.a.blog,
        children: [blog, " ", uppercaseCategory !== 'All' ? uppercaseCategory : '', ' ', (uppercaseCategory === 'All' || uppercaseCategory === 'Insights') && `page ${pageNumber}`]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header_Header, {
        handleChange: e => handleSearchChange(e.target.value),
        setSearchValue: setSearch,
        searchValue: search
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: blog_module_default.a.contentWrapper,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: blog_module_default.a.middleLine
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: blog_module_default.a.deskLines,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {})]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArticlePreview["b" /* default */], {
        data: filteredByCategories.slice(firstSliceValue, secondSliceValue),
        searchValue: debouncedSearch,
        activeFilter: category
      }), filteredByCategories.length > PER_PAGE && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Pagination, {
        pathname: pathname,
        totalPages: Math.ceil(filteredByCategories.length / PER_PAGE),
        pageNumber: pageNumber
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Subscription["a" /* default */], {
        error: error,
        emailValue: email,
        handleChange: handleSubscriptionChange,
        handleSubmit: handleSubmit,
        title: receiveNotifications,
        btnTitle: subscribe,
        isConfirmed: isConfirmed
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CTA["default"], {
      CTATitle: en["a" /* en */].CTATitle
    })]
  });
}

async function getServerSideProps() {
  data_blogArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() //sort articles by date
  );
  return {
    props: {
      blogArticles: data_blogArticles
    }
  };
}
/* harmony default export */ var pages_blog = __webpack_exports__["default"] = (Blog);

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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("oTfm");


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

/***/ "2tlT":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4rMk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2MRG");
/* harmony import */ var _assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ygR4");
var _assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("ygR4", 1);


class Subscription {
  static subscribe(email, setConfirmed, setEmail, setError) {
    var _Post, _Post2, _Post3, _Post4, _Post5;

    _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/subscribe', {
      email,
      lastPost: {
        title: (_Post = _assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__[_assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__.length - 1]) === null || _Post === void 0 ? void 0 : _Post.title,
        id: (_Post2 = _assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__[_assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__.length - 1]) === null || _Post2 === void 0 ? void 0 : _Post2.id
      },
      anotherLastPost: [(_Post3 = _assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__[_assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__.length - 2]) === null || _Post3 === void 0 ? void 0 : _Post3.id, (_Post4 = _assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__[_assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__.length - 3]) === null || _Post4 === void 0 ? void 0 : _Post4.id, (_Post5 = _assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__[_assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__.length - 4]) === null || _Post5 === void 0 ? void 0 : _Post5.id]
    }).then(() => {
      setConfirmed(true);
      setEmail('');
    }).catch(() => setError('internal server error, please try later'));
  }

}

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

/***/ "Gqb2":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "NotFound_wrapper__2zdSM"
};


/***/ }),

/***/ "HXZE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgBlogDate(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 15,
    height: 15,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5 1.5a6 6 0 100 12 6 6 0 000-12zm-7.333 6a7.333 7.333 0 1114.667 0 7.333 7.333 0 01-14.667 0z",
    fill: "#CCD1DA"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5 2.833c.369 0 .667.299.667.667v3.588l2.298 1.149A.667.667 0 119.87 9.43L7.202 8.096a.667.667 0 01-.368-.596v-4c0-.368.298-.667.666-.667z",
    fill: "#CCD1DA"
  })));
}
/* harmony default export */ __webpack_exports__["a"] = (SvgBlogDate);

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

/***/ "KSeb":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"MainLayoutBorders": "mainLayoutBorders_MainLayoutBorders__1lP_u"
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

/***/ "Mdix":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Article; });

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./config/en.js
var en = __webpack_require__("ar21");

// EXTERNAL MODULE: ./config/constants.js
var constants = __webpack_require__("wJ4g");

// EXTERNAL MODULE: ./config/routing.js
var routing = __webpack_require__("TTxv");

// EXTERNAL MODULE: ./components/Blog/ArticlePreview/ArticlePreview.module.scss
var ArticlePreview_module = __webpack_require__("u/Nj");
var ArticlePreview_module_default = /*#__PURE__*/__webpack_require__.n(ArticlePreview_module);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./assets/icons/blogDate.svg
var blogDate = __webpack_require__("HXZE");

// EXTERNAL MODULE: ./components/Blog/NotFound/NotFound.module.scss
var NotFound_module = __webpack_require__("Gqb2");
var NotFound_module_default = /*#__PURE__*/__webpack_require__.n(NotFound_module);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/Blog/NotFound/NotFound.js





const NotFound = ({
  search,
  activeFilter
}) => {
  const {
    tryAgain,
    couldntFind,
    topicsBelow,
    orMaybe
  } = en["a" /* en */];
  const searchValue = search ? search : activeFilter;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: NotFound_module_default.a.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "/images/blog/elements/notFound.svg",
      alt: "icon"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      children: `${couldntFind}  "${searchValue[0].toUpperCase()}${searchValue.slice(1)}"`
    }), search ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
      children: [tryAgain, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), orMaybe]
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      children: topicsBelow
    })]
  });
};

/* harmony default export */ var NotFound_NotFound = (NotFound);
// CONCATENATED MODULE: ./components/Blog/ArticlePreview/ArticlePreview.js













const ArticlePreview = ({
  data,
  title,
  searchValue,
  activeFilter
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: data ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: external_classnames_default()(ArticlePreview_module_default.a.wrapper, title && ArticlePreview_module_default.a.withTitle),
      children: [title && /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: ArticlePreview_module_default.a.mainTitle,
        children: title
      }), data.map((itemData, i) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Article, {
          data: itemData
        }, i);
      })]
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(NotFound_NotFound, {
      search: searchValue,
      activeFilter: activeFilter
    })
  });
};

const Article = ({
  data
}) => {
  const {
    wrtittenBy
  } = en["a" /* en */];
  const {
    backgrounds,
    title,
    date,
    author,
    id,
    metaDescription
  } = data;
  const formattedText = metaDescription.replace(/✔️/, '').replace(/✅/, '').replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
  const authorPage = constants["s" /* authorsPageAndName */].find(el => el.name === author).link;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: external_classnames_default()(ArticlePreview_module_default.a.item),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: Object(routing["a" /* default */])(id).article,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: ArticlePreview_module_default.a.imgWrapper,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
              layout: "fill",
              src: backgrounds.preview,
              alt: "img",
              quality: 10
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: ArticlePreview_module_default.a.info,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          className: ArticlePreview_module_default.a.date,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(blogDate["a" /* default */], {}), " ", date]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          className: ArticlePreview_module_default.a.author,
          children: [wrtittenBy, authorPage ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: authorPage,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: author
            })
          }) : author]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ArticlePreview_module_default.a.titleWrapper,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(routing["a" /* default */])(id).article,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: ArticlePreview_module_default.a.title,
            children: title
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: ArticlePreview_module_default.a.text,
        children: formattedText
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: ArticlePreview_module_default.a.linkWrapp,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: Object(routing["a" /* default */])(id).article,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          className: ArticlePreview_module_default.a.link,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: ArticlePreview_module_default.a.linkText,
            children: en["a" /* en */].learnMore
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/images/blog/elements/blogArrow.svg",
            className: ArticlePreview_module_default.a.arrow,
            alt: "icon"
          })]
        })
      })
    })]
  }, id);
};
/* harmony default export */ var ArticlePreview_ArticlePreview = __webpack_exports__["b"] = (ArticlePreview);

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

/***/ "Mpui":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hide": "Header_hide__bzfRt",
	"filters": "Header_filters__3olnB",
	"inputWrapper": "Header_inputWrapper__2iARp",
	"cross": "Header_cross__3R4uT",
	"search": "Header_search__1bhD0",
	"input": "Header_input__16aCh",
	"dropdown": "Header_dropdown__yQFhy",
	"changeZIndex": "Header_changeZIndex__1rBc7",
	"dropdownItemWrapper": "Header_dropdownItemWrapper__3Gn_q",
	"dropdownItem": "Header_dropdownItem__pg9xJ",
	"deskDropdown": "Header_deskDropdown__b7NK6",
	"deskDropdownItem": "Header_deskDropdownItem__2LzkA",
	"selected": "Header_selected__1qeFC"
};


/***/ }),

/***/ "NEQR":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pagination": "Pagination_pagination__3zJ7S",
	"paginationActiveItem": "Pagination_paginationActiveItem__2Qi0H"
};


/***/ }),

/***/ "NFqN":
/***/ (function(module, exports) {

module.exports = require("use-debounce");

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

/***/ "OfkW":
/***/ (function(module, exports) {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "PDuF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Aiso");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("z2Fa");
/* harmony import */ var _Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_setBackground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0KOP");
/* harmony import */ var _config_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ar21");
/* harmony import */ var _components_elements_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("LjSu");
/* harmony import */ var _components_elements_customButton_customBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("f++f");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const Subscription = ({
  handleChange,
  handleSubmit,
  emailValue,
  error,
  isConfirmed
}) => {
  const bgImages = {
    tabl: "/images/blog/subscription/imgMob.png",
    tabl: "/images/blog/subscription/imgTabl.png",
    desk: "/images/blog/subscription/imgDesk.png"
  };
  const {
    thankYou,
    receiveNotifications,
    subscribe,
    subscriptionConfirmed
  } = _config_en__WEBPACK_IMPORTED_MODULE_5__[/* en */ "a"];

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit();
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
    className: _Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mainWrapper,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
      className: _Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        layout: "fill",
        src: Object(_utils_setBackground__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(bgImages),
        alt: "img"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title, isConfirmed && _Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.changeZIndex),
        children: receiveNotifications
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("form", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.form, isConfirmed && _Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.changeZIndex),
        onSubmit: onSubmit,
        noValidate: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_elements_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
          labelText: "Email",
          name: "subscription",
          placeholder: "example@gmail.com",
          required: true,
          type: "email",
          className: _Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
          onChange: handleChange,
          value: emailValue,
          error: error
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_elements_customButton_customBtn__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
          title: subscribe,
          btnType: "submit",
          classes: _Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.confirmedDiv, isConfirmed && _Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.transition),
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
          alt: "icon",
          src: "/images/blog/subscription/letter.svg"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("p", {
          className: _Subscription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
          children: [subscriptionConfirmed, " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("br", {}), " ", thankYou]
        })]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Subscription);

/***/ }),

/***/ "QM50":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLayoutBorders; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mainLayoutBorders_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KSeb");
/* harmony import */ var _mainLayoutBorders_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mainLayoutBorders_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function MainLayoutBorders({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: _mainLayoutBorders_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.MainLayoutBorders,
    children: children
  });
}

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

/***/ "XgOf":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


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

/***/ "jYXs":
/***/ (function(module, exports) {

module.exports = require("fuse.js");

/***/ }),

/***/ "jcgO":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/mitt.js");

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

/***/ "oTfm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/yi9");
/* harmony import */ var _assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ygR4");
var _assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("ygR4", 1);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Martech = ({
  blogArticles
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_index__WEBPACK_IMPORTED_MODULE_0__["default"], {
    blogArticles: blogArticles,
    canonicalLink: 'https://wtt-solutions.com/blog/martech'
  });
};

async function getServerSideProps() {
  _assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() //sort articles by date
  );
  return {
    props: {
      blogArticles: _assets_data_blogArticles_json__WEBPACK_IMPORTED_MODULE_1__
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Martech);

/***/ }),

/***/ "pfUk":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "q5Ud":
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "u/Nj":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "ArticlePreview_wrapper__1Myeb",
	"mainTitle": "ArticlePreview_mainTitle__3RgfS",
	"imgWrapper": "ArticlePreview_imgWrapper__2FnSo",
	"info": "ArticlePreview_info__1dOHJ",
	"author": "ArticlePreview_author__2ejit",
	"item": "ArticlePreview_item__2AaAq",
	"titleWrapper": "ArticlePreview_titleWrapper__YbFyo",
	"title": "ArticlePreview_title__3xz0z",
	"text": "ArticlePreview_text___an6t",
	"linkWrapp": "ArticlePreview_linkWrapp__23EUH",
	"linkText": "ArticlePreview_linkText__2NDtS",
	"arrow": "ArticlePreview_arrow__2VMAJ",
	"readAllLink": "ArticlePreview_readAllLink__12rT4",
	"withTitle": "ArticlePreview_withTitle__4j7Bq",
	"middleLine": "ArticlePreview_middleLine__w--SR"
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

/***/ "wmCF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contentWrapper": "blog_contentWrapper__o_ITG",
	"headerWrapper": "blog_headerWrapper__15faI",
	"topMargin": "blog_topMargin__1Yet2",
	"deskLines": "blog_deskLines__2YHtU",
	"middleLine": "blog_middleLine__lx9pC"
};


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

/***/ "ygR4":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"how-to-build-an-online-examination-system\",\"title\":\"How to Build an Online Examination System from Scratch\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"December 17, 2021\",\"metaTitle\":\"How to Build an Online Examination System [Design, Stack, Challenges]\",\"metaDescription\":\"Conducting exams becomes easier with dedicated digital software 👨‍🎓 We demonstrate how to build an online examination system that is adapted to the needs\",\"articleDescription\":[\"The recent ascent of the e-learning industry — fueled by the global pandemic — has forced many educational institutions to rethink the way they approach the examination process. The traditional 'pen and paper' method is slowly becoming a thing of the past, making room for more efficient and resource-saving techniques to assess student progress. \",\"In today's blog, we will provide insights on the benefits of creating an online exam application, demonstrate how to develop an online examination portal, and detail some of the most important features that should be present in such software.\"],\"timeToRead\":10,\"backgrounds\":{\"img\":\"/images/blog/HowToBuildAnOnlineExaminationSystem/img.jpg\",\"preview\":\"/images/blog/HowToBuildAnOnlineExaminationSystem/preview.webp\"},\"subtitles\":[{\"id\":1,\"title\":\"Key Benefits of Building an Online Examination System\"},{\"id\":2,\"title\":\"Flexibility and security\",\"subtitle\":true},{\"id\":3,\"title\":\"Getting rid of outdated infrastructure\",\"subtitle\":true},{\"id\":4,\"title\":\"Reducing logistical and management costs\",\"subtitle\":true},{\"id\":5,\"title\":\"Online Exam System Design Best Practices\"},{\"id\":6,\"title\":\"Secure browsing\",\"subtitle\":true},{\"id\":7,\"title\":\"Remote proctoring\",\"subtitle\":true},{\"id\":8,\"title\":\"Audit logging\",\"subtitle\":true},{\"id\":9,\"title\":\"Data encryption\",\"subtitle\":true},{\"id\":10,\"title\":\"Online Examination Software Features to Consider\"},{\"id\":11,\"title\":\"Admin Panel\",\"subtitle\":true},{\"id\":12,\"title\":\"Student Profile\",\"subtitle\":true},{\"id\":13,\"title\":\"Content Management System (CMS)\",\"subtitle\":true},{\"id\":14,\"title\":\"Examination Management Module\",\"subtitle\":true},{\"id\":15,\"title\":\"Exam Evaluation Module\",\"subtitle\":true},{\"id\":16,\"title\":\"Online Examination System: Tech Stack\"},{\"id\":17,\"title\":\"Custom Online Exam System Development Challenges\"},{\"id\":18,\"title\":\"Question bank management\",\"subtitle\":true},{\"id\":19,\"title\":\"Infrastructural barriers\",\"subtitle\":true},{\"id\":20,\"title\":\"Abstract answers dilemma\",\"subtitle\":true},{\"id\":21,\"title\":\"How Much Does It Cost to Build a Custom Online Examination System?\"},{\"id\":22,\"title\":\"Our experience\",\"subtitle\":true},{\"id\":23,\"title\":\"Conclusion\",\"subtitle\":true},{\"id\":24,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"subtitles1\":{\"list\":[{\"title\":\"Flexibility and security\",\"textList\":[\"A fully automated system allows educational institutions to simplify the examination process. To start, teachers or exam proctors are no longer required to go through the tedious process of setting up an exam, supervising each and every student, manually creating post-exam reports, etc. In just a few clicks, teachers can access the exam database, select the required questions, set time limits, and proctor exams live from any location.\",\"As for security, this has always been a huge issue for many higher education institutions during final exams, bar tests, SATs, etc. By utilizing an online examination system, it is possible to greatly reduce the number of potential leaks and completely remove the opportunity for cheating, as there is no paper involved and each student takes the exam separately (with no possibility of interacting with other participants.) \"]},{\"title\":\"Getting rid of outdated infrastructure\",\"textList\":[\"With the traditional approach, exams are normally conducted in physical locations (centers), which take lots of effort to manage and maintain. Aside from that, outdated technological infrastructure often struggles to provide examinees with digital devices (tablets, laptops) for tests that involve any kind of listening or viewing tasks.\",\"Online examination systems, on the contrary, allow you to set up tests for any number of students — 10, 100, 1000, or more — without having to worry about location, time, and equipment. So, instead of investing top dollar in outdated infrastructure, schools can build an online exam system from scratch for a fraction of the price and obtain better results.\"]},{\"title\":\"Reducing logistical and management costs\",\"textList\":[\"New technologies bring all examination activities online and, thus, almost completely reduce printing costs (on average, schools in the US <a href='http://www.softwareshelf.com/HTML/products/prod_materials/23/PMP_Academic_Story.pdf' target='_blank' rel='nofollow'>spend</a> somewhere between $3,000 and $4,000 a month on paper printing). With automated examination systems, schools and other institutions can see large savings on exam administration, since they no longer need to have exam proctors onsite to supervise the whole process.\",\"Another issue is the logistical expenses that can be incurred by both educational institutions and examinees. When exams are administered online, there's no need for students to physically travel to a designated location. This becomes especially beneficial for 1) students with mobility conditions and 2) international examinees who struggle to travel to the exam centers (especially due to travel restrictions set by different countries during the Covid-pandemic).\"]}]},\"subtitles2\":{\"list\":[{\"title\":\"Secure browsing\",\"textList\":[{\"text\":\"The secure browser feature commonly comes as part of the examination system and prevents students from opening any windows or switching between different tabs during the examination process. This technology prevents students from using keyboard shortcuts for cut, copy and paste. It can also block any software that may run in the background to try and record a test.\"},{\"text\":\"The secure browser can also either entirely block a student's window — and make the examination platform the only tool that is working during the test — or send warning messages when a student tries to move to a new window or run any app. All messages can be immediately sent to supervisors and recorded in the database.\"},{\"text\":\"Course supervisors can further fine-tune this feature: for example, the exam can stop automatically after a student gets 2-3 warning messages.\"}]},{\"title\":\"Remote proctoring\",\"textList\":[{\"text\":\"With the help of remote proctoring, students can pass exams at any location while ensuring the exam's integrity. Remote proctoring can come as a standalone platform or as a part of the entire examination system. To ensure that proctoring is being conducted as required, the system analyzes data that comes from different sources and spans across the following processes:\",\"list\":[\"<b>Image capturing</b> — every 30-40 seconds, the system captures a candidate's photo (using a web camera) to validate his/her identity.\",\"<b>Screen capturing</b> — software can validate test integrity by taking screenshots of screens at different time intervals to assess their actions.\",\"<b>Video streaming</b> — educational systems can stream videos live from a student's camera during tests to allow proctors to remotely supervise the examinee.\",\"<b>Voice proctoring</b> — the system can also record voice and background noise or sounds to verify that tests are completed without assistance from other people.\"]}]},{\"title\":\"Audit logging\",\"textList\":[{\"text\":\"A custom online examination system can record all the actions taken by a student: logins/logouts, exam access, responses, section navigation, etc. The Super Admin (a person with complete access to system features and sections) can receive a detailed activity log from the candidate appearing on the test — IP address, internet speed, and even track the precise location of a student.\"},{\"text\":\"Aside from that, you can also audit the activities that were performed by other team members regarding the course: question creation, test creation, question edits, etc. In broader terms, audit logging procedures help to tell administrative personnel <b>who, what, where</b> and <b>when</b> have interacted with the system.\"}]},{\"title\":\"Data encryption\",\"textList\":[{\"text\":\"To ensure a high level of exam data privacy and security, all information — including the question bank — has to be encrypted and stored in a secure environment. This helps avoid any potential database misuse and unauthorized manipulation of test results.\"},{\"text\":\"In addition, all communication between clients (students) and the server needs to be encrypted to facilitate the confidentiality of the examination process. As for decoding, only authorized personnel should be allowed to access actual information.\"}]}]},\"subtitles3\":{\"list\":[{\"title\":\"Admin Panel\",\"textList\":[\"This section allows administrators to create and edit access roles. In addition, they can view dashboards for exam status, and check the number of users taking the exam, etc. Admins can also manually add or remove students from exams. This all helps educational institutions gain better control over the examination process and make it more flexible — which is especially important when students take exams remotely.\"]},{\"title\":\"Student Profile\",\"textList\":[\"Here, students can check their performance, grades or points earned while going through exam tests, the number of tests they've passed, etc. This panel also provides students with information about future exams, and their schedule, date, time, etc.\",\"The functionality of this module is normally defined by the permissions enabled by the Super Administrator. Aside from getting basic information, students can be granted rights to edit their profiles and select particular exams.\"]},{\"title\":\"Content Management System (CMS)\",\"textList\":[\"This is where authorized personnel can manage all exam content. They can import or export question banks, and manually edit selected questions and course sections. Aside from textual assignments, advanced examination portals also support multiple types of content, which means teachers get the ability to upload into CMS images, video, audio files, etc.\",\"Different learning interactions — such as <i>drag and drop, sequencing, multiple choice, blank space, matching, marking</i> — can also be added to a course module in CMS. Course administrators can also create and assign different exam templates with unique sets of questions to different groups of learners.\"]},{\"title\":\"Examination Management Module\",\"textList\":[\"Here, administrators can edit modules, create new ones, set the duration of a test, limit the maximum permitted number of mistakes or negative answers, enable the display of an answer sheet once the exam is done, etc.\",\"Administrators can control which questions are assigned to which sections, change the weight of different subjects and even compile an examination matrix that will control the amount of questions pulled from a question bank for a particular exam. Broadly speaking, the goal of the examination management module is to <i>define</i> and <i>set</i> exam rules.\"]},{\"title\":\"Exam Evaluation Module\",\"textList\":[\"In this section, students see the examination results that come in the form of a Q&A document with the correct or incorrect answers highlighted. This module normally contains such characteristics as Name of Subject, Date and Time of Exam, Number of Attempts, Time Taken, Score, Document Export Options, etc. The Exam Evaluation Module can also support notifications, and automatically send emails or SMS messages to student's parents, upon completion of the exam.\"]}]},\"subtitles4\":{\"list\":[{\"title\":\"\",\"textList\":[\"While each and every product is unique and the choice of a particular online examination system tech stack should depend on the project needs, we'd suggest using HTML and CSS for front-end in examination portals with basic functionality. On the client side, you can use JavaScript and jQuery; while we'd suggest going with PHP for backend, as it is a great option for those who are new to web development.\"]}]},\"subtitles5\":{\"list\":[{\"title\":\"Question bank management\",\"textList\":[\"The quality of online exams directly depends on the quality and accuracy of a question bank. Thus, it is in the best interest of educational institutions to ensure that they have established high standards regarding question bank management — who is responsible for it, who is involved in creating questions, how the organization ensures the quality of information that goes into this database, and so on.\",\"Another challenge lies in the fact that there will be multiple subject matter experts (SMEs) involved in the preparation of the question bank. They will all be putting together questions for individual subjects/exams/topics, which means that the administrators will have to ensure that the question bank integrity is maintained and each SME is working only with his/her area of expertise.\"]},{\"title\":\"Infrastructural barriers\",\"textList\":[\"Another common challenge arises when the online examination system needs to be integrated with the already existing infrastructure of an educational facility. If the organization has up-to-date equipment, the integration of a new solution can run quite smoothly but, oftentimes, a lot of schools and higher education institutions run all their activities on outdated software and hardware.\",\"This means the deployment — and further use — of a custom online examination portal may become challenging. To prevent that from happening, it's highly recommended to 1) assess your existing infrastructure and 2) plan the integration process before online examination system development starts.\"]},{\"title\":\"Abstract answers dilemma\",\"textList\":[\"While online examination systems help to automate the grading process, they are still not able to completely remove manual reviews from the equation. This is all due to long-type questions where students are expected to give free-form answers addressing abstract topics and subjects.\",\"For now, it's hard to come up with an algorithm or technology that will be able to assess student's answers of this nature, and attribute them a specific weight (based on the level of knowledge demonstrated by an examinee). In such cases, the teacher's participation in the review process will still be required.\"]}]},\"subtitles6\":[\"When it comes to development of a custom online examination system, the final price tag will strongly depend on project requirements and the number of modules you want to implement. Also, development costs can be influenced by scope of work and scalability possibilities of a system.\",\"The creation of a very basic examination system may start anywhere from <b>$5,000</b> and can go up to <b>$50,000-$70,000</b> for a fully fledged portal with all the functionalities mentioned above. Time wise, it may take <b>2-3 months</b> for a development team to create an online examination system.\",\"<i>Note that these are approximate figures. If you want to get a more accurate estimate for your project, contact one of our managers.</i>\",\"The approach you take to build an online examination system (in-house/outsource) and the location of your team (on-shore/off-shore) will also affect the production budget. For example, development teams from the US and Canada normally charge 2-3 times more compared to European teams.\"],\"subtitles7\":{\"list\":[{\"title\":\"Our experience\",\"textList\":[\"As an outsourcing development partner, WTT-Solutions has been involved in the <a href='https://wtt-solutions.com/blog/how-to-build-elearning-platform' target='_blank'>production of multiple educational products</a>, one of which is a mobile application called <a href='https://wtt-solutions.com/our-work/plh' target='_blank'>PLH</a> — a parent training platform that helps to establish healthy relationships between caregivers and their teens, and reduces the risk of domestic violence.\",\"On the platform, parents are educated on effective parenting strategies that allow them to avoid harsh discipline practices at home and ensure their teen doesn't develop potential behavior problems in the future.\",\"Our task was to create a flexible system that would give a user full control over its components, their configuration, and location directly within the app. We used a system of classes to describe the appearance of internal components, their size, color, etc. For this project's tech stack, our team used Ionic and Angular and it took 990 man-hours to deliver a final result to the client.\"]},{\"title\":\"Conclusion\",\"textList\":[\"With the rise of digital technologies, the in-person examination process is considered expensive and ineffective by many educational institutions due to the high administrative costs involved. Moving all exams online, on the contrary, can not only save both teachers and students from the hassle of getting ready for the test, but also help schools and higher education facilities utilize their budgets more effectively.\",\"Shifting from offline to online exams has <a href='https://www.studyinternational.com/news/online-exams-universities/' target='_blank'>helped</a> Australia’s Monash University save about <b>$4.7 million</b> in equipment and management expenses. Other institutions, like The University of Oslo and The University of Bergen, have also adopted online examination systems to effectively conduct exams during the COVID-pandemic. The BYOD (bring your own device) initiative has also gained traction in Europe in recent years, allowing educational facilities with limited resources and outdated infrastructure to benefit from <a href='https://wtt-solutions.com/edtech' target='_blank'>EdTech</a> solutions, as well.\",\"If you want to get more information on designing an online examination application, or are on the lookout for a reliable software development partner, reach out to us. At WTT Solutions, we have extensive expertise producing mobile applications and <a href='https://wtt-solutions.com/platform-development' target='_blank'>platforms</a> for a wide range of industries, including EdTech. We have experience working with <a href='https://wtt-solutions.com/startups' target='_blank'>startups</a> and established enterprises. Complete the form in the top right corner of this page and our manager will get in touch with you in no time!\"]}]},\"questionsList\":[{\"question\":\"What is included in the development costs of an educational system? What about updates?\",\"answer\":\"Software production costs include expenses associated with project analysis, requirement gathering, development of the platform itself, project management, UI/UX design, and QA. Platform updates aren’t normally included in production costs; however, they can still be carried out by a development team, at a client's request.\"},{\"question\":\"Do you provide training? Can you help with educating our teachers on how to use the software?\",\"answer\":\"Yes. On request, we can carry out a few training sessions for your team and even produce educational materials. Contact our managers for more details in that regard.\"},{\"question\":\"Is there a limit to how many learners can interact with an educational platform?\",\"answer\":\"Custom educational systems created by our team don't have such limits. As your needs grow, the system can be scaled easily, allowing you to 'load' as many students into the system as you need.\"},{\"question\":\"Are there any extra fees or costs I need to be aware of in advance before you start working on my project?\",\"answer\":\"Before we start to work on a project, and after analyzing the main requirements, we provide clients with all necessary information regarding production costs. We ensure that clients are well aware of all potential expenses, in advance.\"}],\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"insights\"]},{\"id\":\"how-to-design-a-successful-saas-application\",\"title\":\"How to design a successful saas application in 2022\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"March 1, 2021\",\"timeToRead\":10,\"metaTitle\":\"SaaS Application Design: 5 Best Practices in 2022 | WTT Solutions\",\"metaDescription\":\"Read on to find out more about creating software as a service product design from our developers that have relevant expertise in the SaaS application design\",\"articleDescription\":[\"The popularity of SaaS applications has been climbing through the roof over the past few years. Global digitalization and the development of cloud-computing have spurred companies all over the world to rethink the way they handle their business processes and encouraged them to start integrating more effective technologies into their workflows.\",\"It is, therefore, not surprising that the SaaS industry is one of the fastest-growing. According to  <a href=https://financesonline.com/saas-statistics/ target='_blank' rel='nofollow'>Financesonline</a>, the industry will reach the $623 billion mark by 2023. Even the COVID pandemic outbreak hasn’t dampened the market. In fact, after the term 'remote work' became the new normal for 64% of companies, the demand for SaaS software increased even more.\",\"In this blog post, we'll detail how to design a saas application, the main reasons for doing so, and how you can get started today.\"],\"backgrounds\":{\"img\":\"/images/blog/HowToDesignSuccessfulSaaS/img.jpg\",\"preview\":\"/images/blog/HowToDesignSuccessfulSaaS/preview.jpg\"},\"text\":\"The popularity of SaaS applications has been going through the roof over the past few years. Global digitalization and the development of cloud-computing have spurred companies all over the world to rethink the way they have been handling their business processes and start integrating more effective technologies into their workflows.\",\"subtitles\":[{\"id\":1,\"title\":\"SaaS architecture overview\"},{\"id\":2,\"title\":\"Why Software as a Service architecture is so popular among startups\"},{\"id\":3,\"title\":\"How to design a SaaS application: 5 Tips to help you get started\"},{\"id\":4,\"title\":\"Final thoughts\"},{\"id\":5,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"overview_1\":[\"Before we proceed with the software development process itself, let's briefly review the concept of SaaS architecture design. SaaS stands for Software-as-a-Service, and it is a cloud-based deployment model which implies that developers instead of selling digital downloads host products on servers and allow users access them over the internet. SaaS software can be accessed via web browser or a mobile app, with servers located anywhere in the world.\",\"Based on the business goal a product aims to achieve, it can follow either horizontal or vertical SaaS application architecture.\",\"Horizontal SaaS solutions focus on a software category (e.g. accounting or marketing) rather than a niche. Horizontal architecture is best suited to those products that aim to cover the largest market share possible.\"],\"tableHorizontalTitle\":\"Horizontal\",\"tableHorizontal\":[{\"first\":\"Business model\",\"second\":\"A product that offers the same set of features for a vast variety of industries\"},{\"first\":\"Target market size\",\"second\":\"Large\"},{\"first\":\"Competition\",\"second\":\"The high number of market players and high entry level for new players\"},{\"first\":\"Scalability opportunities\",\"second\":\"Moderate\"}],\"overview_2\":\"Vertical SaaS products don't try to play a 'one-size-fits-all' game. They focus on a specific niche, not the broad category. Vertical SaaS products have often been developed by people with specific expertise who want to address a particular problem in a particular field (e.g. Fintech or Healthcare, for example).\",\"tableVerticalTitle\":\"Vertical\",\"tableVertical\":[{\"first\":\"Business model\",\"second\":\"A product that targets specific niche needs\"},{\"first\":\"Target market size\",\"second\":\"Relatively small\"},{\"first\":\"Competition\",\"second\":\"Relatively low due to a fewer number of market players\"},{\"first\":\"Scalability opportunities\",\"second\":\"High\"}],\"overview_3\":\"We've gone through the main points of the SaaS application design concept, let's now see what the actual applications of this type of software are.\",\"mainTypesTitle\":\"Main types of SaaS solutions\",\"mainTypesSaas\":[{\"bold\":\"CRMs\",\"casual\":\"<b>CRMs</b>— Customer relation management systems allow businesses to automate their relationships with clients, respond to their questions and provide timely assistance. Examples: Hubspot CRM, Salesforce, Zendesk sell, Zoho CRM.\"},{\"bold\":\"ERPs\",\"casual\":\"<b>ERPs</b> — Enterprise resource planning systems are used to help manage business processes across different departments within an organization: accounting, supply chain, procurement, risk management, etc. Examples: SAP, Oracle, Syspro, Acumatica.\"},{\"bold\":\"E-commerce\",\"casual\":\"<b>E-commerce</b> — These systems include all the functionality needed to successfully run an online store: shopping cart, payment gateway, CRM, stock management tools, front-end interface instruments, etc. Examples: Shopify, WooCommerce, BigCommerce, Magento.\"},{\"bold\":\"Billing/payment gateways\",\"casual\":\"<b>Billing/payment gateways</b> — Solutions that allow businesses to accept payments through different channels, such as credit cards, mobile wallets, reward programs, bank transfers, etc. Examples: Stripe, Braintree, Recurly, 2Checkout.\"},{\"bold\":\"Collaboration/ Communication tools\",\"casual\":\"<b>Collaboration/ Communication tools</b> — The simplest SaaS solutions may only have file-sharing or messaging functionality, while complex systems cover a wide range of features needed to effectively facilitate projects: document management, team communication tools, configurable dashboards, KPI diagrams, task tracking, and notifications. Examples: Slack, Trello, Typeform, Proofhub.\"},{\"bold\":\"Accounting\",\"casual\":\"<b>Accounting</b> — Systems that help track accounts and manage finances: invoicing, MRR monitoring, cash-flow reports, payment integrations, etc. Examples: Xero, QuickBooks Online, FreshBooks, Softledger.\"}],\"popular_1\":[\"Adopting a SaaS architecture design approach brings lots of advantages to both software developers and end-users of the SaaS products. The key benefits are as follows.\",\"For SaaS developers:\"],\"saasDevelopers\":[{\"bold\":\"Long-lasting revenue model\",\"casual\":\"<b>Long-lasting revenue model</b> — SaaS software distribution model spares users the need to break the bank in order to develop and adopt custom-made solutions within their companies. This is the key benefit that makes users stick with well-designed SaaS apps for a longer period, compared to other types of software.\"},{\"bold\":\"Large customer database\",\"casual\":\"<b>Large customer database</b> — the low cost of entry significantly increases the potential customer base, allowing developers to target more people with their product.\"},{\"bold\":\"No large up-front costs for potential users\",\"casual\":\"<b>No large up-front costs for potential users</b> — affordable prices and flexible subscription options make SaaS software design attractive for potential users.\"}],\"popular_2\":\"For regular users:\",\"regularUsers\":[{\"bold\":\"Scalability\",\"casual\":\"<b>Scalability</b> — cloud-based SaaS software offers vast scalability options depending on current needs. Users decide whether they need more or less features and choose their subscription plan accordingly.\"},{\"bold\":\"Simplicity of adoption\",\"casual\":\"<b>Simplicity of adoption</b> — companies don't need to have large IT departments in place to start using SaaS software. Everything can be done with just a few clicks.\"},{\"bold\":\"Cost-effectiveness\",\"casual\":\"<b>Cost-effectiveness</b> — thanks to a wide range of pricing options, SaaS solutions can fit budgets of any size. Also, with SaaS software, users don't need to invest in maintenance, software updates, etc.\"}],\"tip1\":\"1. Decide on UVP and key features of your future product\",\"desideOn_1\":[\"UVP — or Unique Value Proposition — is the reason you are giving prospective clients to buy from you. It should briefly but precisely describe your SaaS product: what it is about, what its features are, and what makes you stand out from the competition.\",\"Customers don't buy products, they buy solutions. Your task is to identify what prospective customer pain points your product is going to solve. To make it all a bit easier, here are four primary goals that any SaaS software aims to achieve (for their users):\"],\"primaryGoals\":[{\"bold\":\"Increase revenue\",\"casual\":\"<b>Increase revenue</b> (CRM, as an example)\"},{\"bold\":\"Reduce expenses\",\"casual\":\"<b>Reduce expenses</b> (ERPs, E-commerce systems)\"},{\"bold\":\"Win the competition\",\"casual\":\"<b>Win the competition</b> (E-commerce, collaboration tools)\"},{\"bold\":\"Keep the company out of trouble\",\"casual\":\"<b>Keep the company out of trouble</b>(Billing, accounting SaaS)\"}],\"desideOn_2\":\"By targeting one of these goals, you will be able to wisely plan design for SaaS application, shape the value of your product and come up with a comprehensive list of features that fits your particular category.\",\"tip2\":\"2. Do market research and figure out who your competitors are\",\"doMarket\":[\"Even if you have a brilliant startup idea, similar solutions may already exist. Alternatively, you may develop a SaaS application design that doesn't fit the market you want to penetrate. In order to avoid any surprises in the middle of the development process, we recommend doing your research first.\",\"In standard cases, you want your research to be done across three main areas:\"],\"mainAreas\":[{\"bold\":\"Your SaaS segment\",\"casual\":\"<b>Your SaaS segment</b> — estimate the market share and overall state (growing/shrinking). Understand what the latest trends and predictions are.\"},{\"bold\":\"Market audience\",\"casual\":\"<b>Market audience</b> — since you are implementing a SaaS software model, your customers are companies (SMEs, large businesses). Study your potential client base and get familiar with the niche you want to step into.\"},{\"bold\":\"Competition\",\"casual\":\"<b>Competition</b> — understand who the market players are and how your future product compares to theirs. Technical information, financial data and marketing information can help you paint a better picture of your competitors.\"}],\"tip3\":\"3. Choose your monetization strategy\",\"monetization\":[\"Defining the appropriate monetization model from day one will help you to 1) frame the SaaS application design requirements; 2) better navigate the development process itself; and 3) figure out which features are critical in generating profit, and which can be put aside to be added in the future updates.\",\"Understanding your product monetization structure is important in cases where development budgets are limited and changing or adjusting strategy on the go would cause a failure by default. SaaS products normally follow one of the three monetization strategies:\"],\"monetizationStrategies\":[{\"bold\":\"Freemium model.\",\"casual\":\"<b>Freemium model.</b> Users are not required to pay anything to start using your product. They get a limited set of free features which can be increased for an additional fee.\"},{\"bold\":\"Subscription.\",\"casual\":\"<b>Subscription.</b> In order to use a product, users have to make recurring payments. The billing frequency can be monthly, quarterly, or annually, depending on the subscription packages available. \"},{\"bold\":\"Paid app.\",\"casual\":\"<b>Paid app.</b> A user makes a one-time payment to start using an app. After purchasing the software, they get full access to all the product contents and features. \"}],\"tip4\":\"4. Pick a SaaS development team\",\"saasTeam\":\"Irregardless of the type of software you want to create, when it comes to project facilitation, you will most likely be faced with two options — building a software in-house or outsourcing the work.\",\"teamTypes\":[{\"bold\":\"In-house.\",\"casual\":\"<b>In-house.</b> You create software with the help of your own on-site team within your company. In this case, you will have to recruit developers (if you don't have a team already), and take care of salaries, taxes, rental expenses, etc. The in-house approach is best suited to large organizations that want to have full control over a software development process.\"},{\"bold\":\"Outsource.\",\"casual\":\"<b>Outsource.</b> You create a product with the help of a third-party team — an outsourcing contractor. With an outsourcing model, you also have two options — to look for a team on-shore (in the local market) or off-shore (look abroad). Since the main reason for outsourcing is cost reduction, we recommend that you consider foreign markets first. If we take software development rates of EU-based software architects, these are normally 2-3 times lower compared to those of US-based developers.\"}],\"tip5\":\"5. Create an MVP\",\"mvp_1\":\"MVP — a Minimum Viable Product — is a basic version of a product or a prototype that includes only the key components of your software (i.e. those features that are required for the product to be used as it is supposed to be). Why would you want to develop an MVP in the first place? Here are two main reasons:\",\"mvpReasons\":[{\"bold\":\"To validate your idea\",\"casual\":\"<b>To validate your idea</b> in practice and test the demo version of your product on early adopters, without investing a hefty amount of money in the development process.\"},{\"bold\":\"To get investors for your startup.\",\"casual\":\"<b>To get investors for your startup.</b> An MVP makes it much easier to attract new investors to your project. Providing real life results — based on prototype tests — is the only way to prove to prospective stakeholders that your product meets users' demand and is worth investing in.\"}],\"mvp_2\":\"The major share of today's biggest tech companies like Amazon, Etsy, Spotify, Twitter, Dropbox, etc. started their journeys by creating MVPs. To this day, designing an MVP is the most common practice among startups, used to verify the market acceptance of a product. It's fast, reliable and cost-effective.\",\"final\":[\"The software as a service architecture concept is “the new black,” steadily squeezing out the on-premise and other traditional software distribution models from the market. This is a natural development of the industry and it is up to us to decide whether to adopt new technologies or stick with soon-to-be-outdated infrastructure.\",\"If you need help designing a saas application, reach out to our team. At WTT Solutions, we specialize in delivering designs for saas apps and other types of cloud products. To get a free consultation with one of our specialists, select the 'Get In Touch' option on the top right corner of this page. Don't forget to subscribe to our newsletter in order to receive all new updates from our team!\"],\"questionsList\":[{\"question\":\"How long will a SaaS development process take?\",\"answer\":\"The amount of time needed to create a design for SaaS application depends on the work scope and product features. Each project is different and each idea is unique, so to get an accurate estimate contact our support team.\"},{\"question\":\"How much will my project cost?\",\"answer\":\"It depends on the technical complexity of the project and number of specialists involved; however, we are always willing to find the best possible option for each particular budget size. Get in touch with our support team to discuss all the details and SaaS design requirements.\"},{\"question\":\"Do I need to be tech-savvy to work with you?\",\"answer\":\"No. You don't have to have a technical background to start working with us. Our project management team will guide you through all the technical nuances and specifics of the software development during the actual process.\"},{\"question\":\"I have a project I want to improve. Can you help me with that?\",\"answer\":\"Yes. We will be happy to do a UX/UI audit of your product and come up with suggestions on what can be improved in your product. By our team.\"}],\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"insights\"]},{\"id\":\"how-to-build-an-mvp-for-an-online-marketplace\",\"title\":\"How to develop an mvp for an online marketplace\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"March 19, 2021\",\"metaTitle\":\"How to build an Online Marketplace MVP - guide from WTT Solutions\",\"metaDescription\":\"A good MVP allows you to validate assumptions about the product you want to develop ✅ Learn how to build an online marketplace MVP from our case | WTT Solutions\",\"text\":\"All businesses start somewhere. If we turn our heads backwards and take a look at the most renowned names in the marketplace industry like eBay, Zappos, Etsy, Airbnb, Uber — none of these companies were very big back in the day. In the early development stages, all they had were niche- or region-limited digital products, each with basic functions and little-to-no investments at all.\",\"articleDescription\":[\"All businesses start somewhere. If we turn our heads backwards and take a look at the most renowned names in the marketplace industry like eBay, Zappos, Etsy, Airbnb, Uber — none of these companies were very big back in the day. In the early development stages, all they had were niche- or region-limited digital products, each with basic functions and little-to-no investments at all.\",\"That's what the concept of Minimum Viable Product (MVP) actually stems from — having a bare-bones version of a final product that is functional enough to fulfill a specific user's problem, and cheap enough to keep a startup afloat.\",\"In this blog post, we will answer the questions around how to build a marketplace MVP, what features an online marketplace MVP should have, and what business benefits come with the marketplace MVP.\"],\"subtitles\":[{\"id\":1,\"title\":\"What is Marketplace MVP and Why is it Important?\"},{\"id\":2,\"title\":\"What You Need to Know to Create an Online Marketplace MVP\"},{\"id\":3,\"title\":\"Key Features of a Minimum Viable Product for a Marketplace\"},{\"id\":4,\"title\":\"How to Build a Marketplace MVP: Step-by-Step Guide\"},{\"id\":5,\"title\":\"1. Research your market and competition\",\"subtitle\":true},{\"id\":6,\"title\":\"2. Study best practices and failed cases of launching online marketplace\",\"subtitle\":true},{\"id\":7,\"title\":\"3. Map out the user flow for your product\",\"subtitle\":true},{\"id\":8,\"title\":\"4. Develop and launch MVP for Marketplace\",\"subtitle\":true},{\"id\":9,\"title\":\"5. Analyze the results\",\"subtitle\":true},{\"id\":10,\"title\":\"Summary\"},{\"id\":11,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"onlineMarketplaceMVP\":[\"The term MVP was first defined in 2001 by Frank Robinson, co-founder of consulting agency SyncDev. Almost a decade later, it’s been widely <a href=http://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html target='_blank' rel='nofollow'>popularized</a> by Eric Ries — American blogger and author of the book 'The Lean Startup.'\",\"According to Ries, MVP is the first version of a product that allows a company to test and validate its business idea with the help of feedback from early adopters, i.e. first users. All this with a minimum amount of effort.\",\"The benefits of such a developmental approach have become even more apparent when we look at the statistics — 90% of new startups <a href=https://www.investopedia.com/articles/personal-finance/040915/how-many-startups-fail-and-why.asp target='_blank' rel='nofollow'>fail</a>, with the top three <a href=https://www.investopedia.com/articles/personal-finance/040915/how-many-startups-fail-and-why.asp target='_blank' rel='nofollow'>reasons</a> for failure being budget problems, incorrect market choices and lack of research. Failure rates could be significantly lower, however, if more startups started to market their products with an MVP version first.\",\"Aside from the market research and feedback collection, the advantages of building a marketplace MVP are as follows:\"],\"advantagesOfBuildingMarketplaceMVP\":[{\"bold\":\"Saves time and money.\",\"casual\":\"<b>Saves time and money.</b> The primary goal of any startup is to limit expenses as much as possible, and MVP helps do exactly that. Instead of continually wasting time and pouring money into a 'black box' of new updates and custom features, it lets you come up with a product that you can start testing on early adopters right away.\"},{\"bold\":\"Assists in creating an effective promotion strategy.\",\"casual\":\"<b>Assists in creating an effective promotion strategy.</b> Promoting new or innovative products is hard, especially when you don't have real-life case studies to learn or get insights from. MVP, on the contrary, serves as a starting point for marketing campaign development, analysis and further adjustments.\"},{\"bold\":\"An efficient way to raise funds.\",\"casual\":\"<b>An efficient way to raise funds.</b> When it comes to product development, most startups rely on investment capital. Having an MVP in your arsenal makes pitching your idea to potential investors a lot easier.\"},{\"bold\":\"Lets you estimate product scalability.\",\"casual\":\"<b>Lets you estimate product scalability.</b> Let's not forget that MVP is actually a working product — limited, but working — so it is a way to validate your ideas in action, physically test business concepts, and figure out how to scale from there.\"}],\"needToKnowToCreateMVP\":[\"Development of a minimum viable product for a marketplace comes with its benefits as well as its pitfalls. On one hand, it requires startup owners to outline the core features and business goals from day one.\",\"On the other hand, teams need to correctly understand the nature of online marketplace MVP development techniques, and the outcomes they should be looking for.\",\"Here's a shortlist of key aspects that startups need to keep in mind when developing an MVP for a marketplace:\"],\"keyAspects\":[{\"bold\":\"Focus on the core value of your product and build the MVP around it.\",\"casual\":\"<b>Focus on the core value of your product and build the MVP around it.</b> The most common problem for the majority of startups is that they want everything all at once. Even an MVP may end up overloaded with unnecessary features that don't influence the product much, while taking time and money to develop. Following the principles of the Lean Startup methodology 'Minimum viable product might be even more minimum than you think' startup owners should keep their focus narrow and work only on the core aspects of the project.\"},{\"bold\":\"Keep long-term goals in mind.\",\"casual\":\"<b>Keep long-term goals in mind.</b> Companies should always regard the MVP as only one of many steps towards product development. It is the preliminary goal but not the final one. The goal of an MVP for an online marketplace is to answer two basic questions: 'Does my idea have potential?' and, if the answer is yes, then 'What exactly should we do from there to achieve the desired goals?'\"},{\"bold\":\"Know your success criteria.\",\"casual\":\"<b>Know your success criteria.</b> Setting defined metrics will help you understand whether the results you get during MVP tests are relevant to your immediate and long-term goals. The number and type of criteria will solely depend on each type of a project; however, if you are not sure which one to choose, here's a list of common metrics to start with: Customer Acquisition Cost (CAC), Churn Rate, Average  Revenue Per User (ARPU), Lifetime Value of a Customer (LTVC), Monthly Recurring Revenue (MRR), etc.\"}],\"keyFeaturesOfMVP\":[\"With ongoing digitalization in today’s world, there's almost nothing left that you can't sell or buy online. Some platforms, like Amazon, sell products in product marketplaces. Some, like Uber, offer services in service marketplaces. Some, like Oodle, combine both of these to create hybrid marketplaces, and some, like Kickstarter, connect startups and investors in project marketplaces.\",\"For each particular type of marketplace there will be a unique feature set; however, the key components will remain pretty much the same:\"],\"keyComponents\":[{\"bold\":\"Main page\",\"casual\":\"<b>Main page</b> — the first page users see once they come to your marketplace. In an MVP version, the homepage may contain your USP, some general information about the marketplace and its distinctive features. Later, it can be expanded to include popular categories, special offers and best-selling items, for example.\"},{\"bold\":\"Product page\",\"casual\":\"<b>Product page</b> — may include an item's picture, description, technical specifications, and details on shipment and warranty. As the marketplace develops, this page may also house such features as product ratings, customer reviews, comparison options, etc.\"},{\"bold\":\"Search\",\"casual\":\"<b>Search</b> — this option is fundamental in a marketplace. The ability for a platform to return accurate and up-to-date results on a user's search request is what may separate success from failure for a marketplace MVP.\"},{\"bold\":\"Admin panel\",\"casual\":\"<b>Admin panel</b> — the hidden side of your platform that can't be seen by users. The admin panel allows you to do everything in your marketplace: from improving the website design and working on user feedback to assessing user flow, approving new vendor products, and reviewing statistics.\"},{\"bold\":\"User/Merchant accounts\",\"casual\":\"<b>User/Merchant accounts</b> — buyers use their profiles to review purchases made, and edit preferences, shipping and payment details. For sellers, on the other hand, a profile is a place where they manage their store pages. They may edit products or services being offered, adjust stock, view reports on orders and transactions, and export this data.\"},{\"bold\":\"Messaging option\",\"casual\":\"<b>Messaging option</b> — allows users and vendors to get in touch with any questions regarding requested items, payment, shipping, etc. The back-and-forth communication between buyer and seller, in this case, can be facilitated in a few different ways. It can be manual, automatic, and AI-driven.\"},{\"bold\":\"Payout capabilities\",\"casual\":\"<b>Payout capabilities</b> — users have to have the opportunity to make purchases fast and without the need to leave your marketplace. Allowing users to pay on-site through well-known services like PayPal, Square and Stripe will make their on-platform experience more native.\"}],\"step_1\":\"1. Research your market and competition\",\"researchMarket\":[\"Market analysis is important and can't be overlooked. Even if you believe that your project idea is the most innovative and 'one-of-a-kind,' do your research first. The simple belief in the project uniqueness should never serve as the justification for your project development.\",\"Examine the market size, figure out the number of companies that are already out there offering similar (or even the same) types of products, define their strong and weak points. Assess users' geography and buying preferences. \"],\"step_2\":\"2. Study best practices and failed cases of launching online marketplace\",\"bestPractices\":[\"Studying best practices will spare you the need to try to 'reinvent the wheel' for your startup company. Taking what works best and applying it — not blindly following but wisely adjusting, of course — in your own business is a tried and true tactic. As good as it may be to learn from successful case studies, getting insights from startup post mortems is even more important.\",\"Looking at companies that have previously failed will help you avoid the same mistakes while validating your MVP for an online marketplace. Here are a few most prominent marketplace failure examples and the reasons behind them:\"],\"failureExamples\":[{\"bold\":\"Homejoy\",\"link\":\"https://www.wired.com\",\"casual\":\" — heavily relying on sites like Groupon; expanding to new markets way too fast.\"},{\"bold\":\"Tutorspree\",\"link\":\"https://www.failory.com/cemetery/tutorspree\",\"casual\":\" — depending on a single channel to acquire new customers; inappropriate tutor-student interaction model.\"},{\"bold\":\"HelloParking\",\"link\":\"https://jungleworks.com/11-uber-for-x-startups-that-failed-are-you-making-the-same-mistakes/\",\"casual\":\" — a product that users weren't interested in; inability to scale up.\"}],\"step_3\":\"3. Map out the user flow for your product\",\"mapOutTheUser\":[\"User flow represents how users interact with your platform and how they get from point A (opening a platform) to point B (making a purchase) seamlessly. In order to provide that experience, map out all the steps that users should take on your platform to reach the final goal.\",\"Keep in mind, also, that the user flow will be unique for each page of your marketplace. This will help to better shape a hierarchical structure of different components in the future, define entry/exit points, and understand what functionality works best and what features of an online marketplace MVP should be added in the next update.\"],\"step_4\":\"4. Develop and launch MVP for Marketplace\",\"developAndLaunchMVP\":[\"After studying market and competition, figuring out what users' needs are, and prioritizing marketplace features, you are all set to develop a marketplace MVP. Just a reminder — this is not a full-fledged product, so don't strive for the best quality possible by investing resources into neverending redesigns and work scope adjustments. Your goal is to develop a product that is handy and engaging enough to pique the user's interest.\",\"The next step you want to take is to gather or identify a development team that will be able to create an online marketplace MVP and deliver to your expectations.\",\"Hiring a reliable contractor for marketplace mvp development with an already assembled team will save you much hassle, so we advise you to try that option first. Especially if you are at the early stages of your startup development and don't have enough financial resources to accommodate 20-30 specialists under one roof, pay rent, salaries, taxes, etc.\",\"Make sure that you look for a trustworthy partner with relevant expertise in your market niche.\"],\"step_5\":\"5. Analyze the results\",\"analyzeTheResults\":[\"Once the MVP for a marketplace is developed, you can start collecting customers' feedback and analyzing the results. This is actually not the last but, the very first step of your product development. From here, you will begin to conduct various tests, add new features, adjust marketing strategies, and attract new users.\",\"This is where the principles of MVP and Lean Startup Methodology start to really unfold: you build, test, measure, learn, and build again.\"],\"summary\":[\"As you see, MVP for the marketplace is not just about chopping out all possible features and rolling out a product as soon as possible. It is actually an extremely important asset that keeps startup owners from making lots of mistakes and jumping off their planes without a parachute.\",\"Minimum viable product for online marketplace is a foundation for your short- and long-term goals that helps you move forward and improve your product.\",\"If you want to get more information on how to develop a marketplace MVP or are curious as to how much the development of a custom MVP would cost, how long it can take, etc., reach out to us. At WTT Solutions, we are always ready to offer a helping hand to those businesses who are willing to test new ideas but not quite sure how to do that effectively.\",\"Hit the 'Get in Touch' button in the upper right corner of this page to contact us, and don't forget to subscribe to our newsletter to be the first to receive new insights!\"],\"questionsList\":[{\"question\":\"I have a marketplace idea but not sure whether it's a viable one. Can you help me validate it?\",\"answer\":\"Yes. Our team can help you validate or invalidate your marketplace idea. Speak to one of our managers for more details.\"},{\"question\":\"Do I need to have an in-house team to build an online marketplace MVP?\",\"answer\":\"MVP development requires you to act quickly, and building an in-house team (if you don't have one already) takes much time and effort. On the other hand, trusting marketplace MVP development to a dependable outsourcing partner will save you money and other resources.\"},{\"question\":\"Do I need to be involved in the software development process when working with you?\",\"answer\":\"Yes. In order to make sure that we deliver the best quality possible and project goals are 101% met, we require active client participation at every stage of the development process.\"},{\"question\":\"What happens after the MVP is developed?\",\"answer\":\"After MVP development comes the testing and validation phases where you assess market demand and the scalability opportunities of your product. Once MVP is validated, you can proceed with adding new features to it.\"}],\"timeToRead\":7,\"backgrounds\":{\"img\":\"/images/blog/howBuildMVP/img1.jpg\",\"preview\":\"/images/blog/howBuildMVP/img1.jpg\"},\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"insights\"]},{\"id\":\"social-learning-platform-5-best-examples-for-education\",\"title\":\"Social Learning Platform: 5 Best Examples For Education\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"March 23, 2021\",\"metaTitle\":\"What is a Social Learning Platform?: Top 5 Examples | WTT Solutions\",\"metaDescription\":\"On the WTT Solutions blog you can find the news and trends on how to boost your business growth with custom software development solutions - Edtech | Page 1\",\"category\":[\"edtech\"],\"text\":\"In 2019, the total share of the e-learning market exceeded $200 billion and, according to trends, will grow by 8% annually until 2026. The emergence of new technologies such as cloud computing and artificial intelligence, coupled with the increase in remote tendencies worldwide, will drive growth. And solutions that provide flexibility in storing, sharing, and accessing content remotely and in a collaborative fashion will prevail.\",\"articleDescription\":{\"first\":[\"In 2019, the total share of the e-learning market exceeded $200 billion and, <a href='https://www.gminsights.com/industry-analysis/elearning-market-size' target='_blank' rel='nofollow'>according to trends </a>, will grow by 8% annually until 2026. The emergence of new technologies such as cloud computing and artificial intelligence, coupled with the increase in remote tendencies worldwide, will drive growth. And solutions that provide flexibility in storing, sharing, and accessing content remotely and in a collaborative fashion will prevail.\",\"The pandemic limits live communication, forcing us to study at home. But this does not mean that the crucial social element is excluded from the learning process. Modern mobile platforms help maintain emotional interaction between teachers and learners and promote regular communication between students.\"],\"second\":[\"But what is the definition of social learning today? Why does it become so important? And what social learning platforms for education are there to choose from?\",\"Let’s figure this out and take a look at the most popular examples of Social Learning Platforms. <a href='https://wtt-solutions.com/' target='_blank'>WTT Solutions</a> has extensive experience with e-learning software, and we are ready to share it with you.\"]},\"SLP_links\":{\"mindMeister_link\":\"https://www.mindmeister.com/\",\"edApp_link\":\"https://www.edapp.com/blog/social-learning-platforms\",\"sapLitmos_link\":\"https://www.softwareadvice.com/lms/\",\"sakai_link\":\"https://www.sakailms.org/\",\"schoology_link\":\"https://www.schoology.com/\"},\"subtitles\":[{\"id\":1,\"title\":\"What is a Social Learning Platform?: Tasks and Benefits\"},{\"id\":2,\"title\":\"Social Learning Platforms for Education: Impact on modern life\"},{\"id\":3,\"title\":\"Best Social Learning Platforms\"},{\"id\":4,\"title\":\"5 reasons to pick LMS for social learning\"},{\"id\":5,\"title\":\"So, Is SLP a Hype or Successful Future?\"},{\"id\":6,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"whatIsSLP_1\":[\"Social learning itself is an ongoing process of learning from other people. We learn by observing, asking questions, and sharing knowledge through eLearning technologies.\",\"A special online environment where members can learn, collaborate, comment on, share their formal or informal experience, exchange knowledge, and interact with each other is the best social learning platform definition.\",\"What is a social learning platform exactly? The software can range from LMS/LXP solutions to one-to-one online courses, group exercises, webinars, leaderboards, and more. The main idea is to increase engagement and motivation and enable knowledge sharing.\",\"Social learning is common in both academic and corporate environments. Leading organizations are increasingly using LMS to make curriculum engaging and active.\"],\"benefitsSLPImg1\":\"/images/blog/SocialLearningPlatform/benefits1.jpg\",\"benefitsSLPImg2\":\"/images/blog/SocialLearningPlatform/benefits2.jpg\",\"benefitsOfSLP\":\"Benefits of social learning tools\",\"benefitsOfSLPlist\":[{\"bold\":\"Gaining new skills quickly\",\"casual\":\"<b>Gaining new skills quickly</b>. Enriching learning with social elements opens up many opportunities. By sharing your knowledge and experience, you allow students to master new skills naturally. They don't need to read dozens of books to get an adequate understanding of the subject.\"},{\"bold\":\"Improved collaboration between employees\",\"casual\":\"<b>Improved collaboration between employees</b>. You could hire ten experts with impressive qualifications, but if they can't work as a team, it's all in vain. LMS training will set the standard for collaboration within the company. You will develop a self-learning community that will strengthen your position in the business niche.\"},{\"bold\":\"Gaining organizational knowledge\",\"casual\":\"<b>Gaining organizational knowledge</b>. You cannot use collective knowledge if you lock students in a small class. If you want to unleash genius and stimulate everyone's thinking outside the box, your LMS for social learning must include a social dimension.\"},{\"bold\":\"Enhanced communication\",\"casual\":\"<b>Enhanced communication</b>. The very act of studying together will kick-start a culture focused on effective communication. The increase in the assimilation of the material happens naturally and completely free.\"},{\"bold\":\"Better learning engagement\",\"casual\":\"<b>Better learning engagement</b>. It's no secret that online learning has a low reputation for engagement. A little social function changes everything and inspires your colleagues to learn, ask questions, and reward each other.\"},{\"bold\":\"Boosted return on investment\",\"casual\":\"<b>Boosted return on investment</b>. None of the benefits mean anything without visible results. Once you introduce collaborative learning, students will understand the material faster. In addition, you will have a group of versatile team players who will share their knowledge.\"}],\"whatIsSLP_2\":\"How do we all know this? Our platform solutions are primarily focused on engagement. The main tasks solved by social learning software include:\",\"tasksSolvedBySLP\":[{\"bold\":\"Make teamwork an essential part of e-learning\",\"casual\":\"<b>Make teamwork an essential part of e-learning</b>, identify and close knowledge gaps, and strengthen team communication;\"},{\"bold\":\"Create a space where students can collaborate\",\"casual\":\"<b>Create a space where students can collaborate</b>, exchange ideas and solve problems, find more effective solutions;\"},{\"bold\":\"Help organizations maximize talent\",\"casual\":\"<b>Help organizations maximize talent</b> by enabling people to share knowledge and experience through structured collaborative learning.\"}],\"impactOnModernLife\":[\"A learning management system with built-in social media functions can improve the quality of online learning programs. Learning is much more effective in a social environment since knowledge is acquired naturally. In messengers, presentations, tests, and educational materials are more perceived as entertainment, although they are part of the educational process.\",\"The best social learning platforms are useful for non-formal education, providing an opportunity to communicate with peers, exchange tips and tricks, and seek professional help. We become more open and communicative.\",\"Discussion forums and communities allow you to share and comment, interact, start new discussions, post topics, and share knowledge. We receive incentives to open new communication channels for further learning.\",\"Collaborating and sharing content in real time becomes easier. For interactive collaboration, students can connect via live streaming video or webinars.\",\"LMS with social learning features offers students 24/7 availability, encourages self-learning, and motivates them to achieve their goals. A sense of competition encourages you to work harder and compete, increasing productivity. Our world is becoming accessible and competitive!\"],\"bestSocialLearningPlatforms_1\":\"Let’s check out the top 5 social learning platform examples in our opinion and highlight their major pros and cons.\",\"platform_1\":\"MindMeister\",\"mindMeister_1\":[\"This is an online learning tool for brainstorming, taking notes, planning projects, and handling creative tasks. MindMeister makes it easier to visually interact with other people.\",\"Key features:\"],\"mindMeisterKeyFeatures\":[{\"bold\":\"\",\"casual\":\"Mind map templates for the faster organization of new brainstorm sessions and project planning tasks;\"},{\"bold\":\"\",\"casual\":\"Image, video, and other media attachments for more convenience and impact in the process of planning;\"},{\"bold\":\"\",\"casual\":\"History mode for total immersion in the planning process and editing of small details.\"}],\"mindMeister_2\":\"The main pros of MindMeister include:\",\"mindMeisterMainPros\":[{\"bold\":\"\",\"casual\":\"a free version (which, however, doesn't have all the paid features like file and image attachments, PDF export, etc.);\"},{\"bold\":\"\",\"casual\":\"wide visual planning and collaboration opportunities;\"},{\"bold\":\"\",\"casual\":\"in-depth mind map editing capabilities.\"}],\"mindMeister_3\":\"One drawback to this application is that it doesn’t allow you to export mind maps in different formats such as ppt, even in the paid version.\",\"platform_2\":\"EdApp\",\"edApp_1\":[\"EdApp is one of the top social learning platforms offering a complete set of social features, including discussions, video conferencing integration, forums, and gamification. The best thing about this one is that it’s completely free.\",\"Key features:\"],\"edAppKeyFeatures\":[{\"bold\":\"\",\"casual\":\"A discussion and assignment feature designed specifically to increase social interactions and ensure the success of adult learning.\"},{\"bold\":\"\",\"casual\":\"Possibility of mentoring through forum discussions between colleagues and managers.\"},{\"bold\":\"\",\"casual\":\"An assignment feature that allows employees to send responses containing video and image elements to managers for review.\"},{\"bold\":\"\",\"casual\":\"The virtual classroom tool is a built-in feature that allows you to reach and educate team members without compromising the benefits of face-to-face interaction. It seamlessly connects your chosen video conferencing platform like Zoom, Google Meet, or Microsoft Teams directly to EdApp.\"}],\"edApp_2\":\"There are practically no drawbacks, but some users mention they don’t like that it is impossible to copy a task or change achievements.\",\"platform_3\":\"Schoology\",\"schoology_1\":\"Schoology is a multi-functional LMS focused on K-12. Key features include:\",\"schoologyKeyFeatures\":[{\"bold\":\"\",\"casual\":\"Built-in development tool.\"},{\"bold\":\"\",\"casual\":\"Video conferencing support.\"},{\"bold\":\"\",\"casual\":\"Mobile learning.\"},{\"bold\":\"\",\"casual\":\"Student portal.\"},{\"bold\":\"\",\"casual\":\"SCORM Compliant.\"}],\"schoology_2\":\"What do users like the most about this social learning platform for education?\",\"schoologyUsersLikeTheMost\":[{\"bold\":\"Convenience of use\",\"casual\":\"<b>Convenience of use</b>. Schoology is a lot like a regular social media platform.\"},{\"bold\":\"Simple integration\",\"casual\":\"<b>Simple integration</b> with Google, Microsoft, and other educational platforms. Educators can embed edtech tools like Padlet, Polleverywhere, Thinglink, and more. You can transfer ownership to students and control them at their own pace.\"},{\"bold\":\"Personalization\",\"casual\":\"<b>Personalization</b>. You can add/remove and create assignments for specific groups of students.\"}],\"schoology_3\":\"The highlighted downsides include:\",\"schoologyDownsides\":[{\"bold\":\"Inclusion issues\",\"casual\":\"<b>Inclusion issues</b>. Google Assignments are not time-stamped for assignments, and TurnItIn is too complicated.\"},{\"bold\":\"Smaller feature set\",\"casual\":\"<b>Smaller feature set</b>. Ease of use means some loss of complex functionality. However, with some creativity thrown in, the platform interacts with third-party tools to compensate for any functionality.\"}],\"platform_4\":\"SAP Litmos\",\"sapLitmos_1\":[\"A cloud-based continuous learning platform that integrates prepackaged content and a process management system.\",\"The advantages here include:\"],\"sapLitmosAdvantages\":[{\"bold\":\"\",\"casual\":\"SSAE 16 SOC 1 Type 2 and SOC 2 Type 2 certifications. The platform's open API architecture and out-of-the-box connectors enable organizations to connect SAP Litmos to their ecosystem.\"},{\"bold\":\"\",\"casual\":\"Simple and consistent user experience across all devices.\"},{\"bold\":\"\",\"casual\":\"The ability to directly import content into the app, as well as create, assign courses, and track student progress.\"}],\"sapLitmos_2\":\"Some drawbacks:\",\"sapLitmosDrawbacks\":[{\"bold\":\"\",\"casual\":\"Poor possibilities for combining initial courses with refresher courses.\"},{\"bold\":\"\",\"casual\":\"Frequent reporting mistakes.\"}],\"platform_5\":\"Sakai\",\"sakai_1\":[\"An open-source cloud platform targeted at schools with enterprise learning capabilities. In terms of social learning, Sakai offers media embedding, forums, chat functions, messaging, and video tutorial optimization.\",\"Pros:\"],\"sakaiPros\":[{\"bold\":\"\",\"casual\":\"Scalability, support for distributed work.\"},{\"bold\":\"\",\"casual\":\"Customer service quality. Sakai offers the best service to keep educators and learners at their best.\"},{\"bold\":\"\",\"casual\":\"A unified information environment with powerful and flexible tools for teaching, learning, and dynamic collaboration.\"},{\"bold\":\"\",\"casual\":\"Modern, simple, and accessible user interface. Thanks to its flexible design, teachers, and students can achieve academic goals no matter where they are or what device they are using.\"}],\"sakai_2\":\"Cons:\",\"sakaiCons\":[{\"bold\":\"\",\"casual\":\"Lengthy task development process.\"},{\"bold\":\"\",\"casual\":\"Paid apps that unexpectedly might go overdue.\"}],\"reasons\":[{\"bold\":\"Communication and retention\",\"casual\":\"<b>Communication and retention</b> are essential LMS features that allow team members to work together, exchange ideas, and challenge each other productively.\"},{\"bold\":\"Virtual classroom tools\",\"casual\":\"<b>Virtual classroom tools</b> are efficient built-in features that allow you to reach and educate your team members at any scale without compromising the benefits of face-to-face interaction.\"},{\"bold\":\"Flexibility\",\"casual\":\"<b>Flexibility</b> — SLPs often have both mobile and desktop functionality. This feature makes e-learning flexible.\"},{\"bold\":\"Gamification and virtual labs\",\"casual\":\"<b>Gamification and virtual labs</b> are outstanding collaboration tools for learners.\"},{\"bold\":\"Centralized organization\",\"casual\":\"<b>Centralized organization</b> — diverse e-learning content is gathered, structured, and organized within a single universal system.\"}],\"fiveReasons\":\"The LMS serves as a consistent platform for exchanging and acquiring knowledge. Also, it provides greater transparency in the organization’s culture. Social learning influences the effectiveness of teaching programs, provides insight into student engagement and motivates them.\",\"summary_1\":[\"SLP is not completely a rush or crisis-driven phenomenon, but today’s real necessity predetermines the future of education. Social learning is becoming a hot topic for corporate development departments. Today, the cost of social learning tools is three times higher than it was a few years ago, as the demand for knowledge from specialized experts is growing.\",\"Together with a trusted technical partner, you can increase the effectiveness of your company's tools. We are not just talking about great products; we create solutions together with our clients using:\"],\"slpSolutions\":[{\"bold\":\"Individual LMS development\",\"casual\":\"<b>Individual LMS development</b>. If you don't like the social functions in any of the existing systems, we can develop an entirely new system with as many or as few interpersonal contacts as you need;\"},{\"bold\":\"LMS configuration\",\"casual\":\"<b>LMS configuration</b>. Alternatively, we can use an open-source system and add the functionality you need if your budget is tight.\"}],\"summary_2\":\"Start investing in the future right now — contact <a href='https://wtt-solutions.com/platform-development' target='_blank'>WTT Solutions</a> and get a social learning LMS tailored specifically to your company.\",\"questionsList\":[{\"question\":\"How important is social learning?\",\"answer\":\"The ultimate importance of social learning is the opportunity to learn based on the field realities. Specialists learn proper decision-making and study approaches to solving practical issues “in the heat of the moment.”\"},{\"question\":\"What makes a good learning platform?\",\"answer\":\"The Holy Grail of any SLP is the room for collaboration it provides. A good platform immerses you in social interactions, preparing for what’s to come once you hit the real field practice.\"},{\"question\":\"What are the requirements for choosing an online learning platform?\",\"answer\":\"You should be looking for a hassle-free interface, complex educational processes that don’t confuse you and work collaboration opportunities. The rest is the question of your budget and preferences.\"},{\"question\":\"How do you create LMS?\",\"answer\":\"Creating an LMS is very similar to designing an eCommerce platform. Using currently available tools, some entrepreneurs even manage to build an LMS single-handedly. However, consider turning to competent professionals to achieve the best results.\"},{\"question\":\"What are the two major components of a learning management system?\",\"answer\":\"We would say these are intuitive UX and collaborative features. A smooth UX makes the learner’s experience exciting and motivating, while collaborative opportunities allow for an efficient immersion into real-life practices.\"}],\"timeToRead\":9,\"backgrounds\":{\"img\":\"/images/blog/SocialLearningPlatform/img.jpg\",\"preview\":\"/images/blog/SocialLearningPlatform/preview.jpg\"},\"authorImg\":\"/images/blog/authors/ceo.png\"},{\"id\":\"how-to-find-investments-for-an-online-marketplace-startup\",\"title\":\"How to Find Investments for an Online Marketplace Startup\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"March 22, 2021\",\"metaTitle\":\"How to Get Funding for an Online Marketplace Startup | WTT Solutions\",\"metaDescription\":\"Online marketplace startups funding helps get investments to cover operational expense.✔️ Here are the top strategies to raise money for online marketplaces.\",\"text\":\"Thinking about some of the world’s game-changing startups, you’ll quickly realize a lot of them are marketplaces — eBay, Uber, Airbnb, etc. The “platform economy” is the future, and marketplaces are its vital components. The competition among marketplaces is cutthroat, though — statistically, online platforms account for 40% of online retail.\",\"articleDescription\":{\"description1\":\"Thinking about some of the world’s game-changing startups, you’ll quickly realize a lot of them are marketplaces — eBay, Uber, Airbnb, etc. The “platform economy” is the future, and marketplaces are its vital components. The competition among marketplaces is cutthroat, though — \",\"statistically\":\"statistically\",\"statisticallyLink\":\"https://ecommercenews.eu/global-marketplaces-to-own-39-of-online-retail-market-in-2020/\",\"description2\":\", online platforms account for 40% of online retail.\",\"description3\":\"As a marketplace developer or business owner, chances are that you are wondering how to make an impactful presence for your platform, and where to find funding to get a next-generation marketplace off the ground. In this post, we will take a look at the top methods for how to raise funds for a marketplace startup.\"},\"subtitles\":[{\"id\":1,\"title\":\"Investments for Online Marketplace Startups: Key Major Trends\"},{\"id\":2,\"title\":\"Online Marketplace Startups Funding: Companies That Got Most Investors' Attention\"},{\"id\":3,\"title\":\"Top 5 Ways to Raise Money for a Marketplace Startup\"},{\"id\":4,\"title\":\"Review of Top Platforms to Find Funding for Online Marketplace Startups\"},{\"id\":5,\"title\":\"Final Thoughts\"},{\"id\":6,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"keyMajorTrends_1\":[\"In 2021, what are investors and Venture Capital (VC) firms looking for in a successful startup? We took a closer look at the industries with the most booming marketplace landscapes and zoomed in on trends that will define the future of marketplace development.\",\"Here are the trends that will shape marketplace demand in the next 5-7 years:\"],\"keyMajorTableTitle\":[\"Industry\",\"Key industry trends\",\"Top online marketplaces\"],\"keyMajorTable\":[{\"firstColumn\":\"Meal delivery\",\"secondColumn\":[{\"bold\":\"\",\"casual\":\"Organic food markets\"},{\"bold\":\"\",\"casual\":\"Online grocery shopping\"},{\"bold\":\"\",\"casual\":\"Meal kits\"}],\"thirdColumn\":[{\"bold\":\"\",\"casual\":\"Blue Apron\"},{\"bold\":\"\",\"casual\":\"Hello Fresh\"},{\"bold\":\"\",\"casual\":\"Cortilla\"},{\"bold\":\"\",\"casual\":\"Ocado\"}]},{\"firstColumn\":\"Education\",\"secondColumn\":[{\"bold\":\"\",\"casual\":\"On-demand education that helps people acquire relevant skills\"},{\"bold\":\"\",\"casual\":\"Remote education and homeschooling\"}],\"thirdColumn\":[{\"bold\":\"\",\"casual\":\"Preply\"},{\"bold\":\"\",\"casual\":\"Brainly\"},{\"bold\":\"\",\"casual\":\"ClassDojo\"},{\"bold\":\"\",\"casual\":\"Remind\"}]},{\"firstColumn\":\"Fintech\",\"secondColumn\":[{\"bold\":\"\",\"casual\":\"Financial and trading consulting\"},{\"bold\":\"\",\"casual\":\"Insurance provider marketplaces\"}],\"thirdColumn\":[{\"bold\":\"\",\"casual\":\"Robinhood\"},{\"bold\":\"\",\"casual\":\"Revolut\"},{\"bold\":\"\",\"casual\":\"Monzo\"}]},{\"firstColumn\":\"Mobility\",\"secondColumn\":[{\"bold\":\"\",\"casual\":\"Increased demand for in-city car travel (as a growing number of people try to avoid using public transport)\"},{\"bold\":\"\",\"casual\":\"Governments encourage micro-mobility (e-scooters, e-bikes) to reduce air congestion\"}],\"thirdColumn\":[{\"bold\":\"\",\"casual\":\"Uber\"},{\"bold\":\"\",\"casual\":\"Lyft\"},{\"bold\":\"\",\"casual\":\"Lime\"}]}],\"keyMajorTrends_2\":[\"2020 led to fundamental changes in the online marketplace market. In the pre-COVID world, the most popular platforms were those primarily selling electronics and books. Now, marketplaces have a powerful presence in almost all fields of life: they are prominent players in meal shopping, education, healthcare, and other industries.\",\"As can be seen from the table above, regardless of the field, the key market demands for online marketplaces are speed, customer support, online shopping safety, and convenience.\"],\"startupsFunding_11\":\"According to \",\"andreessenHorowitz\":\"Andreessen Horowitz\",\"andreessenHorowitzLink\":\"https://a16z.com/\",\"startupsFunding_12\":\", a leading VC firm, 2020 was a busy year for online marketplace startups. The company put together \",\"listOfMarketplace\":\"a list of marketplaces\",\"listOfMarketplaceLink\":\"https://a16z.com/2020/02/18/marketplace-100/\",\"startupsFunding_13\":\" that stormed into the startup community and gathered impressive funding.\",\"quot\":[{\"text\":\"“We were surprised by the number of startups that had made it to the list, including many relatively unfamiliar names”\",\"author\":\"Andreessen Horowitz Team\"}],\"startupsFunding_2\":\"In this blog, we have selected the most rapidly-developing companies across all marketplaces that made it to the list, and took a closer look at these platforms to get an understanding around how a marketplace startup raises money.\",\"sphere_1\":\"Education\",\"education\":[{\"bold\":\"Coursera\",\"casual\":\"<b>Coursera</b> — in 2020, the online education platform raised $130 million in funding to help move colleges to remote learning in the 2020-2021 academic year.\",\"imageSrc\":\"/images/blog/HowToFindInvestments/Coursera.jpg\"},{\"bold\":\"Wyzant\",\"casual\":\"<b>Wyzant</b> — the company is set for acquisition by IXL Learning — a Chicago-based company. The details of the deal are not yet disclosed.\",\"imageSrc\":\"/images/blog/HowToFindInvestments/Wyzant.jpg\"}],\"sphere_2\":\"Meal delivery\",\"mealDelivery\":[{\"bold\":\"MilkRun\",\"casual\":\"<b>MilkRun</b> — a grocery shopping company, that connects farmers and wellness-oriented shoppers, has made 12 times more in 2020 than it had in the two years prior. The marketplace is expanding its reach and is now partnering with over 150 farmers.\",\"imageSrc\":\"/images/blog/HowToFindInvestments/MilkRun.jpg\"},{\"bold\":\"Instacart\",\"casual\":\"<b>Instacart</b> — an online meal delivery marketplace <a href='https://techcrunch.com/2020/10/08/instacart-raises-200m-more-at-17-7b-valuation/' target='_blank'  rel='nofollow'>closed an impressive deal</a> in October 2020, raising $200 million.\",\"imageSrc\":\"/images/blog/HowToFindInvestments/Instacart.jpg\"},{\"bold\":\"EzCater\",\"casual\":\"<b>EzCater</b> is the largest catering marketplace that, since its creation in 2007, raised over $170 million in funding.\",\"imageSrc\":\"/images/blog/HowToFindInvestments/EzCater.jpg\"}],\"sphere_3\":\"Fintech\",\"fintech\":[{\"bold\":\"I2 Invest\",\"casual\":\"<b>Instacart</b> — a Zurich-based marketplace for managing online investments <a href='https://www.eu-startups.com/2020/08/zurich-based-fintech-i2invest-raises-e1-2-million-and-launches-first-investment-products/' target='_blank'  rel='nofollow'>raised 1.2 million Euro in 2020.</a>\",\"imageSrc\":\"/images/blog/HowToFindInvestments/I2Invest.jpg\"}],\"sphere_4\":\"Health and wellness\",\"healthAndWellness\":[{\"bold\":\"Gympass\",\"casual\":\"<b>Instacart</b> — an online fitness marketplace that raised $300 million in investments, closing a deal with Softbank.\",\"imageSrc\":\"/images/blog/HowToFindInvestments/Gympass.jpg\"},{\"bold\":\"Classpass\",\"casual\":\"<b>Classpass</b> — at the beginning of last year, the marketplace that connects fitness enthusiasts and gym instructors for online classes raised $285-million in investments.\",\"imageSrc\":\"/images/blog/HowToFindInvestments/Classpass.jpg\"}],\"sphere_5\":\"Retail\",\"retail\":[{\"bold\":\"GOAT\",\"casual\":\"<b>GOAT</b> — a sneaker marketplace platform closed a Series E deal last year, raising $100 million for expansion.\",\"imageSrc\":\"/images/blog/HowToFindInvestments/GOAT.jpg\"}],\"top5ways\":[\"Statistics point to the fact that marketplaces are “the next big thing” and it’s no surprise that a growing number of investors can be found placing bets on B2B and B2C online platforms.\",\"Despite the booming growth of marketplaces, it’s normal for business owners to feel overwhelmed when trying to secure funding. To get a sense of direction in online marketplace fundraising, take a look at these methods to raise funds for an online marketplace startup.\"],\"way_1\":\"1. Bootstrapping\",\"bootstrapping\":[\"Bootstrapping is a fancy word for financing a startup on your own, without reaching out to investors. A lot of companies owe their success to bootstrapping — <a href='https://github.com/' target='_blank'>GitHub</a>, <a href='https://www.bigcommerce.com/' target='_blank'>BigCommerce</a>, and many more\",\"While bootstrapping brings undeniable benefits to the table, such as the freedom of decision-making, it also comes with a major drawback — there’s a limit to how much money business owners can spend on marketplace maintenance.\"],\"bootstrappingImg\":\"/images/blog/HowToFindInvestments/bootstarping.jpg\",\"benefits\":\"Benefits:\",\"bootstrappingBenefits\":[{\"bold\":\"\",\"casual\":\"Time savings\"},{\"bold\":\"\",\"casual\":\"Operational freedom\"},{\"bold\":\"\",\"casual\":\"Full ownership of the platform\"},{\"bold\":\"\",\"casual\":\"No need to share confidential data with investors\"}],\"drawbacks\":\"Drawbacks:\",\"bootstrappingDrawbacks\":[{\"bold\":\"\",\"casual\":\"No oversight\"},{\"bold\":\"\",\"casual\":\"High budget needs\"},{\"bold\":\"\",\"casual\":\"Limited scalability\"}],\"way_2\":\"2. Crowdfunding\",\"crowdfunding\":[\"There are times when business founders can generate public interest in the platform and have future users fund its development. The “Hall of Fame” for crowdfunded projects is impressive — Oculus VR, Allbirds, and other startups have become multi-million companies after raising funds on Kickstarter.\",\"Online marketplace funders can consider leveraging the power of crowdfunding, as well.\"],\"crowdfundingImg\":\"/images/blog/HowToFindInvestments/Crowdfunding.jpg\",\"crowdfundingBenefits\":[{\"bold\":\"\",\"casual\":\"Gathering a user base for the future platform\"},{\"bold\":\"\",\"casual\":\"Full ownership of the product\"},{\"bold\":\"\",\"casual\":\"Quick way to raise funds\"}],\"crowdfundingDrawbacks\":[{\"bold\":\"\",\"casual\":\"Attracting donors requires a lot of effort\"},{\"bold\":\"\",\"casual\":\"Business owners need to come up with incentives for contributors\"},{\"bold\":\"\",\"casual\":\"High failure rate\"}],\"way_3\":\"3. Incubators\",\"incubators\":\"Business incubators provide business owners with a growth-oriented environment for building and raising money for a marketplace startup business. In addition to connecting with investors and prospective users, company managers can learn by watching other startup owners get their projects off the ground.\",\"incubatorsImg\":\"/images/blog/HowToFindInvestments/img.jpg\",\"incubatorsBenefits\":[{\"bold\":\"\",\"casual\":\"Learning-induced environment\"},{\"bold\":\"\",\"casual\":\"Exposure to users and investors\"},{\"bold\":\"\",\"casual\":\"Mentoring programs\"}],\"incubatorsDrawbacks\":[{\"bold\":\"\",\"casual\":\"Rigorous selection\"},{\"bold\":\"\",\"casual\":\"Partially giving up ownership of the company\"},{\"bold\":\"\",\"casual\":\"Long waiting periods between program cycles\"}],\"way_4\":\"4. VC funding\",\"vcFunding\":[\"VC funding is a mature way to get funds for a marketplace startup. After pitching the project to venture capital firms, business owners can get private equity and, in return, they pay investors back through delayed profit and shares.\",\"VC online marketplace startups funding makes it possible to generate multi-million dollar investments; however, closing the deal with a firm takes a lot of time and effort\"],\"vcFundingImg\":\"/images/blog/HowToFindInvestments/vcFunding.jpg\",\"vcFundingBenefits\":[{\"bold\":\"\",\"casual\":\"VC firms usually provide startups with multi-million dollar investments\"},{\"bold\":\"\",\"casual\":\"Wide range of VC firms\"},{\"bold\":\"\",\"casual\":\"No application fees\"}],\"vcFundingDrawbacks\":[{\"bold\":\"\",\"casual\":\"Partly giving up ownership over the company\"},{\"bold\":\"\",\"casual\":\"Preparation takes a lot of time and effort\"},{\"bold\":\"\",\"casual\":\"Need to compete with other startup owners\"}],\"way_5\":\"5. Angel investment\",\"angelInvestment\":[\"Angel investors are people who have amassed a following in the niche and are financially independent. For the sake of exposure or new monetization opportunities, these individuals invest in potentially promising startups.\",\"As the name suggests, “angel” investors typically have more reasonable terms and lower interest rates than venture capitalists.\"],\"angelInvestmentImg\":\"/images/blog/HowToFindInvestments/angelInvestment.jpg\",\"angelInvestmentBenefits\":[{\"bold\":\"\",\"casual\":\"Support and oversight from the investor\"},{\"bold\":\"\",\"casual\":\"Reasonable deal terms\"},{\"bold\":\"\",\"casual\":\"Introductions to key players in the industry\"}],\"angelInvestmentDrawbacks\":[{\"bold\":\"\",\"casual\":\"Limited funding capacity\"},{\"bold\":\"\",\"casual\":\"Investors are hard to find\"}],\"reviewTopPlatforms\":[\"Regardless of the answer you may end up with when you ask the question on how to raise capital for a marketplace startup, keep in mind that you are in it for the long run. Not vetting investors properly puts you at risk of data leaks or ownership hijacking schemes.\",\"To make sure you embark on an online marketplace development journey armed with the right tools and connections, here is a top list of fundraising platforms and companies.\"],\"platform_1\":\"Crowdfunding platforms\",\"crowdfundingPlatforms\":[{\"bold\":\"Indiegogo\",\"casual\":\"<b>Indiegogo</b> is one of the leading crowdfunding platforms. Its highest-grossing projects have raised <a href='https://www.statista.com/statistics/620550/largest-indiegogo-campaigns-worldwide-by-amount-raised/' target='_blank'  rel='nofollow'>multi-million targets</a> — over $51 million for Pamu Slide, $36.2 million for Ninebot Max, and more. The platform is easy to work with — it allows business owners to choose between 'all-or-nothing' or 'take-what-you-get' funding. Also, you can keep receiving investments after the campaign is closed with Indiegogo InDemand.\"},{\"bold\":\"Patreon\",\"casual\":\"<b>Patreon</b> is a widely used platform to support online creators. Although it’s mainly geared towards influencers, business owners can use the platform’s infrastructure to fund online marketplaces. The benefits of the platform include flexibility of rewards, an internationally accessible payment gateway, and reasonable (5%) processing fees.\"}],\"platform_2\":\"Angel investment platforms\",\"angelInvestmentPlatforms\":[{\"bold\":\"Republic\",\"casual\":\"<b>Republic</b> is a platform that connects private investors and startup owners. In 2020, over $150 million was raised through the Republic. On the one hand, it introduces startup owners to a wide pool of investors. On the other hand, the platform has high processing fees and does not allow business owners to collect investments for online marketplace startups until they reach the funding goal.\"},{\"bold\":\"WeFunder\",\"casual\":\"<b>WeFunder</b> is another platform that aims at making the investment process simple and mainstream. Similar to Republic, it helps startup owners get to know thousands of investors worldwide; however, few of them are ready to back companies with millions of dollars — the investment minimum on WeFunder is $100.\"}],\"platform_3\":\"Incubators\",\"incubatorsPlatforms\":[{\"bold\":\"Y Combinator\",\"casual\":\"<b>Y Combinator</b> This is the most renowned accelerator program among startup owners, and has successfully funded over 940 companies. Enrolling in this incubator will introduce startup owners to key players in the marketplace industry. On the other hand, business managers need to brace themselves for hardcore competition — over 10,000 companies apply to every hosted batch.\"},{\"bold\":\"500 Startups\",\"casual\":\"<b>500 Startups</b> is a global incubator, running in over 75 countries and boasting an impressive track record — with over ten years in business, the company has funded over 2,400 startups including the famous online education marketplace, Udemy, and the Canva design tool.\"}],\"platform_4\":\"VC Firms\",\"vcFirms\":[{\"bold\":\"Union Square Ventures\",\"casual\":\"<b>Union Square Ventures</b> has an eye for promising marketplaces — the company was among the key investors for Etsy, MeetUp, and other renowned names in the marketplace industry. The firm invests selectively, though — since 2003, it has founded only a few hundred startups, most of which went on to become impactful players in their respective fields.\"},{\"bold\":\"Sequoia VC\",\"casual\":\"<b>Sequoia VC</b> Taking credit for investing in Google, Apple, and Youtube, Sequoia VC helped bring up the world’s most legendary companies. It is open towards providing funding for an online marketplace startup team of developers, with platforms like Instacart, Moovit, and Airbnb in its portfolio.\"}],\"finalThoughts\":[\"Running an online marketplace startup is challenging — business owners need to offer the technology, and acquire both suppliers and customers. At the end of the day, however, there’s a lot of room for scalability and revenue generation.\",\"To make sure budget constraints don’t hold you back from making the most out of your platform, put some time into researching fundraising strategies and identifying top platforms that can fuel your startup’s growth. Rather than trying to successfully leverage every tactic on the list, focus on two or three high-priority fundraising methods and make the most out of them.\",\"To develop a reliable online marketplace platform and get expert assistance on managing the startup, reach out to WTT Solutions. Our experts help business owners build and maintain small-scale and large-scale marketplaces. We design both B2C and B2B-facing platforms across all industries.\",\"Let’s talk about your project — click on 'Get in Touch' in the top right corner of the page. To get more insights on running an online marketplace platform, sign-up for our newsletter, below.\"],\"questionsList\":[{\"question\":\"What do I need to have prepared before going out for investment?\",\"answer\":\"<div>Although different VCs ask for different documents, the standard paperwork for seeking capital includes a:<ul><li>Pitch deck</li><li>Executive summary</li><li>Business plan with differentiation from top competitors</li><li>Financial records (balance sheet, income statement, statements of stockholders’ equity, etc.)</li><li>Team bio</li><li>Patent filings</li></ul></div>\"},{\"question\":\"How much money can my project raise?\",\"answer\":\"Depending on the investment strategy, a business owner can raise money for a marketplace startup ranging from thousands to millions of dollars. A lot of funders mistakenly believe “the more, the better” — however, you should meticulously calculate the amount to aim for in each round.The key metrics to calculate are the burn rate — how much it costs to keep the platform ready — and the cost of future milestones — the budget you need in order to roll out product updates in the future.\"},{\"question\":\"Are only companies with in-house teams eligible to apply for investment programs?\",\"answer\":\"While some VC firms require startups to have in-house teams, a lot of investors are open to funding companies with offshore teams.\"},{\"question\":\"What do Series A, Series B, and Series C mean in funding?\",\"answer\":\"<div><p><b>Series A</b> funding is for early-stage startups. Typically, companies raise $1-15 million, later allocated to development expenses.</p><p><b>Series B</b> funding helps companies expand their market reach and acquire more users. Series B funding falls in the range of $30-$60 million investments.</p><p><b>Series C</b> are larger investments that involve established startups and help companies scale.</p></div>\"}],\"timeToRead\":7,\"backgrounds\":{\"img\":\"/images/blog/HowToFindInvestments/img.jpg\",\"preview\":\"/images/blog/HowToFindInvestments/preview.jpg\"},\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"insights\"]},{\"id\":\"key-steps-of-bi-implementation-process\",\"title\":\"7 Key Steps of Business Intelligence (BI) Implementation Process\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"May 18, 2021\",\"metaTitle\":\"7 Business Intelligence Implementation Steps | WTT Solutions\",\"metaDescription\":\"Successful BI implementation gets business data organized in a way that facilitates and speeds up the process ✅ Read more benefits of business intelligence\",\"category\":[\"insights\"],\"timeToRead\":8,\"authorImg\":\"/images/blog/authors/ceo.png\",\"backgrounds\":{\"img\":\"/images/blog/BusinessIntelligence/img1.jpg\",\"preview\":\"/images/blog/BusinessIntelligence/img1Tabl.jpg\"},\"subtitles\":[{\"id\":1,\"title\":\"Why Does Your Company Need Business Intelligence Implementation?\"},{\"id\":2,\"title\":\"Successful Business Intelligence Implementation Steps\"},{\"id\":3,\"title\":\"1. Analyze the current state of the company's data\",\"subtitle\":true},{\"id\":4,\"title\":\"2. Gather a team of subject matter experts\",\"subtitle\":true},{\"id\":5,\"title\":\"3. Create a strategy and a business intelligence implementation plan\",\"subtitle\":true},{\"id\":6,\"title\":\"4. Identify important KPIs\",\"subtitle\":true},{\"id\":7,\"title\":\"5. Educate Staff & Stakeholders\",\"subtitle\":true},{\"id\":8,\"title\":\"6. Choose a software and setup BI infrastructure\",\"subtitle\":true},{\"id\":9,\"title\":\"7. Roll out pilot project and adjust system based on the results\",\"subtitle\":true},{\"id\":10,\"title\":\"Implementing BI with WTT Solutions\"},{\"id\":11,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"articleDescription\":[\"The technological advancements of the digital age have completely changed the global business community. Companies all around the world have got large amounts of data about market, demand, and customer experience at their disposal. But do these businesses actually realize what they own?\",\"The reality is that most of the time, important and factual data ends up buried beneath tons of unnecessary and excessive information, preventing companies from effectively using the data they have. In fact, <a href=https://www.sigmacomputing.com/blog/top-20-big-data-statistics/ target='_blank' rel='nofollow'>only 12% of companies</a> analyze the data they receive.\",\"In this blog, we'll take a look at how Business Intelligence (BI) can help companies be more efficient when dealing with their data. We will also review the main aspects of BI implementation and basic business intelligence implementation steps.\"],\"subtitles1\":{\"text1\":\"When it comes to the concept of business intelligence, we should picture not just the mere technology but a set of tools, software, and practices used for the collection and presentation of the company's data.\",\"text2\":\"BI systems consolidate different sources of data into a single information stream. This is all done in a way to allow decision-makers to easily analyze and manage information.\",\"text3\":\"Business intelligence helps companies move from 'guessing' to 'understanding' the real cause of a particular problem. Here's a simple example:\",\"text4\":\"The importance of business intelligence becomes evident if we look at the fact that today's global <a href=https://www.seagate.com/gb/en/our-story/data-age-2025/ target='_blank' rel='nofollow'>datasphere is growing exponentially</a> and will reach 175 ZB by 2025 (175 x 10²¹ bytes) — compared to 45 ZB generated in 2019. According to statistics, <a href=https://www.g2.com/articles/big-data-statistics target='_blank' rel='nofollow'>2 QB</a> (2 x 10<sup>18</sup>) of data are generated <b>across all industries every day.</b>\",\"text5\":\"Data needs to be organized somehow, and it's no secret that legacy systems and outdated infrastructures are no longer able to aggregate such large chunks of incoming information. On the contrary, BI systems can help structure end-to-end workflow — from data collection to preparation to interpretation and storage.\",\"text6\":\"To put this all into perspective, the implementation of business intelligence can be beneficial for: \",\"tip\":[\"<b>Turning static data into actionable insights.</b> The ability to extract crucial facts from operational data and quickly adjust strategies is what really differentiates a successful business from others. The implementation of BI allows businesses to discover profitable and low-yield activities and helps to identify what keeps a business from achieving its plans and goals set.\",\"<b>Identifying ways to increase profit.</b> BI turns cumbersome data tables into interactive dashboards, giving non-tech savvy users a proper perspective and a unified picture of what needs to be done in particular to move from point A `Where are we now?` to point B `Where do we want to be?`.\",\"<b>Tracking business performance.</b> BI helps to ensure you get the right information to track, identify the correct KPIs, and — most importantly — use the right means to measure relevant indicators.\",\"<b>Optimizing operations.</b> Thanks to business intelligence tools, disparate sources of information can be put together and give business owners a holistic view of their operations. This will help to further develop existing infrastructure, or improve areas of weakness that often cause businesses to lose clients.\",\"<b>Analyzing customer behavior.</b> Thorough analysis of user patterns provides businesses with important insights into customer's habits and motivation. BI brings forth a real and unbiased picture of how customers interact with a company's products or services, what problems they face, what makes them abandon carts or switch to a competitor's product, etc.\",\"<b>Getting a competitive advantage.</b> Business intelligence promotes faster and smarter decision-making, helping a business achieve its short- and long-term goals faster. BI also highlights new sales opportunities, putting a company one step ahead of the competition.\",\"<b>Trends discovery.</b> Without access to relevant data, it is almost impossible to discover emerging trends and figure out rapidly changing market conditions. Introducing interactive BI tools to the daily operations, business owners can quickly spot changes in demand, market capacity, investment environment, etc.\"],\"text7\":\"All these aspects that come with business intelligence systems are extremely important for the fast-paced environments businesses are faced with today. That brings us to the next question of how to implement business intelligence.\"},\"subtitles2\":{\"steps\":[{\"title\":\"1. Analyze the current state of the company's data\",\"text1\":\"Before implementing a BI strategy or integrating corresponding tools, it's necessary to understand in which state your data is, currently. This process includes examining all the existing sources of data, and evaluating how data is stored, managed and shared.\",\"text2\":\"Keep in mind that not all sources can be valuable for BI — some may provide incomplete data, some duplicate information, overlap stats, etc. So, select those that are clear and carry the most value in terms of information relevance and retrieval.\"},{\"title\":\"2. Gather a team of subject matter experts\",\"text1\":\"Obviously, the BI integration process would be impossible to carry out without a dedicated team. Your team has to consist of data-driven experts that have expertise in different domains — finance, IT, marketing, HR, etc. These can come from your various intercompany departments.\",\"text2\":\"A mix of members with different backgrounds ensures that the BI team will be able to introduce changes to all the necessary areas of your company and not overfocus on a single component.\",\"text3\":\"When it comes to the team members' roles, in particular, your group of BI evangelists may consist of: Data Quality Analyst, Data Mining Expert, Lead Developer, Infrastructure Architect, Data Administrator, Project Manager, and Business Representative.\"},{\"title\":\"3. Create a strategy and a business intelligence implementation plan\",\"text1\":\"Once you have assembled a BI team, it's time to develop your strategy. Here, your main task will be to understand how data will be processed within your company. To correctly define the scope of business intelligence implementation, you need to answer three basic questions:\",\"tips\":[\"<b>What are my objectives?</b> Define what you expect to get after BI implementation — do you want to increase sales, boost marketing, improve supply chain, project management analytics or uplift customer satisfaction? Do you want to improve existing IT infrastructure or do you want to improve team/department performance?\",\"<b>What do I have available to achieve that objective?</b> Since information is the cornerstone of a successful business intelligence implementation, define which data you collect in the moment, how you collect it, which departments of your company contribute to this process, and which additional data should be collected in order to reach your goals.\",\"<b>What else do I need?</b> Identify what should be done in order to successfully implement the business intelligence system. For example, what means need to be introduced into existing infrastructure to help you reach your objectives — will it be enough to integrate third-party solutions or do you want to completely replace the existing infrastructure, etc.\"],\"text2\":\"Getting answers to those questions beforehand will help to lay out a clear road map for successful BI implementation.\"},{\"title\":\"4. Identify important KPIs\",\"text1\":\"At this stage, you need to understand what you want to measure. Identifying key performance indicators will help you ensure your BI strategy stays on the right track throughout the whole business intelligence implementation process.\",\"text2\":\"The choice of metrics solely depends on your goals, but we advise you to break them into sections based on the objectives (or departments) they relate to. For example:\",\"tips\":[\"<b>Finances</b> — Current Ratio, Accounts Receivable Turnover Ratio, Net Profit Margin.\",\"<b>Sales</b> — Sales Revenue, Gross Sales Revenue.\",\"<b>Marketing</b> — Marketing Qualified Leads, Conversion Rate, Customer Acquisition Cost.\",\"<b>Human Resources</b> — Revenue per Employee, Cost per Hire, Early Turnover.\",\"<b>Project Management</b> — Productivity, Return On Investments, Actual Cost.\"],\"text3\":\"If you are just starting to work with business intelligence, we recommend concentrating on the most important KPIs first in order not to overcomplicate the data gathering and analysis processes.\"},{\"title\":\"5. Educate Staff & Stakeholders\",\"text1\":\"For many people, it is quite difficult to break established habits, and business intelligence adoption is no exception here. If your employees have never had experience working with the BI before, chances are they will resist adopting new tools.\",\"text2\":\"To make sure that your staff understands the necessity of change, hold training sessions and make them a part of the implementation strategy. Help employees see the bigger picture and value behind the new software; explain how new tools will improve their work and what the reasons are for introducing such changes. Data analytics has to become a part of a company's culture.\",\"text3\":\"Oftentimes, all business owners have to do to minimize the effect of this phenomenon is simply communicate with their employees to get their input (before actually implementing BI tools). When people — whose work will be affected by the changes — know their considerations are taken into account, and that their concerns are addressed in advance, it is much easier for them to start using new technologies.\"},{\"title\":\"6. Choose a software and setup BI infrastructure\",\"text1\":\"The integration of actual BI tools will be a major part of the whole process. At this stage, you will need to choose your BI software. Luckily, there are a lot of ready-made solutions on the market from SAP, IBM, Oracle, and Tableau. Your developers, in turn, will need to configure data storage and data environment components.\",\"text2\":\"For data storage, you can go with either of two repositories: a data lake or data warehouse. A <b>data lake</b> assumes storing raw blocks of data, the purpose of which is yet to be defined. A <b>data warehouse</b>, on the other hand, is a repository that stores structured and filtered data. The latter is considered a better choice for BI architecture. \",\"text3\":\"For the data environment, you can choose between three options: <b>On-premise</b> — where the BI system is located on your internal physical servers; <b>Cloud</b> — where the BI system is stored in a public/private cloud; and <b>Hybrid</b> — where some components are stored internally, and some are deployed in the cloud.\",\"text4\":\"If you don't have enough expertise in the Big Data domain, you can always onboard a <a href=https://wtt-solutions.com/our-work target='_blank'>ready-made development team</a> who has the relevant know-how and is experienced enough in developing custom business intelligence systems tailored to your needs.\"},{\"title\":\"7. Roll out pilot project and adjust system based on the results\",\"text1\":\"After all the components of a system are tuned to work together, it’s time to test them. Start with the smaller chunks of data and expand later on as you adjust system requirements. The testing process of a BI system normally covers all main reporting functions and consists of several phases:\",\"tips\":[\"<b>Functional testing</b> — report data accuracy checks, drill-down checks, report performance checks, browser checks.\",\"<b>ADHOC report testing</b> — mapping checks.\",\"<b>Security testing</b> — report access tests, data security checks, integrated security tests.\",\"<b>Regression testing</b> — regression testing of report data, report data format, report performance, and report security.\",\"<b>Stress testing</b> — simulating concurrent user load and user behavior.\"],\"text2\":\"Once all of these tests are done, you should run your customizable system to get results across your KPIs. This is an ongoing process so, after introducing changes to the areas of your audit, run the system again to see the changes in key performance indicators. After that, you can scale — adding more data and more detailed KPIs.\"}]},\"subtitles3\":[\"All great strategies and innovations come from data-driven decisions, and BI is a way to ensure companies have solid ground to base their actions on. Business intelligence solutions give organizations access to real-time analytics and spare them the need to turn to third-party companies to do that for them.\",\"The popularity of business intelligence is spreading at high speed, and will continue to do so as more and more data becomes generated worldwide.\",\"If you are interested in developing a custom business intelligence application, or want to get a deeper sense of what's going on and what should be done with your company data, contact us through the feedback form in the upper right corner of this page. Make sure you subscribe to our newsletter so you don’t miss any new blogs and industry insights!\"],\"questionsList\":[{\"question\":\"I am already getting all the business information in my CRM, HRM, and accounting systems. Do I still need to opt for any BI tools?\",\"answer\":\"If you constantly monitor and analyze the information you get, keep your data up-to-date and adjust sales or marketing strategies based on that data, then there would probably be no need for additional solutions. In other cases, however, we would recommend introducing BI tools to your business to consolidate diverse data streams.\"},{\"question\":\"Do I need to be tech-savvy to use BI software developed by you?\",\"answer\":\"All the products developed by WTT-Solutions are intuitive and easy-to-use. You don't need to have a technical degree or hire a full-time data specialist to work with BI software we develop. For cases where additional help may be needed, you can always count on our team to support you.\"},{\"question\":\"I want to buy ready BI software but not sure if its functionality will fit my organization. What do you suggest?\",\"answer\":\"Lots of solutions that are on the market today offer trial periods and demo versions so you can test them and decide on the one that fits you best. If, however, you are looking for special functionality, we'd recommend you work with a custom-built BI tool that is tailored to your objectives. Contact one of our managers so we can discuss your business needs in more detail.\"},{\"question\":\"Are there any disadvantages to Business Intelligence implementation?\",\"answer\":\"When developed appropriately, a BI system perfectly integrates with the company's business processes and policies. There are still some obstacles you should be aware of, however. These are: 'resistance to adoption' high project price, and possible data breaches. The last two are connected solely to the expertise of a development team in charge of BI implementation.\"}]},{\"id\":\"top-5-online-marketplace-revenue-models\",\"title\":\"Top 5 Online Marketplace Revenue Models in 2021\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"May 27, 2021\",\"metaTitle\":\"Marketplace Business Model: 5 Best Revenue Models | WTT Solutions\",\"metaDescription\":\"Online marketplace revenue models aid companies in getting revenue growth and seizing their potential ✅ Read this to find out best model for your business\",\"category\":[\"martech\"],\"timeToRead\":8,\"authorImg\":\"/images/blog/authors/ceo.png\",\"backgrounds\":{\"img\":\"/images/blog/onlineMarketplaceRevenue/img1.jpg\",\"preview\":\"/images/blog/onlineMarketplaceRevenue/img1Tabl.jpg\"},\"subtitles\":[{\"id\":1,\"title\":\"Types of Marketplace Revenue Models\"},{\"id\":2,\"title\":\"Commission-Based Model\",\"subtitle\":true},{\"id\":3,\"title\":\"Listing Charges Model\",\"subtitle\":true},{\"id\":4,\"title\":\"Membership/Subscription Model\",\"subtitle\":true},{\"id\":5,\"title\":\"Freemium Model\",\"subtitle\":true},{\"id\":6,\"title\":\"Advertising & Featured Ads Model\",\"subtitle\":true},{\"id\":7,\"title\":\"Pros and Cons of Marketplace Business Models: Comparison Table\"},{\"id\":8,\"title\":\"Final Thoughts\"},{\"id\":9,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"articleDescription\":[\"The choice of revenue model might be the most important decision for a marketplace startup to make. Monetization strategies have a strong impact across all aspects of marketplace business — they define how a business generates income and what value the platform will offer to both users and sellers (or item vendors).\",\"If the marketplace business model is incorrectly designed from day one, there will be no chance to develop a sustainable and scalable business. A great way to ensure you pick the right strategy is to examine existing marketplaces and their revenue models to understand how to monetize your platform.\",\"In this article, we'll take a look at the most effective marketplace business models and review their advantages and disadvantages in order to help you make an informed decision regarding your own strategy.\"],\"subtitles1\":[{\"text1\":\"The Commission-Based model is the most popular business model for a marketplace. Here, users are charged with a commission for each transaction they make. When a user buys from a service/product provider, the marketplace facilitates this payment and charges a percentage or a flat fee. The platform can also charge fees from both buyers and service/product vendors.\",\"text2\":\"In terms of pricing, there are a few options of fee policies:\",\"list\":[\"<b>Order amount</b> — the commission is calculated based on the item price.\",\"<b>Item category</b> — transaction fees are set for each individual category.\",\"<b>Vendor type</b> — the fee depends on the sales activity of the vendor. \"],\"text4\":\"Oftentimes, this marketplace revenue model is combined with other revenue models.\",\"prosConsText\":[\"What makes this model so attractive is that users pay only when the item is sold, and vendors are expected to pay a fee only when the item is purchased. This helps to attract a large and loyal user base of both customers and vendors. On the other side, however, there is a need to constantly provide enough value for both parties, and to come up with a wise commission strategy.\"],\"pros\":[\"Easy onboarding process\",\"Predictable revenue stream\",\"Ability to attract a large number of suppliers\",\"The platform charges a fee only when a transaction occurs\"],\"cons\":[\"Balancing fee policies can be difficult\",\"May not work for marketplaces with large transactions\",\"Dependency on vendor sales\",\"Potential scalability issues\"],\"industryExamples\":[\"<a href=https://www.airbnb.com target='_blank' rel='nofollow'>Airbnb</a> — an online marketplace for lodging and short-term rentals receives commissions from both guests and hosts for every booking made on the platform. Guests pay 6-12% in booking fees, while hosts are charged with a 3% fee on every successful transaction.\",\"<a href=https://uber.com/ua/ru/ target='_blank' rel='nofollow'>Uber</a> — the largest ride-hailing marketplace in the world takes an average 25% commission of each ride booked via the app. The commission is charged from the drivers. With lower fares, however, the fee rate can go as high as 42.75%.\"]},{\"description\":[\"This model is highly popular in marketplaces where listings have high potential value or where non-monetary transactions take place. Here, sellers/providers are typically charged for the number of listings (1, 10, 100, 1000, etc.) that they post on the platform.\",\"The limitation in listings also forces sellers/providers to be more selective about items they add, which, in turn, increases the quality of listings on the marketplace. For this monetization model, the price per item always remains affordable — typically between $0.05-$0.30 — in order not to scare off sellers.\",\"The Listing Charges model is rarely used as a standalone revenue strategy — more often, it is combined with other online marketplace revenue models.\"],\"prosConsText\":[\"The Listing Charges model works perfectly when sellers don't want to opt for a subscription (for example) and are only selling items occasionally. It takes a commission fee from all items listed, including slow-selling ones. The main disadvantage of this business model for a marketplace, however, is that it cannot be successfully implemented on all types of online marketplaces.\"],\"pros\":[\"Platform generates revenue regardless of how the items perform\",\"Improves the quality of items being posted\",\"Works well for occasional sellers\",\"Is effective for non-monetary listings like dating, jobs, services, etc.\"],\"cons\":[\"Doesn't work for all types of marketplace platforms\",\"Can prevent sellers from adding more items on a platform\",\"Large seller base is required for the model to work\",\"Does not guarantee value for item providers as listing fee does not guarantee sale\"],\"industryExamples\":[\"<a href=https://www.overstock.com target='_blank' rel='nofollow'>Overstock</a> — an American online marketplace focused on selling furniture. While the platform combines several monetization strategies (commission + subscription), it also has listing fee commissions which range from $0.10 to $3.15.\",\"<a href=http://etsy.com target='_blank' rel='nofollow'>Etsy</a> — a global marketplace for unique items, independent artists, and crafters has a standard listing fee set at $0.20 per item. Just like the marketplace above, Etsy's revenue model is not limited to listing charges only and also includes a few other online marketplace revenue models (commission + subscription).\"]},{\"text1\":\"The subscription model is not a new one. In fact, it's been around for hundreds of years, emerging first in the <a href=https://www.forbes.com/sites/valleyvoices/2017/05/17/not-so-new-promise-of-subscription-economy/ target='_blank' rel='nofollow'>17th century</a> in the publishing industry. In the last few decades, it has deeply penetrated the digital world, and there's almost no single industry that hasn't seen subscription-based startups and corresponding success stories.\",\"text2\":\"Users are charged a recurring fee — on a monthly, quarterly, or yearly basis — to access the platform and its features. Membership packages and monthly plans are another common practice used by marketplaces to offer access to different sets of items/features at different price points.\",\"text3\":\"There are <b>three</b> most common kinds of products or services to be accessed under this revenue model for an online marketplace:\",\"list\":[\"<b>Access to Content</b> — videos, music, articles, stock images, website memberships;\",\"<b>Access to Services</b> — SaaS, insurance, leasing, utilities;\",\"<b>Access to Products</b> — food, personal care, subscription boxes.\"],\"text4\":\"In recent years, this business model for modern marketplaces has gained significant traction — according to <a href=https://www.gartner.com/smarterwithgartner/top-10-trends-in-digital-commerce/ target='_blank' rel='nofollow'>Gartner</a>, 75% of organizations selling their products directly to customers will move to a subscription-based model by 2023. Traditional industries are not going to lag behind, either. For example, it is predicted that the market for automotive subscriptions* will reach the $40 billion mark by 2026.\",\"prosConsText\":[\"One of the features of the subscription-based model that makes it so popular is that it can be easily adopted by any company regardless of its industry and niche — C2C, B2B, B2C, and even B2G in some cases.\",\"Another significant benefit that comes to mind is that subscription services have a low entry barrier (membership fees can go as low as $0.99/mo) which makes them popular among customers.\",\"When it comes to the disadvantages of this approach, these include an inability to retain long-term customers, increasing competition due to the crowded subscription-based business market, and a need to constantly keep the product value at the 'WOW' level.\"],\"pros\":[\"Predictable revenue stream\",\"High expansion opportunities\",\"Good customer relations\",\"High potential for untapped markets\"],\"cons\":[\"High competition\",\"Risks of high churn\",\"Requirement to constantly maintain value\",\"Customers may be afraid of contracts\"],\"industryExamples\":[\"<a href=https://www.ebay.com target='_blank' rel='nofollow'>eBay</a> — for its online sellers, the platform offers several subscription packages that carry different features depending on the size of the seller's store. Store subscription packages are as follows: Starter ($4.95/mo, for occasional sellers), Basic ($21.95/mo, for sellers wanting to reduce platform fees), Premium ($59.95/mo, for sellers who are looking for additional tools), Anchor ($299.95/mo, for advanced sellers who seek dedicated platform support), and Enterprise ($2,999.95/mo, for large scale sellers with high transaction volumes).\",\"<a href=https://www.amazon.com target='_blank' rel='nofollow'>Amazon</a> — another major marketplace player, Amazon offers two subscription plans for its sellers: Individual (free when selling no more than 40 items per month), and Professional ($39.99/mo for those selling 40+ items monthly). Apart from that, sellers are also expected to pay selling fees ($0.99 for individual sellers + referral fees + closing fees).\"]},{\"description\":[\"As the name implies, this is a combination of two words — 'Free' and 'Premium.' Here, users can access a set of free product features at no cost, or pay an extra fee to upgrade to full or more advanced functionality.\",\"The practice of offering basic-level functionality to users has been around since the late 1980's — this approach was quite popular among computer software companies who were giving away free-to-try versions of their products, and offering to pay extra to get the full package.\",\"The term 'Freemium,' however, was first introduced in 2006 by Jarid Lukin, the Director of eCommerce at Alacra. In his <a href=https://avc.com/2006/03/the_freemium_bu/ target='_blank' rel='nofollow'>blog post</a>, he very precisely formulated the definition and the psychology behind the Freemium model:\",\"Give your product for free and efficiently acquire a customer base via different marketing channels. Once that's done, offer premium-priced functionality or the enhanced version of your product to the users.\"],\"prosConsText\":[\"Among the most obvious advantages of this online marketplace business model is actually the fact that it has the word ‘FREE’ in its name. How do you make a product stand out in a crowded market? Tell people that it's free - the <a href=http://web.mit.edu/ariely/www/MIT/Papers/zero.pdf target='_blank' rel='nofollow'>science</a> proves that this actually works. Another advantage of this model is that it allows the platform to acquire a large user base in a pressure-free way.\",\"On the flip-side, however, there is significant budget consumption with this model, and a need to have a really huge user base to make this model work (since the conversion rates will be relatively low in this case).\"],\"pros\":[\"High potential for virality\",\"Ability to monetize the user base\",\"Extremely low entry barrier\",\"Great for beta testing of new features\"],\"cons\":[\"Expensive\",\"Conversion to premium packages is ≤5%\",\"ROI requires a large user base\",\"It's difficult to find the right balance between free/premium offerings\"],\"industryExamples\":[\"<a href=https://www.eventbrite.com target='_blank' rel='nofollow'>Eventbrite</a> — a global ticketing and event management platform that lets users create, share, find, attend and promote local events. The marketplace offers free ticketing services for unpaid events like local neighborhood parties and charges a fee from event organizers for paid events.\",\"<a href=https://www.peerby.com target='_blank' rel='nofollow'>Peerby</a> — A Dutch C2C platform that lets users borrow things from one another at no cost. The basic functionality is free and the monetization strategy is built around premium services such as insurance (a fee paid by the customer to guarantee that the provider will get their item replaced if it gets damaged or stolen) and delivery (a small fee paid by the customer to get the item delivered to their door).\"]},{\"description\":[\"Another popular revenue path for marketplaces that is normally combined with other monetization strategies is the Advertising and Featured Ads Model. Here, third-party vendors pay a company to place their CPC or CPM ads on its platform. Marketplace sellers can also get their products featured on the Homepage or in the 'Featured' section of a particular category.\"],\"prosConsText\":[\"The Paid Ad model is a great way to ensure the platform generates a steady income. It also works well on marketplaces that have a large user base or target a specific niche. The major challenge with this model is that it requires a significant amount of users to display the ads to, and the fine-tuned balance between interests of users (ad relevance) and desired amount of generated revenue (ad frequency).\"],\"pros\":[\"Steady additional income\",\"Effective for niched marketplaces\",\"High scalability potential\",\"Boosts other marketplace fees\"],\"cons\":[\"Ads can be disturbing to some users\",\"Does not work well if the traffic is low\",\"Hard to control quality of third-party ads\",\"Non-relevant ads will lower the retention rate\"],\"industryExamples\":[\"<a href=https://www.haatori.fi/ target='_blank' rel='nofollow'>Häätori</a> — a Finnish online marketplace for used wedding dresses, wedding decor, and accessories. The platform doesn't charge users for adding or selling items; instead, it sells on-site ads to wedding photographers, planners, and other wedding-related service providers.\",\"<a href=https://www.zillow.com/ target='_blank' rel='nofollow'>Zillow</a> — one of the largest online platforms for real estate that allows agents and property owners to list their homes for sale or rent. The marketplace doesn't charge a listing fee, allowing vendors to promote their listings in four ad categories (native search, native property, home expenses, and rich media) across all websites in the Zillow Group.\"]}],\"tableTitle\":[\"MONETIZATION MODEL\",\"ADVANTAGES\",\"DISADVANTAGES\"],\"tableColumns\":[{\"firstColumn\":\"Commission\",\"secondColumn\":[\"Fast user onboarding process\",\"Predictable revenue stream\",\"Attractive model for suppliers\",\"Each transaction gets monetized\"],\"thirdColumn\":[\"Difficult to balance fee policy\",\"Does not work well for large transactions\",\"Largely dependent on vendor's sales\",\"Possible scalability issues\"]},{\"firstColumn\":\"Listing Charges\",\"secondColumn\":[\"Revenue is generated regardless of how items perform\",\"Improves quality of platform listings\",\"Model is attractive for occasional sellers\",\"Great solution for non-monetary listings\"],\"thirdColumn\":[\"Does not work in all types of marketplaces\",\"Prevents sellers from adding more items\",\"Large seller base is required\",\"Listing fee does not guarantee the vendor a sale\"]},{\"firstColumn\":\"Membership / Subscription\",\"secondColumn\":[\"Sustainable revenue stream\",\"High scalability opportunities\",\"Fosters customer loyalty\",\"Works well for new markets\"],\"thirdColumn\":[\"Highly competitive environment\",\"Platform may suffer from a high churn rate\",\"High value required\",\"Some users are afraid to opt for subscriptions\"]},{\"firstColumn\":\"Freemium\",\"secondColumn\":[\"Fosters virality\",\"Monetizes user base\",\"Entry barrier is low\",\"Very effective for beta testing of new features\"],\"thirdColumn\":[\"High support costs\",\"Low conversion rate\",\"Large user base is required\",\"Balancing between free/premium offerings is hard\"]},{\"firstColumn\":\"Advertising & Featured Ads\",\"secondColumn\":[\"Steady revenue stream\",\"Fits well niched marketplaces\",\"Highly scalable\",\"Improves performance of other monetization models\"],\"thirdColumn\":[\"Users may find ads annoying\",\"Doesn't perform well on a low user base\",\"No control over quality of third-party ads\",\"Non-relevant ads damage the platform's reputation\"]}],\"subtitles3\":[\"So here it is. We've gone through the five most popular revenue options for marketplaces. As you see, the monetization strategy is an integral part of a company's business development plan, so the decision of which online marketplace business model to pick should solely depend on the objectives being set.\",\"Another aspect to keep in mind is that <b>different</b> audiences react to all of these approaches <b>differently</b>, so we encourage you to perform market research to choose the best revenue model for a marketplace or even a combination of a few online marketplace revenue models.\",\"If you are still not sure where to start with the monetization of your marketplace or want to get more information about the implementation process, don't hesitate to contact us through our form at the top of this page. Subscribe to our newsletter so we can keep you updated on the latest industry news!\"],\"questionsList\":[{\"question\":\"How do I choose a revenue model for my marketplace?\",\"answer\":\"The choice of a particular revenue model depends on several factors, including the interests of the users, vendors, and the platform itself. The best revenue tactic, however, will always be the one that best fits your business strategy.\"},{\"question\":\"What are the signs that my monetization strategy is in trouble?\",\"answer\":\"The most obvious sign of something going wrong is when your customer acquisition costs are getting close to the revenue generated per customer. Another red flag is the rapid increase in churn rate and customers switching to other marketplaces.\"},{\"question\":\"How do I price my monetization model?\",\"answer\":\"Normally, marketplace startups stick with one of two strategies: value-based pricing or competitor-based pricing. The first implies a pricing model that is adjusted to the value provided by your marketplace. The latter involves doing market research and adopting prices that are similar to your competition. This approach works well for new products or for those companies who don't want to completely miss the target when entering a new market.\"},{\"question\":\"Can I switch my current revenue model to a different one? Won't it hurt my business?\",\"answer\":\"Your business model may change with new products, market evolution, etc., so it's normal to adjust the revenue strategy as you go. There are dozens of large marketplaces that have changed their monetization strategies over the course of time: Upwork, Shutterstock, Fiverr, etc. The only thing you need to do is to make sure that all parties (users/vendors) are well aware (in advance) of any new changes taking place, in order to minimize any negative experience.\"}]},{\"id\":\"how-to-build-elearning-platform\",\"title\":\"How to build an e-learning platform to sell online courses\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"June 2, 2021\",\"metaTitle\":\"How to Create an Online Learning Platform [Types & Features]\",\"metaDescription\":\"Building an e-learning platform requires careful planning, relevant expertise in development ✅ Find how to create an online learning platform - WTT Solutions\",\"category\":[\"edtech\"],\"timeToRead\":10,\"authorImg\":\"/images/blog/authors/ceo.png\",\"backgrounds\":{\"img\":\"/images/blog/eLearningPlatform/img1.jpg\",\"preview\":\"/images/blog/eLearningPlatform/img1Tabl.jpg\"},\"subtitles\":[{\"id\":1,\"title\":\"Types of Online E-Learning Platforms\"},{\"id\":2,\"title\":\"MOOC\",\"subtitle\":true},{\"id\":3,\"title\":\"Learning Management Systems (LMSs)\",\"subtitle\":true},{\"id\":4,\"title\":\"Learning experience platforms (LXP)\",\"subtitle\":true},{\"id\":5,\"title\":\"Student management systems\",\"subtitle\":true},{\"id\":6,\"title\":\"Web conferencing software\",\"subtitle\":true},{\"id\":7,\"title\":\"Proctoring software\",\"subtitle\":true},{\"id\":8,\"title\":\"Authoring software\",\"subtitle\":true},{\"id\":9,\"title\":\"Benefits of custom e-learning platform development\"},{\"id\":10,\"title\":\"How to build an e-learning platform. 5 key steps\"},{\"id\":11,\"title\":\"1. Do audience research and niche analysis\",\"subtitle\":true},{\"id\":12,\"title\":\"2. Shape your product idea and define its key features\",\"subtitle\":true},{\"id\":13,\"title\":\"3. Prepare a business model\",\"subtitle\":true},{\"id\":14,\"title\":\"4. Assemble a development team or choose a reliable outsourcing partner\",\"subtitle\":true},{\"id\":15,\"title\":\"5. Create an MVP\",\"subtitle\":true},{\"id\":16,\"title\":\"Building an E-learning Platform with WTT Solutions\"},{\"id\":17,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"articleDescription\":[\"The education industry has risen to many challenges over the past few years. Social distancing, continuous shutdowns, and the shift to remote work has become a new reality for many educational institutions and organizations worldwide. The need for new tools to facilitate the learning process in a post-pandemic environment is evident, and has boosted the e-Learning sector to heights it has never before experienced.\",\"In 2020, the e-Learning market <a href=https://www.gminsights.com/industry-analysis/elearning-market-size target='_blank' rel='nofollow'>reached the mark of $250 billion</a> and is forecasted to grow at a <b>CAGR of 21%</b> between 2021 and 2027. The self-paced e-learning sector — most commonly presented by Massive Open Online Course (MOOC) platforms — takes a significant share here, so it's no wonder that more and more startups are looking ahead at the new possibilities that the development of e-learning platforms brings to the table.\",\"So, where do you begin when it comes to the question of how to build an e-learning platform for selling online courses? How do you pace the development process? Keep reading to find the answers to these questions.\"],\"subtitles1\":{\"text1\":\"In broad terms, e-Learning can be identified as a learning experience delivered electronically to a user. This concept unites all the methodologies, tools, and other means used to create, organize, and communicate educational content in a digital environment.\",\"text2\":\"E-learning has many benefits over traditional education, it:\",\"list\":[\"<b>Enhances the quality of learning</b> — online learning allows students to focus on subject matters which they may not feel confident in. Learners can also benefit from different types of educational content (images, illustrations, video, infographics), which results in better retention of information.\",\"<b>Helps to meet learning needs</b> — each learner has their own needs and learning preferences, which is rarely taken into account in standardized educational practices. With e-learning, on the contrary, learners can choose their own path and navigate it at a speed that is comfortable to them.\",\"<b>Improves user-accessibility</b> —  e-learning removes geographical barriers, allowing individuals from around the world to participate in courses that spark their interests. Students with health issues can also benefit from e-learning, as they no longer need to physically attend in a facility to keep the education process going.\"],\"text3\":\"Now, let's take a look at the most popular types of e-learning systems one can find on the market today.\"},\"subtitles2\":[[\"MOOC is a platform that hosts and organizes a large number of courses in different fields. The learning materials on the platform are normally created by educational institutions or individual course providers. In addition to online courses, MOOCs also offer tools for online testing, quizzes, and functionality for live interaction between students and teachers via dedicated discussion forums.\",\"These platforms are commonly used for higher education purposes or for career enhancement. Many MOOCs offer their courses for free; however, if learners are interested in taking courses that are narrowly focused on a specific competency, the price for these may vary — from hundreds to a few thousand dollars. \"],[\"These systems assist businesses in delivering online education to their employees. LMSs are used for storing, managing, and tracking educational content within an organization. With an LMS, training development supervisors can assign courses, set goals for employees, track progress, and generate corresponding reports.\",\"LMSs help companies save on training costs and simplify the onboarding process. This type of software is especially helpful for companies that have to deal with lots of regulatory requirements and, thus, want to ensure their staff is aware of all the current industry legislations and compliance rules.\"],[\"The Learning Experience Platform is considered to be a more advanced interpretation of traditional Learning Management Systems. While LMSs incorporate a Top-Down approach where particular courses are assigned to particular employees, LXPs take one step further offering a Bottom-Up approach where learner's interests are put first.\",\"LXPs focus on a personalized learning experience, thus better engaging employees in the learning process. Instead of browsing through a standard catalog of information — as is the common case with traditional LMSs — learners receive tailored knowledge and recommendations on content.\",\"In addition to that, LXPs offer companies a comprehensive set of tools to ensure the learning curve of their employees goes along with the business goals and policies set.\"],[\"Student Management Software (SMS) — also commonly referred to as Student Information Software (SIS) and Student Record Software (SRS) — eliminates paperwork from daily operations at educational facilities. Schools and universities use SMSs to manage student records, facility administration, and all other daily activities that take place.\",\"Simply put, Student Management Software serves as a single database for all facility operations and admissions. It stores information about employees, contractors, suppliers, etc.\",\"SMS may also include additional modules to manage such operations as billing, payments, reporting, and more. This system can offer enhanced functionality for parents, as well, such as attendance forms, grades, course information, schedules, etc.\"],[\"These solutions allow users to hold online meetings, webinars, conferences, and training courses. Web conferencing tools support instant messaging, file, and screen sharing capabilities and help to streamline the communication process for all parties, regardless of their current locations.\",\"Web conferencing software is used by a wide range of businesses, governments, non-profit organizations, and schools and universities. Aside from online classes, teachers normally use these tools for check-ins and Q&A sessions.\"],[\"When students take exams remotely, there's a need for exam supervisors to somehow maintain the integrity of online assessments, and this is exactly what proctoring software helps them do. Such tools constantly monitor student behaviors during a test, check suspicious or background voice activity, and ensure that candidates stay focused on the test screen.\",\"Advanced proctoring tools also support face recognition and multi-factor authentication technologies to confirm that the verified candidate is the actual person taking the test. Proctoring software can also block browser functions to prevent students from accessing help websites and other apps.\"],[\"This is an e-learning solution that allows educators and trainers to create learning content in a dedicated editorial interface. It consists of pre-programmed components that help arrange and manipulate different types of content — video, text, tests, etc.\",\"Some authoring tools don't require trainers to have special skills and normally include pre-made templates that a course can be built on. Others offer more advanced features for those who want to launch highly customized courses with adaptive learning paths, gamification elements, and simulations.\"]],\"subtitles3\":{\"descrption\":[\"Whether you want to choose an e-learning software for your business or educational facility, building a custom e-learning platform is almost always a better option. Here’s why.\",\"When it comes to off-the-shelf e-learning products, many do not target a narrow niche. Instead, they come built with a broad set of features in order to capture a large market share and, as a result, attract a broad user base.\",\"For businesses and organizations that don't need a 'Jack-of-all-trades' kind of product, or for those that are only looking for particular features — they are all forced to opt for functionality they don't actually need with out-of-the-box solutions. For this exact reason, we have also witnessed an emerging number of new e-learning startups enter the market recently.\",\"To put these ideas together, the benefits of building an e-learning platform can be outlined as follows:\"],\"list\":[\"<b>Complete control over the product</b> — a custom e-learning software can be anything you want it to be. You decide on the content types that the platform will support, security protocols, deployment strategy, licensing, monetization model, etc.\",\"<b>Focus is kept on the target audience</b> — development of a custom elearning solution involves an in-depth analysis of the targeted niche and creation of a customer profile, helping you understand who you will develop an e-learning platform for (ideal customer), and why exactly you will do it (customer pain points).\",\"<b>Updates can be introduced on-demand</b> —  with custom-made software you don't need to wait months to get bugs fixed or new features added. This can all be done by your development team in a matter of days!\",\"<b>Flexibility of a solution</b> — custom e-learning platforms can be built with flexible architecture which would allow you to scale-up as your business grows, with minimum effort and cost.\"]},\"subtitles4\":[{\"text1\":\"This is the first and most important step in the process of building an e-learning platform. Here, you need to figure out what value your future product will bring to its users (i.e validate your startup idea). You’ll need to define:\",\"list\":[\"What challenges users are faced with now.\",\"What users’ learning purposes are and how you can address them.\",\"What can be improved in the niche.\",\"Who your competitors are and what features their products lack.\"],\"text2\":\"Your task is to also determine potential product demand, as this will help to lay a foundation for future growth. If you are not sure of the path to take, get assistance from business analysts or a team with relevant <a href=https://wtt-solutions.com/platform-development target='_blank'>expertise</a> that can help develop a custom e-learning platform.\"},{\"text1\":\"Now, gather your findings from the previous step, and shape them into a product concept. Define which key features your e-Learning platform needs to have in order to motivate users to start using your service.\",\"text2\":\"You can start with standard components, more-or-less (like Course pages, User Profiles, Rating System, Messaging, etc.) and get more advanced as your project grows (live video communication, multi-language support, dashboards, etc.)\",\"text3\":\"Once the elearning platform features are outlined, you can proceed to creating a business model and developing architecture for your product.\"},{\"text1\":\"At this stage, you need to determine how the platform will generate revenue. We advise that you dedicate a significant amount of time to this task, as the development of a viable business model is critical for startup success.\",\"text2\":\"The most popular monetization model for e-learning platforms is to <b>charge learners for specific courses</b>. This is very simple to implement; however, maintaining your retention rate on a significant level may become a challenge here.\",\"text3\":\"Another option is to opt for a <b>paid certification model</b> where courses are free but, if learners want to receive a course completion certificate, they are expected to pay a fee.\",\"text4\":\"If neither of these two models suit you, you can consider a subscription-based model, where users are charged monthly/quarterly/yearly payments to get access to platform courses.\",\"text5\":\"For more about different monetization models, read our article <a href=https://wtt-solutions.com/blog/top-5-online-marketplace-revenue-models target='_blank'>here</a>.\"},{\"text1\":\"To create an e-learning platform, you'll need to onboard a dedicated team of developers. You can assemble an in-house team or work with an outsourcing partner. While gathering an in-house team might seem like the most reliable option at first glance, it is a time- and money-consuming option. In this case, business owners are taking on the burden of recruitment, onboarding activities, taxes, office expenses, etc.\",\"text2\":\"On the contrary, opting for an outsourcing software development company allows you to access an already assembled team of programming experts who can start building a custom e-learning platform right away. On this path, you will also see significant cost reductions since you only pay for the end result when working with an outsourcing development team, and all other expenses are covered by the outsourced partner.\"},{\"text1\":\"After you have assembled a team of developers, validated your e-learning platform idea, and created a business plan, you’ll need to develop a prototype and test it on early adopters (first users of the platform).\",\"text2\":\"A Minimum Viable Product (MVP) is an early version of your product with basic functionality, which is created to collect maximum feedback from users in early stages and help developers fine-tune a product to their e-learning niche. Startups with little initial funds can also acquire investors by demonstrating the results of their prototype performance.\",\"text3\":\"From here, you will need to get into a feedback loop, where you roll out enhanced versions of a product, gather user feedback, and adjust accordingly.\"}],\"subtitles5\":[\"When talking about the phenomenon of e-learning, one can't deny the major paradigm shift it brings to the education industry. Not only does e-learning replace the rudimentary practices of the past, but it also boosts the effectiveness of the education process, while drastically reducing all the associated costs.\",\"Aside from the education sector, private organizations have also started using e-learning tools to improve their onboarding processes, increase knowledge sharing, and eliminate the need to constantly turn to third-party instructions.\",\"If you need help with your custom e-learning project, be sure to turn to a software development team that has the relevant know-how to deliver a project that will fully match your business needs. At WTT Solutions, we are vastly experienced in building customized e-learning platforms of different scales and complexity.\",\"Contact us through our feedback form at the top of the page to get a free consultation with one of our experts on how to build an online e-learning platform. We also invite you to subscribe to our newsletter where we continuously share noteworthy industry highlights and updates!\"],\"questionsList\":[{\"question\":\"I want to create an e-Learning platform but my strategy is incomplete. Can you help me with that?\",\"answer\":\"Yes, our team covers a full range of e-Learning development and market analysis services. We can help you better understand your target audience and niche, select a monetization model, and more. <a href=https://wtt-solutions.com/get-started target='_blank'>Contact</a> us for more information.\"},{\"question\":\"How do you guarantee the quality of an e-learning product?\",\"answer\":\"When working with us, all our clients receive reports on a regular basis. We evaluate the results every few weeks, test our work, and present it in order to get your feedback and ensure you are 100% satisfied with the product.\"},{\"question\":\"How much time will it take to develop an e-learning platform?\",\"answer\":\"It's hard to gauge the development time right away, as this hugely depends on project scope, product requirements and budget. If you want a precise estimate for your project, contact us and we will calculate the development costs.\"},{\"question\":\"What happens after the project is finished?\",\"answer\":\"Upon project completion we would be happy to provide you with technical support and maintenance services. If you want to maintain the product yourself, the source code and all technical data will remain at your full disposal. In any case, we are always ready to help!\"}]},{\"id\":\"guide-for-building-successful-saas-product\",\"title\":\"Step-by-Step Guide for Building a Successful SaaS Product\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"June 11, 2021\",\"metaTitle\":\"How to Build a Successful SaaS Product - guide from WTT Solutions\",\"metaDescription\":\"If you think about building a SaaS product, this article will provide you with information on the development process and application areas of SaaS software\",\"category\":[\"insights\"],\"timeToRead\":8,\"authorImg\":\"/images/blog/authors/ceo.png\",\"backgrounds\":{\"img\":\"/images/blog/guideForSaas/img1.jpg\",\"preview\":\"/images/blog/guideForSaas/img1Tabl.jpg\"},\"subtitles\":[{\"id\":1,\"title\":\"What is a SaaS Product?\"},{\"id\":2,\"title\":\"Main Types of SaaS Products\"},{\"id\":3,\"title\":\"Project management (PM) software\",\"subtitle\":true},{\"id\":4,\"title\":\"e-Commerce platforms\",\"subtitle\":true},{\"id\":5,\"title\":\"Enterprise Resource Planning (ERP) software\",\"subtitle\":true},{\"id\":6,\"title\":\"Customer Relation Management (CRM) solutions\",\"subtitle\":true},{\"id\":7,\"title\":\"Billing gateways\",\"subtitle\":true},{\"id\":8,\"title\":\"Accounting platforms\",\"subtitle\":true},{\"id\":9,\"title\":\"Human Resource (HR) software\",\"subtitle\":true},{\"id\":10,\"title\":\"How to Build a Successful SaaS Product\"},{\"id\":11,\"title\":\"1. Analyze the market & find a problem\",\"subtitle\":true},{\"id\":12,\"title\":\"2. Validate your SaaS idea\",\"subtitle\":true},{\"id\":13,\"title\":\"3. Choose a pricing model\",\"subtitle\":true},{\"id\":14,\"title\":\"4. Have your business plan laid out\",\"subtitle\":true},{\"id\":15,\"title\":\"5. Gather SaaS development team\",\"subtitle\":true},{\"id\":16,\"title\":\"6. Develop a prototype\",\"subtitle\":true},{\"id\":17,\"title\":\"7. Test results and adjust SaaS product accordingly\",\"subtitle\":true},{\"id\":18,\"title\":\"Summary\"},{\"id\":19,\"title\":\"Our Experience\"},{\"id\":20,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"articleDescription\":[\"The rapid emergence of cloud computing has paved the way for the new generation of digital software and models for its distribution. For many startups, the ability to move their infrastructure to the cloud played a key role in ensuring the future success and effectiveness of their businesses. Think of Netflix, the world's largest streaming service that uses AWS cloud for all its storage needs. And there are thousands of similar examples.\",\"SaaS technology is the most prominent example of the cloud computing world. It allows businesses to move from on-premise infrastructure and legacy systems to new environments where all the business processes are carried out in a more effective and coordinated way.\",\"So there is no wonder why more and more startup owners start asking themselves the same question: how to build a SaaS product?\",\"In this article, we'll try to give you an overview of the most popular types of SaaS software as well as take you through the steps of the SaaS product development process.\"],\"subtitles1\":{\"text1\":\"SaaS — also known as Software as a Service — is a widely popular model of software distribution where users, instead of installing software on their devices, get access to it over the Internet.\",\"text2\":\"While traditional business software is normally located on the employees' computers, SaaS applications, on the contrary, are hosted on the vendor's servers. Such an approach frees the business owners from the hassle of maintaining the software and keeping it up to date. The SaaS product provider manages everything — from performance and data storage to security and support.\",\"text3\":\"SaaS product model carries lots of benefits for business owners, but the three most important ones are:\",\"list\":[\"<b>No hardware & zero maintenance costs</b> — as we've already mentioned there's no need for a company to invest in hardware since the SaaS software is deployed in the cloud. Instead of spending a fortune on setting up an IT infrastructure from scratch, business owners simply download the software and start using it right away. No maintenance, no software management, and no technical team to support the system are required.\",\"<b>Scalability</b> — SaaS solutions allow businesses to opt for features they need without a necessity to heavily invest in the hardware. All they need to do to upgrade or downgrade the functionality of the off-the-shelf SaaS software is pick the pricing plan that fits their business needs best, and they are good to go.\",\"<b>Flexibility & accessibility</b> —  because of its cloud nature, SaaS software can easily integrate with other systems and support simple integrations, e.g. Google tools, or more complex ones, such as an external API (provided to the users so they can develop their own integrations). SaaS software can also be accessed from anywhere in the world, which makes it very convenient for companies whose geography is quite diverse.\"],\"text4\":\"Now after we have defined what is a SaaS product, and examined the main benefits of the SaaS model, let's check what types of SaaS products there actually are and how to build a SaaS app.\"},\"subtitles2\":[[\"These solutions are used by project managers to track project progress, allocate resources, manage budgeting, schedule development activities, and control all the documentation regarding the project.\",\"PM software can be used by small and large teams, as well as multiple teams working on the same project. It eases the collaboration and communication between team members or stakeholders, helping to meet goals on time.\"],[\"These tools enable sellers to create online shops on dedicated e-commerce platforms. Users can modify the look of their online shops, change page layouts, add new sections and new content.\",\"e-Commerce platforms serve as an infrastructure for all the backend management operations with the online store — operations that can be carried out by regular users without a technical background i.e. no code writing is required.\",\"Such solutions may also offer accounting functionality, inventory management, billing gateways, and customer-related infrastructure. e-Commerce platforms make the life of a seller a lot simpler by eliminating a need for them to turn to third-party teams to create the e-commerce shop.\"],[\"SaaS solutions that are used to consolidate and track business processes: accounting, project management, procurement, supply chain operations, etc. Such software collects information from various departments, helping to streamline data sharing/processing activities and eliminate information duplicates.\",\"The closest example of ERP system use can be a car manufacturing company that procures car components from various suppliers and needs to effectively control the item purchase and management process. Here, the platform helps to track all the transactions, number of items supplied, and different attributes of each part (name, size, source, serial number, etc.)\"],[\"CRM system helps to manage all the company's relationships with current and prospective customers. It gathers customers' data from different channels and holds it in one place: contact information, history of interactions, important notes to take into account, etc.\",\"With these tools, the sales team can manage customer requests and marketing funnel more effectively — all the way from lead acquisition to deal closure. CRM also reminds managers about the tasks that need to be completed on time, such as introductory calls or proposal emails to potential clients.\",\"Aside from that, business owners can benefit from the analytics functionality of CRM solutions to get a better picture of sales department performance and generate predictions for the future, based on the reports they get.\"],[\"A billing gateway is a system that allows businesses to securely process payments of their customers. Basically, it is the middle man between customer and bank that, once a transaction is set up, 'tells' the customer's bank how much money needs to be charged from their account.\",\"These SaaS solutions are especially helpful for the online businesses that deal with complicated recurring payments — pricing plans, monthly/quarterly/annually payments, wide fee range, etc.\",\"Billing gateways can be either hosted or integrated. Hosted gateway will redirect your customers to a processor's website (PayPal, for example) to complete a transaction there, while an integrated solution will carry out the transactions through the provided API gateway, keeping customers on your website.\"],[\"This software helps businesses to deal with all ranges of accounting and bookkeeping activities. It stores financial records, helps to track expenses and taxes, holds all the banking and invoice templates, etc. Accounting software can also generate various reports, such as balance sheets, profit/loss statements.\",\"By using these tools business owners can compare financial activity and records from the previous months/years to the current ones. Companies can also categorize expenses, create bill schedules and automate 99% of the daily routine of the accounting department as a whole.\"],[\"Solutions that aid companies with recruiting and onboarding new team members, as well as workforce management. These tools heavily reduce the paperwork and automate daily tasks of Human Resource departments, keeping employees' data well-organized. Some other functions of HR software include goal tracking, employee training tracking, off-boarding automation, custom reports, and third-party integrations.\",\"For those businesses that are looking to strengthen only a particular side of their recruitment process, the HR software market offers several types of solutions to comply with specific business needs: Human Resource Information Systems (HRIS), Employee Performance Management, Applicant Tracking Systems (ATS), Learning Management Systems (LMS), and Onboarding software.\"]],\"subtitles3\":[{\"text1\":\"Market analysis will help you to figure out 1) the needs of your target audience, and 2) current competition. Identify whether the existing SaaS solutions completely cover the problems of the audience. If not, assess which areas are overlooked in particular as it will help you better understand in which direction to move in with your future product.\",\"text2\":\"Some important questions to ask yourself at this stage are:\",\"list\":[\"Who is my target audience? Are there any subgroups within it? Which ones?\",\"What challenge do I want my SaaS product to solve?\",\"Who are the main competitors of my solution?\",\"What value do they provide to users and what features do they lack?\",\"What features will make my SaaS product stand out?\"]},{\"text1\":\"On this step of building a successful SaaS product, you need to get more specific about your findings from the market research and target audience analysis. Here, you need to create a customer journey map and outline all the important touchpoints there. This will help you to understand how your future customers will interact with a product.\",\"text2\":\"Once the journey map is complete, proceed to create paper prototypes. Basically, this is all the functionality of your future product schematically sketched on paper — all the design elements, and visual templates. It is also helpful to conduct user interviews. You want to get initial feedback on the concept you have and all the ideas (about the SaaS product) that have been written out on a paper.\"},{\"text1\":\"It's important to know how your product will be monetized from day one. Find the right strategy that will fit your niche. Here, the best monetization plan is the one that 1) is based on the value your product provides, 2) resonates with the overall strategy of your business, 3) is tightly connected with the target audience, and 4) has quantifiable goals.\",\"text2\":\"As to the business model itself, SaaS product owners commonly prefer to stick with one (or a few) options:\",\"list\":[\"<b>Free software + ads</b> — platform gets revenue from displaying ads to the customers. Users can also disable ads after opting for a paid ad-free version of the product.\",\"<b>Freemium</b> — customers can use a basic version of a product for free or buy an extended version with the additional/premium features.\",\"<b>Flat-rate pricing</b> —  platform charges customers a fixed price on a monthly basis.\",\"<b>Per-user pricing</b> —  with this model the pricing varies depending on the number of customers (or accounts) using the platform (10/100/1000) from one organization.\"]},{\"text1\":\"It is extremely important to have your business plan in place before you proceed to the product implementation itself. It will help you shape the operational scope and set all the financial objectives in advance.\",\"text2\":\"The business plan should include all the above-mentioned information about your niche, ideal customers, and monetization strategy, plus Sales & Distribution plan, revenue projections, core values, and Exit strategy.\",\"text3\":\"This document is your 'path of profitability' which demonstrates to you — or your investors — that the product you are about to develop has the potential to become successful and make profit in the long-term perspective\"},{\"text1\":\"After a SaaS product idea has been validated and a business plan laid out, it's time to assemble a team that will create your software. You can either recruit programmers in-house or outsource the entire development process to a third-party Contractor.\",\"text2\":\"With the in-house team, you get more control over the product and can connect with each member of your team on-site. The in-house team comes with great expenses though, such as office rent, salaries, taxes, hardware, bills, etc. For startups, budgeting has always been a sensitive question, so putting together an in-house team might not be the money-wise decision there.\",\"text3\":\"Instead, business owners can go outsource and cut the development costs by three or even four times (if hiring a team from Eastern Europe). Some might object that outsourcing strategy is not that effective as in-house, and the time-zone difference is still a thing. However, if you are working with a <a href=https://wtt-solutions.com/platform-development target='_blank'>professional development company</a>, all these risks can be reduced to a minimum.\"},{\"text1\":\"Now it's time to build a SaaS product prototype — or Minimum Viable Product — of your product. We recommend not to dig deep into the functionality and try to do it 'all at once'.\",\"text2\":\"When creating a prototype your goal is to create a product with the basic set of features that will allow you to get the initial feedback from your audience.\",\"text3\":\"A prototype has to be simple yet functional enough to deliver the main value to your users so don't try to fit in all the features pouring the entire budget into it.\"},{\"text1\":\"After testing a prototype and receiving the first results, it's time to analyze them and understand what worked out, what didn't, and why. If you see that the product concept didn't perform as expected you can adjust the strategy and product functionality to test the hypotheses once again.\"}],\"subtitles4\":[\"These were the main steps to take to build a SaaS product. This model might not be the best fit for each and every product; however, businesses of different scales start using it due to the benefits that SaaS-based products bring to the table. Whether it's about building a SaaS product from scratch or replacing legacy software, this software distribution model gains a lot of attention across all industries.\",\"If you want to entrust your SaaS product development to a professional team, contact us. We have been providing development services in this niche for more than 5 years, have the relevant know-how, and a skill set to hit the finish line on time and within a budget set.\",\"For more information on how to build a SaaS application, contact one of our managers via the feedback form on top of this page, and don't forget to subscribe to our newsletter. There we feature our newest blogs and share helpful information on digital technologies. Don't miss out!\"],\"subtitles5\":[\"At WTT Solutions, building SaaS products is one of our main areas of expertise and the topics we are greatly experienced at. We work with SMEs and large enterprises to replace legacy systems and introduce new effective SaaS solutions. The most recent examples of our work are:\",\"<a href=https://wtt-solutions.com/our-work/ouzo target='_blank'>Ouzo games</a> — SaaS platform that uses AI to assist mobile game publishers in finding profitable games. Software successfully integrates into publisher infrastructure and automates sorting processes, allowing to pick money-making games more effectively and precisely.\",\"<a href=https://wtt-solutions.com/our-work/pitch59 target='_blank'>Pitch 59</a> — an ad platform that gives startups and small businesses the possibility to present or pitch their idea within a 59-second video. We were not the ones who started developing this product, however, we were the ones who had to turn a raw bugged product into a profitable business asset.\",\"Alongside fixing issues that were inherited from the previous team we structured technical requirements, improved code quality, optimized SQL queries, eliminated memory leaks and addressed a range of other functionality issues connected with in-app features.\",\"<a href=https://wtt-solutions.com/our-work/content-iq target='_blank'>Content IQ</a> — content analytics company approached us with the task to develop a SaaS platform that would assist Sales managers in searching, evaluating, and processing potential clients. The solution developed by us reduced the deal closure time by 97% and increased the number of transactions sent through the company's app by 203%. What could be a better example of 'how to build a saas sales application'? ; )\"],\"questionsList\":[{\"question\":\"To what level can SaaS software be customized?\",\"answer\":\"If we're talking about off-the-shelf solutions, the functionality of these depends on the pricing plans offered by a vendor. A custom-made solution, on the contrary, can be customized however you want.\"},{\"question\":\"How do you handle the client's feedback on the development process?\",\"answer\":\"We always encourage clients to engage in the development process as much as possible. This helps us to better prioritize the functionalities of the future product, and keep it tied to particular business needs.\"},{\"question\":\"What happens when the software is done?\",\"answer\":\"Once our work is done, all the project files and source code are handed over to the client. We can also continue to provide support and maintenance services for the project per client's request. For more information please contact one of our representatives.\"},{\"question\":\"Can we adjust the SaaS software features or components as we go?\",\"answer\":\"We are always ready to meet your needs regarding project development scope and introduce new changes if any are needed. Note, however, that big changes can drastically inflate the project budget and affect the delivery timeline.\"}]},{\"id\":\"top-latest-marketing-technology-trends-2021\",\"title\":\"10 Top Latest Marketing Technology Trends for 2021\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"June 26, 2021\",\"metaTitle\":\"10 Top Latest Marketing Technology Trends for 2021 | WTT Solutions\",\"metaDescription\":\"Latest changes in the way people interact with brands led to the appearance of trends in marketing technology ✅ Here are the 10 most impactful martech trends\",\"category\":[\"martech\"],\"timeToRead\":9,\"authorImg\":\"/images/blog/authors/ceo.png\",\"backgrounds\":{\"img\":\"/images/blog/MarketingTechnologyTrends/img1.jpeg\",\"preview\":\"/images/blog/MarketingTechnologyTrends/img1Tabl.jpg\"},\"subtitles\":[{\"id\":1,\"title\":\"1. Focus on data privacy\"},{\"id\":2,\"title\":\"2. Increased demand for chatbots\"},{\"id\":3,\"title\":\"3. Voice technologies are on the rise\"},{\"id\":4,\"title\":\"4. Video chat tools integrate deeply into sales and marketing\"},{\"id\":5,\"title\":\"5. Growing demand for social media marketing\"},{\"id\":6,\"title\":\"6. Martech consolidation\"},{\"id\":7,\"title\":\"7. Deeper personalization of customer experiences\"},{\"id\":8,\"title\":\"8. ‘No-Code’ Era\"},{\"id\":9,\"title\":\"9. Data analytics will be a top priority\"},{\"id\":10,\"title\":\"10. Mobile-First Indexing\"},{\"id\":11,\"title\":\"Importance of Using New Technologies in the Marketing Industry\"},{\"id\":12,\"title\":\"Our Experience\"},{\"id\":13,\"title\":\"Final thoughts\"},{\"id\":14,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"articleDescription\":[\"As the world comes out of the global pandemic, one thing is clear — the way we imagine our future will no longer be the same. Marketers, specifically, struggle to get a grip on new ways to reach audiences, as uncertainty and caution dominate the market.\",\"Most changes we are facing are predictable and rooted in history. The high rate of digitization seems unprecedented, but it isn’t. In fact, the 1918 pandemic helped foster the adoption of the telephone and the Vietnam War — a notable time of crisis — fueled the growth of television. Thus, it’s no surprise that, when tradition fails, technology takes off to support and advance industries.\",\"With that in mind, what conclusions can digital marketers derive from the past? What technology are we paving the way for and will we use in the future? This post is a reflection of key marketing technology trends for 2021 and beyond.\"],\"subtitles1\":{\"text1\":\"Over the course of the pandemic, privacy has been among the biggest trade-offs. As lockdowns restricted populations and called for strict surveillance, people had to concede a degree of their freedom to governments in exchange for staying safe.\",\"text2\":\"As a result, the general public is not into data privacy outcries. The opposite is true — <a href=http://www2.deloitte.com/be/en/pages/technology-media-and-telecommunications/topics/digital-consumer-trends-2020/data-privacy-awareness.html target='_blank' rel='nofollow'>80% of Deloitte survey respondents</a> still don’t read Terms and Conditions before accepting them. Since we own many more smart devices than ever before, data sets will continue to get richer, fueling the growth of customer segmentation and the efficiency of marketing campaigns.\",\"text3\":\"Does this mean that modern marketer teams should stop being privacy-conscious? Not at all. With other things on their mind, regular customers might be not as concerned about where their data goes, but governments are.\",\"text4\":\"The US <a href=https://slate.com/technology/2019/11/tiktok-bytedance-china-geopolitical-threat.html target='_blank' rel='nofollow'>recognized the need for privacy</a> legislation as a “security imperative.” China has long been first on the ball in limiting the reach of corporate data gathering. The <a href=https://digichina.stanford.edu/news/translation-personal-information-protection-law-peoples-republic-china-draft-second-review target='_blank' rel='nofollow'>Personal Information Protection Law</a> requires the biggest local tech players — WeChat, Taobao, and others — to form independent committees for monitoring data processing.\",\"text5\":\"For marketers, the tightening of regulatory grip sets several vectors for reflection:\",\"list\":[\"<b>Finding alternatives to cookies and other types of behavior-tracking</b> that regulators are likely to disable.\",\"<b>Strengthening data storage security</b>  to protect sensitive information from attacks.\",\"<b>Assembling technology for data processing and analysis</b> to make the most out of insights available, rather than asking users for redundant information.\"]},\"subtitles2\":{\"text1\":\"Automation has been riding high since the start of the pandemic. With the need to protect residents and employees, governments and businesses turn to technology for handling tasks like customer support, product shipping and delivery, and more.\",\"text2\":\"In marketing, chatbots are the pinnacle of automation. <a href=https://www.businesswire.com/news/home/20180919005045/en/Worldwide-Spending-on-Cognitive-and-Artificial-Intelligence-Systems-Forecast-to-Reach-77.6-Billion-in-2022-According-to-New-IDC-Spending-Guide target='_blank' rel='nofollow'>Statistically</a>, by 2022, AI and learning systems will become among the driving forces of customer relationship management — the projected market value is expected to reach <b>$77.6 billion</b>.\",\"text3\":\"The US is expected to have the highest share in conversational AI adoption while Pacific Asia will likely lead the race for the fastest adoption rate. Marketers and business owners will deploy chatbots to cover a wide range of tasks, including:\",\"list\":[\"Customer communication, specifically in fields that carry the burden of the pandemic — healthcare and education.\",\"Consulting, estimating, and planning in finance and banking — chatbots will be able to accurately project service costs and mitigate objections.\",\"Internal communication and operating cost reductions — chatbots <a href=https://chatbotsmagazine.com/how-with-the-help-of-chatbots-customer-service-costs-could-be-reduced-up-to-30-b9266a369945 target='_blank' rel='nofollow'>are expected to</a> cut operating expenses by 30%.\"]},\"subtitles3\":{\"text1\":\"For the rest of the year and beyond, voice recognition will disrupt industries. Natural language processing will empower a wide range of applications, from virtual assistants to enabling telehealth and convenient customer support.\",\"text2\":\"Business owners, marketers, and customers unanimously agree on the benefits of adopting voice recognition:\",\"list\":[\"Making marketing interfaces faster and more intuitive to facilitate digital transformation and increase decision-making speeds in B2B.\",\"Higher customer engagement; dynamic and personalized customer journeys.\",\"Streamlined research and data analysis fueled by the adoption of voice-to-text transcription tools.\",\"Improved sanitation — <a href=https://www.speechmatics.com/wp-content/uploads/2021/01/Speechmatics-Report-Trends-Predictions-Voice-Technology-2021.pdf target='_blank' rel='nofollow'>31% of users</a> recognize the benefit of not having to touch high-traffic surfaces brought forth by the adoption of voice technology.\"],\"text3\":\"While the path for voice technology adoption in marketing and other industries continues to be paved, the road will not be without its bumps. Security concerns for passive listening and privacy are dominant among users, according to the <a href=https://about.ads.microsoft.com/en-us/blog/post/april-2019/new-report-tackles-tough-questions-on-voice-and-ai target='_blank' rel='nofollow'>Microsoft Intelligence Team</a>.\"},\"subtitles4\":{\"text1\":\"The shift to remote work, education, shopping, and other processes has exposed the need for efficient and scalable video communication.\",\"text2\":\"The teams behind conferencing tools like Zoom or Skype faced unseen challenges — high traffic flows, security concerns, and the need to extend the infrastructure beyond enterprises, becoming a reliable backbone for vital industries like e-learning and telehealth.\",\"text3\":\"As a result, we are going through 2021 with higher-capacity digital tools than those teams have ever seen before. Marketers should and will take advantage of improved quality, reduced resource consumption, and lower prospect resistance to video communication.\",\"text4\":\"Specifically, we leverage video conferencing to accomplish the following:\",\"list\":[\"<b>Create high-engagement customer interactions</b>, for example, personalized Zoom conferences, virtual meetups, etc.\",\"<b>Reach wider audiences</b>: streaming or hosting events online helps marketing teams transcend distance and improve exposure.\",\"<b>Adjust internal communication policies</b> and adapt decision-making to the constraints of video conferencing.\"],\"text5\":\"It is not far-fetched to imply that the growth of real-time communication could, to an extent, rival traditional ways to share video content — social media, streaming platforms, and others. The key reason is that, over time, customers will fight the resistance to proactively join discussions — and most will prefer active interactions over passive forms of engagement.\"},\"subtitles5\":[\"The growth of social media marketing has been setting trends in marketing technology for years — and 2021 has been no exception. The playbook that marketers previously used to connect with audiences has changed, introducing unique tendencies:\",\"<b>Key objective of social media — customer acquisition</b><br />According to a Hootsuite report, almost <a href='https://www.hootsuite.com/research/social-trends?utm_campaign=ent-social_transformation_program-social_trends_2021-emea-none-ner-uk-global_field_marketing--en--q4_2020&utm_source=guide&utm_medium=owned_content&utm_content=Marketing_Week' target='_blank' rel='nofollow'>75% of marketers</a> ranked social media as their top customer acquisition channel. Teams see engaging experiences as a cost-efficient and effective way to drive customer acquisition.\",\"<b>Less is more: brands need to learn to keep their 'distance'</b> <br />Through the course of the pandemic, people turned to social media to find meaningful conversations and support workplace interactions. Hoping to primarily connect with each other, many were annoyed with interference caused by branded posts.\",\"That’s why conscientious marketing teams shifted their focus to customer support and valuable content instead, aiming to become a seamless presence for their communities.\",\"<b>Using social data for prospecting and data gathering</b> <br />The pandemic contributed to the collapse of multiple traditional customer acquisition tools, like events or face-to-face meetings. To keep connecting with new leads, marketers started to rely heavily on social media data.\",\"In 2021, integrating social media data sets into CRMs and BI tools has been one of the most popular current trends in marketing technology, as it helps teams to proactively anticipate customer needs and predict market fluctuations.\"],\"subtitles6\":[\"In the discussion of latest technology trends in marketing one should pay attention to the exponential growth of tools that are being continuously shipped to the market. Where, in 2014, there were less than 1,000 martech products available, now teams can rely on over <a href=https://cdn.chiefmartec.com/wp-content/uploads/2020/04/martech-landscape-2020-martech5000-slide.jpg target='_blank' rel='nofollow'>8,000 solutions</a>.\",\"The need for new marketing technology stems from rapid market changes. In 2020, we saw, time and time again, how important a reliable stream of real-time data is to teams and end-users.\",\"As marketing teams shifted to remote work, the need for workflow streamlining tools has also surged. Team leaders have had to find platforms that eliminate bottlenecks in brainstorming, inefficiencies in content management, and gaps in both internal and cross-department (e.g. marketing and sales) communication.\",\"Out of the top martech trends, the one that will persist through the year is the need to unite the martech stack. The number of integration marketing automation tools provided will be an important selection criterion since it’s more crucial than ever for marketing teams to see the bigger picture of the market, as well as the impact of each campaign.\"],\"subtitles7\":{\"text1\":\"In 2021, marketers will keep seeing hyper-personalization as a new trend in marketing technology, with customers taking tailored experiences for granted and expecting brands to understand their wants, needs, and concerns.\",\"text2\":\"In fact, the pandemic strengthened people’s longing for human interactions and fortified the belief that brands and marketing organization leaders should prioritize connection over efficiency.\",\"text3\":\"Luckily, marketers are not short on tools that help enforce hyper-personalization. Over the next 2-3 years, we can expect a widespread integration of the following solution types in the martech stack:\",\"list\":[\"Recommendation engines that predict a prospect’s needs based on behavior data.\",\"Dynamic pricing tools that adapt the offer to a customer’s needs and marketing budgets.\",\"Service chatbots that rely on deep learning to mirror a customer’s tone of voice and help build trust.\",\"Databases and AI tools that help manage customer interactions across different platforms.\",\"Personalized real-time notifications that help marketers reach customers in the right place at the right time.\"]},\"subtitles8\":{\"text1\":\"Forecasts predict a bright future for no-code and low-code apps. <a href='https://www.gartner.com/doc/reprints?ct=190711&id=1-1FKNU1TK' target='_blank' rel='nofollow'>According to Gartner</a>, 65% of all apps developed by 2024 will be 'no-code' or 'low-code' products. Driven by the need to build products quickly and cut operating costs, teams look for ways to bypass the need for hiring.\",\"text2\":\"Another trend contributing to the development of no-code is the widespread talent shortage in IT. Statistically, hiring a software engineer takes <a href=https://www.glassdoor.com/research/time-to-hire-study/# target='_blank' rel='nofollow'>over a month</a> — while teams are struggling to close job openings, they risk missing out on lucrative opportunities.\",\"text3\":\"In the future, no-code marketing industry trends will have a wide range of applications, namely:\",\"list\":[\"Helping project managers streamline workflows.\",\"Building custom workflow automation tools.\",\"Reducing the time needed to develop a full-fledged martech platform (<a href=https://www.redhat.com/cms/managed-files/mi-451-research-intelligent-process-automation-analyst-paper-f11434-201802.pdf target='_blank' rel='nofollow'>statistically</a>, no-code development practices cut time-to-market by 90%).\"]},\"subtitles9\":{\"text1\":\"If 2020 was the year of pivoting, forcing companies to move away from brick-and-mortar stores and in-person workflows to digital infrastructures, the key objective for 2021 is to find your niche and customer base in an increasingly competitive market.\",\"text2\":\"How can teams gain a competitive edge in a cutthroat fight against competitors? Data analytics is the key strategy to embrace and leverage. <a href=https://www2.deloitte.com/content/dam/insights/us/articles/6963_global-marketing-trends/DI_2021-Global-Marketing-Trends_US.pdf target='_blank' rel='nofollow'>According to Deloitte</a>, marketers can take control over their activities by designing robust customer data platforms.\",\"text3\":\"These tools will aggregate insights from all available sources (website, social media, email) and process them to give marketers a bigger picture of what audiences expect and ways to meet these expectations.\",\"text4\":\"Generally, data analytics in marketing will have a predictive property, anticipating needs and concerns rather than reacting to them. To that end, teams deploy a wide range of tools, including:\",\"list\":[\"Social sensing platforms.\",\"Social CRM ecosystems that help discover and manage agreements with influencers.\",\"Event processing and simulation tools for prescriptive analytics (a way of analyzing the problem and answering the question: “What should be done?”).\",\"Campaign efficiency monitoring software that captures and processes email, content, and social media marketing metrics.\"]},\"subtitles10\":{\"text1\":\"Google’s shift to mobile-first indexing is no surprise — in fact, <a href=https://developers.google.com/search/blog/2016/11/mobile-first-indexing target='_blank' rel='nofollow'>the Google development team announced it</a> back in 2016. The rationale behind the decision stemmed from the fact that most users choose smartphones for Googling, thus, it makes no sense to prioritize desktop page versions for indexing.\",\"text2\":\"In March 2021, Google moved all websites to mobile-first indexing. The shift has drastic implications for marketing teams, namely:\",\"list\":[\"Mobile-friendliness will be among the key factors that determine a website’s SEO ranking.\",\"Marketers need to make sure they provide uniform mobile and desktop experiences.\",\"Page speeds stay relevant for mobile-first indexing, as <a href=http://www.thesempost.com/google-mobile-first-index-page-speed-ranking/ target='_blank' rel='nofollow'>confirmed by the development team in 2017</a>.\"]},\"subtitles11\":{\"text1\":\"According to Martec’s law, organizations tend to change at a considerably slower pace than technology does; however, in the case of economic turbulence, the two tend to catch up in order to navigate the uncharted territory of change.\",\"text2\":\"We saw how the latest marketing tech trends helped teams gain a competitive edge throughout 2020. By the end of last year, the benefits of integrating technology into marketing benefits were clear and non-negotiable.\",\"text3\":\"Specifically, marketing teams linked the implementation of technology to:\",\"list\":[\"<b>Improved ROI and productivity.</b> As soon as teams were ready to invest and commit to digitizing marketing, they discovered the impact martech has on increasing efficiency — sales productivity <a href=https://www.invespcro.com/blog/images/blog-images/marketing-automation.jpg target='_blank' rel='nofollow'>improved by 14.5%</a>, marketing overhead dropped by over 12%.\",\"<b>Higher priority on system integration.</b> Contemplating the idea of building a martech stack encouraged teams to unite workflows and processes in large-scale umbrella tools. By connecting all platforms they use via custom or built-in integrations, teams can see the impact of their efforts clearly, easily track sales pipelines, and streamline internal workflows.\",\"<b>Being able to work with the full customer journey.</b> Martech tools provide visibility into customer-brand interactions on each stage of the sales pipeline: from discovery (analyzing on-site behavior, generating personalized offers, etc.) to retention and loyalty programs (real-time support, gathering and monitoring feedback).\",\"<b>Merging marketing with other operations.</b> Marketing technology helps teams derive insights from the work done across the organization. Through project management platforms, they can collaborate with product developers and offer helpful suggestions on improving the interface and user experiences. CRMs give marketers insight into strategies salespeople rely on and requests customers share with customer success teams. This data is tremendously useful when planning content, segmenting audiences, or prioritizing distribution channels.\",\"<b>Remains relevant among the competition.</b> Through martech adoption, teams increase the speed of decision-making. Leveraging real-time customer feedback helps marketers quickly prototype new offers and adapt to changing needs and expectations. Another way to gain a competitive edge through martech integration is by leveraging added productivity and cost reduction fueled by the introduction of no-code platforms and automation tools.\"]},\"subtitles12\":[\"Since our team focuses on helping marketers integrate technology into their processes, we are carefully watching the martech industry trends. At WTT Solutions, we believe that, in the future, martech will become even more impactful, with teams using dozens of tools to streamline processes.\",\"Our team already contributes to fostering martech innovation. For one, we helped optimize <a href=https://wtt-solutions.com/our-work/pitch59 target='_blank'>Pitch59</a> — a platform that helps business owners and salespeople streamline pitching. By publishing minute-long elevator pitches on Pitch59, team leaders can discover networking opportunities, attract referrals, and raise product awareness.\",\"Our team improved performance via SQL query optimization and reduced the application size to 2 MB. These technical tweaks made the platform more accessible and helped users save time when uploading elevator pitches.\"],\"subtitles13\":[\"In 2021, it became apparent that integrating technology into marketing is no longer optional. With businesses going digital and teams switching to remote work, the need for a reliable tech infrastructure is now more pronounced than ever.\",\"In the future, the approach to anticipating audience needs and customer communication will be even more proactive, with predictive marketing taking the lead. Most marketing workflows will be heavily automated, supported by chatbots and no-code apps.\",\"To make sure your company stays relevant amidst an ever-changing marketing landscape, it’s important to build a flexible marketing technology stack. At <a href=https://wtt-solutions.com/our-work target='_blank'>WTT Solutions</a>, we carefully analyze business objectives and rely both on historical data and experience to build a scalable martech stack for all-scale companies.\",\"Discover which tools your team needs to reach its peak efficiency — get in touch with our team by filling the form in the top right corner of this page!\"],\"questionsList\":[{\"question\":\"What are marketing technology tools?\",\"answer\":\"There are several popular marketing tool types: data analysis and business intelligence tools, automation and workflow management platforms, customer engagement platforms, and marketing collateral creation platforms.\"},{\"question\":\"What minimum martech stack should a company have?\",\"answer\":\"We recommend limiting your list of tools to the following software types: Content management system (CMS); Customer relationship management (CRM) software; Analytics and reporting tools; Marketing and sales funnel designer platform; and SEO tools.\"},{\"question\":\"What challenges can I come across when integrating a martech stack into my business?\",\"answer\":\"The key challenges teams commonly deal with are a steep learning curve, costly upfront investments, and the lack of centralized infrastructure that unites all martech tools into a single platform.\"},{\"question\":\"How long does it take to design a martech stack for my company?\",\"answer\":\"Depending on the range of features, degree of customization, and number of tools you want to include, estimates will vary between a few weeks to 5-6 months. To build a precise martech integration timeline for your project, consult our team.\"}]},{\"id\":\"what-is-marketing-technology\",\"title\":\"What is Marketing Technology and How Does MarTech Help Marketers?\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"July 14, 2021\",\"metaTitle\":\"What is MarTech or Marketing Technology? | WTT Solutions\",\"metaDescription\":\"Martech changes the way companies approach their marketing, sales, and support ✅ Read this article from WTT Solutions to understand the definition of Martech\",\"category\":[\"martech\"],\"timeToRead\":10,\"authorImg\":\"/images/blog/authors/ceo.png\",\"backgrounds\":{\"img\":\"/images/blog/WhatIsMarketingTechnology/img1.jpg\",\"preview\":\"/images/blog/WhatIsMarketingTechnology/img1Tabl.jpg\"},\"subtitles\":[{\"id\":1,\"title\":\"What is Marketing Technology? The Definition of Martech\"},{\"id\":2,\"title\":\"Martech\",\"subtitle\":true},{\"id\":3,\"title\":\"Adtech\",\"subtitle\":true},{\"id\":4,\"title\":\"The Importance and Essentials of Martech\"},{\"id\":5,\"title\":\"Improves Data Analysis\",\"subtitle\":true},{\"id\":6,\"title\":\"Automates Marketing Workflow\",\"subtitle\":true},{\"id\":7,\"title\":\"Optimizes Interactions with Customers\",\"subtitle\":true},{\"id\":8,\"title\":\"Smarter Product Marketing\",\"subtitle\":true},{\"id\":9,\"title\":\"How Does Martech Help Marketers?\"},{\"id\":10,\"title\":\"Martech Challenges\"},{\"id\":11,\"title\":\"How Can We Help?\"},{\"id\":12,\"title\":\"Conclusion\"},{\"id\":13,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"articleDescription\":[\"The fast expansion of digital technologies has led to changes in buying preferences, forcing marketing departments to adjust to new trends almost 'on the fly.' What worked perfectly yesterday may not work as well today, so it’s no wonder why new approaches and tools have started to replace the old 'tried and true' methods for market research, audience interviews and niche analysis.\",\"While technologies penetrate deeper into the infrastructure of large companies — and, according to <a href=https://community.nasscom.in/communities/sales-marketing/martech-the-driving-force-behind-marketing-for-the-new-normal.html target='_blank' rel='nofollow'>NASCOM</a>, 52% of enterprises invested in digital marketing technologies this year — not all businesses (especially small- and medium-sized ones) keep up with the changes that take place.\",\"In this post, we want to answer the question 'What is marketing technology or Martech?,' provide some tips on how to work with it, and explain the actual benefits that a company receives after Martech integration.\"],\"subtitles1\":{\"text1\":\"When it comes to a Martech definition, it's important to be able to distinguish it from another very popular trend: Adtech. Let's briefly go over the definition of each one and uncover what makes them different\",\"titles\":[[\"So, what is Martech? It is basically a combination of the terms <i>marketing technology</i>, and this term emphasizes the different systems and tools that marketers use to get insights on their audiences, engage with customers, and build more effective marketing strategies.\",\"Martech can work across a single marketing activity layer (such as data analysis), or a few at a time (customer segmentation, targeting, communications, etc). The set of tools that a company uses to boost its marketing activities is called a <b>Martech Stack</b>.\",\"The type of technologies present in the Martech Stack will vary depending on type of business and niche. For example, B2B and B2C companies may use different channels to attract new customers. Thus, the marketing needs and Martech stacks for each of these businesses will differ.\",\"In general cases, when talking about <b>Martech stack</b>, we refer to such solutions as CMSs, CRMs, website analytics, content intelligence, personalization software, etc.\"],[\"<b>Adtech</b> is a short form of <i>advertising technology</i>. This term is used to describe various customer acquisition techniques and tools used to set up and manage promotional campaigns\",\"It covers all the processes, analytics (for views/reach/conversions/impressions), and other information that may help marketers better assess current campaigns.\",\"For Adtech stacks, most marketers commonly use SEM (Search Engine Marketing, also referred to as paid search advertising), retargeting, attribution software, ad tracking, and DMPs (Data Management Platforms).\",\"Another purpose of advertising technology is to help advertisers and publishers carry out media trading deals via DMPs (Demand-Side Platforms) and SSPs (Supply-Side Platforms) more effectively. The most prominent examples of such platforms are  Mediamath, Adroll, Tapad, etc.\",\"<i>Generally speaking, Adtech can be considered part of Martech and, while Martech is focused more on the development of a holistic approach to marketing, Adtech concentrates on the processes directly related to the advertising company's offerings.</i>\"]],\"title1\":[\"So, what is Martech? It is basically a combination of the terms <i>marketing technology</i>, and this term emphasizes the different systems and tools that marketers use to get insights on their audiences, engage with customers, and build more effective marketing strategies.\",\"Martech can work across a single marketing activity layer (such as data analysis), or a few at a time (customer segmentation, targeting, communications, etc). The set of tools that a company uses to boost its marketing activities is called a <b>Martech Stack</b>.\",\"The type of technologies present in the Martech Stack will vary depending on type of business and niche. For example, B2B and B2C companies may use different channels to attract new customers. Thus, the marketing needs and Martech stacks for each of these businesses will differ.\",\"In general cases, when talking about <b>Martech stack</b>, we refer to such solutions as CMSs, CRMs, website analytics, content intelligence, personalization software, etc.\"],\"title2\":[\"<b>Adtech</b> is a short form of <i>advertising technology</i>. This term is used to describe various customer acquisition techniques and tools used to set up and manage promotional campaigns\",\"It covers all the processes, analytics (for views/reach/conversions/impressions), and other information that may help marketers better assess current campaigns.\",\"For Adtech stacks, most marketers commonly use SEM (Search Engine Marketing, also referred to as paid search advertising), retargeting, attribution software, ad tracking, and DMPs (Data Management Platforms).\",\"Another purpose of advertising technology is to help advertisers and publishers carry out media trading deals via DMPs (Demand-Side Platforms) and SSPs (Supply-Side Platforms) more effectively. The most prominent examples of such platforms are  Mediamath, Adroll, Tapad, etc.\",\"<i>Generally speaking, Adtech can be considered part of Martech and, while Martech is focused more on the development of a holistic approach to marketing, Adtech concentrates on the processes directly related to the advertising company's offerings.</i>\"]},\"subtitles2\":{\"text1\":\"The main goal of Martech is to help companies close the gap that formed due to the fast changes in customer behavioral patterns, rapid development of technologies, and inability of the business to quickly adapt to a new reality.\",\"text2\":\"By relying on technologies, instead, marketers can automate repetitive and time consuming tasks, process data they gather more effectively, and increase in-team productivity. These are the exact benefits that lay the foundation for Martech, so let's get over them in a bit more detail here.\",\"titles\":[[\"Data is the key to all marketing activities nowadays — according to Gartner, <a href=https://www.gartner.com/en/marketing/insights/articles/4-key-findings-in-the-annual-gartner-cmo-spend-survey-2019-2020 target='_blank' rel='nofollow'>76% of marketers</a> base their decisions on the findings they get from the data analysis. As an asset, data needs to be accurately analyzed, refined, and visualized. Not all companies, however, understand how to use data.\",\"Here, the use of the right Martech tools can help to embed data analysis into a company's culture, remove bias out of the equation, and shift from guess-driven to data-driven decisions. As a result, businesses will be able to improve ad ROIs and build stronger relationships with their audience\"],[\"Martech can help companies automate their marketing workflow, and increase the productivity and scope of marketing campaigns. Automation solutions make it possible to easily scale marketing activities and effectively connect with different target groups — which is almost impossible to do when trying to adjust all messages 'by hand'\",\"With the help of Martech, businesses can segment their prospective clients and send them offerings that are tailored to their potential. Thus, you can equally and effectively target high-value clients (by giving them custom offerings and upsells) as well as low-value ones (providing free trials, demos, coupons, etc).\"],[\"Customer communications are an area where lots of startups struggle the most. This happens for several reasons: limited resources, insufficient experience, and insufficient technology base. Prospective clients, on the other hand, have multiple options in terms of product selection, service choice, communication channels, etc. They will not wait for a company to put its customer service together, and will switch to the competition instead.\",\"To prevent that from happening, businesses can integrate Martech solutions and start engaging with customers in those channels that suit them the most. Aside from automating responses to basic audience questions, marketing technologies allow for streamlined content creation activities, improved engagement and extended audience reach.\",\"What's more, Martech gives marketers solutions needed for competition monitoring — to understand what communication strategy they should stick to, what trends to follow and topics to cover through their communication channels, etc.\"],[\"Due to a dense level of information noise in today’s world, people have become immune to ads very quickly. It's no wonder that new products almost always have very little chance of succeeding, as <a href=https://wave.video/blog/pre-roll-ads/ target='_blank' rel='nofollow'>90% of people</a> skip online ads. So, how can marketing technologies and investing in Martech help in this case?\",\"Martech allows businesses to adjust their offerings based on the insights received from analyzed data. Instead of trying to break through a thick wall of generic ads to pique users’ attention, by using Martech instruments, marketers can simply go around this wall. That means working with pain points and needs of the target audience that normally fall out of sight for competitors.\",\"As a result, companies shift from blindly investing in advertising and snowballing users with as many ads as possible (40% of which might be <a href=https://www.mediapost.com/publications/article/340946/data-estimates-40-of-all-media-spend-is-wasted-.html target='_blank' rel='nofollow'>possibly wasted</a>) to a more refined approach where quality prevails over quantity. That means users will receive ads that are 1) based on the user’s current position in the sales funnel, and 2) tailored to a specific need in a specific moment in time.\"]]},\"subtitles3\":{\"text1\":\"The short answer to the question 'How does martech help marketers?' is:\",\"text2\":\"<i>Martech brings together everything that a company might need to build a comprehensive marketing strategy and establish a long-term presence on the market.</i>\",\"text3\":\"Depending on the size and type of a business, the Martech stack will vary. It may include SaaS platforms, different analytics tools, and link together various departments across the company (to ensure a smooth interaction at each individual level), or be comprised of a few social media and advertising tools — all will depend on the goals set to achieve.\",\"text4\":\"To give you a better overview of the solutions you can choose for your stack, take a look at the following list where we have gathered the key types of Martech tools that companies benefit from today:\",\"list\":[\"<b>Marketing Attribution Software</b> - allows marketers to identify and assess those channels, or campaign landing pages that contribute the most in terms of conversions and revenue generation. With the help of these tools, businesses are able to allocate budgets more wisely, and recognize potential performance issues at an early stage.\",\"<b>Content Management System (CMS) </b> - enables users to create, modify, and manage web content. Aside from the basic editing functionality, CMSs may also include reporting features, role-based administration access, multilingual capabilities, analytics, and multichannel scalability. These systems are normally designed to be used by non-technical people, i.e. no programming knowledge is required by a user to start using and publish content via this tool.\",\"<b>Customer Experience Software </b> - allows for the collection of customer feedback across different channels. It collects and aggregates information from various social mediums (Facebook, Twitter, Instagram, etc.) to provide businesses with important insights into their customer experience. With the help of Customer Experience Software, marketers can influence the churn rate, increase customer engagement and satisfaction rates.\",\"<b>Customer Relationship Management Software </b> - helps companies collect, organize, access, and track their customer data, all in one cohesive system. CMSs allow different departments within an organization (sales, marketing, customer support, etc) to stay updated regarding all the communication activities that take place for each and every customer. \",\"<b>Email Marketing Platforms</b> - enable companies to design and distribute engaging promotional newsletters. These platforms allow marketers to segment their email campaigns and tailor messaging to each particular user group. The importance of email marketing can't be overlooked, as it is able to provide the highest ROI among all other marketing channels — <a href=https://www.hostpapa.com/blog/email/email-marketing-stats-2020/ target='_blank' rel='nofollow'>$38 for each $1 invested</a>, according to Hostpapa.\",\"<b>Social Media Management Apps</b> - make it possible for businesses to better control and analyze their social media accounts. With the help of such solutions, marketers automate social media posts and improve the company's online presence. Social management tools normally include scheduling, reporting, and engagement functionality.\",\"<b>Web analytics tools</b> - used by companies to view all the data 'behind their websites'.’ Marketers utilize these solutions to understand how sites are viewed, how long users stay on a website, how many of them interact with product pages, abandon carts, etc., and then break down all this information into actionable reports\"]},\"subtitles4\":{\"text1\":\"Marketing technologies bring lots of benefits in terms of understanding customers and providing them with better services; however, there're also some challenges that business owners need to account for if they decide to integrate a Martech stack:\",\"list\":[\"<b>Lack of Competent Technical Marketing Talent </b> - the ideal candidate to implement a Martech would be a person who has a background in marketing, databases, integrations, APIs, or SQL. Unfortunately, there's still a huge gap in the market for the demand and supply for these professionals.\",\"<b>Data is Dispersed</b> - in order to be able to apply advanced technologies and conduct thorough analysis using Martech, marketers need to have data collected all in one place. Lots of companies, however, are challenged with the problem of getting all their data together as all their data streams are commonly dispersed or siloed.\",\"<b>Over-automation</b> - overdoing Martech is guaranteed to cause nearly an opposite effect on your advertising campaigns: instead of getting a personalized experience, users will be bombarded with poorly targeted content. This is why, when automating marketing activities, the priority should always be on balancing data and creativity.\",\"<b>Integration</b> - the inability to put together disparate tools into a unified system way too often gets in the  way of Martech integrations. Another common problem that arises from the integration process is that companies struggle to identify which marketing tools and tactics are truly driving sales in their business. This makes it harder to set the integration priorities right.\"]},\"subtitles5\":[\"If you want to skip the tedious process of looking for  a technical marketing talent, dealing with numerous installation and Martech setup steps, trust this process to an experienced team who has the relevant know-how to integrate Martech on time and within budget. At WTT-Solutions we know how to create <a href=https://wtt-solutions.com/our-work/content-iq target='_blank'>marketing systems</a> and fine-tune them to particular business needs.\",\"For example, <b>SEO Bangkok</b> — a Martech solution for lead generation, scoring, and nurturing — was developed by our team from the ground up. We developed a design, found ways to integrate the solution with existing APIs, streamlined the data collection process, and ensured that all the components of the product worked flawlessly\"],\"subtitles6\":[\"The Digital world moves way faster than we do; however,  it's our job to adapt to it. Those companies that will be able to rethink their marketing activities and merge them with up-to-date technologies will definitely gain a long distance advantage\",\"The automation tools, BI, and AI, coupled with data analysis provided by <a href=https://wtt-solutions.com/martech target='_blank'>Martech</a> have already become a new norm for many organizations around the world. So, if you are interested in understanding marketing technologies and the Martech landscape on a deeper level, or want to build a Martech stack, reach out to our team.\",\"At WTT Solutions we have vast experience providing Martech development services for businesses of different scales. Simply, fill out the form in the top right corner of the page and one of our customer representatives will get in touch with you within one business day. Also, don't forget to subscribe to our newsletter in order to receive regular helpful insights on software development!\"],\"questionsList\":[{\"question\":\"We are a small company and are not sure whether we need to have a sophisticated Martech structure. What would be your advice in our case?\",\"answer\":\"The goal of Martech is to help you find weak points in your strategy and improve them, and that doesn't necessarily mean you have to use dozens of tools to get the results you're aiming for. In some cases, a few instruments can be enough to successfully implement Martech.\"},{\"question\":\"I've set up a Martech stack. What's next?\",\"answer\":\"Once the Martech stack is built, it's time to start using it to better understand your market. In order to do that, we suggest companies take these next steps: build up a customer base, break it down into segments, capture journeys for each group individually, and deliver personalized messages for each.\"},{\"question\":\"How do I assess the effectiveness of my Martech stack?\",\"answer\":\"Normally, we would suggest you trust the Martech evaluation process to a professional team that has experience building and auditing Martech stacks, since this process includes numerous steps to perform. In general cases, however, to understand whether the marketing technologies you use fully meet the needs of your business, answer these two main questions: 1) Are there still any gaps that prevent your company from effectively connecting with individuals and segments?, and 2) Do you still experience any missed revenue opportunities\"},{\"question\":\"Can I integrate a Martech stack by myself?\",\"answer\":\"On a basic level, companies can set up a Martech stack without assistance; however, if your customer journey map is complex, and includes lots of touchpoints, we advise you to seek professional help for designing your system. Contact us for more information.\"}]},{\"id\":\"how-to-develop-edtech-startup\",\"title\":\"How to start an edtech startup that wins hearts and minds\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"July 15, 2021\",\"metaTitle\":\"How to Start an EdTech Startup and Education Company | WTT Solutions\",\"metaDescription\":\"Education is a industry with a projected $7 trillion value — that’s why a lot of startups develop EdTech platforms ✅ Find how to start an edTech startup company\",\"category\":[\"edtech\"],\"timeToRead\":9,\"authorImg\":\"/images/blog/authors/ceo.png\",\"backgrounds\":{\"img\":\"/images/blog/HowDevelopEdTechStartup/img1.jpg\",\"preview\":\"/images/blog/HowDevelopEdTechStartup/img1Tabl.jpg\"},\"subtitles\":[{\"id\":1,\"title\":\"5 Reasons to Start an EdTech Company\"},{\"id\":2,\"title\":\"How to start an edtech startup\"},{\"id\":3,\"title\":\"Know your EdTech market\",\"subtitle\":true},{\"id\":4,\"title\":\"Make sure your idea is viable\",\"subtitle\":true},{\"id\":5,\"title\":\"Define the Unique Selling Proposition (USP)\",\"subtitle\":true},{\"id\":6,\"title\":\"Choose a business model\",\"subtitle\":true},{\"id\":7,\"title\":\"Build a team\",\"subtitle\":true},{\"id\":8,\"title\":\"Develop an MVP\",\"subtitle\":true},{\"id\":9,\"title\":\"Raise money\",\"subtitle\":true},{\"id\":10,\"title\":\"5 Reasons Why Education Startups Fail\"},{\"id\":11,\"title\":\"Summary\"},{\"id\":12,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"articleDescription\":[\"EdTech investments have been booming in 2021. According to Q1 data, the industry raised <a href=https://www.holoniq.com/edtech/10-charts-that-explain-the-global-education-technology-market/ target='_blank' rel='nofollow'>over $4 billion in venture capital</a>, with China, US, and India as market leaders. The surge of interest in this field can encourage startup founders to launch an education technology startup.\",\"Before you decide to jump on the bandwagon, however, a concept and growth plan are vital. In this post, we will detail how to launch an EdTech startup and make sure your product or service is relevant to today's market needs.\"],\"subtitles1\":{\"text1\":\"While traditional EdTech platforms target K12 and college education, the truth is, that there are many more niche areas that teams can explore and enrich with relevant projects.\",\"text2\":\"<i>In fact, education is one of the most versatile fields and is undergoing a massive shift towards digital transformation.</i>\",\"text3\":\"If you are questioning the profitability and relevance of an education product, here are five compelling reasons to find out more about how to start an EdTech startup.\",\"list\":[\"<b>There’s still room for untapped opportunities.</b> Digital transformation in education is a recent trend fueled by the pandemic, adoption of remote work, and long-distance communication. Thus, while the market is booming, it’s not yet saturated. According to <a href=https://angel.co/education target='_blank' rel='nofollow'>AngelList</a>, there are 24,000 global education startups on the market — a fairly modest number compared to <a href=https://angel.co/markets target='_blank' rel='nofollow'>finance or healthcare</a>.\",\"<b>Education has become personalized.</b> As neuroscience and behavioral studies progress, we discover more differences in the way people process and integrate information. It has become apparent that factors like circadian cycles, personality types, and more should be taken into account when designing learning strategies. Traditional education misses the mark on personalization by confining students to standardized practices. Technology, on the other hand, has the tools to support personal learning, allowing students to process knowledge at their own pace.\",\"<b>The Education market is growing at a rapid pace.</b> Today, education is one of the largest global industries, with over <a href=https://www.jstor.org/stable/4417837 target='_blank' rel='nofollow'>6% of the allocated GDP</a>. By 2025, the market sector is expected to hold a value of over $7 trillion. The digital spend in education is growing unprecedentedly, as well — forecasters expect it to hit <a href=https://www.holoniq.com/notes/global-education-technology-market-to-reach-404b-by-2025/ target='_blank' rel='nofollow'>$404 billion by 2025</a>\",\"<b>EdTech is attractive to investors.</b> The interest of VC funds in EdTech startups is peaking — while, in 2018, investments averaged $8 billion, they are now twice as high (<a href=https://www.holoniq.com/wp-content/uploads/2019/01/Screen-Shot-2021-01-25-at-12.08.47-pm-1280x717.png target='_blank' rel='nofollow'>hitting $16.1B in 2020</a>). Estimates outline a bright future for education-niched companies — by 2025, there will be over 100 companies with market capitalization over $1 billion.\",\"<b>EdTech will soon replace traditional education.</b> Other than revolutionizing K12 and college education by integrating innovative technologies, over time, the trend of life-long learning will become more pronounced — big players across industries like Deloitte and PwC support and fund continuous development among employees.\"],\"text4\":\"The data clearly spells out a wide range of opportunities for the EdTech market. So, if you plan on launching an EdTech startup, now is the right time to do it. \"},\"subtitles2\":[\"EdTech startups are usually technically complex platforms that need to emphasize intuitive interfaces, accessibility and security. They also need to meet a high number of regulatory requirements in order to be eligible for use in K12 establishments.\",\"To ensure you develop a product that creates a steady revenue stream, take a look at the step-by-step breakdown of how to create an EdTech startup.\"],\"subtitles3\":[{\"text1\":\"EdTech comes in many flavors. There are platforms that support or redefine traditional learning and education by streamlining classwork management, testing and other workflows; and tools that fuel remote e-learning and distance education.\",\"text2\":\"When you start thinking about <a href=https://wtt-solutions.com/blog/how-to-build-elearning-platform target='_blank'>how to build an e-learning platform</a> or EdTech startup, make sure you understand which niche the startup falls into and what type of target audience will find it appealing. Here are the reference questions that help startup founders find the right niche:\",\"list\":[\"What type of learners does the startup target (B2B, adults/K12/college students)?\",\"Is the platform aimed at general education or personalized?\",\"What aspect of education does the platform aim to improve?\",\"Does the platform need to be compliant with local laws?\"]},{\"text1\":\"There’s a concept in startup development: “If something does not already exist, it is either innovative or useless.” Before you commit to EdTech startup development, make sure your concept is the former, not the latter. How should you go about testing viability? Here are a few easy-to-deploy methods.\",\"text2\":\"<b>Method #1. Do your own research</b><br/> Start an EdTech company development by exploring the market. Identify whether similar startups to yours exist, whether they have succeeded or failed, and which hurdles they faced when scaling and acquiring users.\",\"text3\":\"Of course, knowing whether a startup is a success or a failure takes training and experience. If you are not a seasoned investor or business developer, it’s a good idea to stick to a set of basic metrics, namely:\",\"list\":[\"Number of DAUs and MAUs.\",\"Recent EdTech investments.\",\"Public exposure (news, engagement on events, etc.)\",\"Social sentiment (use Reddit and other forums to gauge public opinion.)\"],\"text4\":\"<b>Method #2. Ask around</b><br/> Here are a few ways to test the validity of an EdTech startup idea without disclosing technicalities and allowing others to rip it off.\",\"list2\":[\"<b>Post a poll on social media.</b> By conducting a basic survey on the problems the target audience is facing, you’ll get a better picture of the market and its potential.\",\"<b>Run your education startup idea past a business consultant.</b> There are plenty of consultancy-as-a-service companies — once you reach out to those, experienced critics will poke holes in your concept and will either help you tweak it or explain why it’s not viable to begin with.\"]},{\"text1\":\"A Unique Selling Proposition is a marketing strategy that helps define why your product is superior to the alternatives.\",\"text2\":\"Here are the tools marketers use to come up with effective USPs:\",\"list\":[\"<b>Keep it short.</b> Your product might have dozens of benefits — in a USP, they should be condensed to one powerful statement. For example, Udemy markets itself as the biggest online education platform. Coursera, on the other hand, is promoted as an intermediary between learners and top education establishments.\",\"<b>Make sure it’s relevant.</b> A unique selling point will be considerably more effective if it directly addresses challenges and concerns that learners, teachers, and institution managers face every day.\",\"<b>Keep it realistic.</b> When coming up with a USP, make sure it is intrinsic to the platform. It’s tempting to choose benefits that “sound good” as a unique selling point even if, for technical or feasibility reasons, you cannot live up to the promise. In the long run, if the USP is not representative of the product, users will call the founding team out.\"]},{\"text1\":\"Feasibility and sustainability are key components of a successful EdTech startup. The founding team should figure out how to convert free users into paid subscribers — otherwise, they will have a hard time attracting investors and supporting the product once it is released.\",\"text2\":\"There are several popular business models in EdTech:\",\"list\":[\"<b>Freemium</b> attracts prospective users to the platform by letting them use the product for free. In order to access advanced features or additional website content, users will be required to subscribe.\",\"<b>Institutional</b> (or top-down) models require users to get in touch with local governments and sell EdTech products through their endorsements. On the one hand, this gives business owners a steady revenue flow (unlike freemium platforms where user acquisition is the key challenge). On the other hand, the founding team cannot rely on the institutional approach until they have a robust network of relevant relationships.\",\"<b>Bottom-up</b> — this model uses schools as a way to foster product adoption. The founding team can onboard educational institutions as free users and get revenue from individual families that may (but shouldn’t be forced to) choose to use the platform to fuel their kids’ learning.\",\"<b>Sponsored</b> — a revenue model that keeps the product free for users but uses in-app ads to incentivize sponsors. In some cases, business owners can connect with corporations willing to sponsor the maintenance of EdTech startups as a part of their corporate social responsibility (CSR) initiatives.\"],\"text3\":\"For more information about monetization models within modern digital platforms, take a look at our article <a href=https://wtt-solutions.com/blog/top-5-online-marketplace-revenue-models target='_blank'>here</a>.\"},{\"text1\":\"Statistically, you wouldn’t be wrong to be worried about an incompetent team sinking your startup — <a href=https://neilpatel.com/wp-content/uploads/2017/08/15068891_327436814286746_6748413526487882962_o_jpg_951_960_pixels.jpg.webp target='_blank' rel='nofollow'>23% of startup founders</a> link the failure of their projects to not having the right team to back them up.\",\"text2\":\"Here are a few tips for building powerful teams for nascent EdTech Startups:\",\"list\":[\"<b>Analyze your strengths and weaknesses.</b> As the primary team member, you should be aware of what your strengths and shortcomings are. Break your abilities down into soft and hard skills and discover where you fall short.\",\"<b>If you are an ideator, hire action-takers.</b> It’s a common strategy for founders to hire teammates similar to themselves; however, you are actually set for a higher probability of success if you do the opposite — hire grounded, results-oriented employees if you are a visionary. This way, you can be confident that the world will see your creativity as a bug-free, reliable tech product that meets the intricacies of government regulations.\",\"<b>Enforce work-life balance and don’t reprimand those who want it.</b> The startup environment is hectic, so make sure to set boundaries for your team. Having everyone work 24/7 may be 'productive,' but, over time, your most valuable teammates will burn out.\"]},{\"text1\":\"A Minimum Viable Product (MVP) is a preferred tool for many EdTech startup founders when it comes to testing engagement and gauging investor interest. An MVP is a stripped-down version of the product that helps validate the idea and gather user feedback.\",\"text2\":\"Let’s go over the best practices for building an MVP for EdTech company:\",\"list\":[\"<b>Include only vital features</b> (e.g. search tab, sign up, payment gateway) in the MVP to cut development costs.\",\"<b>Set a budget and a timeline</b> to make sure you are not crossing the feasibility threshold.\",\"<b>Focus on security</b> — since the MVP will rely on user data, make sure you are processing and storing sensitive information in a compliant way.\",\"<b>Connect with MVP testers</b> and build long-term relationships via newsletters and social media.\"]},{\"text1\":\"EdTech startups have a wider range of funding options than e-commerce or other industries with no immediate public value. Here are a few ideas that startup founders can use to fund development and product maintenance:\",\"list\":[\"<b>Crowdfunding</b> — a lot of educational projects and materials were successfully backed by contributors on Kickstarter or Indiegogo.\",\"<b>Build connections with investors</b> who understand the market and educate those who don’t. Make leveraging connections with VC firms that fund EdTech projects (Emerge Education, Owl Ventures, and others) while simultaneously publishing blog posts and white papers that introduce new investors to the market and encourage them to get on board by investing in your startup.\",\"<b>Grants and government-backed programs.</b> Local governments and NGOs are big on funding innovative education startups. Also, platforms like the <a href='http://nesta.org.uk/project/edtech-innovation-fund/?__cf_chl_captcha_tk__=19c1be6c764f0b24b26ccfdf977053a039a56a6f-1624522894-0-Aajqk8Jxv4_r0F-_6gUa54XWC8zhEawoiYrN1Q0C83MNtTQJI-DufkSIPNzEgdmt5Ylf5xZk5NxLWPglLeVmG0tjTf5YN7UttCXJRpPHwZUo_bzlNzUpBpDJqssUmKk5g7UFgeHkZnwUrKajX_YMS0fOgT7PvwlbVItMr2NmiN7vw6rGUax1OK9BW9f875MRft3QWRF9BZ1A0b7sdUEL5FSoKp5LsVqRIDQUfgItHqE-t71anLOKjEzdGlvlfKOQDgsUYMre4eg9QweEOFktbnqVOFxtx4J0ogVnLyUwESstGVxPeqAvO0eZ4FCI-xZ-xHHIt7BjqcytUVhKFPfYvD256t4PYD--841eIISMqJf4CLTVcI6pre6pvVLa-43kNNhZlnHsQSNmd7Sdf8tsF_F6XYJpOgLJ5h0r3PnPdfOHWtRsgb7hkyfK-59-t5GJR70IwoHfc_vIAWfrQ4Y0DExTwMLUib0QMNxfyevli1bJ2pNRl4xKuog4WL0iZazHFa_bRbyb4Dz7CNaafK16jf65g13271k3XtFqimqV-fRntcX7i6Np73FEpHYVEYAe-UwlsfYi15imwmrhlwRZiFLaK5xMm54qtiP7Ule0aCdpJqAb45SPlbGZuZLoXM7rZiiXZ4uhvH0a8a7SsBeV_bA' target='_blank' rel='nofollow'>EdTech Innovation Fund</a> are an excellent starting point to get funding.\"]}],\"subtitles4\":{\"text1\":\"The EdTech market is on track for success; however, that doesn’t mean that all who have learned how to start an education startup company are entitled to a bright future by default. In fact, a large share of EdTech companies fail: some go down quietly, others <a href=https://www.edsurge.com/news/2016-06-12-we-shut-down-our-edtech-startup-here-s-what-we-learned target='_blank' rel='nofollow'>share their experiences publicly</a> with the goal of helping other startup teams.\",\"text2\":\"Tech startup founders can gather feedback from entrepreneurs who didn’t succeed and analyze the market to determine which misses made others fail. Here’s our take on the top reasons why EdTech companies don’t make it.\",\"list\":[\"<b>Poor market research.</b> This comes in many shapes — underestimating the power and market share of influential competitors, not staying up to date with government regulations, or failing to gauge demand for the future platform.\",\"<b>Lack of understanding of the educational system.</b> This is a two-fold problem: on the one hand, teams don’t know how to interact with teachers and students and struggle to engage with them personally. On the other hand, they lack the bigger picture view, and don’t know which regulatory bodies are in charge of education, which certifications professionals need to have to become qualified teachers, or the legislations that regulate data security and legitimacy in EdTech products.\",\"<b>Running out of cash.</b> By underestimating the complexity of Edtech startup infrastructure, business owners can unexpectedly fall short when it comes to budget. On the one hand, this can be fixed by precisely estimating time and financial expenditures, and, on the other, to look for cost reduction strategies.\",\"<b>The wrong development team.</b> A lot of people believe that a high-performance project is optional in EdTech, when, in fact, it is a must-have and should be backed with an experienced <a href=https://wtt-solutions.com/our-work target='_blank'>software development team</a>. Education institutions actually don’t have time to deal with steep learning curves, support founding teams through debugging, or manage security shortcomings — they are efficiency-oriented and will use the product only for as long as it helps meet their needs.\",\"<b>Getting outmatched.</b> To ensure you don’t miss out on a competitor that has acquired most of your prospective users, do your research in the beginning stages of your EdTech company development.\"]},\"subtitles5\":[\"EdTech is a booming sector, which is both fulfilling in terms of public goods and lucrative to ambitious startup founders. Developing an EdTech startup helps business owners leverage high investor interest and connect with policy-makers.\",\"The EdTech startup development process does have unique challenges, though: the need to deal with regulatory constraints, technical complexities, and ethical dilemmas.\",\"To solve these concerns, planning and strategizing are crucial. EdTech companies need a skilled tech team to help back innovative ideas with scalable infrastructures.\",\"At <a href=https://wtt-solutions.com/ target='_blank'>WTT Solutions</a>, we assist founders in building EdTech startups. Our team has years of experience in designing custom products for schools and universities, as well as learning-as-a-service platforms. To discuss your idea with the team, contact us through the form in the top right corner of this page!\"],\"questionsList\":[{\"question\":\"What is an EdTech startup?\",\"answer\":\"A startup can be considered an EdTech company if it develops solutions that improve classrooms, University-level learning, etc. The most common examples of EdTech startups are remote education tools, teacher-student marketplaces, and online course platforms.\"},{\"question\":\"Are EdTech startups actually profitable?\",\"answer\":\"Since remote education is one of the most lucrative industries in 2021, EdTech companies are highly lucrative. In fact, as of 2021, there are 27 unicorns (companies with a market valuation over $1 billion USD) among EdTech startups. Outschool, the newest on the market, <a href=https://techcrunch.com/2021/04/14/outschool-series-c-unicorn/ target='_blank' rel='nofollow'>joined the list</a> in April 2021.\"},{\"question\":\"What do I need to build an EdTech startup?\",\"answer\":\"Reliable technology is the backbone of a successful EdTech startup. That’s why startup founders need to hire a <a href=https://wtt-solutions.com/our-work target='_blank' rel='nofollow'>skilled development team</a> to build a secure and scalable product and maintain it after the release.\"},{\"question\":\"What are the biggest EdTech startups?\",\"answer\":\"At the moment, the key players in the industry are: Yuanfudao, Coursera, Udemy, Duolingo, and Udacity.\"}]},{\"id\":\"how-to-identify-marketing-efficiency-and-effectiveness\",\"title\":\"How to Identify Marketing Efficiency and Effectiveness\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"July 19, 2021\",\"metaTitle\":\"How to Identify Marketing Efficiency and Effectiveness | WTT Solutions\",\"metaDescription\":\"This is important to have a clear understanding of how to reach your projected results ✅ This article will help learn how to measure marketing effectiveness\",\"category\":[\"martech\"],\"timeToRead\":10,\"authorImg\":\"/images/blog/authors/ceo.png\",\"backgrounds\":{\"img\":\"/images/blog/howToIdentifyMarketingEfficiencyAndEffectiveness/img1.jpg\",\"preview\":\"/images/blog/howToIdentifyMarketingEfficiencyAndEffectiveness/img1Tabl.jpg\"},\"subtitles\":[{\"id\":1,\"title\":\"The Difference Between Efficiency and Effectiveness\"},{\"id\":2,\"title\":\"How to Identify Marketing Effectiveness?\"},{\"id\":3,\"title\":\"How to Identify Marketing Efficiency?\"},{\"id\":4,\"title\":\"Impact of Efficiency and Effectiveness in Your Marketing Strategy\"},{\"id\":5,\"title\":\"Low efficiency / Low effectiveness\",\"subtitle\":true},{\"id\":6,\"title\":\"High efficiency / Low effectiveness\",\"subtitle\":true},{\"id\":7,\"title\":\"Low efficiency / High effectiveness\",\"subtitle\":true},{\"id\":8,\"title\":\"High efficiency / High effectiveness\",\"subtitle\":true},{\"id\":9,\"title\":\"Our Successful Experience\"},{\"id\":10,\"title\":\"Conclusion\"},{\"id\":11,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"articleDescription\":[\"Global digitalization, together with new tools for data collection, has made marketing more powerful than ever. Marketers are now swimming in metrics to try and find the best research methods and approaches for estimating promotional campaigns, customer engagement, conversion rates, etc.\",\"The audience and niche value, however, are constantly changing. Thus, the ability to promptly adjust your marketing activities is vital — as is having an understanding of how to successfully navigate your business in the world of ultra-specific niches and emerging markets.\",\"This article will lay out some of the most important aspects and definitions regarding marketing efficiency and effectiveness, offer advice on how to measure marketing effectiveness and efficiency, and explain why it's extremely important to keep these two aspects balanced.\"],\"subtitles1\":{\"text1\":\"Today, there are so many easy-to-manipulate metrics out there that marketing teams sometimes make the mistake of focusing too heavily on <b>quantifiable</b> results alone. It may not be obvious to everyone, however:\",\"text2\":\"<i>Focusing on KPI in isolation and ignoring brand-related numbers can minimize your marketing effectiveness.</i>\",\"text3\":\"There are two major mistakes that marketers make with metrics related to profit generation:\",\"list\":[\"They view marketing effectiveness and efficiency as a whole and something that is inseparable from each other.\",\"They focus on efficiency first.\"],\"text4\":\"If those two statements sound familiar — chances are your company is having a difficult time measuring efficiency and effectiveness in marketing. So what do these characteristics actually mean?\",\"textBlok1\":{\"title\":\"MARKETING EFFECTIVENESS\",\"text\":\"<i>The degree that shows how well your marketing strategy does at reaching short-term and long-term objectives and how it contributes to overall profitability.</i>\"},\"textBlok2\":{\"title\":\"MARKETING EFFICIENCY\",\"text\":\"<i>The measurable input/output ratio represents the results your company achieves with every dollar spent on current marketing campaigns, marketing department expenses included.</i>\"},\"title1\":[\"<i>The degree that shows how well your marketing strategy does at reaching short-term and long-term objectives and how it contributes to overall profitability.</i>\"],\"title2\":[\"<i>The measurable input/output ratio which represents the results your company achieves with every dollar spent on current marketing campaigns, marketing department expenses included.</i>\"],\"text5\":\"Now, after we sorted the definitions out, let's go over each of them in a bit more detail to finally figure out the main differences between effectiveness and efficiency in marketing management.\"},\"subtitles2\":{\"text1\":\"How your company’s marketing activities perform is ultimately measured by the profit they generate; however, forms of data collection are critical in supporting your current marketing efforts and planning ahead for future campaigns.\",\"text2\":\"At times, marketing effectiveness may be difficult for a business to fully understand and identify. A lot of information is based on non-quantifiable metrics that represent customer interactions with the company, along with brand positioning. These might include: \",\"textlist\":[\"Advertising approach in the niche\",\"The quality of the products or services\",\"Who the audience is\",\"The messages of the ad campaigns\",\"Communication quality\",\"Channels of distribution\",\"Price range\"],\"text3\":\"These points are important in understanding the visibility of your marketing, the interest of your targeted audience, and the likelihood that customers are going to interact continuously with your product or service. In regular situations, marketing effectiveness may be identified through exploring such key metrics as:\",\"textlist1\":[\"<b>Market share:</b> The total percentage of the market that your company commands. It also represents the company's sales compared to the overall sales in the industry.\",\"<b>Brand strength:</b> The perceived value of your product or service by customers. It represents the 'wantability' that customers may have for your brand. This metric is normally measured by 'emotional data' received via customer surveys, quizzes, series of evaluation questions, etc.\",\"<b>Purchase intent:</b> Purchase intent is the probability that a customer will pull the trigger to make a purchase from you. This abstract metric is identified using a series of data points, including things like:\",[\"Customers’ past purchases\",\"Engagement time with the website\",\"Brand interactions\",\"Attendance at brand-organized events (seminars, webcasts, live presentations, etc.)\"],\"<b>Lifetime value:</b> A quantitative metric that represents the value of any one customer’s loyalty to a brand. This is calculated by taking the difference between lifetime revenue generated per customer and lifetime customer acquisition costs.\"],\"text4\":\"By using these metrics, you'll be able to understand not only where your marketing is working, but also where it is ineffective. You could also use these data points as a way of justifying a change in focus on the audience, or growth in directions towards new or more specific niche segments.\"},\"subtitles3\":{\"text1\":\"When figuring out how to identify marketing efficiency, you are basically trying to evaluate and measure the success of the marketing campaign you have in place. Here, determining which metrics are the most important makes all the difference for turning investments into revenue.\",\"text2\":\"There is also the chance that some data points are worth less than other metrics, meaning that analyzing marketing efficiency will require more of a holistic approach in the long run.\",\"text3\":\"With the advent of marketing technologies and ways to measure business performance, it is easy for businesses to start drowning in various metrics. In order to avoid that, teams start processing campaign data on the basis of the following marketing efficiency metrics:\",\"list\":[\"<b>Return on investment (ROI):</b> provides the output of marketing compared to the input of investments. To calculate this metric, marketers subtract the value of initial investments from the final net returns, divide the difference on the number of initial investments, and multiply the result by 100.\",\"<b>Cost of acquisition:</b> This metric denotes how much money needs to be spent in order for a sale to happen. The cost of acquisition can be also calculated by dividing the marketing expenses by the number of customers acquired. When talking about expenses, aside from ad campaigns budgets, these may also include:\",[\"Technical costs (software licenses),\",\"Salaries (sales and marketing teams)\",\"Promo materials production,\",\"Inventory upkeep, etc.\"],\"<b>Conversion rate:</b> Divide the number of customers who completed the desired action (i.e. bought something, downloaded a guide, subscribed to a newsletter, etc.) by the total number of individuals your ad has reached. This metric helps to compare the advertising efficiency across multiple promotional channels. \",\"<b>Clickthrough rate (CTR):</b> The percentage showing the number of visitors who clicked on an ad. In other words, it tells marketers how effective a single ad has been. Normally, CTR can be considered to be good if it sits in the range of 4-5%. Much lower CTRs may mean that your marketing campaign targets the wrong audience.\"],\"text4\":\"Efficiency in marketing is all about making your campaign work across all metrics. Some of these points may not be that representative on their own; however, when viewed holistically, and in relation to one another, can uplift your marketing efforts to help make cost-saving decisions in all areas of your strategy.\"},\"subtitles4\":{\"text1\":\"Many businesses claim that <b>effective</b> campaigns will naturally generate <b>efficient</b> outcomes; however, focusing on only one or the other creates an imbalance and distorts the real causes behind the performance of a particular strategy.\",\"text2\":\"The balance of efficiency and effectiveness in your marketing strategy can always be found in <i>attracting valuable customers with minimal investments</i>. Only by combining the two components together — efficiency and effectiveness — are businesses able to see the full picture.\",\"text3\":\"When you take a deep dive into effectiveness, you are looking for market insights, new niches, and potential groups of customers who are worth spending time to learn more about.\",\"text4\":\"The same is true about efficiency — you deep dive into possible excesses in your campaign's performance, research, planning, and other parts of your campaign strategy. \",\"text5\":\"Now, let’s look at this balancing act a little more carefully.\",\"titles\":[[\"You don’t want to be on the ‘low’ end with your marketing effectiveness and efficiency. Low efficiency and effectiveness mean that a business isn't effective at making money at all. \",\"If your cost analysis for a marketing campaign shows that your marketing isn’t meeting ROI goals, this is a sign of low effectiveness. The strategy isn’t generating revenue to meet projected goals, based on what you are spending.\",\"You might consider other audiences to advertise to or different marketing strategies. Trimming the fat (optimizing the company's expenses from the ground up) can also help you get closer to your ROI goals.\"],[\"High efficiency is an excellent step in the right direction for your marketing campaigns and planning. If everything you do with your marketing is 'air-tight' with little excessive spending or risk, your team is running a highly efficient campaign.\",\"Since you’re not burning tons of excess cash on your marketing, this is an excellent place for thought-out experiments and further business growth.\",\"You may even be in this marketing model of high efficiency and low effectiveness because you are testing the waters for potential markets and looking for the right formula to create high effectiveness without using too many resources\"],[\"Some groups think spending more is the best marketing approach. Sure, if you own the market, then there isn’t anyone else to compete with. But is this always the case? \",\"For example, if you spend thousands on an ad campaign that loses money in the long run, you may still take a large portion of the market share, or have plenty of brand presence — these metrics will all point to a highly effective campaign, at first glance.\",\"However, focusing solely on the outputs will lead to poor or low efficiency. From a long-term perspective, you will more than likely overspend on marketing. Thus, such a tactic isn’t worth keeping around and should be eliminated. \"],[\"This is the best place for your marketing team and company to be. High effectiveness and high efficiency are optimal for marketing because you are spending a <b>minimal</b> amount and getting the <b>highest</b> yield or results from your investments.\",\"In this model, your marketing campaigns are designed to target maximum impact on specific audiences while using a minimum number of resources to engage those customer audiences. There are usually high rates and percentages of conversion, customer value, and ROI.\",\"<i>If you are in this model you have found customers who tend to invest more time and money in your products and services.</i>\"]],\"title1\":[[\"You don’t want to be on the ‘low’ end with your marketing effectiveness and efficiency. Low efficiency and effectiveness mean that a business isn't effective at making money at all. \",\"If your cost analysis for a marketing campaign shows that your marketing isn’t meeting ROI goals, this is a sign of low effectiveness. The strategy isn’t generating revenue to meet projected goals, based on what you are spending.\",\"You might consider other audiences to advertise to or different marketing strategies. Trimming the fat (optimizing company's expenses from the ground up) can also help you get closer to your ROI goals.\"]],\"title2\":[[\"High efficiency is an excellent step in the right direction for your marketing campaigns and planning. If everything you do with your marketing is 'air-tight' with little excessive spending or risk, your team is running a highly efficient campaign.\",\"Since you’re not burning tons of excessive cash on your marketing, this is an excellent place for thought-out experiments and further business growth.\",\"You may even be in this marketing model of high efficiency and low effectiveness because you are testing the waters for potential markets and looking for the right formula to create high effectiveness without using too many resources\"]],\"title3\":[[\"Some groups think spending more is the best marketing approach. Sure, if you own the market, then there isn’t anyone else to compete with. But is this always the case? \",\"For example, if you spend thousands on an ad campaign that loses money in the long run, you may still take a large portion of the market share, or have plenty of brand presence — these metrics will all point to a highly effective campaign, at first glance.\",\"However, focusing solely on the outputs will lead to poor or low efficiency. From a long-term perspective, you will more than likely overspend on marketing. Thus, such a tactic isn’t worth keeping around and should be eliminated. \"]],\"title4\":[[\"This is the best place for your marketing team and company to be. High effectiveness and high efficiency are optimal for marketing because you are spending a <b>minimal</b> amount and getting the <b>highest</b> yield or results from your investments.\",\"In this model, your marketing campaigns are designed to target maximum impact on specific audiences while using a minimum number of resources to engage those customer audiences. There are usually high rates and percentages of conversion, customer value, and ROI.\",\"<i>If you are in this model you have found customers who tend to invest more time and money in your products and services.</i>\"]]},\"subtitles5\":[\"Managing and interpreting your metrics may be tough on your own. Looking at your marketing strategy takes reliable software that can interpret your data and a team of professionals who can deliver marketing solutions in a timely manner — and within your budget.\",\"At WTT Solutions, we have the required experience to help businesses create dedicated systems that will assist them in getting highly effective and efficient outcomes through marketing. \",\"One of the products we developed for our client is called <b>SEO Bangkok</b> — a <a href='https://wtt-solutions.com/martech'>Martech</a> solution for generating, scoring, and building relationships with leads. Our team developed this tool from scratch, offered ways to integrate it with existing APIs, streamlined the data collection process, and ensured that all parts of the final product work perfectly. \"],\"subtitles6\":[\"A company cannot simply rely on effectiveness or efficiency alone. These two aspects of your marketing and sales approach need to work in harmony — and it is best to work with a professional development partner that will assist you in reaching the highest potential for marketing effectiveness and efficiency. \",\"Today, modern digital tools that serve as the building blocks for a successful marketing campaign are common practice worldwide. Automation, BI, and AI, along with data analysis, help teams quickly identify marketing effectiveness and efficiency, target the most relevant audiences, and convert leads faster.\",\"If you are ready to start working with advanced digital technologies to boost your business, or simply want to get more information on how to identify marketing effectiveness and efficiency, contact our team today. We have the expertise to help you run your marketing activities on any scale.\",\"Fill out the form in the top right corner of this page and one of our professional team members will contact you to answer all your questions. WTT Solutions is ready to help you get organized and be efficient and effective for all of your upcoming marketing campaigns!\"],\"questionsList\":[{\"question\":\"Are there any challenges when it comes to measuring marketing effectiveness? \",\"answer\":\"All possible challenges connected to marketing effectiveness normally refer to the richness and quality of data you collect, data frequency, and methodologies used for data assessment.\"},{\"question\":\"How do I improve marketing effectiveness and efficiency in my business?\",\"answer\":\"Start with baseline measurements regarding market conditions and the current state of your marketing strategy. As you measure, plan out new tactics for your campaigns to increase effectiveness and efficiency and execute these things in real-time.\"},{\"question\":\"How do I identify whether my marketing strategy is effective enough?\",\"answer\":\"To identify marketing effectiveness, determine whether 1) your ads are targeted enough for specific audiences, 2) your marketing messages resonate with the audience’s needs and interests, and 3) ads are delivered to the prospective customers at an optimal time (i.e. when clients are most ready to consume them).\"},{\"question\":\"What should I focus more on effectiveness or efficiency in my marketing?\",\"answer\":\"Both effectiveness and efficiency are equally important for a well-balanced approach. Focusing on only one of these alone will make your approach to interpreting data incomplete and ineffective.\"}]},{\"id\":\"how-to-implement-data-security-training-for-employeess\",\"title\":\"How to Implement Data Security Training for Employees in Your Company\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"July 23, 2021\",\"metaTitle\":\"How to Implement Data Security Training for Employees | WTT Solutions\",\"metaDescription\":\"Data security awareness is crucial for organization, regardless of its size and market niche ✅ Read this article to learn how to deploy data security training\",\"category\":[\"hrtech\"],\"timeToRead\":10,\"authorImg\":\"/images/blog/authors/ceo.png\",\"backgrounds\":{\"img\":\"/images/blog/howToImplementDataSecurity/img1.jpg\",\"preview\":\"/images/blog/howToImplementDataSecurity/img1Tabl.jpg\"},\"subtitles\":[{\"id\":1,\"title\":\"What is Data Security?\"},{\"id\":2,\"title\":\"Importance of Cyber and Data Security Training for Employees\"},{\"id\":3,\"title\":\"How to Implement Employee Data Security Awareness\"},{\"id\":4,\"title\":\"1. Set up security policies and procedures\",\"subtitle\":true},{\"id\":5,\"title\":\"2. Explore common data security threats\",\"subtitle\":true},{\"id\":6,\"title\":\"3. Understand which security tools your company needs\",\"subtitle\":true},{\"id\":7,\"title\":\"4. Educate employees on how to manage data and follow security policies\",\"subtitle\":true},{\"id\":8,\"title\":\"5. Educate employees on compliance mandates\",\"subtitle\":true},{\"id\":9,\"title\":\"6. Prepare employees to respond to a data breaches\",\"subtitle\":true},{\"id\":10,\"title\":\"7. Hold training sessions regular\",\"subtitle\":true},{\"id\":11,\"title\":\"Conclusion\"},{\"id\":12,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"articleDescription\":[\"Information protection is a key priority for any organization that works with personal, financial, or medical data. While it's important to use modern solutions to ensure there are no gaps in security, educating your employees on how to follow digital defense standards and policy procedures is of even greater importance.\",\"In this article, we'll go over the importance of data security awareness training, demonstrate how to implement an employee data security awareness training approach, and examine some aspects of the cybersecurity industry to help you get a fuller picture of the potential threats that hackers may send your way.\"],\"subtitles1\":{\"text1\":\"The term Data Security has gathered — under one umbrella — all the processes and practices aimed at protecting IT systems from malicious attacks and unauthorized third-party access. Aside from logical and administrative protocols, data security also includes physical techniques to limit access to or the manipulation of data.\",\"text2\":\"Cybersecurity breaches account for serious financial losses incurred by businesses worldwide — <a href=https://www.ibm.com/security/digital-assets/cost-data-breach-report/#/ target='_blank' rel='nofollow'>according to IBM</a>, the average cost of a data breach in 2020 has reached the mark of <b>$3.86M</b>. <a href=https://www.statista.com/statistics/273550/data-breaches-recorded-in-the-united-states-by-number-of-breaches-and-records-exposed/ target='_blank' rel='nofollow'>According to Statista</a>, in the last year in the US alone there were 1,001 cases of data breaches, which exposed <b>155.8M</b> records in total. This is only a small sample of statistics to prove that privacy and security training for employees shouldn't be overlooked, especially in a world that is currently set in 'remote' mode.\"},\"subtitles2\":{\"text1\":\"Aside from direct financial damage, cyber attackers harm company reputations, lowering clients’ trust levels and loyalty. In the long run, the consequences of a serious data breach can ruin the brand image completely.\",\"text2\":\"This is why it is of the utmost importance to keep your data security system up-to-date and deploy data security training to ensure that employees are aware of the risks associated with inadequate data management practices.\",\"text3\":\"Summing it up, holding data security training is important for the following reasons:\",\"textlist\":[\"<b>Cybercrime is only getting stronger</b> — and ongoing pandemic has caused many companies to go fully remote, which has dramatically expanded the attack surface and methods that hackers use in cyberspace to breach individual devices.\",\"<b>Sensitive business information needs to be protected</b> — employee records, customer information, transactions, healthcare, and bank account data are valuable assets for fraudsters. The hacking of this data, however, may result in huge legal implications for a company.\",\"<b>Customer trust is hard to gain and easy to lose</b> — in a highly competitive digital environment, reputation means everything and, once lost, is hard to recover. According to <a href=https://www.forbes.com/sites/forbestechcouncil/2017/12/08/mind-the-trust-gap-how-companies-can-retain-customers-after-a-security-breach/ target='_blank' rel='nofollow'>Forbes</a>, up to 80% of clients may lose trust in a brand after their data is leaked.\",\"<b>Security policies save companies tons of money</b> — the costs of data breaches are becoming greater every day. As for the payoffs, this is where we get impressive figures that range from $100K+ (which companies pay hackers) to tens of millions dollars that may come in the form of legal fines.\"]},\"subtitles3\":{\"titles\":[[\"When it comes to data security, documentation means everything. The more time your company dedicates to detailing data policies and safety protocols, the better prepared your team will be for any potential cybersecurity threats.\",\"Normally, security policies cover guidelines on access control, identification/authentication, data classification, encryption, remote use, backups, an employee on/off-boarding process, etc.\",\"<i>In other words, documentation on security standards defines the <b>who</b>, <b>what</b>, and <b>why</b> with regards to the desired behavior of individuals and departments within a company.</i>\",\"A established information security policy helps to ensure that the organization complies with the most common data safety regulations. For data privacy and security training sessions, data policy documentation also serves as training material — so basically, you're “killing two birds with one stone” here.\"],[\"Familiarizing yourself with the most common types of cyberattacks is especially important for businesses and large organizations that rely on dozens of devices to run their business.\",\"Large volumes of private and business data — that are being processed and exchanged by employees, daily — are under constant threat from malware, ransomware, viruses, worms, etc. Here are the three most popular types of cyber threats that businesses owners should account for:\",[\"<b>Malware</b> — Malicious software that infects user devices and records every action that user makes. Malware comes in different forms and formats; however, the main goal always stays the same: getting administrative-level access to a device.\",\"<b>Phishing</b> — a type of cyber attack where hackers send a victim an email or text message to trick them into revealing personal or business information by clicking a link, filling out an online form, etc. The main danger with phishing messages is that they may imitate the style and format of the company's emails, making employees believe they are messaged by the manager or supervisor.\",\"<b>Password attack</b> — combines several techniques that hackers commonly use to get access to user passwords. The popularity of such practices comes from the fact that many users prefer to reuse their passwords across different platforms, making their accounts easy targets for attackers.\"],\"<i>This is only a brief description of the most common cybersecurity threats and not a complete list of all possible types. For more information, please <a href=https://wtt-solutions.com/get-started target='_blank' rel='nofollow'>contact</a> us directly.</i>\"],[\"While holding data security seminars makes your team aware of current security policies, giving them proper tools ensures they will be able to act effectively and directly apply the knowledge they get.\",\"Aside from that, even the best data awareness training won't make your network safe enough — unless it is supported by relevant hardware and software security solutions. So ensuring that your data security system isn't missing any important component is an integral part of any data awareness program.\",\"To protect company data, businesses frequently use such tools as firewalls, access control systems, anomaly detection, intrusion prevention systems, email security, endpoint security, anti-malware software, data loss prevention technologies, etc.\"],[\"When thinking about security breaches and following data leaks, it's important to keep in mind that we're all humans. While firewalls, locks, and the latest technologies hugely contribute to data protection, there's always a possibility for human error.\",\"We aren't suggesting you blame employees, though. It is what it is, and none of us is safe from making errors. Implementing data security training sessions on data protection rules and security policies, however, can help you reduce possible risks to a minimum.\",\"Here, employees should be educated on password management, technology usage, data handling procedures, incident response strategies, and best data security practices.\",\"<i>There's a simple rule to help you figure out what information to include in your training: if a data policy includes your employees — they need to know about it.</i>\"],[\"A separate part of training is educating your team on data security compliance standards. These are the regulations that a business is expected to follow to guarantee that the data it processes is protected from theft, misuse, or loss.\",\"Normally, such regulations come in the form of industry, state, or federal-lever statements issued by the government. As of today, there are four data compliance standards that a business should be aware of:\",[\"<b>GDPR</b> — the European General Data Protection Regulation standard that defines a user's right to know what types of data companies receive on them and how they process private data.\",\"<b>HIPAA</b> — a Health Insurance Portability and Accountability Act issued by the US government for local organizations that deal with healthcare data. This standard defines safety protocols and requirements regarding the use of individual medical data, to ensure all sensitive information stays safe and protected.\",\"<b>PCI DSS</b> — a Payment Card Industry Data Security Standard defines the rules that companies have to be compliant with when dealing with cardholder data.\",\"<b>CCPA</b> — a California Consumer Privacy Act is commonly described as a US equivalent for the GDPR. In some areas, it is not as demanding as the European standard (giving a broader view on the definition of <b>private data</b>, for example) while in others, however, it becomes tougher than GDPR.\"]],[\"As we have already figured out, due to obvious reasons it's impossible to eliminate the possibility of a data breach. Thus, your employees must always be prepared for the worst-case scenario and act adequately to the situation.\",\"As soon as a breach happens, the incident response plan has to be put into action. Employees should be well aware of their roles and responsibilities, the event must be investigated ASAP, and the network/data recovery process needs to be set up right away. The customers have to be notified immediately about the breach, as well.\"],[\"With the evolution of the digital world, cyberattackers have come out with more advanced methods for stealing consumer data. For businesses, this means that they have to have their fingers on the pulse and monitor the market for new updates and data security techniques, regularly. The same goes for training sessions — what is new today will most probably become obsolete tomorrow.\",\"Normally, organizations conduct data security awareness training for employees at least once in 4-6 months, or when an important update shows up in the news. Another good practice is to carry out data security training for employees upon hiring.\",\"Keep in mind though that putting your team through such training more often — weekly or monthly — will likely lower the efficiency and the ability to absorb new information.\"]]},\"subtitles4\":[\"Talking about data security, there is no magic behind it or a secret button that will be able to make your system bulletproof. Instead, data security — on par with data awareness training — should be perceived as an ongoing pursuit through which the company and its employees will get educated on current cybersecurity trends, new challenges and methods to overcome them, be given data security tips, etc.\",\"<i>If you want to get more information on how to implement data security awareness or simply receive professional help with your IT security solution, contact our team today.</i>\",\"At WTT-Solutions, we have years of experience developing software projects across a wide range of niches and markets — <a href='https://wtt-solutions.com/edtech'>EdTech</a>, FinTech, MarTech, etc. Our experts effectively utilize all common programming languages, tools, and frameworks to deliver a product that matches the set requirements in full. Fill out our feedback form in the top right corner of this page and one of our managers will get in touch with you shortly!\"],\"questionsList\":[{\"question\":\"How long must data security awareness training be?\",\"answer\":\"There are no particular requirements set for the length of data security awareness training sessions. Our recommendation would be to focus on the content first, not the length of training. Take into account though, that human attention span is short, so avoid bombarding employees with tons of information. Keep sessions short, brief, and to the point.\"},{\"question\":\"How much does data security training cost?\",\"answer\":\"If training is carried out with the help of a company's internal resources, then training costs will boil down to the number of hours that involve training specialists. If a company decides to opt for paid cybersecurity programs or courses instead, then the costs will start from $1,000 and can go up to tens of thousands of dollars per training.\"},{\"question\":\"Does it mean that, with adequate training, all possible data security threats can be eliminated?\",\"answer\":\"Cyber threats are constantly evolving so, unfortunately, there's no way to eliminate cybersecurity attacks and threats. Proper data security awareness training, however, serves as a way to greatly reduce these risks, as it provides employees with the knowledge on how to act and react in emergencies situations.\"},{\"question\":\"Can we predict a cybersecurity threat instead of responding to it after it is identified?\",\"answer\":\"Predicting cyberattacks is nearly impossible. The more realistic plan is to make them more manageable with the help of dedicated tools that can detect threats, and train employees to know how to respond quickly to security issues.\"}]},{\"id\":\"advantages-and-disadvantages-of-elearning\",\"title\":\"Advantages and Disadvantages of eLearning for Corporate Training\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"August 27, 2021\",\"metaTitle\":\"Advantages and Disadvantages of Corporate eLearning | WTT Solutions\",\"metaDescription\":\"What is corporate eLearning? What are its advantages and disadvantages? Read this article to find out all the pros and cons of corporate eLearning ✅\",\"category\":[\"edtech\"],\"timeToRead\":10,\"authorImg\":\"/images/blog/authors/ceo.png\",\"backgrounds\":{\"img\":\"/images/blog/AdvantagesDisadvantagesELearning/img1.jpg\",\"preview\":\"/images/blog/AdvantagesDisadvantagesELearning/img1Tabl.jpg\"},\"subtitles\":[{\"id\":1,\"title\":\"What Is eLearning\"},{\"id\":2,\"title\":\"Why Corporate eLeaning is Important for Employee Training\"},{\"id\":3,\"title\":\"What are the Advantages of Corporate eLearning?\"},{\"id\":4,\"title\":\"Standardizes company's policies\",\"subtitle\":true},{\"id\":5,\"title\":\"Available 24/7\",\"subtitle\":true},{\"id\":6,\"title\":\"It's Scalable\",\"subtitle\":true},{\"id\":7,\"title\":\"It's Cost-effective\",\"subtitle\":true},{\"id\":8,\"title\":\"What are the Disadvantages of Corporate eLearning?\"},{\"id\":9,\"title\":\"Lacks live interaction with the instructor\",\"subtitle\":true},{\"id\":10,\"title\":\"Does not offer hands-on experience\",\"subtitle\":true},{\"id\":11,\"title\":\"Does not perfectly appeal to all learning styles\",\"subtitle\":true},{\"id\":12,\"title\":\"Lacks control\",\"subtitle\":true},{\"id\":13,\"title\":\"Do The Advantages Of Corporate eLearning Outweigh The Disadvantages?\"},{\"id\":14,\"title\":\"Conclusion\"},{\"id\":15,\"title\":\"FAQ\"}],\"faqInTableOfContents\":true,\"articleDescription\":[\"When it comes to corporate training, lots of businesses prefer to stick with old, 'tried-and-true' methods that involve offline workshops, seminars, conferences, etc. And while such an approach embeds quite well in the 'knowledge transfer' paradigm, in terms of what the educational industry and digital technologies offer businesses today, it may be not that efficient.\",\"That's why in this article we want to dwell on a topic of eLearning (or online learning), show you what makes it different from traditional forms of education, as well as outline the advantages and disadvantages of corporate eLearning.\"],\"subtitles1\":{\"text1\":\"Simply put, an eLearning is a method of delivery of learning materials or courses with the help of digital technologies. Here, the knowledge can be delivered to large audiences in different geographical locations simultaneously — via computers, tablets, mobile phones and other electronic devices (like touch screen whiteboards) that are connected to the Internet.\",\"text2\":\"While being primarily targeted at educational organizations in its early stages in 2000s, today eLearning is used across a variety of sectors and business areas. Speaking of the organization’s training, the main goal of the eLearning system there is to make sure that employees get the knowledge needed to perform a specific operation or undertake a particular role.\",\"text3\":\"Corporate eLearning can be delivered to the employees in different ways, through LMSs, explainer videos, web-based and computer-based training (WBT, CBT correspondingly), individual microlearning modules and via ILT (Instructor-led training).\",\"text4\":\"The current state of eLearning market clearly proves that large companies and SMEs are highly interested in adopting eLearning programs and courses:\",\"list\":[\"<b>40% of Fortune 500 companies</b> take advantage of eLearning solutions\",\"<b>93% of companies</b> plan to adopt eLearning tools in their businesses\",\"<b>42% of companies</b> that utilize eLearning generate higher income\",\"Adopting eLearning helps to increase employee productivity <b>up to 25%</b>\",\"Corporate eLearning market is expected to surpass the<b> $38 billion</b> mark by 2024\"],\"text5\":\"<i>— According to Findstack and Business Wire.</i>\"},\"subtitles2\":{\"text1\":\"To make sure that your employees keep up with all updates regarding the company's technology infrastructure, policy base, industry, and regulatory compliance it's important to regularly hold training sessions, or put your staff through educational courses.\",\"text2\":\"<i>Seems to be no big deal here, right? You gather a team and conduct the needed training.</i>\",\"text3\":\"However, when you start digging a bit deeper into the subject a bunch of issues arise:\",\"list\":[\"How will I organize the training?\",\"How to schedule training right so it won't hurt the working schedule of a team?\",\"How long should the training session be?\",\"How much will it cost?\"],\"text4\":\"If we take a look at this situation from the perspective of eLearning and online education, all the organizational problems simply fade away. All you need to provide your employees with is educational materials (given that they have access to the Internet and a device to access the eLearning program).\",\"text5\":\"<i>The simplicity of implementation makes eLearning programs especially efficient when it comes to corporate training.</i>\",\"text6\":\"And not only that — let's check a few other eLearning benefits for corporate training.\"},\"subtitles3\":[{\"text1\":\"One of the worst things that can happen to any business is an uncontrolled fragmentation of processes, when different departments within a company define their own area or responsibility and come up with their own ways to handle issues.\",\"text2\":\"Business fragmentation is actually inevitable (especially for the large companies), and it's a normal practice; however, within an uncontrolled environment it never goes well — instead of splitting a business model into smaller fragments with their own clear logic, the company finds itself in the middle of a chaotic storm where no one knows where the business is headed.\",\"text3\":\"By adopting eLearning methods and solutions companies can not only deliver the needed knowledge to their employees, but also set up a policy base — where all the business processes will be outlined and explained. This will help to flourish corporate responsibility, and establish clear standards for each and every employee in a company. \"},{\"text1\":\"In spite of the traditional training sessions that are normally held offline only — at a particular time/date/location — eLearning systems provide employees with 24/7 access to course materials.\",\"text2\":\"In fact, this aspect becomes a determining factor for those employees whose tight schedule doesn't allow to take training sessions at a specific time. So instead of forcing employees to adjust their schedule (which will most probably damage their productivity) so that they can attend in-person training, eLearning gives them the possibility to learn remotely, at a pace that is comfortable for them.\"},{\"text1\":\"As the company grows, the needs and requirements regarding employee skills evolve as well. In these conditions, the 'one-size-fits-all' approach to workplace training won't work and the existing practices will become obsolete sufficiently fast.\",\"text2\":\"If we look at this problem from the perspective of conventional training, there's almost no way how you can effectively scale the in-person learning sessions — getting your team once a week or month to the training room may work for small companies, but what will you do if you need to train 1000 employees?\",\"text3\":\"With eLearning, on the contrary, employees are not obliged to visit training locations to take the course or receive an important update (on product functionality, changes in service policy, etc). The course materials can be updated or modified in real-time and automatically delivered to the staff. And no matter whether you're dealing with 50 learners (employees), or 50,000 learners — modern <a href=https://wtt-solutions.com/edtech target='_blank'>Ed-tech</a> systems can be easily adjusted to your current needs.\",\"text4\":\"This is best showcased by the <b>Toyota</b> experience — integrating an interactive video solution helped the company to improve its corporate training program (delivered to 20,000 employees across Europe), overcome inconsistency in customer service and ease the onboarding process for new employees.\"},{\"text1\":\"By opting for web-based learning companies are able to hugely save up on the associated expenses. eLearning eliminates trainer's fees and costs related to office space reservation, travel, catering, print materials, etc. A good example could be PepsiCo UK who after developing an online training programme for internal education was able to eliminate all live workshops and thus drastically save up on the associated costs and logistical challenges.\",\"text2\":\"Moreover, in contrast to the traditional in-person training, the eLearning sessions can be held over and over again without any additional investments made. And speaking about investments, according to the research done by IBM, with each <b>dollar</b> spent on eLearning, companies can generate up to <b>$30</b> in improved productivity.\"}],\"subtitles4\":[{\"text1\":\"One of the main advantages of corporate eLearning — the ability to quickly deliver knowledge to your team without an in-person supervision — is its one of the biggest disadvantages at the same time. Some employees would appreciate the ability to learn independently while others may struggle to progress through the training programme on their own.\",\"text2\":\"With eLearning, employees don't get to sit with the supervisor, ask questions regarding the course or clarify interpretations. Also, the eLearning approach may not work for improving some specific skills — the closest example would be communication skills that are normally required for a Sales Manager role.\",\"text3\":\"The lack of face-to-face interaction might, to some extent, be mitigated if the company implements the blended learning approach, meaning the employees will undergo training online and get to interact with a trainer a few times throughout a course (in-person or virtually.)\"},{\"text1\":\"Getting back to the example from the paragraph above — one can hardly imagine a professional Sales Manager who obtained their expertise through online courses alone, without 'going into the field' and communicating with clients.\",\"text2\":\"When going through the elearning programs, most of their time, employees will spend reading articles, listening podcasts, watching videos, taking tests, meaning there will be no hands-on, or practical experience with the subject.\",\"text3\":\"For establishing procedures and educating teams on the company's policies the eLearing systems work perfectly; however, when it comes to client relations or principles of work of technical products — doing it 'in theory' only won't be that effective probably.\"},{\"text1\":\"Every person has its own learning style that affects how they perceive and process the information they are presented to. Despite the vast variety of interpretations and categories, the learning style of an employee will normally fall into one of three groups:\",\"list\":[\"<b>Visual group</b> — those who learn best through visual information (videos, illustrations, charts, graphs, presentations etc.)\",\"<b>Auditory group</b> — those who learn best through group discussion and conversations.\",\"<b>Kinesthetic group</b> — those who learn best through a hands-on experience or are 'learning-by-doing' kind of an audience. \"],\"text2\":\"The eLearning systems can perfectly meet the needs of <b>visual</b> learners and partially suit the <b>auditory</b> group via blended learning; however, when it comes to the third group of learners, who prefers demonstration over explanation, here the number of options is limited to AR and VR (plus explainer videos to a particular extent). These options may turn out not to be that cost effective.\"},{\"text1\":\"Speaking of the pros and cons of corporate elearning, even the most advanced eLearning course or system cannot guarantee you a successful knowledge delivery. With online learning, employees not only take a 'learner' role, but the 'supervisor' role as well. Thus, there's always a risk that the learners will go through a course without paying needed attention or simply skipping some of its modules.\",\"text2\":\"Another challenge with learning control comes in the form of distractions that employees may experience. During in-person training this issue can be completely eliminated as learners are placed in a controlled environment and stay under an ongoing supervision.\",\"text3\":\"In case of eLearning, this can be avoided with the help of dedicated proctoring tools that will monitor employee activity whilst course completion and make sure they stay on-task with the training program.\"}],\"subtitles5\":[\"As with any method or approach, there are pros and cons of using eLearning in corporate training. However, the benefits of corporate elearning for employees fully overshadow all disadvantages.\",\"The possible drawbacks that come with online education are nothing compared to the amounts of time and money that eLearning helps a company to save. For example, <b>Monge</b> — a major consumer goods retail chain in Central America — was able to cut down training costs in half after introducing in 2014 a digital training platform to educate 2,500 sales teams across 6 countries. Aside from that, the efficiency of digital education allows to deliver knowledge faster and without any damage dealt to the working schedule.\",\"As to the disadvantages of corporate eLearning, with the right approach and effective system — created by a professional development partner — all risks can be easily controlled or mitigated.\"],\"subtitles6\":[\"In today's fast-moving world keeping up with emerging trends and challenges means everything. New technologies and training solutions are being developed, changing the way companies approach their daily operations.\",\"When following market trends, it's very important not to get lost and make sure your team stays well-aware of every aspect of new technology, policy or role requirements update. And this is where eLearning tools and systems can assist you.\",\"If you want to get more information on benefits and limitations of corporate elearning, or create a custom eLearning solution, contact us. At WTT-Solutions we've been developing edTech software and eLearning tools for 5+ years, have the needed expertise and a team of professional developers to get your project up and running on time and budget. Hit the 'get in touch' button in the top right corner of this page, fill a form, and one of our managers will get back to you to provide a FREE consultation!\"],\"questionsList\":[{\"question\":\"How long will it take to see results after implementing eLearning solutions and procedures in a company?\",\"answer\":\"If the eLearning system is developed correctly, and performance goals are set right, the first measurable results can be obtained within the first few months after implementing an eLearning program.\"},{\"question\":\"What are the costs of creating a corporate eLearning program?\",\"answer\":\"If we talk about eLearning courses, the cost of these depends on the length and the type of content that is created (video, text, illustrations, etc). The production agencies normally charge somewhere between $1,000-2,000 per minute of an eLearning course production. If we talk about eLearning software, here the budget will depend on the number of modules and components that will be present in a final product. For more information in that regard, please, contact our team.\"},{\"question\":\"What are the types of corporate eLearning training programs?\",\"answer\":\"Corporate eLearning programs are normally developed to cover one of seven areas of business, which are: onboarding, product training, customer service, mandatory compliance training, technology, processes/procedures, and soft skills.\"},{\"question\":\"How do I know if my eLearing system is effective enough?\",\"answer\":\"In order to identify whether an established eLearning system is effective or not, a business owner should answer a few questions: 1) Are my employees satisfied with training? 2) Did eLearning change their behavior? 3) Which areas of their performance were improved due to this program? 4) What ROI do I get with my existing eLearning program? \"}]},{\"id\":\"wtt-solutions-holds-its-star-overall-rating-streak-on-clutch\",\"title\":\"WTT Solutions Holds Its 5-Star Overall Rating Streak on Clutch across 20 Reviews\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"August 31, 2021\",\"metaTitle\":\"WTT Solutions Holds Its 5-Star Overall Rating Streak on Clutch\",\"metaDescription\":\"WTT Solutions uses only the best practices for custom software development solutions and design ✅ We hold a 5-Star Rating Streak on Clutch across 20 Reviews\",\"category\":[\"insights\"],\"timeToRead\":4,\"authorImg\":\"/images/blog/authors/ceo.png\",\"backgrounds\":{\"img\":\"/images/blog/WTTSolutionsHoldsItsStar/img1.jpg\",\"preview\":\"/images/blog/WTTSolutionsHoldsItsStar/img1Tabl.jpg\"},\"subtitles\":[],\"faqInTableOfContents\":false,\"isNoFaq\":true,\"isNoTableOfContents\":true,\"text1\":[\"More and more businesses have been exploring the development of mobile applications and offering them as products or services. Undeniably, the value of mobile apps has skyrocketed since the introduction of the smartphone. As the mobile industry continues to grow and users find an increase in the intrinsic return of mobile software, businesses will have to fully explore the <a href='https://www.entrepreneur.com/article/231145' target='_blank' rel='nofollow'>fundamentals of building a successful mobile app.</a>\",\"At WTT Solutions, we provide all types of businesses with a helping hand in their development process. We build web, mobile, and software solutions that empower your organization with the end-user in mind. As such, we tailor the experience central to your core business function.\",\"Our years of service have shaped our approach to development to what it is today. That said, it would have been impossible to discover what makes our solutions successful if it weren’t for our clients. Thus, we’re excited to see our catalog of Clutch reviews consistently grow over time.\",\"If you didn’t already know, Clutch is B2B ratings and reviews platform based in Washington, DC. They evaluate technology service and solutions companies based on the quality of work, thought leadership, and client reviews. A rapidly expanding startup, Clutch has become the go-to resource in the agency space. Their review process is reliable and transparent, and we’re grateful to those of our clients who have taken the time to provide feedback.\",\"The latest addition to our <a href='https://clutch.co/profile/wtt-solutions?sort_by=date_DESC&project_cost=&service_provided=&review_type=#reviews' target='_blank' rel='nofollow'>list of ratings</a> is from the Founder and CEO of Lynxit LLC, a communications consulting firm.\"],\"text2\":[\"In his interview with the B2B website, Colin Cardenaz shed light on the ongoing mobile app development project they’ve engaged us for. According to him, the main objective of this partnership is to build a mobile app with a high-fidelity front-end design.\",\"<i>“I initially hired another design company here in the states to create the high-fidelity screens of the app, but they were so slow and put me on the backburner. <br /><br />Switching to WTT Solutions graphic designer was the best decision.”</i>\",\"While our engagement still has a long way to go, we’re happy to announce that the client is delighted with the results thus far.\",\"WTT Solutions is featured on <a href='https://themanifest.com/ua/software-development/flutter/companies/kyiv#wttsolutions' target='_blank' rel='nofollow'>The Manifest, a resource for B2B firms</a> to improve their market research.\",\"If you’re interested in our development services, <a href=https://wtt-solutions.com/get-started target='_blank'>send us your inquiry</a> right away!\"],\"questionsList\":[]},{\"id\":\"how-to-design-elearning-storyboards-and-4-key-elements\",\"title\":\"How to Design eLearning Storyboards and 4 Key Elements\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"September 09, 2021\",\"metaTitle\":\"How to Design eLearning Storyboards and 4 Key Elements | WTT Solutions\",\"metaDescription\":\"To create a great course you need to first come up with elearning storyboard design ✅ Read to learn which elements to include in the interactive storyboard\",\"articleDescription\":[\"Growing demand for eLearning solutions amidst a global pandemic gave serious impetus to the development of online courses and training programs. According to <a href=https://techjury.net/blog/elearning-statistics/#gref target='_blank' rel='nofollow'>statistics</a>, by 2025 the Massive Open Online Course Market (MOOC) would surpass the mark of <b>$25 billion</b>. Being such a crescive niche, it attracts more and more individuals who want to share their knowledge but who don't have prior experience developing training courses.\",\"In this blog, we will share some insights on how to design eLearning storyboards, will examine the interactive storyboarding design elements, and provide some other handy tips that you can use when designing an effective eLearning storyboard.\"],\"faqInTableOfContents\":true,\"subtitles\":[{\"id\":1,\"title\":\"What Is an eLearning Storyboard?\"},{\"id\":2,\"title\":\"Four Key Elements to Create an Effective eLearning Storyboard\"},{\"id\":3,\"title\":\"Header area\",\"subtitle\":true},{\"id\":4,\"title\":\"Text\",\"subtitle\":true},{\"id\":5,\"title\":\"Audio instructions\",\"subtitle\":true},{\"id\":6,\"title\":\"Instructions for visuals & media\",\"subtitle\":true},{\"id\":7,\"title\":\"How to Design an eLearning Storyboard: Step-by-Step Development Process\"},{\"id\":8,\"title\":\"Outline your course goals and objectives beforehand\",\"subtitle\":true},{\"id\":9,\"title\":\"Gather all the content\",\"subtitle\":true},{\"id\":10,\"title\":\"Set up assessment criteria\",\"subtitle\":true},{\"id\":11,\"title\":\"Decide on the design method\",\"subtitle\":true},{\"id\":12,\"title\":\"Map-out course navigation\",\"subtitle\":true},{\"id\":13,\"title\":\"Prevent cognitive overload\",\"subtitle\":true},{\"id\":14,\"title\":\"Choose an appropriate authoring tool\",\"subtitle\":true},{\"id\":15,\"title\":\"Concluding Remarks\"},{\"id\":16,\"title\":\"FAQ\"}],\"subtitles1\":{\"text1\":\"Today, storyboards are heavily used in the video industry where they come as sketched-out illustration sequences that visualize key scenes of a video and help you better understand the story pace. While the eLearning storyboard fully inherits its ideas and goals from the sketched storyboard, its appearance is quite different.\",\"text2\":\"The eLearning storyboard comes in the form of a document that is created prior to the development of the actual course. In it, producers outline the entire structure of a future course and all its elements: visuals, text, audio, page interactions, navigation, etc. Such a document includes a set of screens/pages, each of which corresponds to a particular slide on the eLearning course.\",\"text3\":\"In the same way as the sketched-out storyboard, the eLearning storyboard works as a blueprint and helps producers keep all their work in line with the course subject and learning objectives. Now, let's take a look at the four key eLearning storyboard design elements that should be present on every page.\"},\"subtitles2\":[{\"text1\":\"The header area is the upper part of the screen that holds all the brief information about the current slide. It may contain, in particular: slide number, name/title, and slide subjective. The latter element is crucial since it specifies why each slide is there, to begin with.\"},{\"text1\":\"One of the most important elements of storyboards for designing interactive eLearning and an area that will most likely take the largest part of the page. It may include such components as:\",\"list\":[\"<b>Visible text</b> — text that will actually be present in the final course slide.\",\"<b>Navigation notes</b> — text that specifies where a user will actually go after interacting with the elements on the slide. 'Moves to the next/previous screen,' 'activates popup,' 'jumps to a quiz,' etc.\",\"<b>Development notes</b> — all extra guidelines that need to be taken into account by a developer or designer.\"]},{\"text1\":\"This component is very important since it outlines the actual narration text that will accompany each slide of your eLearning course. We do recommend paying extra attention to this element and working on it separately — <i>especially in those cases where you plan to involve a <b>professional artist</b> to do a voiceover for the course.</i>\",\"text2\":\"When writing out the audio narration text, make sure it matches the amount of learning material present on the page — to avoid voice gaps or even overlays. The narration copy should also come with guidelines for a voiceover artist regarding tone, jargon/acronym pronunciation (if any), instructions for special symbols like brackets, etc.\"},{\"text1\":\"Here, the course producers provide all the drafts/references or thumbnails for the illustrations. If the course is supposed to also include animation and/or videos, then the corresponding instructions need to be provided, as well: what type and style of animation is preferred, does it need to include branding elements or not, how the video lessons should be paced (format, camera angle, background, etc).\"}],\"subtitles3\":[{\"text1\":\"The creation of a new storyboard — and eLearning course in general — starts with answering one single question: <b>What outcome are we aiming to achieve here?</b>\",\"text2\":\"The more <i>detailed</i> answer you get to that query, the better. Let's say you want to create a course on full-stack web development for beginners. Assuming that, the expected outcome regarding the course may be as follows:\",\"list\":[\"To <b>educate</b> learners on the basic terminology — HTML, CSS, responsive design, semantic markup, server side scripting, etc.\",\"To <b>teach</b> them the difference between web development and web design.\",\"To <b>make</b> them grasp the basics of website debugging.\",\"To <b>teach</b> learners how to publish the website with GitHub pages, etc.\"],\"text3\":\"The course objectives will directly reflect on the structure, kind, and contents of a storyboard.\"},{\"text1\":\"This is one of the most important stages in the custom elearning storyboard design process. Here, you collect all the information that a future course will be built upon: the definitions, concepts, course messages, research data, infographics, statistics, information from subject matter experts.\"},{\"text1\":\"Identifying assessment criteria at the early stages of the storyboard design process will help to improve proficiency and boost learners’ productivity. The assessment methods — or criteria — are inseparably linked to the course structure, and define 'points of assessment' that have to be present in any interactive eLearning course.\",\"text2\":\"The points of assessment can come in the form of tests, quizzes, task-based simulations, open-ended questions, etc. These are the most basic examples which need to be taken into account and embedded in the storyboard structure; however, if we take more complex methods — such as branching scenarios that involve multiple decision points, for example — these will have a stronger impact on the storyboard navigation and, thus, need to be thoroughly structured in advance.\"},{\"text1\":\"Picking an appropriate design methodology helps to ensure that you won't get lost when developing an eLearning storyboard or an entire course. In general, there are four design models that you can choose from to build your course:\",\"list\":[\"<b>ADDIE (Analysis Design Development Implementation Evaluation)</b> — an instructional design framework that breaks down the course creation process into five stages, each of which is executed in a particular order with a focus on revision and iteration.\",\"<b>Action Mapping Model</b> — by using this methodology, the course producers map out each step of the course production process to ensure that it stays aligned with the general goal of the course.\",\"<b>Knirk & Gustafson Model</b> — a pretty straightforward methodology that consists of three steps: <i>problem determination</i> (define what learners already know and what else they need to know), <i>design</i> (come up with strategies and activities that will solve the problem), and development (produce training materials, course models, etc.)\",\"<b>SAM (Successive Approximation Model)</b> — a simplified version of the ADDIE approach that has only three stages, instead of five: <i>the preparation phase</i>, where all the course information is gathered; <i>the iterative design phase</i>, where all the course modules are prototyped and reviewed; and, <i>the iterative development phase</i>, where prototypes are fully developed and deployed.\"]},{\"text1\":\"Course navigation will define the experience learners will get when going through your course and, to a significant extent, affect how well they complete the course. So, in order to provide a seamless UX, you should decide in advance where to position your buttons and how to denote certain actions you want learners to take. Plan what happens if an incorrect answer is provided to a question on a slide or where to put links to third-party websites (If any are required).\"},{\"text1\":\"Since the well-written storyboard serves as a kind of 'guide,' it's vital to keep it clear and easy-to-process. Before doing a final revision of a storyboard, assess the amount of content that you will be delivering on each page/screen of your course. If some pages (or lessons) contain large chunks of text, try to break them down into smaller 'bite sized' sections.\",\"text2\":\"This will help to ensure that learners grasp the material in full before they move on to the next slide. Also, if possible, use visual or auditory instructions instead of plain text in so as to not overburden the elearning course.\"},{\"text1\":\"An authoring tool is a software that will actually help you create the storyboard once you've sorted out the content and structure of your future course. These solutions may come in different forms — for basic courses, elearning developers commonly use Microsoft Word or Powerpoint, while for more sophisticated training programs the use of dedicated software (such as Elearning Art) is more preferable.\",\"text2\":\"All these tools can suit the creation of an eLearning course so, when picking a particular tool, we advise you to focus on your actual goals first. Like \\\"What features do I want to see in an authoring tool?\\\", \\\"Will this tool make my life (read course production) easier?\\\", \\\"Is it able to provide me with all the needed interactions and custom elearning storyboard design elements?\\\", etc.\"}],\"subtitles4\":{\"text1\":\"As you can see, storyboards play a major role in the development of eLearning courses. They help producers to correctly structure the future product, witness possible gaps, and organize course narratives more effectively. Before proceeding to create a storyboard, we recommend establishing a clear development plan and figure out what your goals regarding the storyboarding process are, and what outcomes you expect it to bring.\",\"text2\":\"If you are looking for professional help in creating an elearning storyboard or an entire training solution, reach out to WTT-Solutions. For more than five years we've been providing software development services for SMEs and large enterprises across a wide range of niches and markets: Martech, Edtech, BI and ML, Mobile development, AI, and more. To get a FREE consultation from one of our managers, fill out the form in the top right corner of this page and we'll get in touch with you in no time!\"},\"questionsList\":[{\"question\":\"Who uses storyboarding software?\",\"answer\":\"Storyboarding software is normally used by course developers, video agencies, independent writers, directors, producers, and motion designers.\"},{\"question\":\"What are the best storyboarding software tools?\",\"answer\":\"The best storyboarding software is the one that 100% matches your needs; however, if we were to recommend an off-the-shelf eLearning solution, here's a list of the most popular ones today: Storyboarder, Boords, Plot, StudioBinder, Storyboard That, and Elearning Art.\"},{\"question\":\"How much does it cost to develop an eLearning course from scratch?\",\"answer\":\"If you consider producing an eLearning course with the help of internal resources, then the development costs will boil down to the number of working hours spent by your team (normally, it takes up to 200 hours to produce one hour of eLearning content). If you consider hiring a third-party contractor, then the cost of online course development may go from $2,000 up to $10,000, or even higher (depending on your requirements and course length). Contact us if you want to get more information in that regard.\"},{\"question\":\"Can I create my online course without designing a storyboard?\",\"answer\":\"Since storyboards serve as a foundation for all the future work that will be done during course production, we highly recommend you don’t skip this step. Otherwise, it will result in unwanted expenses, time losses, and your development process becoming ineffective as a whole.\"}],\"timeToRead\":6,\"backgrounds\":{\"img\":\"/images/blog/ElearningStoryboards/img1.jpg\",\"preview\":\"/images/blog/ElearningStoryboards/img1Tabl.jpg\"},\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"insights\"]},{\"id\":\"sales-automation-tools-for-startups\",\"title\":\"Sales Automation Tools for Startups: Five Best Automation Software Tools\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"September 14, 2021\",\"timeToRead\":12,\"backgrounds\":{\"img\":\"/images/blog/SalesAutomationTools/img1.jpg\",\"preview\":\"/images/blog/SalesAutomationTools/img1Tabl.jpg\"},\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"insights\"],\"metaTitle\":\"Five Best Sales‌ ‌Automation‌ ‌Tools‌ ‌for‌ ‌Startups | WTT Solutions\",\"metaDescription\":\"Sales automation software is all about saving time and being efficient for startup companies 📈 Read to find out how to become a successful startup company\",\"articleDescription\":[\"Sales automation is essential for tech startups looking for efficient and data-driven directions for their marketing. Without automation tools on your side, the grind of getting your startup off the ground will seem impossible at times.\",\"Sales automation, like customer data collection, pre-recorded voicemails, communication management, and list-building tools, supports companies with efficiency and potent business strategies. Targeting the right niches and individuals, with aisles, makes all the difference for a startup. This article will give you some insight into the five best software options for using sales automation for startups.\"],\"faqInTableOfContents\":true,\"subtitles\":[{\"id\":1,\"title\":\"Why are Sales Automation Tools Important for Startups?\"},{\"id\":2,\"title\":\"Centralized Communication\",\"subtitle\":true},{\"id\":3,\"title\":\"Standardized Processes\",\"subtitle\":true},{\"id\":4,\"title\":\"Exceptional data insights\",\"subtitle\":true},{\"id\":5,\"title\":\"Improved utilization of human capital\",\"subtitle\":true},{\"id\":6,\"title\":\"Multi-departmental visibility\",\"subtitle\":true},{\"id\":7,\"title\":\"Five Best Sales‌ ‌Automation‌ ‌Tools‌ ‌for‌ ‌Startups\"},{\"id\":8,\"title\":\"Prospect.io\",\"subtitle\":true},{\"id\":9,\"title\":\"Salesforce\",\"subtitle\":true},{\"id\":10,\"title\":\"Hubspot Sales Hub\",\"subtitle\":true},{\"id\":11,\"title\":\"Prospero\",\"subtitle\":true},{\"id\":12,\"title\":\"Docusign\",\"subtitle\":true},{\"id\":13,\"title\":\"Disadvantages of Existing Sales Automation Tools\"},{\"id\":14,\"title\":\"Pricing options are often not relevant for the company's needs\",\"subtitle\":true},{\"id\":15,\"title\":\"Vendor's spam\",\"subtitle\":true},{\"id\":16,\"title\":\"Software rigidness\",\"subtitle\":true},{\"id\":17,\"title\":\"Moving to another solution is tedious\",\"subtitle\":true},{\"id\":18,\"title\":\"Our Successful Cases\"},{\"id\":19,\"title\":\"Conclusion\"},{\"id\":20,\"title\":\"FAQ\"}],\"subtitles1\":{\"text1\":\"The importance of sales automation boils down to an essential truth: <i>the more effectively you work with your customers, the better your sales and marketing will be.</i>\",\"text2\":\"Sales automation helps companies collect and organize customer data with efficient and easily accessible methods. It provides a more detailed glimpse into the mind of your clients more quickly and efficiently than traditional sales techniques.\"},\"subtitles2\":[{\"text1\":\"Not only are sales automation tools quicker to set up and easier to use, but they are also better for centralizing communication within a team and with a company's clients. The best sales automation tools allow for streamlined and intelligently organized interactions with clients, making them clearer for all parties involved and easier to assess for a business owner.\"},{\"text1\":\"The process of sales management and its various steps sometimes gets muddled without an automated sales service. This becomes especially apparent in situations where salespeople go through similar orders or interact with the same client time and time again.\",\"text2\":\"<i>The most significant benefit of standardized procedures is the efficiency that minimizes process errors and, thus, reduces unwanted expenses.</i>\",\"text3\":\"Sales automation tools for startups consider the processes and tasks of your company and align them for all members via clear and straightforward policies. Once the processes of outreach, communication, conversion, and customer retention becomes standardized, your company will start to deliver a uniform user experience — irregardless of the team size or number of clients.\"},{\"text1\":\"The depth of data that automation creates for your startup may seem daunting; however, it is best to use sales automation technology to uncover information about your customers’ behaviors, habits, pain points, etc. — to give your sales team the insights necessary for consistent and efficient communications to attract, convert, and retain quality customers.\"},{\"text1\":\"Automation keeps sales managers and other team members engaged in the working process and relays available resources to those areas where their presence or participation is most needed at the moment.\",\"text2\":\"<i>When automated tools are put to work in a startup, they help companies avoid situations where resources are left idle.</i>\",\"text3\":\"Instead, the automated system red-flags wasted human capital or other resources and allows managers to rearrange and distribute these resources so that projects get done better and faster.\"},{\"text1\":\"Sales automation tools limit excess tasks and process overlaps, reduce mistakes, and give business owners a predictive vision of the company and what steps need to be taken to improve efficiency and customer service, or reduce the time needed for a sale to go through. An automated system will make failures, successes, and progress more visible, allowing for improved day-to-day operations across different departments within a company.\"}],\"subtitles3\":{\"text1\":\"After researching some of the most popular  sales automated tools for startups, we've decided to outline five off-the-shelf tools that, in our opinion, can offer the most relevant functionality in terms of sales and marketing for startups.\"},\"subtitles4\":[{\"text1\":\"Prospect.io allows startups to build email lists and measure their marketing results across multiple platforms. Prospecting for new clients is available with a Chrome Web Store extension which discovers email addresses, imports your email lists, and verifies if the email addresses are legitimate or not. The drip campaign features allow for detailed and scheduled interactions with clients, prospects, and long-term customers.\"},{\"text1\":\"Salesforce is a cloud-based sales automation system. It is known for its simple interface and ease of adoption. Salesforce also allows for quick upscale for large companies because of its architecture.\",\"text2\":\"Data collection and campaign creation with Salesforce are all about keeping current customers happy and finding out what prospective clients want. Salesforce supports many third-party apps that can be synced for outreach, data collection, and analysis.\"},{\"text1\":\"The interactive nature of the Hubspot Sales Hub gives teams graphs and data points on a dashboard interface, allowing multiple managers on a team to process customer and prospect data, and collaborate with messaging and other communication tools. The inboard nature of the platform helps companies attract customers and retain them with many different features.\",\"text2\":\"Some of the best features of the Hubspot Sales Hub include creation and editing of content, seamless social media sharing, automation of workflows for teams, management of customer relations through email and other communications, lead capture, and a map of performance tracking and sales.\"},{\"text1\":\"Prospero is a cloud-based proposal creation software that quickly identifies the reproduction of a business proposal. It is centered on limiting duplication of submissions through a series of different checks that its automated system makes.\",\"text2\":\"Prospero offers over 30 templates for business proposal creation, or allows for free document creation. These templates are focused on niches and different areas of interest. Along with your proposal formatting and text, you are also able to create a logo, images, videos, and other facets of your marketing campaign within the platform.\"},{\"text1\":\"This is one of the top sales automation tools because automation with DocuSign allows for the digital signing and sharing of professional documents. DocuSign is one of the only streamlined platforms that supports all of your professional documents for signature on any device or platform.\",\"text2\":\"Uploading any document with a phone’s scanning feature creates a digital PDF copy of the document. This document is editable by creating drag-and-drop fields anywhere on it — where a user on the other end can input their digital signature or initials.\"}],\"subtitles5\":[{\"text1\":\"Since most off-the-shelf solutions are distributed under a subscription-based model, they come with a predefined set of features which are grouped into various  pricing plans. So, even though the startup may only be using one or two features from the sales automation tool, they must usually pay for the entire subscription cost of the service. This makes using some off-the-shelf services too costly for the newly established businesses.\"},{\"text1\":\"Some automation platforms include vendor content that often floods the inbox, or embedded ads that clutter the interface and cannot be skipped over — unless you upgrade to the most expensive package. So, even if you are paying for a subscription service to automate your business, the platform may still consistently push spam and notifications your way.\",\"text2\":\"With some vendors, you may simply turn off the notifications or unsubscribe from their newsletter; however, that's not always the case. So, before opting for a particular sales automation service, do your research and figure out what the vendor's policy is regarding push notifications, ads, email communications, etc.\"},{\"text1\":\"This point is directly related to the software limitations that come with off-the-shelf solutions due to their subscription nature. Here, the company will definitely lose some functionality if the automation tool is too rigid and difficult to adjust — which is probably the case for most subscription-based solutions. So, even if your team has insights they would like to exploit, it may not be possible with pre-defined pricing packages that don't allow for any refinement.\"},{\"text1\":\"Moving all of your data is a complicated and tedious task, especially if you need to take into consideration the different standards or requirements for the formatting of data that may come with different off-the-shelf automation tools. With some vendors, shifting your data to another platform may, at times, be close to impossible and require additional efforts to restore or manually complete fields or data sections.\"}],\"subtitles6\":{\"text1\":\"After years of working with various businesses, we have built quite an extensive portfolio of completed projects, one of which is Pitch59 — an advertising platform that helps companies promote themselves via sharable, bite-sized video business cards. Our team wasn't engaged in the development of this project from day one; instead, we were in charge of fixing all the problems that came up from the previous development company. We were also responsible for improving the product in general.\",\"text2\":\"We've adjusted in-app research, eliminated memory leaks and code flaws, optimized SQL queries, reduced the app size, significantly improved the app loading time, and added some extra features. As a result, the client was fully satisfied with the outcomes of our cooperation and provided us with 5-star feedback!\"},\"subtitles7\":{\"text1\":\"Sales automation tools for startups are critical when getting your business off the ground. Make sure that you do your research and find the best fit for your company. Even though some of the best sales automation tools seem great, you might be forced to pay a premium for other features you are not even using.\",\"text2\":\"WTT-Solutions is an experienced partner for startups that want to implement sales automation software but can't find the right solution on the market. We develop sales tools that bridge data collection and client communications, allowing for more efficient and scalable operations.\",\"text3\":\"If you have any questions or want to request a quote for your project, simply fill out the form in the top right corner of this page and one of our professional service members will get in touch with you shortly. WTT-Solutions is ready to stand by your side with the development of automated business solutions for your startup!\"},\"questionsList\":[{\"question\":\"What parts of the sales process can be automated?\",\"answer\":\"There are lots of functions that can be automated with the help of sales software, some of these include:<ul><li><i>Sales alerts</i>: When a sale is pending or confirmed, the team receives an alert.</li><li><i>Reports</i>: Reports can be generated automatically based on collected data.</li><li><i>Lead prioritization</i>: Leads can be prioritized based on demographics, location or other (individual) parameters specified in a software.</li></ul>\"},{\"question\":\"Does it make sense for small companies to introduce sales automation tools?\",\"answer\":\"Sales automation software isn't just a solution for large corporations; even the smallest companies can benefit from automated data collection, report generation, lead prioritization, etc.\"},{\"question\":\"How much does marketing automation cost?\",\"answer\":\"Off-the-shelf solutions that the market offers today may cost anywhere from $10-$20 per month, and up to $2,000 or $3,000 a month for larger companies with more specialized needs. Custom-built solutions are always available by contacting WTT-Solutions directly, so that the cost factors can be discussed in detail.\"},{\"question\":\"How can I get started with sales automation?\",\"answer\":\"Decide whether you want to go with an off-the-shelf solution or a custom one. If you want to choose from the options that the market offers, then pick one that suits your needs best. If nothing works for you, or doesn’t fit the objectives of your company, then it's better to develop a custom software. For that to happen, find a reliable software development partner first — you can always contact WTT Solutions for more details in that regard.\"}]},{\"id\":\"how-workflow-automation-can-improve-your-school-processes\",\"title\":\"How Workflow Automation Can Improve Your School's Processes\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"November 11, 2021\",\"timeToRead\":12,\"backgrounds\":{\"img\":\"/images/blog/HowWorkflowAutomationCanImproveYourSchoolsProcesses/img1.jpg\",\"preview\":\"/images/blog/HowWorkflowAutomationCanImproveYourSchoolsProcesses/img1Tabl.jpg\"},\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"insights\"],\"metaTitle\":\"School Workflow Automation: Benefits, Solutions & Examples\",\"metaDescription\":\"Full school workflow automation allows to eliminate lots of manual processes and significantly speed up the core functions ✅ Read this blog to find out more\",\"articleDescription\":[\"Many educational institutions rely too much on manual administrative work and paper-based techniques. Eventually, this leads schools to significant losses in time and money — in the U.S. alone about <b>$1,6 billion</b> is spent annually by schools on paperwork. But what if that budget could be spent more wisely and schools didn't have to process hundreds of paper forms every day?\",\"In this article, we'll describe the benefits of workflow automation for schools, practical outcomes that you'll get from school process automation, and the factors that should be taken into account when choosing an automation solution, or <a href=https://wtt-solutions.com/blog/how-to-build-elearning-platform target='_blank' rel='nofollow'>developing</a> one from scratch.\"],\"faqInTableOfContents\":true,\"subtitles\":[{\"id\":1,\"title\":\"Benefits of Workflow Automation for Schools\"},{\"id\":2,\"title\":\"Workflows That Your School Should Automate\"},{\"id\":3,\"title\":\"Factors to Consider Before Choosing ERP Software for School\"},{\"id\":4,\"title\":\"How to Select an Automation Solution\"},{\"id\":5,\"title\":\"Examples of School Workflow Automation\"},{\"id\":6,\"title\":\"Our Experience\"},{\"id\":7,\"title\":\"Summary\"},{\"id\":8,\"title\":\"FAQ\"}],\"hidden_subtitles\":[{\"title\":\"Elimination of redundant manual work\"},{\"title\":\"Connectivity increase\"},{\"title\":\"Improved transparency and control\"},{\"title\":\"Admission process becomes easier\"},{\"title\":\"Attendance tracking\"},{\"title\":\"Maintenance and transport requests\"},{\"title\":\"Sick Days/PTO requests\"},{\"title\":\"Class scheduling\"},{\"title\":\"Progress reports\"},{\"title\":\"Tech robustness of your facility\"},{\"title\":\"Cost-effectiveness\"},{\"title\":\"Solution flexibility\"},{\"title\":\"Assess needs of your school\"},{\"title\":\"Be specific about product features\"},{\"title\":\"Put security first\"},{\"title\":\"Look for better customization\"},{\"title\":\"Andrews Independent School District\"},{\"title\":\"School District 23\"},{\"title\":\"Felpham College\"}],\"subtitles2\":[{\"text1\":\"On average, each school completes about <b>25,000 forms</b> per year. Assuming that it takes about 15 minutes to fill out one piece of paper, we are talking about <b>6,000+</b> man-hours dedicated to paperwork per annum. Add printing, stapling, and mailing to the mix, and you’ll easily hit <b>10,000</b> wasted man-hours each year.\",\"text2\":\"With the help of a workflow automation tool, all this time could be reinvested into the actual educational process, allowing schools to go completely paperless.\"},{\"text1\":\"Automation solutions for education providers facilitate data sharing across all departments, allowing teachers, managers and other personnel to effectively collaborate together. With an ERP system, the school gets a better grasp of its internal and external communication activities: teachers can instantly provide feedback to student's parents, and school managers can request updates from different departments, prepare reports to local councils, etc. — all without the need to send countless emails every time any piece of information is needed. \"},{\"text1\":\"Schools, as well as other educational institutions, normally store and process enormous amounts of data: student and personnel information, exam schedules, lesson plans, medical forms, etc. Oftentimes, some records lack the relevant information, are duplicated or even get lost under thousands of other paper forms.\",\"text2\":\"ERP software allows users to eliminate such situations, streamline all their data, and deliver it to recipients in a clear and understandable way. School authorities also get to see all the information in the form of dashboards, which helps them improve and speed up the decision-making process.\"},{\"text1\":\"Admission is known for being one of the longest and most complicated processes. It includes several visits to the educational facility, interviews with the Principal, form submissions, payment procedures, etc. Gathering all the information about the candidate and traveling through all those steps is incredibly time-consuming for students, their parents, and school personnel.\",\"text2\":\"Education workflow automation software, on the other hand, can significantly speed up this process, allowing users to store candidates' applications within a single place. In doing so, the administrator or other accredited parties (parents, for example) will be able to easily access these records, add new information, or introduce changes, if necessary.\"}],\"subtitles3\":{\"text1\":\"So, how many processes can schools automate? With the help of automation software, it's literally possible to automate any workflow in your facility; however, for those who are new to this subject, we'd recommend beginning with the five main workflows that schools should automate.\"},\"subtitles4\":[{\"text1\":\"One of the biggest stumbling blocks for any educational institution is the ability to correctly analyze student's attendance data. In many schools, the attendance recording procedure is completed manually by teachers. Aside from the most obvious outcome of such an approach — which is the dissipation of class time — manual processing is hardly able to help schools analyze students' attendance at a macro level.\",\"text2\":\"Let's say you want to evaluate chronic absence data to figure out which students need extra support, or which percentage of students missed more than 20 days in the last semester. Putting together such statistics manually may take 80-100 man-hours, while school workflow automation software can provide you the same reports in a matter of seconds.\",\"text3\":\"Mapping out attendance trends, analyzing data from previous years, generating chronic absence reports — these are just a few activities that can be digitized with the help of automation software.\"},{\"text1\":\"According to a study conducted by the <a href=https://nces.ed.gov/programs/coe/indicator_cmb.asp target='_blank' rel='nofollow'>National Center for Education</a>, maintenance and transport costs hold the second and fourth places, respectively, amongst the highest expenses in U.S. schools. Paper request forms used in many educational facilities hugely slow down the administrative process, and cost schools thousands of dollars per year in additional expenses. The numbers can go even higher if we take into account misplaced files, form-filling mistakes and other processing issues that take place on a regular basis.\",\"text2\":\"Things get even more complicated with transportation expenses, since, here, there are several types of requests (<em>recurring, field trip</em>, and <em>infrequent transportation</em> reqs), each of which needs to be processed differently.\",\"text3\":\"By digitizing these workflows, school staff can automatically create logs for all requests and fulfillments, which will help to better assess the current transportation situation and ensure that the budget is spent wisely.\"},{\"text1\":\"Processing paid-time off (PTO) and sick day requests are another frequently recurring activity for many schools. The main issue with such requests is that, manually, every single form has to travel via three or four departments before getting approved. This process involves teachers, school managers, HR specialists, and can become quite frustrating for all parties involved — especially when the need for additional information arises, and the form starts to 'roam' between departments.\",\"text2\":\"With the help of an ERP tool, schools can automate all requests, approvals, and send automated notifications if information is missing or needs to be modified\"},{\"text1\":\"In most of the K12 and higher education facilities, the class scheduling process is handled either via Excel (and Google calendars) or simply on paper. Taking into account a vast range of variables such as class size, equipment availability, number of students, etc., class scheduling can become tedious even with the use of Google tools. \",\"text2\":\"Workflow automation can benefit schools in the way that it simplifies class scheduling and brings all processes under \\\"one roof\\\" (exam scheduling, inventory tracking, conflict management, etc.). It can give school authorities a comprehensive overview on how their real estate is being utilized across the facility. \"},{\"text1\":\"Aside from exam preparation, teachers also have to fill out progress reports for each student, individually. And that's a huge chunk of work, given that those reports are normally prepared quite often (monthly, quarterly, after the end of each term, etc.) and for a large number of students. \",\"text2\":\"The digitization of progress tracking, in this case, allows for the storage of all student data in the cloud and updates them in real time. Teachers will no longer be required to review each and every progress card. Once updated, progress reports can also be automatically sent to parents.\"}],\"subtitles5\":[{\"text1\":\"Before choosing any software, you first need to assess the state of your current equipment to understand the school’s level of tech robustness and what kind of software you should be looking for.\",\"text2\":\"Let's say your facility has up-to-date hardware, which means you can look at more advanced ERP solutions that support third-party integrations, RFID tagging, and can even merge independent processes. If, however, you have less robust equipment, then opting for a 'lightweight' solution with basic functionality would be more logical: <em>there is no sense in buying ERP software that will not be able to operate in your technical environment.</em>\"},{\"text1\":\"One of the main objectives of workflow automation for school districts is the reduction of administrative costs. For any educational institution, whether it is school, college, or university it's extremely important to know exactly how much they are spending on processing all of their  paperwork manually.\",\"text2\":\"When choosing a workflow automation system for education, try to assess how the software costs correlate with the current administrative expenses. For example, if your school is now spending about $5,000-6,000 a year on managing requests, travels, personnel records, etc., it won't make much sense to implement an automation system that will devour pretty much the same budget (in maintenance and vendor subscription costs).\"},{\"text1\":\"Schools or higher educational institutions never stay the same in regards to the number of students, methodologies, or even divisions. Given that the organizational structure of an educational facility keeps evolving and changing, it's critically important that your software be scalable or easily adjusted to new changes.\"}],\"subtitles6\":[{\"text1\":\"To correctly choose an automation tool, you first need to assess the current objectives as well as the gaps or administrative areas you want to improve. It’s important to note here that the term 'needs' doesn't have to be limited solely to the particular department. Instead, it should be perceived holistically and equally encompass the needs of all parties involved in the maintenance and facilitation of the educational process — teachers, students, their parents, administrative and non-administrative staff, etc.\"},{\"text1\":\"When it comes to off-the-shelf solutions, there're a lot to choose from, and each of these comes with an individual set of features that covers different areas of the school administrative process.\",\"text2\":\"If you want to be able to track records, and process admissions and attendance, for example, then opting for a solution with basic functionality would be enough; however, when it comes to attendance tracking, inventory management and integrations of school information portals, these are more advanced features that may not be available by default. Thus, we advise you to be quite specific about what you want to get from your automation solution.\"},{\"text1\":\"Schools normally store a lot of sensitive information. Financial data, personal information (like students’ phone numbers, home addresses, email) and medical records can all be easily put at risk with unauthorized access to the system. When choosing your automation solution, assess what the vendor's security policy is, how data is stored, who can access it, etc. For automation software, the role-based access control (RBAC) functionality is also a must when it comes to the educational sector. \"},{\"text1\":\"At the beginning of each new academic year, school teams have to deal with huge amounts of new incoming information in addition to their already existing databases. This means that it is better to look for a software that can effectively scale to changing needs in data storage. Aside from that, the tool has to be flexible enough — in terms of functionality — to comply with evolving requirements set by regulatory institutions.\"}],\"subtitles7\":[{\"text1\":\"Located in Texas, Andrews School District, which includes six schools and accommodates 4,000+ students, tries to keep its audience active. The district's goal was to automate the processing of numerous travel requests that they had to deal with on a daily basis. They also wanted to automate several other workflows, such as the candidate interview process, collecting recommendations from principals, HR processes, software buying requests, etc.\",\"text2\":\"By using ERP solution, the Andrews School District automated announcement approvals, travel reimbursements, print requests, and hardware purchases. Now, all the arrangements and approvals are handled digitally, which allows teachers to focus more on education and less on administrative tasks.\"},{\"text1\":\"The fifth largest district in British Columbia, School District 23 comprises more than 40 elementary, secondary and alternative schools. They struggled to process 7,000+ forms and records on paper due to the large number of students (22,000, in total).\",\"text2\":\"With the help of automation technology, they were able to digitize all their paperwork and completely get rid of all physical documents. Aside from that, a shared digital environment was established, as well, allowing teachers, principals, and other staff to cooperate more effectively.\",\"text3\":\"As a result, the district witnessed an increase in productivity, and a significant decrease in costs and time spent on administrative activities. The district also established an advanced security system with various levels of access which was one of the requirements of the Privacy Commissioner of B.C.\"},{\"text1\":\"Located in West Sussex County, UK, Felpham college had quite an intensive travel management process in place that required staff to spend hours processing 5,000+ traveling forms every year. This, in turn, further complicated an already complicated travel chain. Managing sign-off forms, collecting permission forms, processing health records, reporting incidents, communicating with parents — all these activities had to be performed manually by college staff 24/7 in order to maintain trip activities.\",\"text2\":\"After integrating the digital platform for workflow digitization, college authorities were able to automate 100+ yearly trips, and reduce the number of trip forms from 5,000 to zero. Automating notifications and reminders also allowed teachers to keep parents updated about current trip statuses and eliminated all manual follow-ups. \"}],\"subtitles8\":{\"text1\":\"As a software development partner, our team was engaged in developing multiple educational projects for <a href=https://wtt-solutions.com/startups target='_blank' rel='nofollow'>startups</a>, one of which is <b>PLH</b> — a <a href=https://wtt-solutions.com/our-work/plh target='_blank' rel='nofollow'>parent training application</a> that is aimed at nurturing parent-children relationships and lowering the risk of domestic violence.\",\"text2\":\"We've developed a flexible solution that, via custom-made scenarios, teaches adults alternative parenting techniques which they can use to establish a more secure environment in their homes. Ionic and Angular were used as a tech-stack for this project, and it took 990 man-hours to successfully deliver it to the client.\"},\"subtitles9\":{\"text1\":\"Automating school processes can help to free up resources, time, and physical space that is now spent on processing and storing tons of paper forms. Redundant manual work takes a significant share of already limited budgets that schools have, which, in turn, slows educational facilities in other initiatives that could help them transform or improve faster.\",\"text2\":\"If you want to know more about the benefits of automating processes in schools or want to get a custom-made automation software, don't hesitate to contact WTT Solutions. With over five years of practical experience in <a href=https://wtt-solutions.com/edtech target='_blank' rel='nofollow'>Edtech</a>, we know all the intricacies of the <a href=https://wtt-solutions.com/platform-development target='_blank' rel='nofollow'>software development</a> process and can get you a solution on time and within budget. Fill out the form in the top right corner of the page and we'll get in touch with you!\"},\"questionsList\":[{\"question\":\"Are there any roadblocks that may make it difficult to automate school workflow?\",\"answer\":\"There are a number of challenges that educational facilities may come across when automating workflows, namely: lack of tech knowledge needed to be able to operate automation tools effectively; lack of professional support — in cases where educational facilities automate internal processes without involving knowledgeable IT consultants; and improper planning or organization that happens for the same reasons.\"},{\"question\":\"How long does workflow automation take?\",\"answer\":\"On average, it takes 4-6 weeks to integrate a workflow automation solution, assuming that the integration process has been set up properly from the beginning and you know what you're doing. The timeline may stretch out depending on the number of processes you want automated and/or the specific functionality you want to get. \"},{\"question\":\"Should I choose an off-the-shelf solution or go for a custom one for my school?\",\"answer\":\"It depends on what you want to achieve with workflow automation. If you want to manage standard procedures, then an off-the-shelf solution may completely cover your needs. On the other hand, if you are looking for some extra features (that off-the-shelf solutions are lacking), then developing a custom solution exclusively for your facility would be a better option.\"},{\"question\":\"Will our school be required to purchase any hardware or equipment if we want to automate our workflows?\",\"answer\":\"Today, all of the automation solutions offered on the market are designed to be run in the cloud, meaning you don't need to buy extra equipment to use them. The same goes for custom developed automation software. Keep in mind, though, that your facility will still need to have some basic hardware set in place to run the automation software. \"}]},{\"id\":\"which-developers-to-hire-for-an-e-learning-project\",\"title\":\"Which Developers to Hire for an e-learning Project\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"November 23, 2021\",\"timeToRead\":10,\"backgrounds\":{\"img\":\"/images/blog/WhichDevelopersToHireForAnELearningProject/img1.jpg\",\"preview\":\"/images/blog/WhichDevelopersToHireForAnELearningProject/img1Tabl.jpg\"},\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"insights\"],\"metaTitle\":\"How to Hire the Best e-Learning Developers [Essential Checklist]\",\"metaDescription\":\"When hiring e-learning developers, be sure to validate whether they have a grasp of instructional design and understand what makes a good learning experience\",\"articleDescription\":[\"With remote work culture embracing businesses around the world, more and more companies and educational institutions are starting to look for proven expertise in the development of e-learning courses, platforms and other tools. Searching and hiring e-learning developers who are able to bring your idea to life, however, may not be the easiest thing to do.\",\"The e-learning production process comes with its own bag of challenges that you need to understand to correctly assess a candidate's level of expertise before hiring a developer for an e-learning platform. In today's article, we want to shed some light on the process of choosing which developer to hire for developing an e-learning platform, and detail which qualities to look for.\"],\"faqInTableOfContents\":true,\"subtitles\":[{\"id\":1,\"title\":\"Web Developer vs e-learning Developers vs e-learning Development Agency — Who to Choose for Your Project?\"},{\"id\":2,\"title\":\"Web Developers\",\"subtitle\":true},{\"id\":3,\"title\":\"e-learning Developers\",\"subtitle\":true},{\"id\":4,\"title\":\"e-learning Development Agency\",\"subtitle\":true},{\"id\":5,\"title\":\"How an e-learning Developer or Agency Can Improve Your e-learning Project\"},{\"id\":6,\"title\":\"Deliver Greater ROI\",\"subtitle\":true},{\"id\":7,\"title\":\"Provide Deep Insights\",\"subtitle\":true},{\"id\":8,\"title\":\"Make Products Compliant\",\"subtitle\":true},{\"id\":9,\"title\":\"Checklist for Hiring the Right e-learning Developer\"},{\"id\":10,\"title\":\"Proven track of record developing e-learning projects\",\"subtitle\":true},{\"id\":11,\"title\":\"Expertise in instructional design\",\"subtitle\":true},{\"id\":12,\"title\":\"Ability to work with complex subjects and concepts\",\"subtitle\":true},{\"id\":13,\"title\":\"Knowledge of local market specifics\",\"subtitle\":true},{\"id\":14,\"title\":\"Transparent production process\",\"subtitle\":true},{\"id\":15,\"title\":\"Established QA policy\",\"subtitle\":true},{\"id\":16,\"title\":\"Sufficient capacity\",\"subtitle\":true},{\"id\":17,\"title\":\"Our experience\"},{\"id\":18,\"title\":\"Summary\"},{\"id\":19,\"title\":\"FAQ\"}],\"subtitles1\":{\"text1\":\"Once you've decided to produce an e-learning project, you'll have three options to facilitate the process: hire an e-learning developer, a web-designer, or opt for an agency. Let's see what each of these approaches has to offer and which fits your needs best.\"},\"subtitles2\":[{\"text1\":\"Web or full-stack developers are in charge of the technical components of a project, i.e. they design and develop the e-learning platform itself. These individuals are well-versed in technology and, thus, focus on enhancing functionalities of the product. In a nutshell, web designers are responsible for the <em>implementation</em> of the project.\",\"text2\":\"On the other hand, however, web developers don't specialize in integrating multimedia elements, or developing educational modules and materials. So, if you need help systematizing e-learning course logic, outlining educational objectives, or creating educational programs, then most probably you'll also need to hire an instructional design expert. \"},{\"text1\":\"e-learning developers, on the contrary, are focused on the <em>ideation part</em> of the process. Their main responsibility is to structure courses and create modules with the help of dedicated instructional software and applications. The goal of their work is to ensure that users will get a great learning experience and gain full understanding of the material they are presented with.\",\"text2\":\"These specialists also serve as middlemen between subject matter experts (SMEs) and the project audience: e-learning developers take the input materials from the SMEs and turn them into interactive lessons.\"},{\"text1\":\"With an agency, it's possible to create an e-learning project from the ground up. A professional e-learning development agency comes as an already assembled team — with instructional designers and web developers on board who can carry out all the steps of the production process: from outlining project needs and profiling target audiences to producing assets, <a href=https://wtt-solutions.com/blog/how-to-build-elearning-platform/ target='_blank' rel='nofollow'>designing platforms</a> and integrating ready solutions into your infrastructure, if needed.\",\"text2\":\"A good e-learning development agency would normally offer all-around expertise and spare you the need to look for additional specialists somewhere else. If you're producing an e-learning course, they can also offer you animation design services, V/O, etc.\"}],\"subtitles3\":[{\"text1\":\"Every e-learning project is developed with a specific goal in mind. Oftentimes, however, <a href=https://wtt-solutions.com/startups target='_blank' rel='nofollow'>novice startup owners</a> don't actually know how to assess <b>whether their initial objectives were met</b> after the project is released. This, in turn, leads to an incorrect estimation of project results, in general, and distorts the real picture. Professional e-learning developers know how to avoid this problem.\",\"text2\":\"They will help you shape your objectives, analyze audience profiles, establish correct evaluation methodology and identify the learning outcomes you are aiming for. By doing so, it will be much easier to produce an e-learning project that spikes the interest of learners and generates tangible results.\"},{\"text1\":\"When you hire the best e-learning specialists, you get access to expertise and insights they've gathered over years of working in this business. As trustworthy partners, they will proactively advise on better strategies for a project or how to tailor a product to the audience's expectations.\",\"text2\":\"For example, if we are talking about e-learning courses, these are normally developed in accordance with certain rules regarding their appearance: products that are designed for millennials often come with bright interfaces, illustrations and other imagery, while projects focused more on baby boomers have a calm color scheme and are not overloaded with visuals.\"},{\"text1\":\"In some countries — the US in particular — e-learning companies are expected to develop their products in compliance with particular standards and requirements enforced by local governments. If not done correctly, courses and other e-learning products may not be permitted for use (especially in educational facilities).\",\"text2\":\"Professional developers who know the e-learning production process in and out can help to align the design of an educational project with common compliance standards (508 Standard, SCORM, AICC, etc.). \"}],\"subtitles4\":[{\"text1\":\"Reviewing a candidate's portfolio is one of the most important things to do when selecting an e-learning developer. Simply knowing that the company has X years of experience or Y number of clients won't be enough. Only real-life examples of delivered projects can help you assess how good (or bad) a company actually is.\",\"text2\":\"We also recommend asking developers what measurable results they have achieved for their clients — using a particular project from their portfolio as an example. This can include engagement rate, completion rate, project ROI or some other custom criteria. Listen to how developers answer your question and try to assess how engaged they are in the process.\"},{\"text1\":\"What makes instructional design special is that this is where the developers focus not only on the technical aspects of a product but also on <b>how people learn</b>. They need to know how to organize learning content in such a way that would make sense for a learner and help them grasp even the most complex concepts with ease.\",\"text2\":\"To verify whether the e-learning developers have expertise in instructional design, ask them how they would 1) structure your e-learning project, maintain consistency, 2) ensure that learners stay focused, and 3) work with content, colors, white space, etc.\",\"text3\":\"Obviously, in order to make an in-depth assessment of the instructional design expertise, you will probably need to involve an instructional design expert in the interviewing process; however, for the basic screening stage, these questions will work well. \"},{\"text1\":\"Another important characteristic of a professional e-learning developer is the ability to easily switch between different subjects of varying complexity, and — what's even more crucial — enough skill to work with complex concepts. This also means that a production team can take on a subject (project) they have never dealt with before.\",\"text2\":\"In regards to e-learning, such competencies can make all the difference in a developer being able to immerse deep into a subject (and not get lost while doing it) and will determine how well the educational content will be prioritized and structured during production.\",\"text3\":\"<b>NB!</b> <em>How to identify professional e-learning developers?</em> They can produce equally good results no matter whether their focus is a project about stress management techniques or a 20-hour e-learning course on the logistics of petroleum products.\"},{\"text1\":\"When creating an e-learning project, one of the goals for developers is to make it relevant to a specific audience. This aspect becomes extremely important for those projects developed for a local market or particular region.\",\"text2\":\"If you're creating a project that focuses on firearms safety in the US, for example, you should have at least a basic knowledge of gun control policies enforced by the government in the country and its states.\",\"text3\":\"Your #1 priority here would be to look for e-learning developers on-shore, within your local market. If for some reason that's not possible, look for offshore developers with prior experience creating projects for your region or topic.\"},{\"text1\":\"The production process for your elearning development partner should be as transparent as possible. When interviewing your potential candidates, get them to explain upfront how they pace production, ask what their review policy is and whether there are any additional fees or not, how they provide progress updates, who holds the copyright, etc.\",\"text2\":\"You should get a complete overview of the workflow and understand how your project will be implemented before the work actually starts. Every step should be predictable, to ensure that you stay aware of what is going on with your project at any particular moment in time.\",\"text3\":\"<b>NB!</b> Different agencies have different policies regarding the use of source materials produced by them (for example, these can be visuals or illustrations that a client wants to reuse in their social media or marketing campaign). Normally, you can buy out such assets for an additional fee, so make sure to clarify the price for these, in advance.\"},{\"text1\":\"In the case of e-learning products, QA becomes especially vital since, here — aside from the technical side of the project — the developers also have to deal with a huge amount of information. This information needs to be correctly processed otherwise it can ruin the whole project logic and the learning experience.\",\"text2\":\"When looking for an e-learning development partner, be sure to confirm that they don't overlook this process and that they have an established QA policy in place. You may also ask candidates to disclose information about QA steps (what type of content, function, etc. is checked, and in which order), and the overall QA strategy (how the checks are carried out, what the criteria are, what practices are used, etc.).\",\"text3\":\"<b>NB!</b> As a standard, all QA activities should be completed before the client gets an e-learning project for final review.\"},{\"text1\":\"As mentioned before, e-learning projects can be quite hard to pull off due to their complexity and large amounts of information, statistical data, and all the concepts a team has to deal with. When outsourcing your project to an e-learning production partner, make sure that they have sufficient resources and capacity to take it through to the finish line.\",\"text2\":\"At times, you also may come across such situations where, in the middle of the production process, you realize that the scope needs to be adjusted to fit in new functionality. Most of the time, this means that the size of a production team will need to be adjusted, as well. Ask your potential developers whether they are able to handle such situations and scale up on-demand. \"}],\"subtitles5\":{\"text1\":\"Over the course of more than five years creating digital products, we've been engaged in various projects and gained strong expertise in developing <a href=https://wtt-solutions.com/edtech target='_blank' rel='nofollow'>EdTech</a> solutions. One of such examples is <b>LukLabs</b> — an <a href=https://wtt-solutions.com/our-work/luk target='_blank' rel='nofollow'>app</a> that allows prospective students and their parents to connect and consult on specifics of education in a particular university. The app incorporates live video tours and follow-up conversation sessions to help prospects get insights into college life.\",\"text2\":\"With this project, our goal was to deliver a simple yet catchy interface that wouldn’t overburden users with excessive features and distract them from the main app functionality. For the LukLabs app, we created a high-quality video tool, added an admin panel, introduced a smart search feature and a robust payment system.\"},\"subtitles6\":{\"text1\":\"Developing an e-learning course or a platform is a challenge itself, especially for those who are doing it for the first time and don't know where to start. The good news is that you don't have to be left alone with it. Picking one option out of the three — hiring a web-designer, e-learning developer, or e-learning development agency — will help to set the project on the right track.\",\"text2\":\"It's also necessary to mention that all three options are equally good and can deliver the needed results. When choosing the right e-learning developer, we suggest you focus on how you want the production process to look: choosing e-learning developers means that you'll need additional help facilitating the technical side of a product, while opting for a web-developer will require you to also hire an instructional design consultant. Hiring an e-learning development agency will bring you the fastest results; however, this option normally requires you to invest more resources in production.\",\"text3\":\"Whatever approach you choose for hiring elearning development professionals, make sure to keep focus on your learning objectives. If you need additional help, you can contact us through the form in the top right corner of this page. We are always ready to help!\"},\"questionsList\":[{\"question\":\"How much does e-learning course development cost?\",\"answer\":\"e-learning courses range in price from approximately $5,000 for a single module to $20,000 for a series. These are, however, wide range estimates. To get more precise figures, we recommend contacting our team.\"},{\"question\":\"What factors influence e-learning project development costs?\",\"answer\":\"On average, there are a few things that can affect cost, including: subject complexity, the number of modules and their sizes, content, the kind of technologies you're using to produce a project, and access to SMEs.\"},{\"question\":\"How can we assess the effectiveness of an e-learning training program we’ve developed for our organization?\",\"answer\":\"When it comes to corporate training, the best way to assess the effectiveness of your program is to track several metrics through your LMS, in particular: Course Attendance Rate, Completion Rate, Pass/Fail Rate, Learner Engagement Score and Average Test Score.\"},{\"question\":\"How long does it take to develop an LMS?\",\"answer\":\"It will take about 400-500 hours to develop a complex LMS. This includes business analysis, prototyping, building functionalities, and testing. This is an approximate estimation, since the delivery timeline also depends heavily on the size of the learning module. On average, however, it takes about 180-190 hours to produce one hour of e-learning content.\"}]},{\"id\":\"education-website-design-principles\",\"title\":\"Education Website Design Principles & Best Practices\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"December 13, 2021\",\"timeToRead\":8,\"backgrounds\":{\"img\":\"/images/blog/EducationWebsiteDesignPrinciples/img.jpg\",\"preview\":\"/images/blog/EducationWebsiteDesignPrinciples/preview.webp\"},\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"insights\"],\"metaTitle\":\"Education Website Design Principles & Best Practices for 2022\",\"metaDescription\":\"Ensure your potential students enjoy learning on your educational platform 🧑‍🎓 Master best practices for creating an exceptional e-learning website design!\",\"articleDescription\":[\"In a high-tech environment, an online platform can offer a wide range of benefits to facilitate the learning process. By making it accessible, engaging, and easy to use for everyone, your educational website — or platform — will attract more users and allow you to reach learning objectives faster.\",\"But first, it’s important to consider all the intricacies before coming up with an e-learning website design. Looking at some good website examples, we invite you to browse through the following guidelines to understand the key features of educational website design.\"],\"faqInTableOfContents\":true,\"subtitles\":[{\"id\":1,\"title\":\"Educational Web Design Best Practices\"},{\"id\":2,\"title\":\"Clear navigation\",\"subtitle\":true},{\"id\":3,\"title\":\"Design consistency\",\"subtitle\":true},{\"id\":4,\"title\":\"Effective use of white space\",\"subtitle\":true},{\"id\":5,\"title\":\"Visual hierarchy\",\"subtitle\":true},{\"id\":6,\"title\":\"Focal point placement\",\"subtitle\":true},{\"id\":7,\"title\":\"Clear typefaces\",\"subtitle\":true},{\"id\":8,\"title\":\"Correct content organization\",\"subtitle\":true},{\"id\":9,\"title\":\"Familiarity is key\",\"subtitle\":true},{\"id\":10,\"title\":\"Accessibility features\",\"subtitle\":true},{\"id\":11,\"title\":\"Utilization of colors and contrasts\",\"subtitle\":true},{\"id\":12,\"title\":\"Examples of  Effective Education Website Design\"},{\"id\":13,\"title\":\"Best Online Educational Platform Designs\",\"subtitle\":true},{\"id\":14,\"title\":\"Best University Website Designs\",\"subtitle\":true},{\"id\":15,\"title\":\"Best School Website Designs\",\"subtitle\":true},{\"id\":16,\"title\":\"Design Your Own Educational Website\"},{\"id\":17,\"title\":\"FAQ\"}],\"subtitles1\":[[\"It's very important to make it easy for users to navigate your website. <i>Without clarity and simple guidance, users are more likely to get confused and give it up earlier than you’d like.</i>\",\"Instead of overloading your site with pop-ups, multiple links to external resources and unnecessary sections, try to keep the navigation clean and concise. You will also more likely achieve your goals and projected conversions with a limited number of options on-screen, guiding users smoothly through the website.\",\"\"],[\"In an age of information overload, your potential users should have no problem when it comes to understanding the material or applying for a course. For this reason, it’s important to develop a consistent website graphical style.\",\"<i>In order for your students to better understand the material they are presented with, your images, text padding, color scheme, font sizes, etc., should be proportional and look harmonious together.</i>\",\"It is also important to make sure that the website for your educational facility or e-learning platform does not look like a New Year's Eve carnival with lots of colors and effects, so try to avoid overburdening the website's visual style.\"],[\"Website designs for schools, colleges, or universities should help students focus on the essentials by providing them with a visual balance of white space around the content.\",\"<i>By effectively using white space, the learner will immerse themselves deeply into the content on the site.</i>\",\"To achieve that, try to balance out the elements, and allocate no more than <b>30-40 percent of the total screen space</b> for textual content. Be careful not to overuse this rule to create too much white space on the website, as it can also cause students to lose focus.\",\"<b>NB!</b> White space doesn't have to be completely white. It's a simple space marker, and you can use any color or shade you want.\"],[\"The viewer’s eye should be guided by a tidy visual hierarchy, and all the content on the page should follow a particular order. This is how you'll ensure that learners will advance through the page smoothly, capturing the most important parts and ideas.\",\"Catchy visual hierarchy can be achieved with the help of different alignments, fonts, colors, and font sizes. Images and graphics should direct the readers’ attention inward and forward. This is how you'll provide a natural flow of content and help viewers to better process the information they receive.\"],[\"Focal point placement is an important step towards grabbing the attention of students. Without focal points, your learners will be more likely to bounce off a page or section since there is nothing that 'catches their eyes.'\",\"Focal points can come in the form of individual design elements, visual cues, quotes, etc. You can also summarize your ideas by adding corresponding images or relevant infographics. The main idea here is to make focal points serve as a compass between primary and secondary pieces of content.\"],[\"By using easy-to-read typefaces, your users will have a clear picture of the website or course, and be able to progress through it faster. Here are some tips that can help improve your strategy regarding the use of typefaces:\",[\"Avoid overly fancy fonts that make content difficult to read\",\"Don’t use more than three typefaces and no more than three font sizes\",\"16 pixels is an ideal font size for text body when reading online\",\"Avoid 'light' typefaces since some learners may find them difficult to read.\"]],[\"Good alignment allows learners to consume content through a well-organized visual flow. The primary rule here is to group visual elements according to their type and properties. Also, make sure that items are aligned in distinct ways so that users won't get confused by trying to understand the relations between elements on the page.\"],[\"In order to keep learners focused on content, you need to avoid using overly flashy design elements. The best solution here is to use familiar navigation styles in order to reduce cognitive load. It is much more convenient for learners to scroll through icons and other elements that they have already seen or experienced before. So, even if you want your design to stand out and be novel, make sure it does not interfere with the objectives you set for your website or course program.\"],[\"All website components should be designed to meet the needs of people with disabilities. To do this, it’s better to start with a suitable content management system: for example, Drupal or WordPress that support a range of accessibility features. Then you need to make sure that students can also use the keyboard to navigate and access any information.\",\"The combination of colors should be tuned in such a way that they can be perceived by people with visual impairments. There are different tools like <a href=https://webaim.org/resources/contrastchecker/ target='_blank' rel='nofollow'>WebAim</a> or <a href=https://contrastchecker.com/ target='_blank' rel='nofollow'>Contrast Checker</a> to help you test your color combinations and contrast sensitivity.\",\"Another tip for boosting accessibility of an e-learning website is integrating tools like VoiceOver — a screen reader that reads items appearing on the screen.\"],[\"One of the characteristics of best education website design is the effective use of contrasting colors, which allows the minimization of possible distractions during the learning process. For example, the combination of dark and light colors can play a nice trick in your visual hierarchy. When it comes to the important information on-screen, it can be highlighted with colored accents.\"]],\"subtitles2\":[{\"title\":\"Coursera\",\"text1\":\"As a trusted online educational platform, <a target='_blank' rel='nofollow' href=https://www.coursera.org/ >Coursera’s</a> path to success starts with strong academic website design. By looking at the UI and UX of the website, you can better understand what design principles were followed there. The platform has a well-structured content hierarchy as well as a simple and clean UI. The interface heavily utilizes the white space and, at the same time, is very intuitive and aesthetically pleasant to look at.\"},{\"title\":\"Skillshare\",\"text1\":\"The <a target='_blank' rel='nofollow' href=https://www.skillshare.com/ >Skillshare</a> marketplace is a good example of how fonts can be mixed for better simplicity and legibility. Whether it's a student or teacher, everyone can appreciate the clear navigation and consistent design they'll find here. The website tries to keep users focused on different course offerings all the way through, which makes sense since it is a marketplace and, here, you need to spark students’ interest and direct them to the course page for more information. Skillshare’s homepage is vibrant and has bright images placed against a dark background.\"},{\"title\":\"Udacity\",\"text1\":\"<a target='_blank' rel='nofollow' href=https://www.udacity.com/ >Udacity</a> is another example of a well-designed educational website. The developers tried to convey platform values through truly justified and coherent visuals. Here, while browsing the website, we can see how well the content is organized. We notice buttons right away — thanks to their color and location. This is an example of how you can grab a user's attention and make them navigate to your offerings without scrolling to the end of the main page. Udacity also effectively utilizes white space and uses simple and clear fonts.\"}],\"subtitles3\":[{\"title\":\"Brown University\",\"text1\":\"One of the best e-learning website designs for universities can be seen on the <a target='_blank' rel='nofollow' href=https://www.brown.edu/ >Brown University</a> website, where the key concept is geared around video presentations and cards. We can see how visually rich images are blended effectively with the white background, and how the video cards start to play only after you hover over them. Such an approach helps to avoid overwhelming viewers with multiple videos that start to roll simultaneously. Videos here also work well for entertaining users and drawing their attention to those sections of a website that commonly get skipped almost immediately (team member photos, for example).\"},{\"title\":\"Cornell University\",\"text1\":\"Another good university website design can be found on <a target='_blank' rel='nofollow' href=https://www.cornell.edu/ >Cornell’s</a> homepage. It has easy-to-use navigation and intuitive content alignment. When prospects navigate to the ‘Around the University’ page, they get an idea of what ​​exactly awaits them once they become students. The image gallery showcases moments of university life and possibilities that unfold for future graduates. By going to ‘The Cornell Chronicle’ section, which is conveniently located on page, prospects get information on the latest news and events that have taken place in the university.\"},{\"title\":\"Rhode Island School of Design\",\"text1\":\"The <a target='_blank' rel='nofollow' href=https://www.risd.edu/ >Rhode Island School of Design</a> shows us how responsive website design for schools should look. Since the school specializes in design, their homepage showcases works of their students — in a very smart and stylish manner.\",\"text2\":\"It's absolutely exciting to see how high-resolution images and simple elements located in a grid-like manner all contribute to easier navigation. Regardless of where you are on site at any moment, the design always looks intuitive, allowing you to spot any element right away. This example differs from others, showing us how the novelty of style can be combined with traditional design techniques.\"}],\"subtitles4\":[{\"title\":\"New Orleans Charter Science and Mathematics High School\",\"text1\":\"The <a target='_blank' rel='nofollow' href=https://noscihigh.org/ >New Orleans school</a> website effectively utilizes the 'easy-to-digest' and 'blog-like' design templates. By using image carousels and a clear navigation menu, the website encourages students to check recent school stories and get more details about the education process while dedicated sections for students and their parents allow them to find all the information they might need.\",\"text2\":\"When it comes to educational web design best practices, we implement these in our projects, as well. As an example, the minimalistic UI of the <a target='_blank' href=https://wtt-solutions.com/our-work/luk >Luklabs</a> app — developed by our team — makes it easier for prospective students and their parents to get information on the colleges of their interest — directly from the college students.\"},{\"title\":\"Bronx Charter School for Children\",\"text1\":\"<a target='_blank' rel='nofollow' href=https://tbcsc.org/ >A Charter school</a> in the South Bronx also stands out with their easy-to-navigate and great school website design. The homepage displays upcoming events and an interactive image carousel showcases moments of school life.\",\"text2\":\"As stated on the website, the Bronx Charter School mission is to help students reach their greatest potential in education and create a healthy learning environment for them, since the problem of aggressive behavior in adolescents is hugely widespread today.\",\"text3\":\"With positive parenting techniques and a good example of a catchy visual interface in the <a target='_blank' href=https://wtt-solutions.com/our-work/plh >PLH app</a>, we are also trying to contribute to solving this problem in the edtech solutions we produce.\"},{\"title\":\"Times 2 STEM Academy\",\"text1\":\"The <a target='_blank' rel='nofollow' href=https://times2.org/home  >Times 2 STEM Academy’s</a> website design utilizes image carousels, animation, media and icons that highlight the academy's accomplishments and educational culture. Also, a clear navigation menu and correct placement of focal points allows users to quickly focus on the main elements of a page. The academy's website is powered by Morweb, allowing them to update and add new content that gets automatically optimized for mobile devices, as well.\"}],\"subtitles5\":[\"All in all, simplicity and clarity are the basic pillars needed to achieve absolute success when educating students. After examining the best educational website design examples and principles, we can get a better understanding of how users experience digital products, and what we can do to improve their journey on a website or e-learning platform.\",\"Use all the guidelines and references above to develop your own custom educational platform, or reach out to our team if you need niche-deep expertise for creating <a target='_blank' href=https://wtt-solutions.com/edtech >custom edtech software</a>. Fill out our 'Get in Touch' form in the top right corner of this page and our managers will contact you a-s-a-p!\"],\"questionsList\":[{\"question\":\"How long does it take to create a design for an educational website?\",\"answer\":\"On average, it can take anywhere from four to eight weeks to come up with a basic website design; however, since the requirements and scope of work are unique for each project, it may take much more time to develop a website or educational platform. If you want to get a precise estimate for your project, contact our managers for more information in that regard.\"},{\"question\":\"Do I need to be local to work with you?\",\"answer\":\"No. We've been effectively working with clients from the UK, Europe, USA, and Canada. We successfully deliver products to our clients regardless of their location, time zone, language, etc.\"},{\"question\":\"To what extent do I need to be involved in the development process?\",\"answer\":\"At WTT Solutions, client engagement is a must throughout the process, because this is the only way we can guarantee developing a product that completely meets the initial goals set. The client's feedback and input are crucial for us, so the closer we cooperate on a project — the better.\"},{\"question\":\"Can you redesign my existing educational product?\",\"answer\":\"Yes. Aside from developing digital products from scratch, we can also update your current solution to ensure that it fully corresponds to all the latest design trends and effectively utilizes e-learning techniques.\"}]},{\"id\":\"what-stack-use-to-build-elearning-platform\",\"title\":\"What Tech Stack To Use To Build a Custom e-Learning Platform?\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"December 14, 2021\",\"timeToRead\":10,\"backgrounds\":{\"img\":\"/images/blog/WhatStackUseForElearningPlatform/img.jpg\",\"preview\":\"/images/blog/WhatStackUseForElearningPlatform/preview.webp\"},\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"insights\"],\"metaTitle\":\"Technology Stack to Build a Custom e-Learning Platform\",\"metaDescription\":\"In this post, we examine tech stacks from the popular platforms and provide recommendations on how to choose a tech stack for a custom e-Learning platform\",\"articleDescription\":[\"Defining which tech stack to choose is one of the most important steps to take during an e-learning platform development. Aside from great UI and well-thought-out UX, the tech stack is what defines how well your product will be able to embody your business model, scale, and become a go-to solution for your audience, in general.\",\"Making a decision about which technologies to use for your project is all about business needs, pricing strategy, marketing, and sales. That's why it's important for business owners to have at least a basic understanding of the tools, utilities, and applications that will be used for the creation of their product architecture.\",\"In this post, we'll show you technology stacks used by elearning platforms like Coursera and Udemy, and give some recommendations regarding the choice of tech stack for custom e-learning development. Please, also note that the process of putting technologies together shouldn't be blindly copied — especially not from the competition in particular. So make sure to always put the structure of your future project first when picking a technical stack to build an elearning platform.\"],\"faqInTableOfContents\":true,\"subtitles\":[{\"id\":1,\"title\":\"Technology Stack Used By the Most Popular Elearning Platforms\"},{\"id\":2,\"title\":\"Tech Stack Needed to Build a Custom Elearning Application\"},{\"id\":3,\"title\":\"Our Experience\"},{\"id\":4,\"title\":\"Summing Up\"},{\"id\":5,\"title\":\"FAQ\"}],\"subtitles1\":{\"text1\":\"Even though there are dozens of different e-learning platforms on the market, many of them have lots of similarities in their architecture. That's why we've decided to focus on five of the most popular ones for this blog. We’ll begin with a review of these platforms and see what technologies they use. \",\"list\":[{\"title\":\"Coursera\",\"text1\":\"A massive open online course (MOOC) provider of global proportions that partners with world renowned educational institutions to provide students access to different e-learning programs and degrees. The platform partners with 200+ universities and has an audience of over 82 million people worldwide. Coursera offers 1600 courses for free; students can also pay to get a certificate upon completion. Plus,more than 3000 paid certificate programs under their Coursera Plus monthly plan.\",\"text2\":\"Over the years, Coursera's backend has experienced several transitions. At the very beginning, the platform's code was written on PHP, and their developers later moved to Python and Go. Presently, Coursera utilizes the Scala and Play framework. MySQL is used by platform developers to manage relational databases. For web-server and cloud storage, the platform uses NGINX and Amazon S3 respectively. \",\"text3\":\"For the frontend, the company utilizes JavaScript, ReactJS, and Bootstrap. In total, the platform is currently using more than 50 tools and applications, including GraphQL, Kafka, Cassandra, Underscore, and others.\"},{\"title\":\"Udemy\",\"text1\":\"Udemy is a MOOC platform that offers more than 180,000 courses to over 40 million students around the world. Some 57,000 instructors provide courses for the platform in 65 languages. The total length of educational video content posted on Udemy has already exceeded 33 million hours. The platform offers both free and paid courses, and also has a dedicated collection of 6000+ courses offered under their Udemy For Business program.\",\"text2\":\"As to the tech stack, initially, Udemy was built using PHP, however, the company moved to Python for its better performance and scalability possibilities. For the frontend (client-side) the platform developers used JavaScript, AngularJS, CSS3 and HTML5. In total, Udemy utilizes 97 technologies for their platform, including Node.js, React, MySQL, Django, and more.\"},{\"title\":\"Skillshare\",\"text1\":\"This e-learning platform gives access to more than 35,000+ courses and has an audience of 5 million users. All courses are broken down into seven main categories: Animation, Design, Illustration, Lifestyle, Photo/Film, Business, Writing. Also, the platform has a dedicated section called 'Groups' that allows learners to connect with creators, share their work, discuss courses, etc. Skillshare has a free trial and several paid package plans for individual/team use.\",\"text2\":\"The platform uses PHP, React, Node.js and Backbone.js as its main programming technologies. For its server needs, Udemy uses AWS. The platform uses 54 technology products in total, also including NGINX, Cloudflare, Underscore, and D3.js.\"},{\"title\":\"edX\",\"text1\":\"Started by MIT and Harvard University as a non-profit MOOC platform, edX quickly got attention, and, as of now, hosts 3,500+ courses. All programs are sourced from more than 140 higher educational institutions, and, aside from certificates, offer students the possibility to get a full (online) graduate degree or even master's credentials. EdX is technically free; however, if a student wants to get a verified certificate — upon course completion, — they will need to pay a fee that ranges from $50 to $100.\",\"text2\":\"Most of the server-side code is implemented in Python and Django. For the frontend, edX uses JavaScript, Backbone.js, Sass, and Bourbon framework. All the platform courses are stored in MongoDB, while YouTube and Amazon S3 are used for sourcing the video content. MySQL is used for student data storage. The platform currently utilizes 56 tech products that include HTML5, Google Analytics, jQuery, NGINX, Cloudflare, and others, in addition to those listed previously.\"},{\"title\":\"Udacity\",\"text1\":\"Udacity is known for being the 3-rd most popular e-learning platform in the world with (more than 11 million users.) It currently offers access to more than 200 online programs. What makes Udacity different from other vendors is that this platform is more focused on job training and providing learners with practical knowledge in the IT field. Here, learners can also get a Nanodegree — a micro- credential for the program/profession of their choice.\",\"text2\":\"The platform is built on Python and uses Angular and Bootstrap for the client libraries. As to other front-end technologies, Udacity uses React, Redux.js, Webpack, GraphQL, etc. For the cloud infrastructure, AWS is used. Apart from the technologies that are critical for the platform operation, Udacity utilizes more than 40 software products that are used for marketing, sales, HR: Facebook ads, OptinMonster, Amplitude, Andela, etc.\"}]},\"subtitles2\":{\"text1\":\"Generally speaking, the basic principles for selecting a tech stack for custom elearning solutions are the same as for any other type of software or digital product. Normally, the structure of the tech stack would consist of four main parts: frontend, backend, middleware, and third-party integrations.\",\"list\":[{\"title\":\"Frontend\",\"text1\":\"The frontend is the client-side or product interface through which users interact with the platform. Most commonly, frontend combines HTML, CSS, and JavaScript.\",\"points\":[\"<b>HTML</b> is the backbone of every webpage. It is responsible for the way data and content are organized and structured on the page.\",\"<b>CSS</b> defines the style and appearance of the content — fonts, colors, background, etc.\",\"<b>JavaScript</b> adds advanced functionality to the page and makes it interactive. This can be done with the help of JavaScript libraries like React.js and jQuery via frameworks Angular and Backbone.\"]},{\"title\":\"Backend\",\"text1\":\"The backend is the server-side or the heart of every digital product. It is responsible for the correct functioning of all the software's components and features. The business logic, hosting, and all the deployments occur on the server-side as well. Every backend consists of the server itself, server frameworks, programming languages, databases, and APIs.\",\"text2\":\"Some products are still deployed using PHP; however, the big industry names try to rely more on Python. As to other popular frameworks used for the backend, these are Ruby, Django, Spring, and .NET.\",\"text3\":\"As to the mobile apps, these are commonly developed with the help of Swift or Xcode (for iOS platforms) and Java or Kotlin (for Android platforms). However, recently more and more mobile projects are switching to Flutter — an open-source framework that allows the creation of native-like apps for both Android and iOS. This technology is used by our team as well.\"},{\"title\":\"Middleware\",\"text1\":\"This software serves as a connector between the client and server and is responsible for data parsing, management, and all connection activities that take place amidst the frontend and backend. It may consist of web servers, app servers, CMSs, and other utilities that help to facilitate software development processes.\",\"text2\":\"The middleware shouldn't be considered a developer tool, but rather a middle layer that allows connecting different parts of the product. Java and C# are the technologies normally used for this kind of software.\"},{\"title\":\"Third-party integrations\",\"text1\":\"To this category fall all applications, software, and business tools that are used by companies to test, advance their products, support current business models, and daily operations across departments. This might be the largest segment of software since there are literally thousands of products offered by the market today: Optimizely, Google Analytics, Slack, Jira, AWS products (Elastic Load Balancing, AWS chatbot, Autoscaling, CloudWatch, etc), and more.\"}]},\"subtitles3\":[\"As an outsourcing development team with 5+ years of experience creating <a href=https://wtt-solutions.com/edtech target='_blank'>edtech</a> projects for e-learning <a href=https://wtt-solutions.com/startups target='_blank' >startups</a> and established educational institutions, we at WTT Solutions offer transparency about the production practices we follow and the technologies we use.\",\"Take a look at one of our recent projects — the <a href=https://wtt-solutions.com/our-work/plh target='_blank' >PLH</a> app. Preparing for Lifelong Health platform was developed to help parents establish healthy relationships with their teens. Through a simple and intuitive interface, the platform educates parents and caregivers on effective parenting tactics and strategies that may help to prevent the development of adolescent behavioral problems, and reduce the risk of domestic violence.\",\"During the interface creation, our goal was to use highly flexible and configurable technologies that would allow us to generate in-app components in certain ways to come up with a unique visual design. For this project, we used Ionic and Angular, and it took 990 hours of staff bandwidth to complete all the stages.\"],\"subtitles4\":[\"There is no definite answer to the question 'Which technology stack for building e-learning platforms' due to the fact that it all depends on your product and the requirements that you put before it.\",\"As for a general recommendation for <a href=https://wtt-solutions.com/blog/how-to-develop-edtech-startup target='_blank'>newly established startups</a> and existing businesses, when choosing a technology stack for developing an e-learning platform try to always think in advance to understand how your tools of choice will affect the platform in the long-term perspective.Do you or your team have a sufficient level of expertise to support the product in the future with the chosen tech set, etc?. Asking yourself such leading questions will help to illustrate the vision regarding the architecture of the future product.\",\"In case you want to choose the right technologies for your elearning site and are looking for additional help, you can always count on our team. We have a proven track record in <a href=https://wtt-solutions.com/blog/how-to-build-elearning-platform target='_blank' >developing elearning platforms</a> and can help with any task you may have in the programming field, regardless of its complexity. To get in touch, click the button in the top right corner of this page, and fill out and submit the form. One of our representatives will promptly contact you.\"],\"questionsList\":[{\"question\":\"We don't know which tech stack to choose. What should we do?\",\"answer\":\"In order to choose the tech stack for your project, identify which programming languages and tools would 1) fit your type of product, 2) are relevant to the requirements you set, and 3) be able to effectively respond to challenges your product may come across in the future. If you are new to software development, the best option would be to look for professional assistance, from an experienced software development partner.\"},{\"question\":\"How do we know that it's time for us to update our tech stack?\",\"answer\":\"There may be a few red flags telling you that it's time to update. Consider switching your technology base when you struggle to tap into new markets, when your existing code can't support new features and when you start to witness performance issues and scalability limitations.\"},{\"question\":\"We're thinking of updating our tech stack but are not sure our team will be able to carry it out. What would be your advice in that regard?\",\"answer\":\"Switching to a newer tech stack can be problematic for those teams whose expertise is limited to a few particular frameworks or languages, however, sticking to the outdated technologies can bring even more troubles. We'd recommend looking for ways to bring your product's architecture up to date with the latest technologies and market trends. You can always contact us for information on how our team can assist you with updating your tech stack.\"},{\"question\":\"What are the possible risks of choosing the wrong technology stack?\",\"answer\":\"The consequences of adopting the wrong tech stack may not become obvious on day one, however, they will undoubtedly unfold in the short-term perspective. Difficulties aligning your product/platform with your business strategy, inability to further adapt the product to market needs, and functionality limitations are a short list of challenges that come with the wrong technology decisions.\"}]},{\"id\":\"edtech-website-redesign-process\",\"title\":\"Edtech Website Redesign Process and Best Practices\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"December 15, 2021\",\"timeToRead\":16,\"backgrounds\":{\"img\":\"/images/blog/edtechWebsiteRedesignProcess/image1.jpg\",\"preview\":\"/images/blog/edtechWebsiteRedesignProcess/image.jpg\"},\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"edtech\"],\"metaTitle\":\"EdTech website redesign guide and best practices | WTT Solutions\",\"metaDescription\":\"This educational website redesign guide show you how to do process of redesigning completely risk-free ✅ Read on to find out more insights form WTT Solutions\",\"articleDescription\":[\"At some point, every company comes to realize that their website is no longer relevant and doesn't work as it should. And it's not about the effectiveness of marketing strategy or ad campaigns alone, the problem lies much deeper and requires website owners to introduce more significant changes to a website. \",\"But what actually to do in this case? Do you need to completely take your educational website apart and rebuild it from scratch or will the basic makeover be enough? In this blog we'll try to answer these questions, show what makes the process of website redesign different from  website refresh, as well as provide important educational website redesign tips.\"],\"faqInTableOfContents\":true,\"subtitles\":[{\"id\":1,\"title\":\"Educational Website Redesign vs Website Refresh\"},{\"id\":2,\"title\":\"When Does Your Edtech Website Need Redesign\"},{\"id\":3,\"title\":\"Stagnancy\",\"subtitle\":true},{\"id\":4,\"title\":\"Decrease of online sales\",\"subtitle\":true},{\"id\":5,\"title\":\"Full rebrand\",\"subtitle\":true},{\"id\":6,\"title\":\"Outdated technology\",\"subtitle\":true},{\"id\":7,\"title\":\"Advanced integrations\",\"subtitle\":true},{\"id\":8,\"title\":\"Digital strategy makeover\",\"subtitle\":true},{\"id\":9,\"title\":\"Educational Website Redesign Process\"},{\"id\":10,\"title\":\"Benchmark Your Current Metrics\",\"subtitle\":true},{\"id\":11,\"title\":\"Find Most Valuable Pages\",\"subtitle\":true},{\"id\":12,\"title\":\"Understand User Journey\",\"subtitle\":true},{\"id\":13,\"title\":\"Analyze Competitors & Gather Inspiration\",\"subtitle\":true},{\"id\":14,\"title\":\"UX/UI Stage\",\"subtitle\":true},{\"id\":15,\"title\":\"Development Stage\",\"subtitle\":true},{\"id\":16,\"title\":\"Launch New Website\",\"subtitle\":true},{\"id\":17,\"title\":\"How To Budget Edtech Website Redesign\"},{\"id\":18,\"title\":\"Redesign strategy\",\"subtitle\":true},{\"id\":19,\"title\":\"UX/UI Stage\",\"subtitle\":true},{\"id\":20,\"title\":\"Custom functionality\",\"subtitle\":true},{\"id\":21,\"title\":\"Content\",\"subtitle\":true},{\"id\":22,\"title\":\"Website size/number of pages\",\"subtitle\":true},{\"id\":23,\"title\":\"Talent in charge of the redesigning process\",\"subtitle\":true},{\"id\":24,\"title\":\"Redesign Your Website Without Any Loss\"},{\"id\":25,\"title\":\"FAQ\"}],\"subtitles1\":{\"text1\":\"Before we proceed to the subject itself, it's necessary to sort out the main differences between <i>redesign</i> and <i>refresh</i> as these terms often get confused with one another.\",\"list\":[{\"text1\":\"<b>Website refresh.</b> This process involves introducing minor enhancements to the website and does not heavily influence its structure. It can be considered as a 'quick makeover' that leaves the technical base of a platform unchanged, only slightly sprucing up its appearance. Requires minimal investments to do. The main characteristics of the website refresh are:\",\"points\":[\"Low initial investments\",\"Relatively short delivery timeline\",\"Small code adjustments\",\"Limited design customization\"]},{\"text1\":\"<b>Website redesign.</b> The more complicated process involves extensive changes in website structure, content, navigation, etc. It also includes a complete makeover of a website appearance and thus requires significant investments to be made. The website redesign normally follows the establishment of a new marketing strategy or rebranding process. When doing a redesign, the website owner should be ready for:\",\"points\":[\"High initial investments\",\"Long delivery timeline\",\"Full code customization\",\"Complete website design change\"]}],\"text2\":\"Now after we get through the definitions of both approaches, let's look in more detail at the redesign process, in particular the reasons that can make the website owner decide to start elearning website redesign.\"},\"subtitles2\":{\"list\":[{\"title\":\"Stagnancy\",\"textList\":[\"If your site hasn't received any updates from day one, looks old, and struggles to provide convenient UX, then it's time for an upgrade. Among the most common symptoms of the design obsolescence are slow loading speed, text overuse, and poor mobile responsiveness.\",\"<b>Slow loading.</b> Basically, the longer it takes to load your website the higher are chances that users will bounce off — without waiting for a page to fully load. The rapid development of digital technologies made users accustomed to high internet speeds and less tolerant of slow website performance.\",\"<b>Text overuse.</b> Adding too much text on a page was a common practice 10-15 years ago, and it is still to this day, especially in the educational industry. Lots of visitors will find a website with lots of textual content hard to interact with, and abandon it right from the main screen. Due to large amounts of text, users won't be able to spot important links, CTAs, and understand what you want them to do next.\",\"<b>Mobile responsiveness.</b> According to <a href='https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/' target='_blank'>Statista</a>, in the Q1 of 2021, <b>54.8%</b> of the entire web traffic was generated via mobile phones, and this trend will only continue to grow in the future. This means that mobile-friendly designs are a must for modern websites. So if when your website gets opened on a mobile phone the text font becomes too small, media fall off the display, or scrolls become unavailable — this means it's time to update. \"]},{\"title\":\"Decrease of online sales\",\"textList\":[\"Buying isn't a straightforward process, and often people take several touch points before they buy anything. Making sure that the customer journey is as smooth as possible is especially important for EdTech and MOOC platforms where users make their decision regarding not physical but digital products.\",\"This is where credibility and current level of UX can make or break a sale — according to Credibility Research carried out by Stanford, <a href='https://credibility.stanford.edu/guidelines/index.html' target='_blank'>75%</a> of users say they judge a company's credibility according to its website design. On the other hand, the initial opinion about the website gets normally formed in less than <a href='https://www.tandfonline.com/doi/abs/10.1080/01449290500330448#.UctarJxDVI0' target='_blank'>50 milliseconds.</a>\",\"So, if the website neither looks professional, nor offers all the needed information, prospects won't trust such a company. This, in turn, will lead to the decrease of conversions. Aside from that, websites with obsolete design also struggle to get properly indexed by search engines. Low ranking means less traffic to a website — less traffic limits the amount of leads that you can generate — less leads means your website isn't using its potential to the fullest.\"]},{\"title\":\"Full rebrand\",\"textList\":[\"A website redesign is required also in case of acquisition, merger, or change in branding strategy. Rebranding would typically assume changes in visual identity, logo, color scheme, storytelling, or even renaming a company/platform.\",\"It's important to note here that oftentimes with the rebranding, companies try to adjust their mission, values, and vision, enter new markets, or even target a completely new audience. In terms of a website this could mean that — aside from media, colors, and text copies — the entire sections can become irrelevant and will need to be replaced.\",\"Thus, the basic refresh won't work here and the platform owners will need to approach the rebranding process holistically — reconsidering customer journeys, fine-tuning UX, adjusting website structure, etc.\"]},{\"title\":\"Outdated technology\",\"textList\":[\"All edtech projects rely heavily on technology, which means that — in order to correspond to modern trends and market requirements — over the course of time, their techstacks may change significantly. For the websites this also means that its components will need to be updated/redesigned once the change in technology occurs.\",\"Another reason for website redesign may lay in the fact that lots of the older platforms were built using now outdated technologies (like flash), which cannot be properly read or processed by search engines. There also can be old plugins that website owners haven't updated in years. Because of all these issues the website can start to experience performance issues and will struggle to provide a significant level of security to its users and administration.\"]},{\"title\":\"Advanced integrations\",\"textList\":[\"Edtech websites normally incorporate dozens of third-party integrations that all come from different vendors. Here, each vendor may have its policy regarding the tech that needs to be utilized by a website in order to support their solution.\",\"Most commonly, all these requirements will be wrapped around some modern technologies though. So, in order to be able to integrate a payment gateway or a simple live chat software, you'll need to make sure your website architecture is compatible with those solutions.\",\"It might not be obvious from a first glance, however, introducing third-party plugins or other types of integrations may reshape the customer experience completely — like adding a live video chat can change the sales funnel, marketing integrations can influence website's structure, navigation, etc.\"]},{\"title\":\"Digital strategy makeover\",\"textList\":[\"Marketing strategy of your business and the website itself are always inextricably linked to one another. Whenever big changes occur in your 'game plan', they will most probably require you to redesign existing educational website as well.\",\"For example, incorporating a new SEO strategy may involve both small changes (like adoption of the new components for site pages) and big ones (like completely rebuilding website structure). Content marketing may influence the site structure as well: content audit can inform platform owners of content gaps, media overuse, etc. All these findings will affect the appearance of site pages too.\"]}]},\"subtitles3\":{\"list\":[{\"title\":\"Benchmark Your Current Metrics\",\"textList\":[{\"text\":\"The very first thing you want to do when preparing for a website redesign is conducting a website audit to figure out where you are at the moment, and in which directions you can move from there. You want to precisely know the current state of all integrations and website assets to understand what's working and what's not working.\"},{\"text\":\"Aside from that, you also should analyze website performance and current metrics, such as number of visits/visitors, bounce rate, linking domains, keywords, page indexed, sales generated, etc. Ideally, you want to come up with a spreadsheet that details performance (metrics) of each individual page of a website. This document will serve as a reference, helping you conduct the redesign process with less performance losses.\"},{\"text\":\"<b>NB!</b>\",\"numList\":[\"Make sure that after the redesign process the same tools are used for measuring the website current benchmarks. Otherwise, comparing reference (pre-redesign) benchmarks to current (post-redesign) ones may become senseless.\",\"Before introducing any changes, make sure to back up the current version of the website so you don't lose any data or components after moving to a new design.\"]}]},{\"title\":\"Find Most Valuable Pages\",\"textList\":[{\"text\":\"Even though the redesign process may involve significant structural changes, it should never cause damage to those assets (pages) that are most valuable in terms of performance.\"},{\"text\":\"<i>What is already working well should continue to do so once the redesign is done, so we recommend to refrain from blindly redesigning everything as it can cause irreparable damage to the platform.</i>\"},{\"text\":\"You need to identify your most valuable pages and make sure that you treat them as carefully as possible — to keep the website from losing its positions and conversion rates after the redesign is done. It's also important to identify relationships between different pages to understand how changes applied to one will affect others.\"},{\"text\":\"No doubt that there may be lots of less significant pages that you can simply tear apart and redesign from scratch (or even delete), however, make sure that you always conduct a thorough analysis first.\"}]},{\"title\":\"Understand User Journey\",\"textList\":[{\"text\":\"Users journey covers all steps that users 'take' on site to make a purchase (or buy a course in case of educational platforms). Understanding how users make their decision is very important when doing website redesign as it is the only way for you to figure out whether the changes you are about to implement will match user's expectations.\"},{\"text\":\"By mapping out the user journey it is also possible to find gaps and barriers that stop users from performing target actions. This information can then be used during a redesign to understand what needs to be added (or removed), and how user behavior correlates with your website structure in general.\"},{\"text\":\"To figure out how users interact with the platform, interview them asking a few questions about their experience on site, for example:\",\"list\":[\"Where do you get stuck on this website and/or experience issues?\",\"What do you like/dislike about your experience on this site?\",\"Does the experience you get with this site on mobile differ from experience on the desktop?\",\"What stops you from [target action] ?\",\"What made you decide to navigate to page X, Y, Z…?\"]},{\"text\":\"Another effective way of mapping out the user journey is website heatmaps: these can help you visualize user's interactions with different elements on the page. By using the information you can better shape the goals of the redesign strategy.\"}]},{\"title\":\"Analyze Competitors & Gather Inspiration\",\"textList\":[{\"text\":\"During this step you basically decide how your updated website will look like. By gathering inspiration from similar websites and analyzing industry standards you'll be able to come up with the unique style for your platform. However, here's one trick to be aware of: don't try to blindly copy everything because you never know how well this or that concept works on another website.\"},{\"text\":\"Instead, pick two-three websites and sit down with your team to discuss what you like, and what you don't like, how incorporating a particular idea will influence UX or your business strategy, etc. Ask yourself what feel you want a user to get once they open a platform, what features should a website offer, what type of media should be added, etc. Gather inspiration but always be selective and base decisions on the needs of your audience and product in the first place.\"}]},{\"title\":\"UX/UI Stage\",\"textList\":[{\"text\":\"This is where you or your team get to create a design itself. The best way to approach this process is taking it slow — instead of redesigning everything at once, introduce changes incrementally, in orderly fashion.\"},{\"text\":\"Start with wireframing — a process during which you establish wireframe (structure) for each of your pages. Wireframes come in a form of sketched out black'n'white schemes that show how the content will be laid out on the future page.\"},{\"text\":\"Once that's done, design a few sections of a page to understand whether the obtained result matches your vision. By doing so you can save yourself a time designing dozens of pages just to find out that some ideas, in fact, aren't working. So, moving through the process step-by-step will allow you to revise and adjust the visual style on the go.\"}]},{\"title\":\"Development Stage\",\"textList\":[{\"text\":\"The final stage of the redesign process is where all the code work happens, and previously created mockups (designs) get transferred to CSS/HTML. This step will take a big chunk of a time as here aside from the development process itself you will also need to check lots of other aspects, like cross-browser compatibility, mobile responsiveness, correct functioning of all integrations, features, etc.\"},{\"text\":\"You'll also want to make sure that the SEO strategy is correctly implemented on your new redesigned platform: web pages contain correct title tags and meta descriptions, images are optimized, website load speed is high, website utilizes internal linking, and contains relevant keywords.\"}]},{\"title\":\"Launch New Website\",\"textList\":[{\"text\":\"At this point you've reached the most anticipated moment of the redesign process and can finally launch your fresh site. But before that, however, it's important to do a few final checks to ensure everything works as it should:\",\"list\":[\"check whether there are any broken links, media\",\"have the 301 redirects set in place\",\"make sure that all pages are rendering\",\"install all necessary tracking codes\",\"set up analytics and heatmap\",\"update the sitemap in Google Search Console, etc.\"]},{\"text\":\"After the website launch you can start collecting user data, assessing the performance of the new website structure/design, testing different layouts to improve UX and carry out other related activities that will help you boost site performance.\"},{\"text\":\"<i><b>Tip:</b> in order not to drown yourself in testing hundreds of design ideas and website pages, pick 4-5 the most important pages and work on those first.</i>\"}]}]},\"subtitles4\":[\"Whenever we at WTT Solutions are approached by a new client with the question regarding the edtech website redesign costs, the one realistic answer we could give is: \\\"It depends\\\". In our opinion, making people knowledgeable about the aspects that influence the redesign budget is more helpful than giving a broad estimate like \\\"from $5,000 to $150,000\\\".\",\"In order to budget your project correctly and avoid unexpected overruns, you need to know where your resources will be going to. Here are the six main components that normally influence the costs of the edtech website redesign process:\"],\"subtitles5\":{\"list\":[{\"title\":\"Redesign strategy\",\"textList\":[{\"text\":\"Putting together a redesign strategy helps to set a foundation for an entire project. It will normally include expenses connected with interviews of all stakeholders, audit of the plugins and integrations, analysis of current metrics and overall state of the website, etc.\"},{\"text\":\"In other words, the amount of resources needed to be invested into the establishment of redesign strategy will be identified by the number of deliverables produced. Normally, these are:\",\"list\":[\"<b>Value proposition map.</b> Also referred to as 'empathy map', this document encompasses user interviews and helps to define their fears, pain points, and proposes ways of solving those.\",\"<b>Proposed website structure.</b> This document contains a complete list of website pages that will make it into your new redesigned website, and also defines their place in website navigation.\",\"<b>Strategy for high-level pages.</b> This document details layouts of each of the high-priority pages (like the main page), describes user journeys, lists recommended components and design elements that need to be added, and sets primary and secondary goals for each of those pages.\",\"<b>Keyword analysis.</b> This spreadsheet details all keywords that you want each of your pages to be ranked for. It also includes the analysis of keyword strategy adopted by your competition.\",\"<b>SEO strategy.</b> This document may come as an addition to the keyword spreadsheet, and contains the URL structure, SEO titles, metadata recommendations, and alt title suggestions for media.\"]}]},{\"title\":\"UI/UX design\",\"textList\":[{\"text\":\"Estimating the costs of the design part itself might be the most subjective thing to do. Here, the budget will depend entirely on the project requirements, complexity of animation, layouts, graphics, etc. Don't forget also about the number of pages that need to be designed.\"},{\"text\":\"Another side of the coin is imagery — what media is required, will it be sourced from stock websites or created from scratch, do we need a professional to edit stock photography or not, and so on. The ultimate recommendation for keeping budget within acceptable range would be not overthinking and overdoing designs — in any case, you can always go back and add some custom design elements to your pages later on.\"}]},{\"title\":\"Custom functionality\",\"textList\":[{\"text\":\"This aspect of the redesign process can really affect your budget as more complicated tech stacks usually demand for significantly higher investments. Today, platforms like Coursera, Udacity, or Skillshare rely on hundreds of third-party tools and technologies in their daily operations.\"},{\"text\":\"You will be totally correct if you say that there are lots of free plugins on the market that you can use; however, if you're looking for some specific functionality (like the advanced reports), then most probably you'll need to opt for a paid technology.\"}]},{\"title\":\"Content\",\"textList\":[{\"text\":\"In general, the term 'content' encompasses several activities, each of which can affect the budget, either decreasing (if activity is carried out by a website owner) or increasing it (if activity is carried out by a dedicated professional). So what are these activities?\",\"list\":[\"Copywriting. This is basically, the creation of all page copies, blog posts, texts for popups, etc. Most often, copywriting is carried out by a dedicated copywriter.\",\"Content implementation. This is the process of posting or adding ready content to a page and can be carried out either by a copywriter or website owner themselves.\",\"Content review. Large companies normally have a dedicated copy editor who reviews the content before it goes to a website. In small and mid-sized companies, this process can be carried out by the website owner too.\"]},{\"text\":\"Content production area is the one which many website owners tend to invest a minimum budget in during the redesign process. Even though it's okay to try to save up some budget here, it's still highly advisable not to push the budget down hard as it may damage the website appearance in the end.\"}]},{\"title\":\"Website size/number of pages\",\"textList\":[{\"text\":\"The number of pages directly affects the length of the redesign process, i.e. the larger your website is, the more time it will take to update it. To make sure you allocate the budget wisely, get rid of duplicate pages or those that basically do the same thing. Also keep the website navigation easy for users to operate as they can easily get lost among dozens of pages in dropdown menus.\"}]},{\"title\":\"Talent in charge of the redesigning process\",\"textList\":[{\"text\":\"This will be a team responsible for the implementation of your website redesign plan. Here you can choose either to assemble an in-house team or go outsource. With an in-house team you get more control over the project; however, be ready to account for all the associated expenses, such as hiring, payroll, office renting, energy bills, etc. \"},{\"text\":\"On the contrary, when hiring an outsource team, you can achieve the same level of control (when working with professionals) while paying only for the amount of time that team spent developing your project. You won't need to bear any additional expenses. In general, going outsource will cost you 2-3 times lower compared to the ongoing maintenance of an in-house team.\"}]}]},\"subtitles6\":[\"The redesign is a complex task that needs to be approached carefully. It requires you to have a clear edtech website redesign strategy that would precisely detail steps to redesign elearning website. Only by knowing exactly what you want to get — and how you will do that — will allow you to carry out the website redesign with minimum loss.\",\"In this educational website redesign guide we tried to detail the best practices of the redesign process as much as possible, so when it's time for you to do a website makeover, use this information to tackle any challenge that you may come across.\",\"If you need help with planning edtech website redesign, or are looking for the consultation regarding the <a href='https://wtt-solutions.com/edtech' target='_blank'>development of your edtech project</a>, contact us. At WTT Solutions we've accumulated 5+ years of experience developing edtech products for private organizations and established educational institutions. Check our portfolio — there you'll find edtech products we've worked on and technologies we use.\",\"To get in touch, simply fill up a contact form that can be accessed via a dedicated button in the top right corner of the page, and one of our managers will respond to your inquiry as soon as possible!\"],\"questionsList\":[{\"question\":\"What information do you need from me to get started?\",\"answer\":\"In order to come up with the most relevant solution for your website, we need to know your requirements and goals first. We also need to carry out a website audit to understand what is lacking in terms of UI/UX. Once that's done, we come up with a detailed redesign plan that will include all the steps needed to be done to maximize usability and ROI.\"},{\"question\":\"Should I redesign my educational website completely?\",\"answer\":\"It depends on the current state of your website, your goals, and expectations from the upcoming redesign. However, if your website is outdated and requires major improvements, then it would make more sense to rebuild a platform from scratch as doing 'piecemeal' changes may not produce the desired effect. Contact our managers to get more information in that regard.\"},{\"question\":\"How long does it take to redesign a website?\",\"answer\":\"Depending on the scope of work and requirements set before our team it may take anywhere from 30 to 90 days to redesign a website. The more complex projects, however, can take even more time, so to get a precise estimate for your project contact us in the way convenient for you — via email, phone call or submit form.\"},{\"question\":\"Do you offer support service with the new website once it's redesigned?\",\"answer\":\"Once the project is finished we can provide ongoing support and maintenance services as well, on request. Even if you decide not to prolong our cooperation, we'll make sure that you'll be able to easily transfer your project to another team.\"}]},{\"id\":\"guide-to-custom-lms-development\",\"title\":\"A Complete Guide to Custom LMS development\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"December 31, 2021\",\"timeToRead\":10,\"backgrounds\":{\"img\":\"/images/blog/GuideToCustomLms/img.jpg\",\"preview\":\"/images/blog/GuideToCustomLms/preview.webp\"},\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"insights\"],\"metaTitle\":\"Custom LMS Development Guide: Cost, Design & Technologies\",\"metaDescription\":\"This blog post explains how to create custom LMS👨‍💻Discover must-have features, costs, and best practices for creating your own solution.\",\"articleDescription\":[\"Learning is difficult without a dedicated system that is capable of delivering relevant knowledge to a target audience. In order to effectively educate your employees or users, you need a platform that will combine a wide range of learning formats to suit different types of learners. Learning Management System (LMS) is capable of doing so.\",\"In this blog we take a look at the benefits of custom LMS development, go step-by-step through the process of building such a system, and give some insights that will help you better assess the average development cost for LMS for your organization.\"],\"faqInTableOfContents\":true,\"subtitles\":[{\"id\":1,\"title\":\"Does Your Company Need a Custom LMS Solution?\"},{\"id\":2,\"title\":\"You want to reduce training costs\",\"subtitle\":true},{\"id\":3,\"title\":\"You want to shorten time spent on training staff\",\"subtitle\":true},{\"id\":4,\"title\":\"You are looking for custom features\",\"subtitle\":true},{\"id\":5,\"title\":\"You need a higher level of personalization\",\"subtitle\":true},{\"id\":6,\"title\":\"Must-have Custom LMS Features\"},{\"id\":7,\"title\":\"Content Management\",\"subtitle\":true},{\"id\":8,\"title\":\"Tests\",\"subtitle\":true},{\"id\":9,\"title\":\"Statistics & Dashboards\",\"subtitle\":true},{\"id\":10,\"title\":\"Integrations\",\"subtitle\":true},{\"id\":11,\"title\":\"Compliance With Standards and Specifications\",\"subtitle\":true},{\"id\":12,\"title\":\"Gamification\",\"subtitle\":true},{\"id\":13,\"title\":\"LMS Software Design Best Practices\"},{\"id\":14,\"title\":\"Define the desired outcome\",\"subtitle\":true},{\"id\":15,\"title\":\"Assemble production team\",\"subtitle\":true},{\"id\":16,\"title\":\"Design learner experience\",\"subtitle\":true},{\"id\":17,\"title\":\"Decide on the features\",\"subtitle\":true},{\"id\":18,\"title\":\"Choose a tech stack\",\"subtitle\":true},{\"id\":19,\"title\":\"Build an MVP\",\"subtitle\":true},{\"id\":20,\"title\":\"Conduct QA\",\"subtitle\":true},{\"id\":21,\"title\":\"Custom LMS Development Technologies\"},{\"id\":22,\"title\":\"How Much Does It Cost to Build Your Own LMS?\"},{\"id\":23,\"title\":\"Our Experience Creating Educational Solutions\"},{\"id\":24,\"title\":\"Sum Up\"},{\"id\":25,\"title\":\"FAQ\"}],\"subtitles1\":[[\"When it comes to corporate training, many companies prefer to stick with on-site sessions. While face-to-face coaching still has lots of benefits, it also incurs additional expenses, which — in the case of longer training programs — may exceed the company's budget.\",\"When setting up a live training session, a business owner needs to be ready to cover trainer fees, rent, transportation expenses (if training is to take place outside the office), the cost of handouts, food, etc.\",\"As to the salaries of live instructors, these alone may cost companies tens of thousands of dollars per year — for <a href=https://www.topyx.com/lms-blog/lms-software-reduces-the-cost-of-retail-training target='_blank' rel='nofollow'>example</a>, such companies as Rockport, Ulta Beauty, and Blue Bottle Coffee pay their corporate coaches <b>$71,000</b>, <b>$62,500</b>, and <b>$50,000</b> per year, respectively.\",\"Custom LMS, on the other hand, helps to completely eliminate the associated expenses and focus all resources on the educational process itself, instead of the administrative side of it.\"],[\"Depending on the nature of the work and goals — whether it is basic onboarding or more complex processes like changes in product, business strategy, customer support — it may take weeks and months to teach employees new tactics, tools, and skills. This also means that each time a live training session occurs, your staff will be taken away from their workplaces which also will have an effect on their daily productivity and overall KPI (key performance indicators).\",\"Using LMS is a completely different story. You don't need to allocate days and weeks of employees' time entirely for educational activities. Learning management systems take only 20-30 minutes of employees' time a day, and what's more important, don't interrupt their daily activities. Such flexibility of 'on-the-job' training keeps companies from hurting their productivity metrics and helps to effectively deliver knowledge to the staff at the same time.\"],[\"A custom learning management system can be built according to the requirements set by your organization while generic features (offered by the market today) come with somewhat similar functionality but may not correspond to your specifications.\",\"Another problem is that many off-the-shelf solutions are developed for large organizations, which means that if you have a small business you'll still be getting tons of features, some of which may be redundant or not relevant to your needs at all.\",\"On the other hand, a custom LMS gives you more freedom in terms of functionality as you can add only features that you need — you can specify which types of content your platform will be working with, what will be the gamification elements, how the learning will be assessed, if there will be any social learning features or not, etc.\"],[\"The versatility and flexibility that come with the development of custom LMS give you better control over the platform's functionality. This means that you can tune the system to the needs of different job roles, company departments, etc.\",\"With the help of dashboards, you can track the progress of each employee and personalize their learning experience based on their learning pace. By analyzing learners' data you can understand what's working for your employees, and what needs to be changed. You can also use this information to create personalized learning paths to make the educational process easier and faster.\",\"Additionally, don’t forget about branding elements that ready-made systems rarely offer extensive functionalities for. With the custom solutions, you can create an appearance that 100% matches your branding strategy, uses correct fonts, colors, logos, etc. \"]],\"subtitles2\":[{\"text1\":\"This module defines the types of content that will be supported by your system and ways of managing this content. Generally, there are six types of educational content that can be used in the LMS:\",\"list\":[\"<b>Lessons</b> — these are basically learning courses set up on a platform. Aside from textual blocks, these may also include media files, such as photos, illustrations, diagrams, videos, etc.\",\"<b>Downloadable documents</b> — these can be attached to any course or module and come in the form of a manual or checklist. Such documents normally contain information that is used to support the main (course) subject or summarize course material.\",\"<b>Journals</b> — learning journals basically contain notes that learners do while completing a course. By using the journal users can add some observations and write down important thoughts or insights. What's more,  <a href=https://www.taylorfrancis.com/books/mono/10.4324/9781315588063/improving-learning-transfer-cyril-kirwan target='_blank' rel='nofollow'>studies</a> show that by reflecting on their learning experience users absorb knowledge more effectively.\",\"<b>Webinars</b> — these can be either pre-recorded seminars or live webinars that come as online workshops. Webinars are considered to be quite an effective activity that helps to personalize learning and emulate face-to-face sessions with live instructors.\",\"<b>Slide presentations</b> — standard PPT (power point) presentations that may come in the form of a video with the lecturer voiceover clarifying each of the slides.\",\"<b>Podcasts</b> — these are basically pre-recorded lectures in audio format. What's great about this type of content is that learners can consume podcasts anywhere, without gluing themselves to digital screens.\"]},{\"text1\":\"Evaluation activities are as important as learning ones in the LMS, because they help to identify how well the educational content is being processed by learners. These activities may come in the form of practice tests, practical evaluations, and online exams.\",\"list\":[\"<b>Practice tests</b> — include different question types, multiple-choice, true/false tests, fill-in-the-blank assignments, etc.\",\"<b>Practical evaluations</b> — used when learners need to demonstrate obtained skills. Such evaluations may come in the form of marked tests or quizzes.\",\"<b>Online exams</b> — as a part of the blended learning approach, such exams assume the participation of a live coach who will be in charge of facilitating the exam process. The advantage of online exams via LMS lies in the fact that for an exam to happen neither instructor nor learners are required to be physically present at the same place.\"]},{\"text1\":\"In order to be able to measure the effectiveness of your LMS courses, you need data. By gathering information about learner performance and course completion it's possible to determine the weak points in the educational content and improve it accordingly.\",\"text2\":\"Statistics allows you to measure performance indicators while dashboards help you to determine how potent your educational content is. Here are the seven most common stats typically included in LMS dashboards:\",\"list\":[\"<b>Completion rate</b> — a percentage that denotes how many learners (from the total number of those who took the course) have successfully completed it.\",\"<b>Session times</b> — show how much time is spent per session (on average).\",\"<b>Activity</b> — show how many sessions were completed, passed, or failed on a weekly, monthly or yearly basis.\",\"<b>Easy questions</b> — shows which questions more than 90% of the learners get right the first time.\",\"<b>Hard questions</b> — shows those questions that learners struggle with the most.\",\"<b>Drop off</b> — an important stat that shows the pages that learners drop off frequently. This indicator can help you figure out which pages have possible errors, which content is not engaging or less relevant, etc.\",\"<b>User navigation</b> — this is a very useful metric (especially for those LMSs that have multiple course catalogs) as it shows where the majority of learners are going.\"]},{\"text1\":\"Third-party integrations are not mandatory; however, they can greatly improve UX (user experience). By adopting third-party integrations you can get additional opportunities for streamlining internal processes and eliminating some redundant tasks that your employees need to perform to start using LMS. The most common integrations that can be introduced to LMS are:\",\"list\":[\"<b>Single sign-on</b> — the feature that allows your employees to log into LMS using their Facebook (Google, LinkedIn, etc) accounts.\",\"<b>Video conferencing</b> — this integration is used for hosting online exams or webinars. Such live events can be recorded and then reused for future course editions.\",\"<b>Collaboration tools</b> — in the same fashion as video conferencing, these are used to boost the learning experience of the employees. Managers and developers can create shared calendars, collaborate on revising existing content, share feedback, etc.\",\"<b>Social media</b> — allow learners to share their experience, photo, video and other information from the course on social media. This feature helps to establish a social media connection between your LMS and the audience.\"]},{\"text1\":\"Compliance with government-issued regulations regarding software development is what can make your product stand out from others — if your LMS is being developed as a standalone SaaS platform — or make it more accessible for your employees.\",\"text2\":\"The differences in the application of compliance standards will mainly depend on the region that the software is developed for since the EU and US have their own policies in that regard:\",\"list\":[\"<b>GDPR</b> — General Data Protection Regulation act that specifies the ways of collecting and processing of personal data of users located in the EU.\",\"<b>508 Standard</b> — the act issued by the US government that requires Federal institutions and private organizations to use/produce digital technologies that are accessible by disabled people.\",\"<b>FERPA</b> — Family Education Rights and Privacy Act specify the guidelines regarding the storage and processing of children's educational records in the US.\",\"<b>PCI DSS</b> — Payment Card Industry Data Security Standard defines the requirements that organizations have to adhere to when working with debit and credit cards from vendors like Visa, MasterCard, American Express, etc.\"]},{\"text1\":\"Adding gamification elements to your LMS helps to advance the educational courses and gives learners additional motivation to complete them. Gamification is especially helpful in cases where users need to pay extra attention, and, at the same time, it's vital to ensure they don't get bored along the way.\",\"text2\":\"There are literally thousands of different gamification techniques that you can incorporate into your platform — stories, challenges, rewards, gamified quizzes, badges, etc. — however it's better to refrain from using them all at once. Pick a few and test them first.\"}],\"subtitles3\":[{\"text1\":\"Defining what you want to get from your future platform in particular lays the foundation for all the subsequent development stages. In order to correctly set goals for the system, you should first ask yourself a few questions, like:\",\"list\":[\"Why do we need to develop custom LMS platform in the first place?\",\"What problems will our company be able to solve with the help of LMS?\",\"Who will be in charge of creating LMS?\",\"How much would it cost?\"],\"text2\":\"By answering such questions you'll be able to better prepare for the upcoming development process, figure out if there are any associated tasks that you'll need to get extra resources for to shape your future LMS.\"},{\"text1\":\"Obviously, if you want to get your project off the ground, you'll need a development team. Here, you basically have three options: you can hire freelancers, assemble an in-house team, or outsource LMS development.\",\"list\":[\"Freelancers. One of the most common and least expensive options of sourcing needed specialists for your project is by using such platforms as Upwork, Fiverr, Toptal, etc. The major drawback of such an approach is that even though you get the possibility to create a product on the smallest budget, you don't have much control over a freelancer, which means they can simply disappear in the middle of the LMS development process.\",\"In-house team. Hiring in-house developers is often a go to option for many large companies as it gives them complete control over the product development. As to the main disadvantage of this option — and what makes it actually less favorable among small businesses — it comes with significant expenses, such as office rent, wages, equipment and software purchase, taxes, etc.\",\"Outsource. Outsourcing can be considered as a middle ground between all the options, and the way to get your platform developed fast and on a budget. Here, you don't need to directly hire employees or rent an office. All you need is an offshore software development partner, who will be able to create custom corporate LMS for you.\"]},{\"text1\":\"When developing LMS try not to underestimate the importance of a good UI and UX system. The majority of learning activities are difficult by default, so there's no need to overcomplicate them even more with a cumbersome system structure or cluttered interface.\",\"text2\":\"To create an engaging learning environment it's necessary to make sure that the design of the LMS interface is intuitive and straightforward. LMS developers also need to reduce to a minimum the number of possible 'distractions' that users may come across when completing a course.\",\"text3\":\"Putting users in the center of the development process will help create a learning management system design that takes into account the needs of each individual group of learners and produces desired outcomes.\"},{\"text1\":\"Now it's time to decide which features your future LMS will have. We recommend coming up with two lists of features: <b>core</b> — those that are vital for implementing your vision regarding the product, and <b>optional</b> — secondary features that don't affect the educational process directly, and, thus, can be added later on.\",\"text2\":\"Keep in mind that implementing each new feature in the LMS is a time-consuming process, so, when developing a platform, focus on the core features first. This way you'll be able to release the first version of a product as soon as possible, without spending months introducing small updates and additional features.\"},{\"text1\":\"Once you've settled on the list of features for your platform it's time to choose technologies that will back your functionality. Every LMS is built using its own unique tech stack, so we always advise you to stay away from copying other platforms, but pick those tools and solutions that would work best for your plan.\",\"text2\":\"Keep in mind that the tech stack has a direct impact on the project budget, i.e. the more complex technologies are, the more time it will take to put a project together. Thus — in the same fashion as with product features — choose only the core technologies first that will help you to roll out the LMS faster.\"},{\"text1\":\"After all the preparation work is done, it's time to develop the minimum viable version (MVP) of your future product. MVP normally contains the minimum number of features (the core ones) that allow for stable product functioning and testing your product concept 'in the field'.\",\"text2\":\"The importance of creating an MVP comes from the fact that it allows you to greatly reduce the development time and budgets while still getting a working version of a product. By testing MVP — instead of a fully fledged product — on a smaller group of users it's easier to collect feedback to understand how exactly your audience perceives your system. Information that may be really helpful later on, when working on the following updates.\"},{\"text1\":\"The very last step before introducing your product (MVP) to the public is the QA. Now, it's important to keep quality one of the highest priorities all the way through, so even in the case of MVP the QA process should not be overlooked. Conduct as many testing sessions as possible with your developers to ensure that the system is resilient and immune to crashes and other types of failures.\",\"text2\":\"Once the QA stage is done you can continue working on your platform — collecting feedback from learners, adjusting UI/UX, introducing additional features, and producing further product updates.\"}],\"subtitles4\":{\"text1\":\"When it comes to choosing the right tech stack for your platform, it's important to take into account the <b>flexibility</b>, <b>scalability</b> and <b>economical feasibility</b> of the technologies you're about to choose. Try to always keep the long-term perspective in mind — the utilities you've chosen may work well for your needs today, but will they be able to do the same in one, three, five years?\",\"text2\":\"It's hard to give precise recommendations regarding the choice of tech stack or LMS since 1) there are thousands of tools and utilities on the market today, and 2) everything depends on the requirements set for a particular project. However, to give you a general view, here's a list of suggestions for technologies that can be used in LMS:\",\"list\":[\"<b>Front-end</b> — HTML, CSS, JavaScript, AngularJS, ReactJS, etc.\",\"<b>Back-end</b> — Python, PHP, Ruby on Rails, Django, MySQL, etc.\",\"<b>Additional technologies</b> — To this category fall all the marketing, business and analytics utilities, like Zendesk, Slack, Unbounce, G Suite, Hubspot, etc.\"]},\"subtitles5\":[\"When considering the costs of creating LMS we should focus on the hourly development rates in the first place, as the total number of hours spent by the development team building your LMS will form the final budget.When considering the costs of creating LMS we should focus on the hourly development rates in the first place, as the total number of hours spent by the development team building your LMS will form the final budget.\",\"If we take the rates of European software developers, for example, these start from <b>$40 per hour</b> and may go up to <b>$150 per hour</b>. In this case, the average budget of building LMS can be anywhere from <b>$15,000 to $25,000.</b>\",\"The rates of the development agencies from Canada and the US maybe <b>a few times higher</b>, amounting to <b>$250-$300 per hour</b>. This means that the budget needed to build your own LMS may be <b>1.5-2X higher</b> as well.\",\"<i>Note: each digital product is unique and costs of custom LMS development can heavily vary from project to project — due to the individual set of features, project scope, requirements, etc. To get a precise estimate for your project, contact our managers.</i>\"],\"subtitles6\":[\"At WTT-Solutions all projects are created in close cooperation with our clients to ensure that the final product meets their expectations and initial requirements. One of the recent <a href=https://wtt-solutions.com/edtech target='_blank'>edtech</a> projects developed by our LMS development company is <a href=https://wtt-solutions.com/our-work/plh target='_blank'>PLH</a> — Parenting for Lifelong Health app that helps parents to establish healthy relations with their children.\",\"It comes with modern parenting strategies aimed at preventing the appearance of adolescent behavioral problems in the future. This mobile app has quite a distinctive style and a simple yet intuitive interface.\",\"Another project is <a href=https://wtt-solutions.com/our-work/luk target='_blank'>LukLabs</a> — edtech application that allows prospects to connect with college students to get insights, live college tours, and more. Our developers created an admin panel, introduced convenient search functionality, integrated a high-quality video tool for live meetings, and added a secure payment feature. The LukLabs team was completely satisfied with the outcomes of our cooperation, which also resulted in 5-star feedback from their CEO.\"],\"subtitles7\":[\"If you want to advance learning activities in your organization there's no better way of doing that than using custom-made LMS. It can centralize corporate training, make it more accessible to employees, and help your company move forward faster with employees expanding their knowledge more effectively. \",\"The corporate LMS software development can be tedious though if you don't have the right team with the relevant know-how to meet your expectations within the project's timeline and budget. At WTT-Solutions we have more than five years of experience developing <a href=https://wtt-solutions.com/blog/advantages-and-disadvantages-of-elearning target='_blank'>e-learning</a> software for SMEs and large enterprises.\",\"To learn how we can help you build an LMS from scratch, simply contact us by clicking on the 'Get in Touch' button in the top right corner of this page and filling out a corresponding form. One of our representatives will reply shortly!\"],\"questionsList\":[{\"question\":\"How long does it take to build custom LMS?\",\"answer\":\"It may take anywhere from 200 to 400 man-hours to build a full-fledged custom LMS. This timeline includes business analysis, creation of project architecture, UX/UI, as well as testing.\"},{\"question\":\"How do we produce content for our LMS?\",\"answer\":\"When selecting content for your LMS, focus is on designing a quality learner experience system for the users. Selecting the media that will be appropriate to your audience and will deliver your messages in the most effective way possible.\"},{\"question\":\"Can we use our company branding elements in the LMS?\",\"answer\":\"The development of any LMS from scratch means that you will get a solution that will be tailored to your needs — both technically and visually. At WTT Solutions we can help create a platform that will fully correspond to your brand image and mission, as well as contain all the required branding elements.\"},{\"question\":\"How is a custom-made platform better than off-the-shelf LMS?\",\"answer\":\"When developing a learning management system from scratch you get a product that exactly matches your needs, while an off-the-shelf solution may be lacking some features that are critical for your organization. Also, the ready-made solutions are often distributed on a subscription basis in package format, which means that regardless of whether you need a particular feature or not, you'll still have to pay for it every month, quarter, or year.\"}]},{\"id\":\"how-to-integrate-video-conferencing-api\",\"title\":\"How to Integrate Video Conferencing API in Your edTech Product\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"January 13, 2022\",\"timeToRead\":10,\"backgrounds\":{\"img\":\"/images/blog/HowIntegrateVideoConferencingApi/img.jpg\",\"preview\":\"/images/blog/HowIntegrateVideoConferencingApi/preview.webp\"},\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"insights\"],\"metaTitle\":\"How to Integrate Video Conferencing API in Edtech Product\",\"metaDescription\":\"Video conferencing technology for edtech product allows promote quality learning ✅ Read on to find out how to integrate video conferencing API in your software\",\"articleDescription\":[\"In recent years, video calls have become an integral part of our lives. With the help of video chatting products we communicate with our colleagues, families, and friends while maintaining the social distance due to pandemic outbreak.\",\"For the edtech industry the video conferencing functionality has now been widely applied across many products and organizations, and if you're wondering how to integrate video conferencing API in an already existing product, this article will provide you with all the necessary information.\",\"Today we're going to explore the benefits of video conferencing API integration, main challenges of the process, as well as touch on some practical peculiarities of adopting this technology.\"],\"faqInTableOfContents\":true,\"subtitles\":[{\"id\":1,\"title\":\"Benefits of Integrating Video Conferencing Functionality in Edtech\"},{\"id\":2,\"title\":\"Higher Security\",\"subtitle\":true},{\"id\":3,\"title\":\"Advanced Capabilities\",\"subtitle\":true},{\"id\":4,\"title\":\"Less Expenditures\",\"subtitle\":true},{\"id\":5,\"title\":\"Higher Conferencing Quality\",\"subtitle\":true},{\"id\":6,\"title\":\"Better Scalability\",\"subtitle\":true},{\"id\":7,\"title\":\"Process of Video Conferencing Technology Integration\"},{\"id\":8,\"title\":\"How to build your video application with the Twilio Programmable Video JavaScript SDK\",\"subtitle\":true},{\"id\":9,\"title\":\"Challenges of API Integration in Edtech Product\"},{\"id\":10,\"title\":\"Adoption complexity\",\"subtitle\":true},{\"id\":11,\"title\":\"Security threads\",\"subtitle\":true},{\"id\":12,\"title\":\"Maintenance and upgrades\",\"subtitle\":true},{\"id\":13,\"title\":\"API availability loss\",\"subtitle\":true},{\"id\":14,\"title\":\"WTT Solution Experience with Video Conferencing\"},{\"id\":15,\"title\":\"Level Up Your Edtech Product\"},{\"id\":16,\"title\":\"FAQ\"}],\"subtitles1\":[[\"The development of a video conferencing software from scratch is quite a complicated process due to lots of protocols and compliance requirements that you and your team need to take into account. From introducing the basic security practices (like meeting ID, password, waiting room) and to more advanced ones (such as encryption and secure live captioning) — all this needs to be considered in advance if you want to create your own solution.\",\"However, if we consider integration of video conferencing API for educational product — such solutions commonly come with all the built in security protocols and standards that can be automatically adopted by your product as well (without a need to develop this functionality from the ground up).\"],[\"Lots of video conferencing APIs come with the extended AI and ML capabilities that can greatly benefit your edtech product. For example, by analyzing the average number of participants, length, and duration of the meetings, AI can generate predictions as to the apps you might need during a meeting, and come up with some schedule recommendations that would work for all participants.\",\"This could save a great deal of time on contacting each and every participant to figure out which time would be most relevant for them in cases of video conference reschedule.\",\"The prominent example of the use of AI, facial recognition, and computer vision is Cisco's Cognitive Collaboration platform that heavily relies on voice commands, utilizes personalization tools, and allows to manage large video conference calls with ease.\"],[\"One of the most obvious advantages of integrating video conferencing with your edtech platform is that it can help you save up on the travel expenses. With video conferencing functionality you can connect with stakeholders, clients, and users from anywhere and hold face-to-face-like meetings. People don't need to book hotels, flights, or spend hours travelling to the needed location to meet each other.\",\"Even though — in a broad sense — the video calls can't completely eliminate the need for live meetings, they allow for making more organized collaboration and giving all involved parties more control over their work schedule. Here, video conferencing has a significant impact on small trips that are less significant but still occur on a regular basis and devour a great deal of the company's budget. Such trips can be easily replaced with the video conferencing tools.\"],[\"There are lots of vendors providing video chat solutions today on the market, and the next logical question may arise in that regard: <i>'Why do I need to spend time and other resources integrating video conferencing into my product if users can simply use Skype, WhatsApp, or Facetime?'</i>.\",\"While your users can still opt for third-party products there's one major issue with the listed above options — they are all generic, meaning they were developed to appeal to large audiences at once. In other words, off-the-shelf products may be good for holding a video call with a colleague, but will they be able to handle an <b>hour-long online exam for 30 people?</b>\",\"On the other hand, when integrating video conferencing API into your product, you put your requirements first, and thus can fine tune connection quality, add video recording feature, branding elements, generate performance reports, etc.\"],[\"In the same fashion as it is with the quality of the video, edtech video conferencing API integration can give you more freedom in terms of scalability. With built-in custom video conferencing functionality you don't need to adjust your product every time it experiences a steep workload increase.\",\"This aspect is extremely important for the edtech products since there thousands of users can interact live on video in real time. Eventually, if the solution won't be able to maintain a consistent level of performance during the peaks, the loading times will increase and UX will consequently worsen. In order for that not to happen, product owners need to ensure they have reliable technology in place.\"]],\"subtitles2\":{\"text1\":\"Even though the logic of video conferencing API integration always stays somewhat similar, in practice for each integration there will be differences depending on the vendor. Thus, we cannot provide you with a 'one-size-fits-all' answer; however, we can show how video conferencing technology works — <b>using the '1-to-1' communication example.</b>\",\"text2\":\"This will give you a general understanding of APIs and SDKs components and what to look for during your next integration. So, to make video conferencing technology work in your product (let's consider app as an example), you need three components:\",\"list1\":[\"Video SDK account credentials\",\"Server App\",\"Client App\"],\"text3\":\"The first part of the process is creation of the <b>meeting room:</b>\",\"list2\":[\"Server app requests Video SDK to establish a meeting room.\",\"Video SDK verifies provided credentials from server app and creates a room.\",\"Video SDK also generates the Room SID — unique identifier that will be used in the subsequent API requests.\"],\"text4\":\"The second part is connecting users (clients) to the meeting room:\",\"list3\":[\"<b>Client requests the access token:</b>\",[\"Client sends access token request to the server app (via the client app).\",\"Using Video SDK credentials, the server app generates the access token.\",\"Server app sends access token to Client.\"],\"<b>Client connects to the meeting room:</b>\",[\"Client connects to the meeting room via Video SDK interface with the help of access token.\",\"Video SDK checks the client's access token and if it's valid, establishes a client-room connection.\"]],\"text5\":\"In the same way the connection process goes for the 2nd, 3d….N client too.\"},\"subtitles3\":{\"text1\":\"To give you a deeper insight into the integration of video conferencing for education, here's also another example of the integration flow that our team applied at one of the recent edtech projects:\",\"list\":[\"<b>Set up SDK.</b> To start using the JavaScript Programmable Video SDK in your apps, you need to perform a few basic tasks first:\",[\"Get the Programmable Video JavaScript SDK\",\"Install the JavaScript Video library to your web application.\"],\"<b>Generate an access token using API Keys from Twilio Console.</b> An Access Token is a short-lived credential used to authenticate your client-side application to Twilio.\",\"<b>Connect to a room.</b> A Room represents a real-time audio, data, video, and/or screen-share session, and is the basic building block for a Programmable Video application. You must pass the Access Token when connecting to a Room. Once connected, you can send and receive audio and video streams with other participants who are connected to the Room.\",\"<b>Configure your room.</b> With the help of Twilio Programmable Video you can:\",[\"<b>Set up Local Media.</b> Twilio Programmable Video can capture local media from your device's microphone, camera or screen-share on different platforms.\",\"<b>Work with Remote Participants.</b> Participants represent client applications that are connected to a room and share audio, data, and/or video media with one another.\",\"<b>Display a Camera Preview.</b> Sometimes you need to make sure you're looking fantastic before entering a Room. Twilio Programmable Video provides a means to render a local camera preview outside the context of an active Room.\",\"<b>Disconnect from a Room.</b> You can disconnect from a Room you're currently participating in. Other participants will receive notification that you were disconnected.\"]],\"text2\":\"By using the Twilio Programmable Video you can also control your video applications from your back-end server via HTTP requests.\"},\"subtitles4\":[[\"Aside from the edtech product itself, the integration of every new API can to some extent affect the organization, its internal procedures, workflows, KPIs, data management, security, and communication standards. This means that every department or stakeholder — considered to be affected by the changes in product functionality — need to be ready for the upcoming API integration.\",\"You should also take into account that APIs are normally not standardized, which means that if you decide to move existing API to a different edtech product, you'll need to build integration from scratch again.\"],[\"Users have always been considered as the weakest links in the security chain. So even if you utilize a robust and most reliable solution you can't ignore the human factor because as the common saying goes: 'any company is as secure as its users are'.\",\"Even though the video conferencing APIs may come with their own built-in security protocols, they cannot guarantee the complete elimination of data leaks — especially in higher education and K12 organizations where student data can be shared between multiple parties (parents, teachers, administrative personnel, etc).\",\"Given that in the last few years for the majority of the students their bedrooms became classrooms, the data privacy became even more sensitive. Regardless of whether it is a private organization or educational facility — that uses an edtech product — the authorization protocols (i.e. who/when/how uses particular functionality) should also be considered in advance when integrating third-party video conference SDK for educational platform.\"],[\"Keep in mind that if you plan to use API to insert video conferencing in educational platform — you will be getting not only new functionality, but also a new component of a system to take care of. Software changes over time, and the APIs do the same. In the beginning there, obviously, won't be many viable maintenance issues with it; however, over time and without professional support the system will age and won't be performing as it should anymore. \",\"To make sure you're all caught up, you can either use your internal resources (an in-house team) who will be responsible for API maintenance, or outsource these activities to a third-party development partner with the relevant expertise. By doing so it is possible to smooth out the possible expenses — regarding the API use — in the long-term perspective.\"],[\"One of the main indicators of quality third-party integration in stable performance. If a platform's component starts to crash constantly or behave in an unpredictable manner, it can damage product reputation and user experience as a whole. Such basic metrics as uptime, latency, errors per minute, etc. can help your QA specialists assess the performance of your integration.\",\"In general, it is recommended that you make the solution on/off flag dependent for cases where a provider rolls out a buggy update of API. This would allow you to 'turn off' the video conferencing feature — making it temporarily unavailable — and give your team a time to roll back the solution to the previous version or manage the problem in some other way. Yes, users won't be able to access this functionality for some period of time, but it's still better than dealing with the wrath on social media about poor quality of video calls. \"]],\"subtitles5\":[\"At WTT-Solutions we consider the edtech niche to be one of our main areas of expertise, and always try to involve as much as possible into working in that direction. One of the <a href=https://wtt-solutions.com/edtech target='_blank'>edtech</a> projects that were delivered by our team is <a href=https://wtt-solutions.com/our-work/luk target='_blank'>LukLabs</a> — the application that allows prospective students to go 'behind the scenes' of the educational process in the university of their choice.\",\"This video platform lets teenagers and their families get on live video calls with current students and receive valuable insights about the educational process, life in college campus, most common challenges for newbies, etc. Users can even request a live video tour from students.\",\"Considering that the main feature of the app is video calls, we intentionally designed the app's interface in the minimalistic style. The harmonious blend of colored backgrounds with white elements allows users to notice which information is of higher importance right away.\",\"Aside from that, we also developed a convenient admin panel for tracking multiple indicators, introduced a handy search function, added in-app payment feature, and made sure that users get a high-quality video tool for their live meetings.\",\"As to the technologies, our team used Amazon WS, Redux, Redux Saga, React, InversifyJS, PayPal, PostgreSQL, Braintree, and Express. Six specialists were involved in the process: 2 frontend engineers, 1 backend, 1 PM, 1 BA, and 1 QA. In total, it took 6058 hours for our team to develop this product.\"],\"subtitles6\":[\"The integration of video conferencing technology for edtech can significantly improve the user experience and make the interaction with a product more comfortable. However, third-party APIs or SDKs often come with their own challenges too, so when treated poorly, the new integration can lead to significant expenses — both in time and money.\",\"If you want to make sure that the adoption of video conferencing API in edtech app is done the right way, trust this task to the experienced team of developers. With the 5+ years experience of delivering projects in Edtech, Martech, and HRtech, our specialists can tackle any task that is coming their way, regardless of its complexity.\",\"<i>Contact us by filling the 'Get in touch' form in the top right corner of this page, and get a free consultation with one of our experts!</i>\"],\"questionsList\":[{\"question\":\"How long does it take to integrate a video conferencing API?\",\"answer\":\"Depending on the complexity of the system it can take anywhere from a couple of days to a few weeks to integrate API into your software. The API integration timeline will always be subjective and vary from project to project, thus, if you want to get a more accurate estimate for your edtech software, contact our managers.\"},{\"question\":\"How much does it cost to integrate API?\",\"answer\":\"The average API integration can cost anywhere between $5,000 and $10,000. This estimate excludes hosting and maintenance costs that can go up to $500 per month.\"},{\"question\":\"How can I get the developer support for my API?\",\"answer\":\"API support services can be carried out either by an in-house team, or with the help of a third-party development company. At WTT-Solutions we provide software support and maintenance services and can help you whenever there's an issue with your software. Get in touch with us in any convenient way — via phone, website, or email — so we can discuss how we can help.\"},{\"question\":\"What are the most popular examples of video conferencing APIs on the market today?\",\"answer\":\"Among the most popular solutions are MirrorFly, PubNub, Twilio, Vonage, Quickblox, and Sinch.\"}]},{\"id\":\"how-build-custom-elearning-app\",\"title\":\"How To Build A Custom eLearning App\",\"author\":\"Serge Lytvyn\",\"authorRole\":\"CEO & Co-founder\",\"date\":\"January 28, 2022\",\"timeToRead\":10,\"backgrounds\":{\"img\":\"/images/blog/HowBuildCustomElearningApp/img.jpg\",\"preview\":\"/images/blog/HowBuildCustomElearningApp/preview.webp\"},\"authorImg\":\"/images/blog/authors/ceo.png\",\"category\":[\"insights\"],\"metaTitle\":\"Best Practices of custom eLearning App Development | WTT Solutions\",\"metaDescription\":\"E-learning app development starts with identifying the core concept of the project and assembling a team of programmers ✅ Read guide from WTT Solutions\",\"articleDescription\":[\"Over the last few years the EdTech market was among the few ones that during the ubiquitous lockdowns got a significant boost. The vast majority of educational facilities started to look for the possibilities of bringing offline education online, thus increasing the demand for educational solutions.\",\"Aside from that, more and more people became interested in taking courses and training programs from the comfort of their homes as there were basically no other ways of doing that during the pandemic. This all resulted in the rapid growth of the EdTech market, and the appearance of <a href=https://wtt-solutions.com/blog/how-to-develop-edtech-startup target='_blank'>new startup initiatives</a>.\",\"In this blog we'll discuss how to create an e-learning app from scratch, what steps need to be taken, and what features normally come with such mLearning solutions, as well as give some advice on which format — website or app — to choose for your future product.\"],\"faqInTableOfContents\":true,\"subtitles\":[{\"id\":1,\"title\":\"e-Learning Mobile App vs Website — Which One to Choose?\"},{\"id\":2,\"title\":\"Purpose\",\"subtitle\":true},{\"id\":3,\"title\":\"Complexity of the development process\",\"subtitle\":true},{\"id\":4,\"title\":\"Time to launch\",\"subtitle\":true},{\"id\":5,\"title\":\"Resources required\",\"subtitle\":true},{\"id\":6,\"title\":\"Core Features of eLearning Apps\"},{\"id\":7,\"title\":\"Sign Up & Profiles\",\"subtitle\":true},{\"id\":8,\"title\":\"Search & Filtering\",\"subtitle\":true},{\"id\":9,\"title\":\"Dashboards & Progress Tracking\",\"subtitle\":true},{\"id\":10,\"title\":\"Video Calls\",\"subtitle\":true},{\"id\":11,\"title\":\"Calendar\",\"subtitle\":true},{\"id\":12,\"title\":\"Payments\",\"subtitle\":true},{\"id\":13,\"title\":\"File Uploads\",\"subtitle\":true},{\"id\":14,\"title\":\"Gamification Elements in eLearning Apps\"},{\"id\":15,\"title\":\"Rewards & badges\",\"subtitle\":true},{\"id\":16,\"title\":\"Levels and scores\",\"subtitle\":true},{\"id\":17,\"title\":\"Leaderboards\",\"subtitle\":true},{\"id\":18,\"title\":\"Virtual currency\",\"subtitle\":true},{\"id\":19,\"title\":\"Progress bar\",\"subtitle\":true},{\"id\":20,\"title\":\"Microinteractions\",\"subtitle\":true},{\"id\":21,\"title\":\"Storyline\",\"subtitle\":true},{\"id\":22,\"title\":\"Countdowns\",\"subtitle\":true},{\"id\":23,\"title\":\"Personalization\",\"subtitle\":true},{\"id\":24,\"title\":\"Custom E-Learning App Design & Development Process\"},{\"id\":25,\"title\":\"Discovery stage\",\"subtitle\":true},{\"id\":26,\"title\":\"Instructional design\",\"subtitle\":true},{\"id\":27,\"title\":\"MVP development\",\"subtitle\":true},{\"id\":28,\"title\":\"Testing\",\"subtitle\":true},{\"id\":29,\"title\":\"eLearning App Development Tech Stack\"},{\"id\":30,\"title\":\"Costs of eLearning App Development\"},{\"id\":31,\"title\":\"WTT Expertise\"},{\"id\":32,\"title\":\"Do You Want To Know More About Custom Elearning Development?\"},{\"id\":33,\"title\":\"FAQ\"}],\"subtitles1\":[[\"Before you jump straight into the development of either a website or mobile app, you should first understand the main differences between the two, and what aspects should be taken into account — to make sure that once the project is done you get exactly what you've looking for in the first place.\",\"In order to give the answer to the question of what makes a mobile app different from the website, we could provide a list that would cover dozens of unique criteria; however, in general case, the difference boils down to four main factors. These are: purpose, complexity of the development process, time to launch, and required resources.\"],[\"Purpose — or area of the application — is the main characteristic that should be considered when choosing between web app and website. Talking about the websites, these are commonly developed with the <b>informative goals</b> in mind, meaning that here users are supposed just to get some information about the company, get to know its organization, structure, etc. Just take a look at the resources of the majority of the universities worldwide — their websites do exactly that.\",\"Web apps, on the contrary, focus more on the <b>actionable goals</b>. They are developed to solve an existing problem or do a particular task. In EdTech, to this category fall all the products connected with online courses, language learning, early childhood learning, STEM, etc. \"],[\"On average, websites are easier to produce since they basically consist of web pages that are compiled together. The main challenges with the website development may arise with the page appearance as here the 'sky's only the limit', i.e. you can go with a simple WordPress theme that takes little effort to integrate, or choose to produce complex design with lots of animated elements, transitions, etc.\",\"Nevertheless, even with that perspective in mind, the development of web apps is a lot more complicated due to the higher number of product components and tech integrations that need to be considered. Also, don't forget about security and other functionalities like data, payment processing, transactions, analytics, social integration, interface responsiveness, etc.\"],[\"The development of a basic website may take on average from a couple of weeks to 1-2 months; however the production may take even longer in case developers will have to deal with the large number of pages and lots of dynamic elements as it will take more time to create and integrate those, compared to the static content.\",\"When it comes to the development of the mobile apps, this can hardly be fit into a one-month timeline. Here, the entire process will consist of two major phases: 1) the development of MVP and 2) further scaling. The production of MVP itself may take somewhere around 10-15 weeks, while the scaling phase can stretch for months and even years — depending on the project demands and amount of changes that the team will need to do along the way.\"],[\"It's a bit hard to tell which one — website or web app — consumes more or less resources as here it's more about the type of resources being consumed rather than their amount. And this is what makes two approaches different. \",\"So, when creating a website most of the time developers will be busy putting together website architecture and sourcing (or producing) website content. With the app, on the contrary, most of the time will need to be invested in the creation of the app's functionality and integrating corresponding technologies.\",\"In a nutshell, we can say that there's no 'better' or 'worse' option when it comes to the choice between a website or web app development. These both approaches work well and it depends more on the purposes and needs of a particular project. In this article though we'll focus more on custom eLearning app development as this is a more complicated topic with more stumbling blocks that need to be examined in greater detail.\"]],\"subtitles2\":[[\"The developers should establish easy and clear sign up process for app users. The combinations of either 'phone number + password' or 'email + password' are seen today as the most common methods of handling the registration procedure. For the ease of use the option of signing up via social networks can also be implemented. Implementing two-factor authentication should be considered here as well.\"],[\"One of the distinctive characteristics of e-learning apps — and what basically makes them different from other types of mobile apps — is the amount of content. If we take for example apps that offer online courses, sorting through hundreds of educational programs can become a daunting task for an average user. That's why the integration of a well-developed search component — where users can set parameters, apply filters, and browse through categories — is a must for all educational products.\"],[\"This component would be especially helpful for those e-learning products that work with online courses. With the help of the dashboards, users can get all the information about the courses they're taking on the platform, progress stats, time spent, etc. Dashboards can also display completed programs and completion certificates.\"],[\"Adding video conferencing functionality to an education app is a great way to promote a blending learning approach that allows not only to study material, but also get comprehensive answers on the questions during live consultation with the subject-matter expert.\",\"Another benefit of this feature is that it can help establish a convenient communication channel for app users. This is extremely important for the products where the main concept is wrapped around the idea of user interaction, like in the <a href=https://wtt-solutions.com/our-work/luk target='_blank' >LukLabs</a> — EdTech product that was produced by our team.\"],[\"When users take an online course or go through an educational in-app program that has a particular deadline, they need to have a calendar that will remind them of important dates, or the need to submit current assignments. Aside from that, the calendars can also be used to book a consultation (video call, for example) with a teacher or another app user (like in LukLabs).\"],[\"As any other types of mobile apps, the e-learning products should also offer users the ability to make in-app transactions. These can be payments for courses, lectures, consultations, certificates, extra content, etc. This is a pretty standard feature and normally developers add those payment gateways which are the most popular on the market that the app is developed for (credit cards, Apple Pay, Google Pay, PayPal, etc). \"],[\"In the case of online courses not only users should be able to download learning materials from the app, but also upload files (assessment documents, for example) to the system too. These can be anything from simple media (images, videos) to more advanced formats like PPT and PDF. \"]],\"subtitles3\":[[\"In the EdTech industry gamification is often seen as one of the main elements of the user-friendly application for many reasons. First, it improves user engagement and motivates learners to progress through the course or program. Gamification is also considered to be a great cognitive tool, and one that is able to cater to the needs of people with disabilities.\",\"Now after we've sorted out the benefits of this game-based approach, let's look at different gamification methods that are often used in the e-learning products:\"],[\"These are often added to the apps to acknowledge user's progress and make them feel that their in-app achievements matter. Rewards are normally given out to users for hitting a specific milestone, for example passing a test (for students) or education exam (for employees). Rewards and badges can also be used as an addition to another point-based grading system.\"],[\"Levels are especially helpful in case of big courses or extensive training programs. So, in order to make large chunks of information more 'digestible' developers often break down courses into several parts or 'levels'. As to the scores and points — these are used to give users instant feedback regarding their current learning progress. They also serve as targets motivating users to reach specific goals and use an e-learning app more frequently.\"],[\"This is one of the most important elements among all others in gamification as it motivates competitive users and boosts overall engagement. The leaderboards normally include the necessary information about user progress, in particular: the number of points the user has collected, the current position of a user (in the leaderboard list), how many points are required for the user to move to the next level or higher position, etc.\",\"Leaderboards also promote the social component of the product as they allow users to share their stats on social media and compete with friends and colleagues.\"],[\"Introduction of the digital currency to the EdTech product gives users a feel that they earn actual money while completing in-app programs and assignments. This is a very strong component of the whole gamification system that can also be used by users for getting some in-app assets. For example, they can use currency (or earned points) to purchase additional content, bonus lessons, unique stickers, and more.\"],[\"Simple yet very useful element that allows users to see where they are at in the education course. Progress bar helps to easily track and measure the current progress and it should be clear and visible enough once implemented in the final product. It can also display some basic information like the number of lessons already completed, rewards gained, etc.\"],[\"Microinteractions are not mandatory in terms of gamification; however, they can spruce up the app's interface and user engagement, capturing their attention and making them stick longer with the solution. These can be anything: from easter eggs, and special effects to loading, hover, and navigational animation. The only recommendation here would be not to overdo things — since microinteractions are used for decorative purposes, the interface that is overloaded with additional elements can distract users from the main elements and in-app tasks.\"],[\"According to the research, <a href=https://mannerofspeaking.org/2009/10/13/making-it-stick-tell-stories/ target='_blank' rel='nofollow'>63% of people</a> process information better if it is presented in the form of a story. So, adding a storyline is a great way of making the educational process more engaging. The storytelling is critically important for those products that target the K12 audience as children can often get easily distracted from learning thus developers should ensure that the users keep focused as long as possible.\"],[\"When implemented right, countdowns can greatly motivate users to complete a lesson within a limited timeframe. These can also be combined with other gamification elements — for example, if a user manages to complete a test or task in time, then they will get additional points or another in-app reward.\"],[\"The personalization elements are widely applied across different mobile apps, and e-learning products should be no exception. Aside from such basic features as changing a nickname and customizing interface elements, users can also get a possibility to add avatars to make their profiles unique. Aside from that, common practice is adding awards or badges to the profile picture. These can be added once a user hits a milestone, completes a program, or gets another in-app achievement.\"]],\"subtitles4\":[[\"This is the very first stage of the development process where you assess the project concept, clarify overall vision, goals, scope, identify potential risks, setting priorities, etc. Basically, this step serves as a foundation for the entire project and helps developers find answers on the main questions, such as:\",[\"<i>Why are we developing this project in the first place?</i>\",\"<i>Does the market actually need this new product?</i>\",\"<i>Who will be the audience of this product?</i>\"],\"During the discovery stage the development team also conducts comprehensive competitors research, analyzes existing products on the market, their strong and weak points, etc.\"],[\"On this stage the team gathers all the learning materials and creates learning experiences that then will be provided in the future product. Basically on this step developers need to ensure they 1) get all the content required and 2) structure the educational process in the way that would be most effective for delivering new skills or knowledge to the end user. \",\"When carrying out this phase the developers normally opt for one of the instructional design models which allows to ensure the designed model fully corresponds to the educational needs of the projects. Some of the common models are: ADDIE, SAM, Dick and Carey Model, and Kemp Design Model.\"],[\"Once the structure of the educational content has been sorted out it's time to start developing a Minimum Viable Product. On this step the main task for the developers is to build the very first version of a product. The MVP will include only core features but will be usable and able to attract the early adopters (users) of a product who will then provide feedback for future improvements.\",\"The main advantage of developing MVP instead of a fully fledged product is that it allows developers to save up on the production expenses while still getting a working version of a product — a version that will help to test the general concept before investigating a top dollar. \"],[\"This is the final step of the e-learning mobile app development process that can extend over months and even years. So, once the MVP is done the developers start testing it and — based on the feedback they get — make changes, add new functionality, fix errors, etc. Here, the duration and complexity of this stage basically depends on <b>how many</b> iterations developers want to make with their product, and <b>how often</b> these new updates need to be made. \"]],\"subtitles5\":[\"When it comes to the techstack, custom e-learning mobile app solutions — depending on a platform — may require different technologies and programming languages to be used. Here are the most common tech sets that are used for building an e-learning app:\",[\"<b>Native apps</b>\",[\"Android — Dart, Java, Kotlin.\",\"iOS — Ionic, Swift, Objective-C.\"],\"<b>Cross-platform apps</b>\",[\"React Native, Flutter.\"]],\"Aside from that, there also can be third-party integrations used to extend products functionality. If we take a look at the leading products in the EdTech market today, these rely on dozens of tools and utilities in their tech stacks. Here's a short list of such integrations for:\",[\"Mailing — ZeroBounce, MailGun, FastMail, TempMail, SendGrid.\",\"Push notifications — Nexmo, Plivo, Sinch, Twilio.\",\"In-app payments — Stripe, Braintree, PayPal’s SDK, Google Pay, Apple Pay.\",\"Analytics — Firebase, Google Analytics, MixPanel, Flurry.\"]],\"subtitles6\":[\"As you've seen, the custom e-learning application design and development includes multiple production stages and components that can affect the total timeline, and as a consequence, production budget. Aside from that, the amount of investments to be made directly depends on the development approach and team you choose. So, in order to be able to correctly assess e-learning app development costs, consider these three general factors:\",[\"<b>Product complexity</b> — eventually, the less complicated a project is the less resources will be required to get it off the ground, and each new feature or functionality will consequently increase the development costs.\",\"<b>Number of platforms that product needs to be run on</b> — if you want to create an e-learning app for multiple platforms then be ready that the production costs can be several times higher compared to the situation with the e-learning app development for a single platform (either Android or iOS). If, however, your budget is limited, then you can opt for a cross-platform app that provides a native-like experience for users on both mobile platforms, and is less expensive to develop at the same time.\",\"<b>Software development partner</b> — here you basically have two options: assemble an in-house team, or outsource your project, hiring either onshore or offshore developers. Talking budget wise, the most affordable way of building a mobile eLearning app is by hiring an offshore e-learning app development company that will <a href=https://wtt-solutions.com/blog/how-to-build-elearning-platform target='_blank'>create a platform</a> for you. This will be 2-3 times cheaper compared to the onshore agencies (especially if we're talking about the US or Canada region), and a few times faster (compared to the assembly of the in-house team).\"]],\"subtitles7\":[\"At WTT-Solutions we've been developing software products for over five years with the Education market being one of our main areas of expertise. In our <a href=https://wtt-solutions.com/our-work target='_blank'>portfolio</a> you'll find the most recent examples of our work on the <a href=https://wtt-solutions.com/edtech target='_blank'>EdTech</a> projects, such as PLH, LukLabs, and Knowledge Pillars.\",\"The <b>PLH</b> or Parenting for Lifelong Health <a href=https://wtt-solutions.com/our-work/plh target='_blank'>app</a> was developed by our team to help parents create healthy relationships with their teens and decrease the risk of domestic violence. The program offers a wide range of positive parenting techniques that aim to develop a nurturing and protective environment for children at home.\",\"The app interface was purposefully kept minimalistic to make sure that nothing distracts users from main actions/elements on-screen. Bright colors were used for the app's interface to accentuate the fact that even though the subject — parenting tactics — is quite serious, still, the learning process should be fun and interesting itself. In total, 990 man-hours were spent on the development of this project. As to the technologies, here our programmers used Ionic and Angular.\",\"Another project that was produced by the WTT-Solutions team is <b>LukLabs</b> — the <a href=https://wtt-solutions.com/our-work/luk target='_blank'>platform</a> that allows teenagers and their families to connect with college students and get comprehensive consultations regarding the education process and other questions. Users can even book a live video tour with one of the students who will take them on a virtual walk around the campus, residence halls, and give a general overview of the college.\",\"For this project we've developed a smart search function that allows users to conveniently browse through the list of 'local guides' (students), introduced a secure payment processing module, and integrated a high-quality video tool to allow users to connect in real-time. We also made it possible for the users to access the platform via any device (phone, desktop, laptop, etc.) \",\"It took 6058 man-hours to develop this app and a team of six professionals were engaged into the production process all the way through: 2 front-end developers, a backend developer, project manager, business analyst, and QA expert. The technologies used for this project were: Amazon WS, Redux, React, Redux Saga, InversifyJS, PayPal, PostgreSQL, Braintree, and Express.\",\"One more educational product that was created by our team is the<b> Knowledge Pillars</b>. This <a href=https://wtt-solutions.com/our-work/knowledge-pillars target='_blank'>testing service</a> helps K12, college-level students and industry professionals to validate their IT skills via globally recognized certifications and within a convenient programming environment. Knowledge Pillars offers a wide range of tests, each of which targets specific areas of expertise.\",\"Two developers and one project manager were involved in this project that took 1957 man-hours to produce. As for the tech stack, our team used NodeJS, Typescript, MongoDB, React, Redux, ExpressJS, and Amazon Services (Cognito, Lightsail, Amplify).\"],\"subtitles8\":[\"Custom eLearning app development is a complex process that requires developers to have practical expertise not only in the field of mobile solutions, but also in the EdTech industry as this is on the rise now and lots of companies are trying to jump in with their custom e-learning mobile app solutions.\",\"If you are looking for a reliable and reputable vendor for custom eLearning app development, look no further than WTT Solutions. Our team consists of experienced programmers that know everything about software development, especially for the education industry. Over the last five years we've successfully delivered projects to our clients from the US, Canada, UK, Europe, etc.\",\"We also provide consultations to the potential clients regarding their projects at no costs. So, if you want to know how our company can help you build an e-learning app contact us by filling a feedback form in the top right corner of this page, and one of our reps will contact you asap!\"],\"questionsList\":[{\"question\":\"How can I be sure that I get what I want when working with you?\",\"answer\":\"Every new project is carried out by our team in close cooperation with a client to ensure that everything we do 100% matches their expectations. That's why we put lots of effort into the communication side of the process and engage with the clients — on video calls or in person — at each stage to share our ideas, get feedback, discuss further steps, and make sure that the development process stays aligned with the initially set requirements.\"},{\"question\":\"Who will own the source code of the product?\",\"answer\":\"Once our cooperation is finished you get all the rights for the intellectual property that was produced for your project (source code included). We are open and transparent about our copyright policy, so you'll be able to get all the information you need in that regard before the work starts.\"},{\"question\":\"Can I get support and maintenance services as well, once the project is released?\",\"answer\":\"Sure. If you want to prolong our cooperation after the product release, we have plenty of options that cover maintenance, support, and other activities that will keep the product up-to-date. Please, contact our managers to get more details in that regard.\"},{\"question\":\"We already have the design for our app, can you use those?\",\"answer\":\"In general, the answer will be 'yes'; however, there are some aspects that should be taken into account as well. For example, during the project development the requirements for the project might change which could possibly make some designs irrelevant to the updated needs.<br/><br />Another concern could be the quality of the designs and how long they have been sitting 'on the shelf', as there might be a chance that by the time when the project production actually starts they become obsolete. In any case, we always try to incorporate as much of the ready work as possible to help clients keep their project budget as planned.\"}]}]");

/***/ }),

/***/ "z2Fa":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainWrapper": "Subscription_mainWrapper__2vnmN",
	"wrapper": "Subscription_wrapper__21ldF",
	"title": "Subscription_title__1XBQY",
	"form": "Subscription_form__sn43X",
	"btn": "Subscription_btn__2w1Ep",
	"changeZIndex": "Subscription_changeZIndex__1pml6",
	"confirmedDiv": "Subscription_confirmedDiv__bOifV",
	"transition": "Subscription_transition__1OxRL"
};


/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });