import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { russianTranslation } from './translations/ru';
import { englishTranslation } from './translations/en';

//TODO fix options translate(in user-actions)
i18next
  .use(XHR)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: englishTranslation,
      ru: russianTranslation,
    },
    detection: { order: ['path', 'navigator'] },
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });
