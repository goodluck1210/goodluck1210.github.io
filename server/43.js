exports.ids = [43];
exports.modules = {

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

/***/ "ckEW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MhZx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TTxv");
/* harmony import */ var _config_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ar21");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wJ4g");
/* harmony import */ var _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pJtw");
/* harmony import */ var _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icons_blogDate_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("HXZE");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












const RelatedPosts = ({
  releatedArticles
}) => {
  const {
    relatedPosts
  } = _config_en__WEBPACK_IMPORTED_MODULE_4__[/* en */ "a"];
  const size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  const filterdReleatedArticles = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (size.width >= 1200) {
      return releatedArticles.slice(0, 6);
    } else if (size.width >= 768 && size.width <= 1199) {
      return releatedArticles.slice(0, 4);
    } else {
      return releatedArticles.slice(0, 1);
    }
  }, [size.width]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
      className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.wrapper,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h3", {
        className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.blockname,
        children: relatedPosts
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.content,
        children: filterdReleatedArticles.map(article => {
          const authorPage = _config_constants__WEBPACK_IMPORTED_MODULE_5__[/* authorsPageAndName */ "s"].find(el => el.name === article.author).link;
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
            className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: Object(_config_routing__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(article.id).article,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.image,
                src: article.backgrounds.preview,
                alt: "img"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: Object(_config_routing__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(article.id).article,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
                className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title,
                children: article.title
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
              className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.postInfo,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("p", {
                className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.author,
                children: ["Written by", ' ', authorPage ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  href: authorPage,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                    children: article.author
                  })
                }) : author]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.dateBlock,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_assets_icons_blogDate_svg__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
                  className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.date,
                  children: article.date
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
              className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.text,
              children: article.metaDescription.replace(/✔️/, ' ').replace(/✅/, '').replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
            })]
          }, article.id);
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.linkBlock,
        children: filterdReleatedArticles.length !== 1 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.link,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: Object(_config_routing__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(releatedArticles[0].category[0]).blogCategory,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
              style: {
                display: 'flex'
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
                children: "Read all"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                src: "/images/blog/elements/blogArrow.svg",
                alt: "icon"
              })]
            })
          })
        })
      })]
    })
  });
};

const Stars = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
    className: _RelatedPosts_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stars,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
      src: "/images/blog/elements/smallStar.svg",
      alt: "star"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
      src: "/images/blog/elements/smallStar.svg",
      alt: "star"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
      src: "/images/blog/elements/smallStar.svg",
      alt: "star"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
      src: "/images/blog/elements/smallStar.svg",
      alt: "star"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
      src: "/images/blog/elements/smallStar.svg",
      alt: "star"
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RelatedPosts);

/***/ }),

/***/ "pJtw":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "RelatedPosts_wrapper__1sYMI",
	"blockname": "RelatedPosts_blockname__pEvWd",
	"content": "RelatedPosts_content__1hDm2",
	"item": "RelatedPosts_item__7cRyt",
	"image": "RelatedPosts_image__1vPMn",
	"title": "RelatedPosts_title__27Ke4",
	"postInfo": "RelatedPosts_postInfo__1dvOK",
	"dateBlock": "RelatedPosts_dateBlock__PdmEv",
	"date": "RelatedPosts_date__WH1Uq",
	"text": "RelatedPosts_text__1b0kv",
	"linkBlock": "RelatedPosts_linkBlock__7lmHk",
	"link": "RelatedPosts_link__2kUSr"
};


/***/ })

};;