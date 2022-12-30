exports.ids = [42];
exports.modules = {

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

/***/ "ED6T":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "BusinessPains_wrapper__3FO4k",
	"title": "BusinessPains_title__3x5qd",
	"subtitle": "BusinessPains_subtitle__2osaj",
	"carouselItem": "BusinessPains_carouselItem__1KqJ4",
	"carouselControls": "BusinessPains_carouselControls__2VZTp",
	"contentWrap": "BusinessPains_contentWrap__2BFpe",
	"carouselWrap": "BusinessPains_carouselWrap__1jCy3",
	"asideRightLine": "BusinessPains_asideRightLine__q1FQH",
	"asideLeftLine": "BusinessPains_asideLeftLine__1rGMq",
	"deskContentWrap": "BusinessPains_deskContentWrap__WDOkK",
	"item": "BusinessPains_item__3JcF-"
};


/***/ }),

/***/ "lyWB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_export_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9TSj");
/* harmony import */ var next_export_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_export_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReusableComponents_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pqM0");
/* harmony import */ var _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ED6T");
/* harmony import */ var _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const BusinessPains = ({
  data,
  width
}) => {
  const {
    t
  } = Object(next_export_i18n__WEBPACK_IMPORTED_MODULE_0__["useTranslation"])();
  const config = {
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
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 768,
        min: 0
      },
      items: 1
    }
  };
  const mobileSlides = data.map((item, index) => {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
      className: _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselItem,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
        loading: "lazy",
        src: item.icon,
        alt: "img"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", {
        children: item.title
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: item.description
      })]
    }, index);
  });
  const tabletSlides = [1, 2].map((_, i) => {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      className: _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contentWrap,
      children: data.map((item, index) => {
        if (i === 0) {
          if (index > 3) return;
        } else {
          if (index <= 3) return;
        }

        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
          className: _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselItem,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
            loading: "lazy",
            src: item.icon,
            alt: "img"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", {
            children: item.title
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
            children: item.description
          })]
        }, index);
      })
    }, i);
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    className: _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", {
      className: _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      children: t('businessTasksWeSolved')
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      className: _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.subtitle,
      children: t('businessTasksDescription')
    }), width >= 1200 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        className: _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.asideRightLine
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        className: _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.asideLeftLine
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        className: _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.deskContentWrap,
        children: data.map((item, index) => {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
            className: _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
              loading: "lazy",
              src: item.icon,
              alt: "img"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", {
              children: item.title
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
              children: item.description
            })]
          }, index);
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_ReusableComponents_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      slides: width < 768 ? mobileSlides : tabletSlides,
      config: config,
      data: width < 768 ? data : [1, 2],
      containerClass: _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselWrap,
      carouselControlsClass: _BusinessPains_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselControls,
      isShowDash: width < 768
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BusinessPains);

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

/***/ })

};;