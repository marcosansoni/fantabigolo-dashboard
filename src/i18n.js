import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import locale from './constants/localization/index';
// import configureStore from './store/config/configureStore';

// const store = configureStore();
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
      ...locale,
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
