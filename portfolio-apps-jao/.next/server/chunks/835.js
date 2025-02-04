exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 5542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5542);
/* harmony import */ var _SelectLanguaje__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(878);
/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4745);
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9954);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, react_i18next__WEBPACK_IMPORTED_MODULE_4__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, react_i18next__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Header = ({ handleWorkScroll , handleAboutScroll , isBlog  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { language , setLanguage  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_LanguageContext__WEBPACK_IMPORTED_MODULE_8__/* .LanguageContext */ .A);
    const dataHeader = __webpack_require__(84)(`./${language}/${language}.json`);
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setMounted(true);
    }, []);
    const handleLanguageChange = (e)=>{
        setLanguage(e.target.value);
    };
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
                                            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.name,
                                            "."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SelectLanguaje__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                value: language,
                                                onChange: handleLanguageChange,
                                                options: [
                                                    {
                                                        value: "es",
                                                        label: "\uD83C\uDDEA\uD83C\uDDF8 Castellano"
                                                    },
                                                    {
                                                        value: "en",
                                                        label: "\uD83C\uDDEC\uD83C\uDDE7 English"
                                                    },
                                                    {
                                                        value: "eu",
                                                        label: "\uD83C\uDDEA\uD83C\uDDFA Euskera"
                                                    }
                                                ]
                                            }),
                                            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.darkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                                ,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-6",
                                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`,
                                                    alt: "Toggle theme"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-5",
                                                    src: `/images/${!open ? theme === "dark" ? "menu-white.svg" : "menu.svg" : theme === "light" ? "cancel.svg" : "cancel-white.svg"}`,
                                                    alt: "Menu toggle"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
                                className: `absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"} shadow-md rounded-md`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-1",
                                    children: [
                                        isBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/")
                                            ,
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            onClick: handleWorkScroll,
                                            children: dataHeader.headers.work
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            onClick: handleAboutScroll,
                                            children: dataHeader.headers.about
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/blog")
                                            ,
                                            children: dataHeader.headers.blog
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/frameworks")
                                            ,
                                            children: dataHeader.headers.frameworks
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/resume")
                                            ,
                                            children: dataHeader.headers.resume
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            onClick: ()=>window.open("mailto:jaoprogramador@gmail.com")
                                            ,
                                            children: dataHeader.headers.contact
                                        })
                                    ]
                                })
                            })
                        ]
                    })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-10 hidden flex-row items-center justify-between sticky dark:text-white top-0 z-10 tablet:flex",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        onClick: ()=>router.push("/")
                        ,
                        className: "font-medium cursor-pointer",
                        children: [
                            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.name,
                            "."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            isBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/")
                                ,
                                children: "Home"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                onClick: handleWorkScroll,
                                children: dataHeader.headers.work
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                onClick: handleAboutScroll,
                                children: dataHeader.headers.about
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/blog")
                                ,
                                children: dataHeader.headers.blog
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/frameworks")
                                ,
                                children: dataHeader.headers.frameworks
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/resume")
                                ,
                                children: dataHeader.headers.resume
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                onClick: ()=>window.open("mailto:jaoprogramador@gmail.com")
                                ,
                                children: dataHeader.headers.contact
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SelectLanguaje__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                value: language,
                                onChange: handleLanguageChange,
                                options: [
                                    {
                                        value: "es",
                                        label: "\uD83C\uDDEA\uD83C\uDDF8 Castellano"
                                    },
                                    {
                                        value: "en",
                                        label: "\uD83C\uDDFA\uD83C\uDDF8 English"
                                    },
                                    {
                                        value: "eu",
                                        label: "\uD83C\uDDEA\uD83C\uDDFA Euskera"
                                    }
                                ]
                            }),
                            mounted && theme && _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.darkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "h-6",
                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`,
                                    alt: "Toggle theme"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header); /* import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState, useContext } from "react";
import Button from "../Button";
import Select from "../SelectLanguaje";
import { LanguageContext } from "../../context/LanguageContext";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {

  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);
  const data = require(`../../src/translations/${language}/${language}.json`);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1 onClick={() => router.push("/")} className="font-medium p-2 laptop:p-0 link">
                {data.name}.
              </h1>

              <div className="flex items-center">
              <Select
                value={language}
                onChange={handleLanguageChange}
                options={[
                  { value: "es", label: "🇪🇸 Castellano" },
                  { value: "en", label: "🇬🇧 English" },
                  { value: "eu", label: "🇪🇺 Euskera" }
                ]}
              />

                {data.darkMode && (
                  <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <img className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} alt="Toggle theme" />
                  </Button>
                )}

                <Popover.Button>
                  <img className="h-5" src={`/images/${!open ? (theme === "dark" ? "menu-white.svg" : "menu.svg") : theme === "light" ? "cancel.svg" : "cancel-white.svg"}`} alt="Menu toggle" />
                </Popover.Button>
              </div>
            </div>

            <Popover.Panel className={`absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"} shadow-md rounded-md`}>
              <div className="grid grid-cols-1">
                {isBlog && <Button onClick={() => router.push("/")}>Home</Button>}
                <Button onClick={handleWorkScroll}>{data.headers.work}</Button>
                <Button onClick={handleAboutScroll}>{data.headers.about}</Button>
                <Button onClick={() => router.push("/blog")}>{data.headers.blog}</Button>
                <Button onClick={() => router.push("/frameworks")}>{data.headers.frameworks}</Button>
                <Button onClick={() => router.push("/resume")}>{data.headers.resume}</Button>
                <Button onClick={() => window.open("mailto:jaoprogramador@gmail.com")}>{data.headers.contact}</Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div className="mt-10 hidden flex-row items-center justify-between sticky dark:text-white top-0 z-10 tablet:flex">
        <h1 onClick={() => router.push("/")} className="font-medium cursor-pointer">
          {data.name}.
        </h1>
        <div className="flex">
          {isBlog && <Button onClick={() => router.push("/")}>Home</Button>}
          <Button onClick={handleWorkScroll}>{data.headers.work}</Button>
          <Button onClick={handleAboutScroll}>{data.headers.about}</Button>
          <Button onClick={() => router.push("/blog")}>{data.headers.blog}</Button>
          <Button onClick={() => router.push("/frameworks")}>{data.headers.frameworks}</Button>
          <Button onClick={() => router.push("/resume")}>{data.headers.resume}</Button>
          <Button onClick={() => window.open("mailto:jaoprogramador@gmail.com")}>{data.headers.contact}</Button>

         
          <Select
              value={language}
              onChange={handleLanguageChange}
              options={[
                { value: "es", label: "🇪🇸 Castellano" },
                { value: "en", label: "🇺🇸 English" },
                { value: "eu", label: "🇪🇺 Euskera" }
              ]}
            />
          {mounted && theme && data.darkMode && (
            <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <img className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} alt="Toggle theme" />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header; */  /* import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showBlog && (
                    <Button onClick={() => router.push("/frameworks")}>Frameworks</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:jaoprogramador@gmail.com")
                      }
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:jaoprogramador@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showBlog && (
                    <Button onClick={() => router.push("/frameworks")}>Frameworks</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:jaoprogramador@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showBlog && (
              <Button onClick={() => router.push("/frameworks")}>Frameworks</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:jaoprogramador@gmail.com")}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showBlog && (
              <Button onClick={() => router.push("/frameworks")}>Frameworks</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:jaoprogramador@gmail.com")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
 */ 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




const Select = ({ options , value , onChange , classes  })=>{
    const { theme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
        value: value,
        onChange: onChange,
        className: `ml-2 p-1 border rounded transition-all duration-300 ease-out
        ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"}
        hover:scale-105 active:scale-100 ${_data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__.showCursor && "cursor-none"} ${classes}`,
        children: options.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: option.value,
                children: option.label
            }, option.value)
        )
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ }),

/***/ 84:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/en.json": 1604,
	"./en/portfolio.json": 4297,
	"./es/es.json": 317,
	"./es/portfolio.json": 5004,
	"./eu/eu.json": 1834,
	"./eu/portfolio.json": 3159
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
webpackContext.id = 84;

/***/ }),

/***/ 9954:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"JAO","headerTaglineOne":"Hello 👋","headerTaglineTwo":"I\'m Juan Arana Olalde","headerTaglineThree":"designer and fullstack developer","headerTaglineFour":" based in Bizkaia, Spain.","headerTaglineFive":" In the Framework section you will find a group of exercises from different frameworks such as React, Angular, Spring Boot, Spring Cloud, Mongo...","showCursor":true,"showBlog":true,"darkMode":true,"showResume":true,"socials":[{"id":"1","title":"Github","link":"https://github.com/jaoprogramador"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/juan-arana-olalde-8b77a266/"},{"id":"3","title":"Twitter","link":"https://twitter.com/jaoprogramador"},{"id":"4","title":"Blog","link":"https://blog.jaoprogramador.com/"},{"id":"5","title":"Email","link":"mailto:jaoprogramador@gmail.com"}],"projects":[{"id":"1","title":"Project React","description":"Design & Development","imageSrc":"/img/logos/react.jpg","url":"https://mongouserblogsstilosmenuvar.onrender.com/"},{"id":"2","title":"Project Angular","description":"Web Development","imageSrc":"/img/logos/angular.jpg","url":"https://proyecto-final-angular-42db4.web.app/login"},{"id":"3","title":"Java Development","description":"Programming","imageSrc":"/img/logos/Java.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP"},{"id":"4","title":"Project Spring","description":"Development","imageSrc":"/img/logos/SpringCloud.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/5SpringSecurity"},{"id":"5","title":"Project Spring Cloud Microservices","description":"Development","imageSrc":"/img/logos/SpringCloud.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/5SpringSecurity"},{"id":"6","title":"Project Web JAO","description":"Web Design","imageSrc":"/img/jaoweb.jpg","url":"https://jaoprogramadorweb.onrender.com/j2ee/index.htm"}],"services":[{"id":"1","title":"Server configuration","description":"Configuration of environments, servers and web applications with Java, Angular, React, JQuery, Tomcat, Wildfly, JBoss, Weblogic..."},{"id":"2","title":"Development","description":"Programming with various Java frameworks such as Spring, Spring Cloud, Hibernate, JDBC, EJB, Jquery, Angular, React..."},{"id":"3","title":"Web Design","description":"I build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel."},{"id":"4","title":"Data Base","description":"I work with different relational databases such as Oracle, SQL server, PostgresSql and non-relational databases such as MongoDB"},{"id":"5","title":"Deploy","description":"I have done deployments with different tools such as Firebase, Render, AWS, Jira, Bamboo, AnthillPro and manually"},{"id":"6","title":"Version Controller","description":"I have worked with SVN, Git... among other code version controllers"}],"aboutpara":"👋Hi, I\'m Juan Arana Olalde and I studied computer application development and computer systems administration along with different courses to complete my training.\\n\\n\\n\\n 🛤️Since 2006 I have been participating in different Java and j2ee projects, carrying out fullstack tasks, development, analysis, requirements gathering, estimates, migrations, tests, deployments, incidents, dealing with clients... \\n\\n\\n\\n🎯My goal is to develop my professional career in a project that allows me to grow while contributing my knowledge and experience.\\n\\n\\n\\n ℹ️If you have any questions, do not hesitate to contact me on LinkedIn or email and I will clarify them for you.","resume":{"tagline":"👋  I\'m a software developer, product designer, and maker.","description":"I have worked in public and private companies participating in Java and J2EE projects. Knowledgeable in React, Angular, JQuery, Javascript and most web frameworks. Carry out the technical design of the system and/or application programs, their testing and fine-tuning, as well as provide training and technical assistance to users and exploitation, participating in the projects according to the current methodology.","experiences":[{"id":"3","dates":"June 2023 - October 2023","type":"Full Time","position":"Analista Funcional","bullets":"Java, EJB session, Hibernate HQL, IBM WebSphere, Kibana, TFS"},{"id":"4","dates":"October 2022 - May 2023","type":"Full Time","position":"Analista Funcional","bullets":"Java-J2EE, JDK 1.8, UDA, Spring MVC, Spring JDBC, JPA 2.0, JQuery, AJAX, JDOM, HTML, CSS, JAXB, DAO, WebLogic 11, Oracle 12, SQL Developer, AntHillPRO, hdiv, SVN, Toolkit"},{"id":"5","dates":"May 2019 - October 2022","type":"Full Time","position":"Analista Programador","bullets":"Java – J2EE, JDK 1.8, Microservices, Spring, Servicios Web Rest, SOAP, JSON, JSP, JS, JQuery, JDBC, POI, FOP, SQL, Oracle, WildFly-10, JBoss 4"},{"id":"6","dates":"October 2018 - February 2019","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.8, BIDE, ATOM, PrimeFaces, HTML, XHTML, CSS, ANT, JBoss EAP 6.4, SQL Server, PL-SQL, JIRA, Sonar"},{"id":"7","dates":"December 2017 - October 2018","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.8, Microservices, UDA, Spring Beans, Spring Service, Spring MVC, Spring JDBC, JPA 2.0, JQuery, AJAX, JDOM, HTML, CSS, JAXB, EJB 3.0, DAO, ANT, WebLogic 11, Apache, Oracle, SQL Developer, AntHillPRO"},{"id":"8","dates":"May 2017 - December 2017","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.7, Spring Batch, Maven, JUnit, APX, Mongo, Bamboo"},{"id":"9","dates":"July 2015 - February 2017","type":"Full Time","position":"Analista Programador","bullets":"H2US, H2AD (ASP y VB.NET), Java-J2EE, JDK 1.7, Atom v 1.4, Red Hat JBoss Developer Studio 8 IDE, JBoss EAP 6.4, SQuirrel SQL Client v3.5.3, JSP, Jira, JQuery, AJAX, JSON, ANT, Tortoise, DB2, Transact-SQL y SQL Server"},{"id":"10","dates":"July 2014 - May 2015","type":"Full Time","position":"Analista Programador","bullets":"Java-J2EE, JBoss 4, Hibernate, JPA (HQL), XSL, Oracle 11, SQL Developer, Ant, JDK 1.5, SVN, Microservices, Servicios WEB (Axis2), iReport-1.3.1, Struts2, JavaScript, HTML, Pentaho 3.8.3, Maven2"},{"id":"11","dates":"October 2010 - February 2013","type":"Full Time","position":"Analista Programador","bullets":"J2EE, Java, EJB 2.1 (Session-Entity-Message), Struts1.3, Vaadin, JSP, JDBC, XDoclet, JUnit, Hudson, Maven, WebLogic 8 y 11, Apache, HTML, XML, SQL, SQuirrel, FOP, Framework Oinarri, WebSphere Portal v6.1 Server, WebSphere Application Server v6.1, Oracle 10, Linux, Gestor de Contenidos, Interwoven, patrones de diseño (Business Delegate, Facade, MVC)"},{"id":"12","dates":"December 2009 - February 2010","type":"Full Time","position":"Analista Programador","bullets":"JBoss 5 y Tomcat 6 en J2EE, Struts Framework y EJB 3.0, Java, JPA, Persistencia, Transaccionalidad, JSP, XML, HTML, JavaScript, JQuery, SVN, Oracle, SQL, IDE Eclipse Ganymede, Linux-Ubuntu, Hudson, Maven, Firma Digital, Izenpe, XADES-CADES, Personas a cargo: 3"},{"id":"13","dates":"January 2008 - March 2009","type":"Full Time","position":"Analista Programador","bullets":"WebSphere, J2EE, Struts Framework, Java, EJB, RMI, JDBC, JSP, XML, HTML, JavaScript, PL/SQL, UML, Hidranet, Corporate Modeler, WorkFlows, CVS"},{"id":"14","dates":"March 2007 - December 2007","type":"Full Time","position":"Programador Informático","bullets":"J2EE, Struts Framework, Servlets, Java, JDBC, DAOs, JSP, XML, XSL:FO, HTML, JavaScript, TOAD, PL/SQL, UML, Subversion, Tomcat"},{"id":"15","dates":"February 2006 - September 2006","type":"Full Time","position":"Programador Informático","bullets":"WebSphere, J2EE, Atom Framework, Java, XML, HTML, JavaScript, SQL, WebSphere, CVS"},{"id":"16","dates":"March 2005 - June 2005","type":"Part Time","position":"Técnico Informático y Diseñador Web","bullets":"Integral de Medios, Desarrollo de aplicaciones informáticas y portales como: www.afm.es, www.hetel.org, www.proschools.biz, www.ifprl.com"},{"id":"17","dates":"March 2003 - June 2003","type":"Part Time","position":"Técnico Informático y Diseñador Web","bullets":"ArtiCad, Deusto, Desarrollo del portal web de la empresa: www.articad.com, Configuración e instalación de redes, administración, gestión y mantenimiento de la red"},{"id":"18","dates":"May 2004","type":"Part Time","position":"Monitor de Diseño Gráfico y Web","bullets":"Colegio Ruperto Medina, Portugalete, Talleres de diseño gráfico y web durante la XVII Semana Cultural"}],"education":{"universityName":"Higher degree training cycle: Computer systems administration and Development of computer applications","universityDate":"2003 - 2005 and 2001 – 2003","universityPara":"Throughout my career I have been complementing my training with different Java-J2EE programming courses, relational databases, local area networks, Operating Systems and Application Servers, web design, Frameworks Fonts, etc..."},"languages":["Javascript","HTML5","CSS","Java","PL/SQL"],"frameworks":["React","Typescript","NodeJs","Angular","JQuery","Spring","Hibernate"],"others":["AWS","Render","Firebase","MongoDB","Oracle","SQL Server","PostgresSQL"]}}');

/***/ }),

/***/ 1604:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"home":{"welcome":"Welcome to my portfolio!","about":"About Me","projects":"Projects","contact":"Contact"},"headers":{"work":"Work","about":"About","blog":"Blog","frameworks":"Frameworks","resume":"Resume","contact":"Contact","language":"Language"},"init":{"work":"Works.","services":"Services.","about":"About Me"},"footer":{"contact":"Contact.","workTogether":"LET\'S WORK TOGETHER","scheduleButton":"Schedule a call"},"resume":{"formations":"Formations","education":"Education","experience":"Experience","skills":"Skills","frameworks":"Frameworks","others":"Others","languages":"Languages"}}');

/***/ }),

/***/ 4297:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"JAO","headerTaglineOne":"Hello 👋","headerTaglineTwo":"I\'m Juan Arana Olalde","headerTaglineThree":"designer and fullstack developer","headerTaglineFour":" based in Bizkaia, Spain.","headerTaglineFive":" In the Framework section you will find a group of exercises from different frameworks such as React, Angular, Spring Boot, Spring Cloud, Mongo...","showCursor":true,"showBlog":true,"darkMode":true,"showResume":true,"socials":[{"id":"1","title":"Github","link":"https://github.com/jaoprogramador"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/juan-arana-olalde-8b77a266/"},{"id":"3","title":"Twitter","link":"https://twitter.com/jaoprogramador"},{"id":"4","title":"Blog","link":"https://blog.jaoprogramador.com/"},{"id":"5","title":"Email","link":"mailto:jaoprogramador@gmail.com"}],"projects":[{"id":"1","title":"Project React","description":"Design & Development","imageSrc":"/img/logos/react.jpg","url":"https://mongouserblogsstilosmenuvar.onrender.com/"},{"id":"2","title":"Project Angular","description":"Web Development","imageSrc":"/img/logos/angular.jpg","url":"https://proyecto-final-angular-42db4.web.app/login"},{"id":"3","title":"Java Development","description":"Programming","imageSrc":"/img/logos/Java.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP"},{"id":"4","title":"Project Spring","description":"Development","imageSrc":"/img/logos/SpringCloud.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/5SpringSecurity"},{"id":"5","title":"Project Spring Cloud Microservices","description":"Development","imageSrc":"/img/logos/SpringCloud.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/5SpringSecurity"},{"id":"6","title":"Project Web JAO","description":"Web Design","imageSrc":"/img/jaoweb.jpg","url":"https://jaoprogramadorweb.onrender.com/j2ee/index.htm"}],"services":[{"id":"1","title":"Server configuration","description":"Configuration of environments, servers and web applications with Java, Angular, React, JQuery, Tomcat, Wildfly, JBoss, Weblogic..."},{"id":"2","title":"Development","description":"Programming with various Java frameworks such as Spring, Spring Cloud, Hibernate, JDBC, EJB, Jquery, Angular, React..."},{"id":"3","title":"Web Design","description":"I build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel."},{"id":"4","title":"Data Base","description":"I work with different relational databases such as Oracle, SQL server, PostgresSql and non-relational databases such as MongoDB"},{"id":"5","title":"Deploy","description":"I have done deployments with different tools such as Firebase, Render, AWS, Jira, Bamboo, AnthillPro and manually"},{"id":"6","title":"Version Controller","description":"I have worked with SVN, Git... among other code version controllers"}],"aboutpara":"👋Hi, I\'m Juan Arana Olalde and I studied computer application development and computer systems administration along with different courses to complete my training.\\n\\n\\n\\n 🛤️Since 2006 I have been participating in different Java and j2ee projects, carrying out fullstack tasks, development, analysis, requirements gathering, estimates, migrations, tests, deployments, incidents, dealing with clients... \\n\\n\\n\\n🎯My goal is to develop my professional career in a project that allows me to grow while contributing my knowledge and experience.\\n\\n\\n\\n ℹ️If you have any questions, do not hesitate to contact me on LinkedIn or email and I will clarify them for you.","aboutparaBloque1":"👋Hi, I\'m Juan Arana Olalde and I studied computer application development and computer systems administration along with different courses to complete my training.","aboutparaBloque2":"🛤️Since 2006 I have been participating in different Java and j2ee projects with differents FRONTS and BDs, carrying out fullstack tasks, development, analysis, requirements gathering, estimates, migrations, tests, deployments, incidents, dealing with clients... ","aboutparaBloque3":"🎯My goal is to develop my professional career in a project that allows me to grow while contributing my knowledge and experience.\\n\\n\\n\\n ℹ️If you have any questions, do not hesitate to contact me on LinkedIn or email and I will clarify them for you.","aboutparaBloque4":"ℹ️If you have any questions, do not hesitate to contact me on LinkedIn or email and I will clarify them for you.","resume":{"tagline":"👋  I\'m a software developer, product designer, and maker.","description":"I have worked in public and private companies participating in Java and J2EE projects. Knowledgeable in React, Angular, JQuery, Javascript and most web frameworks. Carry out the technical design of the system and/or application programs, their testing and fine-tuning, as well as provide training and technical assistance to users and exploitation, participating in the projects according to the current methodology.","formations":[{"id":"4","dates":"26/09/2024","center":"Universidad de Helsinki","description":"FullStackOpen","content":"ReactJS, API REST, NodeJS, Express, GraphQL, TypeScript, React Native, CICD, Contenedores, Docker"},{"id":"5","dates":"17/06/2024","center":"Coursera","description":"Amazon Web Services","content":"Introducción, MFA, AWS CLI, EC, RDS, S3, Lambdas Function"},{"id":"6","dates":"01/05/2024","center":"Campus Open Bootcamp","description":"Angular","content":"Instalación, Angular CLI, Componentes, Directivas, Módulos, Servicios, Routing, Formularios, Pipes, Angular Material, Animaciones, Estrategias de carga, Workspace, RxJS, PWA, Firebase. Proyecto Final"},{"id":"7","dates":"10/01/2024","center":"Campus Open Bootcamp","description":"Spring Framework","content":"Spring Data, Beans, MVC, Security, JWT, OAuth, Swagger, Maven, REST, Postman, Lambda, JUnit, Postgresql, MongoDB"},{"id":"8","dates":"01/03/2024","center":"Digital Lab Academy","description":"Spring Cloud Microservicios","content":"Servicios Rest, JPA, Api Rest, Config, Eureka Server, Feign, Hystrix, Gateway, Actuator, Lombok, Gradle"},{"id":"9","dates":"01/04/2023","center":"Campus Open Bootcamp","description":"Git","content":"16h"},{"id":"10","dates":"01/02/2023","center":"Campus Open Bootcamp","description":"React","content":"30h. Proyecto Final"},{"id":"11","dates":"25/10/2018","center":"PLATEA - Tecnalia","description":"UDA (Desarrollador)","content":"Versión 2.1"},{"id":"12","dates":"11/06/2018","center":"Formación Derio","description":"Desarrollo de Aplicaciones WEB SPA","content":"Angular 2, TypeScript, Web API"},{"id":"13","dates":"16/05/2016","center":"Formación Bilbao","description":"Desarrollo de Aplicaciones con Spring e Hibernate","content":"POA, IoC, ORM, JPA, DAOs, Transacciones con Spring"},{"id":"14","dates":"01/12/2015","center":"Campus Bilbao","description":"Alfresco","content":"Iniciación a la configuración, instalación y desarrollo en Alfresco"},{"id":"15","dates":"24/05/2013","center":"Consultec, Bilbao","description":"HTML5 para dispositivos móviles","content":"jQuery Mobile, HTML, CSS, AJAX, Android, Servicios RestFull"},{"id":"16","dates":"12/11/2012","center":"Bilbomática, Bilbao","description":"UDA Framework","content":"JQuery, Spring, Oracle"},{"id":"17","dates":"12/05/2012","center":"Consultec, Bilbao","description":"Programación para IOS y Android","content":"Iniciación a la programación para dispositivos Android e iOS"},{"id":"18","dates":"12/04/2012","center":"Consultec, Bilbao","description":"JQuery y CSS Avanzado","content":"Manejo y uso de librerías JQuery junto con CSS"},{"id":"19","dates":"15/09/2010","center":"Centro Ibex, Bilbao","description":"Java-J2EE","content":"Java, Struts, JQuery, AJAX, JavaScript, XML, XHTML, CSS, MySQL"},{"id":"20","dates":"24/03/2010 - 07/10/2010","center":"Centro Campus, Indautxu","description":"Técnico Seguridad en Redes (CCNA Cisco)","content":"Redes Inalámbricas, Administración de Redes GNU/Linux"},{"id":"21","dates":"01/07/2002 - 10/09/2002","center":"Centro Informática Meatze, Barakaldo","description":"Análisis y Diseño de Aplicaciones Informáticas","content":"Visual Basic, M. Access, HTML, JavaScript"},{"id":"22","dates":"08/04/2002 - 28/06/2002","center":"Centro Informática Meatze, Barakaldo","description":"Programador de Bases de Datos Relacionales","content":"Oracle, M. Access, SQL Server, Herramientas CASE, SQL PL/SQL, Transact-SQL"}],"certifications":[{"id":"2","dates":"25/10/2018","type":"PLATEA - Tecnalia","description":"UDA (Desarrollador)","content":"Versión 2.1"},{"id":"3","dates":"26/09/2024","type":"Universidad de Helsinki","description":"FullStackOpen","content":"ReactJS, API REST, NodeJS, Express, GraphQL, TypeScript, React Native, CICD, Contenedores, Docker"},{"id":"4","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en TypeScript","content":"TypeScript avanzado aplicado a desarrollo web"},{"id":"5","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en React Native","content":"Desarrollo de aplicaciones móviles con React Native"},{"id":"6","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en Bases de Datos Relacionales y PLSQL","content":"Modelado y gestión de bases de datos con PLSQL"},{"id":"7","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en API GraphQL","content":"Diseño y consumo de API GraphQL en aplicaciones modernas"},{"id":"8","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en Contenedores y Docker","content":"Uso y administración de contenedores con Docker y Kubernetes"}],"experiences":[{"id":"3","dates":"June 2023 - October 2023","type":"Full Time","position":"Analista Funcional","bullets":"Java, EJB session, Hibernate HQL, IBM WebSphere, Kibana, TFS"},{"id":"4","dates":"October 2022 - May 2023","type":"Full Time","position":"Analista Funcional","bullets":"Java-J2EE, JDK 1.8, UDA, Spring MVC, Spring JDBC, JPA 2.0, JQuery, AJAX, JDOM, HTML, CSS, JAXB, DAO, WebLogic 11, Oracle 12, SQL Developer, AntHillPRO, hdiv, SVN, Toolkit"},{"id":"5","dates":"May 2019 - October 2022","type":"Full Time","position":"Analista Programador","bullets":"Java – J2EE, JDK 1.8, Microservices, Spring, Servicios Web Rest, SOAP, JSON, JSP, JS, JQuery, JDBC, POI, FOP, SQL, Oracle, WildFly-10, JBoss 4"},{"id":"6","dates":"October 2018 - February 2019","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.8, BIDE, ATOM, PrimeFaces, HTML, XHTML, CSS, ANT, JBoss EAP 6.4, SQL Server, PL-SQL, JIRA, Sonar"},{"id":"7","dates":"December 2017 - October 2018","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.8, Microservices, UDA, Spring Beans, Spring Service, Spring MVC, Spring JDBC, JPA 2.0, JQuery, AJAX, JDOM, HTML, CSS, JAXB, EJB 3.0, DAO, ANT, WebLogic 11, Apache, Oracle, SQL Developer, AntHillPRO"},{"id":"8","dates":"May 2017 - December 2017","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.7, Spring Batch, Maven, JUnit, APX, Mongo, Bamboo"},{"id":"9","dates":"July 2015 - February 2017","type":"Full Time","position":"Analista Programador","bullets":"H2US, H2AD (ASP y VB.NET), Java-J2EE, JDK 1.7, Atom v 1.4, Red Hat JBoss Developer Studio 8 IDE, JBoss EAP 6.4, SQuirrel SQL Client v3.5.3, JSP, Jira, JQuery, AJAX, JSON, ANT, Tortoise, DB2, Transact-SQL y SQL Server"},{"id":"10","dates":"July 2014 - May 2015","type":"Full Time","position":"Analista Programador","bullets":"Java-J2EE, JBoss 4, Hibernate, JPA (HQL), XSL, Oracle 11, SQL Developer, Ant, JDK 1.5, SVN, Microservices, Servicios WEB (Axis2), iReport-1.3.1, Struts2, JavaScript, HTML, Pentaho 3.8.3, Maven2"},{"id":"11","dates":"October 2010 - February 2013","type":"Full Time","position":"Analista Programador","bullets":"J2EE, Java, EJB 2.1 (Session-Entity-Message), Struts1.3, Vaadin, JSP, JDBC, XDoclet, JUnit, Hudson, Maven, WebLogic 8 y 11, Apache, HTML, XML, SQL, SQuirrel, FOP, Framework Oinarri, WebSphere Portal v6.1 Server, WebSphere Application Server v6.1, Oracle 10, Linux, Gestor de Contenidos, Interwoven, patrones de diseño (Business Delegate, Facade, MVC)"},{"id":"12","dates":"December 2009 - February 2010","type":"Full Time","position":"Analista Programador","bullets":"JBoss 5 y Tomcat 6 en J2EE, Struts Framework y EJB 3.0, Java, JPA, Persistencia, Transaccionalidad, JSP, XML, HTML, JavaScript, JQuery, SVN, Oracle, SQL, IDE Eclipse Ganymede, Linux-Ubuntu, Hudson, Maven, Firma Digital, Izenpe, XADES-CADES, Personas a cargo: 3"},{"id":"13","dates":"January 2008 - March 2009","type":"Full Time","position":"Analista Programador","bullets":"WebSphere, J2EE, Struts Framework, Java, EJB, RMI, JDBC, JSP, XML, HTML, JavaScript, PL/SQL, UML, Hidranet, Corporate Modeler, WorkFlows, CVS"},{"id":"14","dates":"March 2007 - December 2007","type":"Full Time","position":"Programador Informático","bullets":"J2EE, Struts Framework, Servlets, Java, JDBC, DAOs, JSP, XML, XSL:FO, HTML, JavaScript, TOAD, PL/SQL, UML, Subversion, Tomcat"},{"id":"15","dates":"February 2006 - September 2006","type":"Full Time","position":"Programador Informático","bullets":"WebSphere, J2EE, Atom Framework, Java, XML, HTML, JavaScript, SQL, WebSphere, CVS"},{"id":"16","dates":"March 2005 - June 2005","type":"Part Time","position":"Técnico Informático y Diseñador Web","bullets":"Integral de Medios, Desarrollo de aplicaciones informáticas y portales como: www.afm.es, www.hetel.org, www.proschools.biz, www.ifprl.com"},{"id":"17","dates":"March 2003 - June 2003","type":"Part Time","position":"Técnico Informático y Diseñador Web","bullets":"ArtiCad, Deusto, Desarrollo del portal web de la empresa: www.articad.com, Configuración e instalación de redes, administración, gestión y mantenimiento de la red"},{"id":"18","dates":"May 2004","type":"Part Time","position":"Monitor de Diseño Gráfico y Web","bullets":"Colegio Ruperto Medina, Portugalete, Talleres de diseño gráfico y web durante la XVII Semana Cultural"}],"education":{"universityName":"Higher degree training cycle: Computer systems administration and Development of computer applications","universityDate":"2003 - 2005 and 2001 – 2003","universityPara":"Throughout my career I have been complementing my training with different Java-J2EE programming courses, relational databases, local area networks, Operating Systems and Application Servers, web design, Frameworks Fonts, etc..."},"languages":["Javascript","HTML5","CSS","Java","PL/SQL"],"frameworks":["React","Typescript","NodeJs","Angular","JQuery","Spring","Hibernate"],"others":["AWS","Render","Firebase","MongoDB","Oracle","SQL Server","PostgresSQL"]}}');

/***/ }),

/***/ 317:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"home":{"welcome":"¡Bienvenido a mi portafolio!","about":"Sobre mí","projects":"Proyectos","contact":"Contacto"},"headers":{"work":"Trabajo","about":"Sobre mí","blog":"Blog","frameworks":"Frameworks","resume":"Currículum","contact":"Contacto","language":"Idioma"},"init":{"work":"Proyectos.","services":"Servicios.","about":"Sobre mí"},"footer":{"contact":"Contacto.","workTogether":"TRABAJEMOS JUNTOS","scheduleButton":"Programa una llamada"},"resume":{"formations":"Formaciones","education":"Educación","experience":"Experiencia","skills":"Habilidades","frameworks":"Frameworks","others":"Otros","languages":"Idiomas"}}');

/***/ }),

/***/ 5004:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"JAO","headerTaglineOne":"Hola 👋","headerTaglineTwo":"Soy Juan Arana Olalde","headerTaglineThree":"diseñador y desarrollador fullstack","headerTaglineFour":"ubicado en Bizkaia, España.","headerTaglineFive":"En la sección Framework encontrarás un conjunto de ejercicios de diferentes frameworks como React, Angular, Spring Boot, Spring Cloud, Mongo...","showCursor":true,"showBlog":true,"darkMode":true,"showResume":true,"socials":[{"id":"1","title":"Github","link":"https://github.com/jaoprogramador"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/juan-arana-olalde-8b77a266/"},{"id":"3","title":"Twitter","link":"https://twitter.com/jaoprogramador"},{"id":"4","title":"Blog","link":"https://blog.jaoprogramador.com/"},{"id":"5","title":"Email","link":"mailto:jaoprogramador@gmail.com"}],"projects":[{"id":"1","title":"Project React","description":"Design & Development","imageSrc":"/img/logos/react.jpg","url":"https://mongouserblogsstilosmenuvar.onrender.com/"},{"id":"2","title":"Project Angular","description":"Web Development","imageSrc":"/img/logos/angular.jpg","url":"https://proyecto-final-angular-42db4.web.app/login"},{"id":"3","title":"Java Development","description":"Programming","imageSrc":"/img/logos/Java.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP"},{"id":"4","title":"Project Spring","description":"Development","imageSrc":"/img/logos/SpringCloud.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/5SpringSecurity"},{"id":"5","title":"Project Spring Cloud Microservices","description":"Development","imageSrc":"/img/logos/SpringCloud.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/5SpringSecurity"},{"id":"6","title":"Project Web JAO","description":"Web Design","imageSrc":"/img/jaoweb.jpg","url":"https://jaoprogramadorweb.onrender.com/j2ee/index.htm"}],"services":[{"id":"1","title":"Configuración de servidores","description":"Configuración de entornos, servidores y aplicaciones web con Java, Angular, React, JQuery, Tomcat, Wildfly, JBoss, Weblogic..."},{"id":"2","title":"Desarrollo","description":"Programación con varios frameworks de Java como Spring, Spring Cloud, Hibernate, JDBC, EJB, JQuery, Angular, React..."},{"id":"3","title":"Diseño web","description":"Construyo y optimizo tu presencia en línea. Un sitio web es la puerta de entrada digital a tu negocio y un poderoso canal de ingresos."},{"id":"4","title":"Base de datos","description":"Trabajo con diferentes bases de datos relacionales como Oracle, SQL Server, PostgreSQL y bases de datos no relacionales como MongoDB."},{"id":"5","title":"Despliegue","description":"He realizado despliegues con diferentes herramientas como Firebase, Render, AWS, Jira, Bamboo, AnthillPro y manualmente."},{"id":"6","title":"Control de versiones","description":"He trabajado con SVN, Git... entre otros sistemas de control de versiones de código."}],"aboutpara":"👋 Hola, soy Juan Arana Olalde y estudié desarrollo de aplicaciones informáticas y administración de sistemas informáticos, además de realizar diferentes cursos para completar mi formación.\\n\\n🛤️ Desde 2006 he participado en diferentes proyectos de Java y J2EE, realizando tareas fullstack, desarrollo, análisis, recopilación de requisitos, estimaciones, migraciones, pruebas, despliegues, resolución de incidencias y trato con clientes...\\n\\n🎯 Mi objetivo es desarrollar mi carrera profesional en un proyecto que me permita crecer mientras aporto mis conocimientos y experiencia.\\n\\nℹ️ Si tienes alguna pregunta, no dudes en contactarme por LinkedIn o correo electrónico y te la aclararé.","aboutparaBloque1":"👋 Hola, soy Juan Arana Olalde y estudié desarrollo de aplicaciones informáticas y administración de sistemas informáticos, además de realizar diferentes cursos para completar mi formación.","aboutparaBloque2":"🛤️ Desde 2006 he participado en diferentes proyectos de Java-J2EE con distintos FRONTS y BDs, realizando tareas fullstack, desarrollo, análisis, recopilación de requisitos, estimaciones, migraciones, pruebas, despliegues, resolución de incidencias y trato con clientes...","aboutparaBloque3":"🎯 Mi objetivo es desarrollar mi carrera profesional en un proyecto que me permita crecer mientras aporto mis conocimientos y experiencia.\\n\\n","aboutparaBloque4":"ℹ️ Si tienes alguna pregunta, no dudes en contactarme por LinkedIn o correo electrónico y te la aclararé.","resume":{"tagline":"👋 Soy desarrollador de software, diseñador y creador WEB.","description":"He trabajado en empresas públicas y privadas participando en proyectos de Java y J2EE. Conocedor de React, Angular, JQuery, JavaScript y la mayoría de frameworks web. Me encargo del diseño técnico del sistema y/o programas de aplicación, sus pruebas y puesta a punto, así como de proporcionar formación y asistencia técnica a usuarios y explotación, participando en los proyectos según la metodología vigente.","formations":[{"id":"4","dates":"26/09/2024","center":"Universidad de Helsinki","description":"FullStackOpen","content":"ReactJS, API REST, NodeJS, Express, GraphQL, TypeScript, React Native, CICD, Contenedores, Docker"},{"id":"5","dates":"17/06/2024","center":"Coursera","description":"Amazon Web Services","content":"Introducción, MFA, AWS CLI, EC, RDS, S3, Lambdas Function"},{"id":"6","dates":"01/05/2024","center":"Campus Open Bootcamp","description":"Angular","content":"Instalación, Angular CLI, Componentes, Directivas, Módulos, Servicios, Routing, Formularios, Pipes, Angular Material, Animaciones, Estrategias de carga, Workspace, RxJS, PWA, Firebase. Proyecto Final"},{"id":"7","dates":"10/01/2024","center":"Campus Open Bootcamp","description":"Spring Framework","content":"Spring Data, Beans, MVC, Security, JWT, OAuth, Swagger, Maven, REST, Postman, Lambda, JUnit, Postgresql, MongoDB"},{"id":"8","dates":"01/03/2024","center":"Digital Lab Academy","description":"Spring Cloud Microservicios","content":"Servicios Rest, JPA, Api Rest, Config, Eureka Server, Feign, Hystrix, Gateway, Actuator, Lombok, Gradle"},{"id":"9","dates":"01/04/2023","center":"Campus Open Bootcamp","description":"Git","content":"16h"},{"id":"10","dates":"01/02/2023","center":"Campus Open Bootcamp","description":"React","content":"30h. Proyecto Final"},{"id":"11","dates":"25/10/2018","center":"PLATEA - Tecnalia","description":"UDA (Desarrollador)","content":"Versión 2.1"},{"id":"12","dates":"11/06/2018","center":"Formación Derio","description":"Desarrollo de Aplicaciones WEB SPA","content":"Angular 2, TypeScript, Web API"},{"id":"13","dates":"16/05/2016","center":"Formación Bilbao","description":"Desarrollo de Aplicaciones con Spring e Hibernate","content":"POA, IoC, ORM, JPA, DAOs, Transacciones con Spring"},{"id":"14","dates":"01/12/2015","center":"Campus Bilbao","description":"Alfresco","content":"Iniciación a la configuración, instalación y desarrollo en Alfresco"},{"id":"15","dates":"24/05/2013","center":"Consultec, Bilbao","description":"HTML5 para dispositivos móviles","content":"jQuery Mobile, HTML, CSS, AJAX, Android, Servicios RestFull"},{"id":"16","dates":"12/11/2012","center":"Bilbomática, Bilbao","description":"UDA Framework","content":"JQuery, Spring, Oracle"},{"id":"17","dates":"12/05/2012","center":"Consultec, Bilbao","description":"Programación para IOS y Android","content":"Iniciación a la programación para dispositivos Android e iOS"},{"id":"18","dates":"12/04/2012","center":"Consultec, Bilbao","description":"JQuery y CSS Avanzado","content":"Manejo y uso de librerías JQuery junto con CSS"},{"id":"19","dates":"15/09/2010","center":"Centro Ibex, Bilbao","description":"Java-J2EE","content":"Java, Struts, JQuery, AJAX, JavaScript, XML, XHTML, CSS, MySQL"},{"id":"20","dates":"24/03/2010 - 07/10/2010","center":"Centro Campus, Indautxu","description":"Técnico Seguridad en Redes (CCNA Cisco)","content":"Redes Inalámbricas, Administración de Redes GNU/Linux"},{"id":"21","dates":"01/07/2002 - 10/09/2002","center":"Centro Informática Meatze, Barakaldo","description":"Análisis y Diseño de Aplicaciones Informáticas","content":"Visual Basic, M. Access, HTML, JavaScript"},{"id":"22","dates":"08/04/2002 - 28/06/2002","center":"Centro Informática Meatze, Barakaldo","description":"Programador de Bases de Datos Relacionales","content":"Oracle, M. Access, SQL Server, Herramientas CASE, SQL PL/SQL, Transact-SQL"}],"certifications":[{"id":"2","dates":"25/10/2018","type":"PLATEA - Tecnalia","description":"UDA (Desarrollador)","content":"Versión 2.1"},{"id":"3","dates":"26/09/2024","type":"Universidad de Helsinki","description":"FullStackOpen","content":"ReactJS, API REST, NodeJS, Express, GraphQL, TypeScript, React Native, CICD, Contenedores, Docker"},{"id":"4","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en TypeScript","content":"TypeScript avanzado aplicado a desarrollo web"},{"id":"5","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en React Native","content":"Desarrollo de aplicaciones móviles con React Native"},{"id":"6","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en Bases de Datos Relacionales y PLSQL","content":"Modelado y gestión de bases de datos con PLSQL"},{"id":"7","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en API GraphQL","content":"Diseño y consumo de API GraphQL en aplicaciones modernas"},{"id":"8","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en Contenedores y Docker","content":"Uso y administración de contenedores con Docker y Kubernetes"}],"experiences":[{"id":"3","dates":"June 2023 - October 2023","type":"Full Time","position":"Analista Funcional","bullets":"Java, EJB session, Hibernate HQL, IBM WebSphere, Kibana, TFS"},{"id":"4","dates":"October 2022 - May 2023","type":"Full Time","position":"Analista Funcional","bullets":"Java-J2EE, JDK 1.8, UDA, Spring MVC, Spring JDBC, JPA 2.0, JQuery, AJAX, JDOM, HTML, CSS, JAXB, DAO, WebLogic 11, Oracle 12, SQL Developer, AntHillPRO, hdiv, SVN, Toolkit"},{"id":"5","dates":"May 2019 - October 2022","type":"Full Time","position":"Analista Programador","bullets":"Java – J2EE, JDK 1.8, Microservices, Spring, Servicios Web Rest, SOAP, JSON, JSP, JS, JQuery, JDBC, POI, FOP, SQL, Oracle, WildFly-10, JBoss 4"},{"id":"6","dates":"October 2018 - February 2019","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.8, BIDE, ATOM, PrimeFaces, HTML, XHTML, CSS, ANT, JBoss EAP 6.4, SQL Server, PL-SQL, JIRA, Sonar"},{"id":"7","dates":"December 2017 - October 2018","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.8, Microservices, UDA, Spring Beans, Spring Service, Spring MVC, Spring JDBC, JPA 2.0, JQuery, AJAX, JDOM, HTML, CSS, JAXB, EJB 3.0, DAO, ANT, WebLogic 11, Apache, Oracle, SQL Developer, AntHillPRO"},{"id":"8","dates":"May 2017 - December 2017","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.7, Spring Batch, Maven, JUnit, APX, Mongo, Bamboo"},{"id":"9","dates":"July 2015 - February 2017","type":"Full Time","position":"Analista Programador","bullets":"H2US, H2AD (ASP y VB.NET), Java-J2EE, JDK 1.7, Atom v 1.4, Red Hat JBoss Developer Studio 8 IDE, JBoss EAP 6.4, SQuirrel SQL Client v3.5.3, JSP, Jira, JQuery, AJAX, JSON, ANT, Tortoise, DB2, Transact-SQL y SQL Server"},{"id":"10","dates":"July 2014 - May 2015","type":"Full Time","position":"Analista Programador","bullets":"Java-J2EE, JBoss 4, Hibernate, JPA (HQL), XSL, Oracle 11, SQL Developer, Ant, JDK 1.5, SVN, Microservices, Servicios WEB (Axis2), iReport-1.3.1, Struts2, JavaScript, HTML, Pentaho 3.8.3, Maven2"},{"id":"11","dates":"October 2010 - February 2013","type":"Full Time","position":"Analista Programador","bullets":"J2EE, Java, EJB 2.1 (Session-Entity-Message), Struts1.3, Vaadin, JSP, JDBC, XDoclet, JUnit, Hudson, Maven, WebLogic 8 y 11, Apache, HTML, XML, SQL, SQuirrel, FOP, Framework Oinarri, WebSphere Portal v6.1 Server, WebSphere Application Server v6.1, Oracle 10, Linux, Gestor de Contenidos, Interwoven, patrones de diseño (Business Delegate, Facade, MVC)"},{"id":"12","dates":"December 2009 - February 2010","type":"Full Time","position":"Analista Programador","bullets":"JBoss 5 y Tomcat 6 en J2EE, Struts Framework y EJB 3.0, Java, JPA, Persistencia, Transaccionalidad, JSP, XML, HTML, JavaScript, JQuery, SVN, Oracle, SQL, IDE Eclipse Ganymede, Linux-Ubuntu, Hudson, Maven, Firma Digital, Izenpe, XADES-CADES, Personas a cargo: 3"},{"id":"13","dates":"January 2008 - March 2009","type":"Full Time","position":"Analista Programador","bullets":"WebSphere, J2EE, Struts Framework, Java, EJB, RMI, JDBC, JSP, XML, HTML, JavaScript, PL/SQL, UML, Hidranet, Corporate Modeler, WorkFlows, CVS"},{"id":"14","dates":"March 2007 - December 2007","type":"Full Time","position":"Programador Informático","bullets":"J2EE, Struts Framework, Servlets, Java, JDBC, DAOs, JSP, XML, XSL:FO, HTML, JavaScript, TOAD, PL/SQL, UML, Subversion, Tomcat"},{"id":"15","dates":"February 2006 - September 2006","type":"Full Time","position":"Programador Informático","bullets":"WebSphere, J2EE, Atom Framework, Java, XML, HTML, JavaScript, SQL, WebSphere, CVS"},{"id":"16","dates":"March 2005 - June 2005","type":"Part Time","position":"Técnico Informático y Diseñador Web","bullets":"Integral de Medios, Desarrollo de aplicaciones informáticas y portales como: www.afm.es, www.hetel.org, www.proschools.biz, www.ifprl.com"},{"id":"17","dates":"March 2003 - June 2003","type":"Part Time","position":"Técnico Informático y Diseñador Web","bullets":"ArtiCad, Deusto, Desarrollo del portal web de la empresa: www.articad.com, Configuración e instalación de redes, administración, gestión y mantenimiento de la red"},{"id":"18","dates":"May 2004","type":"Part Time","position":"Monitor de Diseño Gráfico y Web","bullets":"Colegio Ruperto Medina, Portugalete, Talleres de diseño gráfico y web durante la XVII Semana Cultural"}],"education":{"universityName":"Ciclo formativo de grado superior: Administración de sistemas informáticos y Desarrollo de aplicaciones informáticas","universityDate":"2003 - 2005 y 2001 - 2003","universityPara":"A lo largo de mi carrera he complementado mi formación con diferentes cursos de programación en Java-J2EE, bases de datos relacionales, redes de área local, sistemas operativos y servidores de aplicaciones, diseño web, frameworks, tipografías, etc..."},"languages":["Javascript","HTML5","CSS","Java","PL/SQL"],"frameworks":["React","Typescript","NodeJs","Angular","JQuery","Spring","Hibernate"],"others":["AWS","Render","Firebase","MongoDB","Oracle","SQL Server","PostgresSQL"]}}');

/***/ }),

/***/ 1834:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"home":{"welcome":"Ongi etorri nire portfoliora!","about":"Niri buruz","projects":"Proiektuak","contact":"Harremana"},"headers":{"work":"Lana","about":"Niri buruz","blog":"Bloga","frameworks":"Esparruak","resume":"Curriculuma","contact":"Harremana","language":"Hizkuntza"},"init":{"work":"Lanak.","services":"Zerbitzuak.","about":"Niri buruz."},"footer":{"contact":"Harremana.","workTogether":"ELKARREKIN LAN EGIN DEZAGUN","scheduleButton":"Dei bat programatu"},"resume":{"formations":"Formazioak","education":"Hezkuntza","experience":"Esperientzia","skills":"Trebetasunak","frameworks":"Esparruak","others":"Beste batzuk","languages":"Hizkuntzak"}}');

/***/ }),

/***/ 3159:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"JAO","headerTaglineOne":"Kaixo 👋","headerTaglineTwo":"Juan Arana Olalde naiz","headerTaglineThree":"diseinatzailea eta fullstack garatzailea","headerTaglineFour":"Bizkaian, Espainian kokatuta.","headerTaglineFive":"Framework atalean hainbat framework-en ariketak aurkituko dituzu, hala nola React, Angular, Spring Boot, Spring Cloud, Mongo...","showCursor":true,"showBlog":true,"darkMode":true,"showResume":true,"socials":[{"id":"1","title":"Github","link":"https://github.com/jaoprogramador"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/juan-arana-olalde-8b77a266/"},{"id":"3","title":"Twitter","link":"https://twitter.com/jaoprogramador"},{"id":"4","title":"Blog","link":"https://blog.jaoprogramador.com/"},{"id":"5","title":"Email","link":"mailto:jaoprogramador@gmail.com"}],"projects":[{"id":"1","title":"Project React","description":"Design & Development","imageSrc":"/img/logos/react.jpg","url":"https://mongouserblogsstilosmenuvar.onrender.com/"},{"id":"2","title":"Project Angular","description":"Web Development","imageSrc":"/img/logos/angular.jpg","url":"https://proyecto-final-angular-42db4.web.app/login"},{"id":"3","title":"Java Development","description":"Programming","imageSrc":"/img/logos/Java.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP"},{"id":"4","title":"Project Spring","description":"Development","imageSrc":"/img/logos/SpringCloud.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/5SpringSecurity"},{"id":"5","title":"Project Spring Cloud Microservices","description":"Development","imageSrc":"/img/logos/SpringCloud.jpg","url":"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/5SpringSecurity"},{"id":"6","title":"Project Web JAO","description":"Web Design","imageSrc":"/img/jaoweb.jpg","url":"https://jaoprogramadorweb.onrender.com/j2ee/index.htm"}],"services":[{"id":"1","title":"Zerbitzarien konfigurazioa","description":"Inguruneak, zerbitzariak eta web-aplikazioak konfiguratzea Java, Angular, React, JQuery, Tomcat, Wildfly, JBoss, Weblogic erabiliz..."},{"id":"2","title":"Garatzea","description":"Java framework ezberdinekin programatzea, hala nola Spring, Spring Cloud, Hibernate, JDBC, EJB, JQuery, Angular, React..."},{"id":"3","title":"Web Diseinua","description":"Zure presentzia digitalean eraikitzen eta optimizatzen dut. Webgunea zure negoziorako sarrera digitala eta diru-sarrera kanal indartsua da."},{"id":"4","title":"Datu-basea","description":"Datu-base erlazionalekin lan egiten dut, hala nola Oracle, SQL Server, PostgreSQL eta datu-base ez-erlazionalekin, hala nola MongoDB."},{"id":"5","title":"Inplementazioa","description":"Inplementazioak egin ditut hainbat tresna erabiliz, hala nola Firebase, Render, AWS, Jira, Bamboo, AnthillPro eta eskuz."},{"id":"6","title":"Bertsio kontrolatzailea","description":"SVN, Git... eta beste hainbat kodearen bertsio-kontrolatzaileekin lan egin dut."}],"aboutpara":"👋 Kaixo, Juan Arana Olalde naiz eta aplikazio informatikoen garapena eta sistema informatikoen administrazioa ikasi ditut, nire prestakuntza osatzeko hainbat ikastaro eginez.\\n\\n🛤️ 2006tik Java eta J2EE proiektu ezberdinetan parte hartu dut, fullstack zereginak, garapena, analisia, eskakizunen bilketa, estimazioak, migrazioak, probak, inplementazioak, gorabeherak konpontzea eta bezeroekin harremanak kudeatuz...\\n\\n🎯 Nire helburua nire ibilbide profesionala garatzea da, nire ezagutzak eta esperientzia ekarriz hazteko aukera emango didan proiektu batean.\\n\\nℹ️ Zalantzarik baduzu, jar zaitez nirekin harremanetan LinkedIn edo posta elektroniko bidez eta argituko dizut.","aboutparaBloque1":"👋 Kaixo, Juan Arana Olalde naiz eta aplikazio informatikoen garapena eta sistema informatikoen administrazioa ikasi ditut, nire prestakuntza osatzeko hainbat ikastaro eginez.","aboutparaBloque2":"🛤️ 2006tik Java eta J2EE proiektu ezberdinetan parte hartu dut, fullstack zereginak, garapena, analisia, eskakizunen bilketa, estimazioak, migrazioak, probak, inplementazioak, gorabeherak konpontzea eta bezeroekin harremanak kudeatuz...","aboutparaBloque3":"🎯 Nire helburua nire ibilbide profesionala garatzea da, nire ezagutzak eta esperientzia ekarriz hazteko aukera emango didan proiektu batean.\\n\\n","aboutparaBloque4":"ℹ️ Zalantzarik baduzu, jar zaitez nirekin harremanetan LinkedIn edo posta elektroniko bidez eta argituko dizut.","resume":{"tagline":"👋 Software garatzailea, produktu diseinatzailea eta sortzailea naiz.","description":"Enpresa publiko eta pribatuetan lan egin dut, Java eta J2EE proiektuetan parte hartuz. React, Angular, JQuery, JavaScript eta web framework gehienak ezagutzen ditut. Sistemaren eta/edo aplikazio-programen diseinu teknikoa, haien probak eta abian jartzea egiten ditut, baita erabiltzaileei eta ustiapenari prestakuntza eta laguntza teknikoa ematea ere, metodologia egokian parte hartuz.","formations":[{"id":"4","dates":"26/09/2024","center":"Universidad de Helsinki","description":"FullStackOpen","content":"ReactJS, API REST, NodeJS, Express, GraphQL, TypeScript, React Native, CICD, Contenedores, Docker"},{"id":"5","dates":"17/06/2024","center":"Coursera","description":"Amazon Web Services","content":"Introducción, MFA, AWS CLI, EC, RDS, S3, Lambdas Function"},{"id":"6","dates":"01/05/2024","center":"Campus Open Bootcamp","description":"Angular","content":"Instalación, Angular CLI, Componentes, Directivas, Módulos, Servicios, Routing, Formularios, Pipes, Angular Material, Animaciones, Estrategias de carga, Workspace, RxJS, PWA, Firebase. Proyecto Final"},{"id":"7","dates":"10/01/2024","center":"Campus Open Bootcamp","description":"Spring Framework","content":"Spring Data, Beans, MVC, Security, JWT, OAuth, Swagger, Maven, REST, Postman, Lambda, JUnit, Postgresql, MongoDB"},{"id":"8","dates":"01/03/2024","center":"Digital Lab Academy","description":"Spring Cloud Microservicios","content":"Servicios Rest, JPA, Api Rest, Config, Eureka Server, Feign, Hystrix, Gateway, Actuator, Lombok, Gradle"},{"id":"9","dates":"01/04/2023","center":"Campus Open Bootcamp","description":"Git","content":"16h"},{"id":"10","dates":"01/02/2023","center":"Campus Open Bootcamp","description":"React","content":"30h. Proyecto Final"},{"id":"11","dates":"25/10/2018","center":"PLATEA - Tecnalia","description":"UDA (Desarrollador)","content":"Versión 2.1"},{"id":"12","dates":"11/06/2018","center":"Formación Derio","description":"Desarrollo de Aplicaciones WEB SPA","content":"Angular 2, TypeScript, Web API"},{"id":"13","dates":"16/05/2016","center":"Formación Bilbao","description":"Desarrollo de Aplicaciones con Spring e Hibernate","content":"POA, IoC, ORM, JPA, DAOs, Transacciones con Spring"},{"id":"14","dates":"01/12/2015","center":"Campus Bilbao","description":"Alfresco","content":"Iniciación a la configuración, instalación y desarrollo en Alfresco"},{"id":"15","dates":"24/05/2013","center":"Consultec, Bilbao","description":"HTML5 para dispositivos móviles","content":"jQuery Mobile, HTML, CSS, AJAX, Android, Servicios RestFull"},{"id":"16","dates":"12/11/2012","center":"Bilbomática, Bilbao","description":"UDA Framework","content":"JQuery, Spring, Oracle"},{"id":"17","dates":"12/05/2012","center":"Consultec, Bilbao","description":"Programación para IOS y Android","content":"Iniciación a la programación para dispositivos Android e iOS"},{"id":"18","dates":"12/04/2012","center":"Consultec, Bilbao","description":"JQuery y CSS Avanzado","content":"Manejo y uso de librerías JQuery junto con CSS"},{"id":"19","dates":"15/09/2010","center":"Centro Ibex, Bilbao","description":"Java-J2EE","content":"Java, Struts, JQuery, AJAX, JavaScript, XML, XHTML, CSS, MySQL"},{"id":"20","dates":"24/03/2010 - 07/10/2010","center":"Centro Campus, Indautxu","description":"Técnico Seguridad en Redes (CCNA Cisco)","content":"Redes Inalámbricas, Administración de Redes GNU/Linux"},{"id":"21","dates":"01/07/2002 - 10/09/2002","center":"Centro Informática Meatze, Barakaldo","description":"Análisis y Diseño de Aplicaciones Informáticas","content":"Visual Basic, M. Access, HTML, JavaScript"},{"id":"22","dates":"08/04/2002 - 28/06/2002","center":"Centro Informática Meatze, Barakaldo","description":"Programador de Bases de Datos Relacionales","content":"Oracle, M. Access, SQL Server, Herramientas CASE, SQL PL/SQL, Transact-SQL"}],"certifications":[{"id":"2","dates":"25/10/2018","type":"PLATEA - Tecnalia","description":"UDA (Desarrollador)","content":"Versión 2.1"},{"id":"3","dates":"26/09/2024","type":"Universidad de Helsinki","description":"FullStackOpen","content":"ReactJS, API REST, NodeJS, Express, GraphQL, TypeScript, React Native, CICD, Contenedores, Docker"},{"id":"4","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en TypeScript","content":"TypeScript avanzado aplicado a desarrollo web"},{"id":"5","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en React Native","content":"Desarrollo de aplicaciones móviles con React Native"},{"id":"6","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en Bases de Datos Relacionales y PLSQL","content":"Modelado y gestión de bases de datos con PLSQL"},{"id":"7","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en API GraphQL","content":"Diseño y consumo de API GraphQL en aplicaciones modernas"},{"id":"8","dates":"26/09/2024","type":"Universidad de Helsinki","description":"Certificación en Contenedores y Docker","content":"Uso y administración de contenedores con Docker y Kubernetes"}],"experiences":[{"id":"3","dates":"June 2023 - October 2023","type":"Full Time","position":"Analista Funcional","bullets":"Java, EJB session, Hibernate HQL, IBM WebSphere, Kibana, TFS"},{"id":"4","dates":"October 2022 - May 2023","type":"Full Time","position":"Analista Funcional","bullets":"Java-J2EE, JDK 1.8, UDA, Spring MVC, Spring JDBC, JPA 2.0, JQuery, AJAX, JDOM, HTML, CSS, JAXB, DAO, WebLogic 11, Oracle 12, SQL Developer, AntHillPRO, hdiv, SVN, Toolkit"},{"id":"5","dates":"May 2019 - October 2022","type":"Full Time","position":"Analista Programador","bullets":"Java – J2EE, JDK 1.8, Microservices, Spring, Servicios Web Rest, SOAP, JSON, JSP, JS, JQuery, JDBC, POI, FOP, SQL, Oracle, WildFly-10, JBoss 4"},{"id":"6","dates":"October 2018 - February 2019","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.8, BIDE, ATOM, PrimeFaces, HTML, XHTML, CSS, ANT, JBoss EAP 6.4, SQL Server, PL-SQL, JIRA, Sonar"},{"id":"7","dates":"December 2017 - October 2018","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.8, Microservices, UDA, Spring Beans, Spring Service, Spring MVC, Spring JDBC, JPA 2.0, JQuery, AJAX, JDOM, HTML, CSS, JAXB, EJB 3.0, DAO, ANT, WebLogic 11, Apache, Oracle, SQL Developer, AntHillPRO"},{"id":"8","dates":"May 2017 - December 2017","type":"Full Time","position":"Analista","bullets":"Java-J2EE, JDK 1.7, Spring Batch, Maven, JUnit, APX, Mongo, Bamboo"},{"id":"9","dates":"July 2015 - February 2017","type":"Full Time","position":"Analista Programador","bullets":"H2US, H2AD (ASP y VB.NET), Java-J2EE, JDK 1.7, Atom v 1.4, Red Hat JBoss Developer Studio 8 IDE, JBoss EAP 6.4, SQuirrel SQL Client v3.5.3, JSP, Jira, JQuery, AJAX, JSON, ANT, Tortoise, DB2, Transact-SQL y SQL Server"},{"id":"10","dates":"July 2014 - May 2015","type":"Full Time","position":"Analista Programador","bullets":"Java-J2EE, JBoss 4, Hibernate, JPA (HQL), XSL, Oracle 11, SQL Developer, Ant, JDK 1.5, SVN, Microservices, Servicios WEB (Axis2), iReport-1.3.1, Struts2, JavaScript, HTML, Pentaho 3.8.3, Maven2"},{"id":"11","dates":"October 2010 - February 2013","type":"Full Time","position":"Analista Programador","bullets":"J2EE, Java, EJB 2.1 (Session-Entity-Message), Struts1.3, Vaadin, JSP, JDBC, XDoclet, JUnit, Hudson, Maven, WebLogic 8 y 11, Apache, HTML, XML, SQL, SQuirrel, FOP, Framework Oinarri, WebSphere Portal v6.1 Server, WebSphere Application Server v6.1, Oracle 10, Linux, Gestor de Contenidos, Interwoven, patrones de diseño (Business Delegate, Facade, MVC)"},{"id":"12","dates":"December 2009 - February 2010","type":"Full Time","position":"Analista Programador","bullets":"JBoss 5 y Tomcat 6 en J2EE, Struts Framework y EJB 3.0, Java, JPA, Persistencia, Transaccionalidad, JSP, XML, HTML, JavaScript, JQuery, SVN, Oracle, SQL, IDE Eclipse Ganymede, Linux-Ubuntu, Hudson, Maven, Firma Digital, Izenpe, XADES-CADES, Personas a cargo: 3"},{"id":"13","dates":"January 2008 - March 2009","type":"Full Time","position":"Analista Programador","bullets":"WebSphere, J2EE, Struts Framework, Java, EJB, RMI, JDBC, JSP, XML, HTML, JavaScript, PL/SQL, UML, Hidranet, Corporate Modeler, WorkFlows, CVS"},{"id":"14","dates":"March 2007 - December 2007","type":"Full Time","position":"Programador Informático","bullets":"J2EE, Struts Framework, Servlets, Java, JDBC, DAOs, JSP, XML, XSL:FO, HTML, JavaScript, TOAD, PL/SQL, UML, Subversion, Tomcat"},{"id":"15","dates":"February 2006 - September 2006","type":"Full Time","position":"Programador Informático","bullets":"WebSphere, J2EE, Atom Framework, Java, XML, HTML, JavaScript, SQL, WebSphere, CVS"},{"id":"16","dates":"March 2005 - June 2005","type":"Part Time","position":"Técnico Informático y Diseñador Web","bullets":"Integral de Medios, Desarrollo de aplicaciones informáticas y portales como: www.afm.es, www.hetel.org, www.proschools.biz, www.ifprl.com"},{"id":"17","dates":"March 2003 - June 2003","type":"Part Time","position":"Técnico Informático y Diseñador Web","bullets":"ArtiCad, Deusto, Desarrollo del portal web de la empresa: www.articad.com, Configuración e instalación de redes, administración, gestión y mantenimiento de la red"},{"id":"18","dates":"May 2004","type":"Part Time","position":"Monitor de Diseño Gráfico y Web","bullets":"Colegio Ruperto Medina, Portugalete, Talleres de diseño gráfico y web durante la XVII Semana Cultural"}],"education":{"universityName":"Goi-mailako prestakuntza-zikloa: Sistema informatikoen administrazioa eta Aplikazio informatikoen garapena","universityDate":"2003 - 2005 eta 2001 - 2003","universityPara":"Nire ibilbidean zehar nire prestakuntza osatu dut hainbat Java-J2EE programazio ikastaroekin, datu-base erlazionalekin, tokiko sareekin, sistema eragileekin eta aplikazio-zerbitzariekin, web diseinuarekin, frameworkekin, tipografiekin, etab..."},"languages":["Javascript","HTML5","CSS","Java","PL/SQL"],"frameworks":["React","Typescript","NodeJs","Angular","JQuery","Spring","Hibernate"],"others":["AWS","Render","Firebase","MongoDB","Oracle","SQL Server","PostgresSQL"]}}');

/***/ })

};
;