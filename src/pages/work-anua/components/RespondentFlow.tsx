import { useTranslation } from 'react-i18next';

interface Stage {
  count: number;
  label: string;
  description: string;
  width: string;
}

export default function RespondentFlow() {
  const { t } = useTranslation('workAnua');

  const stages: Stage[] = [
    {
      count: 260,
      label: t('research.flowStage1'),
      description: t('research.flowStage1Desc'),
      width: "100%",
    },
    {
      count: 41,
      label: t('research.flowStage2'),
      description: t('research.flowStage2Desc'),
      width: "70%",
    },
    {
      count: 5,
      label: t('research.flowStage3'),
      description: t('research.flowStage3Desc'),
      width: "45%",
    },
    {
      count: 3,
      label: t('research.flowStage4'),
      description: t('research.flowStage4Desc'),
      width: "30%",
    },
  ];

  return (
    <div className="mb-16">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
        {t('research.flowTitle')}
      </h3>
      <div className="bg-[#F0FAFA] rounded-xl p-6 md:p-10">
        <div className="flex flex-col items-center gap-2">
          {stages.map((stage, i) => (
            <div key={i} className="flex flex-col items-center w-full">
              {/* Stage block */}
              <div
                className="relative flex items-center justify-between p-5 md:p-6 rounded-xl bg-white border border-gray-200 shadow-sm"
                style={{ width: stage.width, maxWidth: "100%" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E6F9FA]/10 flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold text-[#14B8A6]">
                      {stage.count}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                      {stage.label}
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm mt-0.5 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-gray-400 font-medium shrink-0 ml-3">
                  {i === 0
                    ? "100%"
                    : i === 1
                    ? "15.8%"
                    : i === 2
                    ? "1.9%"
                    : "1.2%"}
                </div>
              </div>

              {/* Arrow down */}
              {i < stages.length - 1 && (
                <div className="flex flex-col items-center py-1">
                  <div className="w-px h-4 bg-gray-300" />
                  <i className="ri-arrow-down-s-line text-gray-300 text-sm" />
                  <div className="w-px h-4 bg-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom summary */}
        <div className="mt-8 p-4 bg-white rounded-lg border border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            {t('research.flowSummary')}
          </p>
        </div>
      </div>
    </div>
  );
}