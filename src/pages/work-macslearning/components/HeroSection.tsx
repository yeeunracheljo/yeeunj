import { useTranslation } from 'react-i18next';
import { macsLearningProject } from '@/mocks/work-macslearning';

export default function HeroSection() {
  const { t } = useTranslation('workMacsLearning');

  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center px-4 pt-20 pb-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-900 leading-tight mb-6">
          {t('project.title')}
        </h1>
        <p className="text-lg md:text-xl text-[#8B6914] font-sans mb-10 font-medium">
          {t('project.subtitle')}
        </p>

        <div className="flex flex-col items-center gap-2 text-gray-400 text-sm">
          <p>{t('project.institution')}</p>
          <p className="text-gray-300">|</p>
          <p className="text-gray-600">{t('project.period')}</p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-4 h-6 border border-gray-300 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-[#D4C72A] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}