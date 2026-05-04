import { useTranslation } from 'react-i18next';

export default function References() {
  const { t } = useTranslation('workReta');

  const references = [
    t('ref.source1'),
    t('ref.source2'),
  ];

  return (
    <section id="references" className="py-24 md:py-32 bg-[#EDF8FB]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium text-center">
          10 — {t('toc.references')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-12 text-center">
          {t('ref.title')}
        </h2>

        <div className="space-y-4 text-left">
          {references.map((ref, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100"
            >
              <span className="w-8 h-8 rounded-full bg-[#5ECCE6]/10 text-[#5ECCE6] flex items-center justify-center text-sm font-semibold shrink-0">
                {index + 1}
              </span>
              <p className="text-gray-700 text-sm leading-relaxed">
                {ref}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
