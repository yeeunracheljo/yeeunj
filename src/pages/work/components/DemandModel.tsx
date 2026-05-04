import { useTranslation } from 'react-i18next';

export default function DemandModel() {
  const { t } = useTranslation('work');

  const steps = [
    t('demand.step1'),
    t('demand.step2'),
    t('demand.step3'),
  ];

  const variables = t('demand.variables').split(',');

  return (
    <section id="strategy" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-sm tracking-[0.2em] text-[#FF7900] uppercase mb-6 block text-center">
              {t('demand.sectionTitle')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-4">
              {t('demand.title')}
            </h2>
            <p className="text-gray-500 text-lg">
              {t('demand.subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-[#FFF8F0] rounded-lg border border-[#FF7900]/20 hover:shadow-md transition-all"
                >
                  <span className="w-8 h-8 rounded-full bg-[#FF7900] text-white flex items-center justify-center text-sm font-semibold shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#FF7900]/10">
              <h3 className="text-sm tracking-[0.15em] text-gray-400 uppercase mb-4">
                {t('demand.variablesTitle')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {variables.map((variable, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-[#FFF8F0] text-[#FF7900] text-sm border border-[#FF7900]/20"
                  >
                    {variable}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}