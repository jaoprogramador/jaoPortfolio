"use strict";
(() => {
var exports = {};
exports.id = 771;
exports.ids = [771];
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

/***/ 4057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1053);

function handler(req, res) {
    try {
        const { lang , slug  } = req.query;
        console.log("API postDetail llamada con:", {
            lang,
            slug
        });
        if (!lang || !slug) {
            console.error("Faltan par\xe1metros en la consulta");
            return res.status(400).json({
                error: "Faltan par\xe1metros lang o slug"
            });
        }
        const post = (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__/* .getPostBySlug */ .zQ)(lang, slug, [
            "date",
            "slug",
            "preview",
            "title",
            "tagline",
            "preview",
            "image",
            "content", 
        ]);
        if (!post) {
            console.error("Post no encontrado:", {
                lang,
                slug
            });
            return res.status(404).json({
                error: "Post not found"
            });
        }
        console.log("Post encontrado:", post);
        res.status(200).json(post);
    } catch (error) {
        console.error("Error en API postDetail:", error);
        res.status(500).json({
            error: "Error fetching post",
            details: error.message
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
var __webpack_exports__ = __webpack_require__.X(0, [53], () => (__webpack_exec__(4057)));
module.exports = __webpack_exports__;

})();