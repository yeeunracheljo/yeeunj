import { useTranslation } from 'react-i18next';
import { anuaResults } from "@/mocks/work-anua";
import RespondentFlow from "./RespondentFlow";

export default function ResearchProcess() {
  const { t } = useTranslation('workAnua');

  const filters = [
    { label: t('research.screening1'), description: t('research.screening1Desc') },
    { label: t('research.screening2'), description: t('research.screening2Desc') },
    { label: t('research.screening3'), description: t('research.screening3Desc') },
  ];

  const keyStats = [
    { percentage: "73.85%", count: "192 / 260", label: t('research.stat1Label'), description: t('research.stat1Desc') },
    { percentage: "55.26%", count: "147 / 266", label: t('research.stat2Label'), description: t('research.stat2Desc') },
    { percentage: "15.76%", count: "41 / 260", label: t('research.stat3Label'), description: t('research.stat3Desc') },
  ];

  const patterns = [
    anuaResults.surveyPatterns.pattern1,
    anuaResults.surveyPatterns.pattern2,
    anuaResults.surveyPatterns.pattern3,
  ];

  return (
    <section id="research-process" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-8 block text-center">
          {t('research.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-16">
          {t('research.title')}
        </h2>

        {/* Intro */}
        <div className="mb-24">
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            <strong className="text-gray-900">260 respondents</strong> {t('research.intro')}
          </p>
        </div>

        {/* Respondent Selection Flow */}
        <div className="mb-24">
          <RespondentFlow />
        </div>

        {/* Screening Criteria */}
        <div className="mb-24">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-10">
            {t('research.screeningTitle')}
          </h3>
          <p className="text-gray-500 mb-10 max-w-2xl">
            {t('research.screeningDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filters.map((filter, i) => (
              <div
                key={i}
                className="p-8 bg-[#F0FAFA] rounded-xl"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-full bg-[#E6F9FA]/10 text-[#14B8A6] flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <h4 className="font-semibold text-gray-900">
                    {filter.label}
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {filter.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Stats */}
        <div className="mb-24">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-10">
            {t('research.keyStatsTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyStats.map((stat, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-xl border border-gray-100"
              >
                <div className="text-5xl font-bold text-[#14B8A6] mb-3">
                  {stat.percentage}
                </div>
                <p className="text-sm text-gray-400 mb-6">{stat.count}</p>
                <h4 className="font-semibold text-gray-900 text-lg mb-3">
                  {stat.label}
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 20s Key Insight */}
        <div className="mb-24 p-10 bg-[#E6F9FA] rounded-xl border border-[#14B8A6]/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <i className="ri-lightbulb-flash-line text-[#14B8A6] text-xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              {t('research.insightTitle')}
            </h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl">
            {t('research.insightDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#14B8A6]/5 rounded-xl border border-[#14B8A6]/20">
              <div className="text-5xl font-bold text-[#14B8A6] mb-2">
                {anuaResults.twentyInsight.stat}
              </div>
              <p className="text-gray-600">
                {anuaResults.twentyInsight.breakdown}
              </p>
            </div>
            <div className="p-6 bg-[#14B8A6]/5 rounded-xl border border-[#14B8A6]/20">
              <p className="text-gray-700 leading-relaxed">
                {t('research.insightDetail')}
              </p>
            </div>
          </div>
        </div>

        {/* Key Survey Patterns */}
        <div className="mb-24">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            {t('research.patternsTitle')}
          </h3>
          <p className="text-gray-500 mb-10 max-w-2xl">
            {t('research.patternsDesc')}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {patterns.map((pattern, pi) => (
              <div
                key={pi}
                className="bg-[#F0FAFA] rounded-xl p-8"
              >
                <h4 className="font-semibold text-gray-900 mb-8 text-base">
                  {pi === 0 ? t('research.channelTitle') : pi === 1 ? t('research.brandTitle') : t('research.heardTitle')}
                </h4>
                <div className="space-y-5">
                  {pattern.data.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: item.percentage + "%",
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-8">
            {t('research.chartNote')}
          </p>
        </div>

        {/* Purchase Decision Factors */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-10">
            {t('research.decisionTitle')}
          </h3>
          <div className="bg-[#F0FAFA] rounded-xl p-8 md:p-10">
            <div className="space-y-6">
              {anuaResults.chart2.data.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-base text-gray-700 font-medium">{item.label}</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {item.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full"
                      style={{
                        width: item.percentage + "%",
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}