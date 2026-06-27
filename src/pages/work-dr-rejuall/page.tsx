import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import medik8Image from "@/assets/dr-rejuall-medik8.png";
import simpleImage from "@/assets/dr-rejuall-simple.png";
import pdrnCreamImage from "@/assets/dr-rejuall-pdrn-cream.png";
import lipSerumImage from "@/assets/dr-rejuall-lip-serum.png";
import pdrnDuoImage from "@/assets/dr-rejuall-pdrn-duo.png";

const otherProjects = [
  { title: "Karrot Campus Sprint", path: "/work/karrot-campus-sprint" },
  { title: "Anua Consumer Behavior Report", path: "/work/anua-consumer-report" },
  { title: "LG Interbrand Top 100 Strategy", path: "/work/lg-interbrand-strategy" },
  { title: "Reta", path: "/work/reta" },
  { title: "Macs Learning Lab", path: "/work/macslearning" },
  { title: "UTKCC", path: "/work/utkcc" },
];

const imageByLabel: Record<string, string> = {
  Medik8: medik8Image,
  Simple: simpleImage,
  "Dr. Rejuall": pdrnCreamImage,
  "PDRN Cream": pdrnDuoImage,
  "PDRN Lip Serum": lipSerumImage,
};

function ImageSlot({ label, caption, dark = false }: { label: string; caption: string; dark?: boolean }) {
  const image = imageByLabel[label];

  return (
    <div
      className={`relative rounded-2xl border flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        dark
          ? "border-white/25 bg-white/10 text-white"
          : "border-[#EFE5DD] bg-[#F9F5F1] text-[#2F2A27]"
      }`}
    >
      {image ? (
        <>
          <div className="w-full bg-white">
            <img src={image} alt={label} className="w-full h-auto block" />
          </div>
          <div className="w-full p-5 text-left bg-[#2F2A27] text-white">
            <p className="font-serif text-2xl leading-tight">{label}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/70">{caption}</p>
          </div>
        </>
      ) : (
        <>
          <div className={`absolute inset-0 ${dark ? "bg-white/[0.03]" : "bg-white/35"}`} />
          <div className="relative p-6">
            <i className={`ri-image-add-line text-3xl mb-4 block ${dark ? "text-[#D9B9A8]" : "text-[#B88B78]"}`} />
            <p className="font-serif text-2xl leading-tight">{label}</p>
            <p className={`mt-2 text-xs uppercase tracking-[0.22em] ${dark ? "text-white/55" : "text-[#8A7A72]"}`}>
              {caption}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default function WorkDrRejuall() {
  const { t } = useTranslation("workDrRejuall");
  const { t: tc } = useTranslation("common");
  const [activeId, setActiveId] = useState("overview");

  const split = (key: string) => t(key).split("|").filter(Boolean);
  const parsePairs = (key: string) =>
    split(key).map((item) => {
      const [title, body] = item.split("~");
      return { title, body };
    });

  const overviewMetrics = split("overview.metrics").map((item) => {
    const [value, label, desc, icon] = item.split("~");
    return { value, label, desc, icon };
  });
  const kpiItems = split("performance.kpis").map((item) => {
    const [metric, result, percent] = item.split("~");
    return { metric, result, percent: Number(percent) || 0 };
  });
  const performanceStats = split("performance.stats").map((item) => {
    const [value, label] = item.split("~");
    return { value, label };
  });
  const achievements = split("performance.achievements");
  const researchSources = split("research.sources");
  const workflowItems = split("research.workflow");
  const benchmarkRows = split("research.benchmark").map((item) => {
    const [brand, message, observation] = item.split("~");
    return { brand, message, observation };
  });
  const researchBrands = split("research.brands").map((item) => {
    const [brand, caption, tag1, tag2] = item.split("~");
    return { brand, caption, tag1, tag2 };
  });
  const insightCards = split("insights.cards").map((item) => {
    const [title, score, body] = item.split("~");
    return { title, score, body };
  });
  const beforeAfter = split("insights.beforeAfter").map((item) => {
    const [label, value, note] = item.split("~");
    return { label, value, note };
  });
  const strategyCards = parsePairs("strategy.cards");
  const strategyProducts = split("strategy.products").map((item) => {
    const [product, point, tag1, tag2, tag3] = item.split("~");
    return { product, point, tags: [tag1, tag2, tag3].filter(Boolean) };
  });
  const guidelineItems = split("strategy.guidelines");
  const supportItems = split("strategy.support");
  const reflectionItems = parsePairs("reflection.items");

  const tocItems = [
    { id: "overview", label: t("toc.overview") },
    { id: "performance", label: t("toc.performance") },
    { id: "challenge", label: t("toc.challenge") },
    { id: "research", label: t("toc.research") },
    { id: "insights", label: t("toc.insights") },
    { id: "strategy", label: t("toc.strategy") },
    { id: "reflection", label: t("toc.reflection") },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 108;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F5F1] text-[#2F2A27]">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between bg-[#F9F5F1]/95 backdrop-blur-sm shadow-sm">
        <Link
          to="/"
          className="text-sm font-medium tracking-wide font-sans hover:opacity-70 transition-opacity text-[#2F2A27]"
        >
          {tc("nav.portfolio")}
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium tracking-wide text-[#2F2A27] hover:text-[#B88B78] transition-colors">
            {tc("nav.home")}
          </Link>
          <span className="text-sm font-medium tracking-wide flex items-center gap-2 text-[#2F2A27]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88B78] inline-block" />
            {tc("nav.work")}
          </span>
          <Link to="/" className="text-sm font-medium tracking-wide text-[#2F2A27] hover:text-[#B88B78] transition-colors">
            {tc("nav.about")}
          </Link>
          <Link to="/" className="text-sm font-medium tracking-wide text-[#2F2A27] hover:text-[#B88B78] transition-colors">
            {tc("nav.contact")}
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      <main>
        <section className="relative min-h-screen bg-[#F9F5F1] flex flex-col items-center justify-center px-4 pt-20 pb-8">
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-xs md:text-sm uppercase tracking-[0.34em] text-[#B88B78] mb-7">
              {t("project.eyebrow")}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F2A27] leading-tight mb-7">
              {t("project.title")}
            </h1>
            <p className="text-base md:text-xl text-[#B88B78] font-sans mb-12 max-w-4xl mx-auto font-semibold uppercase tracking-wide leading-relaxed">
              {t("project.subtitle")}
            </p>
            <div className="flex flex-col items-center gap-2 text-[#6F625B] text-sm md:text-base">
              <p>{t("project.institution")}</p>
              <p className="text-[#D9B9A8]">|</p>
              <p>{t("project.period")}</p>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#6F625B]">
            <span className="text-[10px] tracking-widest uppercase font-medium">{tc("nav.scroll")}</span>
            <div className="w-4 h-6 border border-[#D9B9A8] rounded-full flex justify-center pt-1.5">
              <div className="w-0.5 h-1.5 bg-[#B88B78] rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        <div className="sticky top-[60px] z-40 bg-white/95 backdrop-blur-sm border-b border-[#EFE5DD]">
          <div className="mx-auto px-4 md:px-6">
            <nav className="flex items-center justify-center gap-1 overflow-x-auto py-2.5 no-scrollbar">
              {tocItems.map((item, index) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#B88B78]/15 text-[#8E695A]"
                        : "text-[#8A7A72]/70 hover:text-[#2F2A27] hover:bg-[#F9F5F1]"
                    }`}
                  >
                    <span className={`text-[10px] font-mono ${isActive ? "text-[#8E695A]" : "text-[#D9B9A8]"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <section id="overview" className="py-16 md:py-24 bg-white scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-12 mb-12">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">01 {t("overview.label")}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] leading-tight mb-6">
                  {t("overview.title")}
                </h2>
                <p className="text-[#6F625B] leading-relaxed">{t("overview.body")}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {overviewMetrics.map((metric) => (
                  <article key={metric.label} className="rounded-xl border border-[#EFE5DD] bg-[#F9F5F1] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <i className={`${metric.icon} text-[#B88B78] text-xl mb-5 block`} />
                    <p className="text-3xl font-serif text-[#2F2A27] mb-1">{metric.value}</p>
                    <p className="text-sm font-semibold text-[#2F2A27]">{metric.label}</p>
                    <p className="text-xs text-[#8A7A72] mt-2 leading-relaxed">{metric.desc}</p>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section id="performance" className="py-16 md:py-24 bg-[#F9F5F1] scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">02 {t("performance.label")}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] mb-4">{t("performance.title")}</h2>
                <p className="text-[#6F625B] leading-relaxed mb-6">{t("performance.subtitle")}</p>
                <div className="grid grid-cols-3 gap-3">
                  {performanceStats.map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white border border-[#EFE5DD] p-4 text-center">
                      <p className="text-xl font-serif text-[#8E695A]">{stat.value}</p>
                      <p className="text-[11px] text-[#8A7A72] mt-1 leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <article className="bg-white rounded-2xl p-6 md:p-8 border border-[#EFE5DD] shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-xl font-serif text-[#2F2A27]">{t("performance.chartTitle")}</h3>
                    <p className="text-sm text-[#8A7A72] mt-1">{t("performance.chartSubtitle")}</p>
                  </div>
                  <i className="ri-bar-chart-grouped-line text-[#B88B78] text-2xl" />
                </div>

                <div className="mb-4 grid grid-cols-5 text-[11px] text-[#8A7A72]">
                  <span>0%</span>
                  <span className="text-center">80%</span>
                  <span className="text-center">160%</span>
                  <span className="text-center">240%</span>
                  <span className="text-right">320%</span>
                </div>

                <div className="space-y-5">
                  {kpiItems.map((item) => {
                    const width = Math.min((item.percent / 320) * 100, 100);
                    return (
                      <div key={item.metric} className="grid grid-cols-[86px_1fr_66px] md:grid-cols-[110px_1fr_78px] gap-3 items-center">
                        <p className="text-sm font-semibold text-[#2F2A27]">{item.metric}</p>
                        <div className="h-4 rounded-full bg-[#EFE5DD] overflow-hidden">
                          <div className="h-full rounded-full bg-[#8E695A]" style={{ width: `${width}%` }} />
                        </div>
                        <p className="text-sm font-semibold text-[#8E695A] text-right">{item.result}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-xl bg-[#2F2A27] p-5 text-white">
                  <p className="text-sm font-semibold mb-3">{t("performance.achievementTitle")}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {achievements.map((item) => (
                      <p key={item} className="text-sm leading-relaxed text-white/75 flex gap-2">
                        <i className="ri-check-line text-[#D9B9A8] mt-0.5" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="challenge" className="py-16 md:py-24 bg-white scroll-mt-28">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">03 {t("challenge.label")}</p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#2F2A27] leading-tight mb-8">
              {t("challenge.title")}
            </h2>
            <div className="max-w-3xl mx-auto space-y-5 text-[#6F625B] leading-relaxed">
              <p>{t("challenge.body1")}</p>
              <p>{t("challenge.body2")}</p>
            </div>
          </div>
        </section>

        <section id="research" className="py-16 md:py-24 bg-[#F9F5F1] scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">04 {t("research.label")}</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] mb-4">{t("research.title")}</h2>
                <p className="text-[#6F625B] max-w-2xl leading-relaxed">{t("research.body")}</p>
              </div>
              <div className="rounded-xl bg-white border border-[#EFE5DD] p-5 max-w-md">
                <p className="text-xs uppercase tracking-[0.2em] text-[#B88B78] mb-2">{t("research.questionLabel")}</p>
                <p className="font-serif text-xl text-[#2F2A27] leading-snug">{t("research.question")}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 mb-8">
              <article className="bg-white rounded-2xl p-6 border border-[#EFE5DD]">
                <h3 className="text-lg font-serif text-[#2F2A27] mb-5">{t("research.sourceTitle")}</h3>
                <div className="flex flex-wrap gap-2">
                  {researchSources.map((source) => (
                    <span key={source} className="px-3 py-2 rounded-full bg-[#F9F5F1] border border-[#EFE5DD] text-xs font-semibold text-[#6F625B]">
                      {source}
                    </span>
                  ))}
                </div>
              </article>

              <article className="bg-white rounded-2xl p-6 border border-[#EFE5DD]">
                <h3 className="text-lg font-serif text-[#2F2A27] mb-5">{t("research.workflowTitle")}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  {workflowItems.map((item, index) => (
                    <div key={item} className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
                      <div className="rounded-xl bg-[#F9F5F1] border border-[#EFE5DD] p-3 text-center min-h-16 flex items-center justify-center flex-1">
                        <span className="text-xs font-semibold text-[#6F625B] leading-snug">{item}</span>
                      </div>
                      {index !== workflowItems.length - 1 && (
                        <div className="flex justify-center text-[#D9B9A8] sm:w-4 sm:shrink-0">
                          <i className="ri-arrow-down-line sm:hidden" />
                          <i className="ri-arrow-right-line hidden sm:block" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              {researchBrands.map((brand, index) => (
                <article key={brand.brand} className="relative bg-white rounded-2xl border border-[#EFE5DD] p-5">
                  <ImageSlot label={brand.brand} caption={brand.caption} />
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#F9F5F1] border border-[#EFE5DD] text-xs font-semibold text-[#8E695A]">
                      {brand.tag1}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#F9F5F1] border border-[#EFE5DD] text-xs font-semibold text-[#8E695A]">
                      {brand.tag2}
                    </span>
                  </div>
                  {index !== researchBrands.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 rounded-full bg-[#2F2A27] text-white items-center justify-center">
                      <i className="ri-arrow-right-line text-sm" />
                    </div>
                  )}
                </article>
              ))}
            </div>

            <article className="bg-white rounded-2xl border border-[#EFE5DD] overflow-hidden">
              <div className="p-6 border-b border-[#EFE5DD]">
                <h3 className="text-xl font-serif text-[#2F2A27]">{t("research.benchmarkTitle")}</h3>
                <p className="text-sm text-[#8A7A72] mt-2">{t("research.benchmarkSubtitle")}</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                  <thead className="bg-[#F9F5F1] text-[#8E695A]">
                    <tr>
                      <th className="text-left font-semibold p-4">{t("research.tableBrand")}</th>
                      <th className="text-left font-semibold p-4">{t("research.tableMessage")}</th>
                      <th className="text-left font-semibold p-4">{t("research.tableObservation")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmarkRows.map((row, index) => (
                      <tr key={row.brand} className={index !== benchmarkRows.length - 1 ? "border-b border-[#EFE5DD]" : ""}>
                        <td className="p-4 font-semibold text-[#2F2A27]">{row.brand}</td>
                        <td className="p-4 text-[#6F625B]">{row.message}</td>
                        <td className="p-4 text-[#6F625B]">{row.observation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </section>

        <section id="insights" className="py-16 md:py-24 bg-white scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">05 {t("insights.label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] mb-10">{t("insights.title")}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8">
              <div className="space-y-4">
                {insightCards.map((card, index) => (
                  <article key={card.title} className="rounded-xl border border-[#EFE5DD] bg-[#F9F5F1] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#8E695A] text-white text-xs font-semibold flex items-center justify-center">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-base font-semibold text-[#2F2A27]">{card.title}</h3>
                      </div>
                      <span className="text-[#B88B78] tracking-[0.08em]">{card.score}</span>
                    </div>
                    <p className="text-sm text-[#6F625B] leading-relaxed">{card.body}</p>
                  </article>
                ))}
              </div>

              <article className="rounded-2xl border border-[#EFE5DD] bg-[#2F2A27] p-6 md:p-8 text-white">
                <h3 className="font-serif text-2xl mb-7">{t("insights.beforeAfterTitle")}</h3>
                <div className="space-y-4">
                  {beforeAfter.map((item, index) => (
                    <div key={item.label}>
                      <div className="rounded-xl bg-white/10 border border-white/15 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#D9B9A8] mb-2">{item.label}</p>
                        <p className="text-xl font-serif text-white">{item.value}</p>
                        <p className="text-sm text-white/65 mt-2">{item.note}</p>
                      </div>
                      {index !== beforeAfter.length - 1 && (
                        <div className="flex justify-center py-2 text-[#D9B9A8]">
                          <i className="ri-arrow-down-line" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="strategy" className="py-16 md:py-24 bg-[#F9F5F1] scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">06 {t("strategy.label")}</p>
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start mb-10">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] mb-5">{t("strategy.title")}</h2>
                <p className="text-[#6F625B] leading-relaxed">{t("strategy.body")}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {strategyCards.map((card) => (
                  <article key={card.title} className="rounded-xl bg-white border border-[#EFE5DD] p-5">
                    <h3 className="text-sm font-semibold text-[#2F2A27] mb-2">{card.title}</h3>
                    <p className="text-sm text-[#6F625B] leading-relaxed">{card.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {strategyProducts.map((product) => (
                <article key={product.product} className="rounded-2xl bg-white border border-[#EFE5DD] p-5 md:p-6">
                  <ImageSlot label={product.product} caption={t("strategy.imageCaption")} />
                  <div className="flex justify-center py-4 text-[#D9B9A8]">
                    <i className="ri-arrow-down-line text-xl" />
                  </div>
                  <div className="rounded-2xl bg-[#F9F5F1] border border-[#EFE5DD] p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#B88B78] mb-2">{t("strategy.talkingPoint")}</p>
                    <h3 className="font-serif text-2xl text-[#2F2A27] mb-4">{product.point}</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-full bg-white border border-[#EFE5DD] text-xs font-semibold text-[#8E695A]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <article className="rounded-2xl bg-white border border-[#EFE5DD] p-6">
                <h3 className="font-serif text-2xl text-[#2F2A27] mb-3">{t("strategy.guidelineTitle")}</h3>
                <p className="text-sm text-[#6F625B] leading-relaxed mb-5">{t("strategy.guidelineBody")}</p>
                <div className="flex flex-wrap gap-2">
                  {guidelineItems.map((item) => (
                    <span key={item} className="px-3 py-2 rounded-full bg-[#F9F5F1] border border-[#EFE5DD] text-xs font-semibold text-[#8E695A]">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
              <article className="rounded-2xl bg-[#2F2A27] p-6 text-white">
                <h3 className="font-serif text-2xl mb-5">{t("strategy.supportTitle")}</h3>
                <div className="space-y-3">
                  {supportItems.map((item) => (
                    <p key={item} className="text-sm text-white/75 leading-relaxed flex gap-2">
                      <i className="ri-check-line text-[#D9B9A8] mt-0.5" />
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="reflection" className="py-16 md:py-24 bg-[#F9F5F1] scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">07 {t("reflection.label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] mb-10">{t("reflection.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {reflectionItems.map((item, index) => (
                <article key={item.title} className="bg-white rounded-xl p-6 border border-[#EFE5DD] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-xs font-mono text-[#B88B78]">0{index + 1}</span>
                  <h3 className="text-base font-semibold text-[#2F2A27] mt-3 mb-3">{item.title}</h3>
                  <p className="text-sm text-[#6F625B] leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#2F2A27]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-10">{tc("nav.otherProjects")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {otherProjects.map((project) => (
                <Link
                  key={project.title}
                  to={project.path}
                  className="group p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all text-left cursor-pointer w-full block"
                >
                  <h3 className="text-sm font-semibold text-white leading-snug">{project.title}</h3>
                  <div className="flex items-center gap-1 mt-3 text-xs text-white/60 group-hover:text-white/85 transition-colors">
                    {tc("nav.viewProject")}
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
