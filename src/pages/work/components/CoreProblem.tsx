import { useTranslation } from 'react-i18next';

export default function CoreProblem() {
  const { t } = useTranslation('work');

  return (
    <section id="problem" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#FF7900] uppercase mb-8 block text-center">
          {t('problem.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-16">
          {t('problem.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-[#FFF8F0] rounded-xl border border-gray-200 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('problem.issue1Title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('problem.issue1Desc')}
            </p>
          </div>

          <div className="p-8 bg-[#FFF8F0] rounded-xl border border-gray-200 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('problem.issue2Title')}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                {t('problem.issue2Item1')}
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                {t('problem.issue2Item2')}
              </li>
            </ul>
          </div>
        </div>

        <div className="p-6 bg-[#FF7900] rounded-xl text-center">
          <p className="text-white text-lg md:text-xl font-medium">
            {t('problem.result')}
          </p>
        </div>
      </div>
    </section>
  );
}
