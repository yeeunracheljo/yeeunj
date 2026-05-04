import { useTranslation } from 'react-i18next';

export default function SWOTAnalysis() {
  const { t } = useTranslation('workLG');

  const swotCards = [
    {
      title: t('swot.strengths'),
      items: t('swot.strengthsItems', { returnObjects: true }) as string[],
      color: "bg-[#94173F]/10 text-[#94173F]",
      borderColor: "border-[#94173F]/20",
    },
    {
      title: t('swot.opportunities'),
      items: t('swot.opportunitiesItems', { returnObjects: true }) as string[],
      color: "bg-[#94173F]/5 text-[#94173F]",
      borderColor: "border-[#94173F]/10",
    },
    {
      title: t('swot.weaknesses'),
      items: t('swot.weaknessesItems', { returnObjects: true }) as string[],
      color: "bg-gray-100 text-gray-600",
      borderColor: "border-gray-200",
    },
    {
      title: t('swot.threats'),
      items: t('swot.threatsItems', { returnObjects: true }) as string[],
      color: "bg-[#94173F]/10 text-[#94173F]",
      borderColor: "border-[#94173F]/10",
    },
  ];

  return (
    <section id="swot" className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4 block font-medium">
            06 — {t('toc.swot')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
            {t('swot.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {swotCards.map((card) => (
            <div
              key={card.title}
              className={`p-7 bg-white rounded-xl border ${card.borderColor} hover:shadow-sm transition-shadow`}
            >
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 ${card.color}`}
              >
                {card.title}
              </span>
              <ul className="space-y-3">
                {card.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-800 text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#94173F] shrink-0 mt-2" />
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
