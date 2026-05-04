import { useTranslation } from 'react-i18next';
import { macsLearningResults } from '@/mocks/work-macslearning';

export default function ResultsSection() {
  const { t } = useTranslation('workMacsLearning');

  return (
    <section id="results" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#8B6914] uppercase mb-8 block font-medium text-center">
          {t('results.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-16 text-center">
          {t('results.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {macsLearningResults.map((result, index) => (
            <div
              key={index}
              className="p-8 bg-[#fbffab]/10 rounded-xl border border-gray-100 hover:border-[#fbffab] transition-all hover:shadow-md text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#fbffab] flex items-center justify-center mx-auto mb-6">
                <i className={`${result.icon} text-[#8B6914] text-2xl`} />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t(`results.metric${index + 1}`)}
              </h3>

              <span className="inline-block px-4 py-1.5 rounded-full bg-[#fbffab]/40 text-[#8B6914] text-sm font-semibold mb-4">
                {t(`results.metric${index + 1}Change`)}
              </span>

              <p className="text-gray-600 text-sm leading-relaxed">
                {t(`results.metric${index + 1}Detail`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}