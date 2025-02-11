import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import ptBr from './locales/pt-br.json';

const options = {
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage', 'cookie'],
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
      es: {
        translation: es,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.changeLanguage('en');
export default i18n;
