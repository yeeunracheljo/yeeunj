import { useTranslation } from 'react-i18next';

export default function BenchmarkInsight() {
  const { t } = useTranslation('workLG');

  const cases = [
    {
      brand: t('benchmark.samsung'),
      tagline: t('benchmark.samsungTagline'),
      description: t('benchmark.samsungDesc'),
    },
    {
      brand: t('benchmark.nike'),
      tagline: t('benchmark.nikeTagline'),
      description: t('benchmark.nikeDesc'),
    },
  ];

  return (
    <section id="benchmark" className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium text-center">
          07 — {t('toc.benchmark')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-8 text-center">
          {t('benchmark.title')}
        </h2>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl mx-auto text-center">
          {t('benchmark.desc')}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
          {cases.map((item, index) => (
            <div
              key={index}
              className="p-7 bg-white rounded-xl border border-gray-200 hover:border-[#94173F]/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#94173F]/10 flex items-center justify-center">
                  <i className="ri-building-4-line text-[#94173F] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.brand}
                  </h3>
                  <span className="text-sm text-[#94173F] font-medium">
                    {item.tagline}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 text-left">
          <div className="p-6 bg-white rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <i className="ri-check-double-line text-[#94173F] text-xl" />
              <h4 className="text-lg font-semibold text-gray-900">{t('benchmark.common')}</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {t('benchmark.commonDesc')}
            </p>
          </div>

          <div className="p-6 bg-[#94173F]/5 rounded-xl border border-[#94173F]/20">
            <div className="flex items-center gap-3 mb-3">
              <i className="ri-alert-line text-[#94173F] text-xl" />
              <h4 className="text-lg font-semibold text-gray-900">{t('benchmark.gap')}</h4>
            </div>
            <p className="text-gray-800 text-sm leading-relaxed font-medium">
              {t('benchmark.gapDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}