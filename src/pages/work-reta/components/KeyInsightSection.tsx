import { useTranslation } from 'react-i18next';

export default function KeyInsightSection() {
  const { t } = useTranslation('workReta');

  const insights = [
    {
      number: '01',
      title: t('insight.i1Title'),
      desc: t('insight.i1Desc'),
    },
    {
      number: '02',
      title: t('insight.i2Title'),
      desc: t('insight.i2Desc'),
    },
    {
      number: '03',
      title: t('insight.i3Title'),
      desc: t('insight.i3Desc'),
    },
  ];

  return (
    <section id="insight" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium">
          09 — {t('toc.insight')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-12">
          {t('insight.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {insights.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#EDF8FB] rounded-xl p-7 md:p-8 transition-all duration-300 hover:bg-[#5ECCE6]/5 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#5ECCE6]/10 flex items-center justify-center text-sm font-bold text-[#5ECCE6] transition-colors duration-300 group-hover:bg-[#5ECCE6] group-hover:text-white">
                  {item.number}
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
