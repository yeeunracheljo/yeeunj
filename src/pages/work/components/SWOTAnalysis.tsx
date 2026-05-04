import { useTranslation } from 'react-i18next';

export default function SWOTAnalysis() {
  const { t } = useTranslation('work');

  const swotCards = [
    {
      title: t('swot.strengths'),
      items: t('swot.strengthsItems', { returnObjects: true }) as string[],
      color: "bg-[#FF7900]/10 text-[#FF7900]",
      borderColor: "border-[#FF7900]/20",
    },
    {
      title: t('swot.opportunities'),
      items: t('swot.opportunitiesItems', { returnObjects: true }) as string[],
      color: "bg-[#E85D04]/10 text-[#E85D04]",
      borderColor: "border-[#E85D04]/20",
    },
    {
      title: t('swot.weaknesses'),
      items: t('swot.weaknessesItems', { returnObjects: true }) as string[],
      color: "bg-[#F4A261]/10 text-[#F4A261]",
      borderColor: "border-[#F4A261]/20",
    },
    {
      title: t('swot.threats'),
      items: t('swot.threatsItems', { returnObjects: true }) as string[],
      color: "bg-[#C84A00]/10 text-[#C84A00]",
      borderColor: "border-[#C84A00]/20",
    },
  ];

  return (
    <section id="analysis" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] text-[#FF7900] uppercase mb-4 block text-center">
            {t('swot.sectionTitle')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
            {t('swot.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {swotCards.map((card) => (
            <div
              key={card.title}
              className={`p-6 bg-[#FFF8F0] rounded-xl border ${card.borderColor} hover:shadow-md transition-all`}
            >
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${card.color}`}
              >
                {card.title}
              </span>
              <ul className="space-y-3">
                {card.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}