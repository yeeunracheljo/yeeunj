import { useTranslation } from 'react-i18next';

export default function ProjectGoal() {
  const { t } = useTranslation('workLG');

  const pillars = [
    { title: t('goal.pillar1'), description: t('goal.pillar1Desc') },
    { title: t('goal.pillar2'), description: t('goal.pillar2Desc') },
    { title: t('goal.pillar3'), description: t('goal.pillar3Desc') },
  ];

  return (
    <section id="goal" className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium text-center">
          05 — {t('toc.goal')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-8 text-center">
          {t('goal.title')}
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-16 max-w-3xl mx-auto text-center">
          {t('goal.desc')}
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-7 bg-white rounded-xl border border-gray-200 hover:border-[#94173F]/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-[#94173F]/10 flex items-center justify-center mb-5">
                <span className="text-[#94173F] font-bold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}