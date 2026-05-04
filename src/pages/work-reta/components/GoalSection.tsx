import { useTranslation } from 'react-i18next';
import { appFeatures } from '@/mocks/work-reta';

export default function GoalSection() {
  const { t } = useTranslation('workReta');

  const goals = [
    { title: t('goal.card1Title'), desc: t('goal.card1Desc'), icon: 'ri-earth-line' },
    { title: t('goal.card2Title'), desc: t('goal.card2Desc'), icon: 'ri-smartphone-line' },
    { title: t('goal.card3Title'), desc: t('goal.card3Desc'), icon: 'ri-hand-heart-line' },
    { title: t('goal.card4Title'), desc: t('goal.card4Desc'), icon: 'ri-medal-line' },
  ];

  return (
    <section id="goal" className="py-24 md:py-32 bg-[#EDF8FB]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium text-center">
          03 — {t('toc.goal')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6 text-center">
          {t('goal.title')}
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto text-center">
          {t('goal.subtitle')}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#5ECCE6]/30 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#5ECCE6]/10 flex items-center justify-center mb-4">
                <i className={`${goal.icon} text-[#5ECCE6] text-xl`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {goal.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {goal.desc}
              </p>
            </div>
          ))}
        </div>

        {/* App Features */}
        <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">
          {t('app.title')}
        </h3>
        <p className="text-gray-600 mb-12 max-w-3xl">
          {t('app.subtitle')}
        </p>

        <div className="space-y-6">
          {appFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-6 bg-white rounded-xl border border-gray-100"
            >
              <span className="text-2xl font-bold text-[#5ECCE6]/40 shrink-0 w-12">
                {feature.number}
              </span>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}