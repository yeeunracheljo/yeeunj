import { useTranslation } from 'react-i18next';

export default function KeyMetrics() {
  const { t } = useTranslation('work');

  const patterns = [
    t('metrics.pattern1'),
    t('metrics.pattern2'),
    t('metrics.pattern3'),
  ];

  return (
    <section id="metrics" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] text-[#FF7900] uppercase mb-4 block text-center">
            {t('metrics.sectionTitle')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            {t('metrics.title')}
          </h2>
          <p className="text-gray-500 text-lg">{t('metrics.subtitle')}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-[#FFF8F0] rounded-2xl border border-gray-200 p-10 md:p-14 text-center">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3 block">
              Activation Rate
            </span>
            <div className="text-6xl md:text-7xl font-bold text-[#FF7900] mb-2">
              33%
            </div>
            <p className="text-sm text-gray-400 mb-8">
              {t('metrics.note')}
            </p>

            <div className="space-y-4 text-left max-w-lg mx-auto">
              {patterns.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF7900]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[#FF7900]">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}