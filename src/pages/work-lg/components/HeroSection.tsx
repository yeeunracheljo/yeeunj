import { useTranslation } from 'react-i18next';
import { lgProject } from "@/mocks/work-lg";

export default function HeroSection() {
  const { t } = useTranslation('common');

  return (
    <section className="relative min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4 pt-20 pb-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight mb-6">
          {lgProject.title}
        </h1>
        <p className="text-lg md:text-xl text-[#94173F] font-sans mb-10 max-w-2xl mx-auto font-medium">
          {lgProject.subtitle}
        </p>

        <div className="flex flex-col items-center gap-2 text-gray-600 text-sm">
          <p>{lgProject.institution}</p>
          <p className="text-gray-400">|</p>
          <p>{lgProject.period}</p>
        </div>

        <a
          href="https://drive.google.com/file/d/1hQZa5k5ER5oqM5AlJvp3wLoj863zK0eH/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F5F5] border border-[#94173F]/25 text-[#94173F] text-sm font-medium hover:border-[#94173F] hover:bg-[#94173F] hover:text-white transition-all cursor-pointer"
        >
          <i className="ri-download-line" />
          <span>View Deck</span>
        </a>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600">
        <span className="text-[10px] tracking-widest uppercase font-medium">{t('nav.scroll')}</span>
        <div className="w-4 h-6 border border-gray-300 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-[#94173F] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}