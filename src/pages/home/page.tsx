import { useTranslation } from 'react-i18next';
import PortfolioHero from "./components/PortfolioHero";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import QuickStats from "./components/QuickStats";
import IndexNav from "./components/IndexNav";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const { t } = useTranslation('common');

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3 md:py-3.5 flex items-center justify-between bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <span className="text-sm font-semibold text-[#333] tracking-wide">
          {t('nav.portfolio')}
        </span>
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("#work")}
            className="text-[#333] text-sm font-medium flex items-center gap-2 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1876fb] inline-block" />
            {t('nav.work')}
          </button>
          <button
            onClick={() => scrollTo("#about")}
            className="text-gray-400 text-sm hover:text-[#333] transition-colors cursor-pointer"
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="text-gray-400 text-sm hover:text-[#333] transition-colors cursor-pointer"
          >
            {t('nav.contact')}
          </button>
          <a
            href="https://drive.google.com/uc?export=download&id=11ISdfobzlD0cdID67ffzwFt8-NSu6wyZ"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#333] flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 hover:bg-[#333] hover:text-white transition-colors cursor-pointer"
          >
            <i className="ri-download-line" />
            {t('nav.resume')}
          </a>
          <LanguageSwitcher />
        </div>
      </nav>

      <main>
        <div className="bg-gradient-to-br from-white via-[#f8fbff]/60 to-[#eef5ff]/40">
          <PortfolioHero />
          <div className="mt-8 md:mt-12">
            <QuickStats />
          </div>
        </div>
        <IndexNav />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
      </main>
    </div>
  );
}
