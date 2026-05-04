import { useTranslation } from 'react-i18next';

export default function ProblemSection() {
  const { t } = useTranslation('workMacsLearning');

  const problems = [
    {
      title: t('problem.issue1Title'),
      desc: t('problem.issue1Desc'),
      icon: 'ri-focus-2-line',
    },
    {
      title: t('problem.issue2Title'),
      desc: t('problem.issue2Desc'),
      icon: 'ri-brain-line',
    },
    {
      title: t('problem.issue3Title'),
      desc: t('problem.issue3Desc'),
      icon: 'ri-logout-box-r-line',
    },
  ];

  return (
    <section id="problem" className="py-24 md:py-32 bg-[#fbffab]/5">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#8B6914] uppercase mb-8 block font-medium text-center">
          {t('problem.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6 text-center">
          {t('problem.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#fbffab] transition-all hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-[#fbffab] flex items-center justify-center mb-4">
                <i className={`${problem.icon} text-[#8B6914] text-xl`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {problem.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[#D4C72A]">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#fbffab] flex items-center justify-center shrink-0 mt-0.5">
              <i className="ri-arrow-right-line text-[#8B6914] text-sm" />
            </div>
            <p className="text-gray-800 text-base font-medium leading-relaxed">
              {t('problem.result')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}