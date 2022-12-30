exports.ids = [41];
exports.modules = {

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

/***/ "KSbk":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "Form_form__2ZGkc",
	"recaptcha": "Form_recaptcha__3CHcl"
};


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

/***/ "xTWq":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "modal_modal__2c4cG"
};


/***/ })

};;