exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 3465:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ProjectResume = ({ dates , type , position , bullets  })=>{
    const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split(","));
    return /*#__PURE__*/ _jsxs("div", {
        className: "mt-5 w-full flex mob:flex-col desktop:flex-row justify-between",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "text-lg w-2/5",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        children: dates
                    }),
                    /*#__PURE__*/ _jsx("h3", {
                        className: "text-sm opacity-50",
                        children: type
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "w-3/5",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: "text-lg font-bold",
                        children: position
                    }),
                    bulletsLocal && bulletsLocal.length > 0 && /*#__PURE__*/ _jsx("ul", {
                        className: "list-disc",
                        children: bulletsLocal.map((bullet, index)=>/*#__PURE__*/ _jsx("li", {
                                className: "text-sm my-1 opacity-70",
                                children: bullet
                            }, index)
                        )
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ProjectResume)));


/***/ }),

/***/ 6420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5542);
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9954);




const Socials = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${className} flex flex-wrap mob:flex-nowrap link`,
        children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__.socials.map((social, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                onClick: ()=>window.open(social.link)
                ,
                children: social.title
            }, index)
        )
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Socials);


/***/ }),

/***/ 1283:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/resumeCurriculum.json": 6029,
	"./es/resumeCurriculum.json": 6304,
	"./eu/resumeCurriculum.json": 8045
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1283;

/***/ })

};
;