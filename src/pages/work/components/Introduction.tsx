import { useTranslation } from 'react-i18next';

export default function Introduction() {
  const { t } = useTranslation('work');

  const contexts = [
    t('intro.context1'),
    t('intro.context2'),
    t('intro.context3'),
  ];

  return (
    <section id="introduction" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#FF7900] uppercase mb-8 block font-medium text-center">
          02 — {t('intro.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-12 text-center">
          {t('intro.title')}
        </h2>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl mx-auto text-center">
          {t('intro.desc')}
        </p>

        <p className="text-gray-600 text-base leading-relaxed mb-12 max-w-3xl mx-auto text-center italic">
          {t('intro.role')}
        </p>

        <div className="space-y-4">
          {contexts.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-[#FFF8F0] rounded-xl border border-gray-200 hover:border-[#FF7900]/30 transition-colors hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-full bg-[#FF7900]/10 text-[#FF7900] flex items-center justify-center text-sm font-semibold shrink-0">
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