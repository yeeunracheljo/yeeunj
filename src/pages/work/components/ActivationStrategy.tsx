import { useTranslation } from 'react-i18next';

export default function ActivationStrategy() {
  const { t } = useTranslation('work');

  const strategies = [
    {
      title: t('activation.strategy1Title'),
      description: t('activation.strategy1Desc'),
      icon: "ri-building-line",
    },
    {
      title: t('activation.strategy2Title'),
      description: t('activation.strategy2Desc'),
      icon: "ri-cloud-line",
    },
    {
      title: t('activation.strategy3Title'),
      description: t('activation.strategy3Desc'),
      icon: "ri-book-line",
    },
  ];

  return (
    <section id="execution" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#FF7900] uppercase mb-8 block text-center">
          {t('activation.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-16">
          {t('activation.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="group p-8 bg-[#FFF8F0] rounded-xl border border-gray-200 hover:border-[#FF7900]/30 transition-colors hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-[#FF7900]/10 flex items-center justify-center mb-6 group-hover:bg-[#FF7900]/20 transition-colors">
                <i className={`${strategy.icon} text-[#FF7900] text-xl`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {strategy.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}