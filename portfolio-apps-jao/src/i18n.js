import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import es from "./locales/es.json";
import eu from "./locales/eu.json";

i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next) // Inicializa react-i18next
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      eu: { translation: eu }
    },
    fallbackLng: "en", // Idioma por defecto
    interpolation: { escapeValue: false }
  });

export default i18n;
