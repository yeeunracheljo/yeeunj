import { useTranslation } from 'react-i18next';
import { karrotProject } from "@/mocks/work";

export default function HeroSection() {
  const { t } = useTranslation('work');

  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center px-4 pt-20 pb-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-900 leading-tight mb-6">
          {karrotProject.title}
        </h1>
        <p className="text-lg md:text-xl text-[#FF7900] font-sans mb-10 font-medium">
          {karrotProject.subtitle}
        </p>

        <div className="flex flex-col items-center gap-2 text-gray-400 text-sm">
          <p>{karrotProject.institution}</p>
          <p className="text-gray-300">|</p>
          <p className="text-gray-600">{karrotProject.period}</p>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#FF7900]/25">
          <i className="ri-trophy-line text-[#FF7900]" />
          <span className="text-sm font-medium text-[#FF7900]">{t('project.award')}</span>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400">
        <span className="text-[10px] tracking-widest uppercase">{t('nav.scroll')}</span>
        <div className="w-4 h-6 border border-gray-300 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-[#FF7900] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}