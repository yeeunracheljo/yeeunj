import { useTranslation } from 'react-i18next';

export default function ResultsSection() {
  const { t } = useTranslation('workLG');

  return (
    <section id="results" className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4 block font-medium">
            09 — {t('toc.results')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
            {t('results.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12 text-left">
          <div className="p-7 md:p-8 bg-white rounded-xl border border-gray-200 hover:border-[#94173F]/30 transition-colors">
            <span className="w-10 h-10 rounded-full bg-[#94173F]/10 text-[#94173F] flex items-center justify-center text-sm font-bold mb-5">
              01
            </span>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {t('results.strategy1Title')}
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {t('results.strategy1Desc')}
            </p>
          </div>

          <div className="p-7 md:p-8 bg-white rounded-xl border border-gray-200 hover:border-[#94173F]/30 transition-colors">
            <span className="w-10 h-10 rounded-full bg-[#94173F]/10 text-[#94173F] flex items-center justify-center text-sm font-bold mb-5">
              02
            </span>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {t('results.strategy2Title')}
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {t('results.strategy2Desc')}
            </p>
          </div>
        </div>

        <div className="p-8 md:p-10 bg-[#94173F] rounded-xl text-center">
          <i className="ri-double-quotes-l text-white/40 text-3xl mb-4 inline-block" />
          <p className="text-white text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
            {t('results.quote')}
          </p>
        </div>
      </div>
    </section>
  );
}