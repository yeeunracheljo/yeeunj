import { useTranslation } from 'react-i18next';

export default function ExecutionApproach() {
  const { t } = useTranslation('workLG');

  const directions = [
    t('execution.dir1'),
    t('execution.dir2'),
    t('execution.dir3'),
  ];

  const onlineItems = [
    t('execution.online1'),
    t('execution.online2'),
    t('execution.online3'),
  ];

  const offlineItems = [
    t('execution.offline1'),
    t('execution.offline2'),
    t('execution.offline3'),
  ];

  return (
    <section id="execution" className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium text-center">
          08 — {t('toc.execution')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-8 text-center">
          {t('execution.title')}
        </h2>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto text-center">
          {t('execution.desc')}
        </p>

        <div className="p-6 bg-white rounded-xl border border-gray-200 mb-10 text-left">
          <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
            {t('execution.directionTitle')}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {directions.map((direction, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#94173F]/10 text-[#94173F] flex items-center justify-center text-sm shrink-0">
                  <i className="ri-arrow-right-line" />
                </span>
                <p className="text-gray-800 text-sm leading-relaxed font-medium">
                  {direction}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10 text-left">
          <div className="p-7 bg-white rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#94173F]/10 flex items-center justify-center">
                <i className="ri-wifi-line text-[#94173F] text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {t('execution.onlineTitle')}
              </h3>
            </div>
            <ul className="space-y-3">
              {onlineItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#94173F]/10 text-[#94173F] flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <i className="ri-check-line" />
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-7 bg-white rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#94173F]/10 flex items-center justify-center">
                <i className="ri-map-pin-line text-[#94173F] text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {t('execution.offlineTitle')}
              </h3>
            </div>
            <ul className="space-y-3">
              {offlineItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#94173F]/10 text-[#94173F] flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <i className="ri-check-line" />
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-7 bg-[#94173F] rounded-xl text-center">
          <i className="ri-key-2-line text-white/90 text-2xl mb-4 block" />
          <p className="text-white text-lg md:text-xl font-semibold leading-relaxed">
            {t('execution.conclusion')}
          </p>
        </div>
      </div>
    </section>
  );
}