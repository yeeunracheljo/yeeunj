import { useTranslation } from 'react-i18next';

export default function BrandMetricsChart() {
  const { t } = useTranslation('workLG');

  return (
    <section id="metrics" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4 block font-medium">
            {t('metrics.sectionTitle')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-3">
            {t('metrics.title')}
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            {t('metrics.tagline')}
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-[#F8F9FA] rounded-xl text-center">
            <span className="text-3xl md:text-4xl font-bold text-[#94173F] block mb-1">97</span>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Interbrand Rank</span>
          </div>
          <div className="p-6 bg-[#F8F9FA] rounded-xl text-center">
            <span className="text-3xl md:text-4xl font-bold text-[#94173F] block mb-1">+38.7%</span>
            <span className="text-xs text-gray-500 uppercase tracking-wider">YoY Value Growth</span>
          </div>
          <div className="p-6 bg-[#F8F9FA] rounded-xl text-center">
            <span className="text-3xl md:text-4xl font-bold text-[#94173F] block mb-1">6%</span>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Gen Z Share</span>
          </div>
          <div className="p-6 bg-[#F8F9FA] rounded-xl text-center">
            <span className="text-3xl md:text-4xl font-bold text-[#94173F] block mb-1">65%+</span>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Gen X+Boomer Share</span>
          </div>
        </div>
      </div>
    </section>
  );
}