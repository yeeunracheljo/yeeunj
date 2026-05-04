import { useTranslation } from 'react-i18next';

export default function KeyInsights() {
  const { t } = useTranslation('workUtkcc');

  const insights = [
    { title: t('insight.point1Title'), desc: t('insight.point1Desc'), icon: 'ri-repeat-line' },
    { title: t('insight.point2Title'), desc: t('insight.point2Desc'), icon: 'ri-flow-chart' },
    { title: t('insight.point3Title'), desc: t('insight.point3Desc'), icon: 'ri-heart-3-line' },
  ];

  return (
    <section id="insight" className="py-16 md:py-24 bg-[#013385]/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#013385] uppercase mb-6 block font-medium text-center">
          09 — {t('insight.title')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-10 text-center">
          {t('insight.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-[#013385]/15 hover:border-[#013385]/30 transition-colors flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center text-xl shrink-0 mb-4">
                <i className={insight.icon} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{insight.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{insight.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
