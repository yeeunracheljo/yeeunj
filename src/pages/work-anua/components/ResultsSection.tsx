import { useTranslation } from 'react-i18next';
import { anuaResults } from "@/mocks/work-anua";

export default function ResultsSection() {
  const { t } = useTranslation('workAnua');

  const items = [
    { title: t('results.rec1Title'), description: t('results.rec1Desc') },
    { title: t('results.rec2Title'), description: t('results.rec2Desc') },
    { title: t('results.rec3Title'), description: t('results.rec3Desc') },
    { title: t('results.rec4Title'), description: t('results.rec4Desc') },
  ];

  return (
    <section id="results" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-8 block text-center">
          {t('results.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-16">
          {t('results.title')}
        </h2>

        <div className="p-10 md:p-12 bg-[#F0FAFA] rounded-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#E6F9FA]/10 flex items-center justify-center">
              <i className="ri-lightbulb-line text-[#14B8A6] text-xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              {t('results.recTitle')}
            </h3>
          </div>
          <p className="text-gray-500 leading-relaxed mb-10 max-w-3xl text-lg">
            {t('results.recDesc')}
          </p>
          <div className="space-y-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 bg-white rounded-xl"
              >
                <span className="w-10 h-10 rounded-full bg-[#E6F9FA]/10 text-[#14B8A6] flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}