import { useTranslation } from 'react-i18next';
import { utkccProject } from "@/mocks/work-utkcc";

export default function HeroSection() {
  const { t } = useTranslation('workUtkcc');

  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center px-4 pt-20 pb-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-900 leading-tight mb-6">
          {utkccProject.title}
        </h1>
        <p className="text-lg md:text-xl text-[#013385] font-sans mb-10 font-medium">
          {utkccProject.subtitle}
        </p>

        <div className="flex flex-col items-center gap-2 text-gray-600 text-sm">
          <p>{utkccProject.institution}</p>
          <p className="text-gray-400">|</p>
          <p>MAR. 2023 — MAR. 2026</p>
        </div>

        {/* Small link buttons */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <a
            href="https://www.utkcc.org/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#013385] text-sm font-medium hover:border-[#013385] hover:bg-[#013385] hover:text-white transition-all whitespace-nowrap border border-[#013385]/25"
          >
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-global-line text-base" />
            </span>
            {t('hero.visitSite')}
          </a>
          <a
            href="https://www.instagram.com/utkcc_/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#013385] text-sm font-medium hover:border-[#013385] hover:bg-[#013385] hover:text-white transition-all whitespace-nowrap border border-[#013385]/25"
          >
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-instagram-line text-base" />
            </span>
            {t('hero.instagram')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600">
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-4 h-6 border border-gray-300 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-[#013385] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}