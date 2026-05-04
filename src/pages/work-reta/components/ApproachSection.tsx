import { useTranslation } from 'react-i18next';

export default function ApproachSection() {
  const { t } = useTranslation('workReta');

  const items = [
    {
      title: t('approach.dataTitle'),
      desc: t('approach.dataDesc'),
      icon: 'ri-bar-chart-2-line',
    },
    {
      title: t('approach.actionTitle'),
      desc: t('approach.actionDesc'),
      icon: 'ri-delete-bin-6-line',
    },
    {
      title: t('approach.rewardTitle'),
      desc: t('approach.rewardDesc'),
      icon: 'ri-coin-line',
    },
    {
      title: t('approach.progressTitle'),
      desc: t('approach.progressDesc'),
      icon: 'ri-medal-line',
    },
  ];

  return (
    <section id="approach" className="py-24 md:py-32 bg-[#EDF8FB]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium text-center">
          05 — {t('toc.approach')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6 text-center">
          {t('approach.title')}
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto text-center">
          {t('approach.subtitle')}
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#5ECCE6]/30 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#5ECCE6]/10 flex items-center justify-center mb-4">
                <i className={`${item.icon} text-[#5ECCE6] text-xl`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
