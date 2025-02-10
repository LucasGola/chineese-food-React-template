import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ptBr from "./locales/pt-br.json";

// Configurações adicionais do LanguageDetector
const options = {
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  caches: ["localStorage", "cookie"],
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources: {
      en: {
        translation: en,
      },
      pt: {
        translation: ptBr,
      },
    },
    fallbackLng: "en", // Define o idioma padrão aqui
    interpolation: {
      escapeValue: false,
    },
  });

i18n.changeLanguage("en");
export default i18n;
