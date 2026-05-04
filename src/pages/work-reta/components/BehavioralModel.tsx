import { useTranslation } from 'react-i18next';

export default function BehavioralModel() {
  const { t } = useTranslation('workReta');

  const steps = [
    {
      title: t('model.triggerTitle'),
      desc: t('model.triggerDesc'),
      icon: 'ri-flashlight-line',
    },
    {
      title: t('model.actionTitle'),
      desc: t('model.actionDesc'),
      icon: 'ri-cursor-line',
    },
    {
      title: t('model.rewardTitle'),
      desc: t('model.rewardDesc'),
      icon: 'ri-gift-line',
    },
    {
      title: t('model.repeatTitle'),
      desc: t('model.repeatDesc'),
      icon: 'ri-refresh-line',
    },
  ];

  return (
    <section id="behavioralModel" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium text-center">
          07 — {t('toc.behavioralModel')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6 text-center">
          {t('model.title')}
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto text-center">
          {t('model.subtitle')}
        </p>

        {/* Loop visualization */}
        <div className="relative">
          {/* Arrow connectors for desktop */}
          <div className="hidden md:flex absolute top-16 left-[12.5%] right-[12.5%] items-center justify-between z-0">
            <div className="w-full h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Arrow between cards */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-16 z-20 items-center">
                    <i className="ri-arrow-right-line text-gray-300 text-lg" />
                  </div>
                )}

                <div className="p-6 bg-[#EDF8FB] rounded-xl border border-gray-100 text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-[#5ECCE6]/10 flex items-center justify-center mx-auto mb-4">
                    <i className={`${step.icon} text-[#5ECCE6] text-2xl`} />
                  </div>
                  <span className="text-xs font-bold text-[#5ECCE6] uppercase tracking-wider block mb-3">
                    Step {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
