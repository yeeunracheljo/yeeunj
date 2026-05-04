import { useTranslation } from 'react-i18next';

export default function AppSolution() {
  const { t } = useTranslation('workReta');

  const screens = [
    {
      image: "https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/a2a488f799afae716e4d1efc5164751d.png",
      label: 'Data Check',
      step: 'app.step1',
    },
    {
      image: "https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/b3953415a915d5a96adadcb4aaa1b169.png",
      label: 'Usage Breakdown',
      step: 'app.step2',
    },
    {
      image: "https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/a4cd1dd38a467da3ca899d6fc57270d0.png",
      label: 'Donation Page',
      step: 'app.step5',
    },
    {
      image: "https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/416d18604bd4fbf3a8dd4adfabf73f0d.png",
      label: 'Badges',
      step: 'app.step8',
    },
  ];

  return (
    <section id="solution" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8 block font-medium text-center">
          06 — {t('app.title')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6 text-center">
          {t('app.title')}
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto text-center">
          {t('app.subtitle')}
        </p>

        {/* 2x2 App Mockup Grid */}
        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {screens.map((screen, index) => (
            <div
              key={index}
              className="bg-[#EDF8FB] rounded-2xl border border-gray-100 p-6 md:p-8 hover:border-[#5ECCE6]/30 transition-all"
            >
              {/* Phone Frame */}
              <div className="relative mx-auto w-[260px] md:w-[280px]">
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19]">
                    <img
                      src={screen.image}
                      alt={screen.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-full" />
                </div>
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs font-semibold text-[#5ECCE6] mb-2 block tracking-wider uppercase">
                  {String(index + 1).padStart(2, '0')}. {screen.label}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(screen.step)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
