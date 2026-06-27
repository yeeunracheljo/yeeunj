import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HeroSection from "./components/HeroSection";
import Introduction from "./components/Introduction";
import ProblemStatement from "./components/ProblemStatement";
import BrandMetricsChart from "./components/BrandMetricsChart";
import ProjectGoal from "./components/ProjectGoal";
import SWOTAnalysis from "./components/SWOTAnalysis";
import BenchmarkInsight from "./components/BenchmarkInsight";
import ExecutionApproach from "./components/ExecutionApproach";
import ResultsSection from "./components/ResultsSection";
import InsightSection from "./components/InsightSection";
import TableOfContents from "./components/TableOfContents";
import RoleSection from "./components/RoleSection";

const otherProjects = [
  { title: "Karrot Campus Sprint", path: "/work/karrot-campus-sprint" },
  { title: "Anua Consumer Behavior Report", path: "/work/anua-consumer-report" },
  { title: "NeoSimplix", path: "/work/dr-rejuall" },
  { title: "Reta", path: "/work/reta" },
  { title: "Macs Learning Lab", path: "/work/macslearning" },
  { title: "UTKCC", path: "/work/utkcc" },
];

export default function WorkLG() {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between transition-all duration-300 bg-[#F5F5F5]/95 backdrop-blur-sm shadow-sm"
      >
        <Link
          to="/"
          className="text-sm font-medium tracking-wide font-sans hover:opacity-70 transition-opacity text-gray-900"
        >
          {t("nav.portfolio")}
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium tracking-wide text-gray-900 hover:text-[#94173F] transition-colors"
          >
            {t("nav.home")}
          </Link>
          <span className="text-sm font-medium tracking-wide flex items-center gap-2 text-gray-900">
            <span className="w-1.5 h-1.5 rounded-full bg-[#94173F] inline-block" />
            {t("nav.work")}
          </span>
          <Link
            to="/"
            className="text-sm font-medium tracking-wide text-gray-900 hover:text-[#94173F] transition-colors"
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/"
            className="text-sm font-medium tracking-wide text-gray-900 hover:text-[#94173F] transition-colors"
          >
            {t("nav.contact")}
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      <main>
        <HeroSection />
        <TableOfContents />
        <RoleSection />
        <Introduction />
        <ProblemStatement />
        <BrandMetricsChart />
        <ProjectGoal />
        <SWOTAnalysis />
        <BenchmarkInsight />
        <ExecutionApproach />
        <ResultsSection />
        <InsightSection />

        <section className="py-24 md:py-32 bg-[#F5F5F5]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-12">
              {t("nav.otherProjects")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {otherProjects.map((project) => (
                <Link
                  key={project.title}
                  to={project.path}
                  className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-[#94173F]/30 hover:shadow-sm transition-all text-left cursor-pointer w-full block"
                >
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#94173F] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-3 text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
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
