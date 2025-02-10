"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 4238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8382);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2665);
/* harmony import */ var _components_ContentSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9183);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(558);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1353);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5542);
/* harmony import */ var _components_BlogEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7462);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9617);
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9954);
/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4745);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_3__, _components_ContentSection__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_3__, _components_ContentSection__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const BlogPost = ({ post  })=>{
    // Contexto de idioma
    const { language  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_LanguageContext__WEBPACK_IMPORTED_MODULE_14__/* .LanguageContext */ .A);
    const { 0: posts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post);
    const { 0: showEditor , 1: setShowEditor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const textOne = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const textTwo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useIsomorphicLayoutEffect */ .LI)(()=>{
        (0,_animations__WEBPACK_IMPORTED_MODULE_8__/* .stagger */ .E)([
            textOne.current,
            textTwo.current
        ], {
            y: 30
        }, {
            y: 0
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchPosts = async ()=>{
            try {
                console.log("\uD83D\uDD0D Solicitando post en idioma:", language);
                const res = await fetch(`/api/postDetail?lang=${language}&slug=${router.query.slug}`);
                const data1 = await res.json();
                console.log("\uD83D\uDCE5 Respuesta de la API:", data1);
                console.log("\uD83D\uDCE5 Respuesta de la API content:", data1.content);
                // 🔥 FORZAR RE-RENDER: Evitar que React ignore la actualización si el objeto es idéntico
                setPosts((prevPosts)=>JSON.stringify(prevPosts) !== JSON.stringify(data1) ? data1 : {
                        ...data1
                    }
                );
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, [
        language,
        router.query.slug
    ]); // Asegúrate de que el efecto depende del slug también
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Blog - " + posts.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: posts.preview
                    })
                ]
            }),
            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_13__.showCursor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cursor__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `container mx-auto mt-10 ${_data_portfolio_json__WEBPACK_IMPORTED_MODULE_13__.showCursor && "cursor-none"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        isBlog: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-10 flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "w-full h-96 rounded-lg shadow-lg object-cover",
                                src: post.image,
                                alt: posts.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                ref: textOne,
                                className: "mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold",
                                children: posts.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                ref: textTwo,
                                className: "mt-2 text-xl max-w-4xl text-darkgray opacity-50",
                                children: posts.tagline
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        content: posts.content
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            }),
             false && /*#__PURE__*/ 0,
            showEditor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogEditor__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                post: post,
                close: ()=>setShowEditor(false)
                ,
                refresh: ()=>router.reload(window.location.pathname)
            })
        ]
    });
};
async function getStaticProps(context) {
    try {
        const { locale , params  } = context;
        const { slug  } = params;
        const language = locale || "en";
        console.log("BlogPostSLUG--getStaticProps Obteniendo post para:locale", language);
        const post = (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__/* .getPostBySlug */ .zQ)(language, slug, [
            "date",
            "slug",
            "preview",
            "title",
            "tagline",
            "preview",
            "image",
            "content", 
        ]);
        return {
            props: {
                post: {
                    ...post
                }
            }
        };
    } catch (error) {
        console.error("Error en getStaticProps:", error);
        return {
            notFound: true
        };
    }
}
async function getStaticPaths(context) {
    const { locale  } = context;
    const language = locale || "en";
    console.log("Obteniendo getStaticPaths para locale:", language);
    const posts = (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__/* .getAllPosts */ .Bd)(language, [
        "slug"
    ]);
    return {
        paths: posts.map((post)=>{
            return {
                params: {
                    slug: post.slug
                }
            };
        }),
        fallback: false
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1263:
/***/ ((module) => {

module.exports = require("custom-cursor-react");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("react-datepicker");

/***/ }),

/***/ 727:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 4794:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

/***/ }),

/***/ 649:
/***/ ((module) => {

module.exports = require("react-textarea-autosize");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 7987:
/***/ ((module) => {

module.exports = import("react-i18next");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,57,835,134,3,830,382], () => (__webpack_exec__(4238)));
module.exports = __webpack_exports__;

})();