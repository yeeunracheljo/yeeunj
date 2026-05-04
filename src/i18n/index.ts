import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import messages from './local/index';

const savedLang = localStorage.getItem('portfolio-language');
const defaultLang = savedLang || (navigator.language.startsWith('ko') ? 'ko' : 'en');

i18n
  .use(initReactI18next)
  .init({
    lng: defaultLang,
    fallbackLng: 'en',
    debug: false,
    ns: ['common', 'home', 'work', 'workAnua', 'workLG', 'workReta', 'workMacsLearning', 'workUtkcc'],
    defaultNS: 'common',
    resources: messages,
    interpolation: {
      escapeValue: false,
    },
    keySeparator: false,
    nsSeparator: false,
  });

export default i18n;
