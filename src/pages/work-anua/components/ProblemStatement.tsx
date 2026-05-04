import { useTranslation } from 'react-i18next';

export default function ProblemStatement() {
  const { t } = useTranslation('workAnua');

  const bullets = [
    t('problem.bullet1'),
    t('problem.bullet2'),
    t('problem.bullet3'),
    t('problem.bullet4'),
  ];

  return (
    <section id="problem" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-8 block text-center">
          {t('problem.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-12">
          {t('problem.title')}
        </h2>

        <div className="p-8 bg-[#E6F9FA] rounded-xl">
          <ul className="space-y-3">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-900 text-lg md:text-xl leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 mt-3 shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}