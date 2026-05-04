import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { anuaPersonaAnalysis } from "@/mocks/work-anua";

export default function PersonaAnalysis() {
  const { t } = useTranslation('workAnua');
  const [activeTab, setActiveTab] = useState<"summary" | "trigger" | "discovery" | "social">("summary");

  const tabs = [
    { key: "summary" as const, label: t('persona.tabSummary') },
    { key: "trigger" as const, label: t('persona.tabTrigger') },
    { key: "discovery" as const, label: t('persona.tabDiscovery') },
    { key: "social" as const, label: t('persona.tabSocial') },
  ];

  return (
    <section id="personas" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-8 block text-center">
          {t('persona.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-4">
          {t('persona.title')}
        </h2>
        <p className="text-gray-400 text-lg mb-20">
          {t('persona.subtitle')}
        </p>

        {/* Target Persona Overview */}
        <div className="p-10 bg-[#F0FAFA] rounded-xl border border-gray-200 mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-[#E6F9FA]/10 flex items-center justify-center">
              <i className="ri-user-heart-line text-[#14B8A6] text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t('persona.targetName')}
              </h3>
              <span className="text-sm text-[#14B8A6] font-medium">{t('persona.targetLabel')}</span>
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {t('persona.targetDesc')}
          </p>

          <div className="space-y-8">
            {[t('persona.trait1'), t('persona.trait2'), t('persona.trait3')].map((trait, index) => (
              <div key={index} className="flex items-start gap-5">
                <span className="w-10 h-10 rounded-full bg-white border border-[#14B8A6]/20 text-[#14B8A6] flex items-center justify-center text-sm font-semibold shrink-0">
                  {index + 1}
                </span>
                <p className="text-gray-700 text-lg leading-relaxed pt-1">{trait}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Respondent Cards */}
        <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-10">
          {t('persona.respondentsTitle')}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {anuaPersonaAnalysis.respondents.map((r) => (
            <div
              key={r.name}
              className="bg-[#F0FAFA] rounded-xl overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#E6F9FA]/30 flex items-center justify-center shrink-0">
                    <i className="ri-user-line text-[#14B8A6] text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base leading-tight">{r.name}</h4>
                    <span className="text-xs text-gray-400">{r.age} · {r.ethnicity}</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Attributes */}
              <div className="p-6 pt-4 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Involvement</span>
                  <p className="text-sm font-semibold text-gray-900 mt-1">{r.involvement}</p>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Type</span>
                  <p className="text-sm font-semibold text-gray-900 mt-1">{r.type}</p>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Persona</span>
                  <span className="inline-block mt-1.5 px-3 py-1.5 bg-[#14B8A6]/10 text-[#14B8A6] text-xs font-medium rounded-lg">
                    {r.persona}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-12 bg-gray-100 p-1 rounded-xl w-fit mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.key
                  ? "bg-white text-[#14B8A6] shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {anuaPersonaAnalysis.respondents.map((r) => {
            const data =
              activeTab === "summary"
                ? { content: r.summary, icon: "ri-file-list-line" }
                : activeTab === "trigger"
                ? {
                    content: [
                      { label: t('persona.tabTrigger'), value: r.trigger.planned },
                      { label: t('persona.purchaseFrequency'), value: r.trigger.frequency },
                      { label: t('persona.decisionFactor'), value: r.trigger.decision },
                    ],
                    icon: "ri-shopping-cart-line",
                  }
                : activeTab === "discovery"
                ? {
                    content: [
                      { label: t('persona.discoverySource'), value: r.discovery.source },
                      { label: t('persona.nextStep'), value: r.discovery.nextStep },
                      { label: t('persona.comparisonBehavior'), value: r.discovery.comparison },
                    ],
                    icon: "ri-search-line",
                  }
                : {
                    content: [
                      { label: t('persona.socialInfluence'), value: r.social.influence },
                      { label: t('persona.attitudeToTrends'), value: r.social.trending },
                      { label: t('persona.influencerView'), value: r.social.influencer },
                    ],
                    icon: "ri-group-line",
                  };

            return (
              <div
                key={r.name}
                className="p-8 bg-[#F0FAFA] rounded-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    <i className={data.icon + " text-[#14B8A6]"} />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg">{r.name}</h4>
                  <span className="text-xs px-3 py-1.5 bg-[#14B8A6]/10 text-[#14B8A6] rounded-full">
                    {r.persona}
                  </span>
                </div>

                {activeTab === "summary" ? (
                  <p className="text-gray-700 leading-relaxed text-base">
                    {(data.content as string)}
                  </p>
                ) : (
                  <div className="space-y-6">
                    {(data.content as { label: string; value: string }[]).map((item, i) => (
                      <div key={i}>
                        <span className="text-xs font-semibold text-[#14B8A6] uppercase tracking-wider">
                          {item.label}
                        </span>
                        <p className="text-gray-700 text-base leading-relaxed mt-2">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}