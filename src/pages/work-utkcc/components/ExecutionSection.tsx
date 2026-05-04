import { useTranslation } from 'react-i18next';

export default function ExecutionSection() {
  const { t } = useTranslation('workUtkcc');

  return (
    <section id="execution" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#013385] uppercase mb-6 block font-medium text-center">
          {t('execution.sectionTitle')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-10 text-center">
          {t('execution.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Media Committee */}
          <div className="p-6 bg-white rounded-xl border border-[#013385]/15 hover:border-[#013385]/25 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center shrink-0">
                <i className="ri-newspaper-line text-base" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{t('execution.mediaTitle')}</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{t('execution.mediaDesc')}</p>
            <ul className="space-y-2.5">
              {[t('execution.mediaItem1'), t('execution.mediaItem2')].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketing Committee */}
          <div className="p-6 bg-white rounded-xl border border-[#013385]/15 hover:border-[#013385]/25 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center shrink-0">
                <i className="ri-megaphone-line text-base" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{t('execution.marketingTitle')}</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{t('execution.marketingDesc')}</p>
            <ul className="space-y-2.5">
              {[t('execution.marketingItem1'), t('execution.marketingItem2')].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Director */}
          <div className="p-6 bg-white rounded-xl border border-[#013385]/15 hover:border-[#013385]/25 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center shrink-0">
                <i className="ri-focus-3-line text-base" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{t('execution.directorTitle')}</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{t('execution.directorDesc')}</p>
            <ul className="space-y-2.5">
              {[t('execution.directorItem1'), t('execution.directorItem2'), t('execution.directorItem3')].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}