import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation('common');
  const currentLang = i18n.language || 'en';

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        onClick={() => switchLang('en')}
        className={`px-2 py-1 text-xs font-medium tracking-wide rounded transition-colors cursor-pointer ${
          currentLang.startsWith('en')
            ? 'text-gray-900 bg-gray-200'
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        {t('lang.en')}
      </button>
      <span className="text-gray-300 text-xs">|</span>
      <button
        onClick={() => switchLang('ko')}
        className={`px-2 py-1 text-xs font-medium tracking-wide rounded transition-colors cursor-pointer ${
          currentLang.startsWith('ko')
            ? 'text-gray-900 bg-gray-200'
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        {t('lang.ko')}
      </button>
    </div>
  );
}