import { useTranslation } from 'react-i18next';

export default function HypothesisSection() {
  const { t } = useTranslation('workReta');

  const steps = [
    {
      title: t('hypothesis.step1Title'),
      desc: t('hypothesis.step1Desc'),
      icon: 'ri-eye-line',
    },
    {
      title: t('hypothesis.step2Title'),
      desc: t('hypothesis.step2Desc'),
      icon: 'ri-heart-3-line',
    },
    {
      title: t('hypothesis.step3Title'),
      desc: t('hypothesis.step3Desc'),
      icon: 'ri-loop-right-line',
    },
  ];

  return (
    <section id="hypothesis" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium text-center">
          03 — {t('toc.hypothesis')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6 text-center">
          {t('hypothesis.title')}
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto text-center">
          {t('hypothesis.subtitle')}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-[#EDF8FB] rounded-xl border border-gray-100 hover:border-[#5ECCE6]/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#5ECCE6]/10 flex items-center justify-center mb-4">
                <i className={`${step.icon} text-[#5ECCE6] text-xl`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
