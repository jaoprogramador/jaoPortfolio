"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4745);
/* harmony import */ var _src_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8294);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_i18n__WEBPACK_IMPORTED_MODULE_3__]);
_src_i18n__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



 // Importa el contexto de idioma
 // Asegúrate de importar i18n para inicializar las traducciones
const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_LanguageContext__WEBPACK_IMPORTED_MODULE_2__/* .LanguageProvider */ .i, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8294:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7987);
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6252);
/* harmony import */ var _locales_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(790);
/* harmony import */ var _locales_es_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8563);
/* harmony import */ var _locales_eu_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6485);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__, i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__]);
([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__, i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__["default"]) // Detecta automáticamente el idioma del navegador
.use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next) // Inicializa react-i18next
.init({
    resources: {
        en: {
            translation: _locales_en_json__WEBPACK_IMPORTED_MODULE_3__
        },
        es: {
            translation: _locales_es_json__WEBPACK_IMPORTED_MODULE_4__
        },
        eu: {
            translation: _locales_eu_json__WEBPACK_IMPORTED_MODULE_5__
        }
    },
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (i18n)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 6252:
/***/ ((module) => {

module.exports = import("i18next-browser-languagedetector");;

/***/ }),

/***/ 7987:
/***/ ((module) => {

module.exports = import("react-i18next");;

/***/ }),

/***/ 790:
/***/ ((module) => {

module.exports = JSON.parse('{"home":{"welcome":"Welcome to my portfolio!","about":"About Me","projects":"Projects","contact":"Contact"},"headers":{"work":"Work","about":"About","blog":"Blog","frameworks":"Frameworks","resume":"Resume","contact":"Contact","language":"Language"}}');

/***/ }),

/***/ 8563:
/***/ ((module) => {

module.exports = JSON.parse('{"home":{"welcome":"¡Bienvenido a mi portafolio!","about":"Sobre mí","projects":"Proyectos","contact":"Contacto"},"headers":{"work":"Trabajo","about":"Sobre mí","blog":"Blog","frameworks":"Frameworks","resume":"Currículum","contact":"Contacto","language":"Idioma"}}');

/***/ }),

/***/ 6485:
/***/ ((module) => {

module.exports = JSON.parse('{"home":{"welcome":"Welcome to my portfolio!_eu","about":"About Me_eu","projects":"Projects_eu","contact":"Contact_eu"},"headers":{"work":"Work_eu","about":"About_eu","blog":"Blog_eu","frameworks":"Frameworks_eu","resume":"Resume_eu","contact":"Contact_eu","language":"Language_eu"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [57], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();