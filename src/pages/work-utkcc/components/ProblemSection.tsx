import { useTranslation } from 'react-i18next';

export default function ProblemSection() {
  const { t } = useTranslation('workUtkcc');

  const issues = [
    { title: t('problem.issue1Title'), desc: t('problem.issue1Desc'), icon: 'ri-apps-line' },
    { title: t('problem.issue2Title'), desc: t('problem.issue2Desc'), icon: 'ri-image-line' },
  ];

  return (
    <section id="problem" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#013385] uppercase mb-6 block font-medium text-center">
          {t('problem.sectionTitle')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-10 text-center">
          {t('problem.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#013385]/15"
            >
              <div className="w-10 h-10 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center text-lg shrink-0">
                <i className={issue.icon} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{issue.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{issue.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto p-5 bg-white rounded-xl border border-[#013385]/15">
          <p className="text-gray-700 text-sm leading-relaxed font-medium text-center">
            {t('problem.result')}
          </p>
        </div>
      </div>
    </section>
  );
}
