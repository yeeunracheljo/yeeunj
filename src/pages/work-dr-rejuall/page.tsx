import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const otherProjects = [
  { title: "Karrot Campus Sprint", path: "/work/karrot-campus-sprint" },
  { title: "Anua Consumer Behavior Report", path: "/work/anua-consumer-report" },
  { title: "LG Interbrand Top 100 Strategy", path: "/work/lg-interbrand-strategy" },
  { title: "Reta", path: "/work/reta" },
  { title: "Macs Learning Lab", path: "/work/macslearning" },
  { title: "UTKCC", path: "/work/utkcc" },
];

export default function WorkDrRejuall() {
  const { t } = useTranslation("workDrRejuall");
  const { t: tc } = useTranslation("common");
  const [activeId, setActiveId] = useState("about");

  const split = (key: string) => t(key).split("|");
  const roleItems = split("role.items").map((item) => {
    const [title, body] = item.split("~");
    return { title, body };
  });
  const kpiItems = split("performance.kpis").map((item) => {
    const [metric, result, percent] = item.split("~");
    return { metric, result, percent: Number(percent) || 0 };
  });
  const achievementItems = split("performance.achievements");
  const researchSources = split("research.sources");
  const researchProcess = split("research.process");
  const insightItems = split("insights.items").map((item) => {
    const [title, body, action] = item.split("~");
    return { title, body, action };
  });
  const deliverableItems = split("deliverables.items");
  const statusItems = split("deliverables.status");
  const supportItems = split("deliverables.support");
  const impactItems = split("impact.items").map((item) => {
    const [insight, action] = item.split("~");
    return { insight, action };
  });
  const reflectionItems = split("reflection.items").map((item) => {
    const [title, body] = item.split("~");
    return { title, body };
  });

  const tocItems = [
    { id: "about", label: t("toc.about") },
    { id: "role", label: t("toc.role") },
    { id: "challenge", label: t("toc.challenge") },
    { id: "performance", label: t("toc.performance") },
    { id: "optimization", label: t("toc.optimization") },
    { id: "research", label: t("toc.research") },
    { id: "insights", label: t("toc.insights") },
    { id: "deliverables", label: t("toc.deliverables") },
    { id: "impact", label: t("toc.impact") },
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
    <div className="min-h-screen bg-[#F9F5F1]">
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

        <section id="about" className="py-16 md:py-24 bg-white scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">01 {t("about.label")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] leading-tight">
                {t("about.title")}
              </h2>
            </div>
            <div className="space-y-5 text-[#6F625B] leading-relaxed">
              <p>{t("about.body1")}</p>
              <p>{t("about.body2")}</p>
            </div>
          </div>
        </section>

        <section id="role" className="py-16 md:py-24 bg-[#F9F5F1] scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">02 {t("role.label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] mb-10">{t("role.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {roleItems.map((item) => (
                <article key={item.title} className="bg-white rounded-2xl p-6 border border-[#EFE5DD]">
                  <h3 className="text-base font-semibold text-[#2F2A27] mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#6F625B]">{item.body}</p>
                </article>
              ))}
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

        <section id="performance" className="py-16 md:py-24 bg-[#F9F5F1] scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">04 {t("performance.label")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27]">{t("performance.title")}</h2>
              <p className="mt-3 text-[#6F625B]">{t("performance.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#EFE5DD]">
                <div className="space-y-5">
                  {kpiItems.map((item) => {
                    const width = Math.min(item.percent, 120);
                    const isBudget = item.metric.toLowerCase().includes("budget") || item.metric.includes("예산");
                    return (
                      <div key={item.metric}>
                        <div className="flex items-end justify-between gap-4 mb-2">
                          <div>
                            <p className="text-sm font-semibold text-[#2F2A27]">{item.metric}</p>
                            <p className="text-xs text-[#8A7A72]">{item.result}</p>
                          </div>
                          <span className="text-sm font-semibold text-[#8E695A]">{item.result}</span>
                        </div>
                        <div className="h-3 rounded-full bg-[#EFE5DD] overflow-hidden">
                          <div
                            className={`h-full rounded-full ${isBudget ? "bg-[#C7A18D]" : "bg-[#8E695A]"}`}
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <aside className="bg-[#2F2A27] rounded-2xl p-7 md:p-8 text-white">
                <h3 className="font-serif text-2xl mb-5">{t("performance.achievementTitle")}</h3>
                <div className="space-y-4">
                  {achievementItems.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/75">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D9B9A8] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="optimization" className="py-16 md:py-24 bg-white scroll-mt-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">05 {t("optimization.label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] mb-6">{t("optimization.title")}</h2>
            <p className="text-[#6F625B] leading-relaxed">{t("optimization.body")}</p>
          </div>
        </section>

        <section id="research" className="py-16 md:py-24 bg-[#F9F5F1] scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">06 {t("research.label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] mb-8">{t("research.title")}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
              <article className="bg-white rounded-2xl p-7 border border-[#EFE5DD]">
                <p className="text-sm font-semibold text-[#8E695A] mb-3">{t("research.questionLabel")}</p>
                <p className="font-serif text-2xl text-[#2F2A27] leading-snug">{t("research.question")}</p>
                <div className="mt-8">
                  <p className="text-sm font-semibold text-[#2F2A27] mb-3">{t("research.sourceLabel")}</p>
                  <div className="flex flex-wrap gap-2">
                    {researchSources.map((source) => (
                      <span key={source} className="px-3 py-1.5 rounded-md bg-[#F9F5F1] text-xs text-[#6F625B] border border-[#EFE5DD]">
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-2xl p-7 border border-[#EFE5DD]">
                <p className="text-sm font-semibold text-[#2F2A27] mb-5">{t("research.processLabel")}</p>
                <div className="space-y-3">
                  {researchProcess.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#F9F5F1] border border-[#EFE5DD] flex items-center justify-center text-xs font-semibold text-[#8E695A]">
                        {index + 1}
                      </span>
                      <span className="text-sm text-[#6F625B]">{step}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="insights" className="py-16 md:py-24 bg-white scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">07 {t("insights.label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] mb-10">{t("insights.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {insightItems.map((item) => (
                <article key={item.title} className="rounded-2xl p-6 border border-[#EFE5DD] bg-[#F9F5F1]">
                  <h3 className="font-semibold text-[#2F2A27] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#6F625B] leading-relaxed mb-5">{item.body}</p>
                  <p className="text-sm font-semibold text-[#8E695A] leading-relaxed">{item.action}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="deliverables" className="py-16 md:py-24 bg-[#F9F5F1] scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">08 {t("deliverables.label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] mb-10">{t("deliverables.title")}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <article className="lg:col-span-2 bg-white rounded-2xl p-7 border border-[#EFE5DD]">
                <h3 className="text-lg font-semibold text-[#2F2A27] mb-4">{t("deliverables.productTitle")}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {deliverableItems.map((item) => (
                    <div key={item} className="rounded-xl bg-[#F9F5F1] border border-[#EFE5DD] p-4 text-sm text-[#6F625B]">
                      {item}
                    </div>
                  ))}
                </div>
              </article>
              <aside className="space-y-5">
                <div className="bg-white rounded-2xl p-6 border border-[#EFE5DD]">
                  <h3 className="text-base font-semibold text-[#2F2A27] mb-4">{t("deliverables.statusTitle")}</h3>
                  <div className="space-y-3">
                    {statusItems.map((item) => (
                      <p key={item} className="text-sm text-[#6F625B] leading-relaxed">{item}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-[#EFE5DD]">
                  <h3 className="text-base font-semibold text-[#2F2A27] mb-4">{t("deliverables.supportTitle")}</h3>
                  <div className="space-y-3">
                    {supportItems.map((item) => (
                      <p key={item} className="text-sm text-[#6F625B] leading-relaxed">{item}</p>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="impact" className="py-16 md:py-24 bg-white scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">09 {t("impact.label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] mb-10">{t("impact.title")}</h2>
            <div className="overflow-hidden rounded-2xl border border-[#EFE5DD]">
              {impactItems.map((item, index) => (
                <div key={item.insight} className={`grid grid-cols-1 md:grid-cols-2 ${index !== impactItems.length - 1 ? "border-b border-[#EFE5DD]" : ""}`}>
                  <div className="bg-[#F9F5F1] p-5 text-sm font-semibold text-[#2F2A27]">{item.insight}</div>
                  <div className="bg-white p-5 text-sm text-[#6F625B]">{item.action}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reflection" className="py-16 md:py-24 bg-[#F9F5F1] scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">10 {t("reflection.label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2F2A27] mb-10">{t("reflection.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {reflectionItems.map((item) => (
                <article key={item.title} className="bg-white rounded-2xl p-6 border border-[#EFE5DD]">
                  <h3 className="text-base font-semibold text-[#2F2A27] mb-3">{item.title}</h3>
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
