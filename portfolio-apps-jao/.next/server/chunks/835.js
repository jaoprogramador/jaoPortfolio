"use strict";
exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 5542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9954);




const Button = ({ children , type , onClick , classes  })=>{
    const { theme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    if (type === "primary") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: onClick,
            type: "button",
            className: `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${_data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__.showCursor && "cursor-none"}  ${classes}`,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        type: "button",
        className: `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${theme === "dark" ? "hover:bg-slate-600 text-white" : "hover:bg-slate-100"} hover:scale-105 active:scale-100  tablet:first:ml-0  ${_data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__.showCursor && "cursor-none"} ${classes} link`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 9617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_cursor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1263);
/* harmony import */ var custom_cursor_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(custom_cursor_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);





const Cursor = ()=>{
    const theme = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const { 0: mount , 1: setMount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const getCusomColor = ()=>{
        if (theme.theme === "dark") {
            return "#fff";
        } else if (theme.theme === "light") {
            return "#000";
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMount(true);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: mount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((custom_cursor_react__WEBPACK_IMPORTED_MODULE_2___default()), {
            targets: [
                ".link"
            ],
            customClass: "custom-cursor",
            dimensions: 30,
            fill: getCusomColor(),
            smoothness: {
                movement: 0.2,
                scale: 0.1,
                opacity: 0.2
            },
            targetOpacity: 0.5,
            targetScale: 2
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);


/***/ }),

/***/ 2665:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5542);
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9954);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// Local Data

const Header = ({ handleWorkScroll , handleAboutScroll , isBlog  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { name , showBlog , showResume  } = _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__;
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setMounted(true);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
                className: "block tablet:hidden mt-5",
                children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between p-2 laptop:p-0",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        onClick: ()=>router.push("/")
                                        ,
                                        className: "font-medium p-2 laptop:p-0 link",
                                        children: [
                                            name,
                                            "."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__.darkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                                ,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-6",
                                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-5",
                                                    src: `/images/${!open ? theme === "dark" ? "menu-white.svg" : "menu.svg" : theme === "light" ? "cancel.svg" : "cancel-white.svg"}`
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
                                className: `absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"} shadow-md rounded-md`,
                                children: !isBlog ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: handleWorkScroll,
                                            children: "Work"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: handleAboutScroll,
                                            children: "About"
                                        }),
                                        showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/blog")
                                            ,
                                            children: "Blog"
                                        }),
                                        showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/frameworks")
                                            ,
                                            children: "Frameworks"
                                        }),
                                        showResume && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>window.open("mailto:jaoprogramador@gmail.com")
                                            ,
                                            children: "Resume"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>window.open("mailto:jaoprogramador@gmail.com")
                                            ,
                                            children: "Contact"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/")
                                            ,
                                            classes: "first:ml-1",
                                            children: "Home"
                                        }),
                                        showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/blog")
                                            ,
                                            children: "Blog"
                                        }),
                                        showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/frameworks")
                                            ,
                                            children: "Frameworks"
                                        }),
                                        showResume && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/resume")
                                            ,
                                            classes: "first:ml-1",
                                            children: "Resume"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>window.open("mailto:jaoprogramador@gmail.com")
                                            ,
                                            children: "Contact"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `mt-10 hidden flex-row items-center justify-between sticky ${theme === "light" && "bg-white"} dark:text-white top-0 z-10 tablet:flex`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        onClick: ()=>router.push("/")
                        ,
                        className: "font-medium cursor-pointer mob:p-2 laptop:p-0",
                        children: [
                            name,
                            "."
                        ]
                    }),
                    !isBlog ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: handleWorkScroll,
                                children: "Work"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: handleAboutScroll,
                                children: "About"
                            }),
                            showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/blog")
                                ,
                                children: "Blog"
                            }),
                            showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/frameworks")
                                ,
                                children: "Frameworks"
                            }),
                            showResume && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/resume")
                                ,
                                classes: "first:ml-1",
                                children: "Resume"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>window.open("mailto:jaoprogramador@gmail.com")
                                ,
                                children: "Contact"
                            }),
                            mounted && theme && _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__.darkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "h-6",
                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/")
                                ,
                                children: "Home"
                            }),
                            showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/blog")
                                ,
                                children: "Blog"
                            }),
                            showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/frameworks")
                                ,
                                children: "Frameworks"
                            }),
                            showResume && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/resume")
                                ,
                                classes: "first:ml-1",
                                children: "Resume"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>window.open("mailto:jaoprogramador@gmail.com")
                                ,
                                children: "Contact"
                            }),
                            mounted && theme && _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__.darkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "h-6",
                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9954:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"JAO","headerTaglineOne":"Hello 👋","headerTaglineTwo":"I\'m Juan Arana Olalde","headerTaglineThree":"designer and devloper","headerTaglineFour":" based in Bizkaia, Spain.","showCursor":true,"showBlog":true,"darkMode":true,"showResume":true,"socials":[{"id":"1","title":"Github","link":"https://github.com/jaoprogramador"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/juan-arana-olalde-8b77a266/"},{"id":"3","title":"Twitter","link":"https://twitter.com/jaoprogramador"},{"id":"4","title":"Blog","link":"https://blog.jaoprogramador.com/"},{"id":"5","title":"Email","link":"mailto:jaoprogramador@gmail.com"}],"projects":[{"id":"1","title":"Project React","description":"Design & Development","imageSrc":"/img/logos/react.jpg","url":"https://jaoreactgraphqlfront.onrender.com/"},{"id":"2","title":"Project Angular","description":"Web Development","imageSrc":"/img/logos/angular.jpg","url":"https://proyecto-final-angular-42db4.web.app/login"},{"id":"3","title":"Java Development","description":"Programming","imageSrc":"/img/logos/Java.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP"},{"id":"4","title":"Project Spring","description":"Development","imageSrc":"/img/logos/SpringCloud.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/5SpringSecurity"},{"id":"5","title":"Project Spring Cloud Microservices","description":"Development","imageSrc":"/img/logos/SpringCloud.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/5SpringSecurity"},{"id":"6","title":"Project Web JAO","description":"Web Design","imageSrc":"/img/jaoweb.jpg","url":"https://jaoprogramadorweb.onrender.com/j2ee/index.htm"}],"services":[{"id":"1","title":"Server configuration","description":"Configuration of environments, servers and web applications with Java, Angular, React, JQuery, Tomcat, Wildfly, JBoss, Weblogic..."},{"id":"2","title":"Development","description":"Programming with various Java frameworks such as Spring, Spring Cloud, Hibernate, JDBC, EJB, Jquery, Angular, React..."},{"id":"3","title":"Web Design","description":"I build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel."},{"id":"4","title":"Data Base","description":"I work with different relational databases such as Oracle, SQL server, PostgresSql and non-relational databases such as MongoDB"},{"id":"5","title":"Deploy","description":"I have done deployments with different tools such as Firebase, Render, AWS, Jira, Bamboo, AnthillPro and manually"},{"id":"6","title":"Version Controller","description":"I have worked with SVN, Git... among other code version controllers"}],"aboutpara":"👋Hi, I\'m Juan Arana Olalde and I studied computer application development and computer systems administration along with different courses to complete my training.\\n\\n\\n\\n 🛤️Since 2006 I have been participating in different Java and j2ee projects, carrying out fullstack tasks, development, analysis, requirements gathering, estimates, migrations, tests, deployments, incidents, dealing with clients... \\n\\n\\n\\n🎯My goal is to develop my professional career in a project that allows me to grow while contributing my knowledge and experience.\\n\\n\\n\\n ℹ️If you have any questions, do not hesitate to contact me on LinkedIn or email and I will clarify them for you.","resume":{"tagline":"👋  I\'m a software developer, product designer, and maker.","description":"I have worked in public and private companies participating in Java and J2EE projects. Knowledgeable in React, Javascript and most web frameworks. Carry out the technical design of the system and/or application programs, their testing and fine-tuning, as well as provide training and technical assistance to users and exploitation, participating in the projects according to the current methodology.","experiences":[{"id":"3","dates":"June 2023 - October 2023","type":"Full Time","position":"Analista Funcional","bullets":"Java, EJB session, Hibernate HQL, IBM WebSphere, Kibana, TFS"},{"id":"4","dates":"October 2022 - May 2023","type":"Full Time","position":"Analista Funcional","bullets":"Java-J2EE, JDK 1.8, UDA, Spring MVC, Spring JDBC, JPA 2.0, JQuery, AJAX, JDOM, HTML, CSS, JAXB, DAO, WebLogic 11, Oracle 12, SQL Developer, AntHillPRO, hdiv, SVN, Toolkit"},{"id":"5","dates":"May 2019 - October 2022","type":"Full Time","position":"Analista Programador","bullets":"Java – J2EE, JDK 1.8, Microservices, Spring, Servicios Web Rest, SOAP, JSON, JSP, JS, JQuery, JDBC, POI, FOP, SQL, Oracle, WildFly-10, JBoss 4"},{"id":"6","dates":"October 2018 - February 2019","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.8, BIDE, ATOM, PrimeFaces, HTML, XHTML, CSS, ANT, JBoss EAP 6.4, SQL Server, PL-SQL, JIRA, Sonar"},{"id":"7","dates":"December 2017 - October 2018","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.8, Microservices, UDA, Spring Beans, Spring Service, Spring MVC, Spring JDBC, JPA 2.0, JQuery, AJAX, JDOM, HTML, CSS, JAXB, EJB 3.0, DAO, ANT, WebLogic 11, Apache, Oracle, SQL Developer, AntHillPRO"},{"id":"8","dates":"May 2017 - December 2017","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.7, Spring Batch, Maven, JUnit, APX, Mongo, Bamboo"},{"id":"9","dates":"July 2015 - February 2017","type":"Full Time","position":"Analista Programador","bullets":"H2US, H2AD (ASP y VB.NET), Java-J2EE, JDK 1.7, Atom v 1.4, Red Hat JBoss Developer Studio 8 IDE, JBoss EAP 6.4, SQuirrel SQL Client v3.5.3, JSP, Jira, JQuery, AJAX, JSON, ANT, Tortoise, DB2, Transact-SQL y SQL Server"},{"id":"10","dates":"July 2014 - May 2015","type":"Full Time","position":"Analista Programador","bullets":"Java-J2EE, JBoss 4, Hibernate, JPA (HQL), XSL, Oracle 11, SQL Developer, Ant, JDK 1.5, SVN, Microservices, Servicios WEB (Axis2), iReport-1.3.1, Struts2, JavaScript, HTML, Pentaho 3.8.3, Maven2"},{"id":"11","dates":"October 2010 - February 2013","type":"Full Time","position":"Analista Programador","bullets":"J2EE, Java, EJB 2.1 (Session-Entity-Message), Struts1.3, Vaadin, JSP, JDBC, XDoclet, JUnit, Hudson, Maven, WebLogic 8 y 11, Apache, HTML, XML, SQL, SQuirrel, FOP, Framework Oinarri, WebSphere Portal v6.1 Server, WebSphere Application Server v6.1, Oracle 10, Linux, Gestor de Contenidos, Interwoven, patrones de diseño (Business Delegate, Facade, MVC)"},{"id":"12","dates":"December 2009 - February 2010","type":"Full Time","position":"Analista Programador","bullets":"JBoss 5 y Tomcat 6 en J2EE, Struts Framework y EJB 3.0, Java, JPA, Persistencia, Transaccionalidad, JSP, XML, HTML, JavaScript, JQuery, SVN, Oracle, SQL, IDE Eclipse Ganymede, Linux-Ubuntu, Hudson, Maven, Firma Digital, Izenpe, XADES-CADES, Personas a cargo: 3"},{"id":"13","dates":"January 2008 - March 2009","type":"Full Time","position":"Analista Programador","bullets":"WebSphere, J2EE, Struts Framework, Java, EJB, RMI, JDBC, JSP, XML, HTML, JavaScript, PL/SQL, UML, Hidranet, Corporate Modeler, WorkFlows, CVS"},{"id":"14","dates":"March 2007 - December 2007","type":"Full Time","position":"Programador Informático","bullets":"J2EE, Struts Framework, Servlets, Java, JDBC, DAOs, JSP, XML, XSL:FO, HTML, JavaScript, TOAD, PL/SQL, UML, Subversion, Tomcat"},{"id":"15","dates":"February 2006 - September 2006","type":"Full Time","position":"Programador Informático","bullets":"WebSphere, J2EE, Atom Framework, Java, XML, HTML, JavaScript, SQL, WebSphere, CVS"},{"id":"16","dates":"March 2005 - June 2005","type":"Part Time","position":"Técnico Informático y Diseñador Web","bullets":"Integral de Medios, Desarrollo de aplicaciones informáticas y portales como: www.afm.es, www.hetel.org, www.proschools.biz, www.ifprl.com"},{"id":"17","dates":"March 2003 - June 2003","type":"Part Time","position":"Técnico Informático y Diseñador Web","bullets":"ArtiCad, Deusto, Desarrollo del portal web de la empresa: www.articad.com, Configuración e instalación de redes, administración, gestión y mantenimiento de la red"},{"id":"18","dates":"May 2004","type":"Part Time","position":"Monitor de Diseño Gráfico y Web","bullets":"Colegio Ruperto Medina, Portugalete, Talleres de diseño gráfico y web durante la XVII Semana Cultural"}],"education":{"universityName":"Higher degree training cycle: Computer systems administration and Development of computer applications","universityDate":"2003 - 2005 and 2001 – 2003","universityPara":"Throughout my career I have been complementing my training with different Java-J2EE programming courses, relational databases, local area networks, Operating Systems and Application Servers, web design, Frameworks Fonts, etc..."},"languages":["Javascript","HTML5","CSS","Java","PL/SQL"],"frameworks":["React","Typescript","NodeJs","Angular","JQuery","Spring","Hibernate"],"others":["AWS","Render","Firebase","MongoDB","Oracle","SQL Server","PostgresSQL"]}}');

/***/ })

};
;