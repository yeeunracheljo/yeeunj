import { useTranslation } from 'react-i18next';
import { retaProject } from "@/mocks/work-reta";

export default function HeroSection() {
  const { t } = useTranslation('workReta');

  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center px-4 pt-20 pb-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-6">
          Reta
        </h1>

        <p className="text-sm text-[#5ECCE6] font-medium tracking-wide mb-6">
          Can Gamification Drive Sustainable Digital Behavior?
        </p>

        <div className="flex flex-col items-center gap-2 text-gray-600 text-sm">
          <p>{retaProject.institution}</p>
          <p className="text-gray-400">|</p>
          <p>{retaProject.period}</p>
        </div>

      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600">
        <span className="text-[10px] tracking-widest uppercase font-medium">{t('nav.scroll')}</span>
        <div className="w-4 h-6 border border-gray-300 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-[#5ECCE6] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}