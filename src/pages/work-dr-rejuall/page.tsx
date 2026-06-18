import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import drRejuallCover from "@/assets/dr-rejuall-cover.svg";

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
  const tags = t("project.tags").split(",");
  const roleItems = t("role.items").split("|");
  const approachItems = t("approach.items").split("|");
  const highlightItems = t("highlights.items").split("|");

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
          <Link
            to="/"
            className="text-sm font-medium tracking-wide text-[#2F2A27] hover:text-[#B88B78] transition-colors"
          >
            {tc("nav.home")}
          </Link>
          <span className="text-sm font-medium tracking-wide flex items-center gap-2 text-[#2F2A27]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88B78] inline-block" />
            {tc("nav.work")}
          </span>
          <Link
            to="/"
            className="text-sm font-medium tracking-wide text-[#2F2A27] hover:text-[#B88B78] transition-colors"
          >
            {tc("nav.about")}
          </Link>
          <Link
            to="/"
            className="text-sm font-medium tracking-wide text-[#2F2A27] hover:text-[#B88B78] transition-colors"
          >
            {tc("nav.contact")}
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      <main>
        <section className="pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#B88B78] mb-5">
                {t("hero.label")}
              </p>
              <h1 className="font-serif text-4xl md:text-6xl text-[#2F2A27] leading-tight mb-5">
                {t("project.title")}
              </h1>
              <p className="text-lg md:text-xl text-[#6F625B] leading-relaxed mb-8">
                {t("project.subtitle")}
              </p>
              <div className="flex items-center gap-3 flex-wrap text-sm text-[#8E695A]">
                <span className="font-semibold uppercase tracking-wider">{t("project.institution")}</span>
                <span className="text-[#D9B9A8]">|</span>
                <span>{t("project.period")}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-md text-xs font-medium bg-white border border-[#E9CDC0] text-[#6F625B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <img
              src={drRejuallCover}
              alt={t("project.title")}
              className="w-full rounded-2xl shadow-xl border border-white object-cover"
            />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-4">
                {t("overview.title")}
              </p>
              <p className="text-2xl md:text-3xl font-serif text-[#2F2A27] leading-snug">
                {t("overview.body")}
              </p>
            </article>
            <aside className="bg-[#F9F5F1] rounded-2xl p-6 border border-[#EFE5DD]">
              <h2 className="text-sm font-semibold text-[#2F2A27] mb-4">{t("role.title")}</h2>
              <div className="space-y-3">
                {roleItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[#6F625B]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B88B78] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-white rounded-2xl p-7 md:p-8 border border-[#EFE5DD]">
              <h2 className="font-serif text-2xl text-[#2F2A27] mb-5">{t("challenge.title")}</h2>
              <p className="text-[#6F625B] leading-relaxed">{t("challenge.body")}</p>
            </article>
            <article className="bg-[#2F2A27] rounded-2xl p-7 md:p-8 text-white">
              <h2 className="font-serif text-2xl mb-5">{t("approach.title")}</h2>
              <div className="space-y-4">
                {approachItems.map((item) => (
                  <p key={item} className="text-white/75 leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-[#2F2A27] mb-10">{t("highlights.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {highlightItems.map((item, index) => (
                <div key={item} className="p-6 rounded-2xl bg-[#F9F5F1] border border-[#EFE5DD]">
                  <span className="text-sm font-semibold text-[#B88B78]">0{index + 1}</span>
                  <p className="mt-4 text-[#2F2A27] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#F9F5F1]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B88B78] mb-5">
              {t("insight.title")}
            </p>
            <p className="font-serif text-2xl md:text-4xl text-[#2F2A27] leading-snug">
              {t("insight.body")}
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#2F2A27]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-10">
              {tc("nav.otherProjects")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {otherProjects.map((project) => (
                <Link
                  key={project.title}
                  to={project.path}
                  className="group p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all text-left cursor-pointer w-full block"
                >
                  <h3 className="text-sm font-semibold text-white leading-snug">
                    {project.title}
                  </h3>
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
