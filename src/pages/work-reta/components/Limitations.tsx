import { useTranslation } from 'react-i18next';

export default function Limitations() {
  const { t } = useTranslation('workReta');

  return (
    <section id="limitations" className="py-24 md:py-32 bg-[#EDF8FB]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium">
          08 — {t('toc.limitations')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-8">
          {t('limitations.title')}
        </h2>

        <div className="p-8 bg-white rounded-xl border border-gray-200">
          <div className="flex items-start gap-4 text-left">
            <div className="w-10 h-10 rounded-full bg-[#5ECCE6]/10 flex items-center justify-center shrink-0">
              <i className="ri-error-warning-line text-[#5ECCE6]" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t('limitations.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
