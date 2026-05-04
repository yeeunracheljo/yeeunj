import { useTranslation } from 'react-i18next';

export default function Introduction() {
  const { t } = useTranslation('workLG');

  const context = [
    t('intro.context1'),
    t('intro.context2'),
    t('intro.context3'),
  ];

  return (
    <section id="introduction" className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium text-center">
          02 — {t('toc.introduction')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-12 text-center">
          {t('intro.title')}
        </h2>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl mx-auto text-center">
          {t('intro.desc')}
        </p>

        <div className="space-y-4">
          {context.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-[#94173F]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#94173F]/10 text-[#94173F] flex items-center justify-center text-sm font-semibold shrink-0">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="text-gray-800 text-base leading-relaxed pt-2">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
