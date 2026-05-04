import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface EventItem {
  id: string;
  label: string;
  images: string[];
  alt: string;
}

const allUserImages = [
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/5af9da26-6b83-4ef5-8b37-942cdd8aeb8b_Screenshot-2026-05-03-at-2.28.31PM.png?v=3fa6e568cc27aa8e7c02619604dfa5be',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/07775b49-1bf9-4c60-ba81-a72c207cdcaf_Screenshot-2026-05-03-at-2.28.19PM.png?v=a20bdc457d1e6395e1526031c07b28be',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/5b6879f7-2f1a-4a2a-84a5-209907323673_Screenshot-2026-05-03-at-2.28.04PM.png?v=acba4ad67dab7c5c4ea10ad5a2ab8b5b',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/22010952-e4a0-4ab6-bdcc-53ae57ba97ca_Screenshot-2026-05-03-at-2.27.41PM.png?v=48af750b581fe7b17eb086343f4d820b',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/8948258f-3577-425e-b2bf-bd22b7d1d8b9_Screenshot-2026-05-03-at-2.27.23PM.png?v=6ed3d09175aa321a64cb52a0f1ec26ee',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/c2721e04-c4a9-4627-8f56-256eebc2b40e_Screenshot-2026-05-03-at-2.22.42PM.png?v=0c36171530f054ba04e5880e0dcafc7f',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/5b6e44e9-5c10-4422-abb7-c6e6f4014e36_Screenshot-2026-05-03-at-2.38.55PM.png?v=7668a2d53953f792093be64366490d75',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/89222113-a64b-4b27-a477-f8c7c65d592b_Screenshot-2026-05-03-at-2.38.28PM.png?v=78ca1fc78990ee2dfdb26a6d8427441d',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/b9790baa-3457-4399-8090-769dd745cd21_Screenshot-2026-05-03-at-2.38.18PM.png?v=8e3a1b2f10a31e6c0a6247ca3478f689',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/a17d93ab-389e-4917-88fa-b7f639e896a2_Screenshot-2026-05-03-at-2.37.59PM.png?v=62a22d7b940d86e5a8406620dd9849a2',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/2161394d-70eb-4b77-bfa2-64dbe55420a7_Screenshot-2026-05-03-at-2.37.51PM.png?v=1d1d3b674e5a3b18c07d442aa3b838e5',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/bf166259-c7d8-4f00-b3f9-bc45f35c822d_Screenshot-2026-05-03-at-2.37.38PM.png?v=3c17e2ad23e18f05f553f5b5407c42aa',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/0e3dc70c-aa01-44bf-9eea-f86d9b0c210e_Screenshot-2026-05-03-at-2.37.18PM.png?v=8f53a7b396f724ef424b9e0fbece5d15',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/7a578381-0ffb-4ee7-ab36-0b19b0cf84cd_Screenshot-2026-05-03-at-2.37.10PM.png?v=42d42687dfdf69374a8de6e4fbd155c1',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/3dcddc6a-8f18-496a-abf3-a90bad9c9d00_Screenshot-2026-05-03-at-2.41.22PM.png?v=38166d68f080087e1ceddb6e2ce77406',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/17ab7d8c-dfbd-4fb5-96a4-ccaae45d6b2f_Screenshot-2026-05-03-at-2.42.00PM.png?v=89788bf2bc405f85d59512704fab9cdb',
];

export default function EventGallery() {
  const { t } = useTranslation('workUtkcc');
  const [activeTab, setActiveTab] = useState<'academic' | 'social'>('academic');
  const [imageIndices, setImageIndices] = useState<Record<string, number>>({});

  const academicEvents: EventItem[] = [
    {
      id: 'monthlyCoffee',
      label: t('eventGallery.monthlyCoffee'),
      images: [allUserImages[0], allUserImages[1]],
      alt: 'Freshman Seminar',
    },
    {
      id: 'crossClub',
      label: t('eventGallery.crossClub'),
      images: [allUserImages[2]],
      alt: 'Coffee Chat Campaign',
    },
    {
      id: 'fundraising',
      label: t('eventGallery.fundraising'),
      images: [allUserImages[3], allUserImages[4]],
      alt: 'Krispy Kreme Fundraising',
    },
    {
      id: 'sponsorEvent',
      label: t('eventGallery.sponsorEvent'),
      images: [
        allUserImages[6],
        allUserImages[7],
        allUserImages[8],
        allUserImages[9],
        allUserImages[10],
        allUserImages[11],
        allUserImages[12],
        allUserImages[13],
      ],
      alt: 'Sponsorship Partnerships',
    },
  ];

  const socialEvents: EventItem[] = [
    {
      id: 'wineNight',
      label: t('eventGallery.wineNight'),
      images: [allUserImages[14]],
      alt: 'Flash Networking Event',
    },
    {
      id: 'voxCollab',
      label: t('eventGallery.voxCollab'),
      images: [allUserImages[15]],
      alt: 'VOKLS x UTKCC Sports Day',
    },
    {
      id: 'socialMixer',
      label: t('eventGallery.socialMixer'),
      images: [
        'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/2c4f6ea7-a877-4079-9104-b7e81edbb6f7_Screenshot-2026-05-03-at-11.54.27PM.png?v=cf6ad274eed7f0c916560d6d4a1b00b9',
        'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/dfe760de-a6db-4c85-9ef3-29cdcd0b5c3d_Screenshot-2026-05-03-at-11.54.50PM.png?v=22a3028aa522243bad4f3e2e8b82760a',
        'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/5c962599-9430-468e-ba5e-a1a9f9ebd9ce_Screenshot-2026-05-03-at-11.57.00PM.png?v=d37f08ae522a66ce9be8f5463593b167',
        'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/a977a496-fe7e-47f2-b4c4-8ebb3d98e26d_Screenshot-2026-05-03-at-11.56.05PM.png?v=5f5bae4cc477e2e5ec1ea2f127d1d010',
        'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/1b410804-24ba-4626-a522-21a34758eea1_Screenshot-2026-05-03-at-11.55.43PM.png?v=90bf670f2662bba6256fe4f367971d79',
      ],
      alt: 'Connect:In Seminar',
    },
    {
      id: 'alumniGathering',
      label: t('eventGallery.alumniGathering'),
      images: [
        'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/0c2853a3-26de-4203-b27a-f234909808a5_Screenshot-2026-05-03-at-11.56.29PM.png?v=558215932781b5287262a2881d2cb3dc',
      ],
      alt: 'Spring Festival (Daedongje)',
    },
  ];

  const currentEvents = activeTab === 'academic' ? academicEvents : socialEvents;

  const goNext = (id: string, total: number) => {
    setImageIndices(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % total,
    }));
  };

  const goPrev = (id: string, total: number) => {
    setImageIndices(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + total) % total,
    }));
  };

  return (
    <div className="mb-16">
      {/* Tab Switcher */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 rounded-full bg-[#013385]/5 border border-[#013385]/10">
          <button
            onClick={() => setActiveTab('academic')}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'academic'
                ? 'bg-[#013385] text-white'
                : 'text-[#013385]/70 hover:text-[#013385]'
            }`}
          >
            {t('eventGallery.academicTab')}
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'social'
                ? 'bg-[#013385] text-white'
                : 'text-[#013385]/70 hover:text-[#013385]'
            }`}
          >
            {t('eventGallery.socialTab')}
          </button>
        </div>
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {currentEvents.map((event) => {
          const currentIdx = imageIndices?.[event.id] || 0;
          const hasMultiple = event.images.length > 1;

          return (
            <div
              key={event.id}
              className="group text-left rounded-xl overflow-hidden border border-[#013385]/10 bg-white"
            >
              <div className="relative aspect-[1080/1350] overflow-hidden">
                <img
                  src={event.images[currentIdx]}
                  alt={event.alt}
                  className="w-full h-full object-cover object-top"
                />
                {hasMultiple && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goPrev(event.id, event.images.length);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-[#013385] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-pointer"
                    >
                      <i className="ri-arrow-left-s-line text-lg"></i>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goNext(event.id, event.images.length);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-[#013385] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-pointer"
                    >
                      <i className="ri-arrow-right-s-line text-lg"></i>
                    </button>
                    {/* Dot indicators */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {event.images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            idx === currentIdx ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="p-4">
                <h4 className="text-sm md:text-base font-semibold text-gray-900">
                  {event.label}
                </h4>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  {t(`eventGallery.${event.id}Short`)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}