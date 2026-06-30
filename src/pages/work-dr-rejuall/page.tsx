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

function ImageSlot({
  label,
  caption,
  variant = "wide",
  dark = false,
  compact = false,
  imageOffset = "",
  showMeta = true,
}: {
  label: string;
  caption: string;
  variant?: "wide" | "square";
  dark?: boolean;
  compact?: boolean;
  imageOffset?: string;
  showMeta?: boolean;
}) {
  const image = imageByLabel[label];
  const imageFrame = variant === "square" ? "aspect-square" : "aspect-video";
  const imageFit = variant === "wide" ? "w-full h-full object-cover block" : "max-w-[72%] max-h-[72%] object-contain block";
  const footerPadding = compact ? "p-3" : "p-5";
  const titleSize = compact ? "text-lg" : "text-2xl";
  const captionSize = compact ? "text-[10px] tracking-[0.18em]" : "text-xs tracking-[0.22em]";

  return (
    <div
      className={`relative rounded-2xl border flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        compact ? "max-w-[240px] mx-auto" : ""
      } ${
        dark
          ? "border-white/25 bg-white/10 text-white"
          : "border-[#E8E0D8] bg-[#FAF9F6] text-[#3A210F]"
      }`}
    >
      {image ? (
        <>
          <div className="w-full bg-white">
            <div className={`${imageFrame} w-full flex items-center justify-center`}>
              <img src={image} alt={label} className={`${imageFit} ${imageOffset}`} />
            </div>
          </div>
          {showMeta && (
            <div className={`w-full ${footerPadding} text-left bg-[#3A210F] text-white`}>
              <p className={`font-serif ${titleSize} leading-tight`}>{label}</p>
              <p className={`mt-1 uppercase ${captionSize} text-white/70`}>{caption}</p>
            </div>
          )}
        </>
      ) : (
        <>
          <div className={`absolute inset-0 ${dark ? "bg-white/[0.03]" : "bg-white/35"}`} />
          <div className="relative p-6">
            <i className={`ri-image-add-line text-3xl mb-4 block ${dark ? "text-[#3A210F]" : "text-[#3A210F]"}`} />
            {showMeta && (
              <>
                <p className="font-serif text-2xl leading-tight">{label}</p>
                <p className={`mt-2 text-xs uppercase tracking-[0.22em] ${dark ? "text-white/55" : "text-[#8A7A72]"}`}>
                  {caption}
                </p>
              </>
            )}
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

  const kpiItems = split("performance.kpis").map((item) => {
    const [metric, result, percent] = item.split("~");
    return { metric, result, percent: Number(percent) || 0 };
  });
  const performanceStats = split("performance.stats").map((item) => {
    const [value, label] = item.split("~");
    return { value, label };
  });
  const achievements = split("performance.achievements");
  const contentStats = split("performance.contentStats").map((item) => {
    const [value, label] = item.split("~");
    return { value, label };
  });
  const productStats = split("performance.productStats").map((item) => {
    const [product, value] = item.split("~");
    return { product, value };
  });
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
  const strategyProducts = split("strategy.products").map((item) => {
    const [product, firstTitle, firstItems, secondTitle, secondItems] = item.split("~");
    return {
      product,
      sections: [
        { title: firstTitle, items: firstItems.split(",").filter(Boolean) },
        { title: secondTitle, items: secondItems.split(",").filter(Boolean) },
      ],
    };
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
    <div className="min-h-screen bg-[#FAF9F6] text-[#3A210F]">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between bg-[#FAF9F6]/95 backdrop-blur-sm shadow-sm">
        <Link
          to="/"
          className="text-sm font-medium tracking-wide font-sans hover:opacity-70 transition-opacity text-[#3A210F]"
        >
          {tc("nav.portfolio")}
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium tracking-wide text-[#3A210F] hover:text-[#3A210F] transition-colors">
            {tc("nav.home")}
          </Link>
          <span className="text-sm font-medium tracking-wide flex items-center gap-2 text-[#3A210F]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3A210F] inline-block" />
            {tc("nav.work")}
          </span>
          <Link to="/" className="text-sm font-medium tracking-wide text-[#3A210F] hover:text-[#3A210F] transition-colors">
            {tc("nav.about")}
          </Link>
          <Link to="/" className="text-sm font-medium tracking-wide text-[#3A210F] hover:text-[#3A210F] transition-colors">
            {tc("nav.contact")}
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      <main>
        <section className="relative min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center px-4 pt-20 pb-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#3A210F] leading-tight mb-7">
              {t("project.title")}
            </h1>
            <p className="text-base md:text-xl text-[#3A210F] font-sans mb-12 max-w-4xl mx-auto font-semibold uppercase tracking-wide leading-relaxed">
              {t("project.subtitle")}
            </p>
            <div className="flex flex-col items-center gap-2 text-[#6F625B] text-sm md:text-base">
              <p>{t("project.institution")}</p>
              <p className="text-[#3A210F]">|</p>
              <p>{t("project.period")}</p>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#6F625B]">
            <span className="text-[10px] tracking-widest uppercase font-medium">{tc("nav.scroll")}</span>
            <div className="w-4 h-6 border border-[#3A210F] rounded-full flex justify-center pt-1.5">
              <div className="w-0.5 h-1.5 bg-[#3A210F] rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        <div className="sticky top-[60px] z-40 bg-white/95 backdrop-blur-sm border-b border-[#E8E0D8]">
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
                        ? "bg-[#3A210F]/15 text-[#3A210F]"
                        : "text-[#8A7A72]/70 hover:text-[#3A210F] hover:bg-[#FAF9F6]"
                    }`}
                  >
                    <span className={`text-[10px] font-mono ${isActive ? "text-[#3A210F]" : "text-[#3A210F]"}`}>
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
          <div className="max-w-4xl mx-auto px-6">
            <div className="rounded-3xl bg-[#FAF9F6] border border-[#E8E0D8] p-7 md:p-10 text-center">
                <p className="text-xs uppercase tracking-[0.24em] text-[#3A210F] mb-4">01 — {t("overview.label")}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#3A210F] leading-tight mb-6">
                  {t("overview.title")}
                </h2>
                <p className="text-[#6F625B] leading-relaxed">{t("overview.body")}</p>
            </div>
          </div>
        </section>

        <section id="performance" className="py-16 md:py-24 bg-[#FAF9F6] scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#3A210F] mb-4">02 {t("performance.label")}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#3A210F] mb-4">{t("performance.title")}</h2>
                {performanceStats.length > 0 && (
                  <div className="grid grid-cols-3 gap-3">
                    {performanceStats.map((stat) => (
                      <div key={stat.label} className="rounded-xl bg-white border border-[#E8E0D8] p-4 text-center">
                        <p className="text-xl font-serif text-[#3A210F]">{stat.value}</p>
                        <p className="text-[11px] text-[#8A7A72] mt-1 leading-snug">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <article className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8E0D8] shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-xl font-serif text-[#3A210F]">{t("performance.chartTitle")}</h3>
                    {t("performance.chartSubtitle") && (
                      <p className="text-sm text-[#8A7A72] mt-1">{t("performance.chartSubtitle")}</p>
                    )}
                  </div>
                  <i className="ri-bar-chart-grouped-line text-[#3A210F] text-2xl" />
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
                        <p className="text-sm font-semibold text-[#3A210F]">{item.metric}</p>
                        <div className="h-4 rounded-full bg-[#E8E0D8] overflow-hidden">
                          <div className="h-full rounded-full bg-[#3A210F]" style={{ width: `${width}%` }} />
                        </div>
                        <p className="text-sm font-semibold text-[#3A210F] text-right">{item.result}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-xl bg-[#3A210F] p-5 text-white">
                  {t("performance.achievementTitle") && (
                    <p className="text-sm font-semibold mb-3">{t("performance.achievementTitle")}</p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {achievements.map((item) => (
                      <p key={item} className="text-sm leading-relaxed text-white/75 flex gap-2">
                        <i className="ri-check-line text-[#FAF9F6] mt-0.5" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-4">
                  <div className="rounded-xl bg-[#FAF9F6] border border-[#E8E0D8] p-5">
                    <p className="text-sm font-semibold text-[#3A210F] mb-3">{t("performance.contentTitle")}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                      {contentStats.map((item) => (
                        <div key={item.label} className="rounded-lg bg-white border border-[#E8E0D8] px-3 py-2 text-center">
                          <p className="text-sm font-semibold text-[#3A210F] leading-tight">{item.value}</p>
                          <p className="text-[10px] text-[#8A7A72] mt-0.5 leading-tight">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#FAF9F6] border border-[#E8E0D8] p-5">
                    <p className="text-sm font-semibold text-[#3A210F] mb-3">{t("performance.productTitle")}</p>
                    <div className="space-y-2.5">
                      {productStats.map((item) => (
                        <div key={item.product} className="flex items-center justify-between gap-3 rounded-lg bg-white border border-[#E8E0D8] px-3 py-2.5">
                          <span className="text-xs font-semibold text-[#6F625B]">{item.product}</span>
                          <span className="font-serif text-base text-[#3A210F]">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="challenge" className="py-16 md:py-24 bg-white scroll-mt-28">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-[#3A210F] mb-4">03 {t("challenge.label")}</p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#3A210F] leading-tight mb-8">
              {t("challenge.title")}
            </h2>
            <div className="max-w-3xl mx-auto rounded-3xl bg-[#FAF9F6] border border-[#E8E0D8] p-6 md:p-8 text-center shadow-sm">
              <div className="flex flex-col items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#3A210F] text-white flex items-center justify-center shrink-0">
                  <i className="ri-question-line text-lg" />
                </div>
                <div className="space-y-5 text-[#6F625B] leading-relaxed">
                  <p>{t("challenge.body1")}</p>
                  <p>{t("challenge.body2")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="py-16 md:py-24 bg-[#FAF9F6] scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="text-xs uppercase tracking-[0.24em] text-[#3A210F] mb-4">04 {t("research.label")}</p>
              <h2 className="font-serif text-3xl md:text-5xl text-[#3A210F] mb-5">{t("research.title")}</h2>
              {t("research.body") && <p className="text-[#6F625B] leading-relaxed">{t("research.body")}</p>}
            </div>

            <article className="max-w-2xl mx-auto rounded-2xl bg-white border border-[#E8E0D8] p-5 md:p-6 text-center shadow-sm mb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#3A210F] mb-3">{t("research.questionLabel")}</p>
              <p className="font-serif text-base md:text-lg text-[#3A210F] leading-snug">{t("research.question")}</p>
            </article>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 max-w-5xl mx-auto">
              <article className="bg-white rounded-2xl p-5 border border-[#E8E0D8]">
                <h3 className="text-lg font-serif text-[#3A210F] mb-4 text-center">{t("research.sourceTitle")}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {researchSources.map((source, index) => (
                    <div key={source} className="rounded-xl bg-[#FAF9F6] border border-[#E8E0D8] px-3 py-3 flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#3A210F] text-white text-[10px] font-semibold flex items-center justify-center shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm font-semibold text-[#6F625B] leading-snug">{source}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="bg-white rounded-2xl p-5 border border-[#E8E0D8]">
                <h3 className="text-lg font-serif text-[#3A210F] mb-4 text-center">{t("research.workflowTitle")}</h3>
                <div className="space-y-2.5">
                  {workflowItems.map((item, index) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-[#3A210F] text-white text-[10px] font-semibold flex items-center justify-center shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 rounded-xl bg-[#FAF9F6] border border-[#E8E0D8] px-3 py-2.5">
                        <p className="text-sm font-semibold text-[#6F625B]">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {researchBrands.map((brand, index) => (
                <article key={brand.brand} className="relative bg-white rounded-2xl border border-[#E8E0D8] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <ImageSlot
                    label={brand.brand}
                    caption={brand.caption}
                    variant="wide"
                    compact
                    showMeta={false}
                    imageOffset={brand.brand === "Dr. Rejuall" ? "-translate-y-6 scale-[1.03]" : ""}
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-serif text-lg text-[#3A210F]">{brand.brand}</h3>
                    <p className="mt-1 text-xs font-semibold text-[#8A7A72]">{brand.caption}</p>
                  </div>
                  <div className="mt-3 flex justify-center flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#FAF9F6] border border-[#E8E0D8] text-[11px] font-semibold text-[#3A210F]">
                      {brand.tag1}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#FAF9F6] border border-[#E8E0D8] text-[11px] font-semibold text-[#3A210F]">
                      {brand.tag2}
                    </span>
                  </div>
                  {index !== researchBrands.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 rounded-full bg-[#3A210F] text-white items-center justify-center">
                      <i className="ri-arrow-right-line text-sm" />
                    </div>
                  )}
                </article>
              ))}
            </div>

            <article className="bg-white rounded-2xl border border-[#E8E0D8] overflow-hidden shadow-sm max-w-4xl mx-auto">
              <div className="p-5 text-center border-b border-[#E8E0D8]">
                <h3 className="text-xl md:text-2xl font-serif text-[#3A210F]">{t("research.benchmarkTitle")}</h3>
                <p className="text-xs md:text-sm text-[#8A7A72] mt-2 max-w-xl mx-auto">{t("research.benchmarkSubtitle")}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 md:p-5">
                {benchmarkRows.map((row) => (
                  <div key={row.brand} className="rounded-xl bg-[#FAF9F6] border border-[#E8E0D8] p-4 min-h-[180px] flex flex-col">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#8A7A72] mb-2">{t("research.tableBrand")}</p>
                    <h4 className="font-serif text-xl text-[#3A210F]">{row.brand}</h4>
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#8A7A72]">{t("research.tableMessage")}</p>
                    <p className="mt-1 text-sm font-semibold text-[#3A210F]">{row.message}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#8A7A72]">{t("research.tableObservation")}</p>
                    <p className="mt-1 text-sm text-[#6F625B] leading-relaxed">{row.observation}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="insights" className="py-16 md:py-24 bg-white scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xs uppercase tracking-[0.24em] text-[#3A210F] mb-4">05 — {t("insights.label")}</p>
              <h2 className="font-serif text-3xl md:text-5xl text-[#3A210F]">{t("insights.title")}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {insightCards.map((card, index) => (
                <article key={card.title} className="group rounded-2xl border border-[#E8E0D8] bg-[#FAF9F6] p-6 md:p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#FAF9F6] hover:shadow-lg">
                  <div className="flex flex-col items-center gap-3 mb-5">
                    <span className="w-10 h-10 rounded-full bg-white border border-[#E8E0D8] text-[#3A210F] text-sm font-semibold flex items-center justify-center transition-colors duration-300 group-hover:bg-[#3A210F] group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {card.score && <div className="text-[#3A210F] text-sm tracking-[0.08em]">{card.score}</div>}
                  </div>
                  <h3 className="text-lg font-semibold text-[#3A210F] mb-3">{card.title}</h3>
                  <p className="text-sm text-[#6F625B] leading-relaxed">{card.body}</p>
                </article>
              ))}
            </div>

            <article className="rounded-3xl border border-[#E8E0D8] bg-[#FAF9F6] p-6 md:p-8 shadow-sm">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <p className="text-xs uppercase tracking-[0.22em] text-[#3A210F] mb-3">Workflow</p>
                <h3 className="font-serif text-2xl md:text-3xl text-[#3A210F]">{t("insights.beforeAfterTitle")}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {beforeAfter.map((item, index) => (
                  <div key={item.label} className="relative">
                    <div className="h-full rounded-2xl bg-white border border-[#E8E0D8] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <span className="w-9 h-9 rounded-full bg-[#3A210F] text-white text-xs font-semibold flex items-center justify-center mx-auto mb-4">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#3A210F] mb-3">{item.label}</p>
                      <h4 className="font-serif text-lg text-[#3A210F] leading-snug">{item.value}</h4>
                      <p className="text-xs text-[#8A7A72] leading-relaxed mt-3">{item.note}</p>
                    </div>
                    {index !== beforeAfter.length - 1 && (
                      <div className="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 rounded-full bg-[#3A210F] text-white items-center justify-center">
                        <i className="ri-arrow-right-line text-sm" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="strategy" className="py-16 md:py-24 bg-[#FAF9F6] scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-[#3A210F] mb-4">06 {t("strategy.label")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3A210F] mb-5">{t("strategy.title")}</h2>
              {t("strategy.body") && <p className="text-[#6F625B] leading-relaxed">{t("strategy.body")}</p>}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {strategyProducts.map((product) => (
                <article key={product.product} className="rounded-3xl bg-white border border-[#E8E0D8] p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="font-serif text-2xl text-[#3A210F] text-center mb-5">{product.product}</h3>
                  <ImageSlot label={product.product} caption="" variant="square" compact showMeta={false} />
                  <div className="flex justify-center py-4 text-[#3A210F]">
                    <i className="ri-arrow-down-line text-xl" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.sections.map((section) => (
                      <div key={section.title} className="rounded-2xl bg-[#FAF9F6] border border-[#E8E0D8] p-5">
                        <p className="text-xs uppercase tracking-[0.22em] text-[#3A210F] mb-4">{section.title}</p>
                        <div className="space-y-3">
                          {section.items.map((item) => (
                            <p key={item} className="text-sm text-[#6F625B] leading-relaxed flex gap-2">
                              <i className="ri-check-line text-[#3A210F] mt-0.5" />
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <article className="rounded-3xl bg-white border border-[#E8E0D8] p-6 md:p-7">
                <h3 className="font-serif text-2xl text-[#3A210F] mb-3">{t("strategy.guidelineTitle")}</h3>
                <p className="text-sm text-[#6F625B] leading-relaxed mb-5">{t("strategy.guidelineBody")}</p>
                <p className="text-xs uppercase tracking-[0.22em] text-[#3A210F] mb-3">{t("strategy.guidelineComponents")}</p>
                <div className="flex flex-wrap gap-2">
                  {guidelineItems.map((item) => (
                    <span key={item} className="px-3 py-2 rounded-full bg-[#FAF9F6] border border-[#E8E0D8] text-xs font-semibold text-[#3A210F]">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
              <article className="rounded-3xl bg-[#3A210F] p-6 md:p-7 text-white">
                <h3 className="font-serif text-2xl mb-5">{t("strategy.supportTitle")}</h3>
                <div className="space-y-3">
                  {supportItems.map((item) => (
                    <p key={item} className="text-sm text-white/75 leading-relaxed flex gap-2">
                      <i className="ri-check-line text-[#FAF9F6] mt-0.5" />
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="reflection" className="py-20 md:py-28 bg-white scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-[#3A210F] mb-4 font-semibold">
              07 — {t("reflection.label")}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#3A210F] mb-14 md:mb-16">{t("reflection.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reflectionItems.map((item, index) => (
                <article
                  key={item.title}
                  className="bg-[#FAF9F6] rounded-2xl p-8 md:p-10 border border-[#E8E0D8] min-h-72 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="w-12 h-12 rounded-full bg-[#F2E4D8] text-[#3A210F] text-base font-bold flex items-center justify-center mb-7">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold text-[#3A210F] mb-5 leading-snug max-w-[260px]">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#6F625B] leading-relaxed max-w-[300px]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#3A210F]">
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
