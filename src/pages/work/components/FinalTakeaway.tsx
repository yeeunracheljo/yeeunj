import { useTranslation } from 'react-i18next';

export default function FinalTakeaway() {
  const { t } = useTranslation('work');

  const insights = [
    {
      number: '01',
      title: t('takeaway.point1Title'),
      desc: t('takeaway.point1Desc'),
    },
    {
      number: '02',
      title: t('takeaway.point2Title'),
      desc: t('takeaway.point2Desc'),
    },
    {
      number: '03',
      title: t('takeaway.point3Title'),
      desc: t('takeaway.point3Desc'),
    },
  ];

  return (
    <section id="insight" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="block text-center text-xs font-medium tracking-[0.25em] text-[#FF7900] uppercase mb-4">
            {t('takeaway.sectionTitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
            {t('takeaway.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {insights.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#FFF8F0] rounded-xl p-7 md:p-8 transition-all duration-300 hover:bg-[#FF7900]/10 hover:shadow-lg border border-gray-200 hover:border-[#FF7900]/30"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#FF7900]/10 flex items-center justify-center text-sm font-bold text-[#FF7900] transition-colors duration-300 group-hover:bg-[#FF7900] group-hover:text-white">
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