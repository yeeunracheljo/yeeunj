import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

export default function MarketingInterpretation() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 1,
      icon: "ri-flashlight-line",
      title: t('marketing.card1Title', { defaultValue: 'Visibility as Trigger' }),
      shortDesc: t('marketing.p1'),
      before: '+68% Initial engagement lift',
      after: 'Initial engagement increased after demand posts were introduced',
      color: '#FF7900',
    },
    {
      id: 2,
      icon: "ri-exchange-line",
      title: t('marketing.card2Title', { defaultValue: 'Engagement ≠ Conversion' }),
      shortDesc: t('marketing.p2'),
      before: '28% Seller response rate',
      after: 'Seller response remained limited, constraining transaction completion',
      color: '#FF7900',
    },
  ];

  return (
    <section id="marketing" className="py-24 md:py-32 bg-[#FFFAF5]">
      <div className="max-w-6xl mx-auto px-6" ref={sectionRef}>
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className={`text-sm tracking-[0.2em] text-[#FF7900] uppercase mb-4 block text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {t('marketing.sectionTitle')}
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {t('marketing.title')}
          </h2>
          <p
            className={`text-gray-500 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {t('marketing.subtitle', { defaultValue: 'Two key insights that shaped our strategy' })}
          </p>
        </div>

        {/* Interactive cards + connector */}
        <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Connector line - desktop only */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div
              className={`w-16 h-16 rounded-full bg-[#FFEDD5] border-2 border-[#FF7900]/20 flex items-center justify-center shadow-lg transition-all duration-1000 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`}
            >
              <i className="ri-arrow-left-right-line text-[#D97706] text-xl" />
            </div>
          </div>

          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div
                className={`h-full rounded-2xl border-2 p-8 md:p-10 cursor-pointer transition-all duration-500 bg-white ${
                  activeCard === card.id
                    ? 'shadow-xl -translate-y-2 border-[#FF7900]/40'
                    : 'shadow-md border-gray-200/80 hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* Card header */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeCard === card.id ? 'scale-110 shadow-lg' : ''
                    }`}
                    style={{ backgroundColor: card.color }}
                  >
                    <i
                      className={`${card.icon} text-2xl text-white`}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>

                {/* Short description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {card.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom insight strip */}
        <div
          className={`mt-16 p-6 md:p-8 rounded-xl border border-[#FF7900]/10 text-center transition-all duration-700 delay-700 bg-[#FFF5EB] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF7900' }}>
                  <i className="ri-lightbulb-line text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {t('marketing.bottomLabel', { defaultValue: 'Key Takeaway' })}
                </span>
              </div>
              <div className="hidden md:block w-px h-8 bg-[#FF7900]/20" />
              <p className="text-gray-800 font-medium text-base md:text-lg">
                {t('marketing.bottomText', { defaultValue: 'Visibility triggers action — but structure sustains it.' })}
              </p>
            </div>
            <p className="text-gray-700 text-base md:text-lg text-center leading-relaxed">
              {t('marketing.p3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}