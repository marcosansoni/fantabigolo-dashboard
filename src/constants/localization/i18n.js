import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import it from './it/index';

const lng = navigator.language.substring(0, 2) || navigator.userLanguage.substring(0, 2);
const selectedLang = 'it';

i18n
  .use(initReactI18next)
  .init({
    detection: {
      order: ['navigator', 'localStorage'],
    },
    debug: false,
    resources: {
      it,
    },
    lng: selectedLang || lng,
    fallbackLng: 'en',
    keySeparator: '.',
    preload: ['it', 'en'],
    interpolation: {
      escapeValue: false, // react escapes by default
    },
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  });

export default i18n;
