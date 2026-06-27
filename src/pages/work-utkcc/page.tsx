import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HeroSection from "./components/HeroSection";
import TableOfContents from "./components/TableOfContents";
import Introduction from "./components/Introduction";
import ProblemSection from "./components/ProblemSection";
import StrategySection from "./components/StrategySection";
import ExecutionSection from "./components/ExecutionSection";
import NewsletterSection from "./components/NewsletterSection";
import ExperienceDesign from "./components/ExperienceDesign";
import CareerCampaign from "./components/CareerCampaign";
import ResultsSection from "./components/ResultsSection";
import KeyInsights from "./components/KeyInsights";

const otherProjects = [
  { title: "Karrot Campus Sprint", path: "/work/karrot-campus-sprint" },
  { title: "Anua Consumer Behavior Report", path: "/work/anua-consumer-report" },
  { title: "LG Interbrand Top 100 Strategy", path: "/work/lg-interbrand-strategy" },
  { title: "NeoSimplix", path: "/work/dr-rejuall" },
  { title: "Reta", path: "/work/reta" },
  { title: "Macs Learning Lab", path: "/work/macslearning" },
];

export default function WorkUtkcc() {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
        <Link
          to="/"
          className="text-sm font-medium tracking-wide font-sans hover:opacity-70 transition-opacity text-gray-900"
        >
          {t("nav.portfolio")}
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium tracking-wide text-gray-900 hover:text-[#013385] transition-colors"
          >
            {t("nav.home")}
          </Link>
          <span className="text-sm font-medium tracking-wide flex items-center gap-2 text-gray-900">
            <span className="w-1.5 h-1.5 rounded-full bg-[#013385] inline-block" />
            {t("nav.work")}
          </span>
          <Link
            to="/"
            className="text-sm font-medium tracking-wide text-gray-900 hover:text-[#013385] transition-colors"
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/"
            className="text-sm font-medium tracking-wide text-gray-900 hover:text-[#013385] transition-colors"
          >
            {t("nav.contact")}
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      <main>
        <HeroSection />
        <TableOfContents />
        <Introduction />
        <ProblemSection />
        <StrategySection />
        <ExecutionSection />
        <NewsletterSection />
        <ExperienceDesign />
        <CareerCampaign />
        <ResultsSection />
        <KeyInsights />

        <section className="py-16 md:py-24 bg-[#013385]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-10">
              {t("nav.otherProjects")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {otherProjects.map((project) => (
                <Link
                  key={project.title}
                  to={project.path}
                  className="group p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all text-left cursor-pointer w-full block"
                >
                  <h3 className="text-sm font-semibold text-white group-hover:text-white transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-3 text-xs text-white/60 group-hover:text-white/80 transition-colors">
                    {t("nav.viewProject")}
                    <i className="ri-arrow-right-line" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
