import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function IndexNav() {
  const { t } = useTranslation('home');
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const mainItems = [
    { number: "01", label: t('index.about'), href: "#about" },
    { number: "02", label: t('index.skills'), href: "#skills" },
    { number: "03", label: t('index.work'), href: "#work" },
  ];

  const workSubItems = [
    { num: "I", label: t('work.utkcc.title'), path: "/work/utkcc" },
    { num: "II", label: t('work.karrot.title'), path: "/work/karrot-campus-sprint" },
    { num: "III", label: t('work.anua.title'), path: "/work/anua-consumer-report" },
    { num: "IV", label: t('work.lg.title'), path: "/work/lg-interbrand-strategy" },
    { num: "V", label: t('work.macslearning.title'), path: "/work/macslearning" },
    { num: "VI", label: t('work.reta.title'), path: "/work/reta" },
  ];

  return (
    <section ref={sectionRef} className="py-28 md:py-40 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="bg-gradient-to-br from-white via-gray-50/40 to-white rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-8 md:p-14 lg:p-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20">
            {/* Left — Index Title */}
            <div className={`shrink-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#333] tracking-tighter">
                Index
              </h2>
            </div>

            {/* Right — Nav Items */}
            <div className="w-full max-w-lg">
              {/* 01 / 02 / 03 */}
              <div className="divide-y divide-gray-100">
                {mainItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.href)}
                    className={`group flex items-baseline gap-5 md:gap-6 w-full text-left py-4 md:py-5 cursor-pointer transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <span className="text-xs md:text-sm font-mono font-medium text-[#1876fb]/50 w-7 shrink-0 group-hover:text-[#1876fb] transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="text-lg md:text-xl lg:text-2xl font-medium text-[#333] group-hover:text-[#1876fb] transition-colors duration-300">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Sub Work Items — indented under 03 WORK */}
              <div className="w-full h-px bg-gray-100 mt-2 mb-1" />
              <div className="pl-10 md:pl-14 mt-0 space-y-0">
                {workSubItems.map((sub, idx) => (
                  <button
                    key={sub.path}
                    onClick={() => navigate(sub.path)}
                    className={`group flex items-baseline gap-3 md:gap-4 w-full text-left py-2 md:py-2.5 cursor-pointer transition-all duration-500 hover:pl-1 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${500 + idx * 60}ms` }}
                  >
                    <span className="text-xs font-mono font-medium text-[#1876fb]/50 group-hover:text-[#1876fb]/80 transition-colors shrink-0 w-4 text-right">
                      {sub.num}
                    </span>
                    <span className="text-sm md:text-base text-gray-400 group-hover:text-[#1876fb] transition-colors duration-300 leading-relaxed">
                      {sub.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
