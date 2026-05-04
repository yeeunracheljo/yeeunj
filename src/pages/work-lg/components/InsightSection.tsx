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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {insights.map((item) => (
            <div
              key={item.num}
              className="group relative bg-[#F8F9FA] rounded-xl p-7 md:p-8 transition-all duration-300 hover:shadow-md border border-gray-100 hover:border-[#94173F]/20"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#94173F]/10 flex items-center justify-center text-sm font-bold text-[#94173F] transition-colors duration-300 group-hover:bg-[#94173F] group-hover:text-white">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
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
