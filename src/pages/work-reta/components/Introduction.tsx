import { useTranslation } from 'react-i18next';

export default function Introduction() {
  const { t } = useTranslation('workReta');

  return (
    <section id="introduction" className="py-24 md:py-32 bg-[#EDF8FB]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4 block font-medium text-center">
          01 — {t('toc.introduction')}
        </span>

        <p className="text-sm text-[#5ECCE6] font-medium tracking-wide text-center mb-8 uppercase">
          {t('intro.tag')}
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-12 whitespace-pre-line text-center">
          {t('intro.title')}
        </h2>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl mx-auto text-center">
          {t('intro.desc')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-[#5ECCE6]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#5ECCE6]/10 text-[#5ECCE6] flex items-center justify-center text-sm font-semibold shrink-0 mb-4">
                {String(i).padStart(2, '0')}
              </div>
              <p className="text-gray-800 text-base leading-relaxed font-medium">
                {t(`intro.point${i}` as const)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
