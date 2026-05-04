import { useTranslation } from 'react-i18next';

export default function ProblemStatement() {
  const { t } = useTranslation('workLG');

  return (
    <section id="problem" className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium text-center">
          03 — {t('toc.problem')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-12 text-center">
          {t('problem.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
          <div className="p-7 bg-white rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#94173F]/10 text-[#94173F] flex items-center justify-center shrink-0">
                <i className="ri-alert-line text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{t('problem.card1Title')}</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {t('problem.card1Desc')}
            </p>
          </div>

          <div className="p-7 bg-white rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#94173F]/10 text-[#94173F] flex items-center justify-center shrink-0">
                <i className="ri-user-search-line text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{t('problem.card2Title')}</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {t('problem.card2Desc')}
            </p>
          </div>
        </div>

        <div className="p-7 bg-[#94173F]/10 rounded-xl border-2 border-[#94173F]/30 text-left">
          <div className="flex items-start gap-3">
            <i className="ri-key-2-line text-[#94173F] text-xl shrink-0 mt-0.5" />
            <p className="text-gray-900 text-base md:text-lg leading-relaxed">
              <span className="text-[#94173F] font-semibold">{t('problem.insightLabel')}</span>
              {' '}
              {t('problem.insight')}
            </p>
          </div>
        </div>

        {/* Gen Z Analysis — merged into Problem */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-12 text-center">
            {t('genz.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
            <div className="p-7 bg-white rounded-xl border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-5">
                {t('genz.top100Title')}
              </h3>
              <ul className="space-y-3">
                {[t('genz.top100p1'), t('genz.top100p2'), t('genz.top100p3')].map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-800">
                    <span className="w-5 h-5 rounded-full bg-[#94173F]/10 text-[#94173F] flex items-center justify-center text-xs shrink-0">
                      <i className="ri-check-line" />
                    </span>
                    <span className="text-sm leading-relaxed font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-7 bg-white rounded-xl border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-5">
                {t('genz.brandValueTitle')}
              </h3>
              <ul className="space-y-3">
                {[t('genz.brandValuep1'), t('genz.brandValuep2'), t('genz.brandValuep3')].map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-800">
                    <span className="w-5 h-5 rounded-full bg-[#94173F]/10 text-[#94173F] flex items-center justify-center text-xs shrink-0">
                      <i className="ri-check-line" />
                    </span>
                    <span className="text-sm leading-relaxed font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-7 bg-[#94173F] rounded-xl">
            <div className="flex items-center gap-3 mb-5">
              <i className="ri-emotion-unhappy-line text-white text-xl" />
              <h3 className="text-white text-lg font-semibold">
                {t('genz.title')}
              </h3>
            </div>
            <div className="space-y-3">
              {[t('genz.stat1'), t('genz.stat2'), t('genz.stat3')].map((stat, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/30 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-white text-sm leading-relaxed font-medium">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}