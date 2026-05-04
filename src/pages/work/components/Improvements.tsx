import { useTranslation } from 'react-i18next';

export default function Improvements() {
  const { t } = useTranslation('work');

  const improvements = [
    t('improvement1'),
    t('improvement2'),
    t('improvement3'),
    t('improvement4'),
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#FF7900] uppercase mb-8 block text-center">
          {t('improvements.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-16">
          {t('improvements.title')}
        </h2>

        <div className="space-y-4">
          {improvements.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-[#F9F8F6] rounded-xl border border-gray-100 hover:border-[#FF7900]/20 transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-[#FF7900]/10 text-[#FF7900] flex items-center justify-center text-sm font-bold shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}