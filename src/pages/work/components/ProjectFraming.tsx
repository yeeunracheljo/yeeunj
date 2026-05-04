import { useTranslation } from 'react-i18next';

export default function ProjectFraming() {
  const { t } = useTranslation('work');

  const approach = [
    t('framing.approach1'),
    t('framing.approach2'),
    t('framing.approach3'),
    t('framing.approach4'),
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F9F8F6]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-sm tracking-[0.2em] text-[#FF7900] uppercase mb-8 block text-center">
          {t('framing.sectionTitle')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-relaxed mb-12">
          {t('framing.title')}
        </h2>

        <div className="space-y-6 text-left">
          {approach.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-100"
            >
              <span className="w-8 h-8 rounded-full bg-[#FF7900]/10 text-[#FF7900] flex items-center justify-center text-sm font-semibold shrink-0 mt-0.5">
                {index + 1}
              </span>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}