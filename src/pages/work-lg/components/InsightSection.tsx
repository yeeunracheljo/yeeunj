import { useTranslation } from 'react-i18next';

export default function InsightSection() {
  const { t } = useTranslation('workLG');

  const insights = [
    {
      num: '01',
      title: t('insight.card1Title'),
      desc: t('insight.card1Desc'),
    },
    {
      num: '02',
      title: t('insight.card2Title'),
      desc: t('insight.card2Desc'),
    },
    {
      num: '03',
      title: t('insight.card3Title'),
      desc: t('insight.card3Desc'),
    },
  ];

  return (
    <section id="insight" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-medium tracking-[0.25em] text-[#94173F] uppercase mb-4">
            10 — {t('toc.insight')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
            {t('insight.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item) => (
            <div
              key={item.num}
              className="group relative bg-[#F8F9FA] rounded-2xl p-8 md:p-10 min-h-72 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 hover:border-[#94173F]/30 flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center text-center">
                <span className="w-12 h-12 rounded-full bg-[#94173F]/10 flex items-center justify-center text-base font-bold text-[#94173F] mb-7 transition-colors duration-300 group-hover:bg-[#94173F] group-hover:text-white">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-5 max-w-[260px]">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed max-w-[300px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
