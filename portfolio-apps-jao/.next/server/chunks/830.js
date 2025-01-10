exports.id = 830;
exports.ids = [830];
exports.modules = {

/***/ 7462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5542);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(649);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);







const BlogEditor = ({ post , close , refresh  })=>{
    const { theme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const { 0: currentTabs , 1: setCurrentTabs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("BLOGDETAILS");
    const { 0: blogContent , 1: setBlogContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.content);
    const { 0: blogVariables , 1: setBlogVariables  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        date: post.date,
        title: post.title,
        tagline: post.tagline,
        preview: post.preview,
        image: post.image
    });
    const savePost = async ()=>{
        if (false) {} else {
            alert("This thing only works in development mode.");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `fixed z-10 w-screen h-screen overflow-auto top-0 flex flex-col items-center ${theme === "dark" ? "bg-black" : "bg-white"}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container my-20",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-10",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "z-10 sticky top-12",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-4xl",
                                        children: blogVariables.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                onClick: savePost,
                                                type: "primary",
                                                children: "Save"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                onClick: close,
                                                children: "Close"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        onClick: ()=>setCurrentTabs("BLOGDETAILS")
                                        ,
                                        type: currentTabs === "BLOGDETAILS" && "primary",
                                        children: "Blog Details"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        onClick: ()=>setCurrentTabs("CONTENT")
                                        ,
                                        type: currentTabs === "CONTENT" && "primary",
                                        children: "Content"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                currentTabs === "BLOGDETAILS" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-10",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-5 flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "w-full text-sx opacity-50",
                                    children: "Date"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    selected: new Date(blogVariables.date),
                                    className: "w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",
                                    onChange: (date)=>{
                                        setBlogVariables({
                                            ...blogVariables,
                                            date: date.toISOString()
                                        });
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-5 flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "w-full text-sx opacity-50",
                                    children: "Title"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    value: blogVariables.title,
                                    onChange: (e)=>setBlogVariables({
                                            ...blogVariables,
                                            title: e.target.value
                                        })
                                    ,
                                    className: "w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",
                                    type: "text"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-5 flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "w-full text-sx opacity-50",
                                    children: "Tagline"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    value: blogVariables.tagline,
                                    onChange: (e)=>setBlogVariables({
                                            ...blogVariables,
                                            tagline: e.target.value
                                        })
                                    ,
                                    className: "w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",
                                    type: "text"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-5 flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "w-full text-sx opacity-50",
                                    children: "preview (SEO)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    value: blogVariables.preview,
                                    onChange: (e)=>setBlogVariables({
                                            ...blogVariables,
                                            preview: e.target.value
                                        })
                                    ,
                                    className: "w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",
                                    type: "text"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-5 flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "w-full text-sx opacity-50",
                                    children: "Image"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    value: blogVariables.image,
                                    onChange: (e)=>setBlogVariables({
                                            ...blogVariables,
                                            image: e.target.value
                                        })
                                    ,
                                    className: "w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",
                                    type: "text"
                                })
                            ]
                        })
                    ]
                }),
                currentTabs === "CONTENT" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-10",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "w-full text-sx opacity-50",
                                children: "Content"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4___default()), {
                                className: "w-full h-auto mt-5 p-4 border hover:border-blue-400 rounded-xl shadow-xl",
                                value: blogContent,
                                onChange: (e)=>setBlogContent(e.target.value)
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogEditor);


/***/ }),

/***/ 9183:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4794);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__]);
react_markdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const CodeBlock = {
    code ({ node , inline , className , children , ...props }) {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Prism, {
            style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__.dracula,
            language: match[1],
            PreTag: "div",
            ...props,
            children: String(children).replace(/\n$/, "")
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
            className: className,
            ...props,
            children: children
        });
    }
};
const ContentSection = ({ content  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: CodeBlock,
        className: "markdown-class",
        children: content
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5994:
/***/ (() => {



/***/ })

};
;