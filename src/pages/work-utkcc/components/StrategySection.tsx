import { useTranslation } from 'react-i18next';
import BrandbookCarousel from './BrandbookCarousel';

export default function StrategySection() {
  const { t } = useTranslation('workUtkcc');

  const strategies = [
    { title: t('strategy.point1Title'), desc: t('strategy.point1Desc') },
    { title: t('strategy.point2Title'), desc: t('strategy.point2Desc') },
    { title: t('strategy.point3Title'), desc: t('strategy.point3Desc') },
  ];

  return (
    <section id="strategy" className="py-16 md:py-24 bg-[#013385]/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#013385] uppercase mb-6 block font-medium text-center">
          {t('strategy.sectionTitle')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-4 text-center">
          {t('strategy.title')}
        </h2>

        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-xl mx-auto text-center">
          {t('strategy.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-xl border border-[#013385]/15 hover:border-[#013385]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center text-lg mb-4">
                <span className="text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{strategy.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{strategy.desc}</p>
            </div>
          ))}
        </div>

        {/* Branding book carousel */}
        <BrandbookCarousel />
      </div>
    </section>
  );
}