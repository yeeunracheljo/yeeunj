import { useTranslation } from 'react-i18next';

export default function ResultsSection() {
  const { t } = useTranslation('work');

  return (
    <section id="results" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] text-[#FF7900] uppercase mb-4 block text-center">
            {t('results.sectionTitle')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
            {t('results.title')}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-[#FFF8F0] rounded-2xl border border-gray-200 p-8 md:p-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FF7900]/10 flex items-center justify-center shrink-0">
                <i className="ri-check-line text-[#FF7900] text-lg" />
              </div>
              <p className="text-gray-700 leading-relaxed">{t('results.outcome1')}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FF7900]/10 flex items-center justify-center shrink-0">
                <i className="ri-check-line text-[#FF7900] text-lg" />
              </div>
              <p className="text-gray-700 leading-relaxed">{t('results.outcome2')}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FF7900]/10 flex items-center justify-center shrink-0">
                <i className="ri-check-line text-[#FF7900] text-lg" />
              </div>
              <p className="text-gray-700 leading-relaxed">{t('results.outcome3')}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                <i className="ri-close-line text-gray-500 text-lg" />
              </div>
              <p className="text-gray-700 leading-relaxed">{t('results.outcome4')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}