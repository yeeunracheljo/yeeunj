import { useTranslation } from 'react-i18next';

export default function InsightSection() {
  const { t } = useTranslation('workMacsLearning');

  const insights = [
    { num: '01', key: 1 },
    { num: '02', key: 2 },
    { num: '03', key: 3 },
    { num: '04', key: 4 },
  ];

  return (
    <section id="insight" className="py-24 md:py-32 bg-[#fbffab]/5">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#8B6914] uppercase mb-8 block font-medium text-center">
          {t('insight.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-16 text-center">
          {t('insight.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-7 md:p-8 transition-all duration-300 hover:shadow-md border border-gray-100 hover:border-[#fbffab]"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-[#fbffab] flex items-center justify-center text-base font-bold text-[#8B6914] transition-colors duration-300 group-hover:bg-[#8B6914] group-hover:text-white">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                    {t(`insight.point${item.key}Title`)}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {t(`insight.point${item.key}Desc`)}
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