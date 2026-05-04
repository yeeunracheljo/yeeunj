import { useTranslation } from 'react-i18next';
import { anuaProject } from "@/mocks/work-anua";

export default function HeroSection() {
  const { t } = useTranslation('common');

  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center px-4 pt-20 pb-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight mb-6">
          {anuaProject.title}
        </h1>
        <p className="text-lg md:text-xl text-[#14B8A6] font-sans mb-10 max-w-2xl mx-auto font-medium">
          {anuaProject.subtitle}
        </p>

        <div className="flex flex-col items-center gap-2 text-gray-400 text-sm">
          <p>{anuaProject.institution}</p>
          <p className="text-gray-300">|</p>
          <p className="text-gray-600">{anuaProject.period}</p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400">
        <span className="text-[10px] tracking-widest uppercase">{t('nav.scroll')}</span>
        <div className="w-4 h-6 border border-gray-300 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-[#14B8A6] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}