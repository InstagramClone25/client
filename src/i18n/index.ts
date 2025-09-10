import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Import file ngôn ngữ
import en from './locales/en.json';
import vi from './locales/vi.json';

i18n
  .use(LanguageDetector) // Tự động phát hiện ngôn ngữ (localStorage, navigator,…)
  .use(initReactI18next) // Kết nối với React
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React đã tự động escape
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
