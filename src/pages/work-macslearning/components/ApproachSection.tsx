import { useTranslation } from 'react-i18next';
import { macsLearningApproach } from '@/mocks/work-macslearning';

export default function ApproachSection() {
  const { t } = useTranslation('workMacsLearning');

  return (
    <section id="approach" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#8B6914] uppercase mb-8 block font-medium text-center">
          {t('approach.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-4 text-center">
          {t('approach.title')}
        </h2>
        <p className="text-gray-500 text-lg text-center mb-16">
          {t('approach.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {macsLearningApproach.map((strategy, index) => (
            <div
              key={index}
              className="p-8 bg-[#fbffab]/10 rounded-xl border border-gray-100 hover:border-[#fbffab] transition-all hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-xl bg-[#fbffab] flex items-center justify-center mb-6">
                <i className={`${strategy.icon} text-[#8B6914] text-2xl`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t(`approach.strategy${index + 1}Title`)}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {t(`approach.strategy${index + 1}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}