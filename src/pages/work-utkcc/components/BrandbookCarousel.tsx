import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const brandbookImages = [
  {
    id: 1,
    url: 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/51f304e6-1701-49e8-8d82-55cb5d0d1c7f_Screenshot-2026-05-03-at-12.39.14AM.png?v=90ec9e7c038361fe0e0ed088484f41a2',
    alt: 'Branding Book System',
  },
  {
    id: 2,
    url: 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/d893de4a-ff38-45bd-a056-4cbac555d9f8_Screenshot-2026-05-03-at-12.29.54AM.png?v=4cfd068aff518ca5fde1e8488c4af20a',
    alt: 'Logo Detail',
  },
  {
    id: 3,
    url: 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/8852a1a4-fa0b-4a40-b44c-5eff98411d2e_Screenshot-2026-05-03-at-12.30.37AM.png?v=1a8d378e278107be7744545ee1756dd6',
    alt: 'Logo',
  },
  {
    id: 4,
    url: 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/44870fc8-0418-4fec-abeb-30ef103e68ba_Screenshot-2026-05-03-at-12.30.49AM.png?v=9b4b2569b72e6511d1f067e6441f1c88',
    alt: 'Color Palette',
  },
];

export default function BrandbookCarousel() {
  const { t } = useTranslation('workUtkcc');
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? brandbookImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === brandbookImages.length - 1 ? 0 : c + 1));

  const active = brandbookImages[current];

  return (
    <div className="mt-10 max-w-4xl mx-auto">
      <div className="relative rounded-xl overflow-hidden border border-[#013385]/15 bg-white shadow-sm">
        {/* Prev / Next */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 border border-gray-200 text-gray-600 hover:text-[#013385] hover:border-[#013385]/30 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
          aria-label="Previous"
        >
          <i className="ri-arrow-left-s-line text-lg" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 border border-gray-200 text-gray-600 hover:text-[#013385] hover:border-[#013385]/30 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
          aria-label="Next"
        >
          <i className="ri-arrow-right-s-line text-lg" />
        </button>

        {/* Image */}
        <div className="aspect-[16/9] overflow-hidden bg-gray-50">
          <img
            src={active.url}
            alt={active.alt}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Caption + dots */}
        <div className="flex items-center justify-between px-4 py-3">
          <p className="text-gray-500 text-sm">
            {t('strategy.brandbookCaption')}
          </p>
          <div className="flex items-center gap-1.5">
            {brandbookImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                  i === current ? 'bg-[#013385]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}