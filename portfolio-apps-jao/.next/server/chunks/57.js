"use strict";
exports.id = 57;
exports.ids = [57];
exports.modules = {

/***/ 4745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ LanguageContext),
/* harmony export */   "i": () => (/* binding */ LanguageProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/* import React, { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import data from "../data/data"; // Importa todos los datos que gestionas

// Crea un contexto para compartir el idioma y los datos globalmente
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [appData, setAppData] = useState(data);

  useEffect(() => {
    // Escucha los cambios de idioma
    const handleLanguageChange = (lang) => {
      setLanguage(lang);
      i18n.changeLanguage(lang);
    };

    // Se activa cuando el idioma cambia
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      // Limpia el evento cuando se desmonte el componente
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <AppContext.Provider value={{ language, appData, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext); */ //==========================================================02/01/2025
/* import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Idioma inicial

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAppContext = () => {
  return useContext(LanguageContext);
}; */ 
const LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const LanguageProvider = ({ children  })=>{
    const { 0: language , 1: setLanguage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("en"); // Idioma por defecto: ingles
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LanguageContext.Provider, {
        value: {
            language,
            setLanguage
        },
        children: children
    });
};


/***/ })

};
;