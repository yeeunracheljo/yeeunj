import { useTranslation } from 'react-i18next';

export default function KeyFindings() {
  const { t } = useTranslation('workAnua');

  const findings = [
    t('findings.f1'),
    t('findings.f2'),
    t('findings.f3'),
    t('findings.f4'),
  ];

  return (
    <section id="findings" className="py-24 md:py-32 bg-[#F0FAFA]">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-8 block text-center">
          {t('findings.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-16">
          {t('findings.title')}
        </h2>

        <div className="space-y-6">
          {findings.map((finding, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-8 bg-white rounded-xl"
            >
              <span className="w-12 h-12 rounded-full bg-[#E6F9FA]/10 text-[#14B8A6] flex items-center justify-center text-base font-bold shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-gray-700 text-lg leading-relaxed pt-2">
                {finding}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}