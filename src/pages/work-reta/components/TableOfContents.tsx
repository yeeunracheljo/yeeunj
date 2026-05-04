import { useEffect, useState, useCallback } from "react";
import { useTranslation } from 'react-i18next';

export default function TableOfContents() {
  const { t } = useTranslation('workReta');
  const [activeId, setActiveId] = useState<string>("");

  const tocItems = [
    { id: "introduction", label: t('toc.introduction') },
    { id: "problem", label: t('toc.problem') },
    { id: "hypothesis", label: t('toc.hypothesis') },
    { id: "goToMarket", label: t('toc.goToMarket') },
    { id: "approach", label: t('toc.approach') },
    { id: "solution", label: t('app.title') },
    { id: "behavioralModel", label: t('toc.behavioralModel') },
    { id: "limitations", label: t('toc.limitations') },
    { id: "insight", label: t('toc.insight') },
    { id: "references", label: t('toc.references') },
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
    <div className="sticky top-[60px] z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
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
                    ? 'bg-[#5ECCE6]/10 text-[#5ECCE6]'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? 'text-[#5ECCE6]' : 'text-gray-300'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}