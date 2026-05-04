import { useTranslation } from 'react-i18next';

export default function Introduction() {
  const { t } = useTranslation('workUtkcc');

  const contexts = [
    t('intro.context1'),
    t('intro.context2'),
    t('intro.context3'),
  ];

  return (
    <section id="introduction" className="py-16 md:py-24 bg-[#013385]/[0.02]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#013385] uppercase mb-6 block font-medium text-center">
          {t('intro.sectionTitle')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-6 text-center">
          {t('intro.title')}
        </h2>

        <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-2xl mx-auto text-center">
          {t('intro.desc')}
        </p>

        <div className="space-y-3 max-w-2xl mx-auto">
          {contexts.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#013385]/15 hover:border-[#013385]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center text-sm font-semibold shrink-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-gray-800 text-base leading-relaxed pt-1 font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
