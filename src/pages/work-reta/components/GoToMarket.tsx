import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export default function GoToMarket() {
  const { t } = useTranslation('workReta');
  const [copied, setCopied] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText('#CleanYourPhoneChallenge').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const tactics = [
    {
      icon: 'ri-share-circle-line',
      title: t('gtm.tactic1Title'),
      desc: t('gtm.tactic1Desc'),
    },
    {
      icon: 'ri-group-line',
      title: t('gtm.tactic2Title'),
      desc: t('gtm.tactic2Desc'),
    },
    {
      icon: 'ri-line-chart-line',
      title: t('gtm.tactic3Title'),
      desc: t('gtm.tactic3Desc'),
    },
  ];

  return (
    <section id="goToMarket" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium text-center">
          04 — {t('toc.goToMarket')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6 text-center">
          {t('gtm.title')}
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto text-center">
          {t('gtm.subtitle')}
        </p>

        {/* Main content: image + text */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center mb-16">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden bg-[#EDF8FB] border border-gray-100 aspect-[4/3]">
              <img
                src="https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/a236b55f7af6f36ecbb5c678ac24a97b.png"
                alt="Go-to-Market social challenge concept"
                className="w-full h-full object-cover"
                title={t('gtm.imageAlt')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#EDF8FB] rounded-xl p-6 md:p-8 border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#5ECCE6]/10 flex items-center justify-center shrink-0">
                  <i className="ri-rocket-line text-[#5ECCE6] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {t('gtm.strategyTitle')}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t('gtm.strategyLabel')}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {t('gtm.desc')}
              </p>

              {/* Interactive hashtag */}
              <button
                onClick={handleCopy}
                className="group relative w-full flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#5ECCE6]/40 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#5ECCE6]/10 flex items-center justify-center shrink-0">
                  <i className="ri-hashtag text-[#5ECCE6] text-lg" />
                </div>
                <div className="flex-1 text-left">
                  <span className="text-sm font-medium text-gray-900 block">
                    {t('gtm.hashtag')}
                  </span>
                  <span className="text-xs text-gray-500">
                    {copied ? t('gtm.copied') : t('gtm.clickToCopy')}
                  </span>
                </div>
                <i
                  className={`${
                    copied ? 'ri-check-line text-green-500' : 'ri-file-copy-line text-gray-400'
                  } text-lg transition-colors`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive tactic cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tactics.map((tactic, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className={`relative p-6 rounded-xl border transition-all duration-300 cursor-default ${
                activeCard === index
                  ? 'bg-[#5ECCE6]/5 border-[#5ECCE6]/40 shadow-sm'
                  : 'bg-white border-gray-100 hover:border-gray-200'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                  activeCard === index
                    ? 'bg-[#5ECCE6]/15'
                    : 'bg-[#5ECCE6]/10'
                }`}
              >
                <i
                  className={`${tactic.icon} text-xl transition-colors duration-300 ${
                    activeCard === index ? 'text-[#5ECCE6]' : 'text-[#5ECCE6]/70'
                  }`}
                />
              </div>
              <h4 className="text-base font-semibold text-gray-900 mb-2">
                {tactic.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tactic.desc}
              </p>

              {/* Active indicator line */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-[#5ECCE6] transition-all duration-300 ${
                  activeCard === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}