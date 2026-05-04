import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

export default function Results() {
  const { t } = useTranslation('work');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const outcomes = [
    { tKey: 'results.outcome1', step: 1 },
    { tKey: 'results.outcome2', step: 2 },
    { tKey: 'results.outcome3', step: 3 },
    { tKey: 'results.outcome4', step: 4 },
    { tKey: 'results.outcome5', step: 5 },
  ];

  const patterns = [
    t('metrics.pattern1'),
    t('metrics.pattern2'),
    t('metrics.pattern3'),
  ];

  const cards = [
    {
      id: 1,
      icon: 'ri-flashlight-line',
      title: t('marketing.card1Title', { defaultValue: 'Visibility as Trigger' }),
      shortDesc: t('marketing.p1'),
      color: '#FF7900',
    },
    {
      id: 2,
      icon: 'ri-exchange-line',
      title: t('marketing.card2Title', { defaultValue: 'Engagement \u2260 Conversion' }),
      shortDesc: t('marketing.p2'),
      color: '#FF7900',
    },
  ];

  return (
    <section id="results" className="py-24 md:py-32 bg-white" ref={sectionRef}>
      {/* Section Header */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-16 md:mb-20">
        <span
          className={`text-sm tracking-[0.2em] text-[#FF7900] uppercase mb-4 block transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {t('results.sectionTitle')}
        </span>
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {t('results.title')}
        </h2>
      </div>

      {/* Two Column: Outcomes + Metrics */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 mb-24 md:mb-32">

        {/* LEFT: Outcomes Timeline */}
        <div
          className={`lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-8 md:p-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-8 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#FF7900]/10 flex items-center justify-center">
              <i className="ri-file-list-3-line text-[#FF7900] text-lg" />
            </div>
            {t('results.title')}
          </h3>

          <div className="relative pl-2">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#FF7900]/30 via-[#FF7900]/15 to-transparent rounded-full" />

            <div className="space-y-6">
              {outcomes.map((item, index) => (
                <div key={item.tKey} className="flex items-start gap-4 relative">
                  {/* Step circle */}
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold border-2 transition-all duration-500 ${
                      index < 3
                        ? 'bg-[#FF7900] border-[#FF7900] text-white'
                        : index === 3
                        ? 'bg-white border-gray-300 text-gray-400'
                        : 'bg-[#FF7900]/10 border-[#FF7900]/30 text-[#FF7900]'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    {index < 3 ? (
                      <i className="ri-check-line" />
                    ) : index === 3 ? (
                      <i className="ri-close-line" />
                    ) : (
                      <i className="ri-lightbulb-line" />
                    )}
                  </div>
                  {/* Text */}
                  <p className="text-gray-700 leading-relaxed pt-2">{t(item.tKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Key Metrics */}
        <div
          className={`lg:col-span-2 bg-[#FFF8F0] rounded-2xl border border-gray-100 p-8 md:p-10 flex flex-col transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#FF7900]/10 flex items-center justify-center">
              <i className="ri-bar-chart-2-line text-[#FF7900] text-lg" />
            </div>
            {t('metrics.title')}
          </h3>

          {/* Hero Number */}
          <div className="text-center mb-8">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em] mb-3 block">
              Activation Rate
            </span>
            <div className="text-7xl md:text-8xl font-bold text-[#FF7900] leading-none tracking-tight">
              33<span className="text-4xl md:text-5xl">%</span>
            </div>
            <p className="text-sm text-gray-400 mt-3">{t('metrics.note')}</p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#FF7900]/10 mb-6" />

          {/* Patterns */}
          <div className="space-y-3 flex-1">
            {patterns.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl px-4 py-3.5 flex items-start gap-3 border border-gray-100/80"
              >
                <div className="w-7 h-7 rounded-full bg-[#FF7900]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-[#FF7900]">{index + 1}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marketing Interpretation - Full Width */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative grid md:grid-cols-2 gap-6 lg:gap-10 items-stretch mb-16">
          {/* Connector */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div
              className={`w-14 h-14 rounded-full bg-[#FFEDD5] border-2 border-[#FF7900]/20 flex items-center justify-center shadow-md transition-all duration-1000 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <i className="ri-arrow-left-right-line text-[#D97706] text-lg" />
            </div>
          </div>

          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${700 + index * 150}ms` }}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div
                className={`h-full rounded-2xl border p-8 md:p-10 cursor-pointer transition-all duration-500 bg-white ${
                  activeCard === card.id
                    ? 'shadow-lg -translate-y-1.5 border-[#FF7900]/30'
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Top Label */}
                <span
                  className={`inline-block text-xs font-bold uppercase tracking-[0.15em] mb-4 transition-all duration-300 ${
                    activeCard === card.id ? 'text-[#FF7900]' : 'text-gray-400'
                  }`}
                >
                  Marketing Insight {String(index + 1).padStart(2, '0')}
                </span>

                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeCard === card.id ? 'scale-105 shadow-md' : ''
                    }`}
                    style={{ backgroundColor: card.color }}
                  >
                    <i className={`${card.icon} text-xl text-white`} />
                  </div>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all duration-300 ${
                      activeCard === card.id
                        ? 'bg-[#FF7900]/10 text-[#FF7900]'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {card.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Insight Strip */}
        <div
          className={`p-8 md:p-10 rounded-2xl border border-[#FF7900]/10 text-center transition-all duration-700 bg-[#FFF5EB] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#FF7900' }}
              >
                <i className="ri-lightbulb-line text-white text-lg" />
              </div>
              <div className="text-left">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                  {t('marketing.bottomLabel', { defaultValue: 'Key Takeaway' })}
                </span>
                <span className="text-sm text-gray-500">{t('marketing.bottomText', { defaultValue: 'Visibility triggers action \u2014 but structure sustains it.' })}</span>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#FF7900]/15" />
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl text-left">
              {t('marketing.p3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}