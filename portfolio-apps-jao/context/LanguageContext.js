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

export const useAppContext = () => React.useContext(AppContext); */
//==========================================================02/01/2025
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
import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Idioma por defecto: ingles

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
