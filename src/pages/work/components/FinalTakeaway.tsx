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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#FFF8F0] rounded-2xl p-8 md:p-10 min-h-72 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF7900]/10 hover:shadow-lg border border-gray-200 hover:border-[#FF7900]/30 flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center text-center">
                <span className="w-12 h-12 rounded-full bg-[#FF7900]/10 flex items-center justify-center text-base font-bold text-[#FF7900] mb-7 transition-colors duration-300 group-hover:bg-[#FF7900] group-hover:text-white">
                  {item.number}
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
