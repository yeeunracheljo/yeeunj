import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import RewinedCaseStudy from './RewinedCaseStudy';
import CareerSeminarCaseStudy from './CareerSeminarCaseStudy';

export default function CareerCampaign() {
  const { t } = useTranslation('workUtkcc');
  const [showRewined, setShowRewined] = useState(false);
  const [showCareerSeminar, setShowCareerSeminar] = useState(false);

  return (
    <section id="signature" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#013385] uppercase mb-6 block font-medium text-center">
          07 — {t('toc.signature')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-4 text-center">
          {t('signature.title')}
        </h2>

        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-2xl mx-auto text-center">
          {t('signature.desc')}
        </p>

        {/* Two large signature event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Career Seminar — opens new case study modal */}
          <button
            onClick={() => setShowCareerSeminar(true)}
            className="group text-left rounded-xl overflow-hidden border border-[#013385]/10 hover:border-[#013385]/30 transition-all bg-white hover:shadow-sm cursor-pointer"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src="https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/b5ae4305818b7b79f31daf8b152f762d.png"
                alt="Career Seminar"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
              <div className="absolute top-4 right-4">
                <i className="ri-arrow-right-up-line text-xl text-white drop-shadow-lg hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-[#15549f] mb-2 uppercase">
                {t('signature.careerTitle')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t('signature.careerSeminarShort')}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200">
                  Content-Driven
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200">
                  Panel
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200">
                  Virtual
                </span>
              </div>
            </div>
          </button>

          {/* Re:wined — opens new case study modal */}
          <button
            onClick={() => setShowRewined(true)}
            className="group text-left rounded-xl overflow-hidden border border-[#013385]/10 hover:border-[#013385]/30 transition-all bg-white hover:shadow-sm cursor-pointer"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src="https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/bba8e52f5a2bf614d5fa06da00755b2d.png"
                alt="Wine Networking Night"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
              <div className="absolute top-4 right-4">
                <i className="ri-arrow-right-up-line text-xl text-white drop-shadow-lg hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-[#732743] mb-2 uppercase">
                {t('signature.wineTitle')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t('signature.wineNightShort')}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200">
                  Experience-Driven
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200">
                  Storytelling
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200">
                  Social
                </span>
              </div>
            </div>
          </button>
        </div>

      </div>

      <RewinedCaseStudy
        isOpen={showRewined}
        onClose={() => setShowRewined(false)}
      />

      <CareerSeminarCaseStudy
        isOpen={showCareerSeminar}
        onClose={() => setShowCareerSeminar(false)}
      />
    </section>
  );
}
