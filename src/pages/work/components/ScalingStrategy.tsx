import { useTranslation } from 'react-i18next';

export default function ScalingStrategy() {
  const { t } = useTranslation('work');

  const steps = [
    t('scaling.step1'),
    t('scaling.step2'),
    t('scaling.step3'),
    t('scaling.step4'),
  ];

  return (
    <section id="scaling" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] text-[#FF7900] uppercase mb-4 block text-center">
            {t('scaling.sectionTitle')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            {t('scaling.title')}
          </h2>
          <p className="text-gray-500 text-lg">{t('scaling.subtitle')}</p>
        </div>

        <div className="space-y-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-[#FFF8F0] rounded-xl border border-gray-200 hover:border-[#FF7900]/30 transition-colors hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-full bg-[#FF7900]/10 text-[#FF7900] flex items-center justify-center text-sm font-semibold shrink-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-gray-800 text-base leading-relaxed pt-1 font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}