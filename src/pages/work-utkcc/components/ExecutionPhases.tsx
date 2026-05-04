import { useTranslation } from 'react-i18next';

export default function ExecutionPhases() {
  const { t } = useTranslation('workUtkcc');

  const phases = [
    {
      title: t('execution.phase1Title'),
      desc: t('execution.phase1Desc'),
      items: [
        t('execution.phase1Item1'),
        t('execution.phase1Item2'),
        t('execution.phase1Item3'),
      ],
      caption: t('execution.phase1Caption'),
      color: 'bg-white',
      badge: '01',
      imageUrl: 'https://readdy.ai/api/search-image?query=A%20professionally%20designed%20university%20student%20organization%20monthly%20newsletter%20layout%20displayed%20on%20a%20clean%20white%20background%2C%20featuring%20structured%20content%20sections%20with%20dark%20navy%20blue%20headings%2C%20event%20announcements%20organized%20in%20a%20clear%20grid%2C%20modern%20sans-serif%20typography%2C%20ample%20whitespace%20for%20readability%2C%20academic%20club%20communication%20design%2C%20editorial%20document%20aesthetic%20with%20blue%20accent%20colors%2C%20no%20photographs%20just%20clean%20layout%20design&width=1200&height=800&seq=utkcc-newsletter&orientation=landscape',
      imageAlt: 'Monthly newsletter content and layout system',
    },
    {
      title: t('execution.phase2Title'),
      desc: t('execution.phase2Desc'),
      items: [
        t('execution.phase2Item1'),
        t('execution.phase2Item2'),
        t('execution.phase2Item3'),
      ],
      caption: t('execution.phase2Caption'),
      color: 'bg-white',
      badge: '02',
      imageUrl: 'https://readdy.ai/api/search-image?query=A%20professional%20event%20marketing%20visual%20system%20design%20for%20a%20university%20student%20organization%2C%20showing%20multiple%20coordinated%20event%20posters%20and%20flyers%20with%20consistent%20dark%20navy%20blue%20and%20white%20color%20scheme%2C%20unified%20typography%20framework%2C%20visual%20identity%20guidelines%20applied%20across%20different%20event%20promotional%20materials%2C%20clean%20modern%20graphic%20design%2C%20professional%20branding%20collateral%20layout%20on%20white%20background&width=1200&height=800&seq=utkcc-event-system&orientation=landscape',
      imageAlt: 'Event-based visual system for communication clarity',
    },
    {
      title: t('execution.phase3Title'),
      desc: t('execution.phase3Desc'),
      items: [
        t('execution.phase3Item1'),
        t('execution.phase3Item2'),
        t('execution.phase3Item3'),
      ],
      caption: t('execution.phase3Caption'),
      color: 'bg-white',
      badge: '03',
      imageUrl: 'https://readdy.ai/api/search-image?query=Three%20Instagram%20social%20media%20post%20designs%20arranged%20side%20by%20side%20showing%20a%20progressive%20three-part%20marketing%20campaign%20for%20a%20university%20networking%20event%2C%20first%20post%20creating%20curiosity%20with%20elegant%20dark%20navy%20blue%20design%2C%20second%20post%20featuring%20alumni%20credibility%20and%20professional%20testimonials%2C%20third%20post%20driving%20engagement%20with%20lifestyle%20imagery%2C%20cohesive%20blue%20and%20white%20brand%20aesthetic%2C%20modern%20social%20media%20graphic%20design&width=1200&height=800&seq=utkcc-3part-campaign&orientation=landscape',
      imageAlt: '3-part campaign: introduction to credibility to engagement',
    },
  ];

  return (
    <section id="execution" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#013385] uppercase mb-6 block font-medium text-center">
          {t('execution.sectionTitle')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-10 text-center">
          {t('execution.title')}
        </h2>

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div key={index}>
              <div className={`p-6 md:p-8 rounded-xl ${phase.color} border border-[#013385]/15`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center text-sm font-bold">
                    {phase.badge}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                </div>
                <p className="text-gray-600 text-base mb-6">{phase.desc}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                  {phase.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center text-xs shrink-0 mt-0.5">
                        <i className="ri-check-line" />
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Image area */}
                <div className="bg-white rounded-lg border border-[#013385]/15 overflow-hidden h-64 md:h-80">
                  <img
                    src={phase.imageUrl}
                    alt={phase.imageAlt}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-gray-400 text-sm text-center mt-3">
                  {phase.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}