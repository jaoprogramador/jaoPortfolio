"use strict";
(() => {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1053);

async function handler(req, res) {
    const { lang  } = req.query;
    console.log("pages/api/posts---lang", lang);
    try {
        const posts = (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__/* .getAllPosts */ .Bd)(lang, [
            "slug",
            "title",
            "image",
            "preview",
            "author",
            "date", 
        ]);
        console.log("pages/api/posts---posts", posts);
        res.status(200).json(posts);
    } catch (error) {
        console.log("pages/api/posts---ERROR", error);
        res.status(500).json({
            error: "Error fetching posts"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [53], () => (__webpack_exec__(7931)));
module.exports = __webpack_exports__;

})();