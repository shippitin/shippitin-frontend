import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import hi from './locales/hi/translation.json';
import zh from './locales/zh/translation.json';
import ja from './locales/ja/translation.json';
import ru from './locales/ru/translation.json';
import fr from './locales/fr/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      zh: { translation: zh },
      ja: { translation: ja },
      ru: { translation: ru },
      fr: { translation: fr },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;