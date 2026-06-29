import { useTranslation } from 'react-i18next';

export default function KeyInsights() {
  const { t } = useTranslation('workUtkcc');

  const insights = [
    { title: t('insight.point1Title'), desc: t('insight.point1Desc') },
    { title: t('insight.point2Title'), desc: t('insight.point2Desc') },
    { title: t('insight.point3Title'), desc: t('insight.point3Desc') },
  ];

  return (
    <section id="insight" className="py-16 md:py-24 bg-[#013385]/[0.02]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#013385] uppercase mb-6 block font-medium text-center">
          09 — {t('insight.title')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-10 text-center">
          {t('insight.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 bg-white rounded-2xl border border-[#013385]/15 hover:border-[#013385]/30 min-h-72 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center text-base font-bold shrink-0 mb-7 transition-colors duration-300 group-hover:bg-[#013385] group-hover:text-white">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-5 leading-snug max-w-[260px]">{insight.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-[300px]">{insight.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
