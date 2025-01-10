"use strict";
exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 1879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9729);




// Mapeo de categorías con sus respectivas tecnologías y títulos
const categories = [
    {
        title: "React",
        filter: "React",
        icon: "/img/icons/react-icon.png"
    },
    {
        title: "Angular",
        filter: "Angular",
        icon: "/img/icons/angular-icon.png"
    },
    {
        title: "Spring Boot",
        filter: "Spring Framework",
        icon: "/img/icons/springboot-icon.png"
    },
    {
        title: "Spring Cloud",
        filter: "Spring Cloud",
        icon: "/img/icons/springcloud-icon.png"
    },
    {
        title: "Java",
        filter: "Java",
        icon: "/img/icons/java.png"
    },
    {
        title: "Web jaoprogramador",
        filter: "HTML",
        icon: "/img/icons/html-icon.png"
    }
];
/* const AppTable = ({ apps } ) => { */ const AppTable = ({ dataFrameworks =[]  })=>{
    const text = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    console.log("AppTable:");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
        className: "app-table",
        children: categories.map(({ title , filter , icon  })=>{
            //const filteredApps = apps.filter(app => app.technology.includes(filter));
            const filteredApps = dataFrameworks.filter((app)=>app.technology && app.technology.includes(filter)
            );
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "mt-5 text-4xl",
                                            children: title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: icon,
                                            alt: `${title} icon`,
                                            style: {
                                                width: "24px",
                                                height: "24px"
                                            }
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: filteredApps.length > 0 ? filteredApps.map((app)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AppCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        app: app
                                    }, app.name)
                                ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "No hay aplicaciones en esta categor\xeda."
                                })
                            })
                        })
                    })
                ]
            }, title);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppTable);


/***/ })

};
;