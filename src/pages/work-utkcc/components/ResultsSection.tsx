import { useTranslation } from 'react-i18next';

export default function ResultsSection() {
  const { t } = useTranslation('workUtkcc');

  const metrics = [
    {
      title: t('results.metric1'),
      detail: t('results.metric1Detail'),
      icon: 'ri-bar-chart-grouped-line',
      highlight: '~50%',
    },
    {
      title: t('results.metric2'),
      detail: t('results.metric2Detail'),
      icon: 'ri-team-line',
      highlight: '~100',
    },
    {
      title: t('results.metric3'),
      detail: t('results.metric3Detail'),
      icon: 'ri-instagram-line',
      highlight: '1.7k',
    },
  ];

  return (
    <section id="results" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#013385] uppercase mb-6 block font-medium text-center">
          08 — {t('results.title')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-10 text-center">
          {t('results.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-xl border border-[#013385]/15 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center text-xl shrink-0 mb-4">
                <i className={metric.icon} />
              </div>
              <div className="mb-2">
                <span className="text-[#013385] font-bold text-xl block">{metric.highlight}</span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{metric.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{metric.detail}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-10 p-5 bg-white rounded-xl border border-[#013385]/15">
          <p className="text-gray-700 text-sm leading-relaxed font-medium text-center">
            {t('results.summary')}
          </p>
        </div>
      </div>
    </section>
  );
}
