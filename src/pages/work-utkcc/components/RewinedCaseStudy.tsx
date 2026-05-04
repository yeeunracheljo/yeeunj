import { useEffect, useRef, useState, useCallback } from 'react';

const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'execution2025', label: '2025 Execution' },
  { id: 'optimization2026', label: '2026 Optimization' },
  { id: 'strategy', label: 'Campaign Strategy' },
  { id: 'outcome', label: 'Outcome' },
];

const colors = [
  { hex: '#f7f7f7', name: 'Paper White' },
  { hex: '#e9e6be', name: 'Champagne' },
  { hex: '#f0d5d6', name: 'Rose Mist' },
  { hex: '#a20100', name: 'Crimson' },
  { hex: '#600f26', name: 'Merlot' },
  { hex: '#490000', name: 'Port' },
];

const strategyItems = [
  'Structured the campaign as a narrative flow rather than a single announcement (awareness → credibility → engagement)',
  'Built credibility through alumni speakers and professional context',
  'Introduced a wine-inspired visual system, aligning color and tone to create a more refined and exclusive experience tailored to alumni expectations',
  'Increased engagement through content sequencing across multiple posts',
  'Incorporated lifestyle elements (e.g., chocolate pairing) to make promotion feel more natural and less transactional',
  'Leveraged short-form video (Reels) to expand reach and visibility',
];

const outcomeItems = [
  { value: '~100', label: 'Attendees', desc: 'Students & alumni professionals', icon: 'ri-group-line' },
  { value: '20–25', label: 'Alumni Speakers', desc: 'Shared career insights and networking opportunities', icon: 'ri-mic-line' },
  { value: '11.1k', label: 'Reel Reach', desc: 'Online invitation driving broader visibility', icon: 'ri-film-line' },
  { value: 'Dual', label: 'Experience', desc: 'Professional networking + social atmosphere', icon: 'ri-heart-pulse-line' },
];

const newImage2026Poster = 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/76ddbd9f-a4e9-46b7-81d8-40d92866b127_Screenshot-2026-05-03-at-9.42.32PM.png?v=3ab38eb8ae51a37552170203eaa0a53a';
const newImageChocolate = 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/f390761d-6d72-483e-9d27-8511794e63ae_Screenshot-2026-05-03-at-9.44.37PM.png?v=07a677be3fe30483e3c65ff5eba60cf0';
const newImageSpeaker = 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/6015dcdb-9985-4205-880d-ad0b36417ae0_Screenshot-2026-05-03-at-9.44.51PM.png?v=88044ed27bb0d3d50ec5c006075b0987';
const newImagePamphlet = [
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/abd22bbc-3189-458b-95c9-af490a094e55_Screenshot-2026-05-03-at-9.45.14PM.png?v=dd614b1c775cde360a99ae47bda09e7e',
  'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/5e259797-b1e9-4b24-90bf-dbeb60042c05_Screenshot-2026-05-03-at-9.45.41PM.png?v=4479564db799b341d611a6ab292d5207',
];
const newImageNameTag = 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/2c151f49-5d50-4935-a7cd-2fbab0204c2a_Screenshot-2026-05-03-at-10.03.26PM.png?v=d64f0466f7df83bc449e109f5af8a238';
const newVideoUrl = 'https://19-wine-party.vercel.app/invitation?code=App';

interface RewinedCaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
}

function ImageSlider({ images, label }: { images: string[]; label: string }) {
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
  const goNext = () => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <div className="relative rounded-xl overflow-hidden">
      <img
        src={images[current]}
        alt={`${label} ${current + 1}`}
        className="w-full h-auto object-contain max-h-[600px]"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#600f26] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            aria-label="Previous image"
          >
            <i className="ri-arrow-left-s-line text-lg" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#600f26] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            aria-label="Next image"
          >
            <i className="ri-arrow-right-s-line text-lg" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-[#600f26]' : 'bg-white/70'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function RewinedCaseStudy({ isOpen, onClose }: RewinedCaseStudyProps) {
  const [activeSection, setActiveSection] = useState('intro');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  const copyToClipboard = useCallback((hex: string) => {
    navigator.clipboard.writeText(hex).catch(() => {});
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = sectionRefs.current[id];
    if (!el || !containerRef.current) return;
    const top = el.offsetTop - 24;
    containerRef.current.scrollTo({ top, behavior: 'smooth' });
    setActiveSection(id);
  }, []);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    let current = 'intro';
    for (const s of sections) {
      const el = sectionRefs.current[s.id];
      if (el && el.offsetTop - 40 <= scrollTop) {
        current = s.id;
      }
    }
    setActiveSection(current);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative flex bg-white rounded-2xl w-full max-w-[1100px] max-h-[94vh] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Left dot navigation with tooltip */}
        <div className="hidden sm:flex flex-col items-center justify-center gap-5 px-5 border-r border-gray-200/50 bg-white/80 backdrop-blur-sm shrink-0 z-50 relative">
          {sections.map((s) => (
            <div key={s.id} className="relative group">
              <button
                onClick={() => scrollToSection(s.id)}
                className="flex items-center justify-center transition-all cursor-pointer"
                aria-label={`Scroll to ${s.label}`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeSection === s.id
                      ? 'bg-[#600f26] scale-125'
                      : 'bg-gray-300 group-hover:bg-[#600f26]/60'
                  }`}
                />
              </button>
              {/* Hover tooltip - shows only on hover, always on top of content */}
              <span className="absolute left-7 top-1/2 -translate-y-1/2 bg-[#600f26] text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg z-50">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scrollable content */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto relative"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-40 w-8 h-8 rounded-full bg-white/90 text-gray-600 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer shadow-sm border border-gray-100"
            aria-label="Close"
          >
            <i className="ri-close-line text-lg" />
          </button>

          <div className="px-8 md:px-14 py-10 md:py-14">
            {/* TITLE AREA */}
            <div className="mb-12 text-center">
              <h1 className="font-serif text-5xl md:text-6xl text-[#732743] tracking-tight leading-none uppercase">
                Re: Wined
              </h1>
              <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mt-3">
                Wine Networking Night Case Study
              </p>
            </div>

            {/* AREA 1 — Intro */}
            <div
              ref={(el) => { sectionRefs.current.intro = el; }}
              className="mb-14"
            >
              <div className="relative rounded-2xl border border-[#600f26]/15 bg-gradient-to-br from-[#fdf8f8] via-[#f9f0f0] to-[#f5e8e8] p-8 md:p-10 text-center overflow-hidden">
                {/* subtle corner gradient inside card */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#600f26]/8 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#600f26]/8 via-transparent to-transparent pointer-events-none" />
                
                <div className="relative flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#600f26]/10 flex items-center justify-center mb-1">
                    <i className="ri-goblet-line text-[#600f26] text-xl" />
                  </div>
                  <p className="text-[#490000] text-base md:text-lg leading-relaxed max-w-lg mx-auto font-medium">
                    A flagship networking event designed as both a professional and social experience, refined through design and campaign decisions.
                  </p>

                </div>
              </div>
            </div>

            {/* AREA 2 — 2025 Execution */}
            <div
              ref={(el) => { sectionRefs.current.execution2025 = el; }}
              className="mb-14"
            >
              <h2 className="text-xs font-semibold tracking-[0.2em] text-[#600f26] uppercase mb-5 text-center">
                2025 Execution
              </h2>
              <p className="text-gray-500 text-sm mb-6 text-center">
                Initial version exploring multiple engagement formats.
              </p>

              {/* 2025 Layout */}
              <div className="flex flex-col gap-8 max-w-[900px] mx-auto">
                {/* 1. General promotional poster — full width, bigger */}
                <div className="text-center">
                  <img
                    src="https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/cf94c4bd-3b7e-400d-8785-7fa8f11c5693_Screenshot-2026-05-03-at-3.16.10PM.png?v=d3b6cc6f02ff65a640baa0bcbbe0bfcf"
                    alt="General promotional poster"
                    className="w-full h-auto object-contain max-h-[700px] rounded-xl"
                  />
                  <p className="mt-2 text-[11px] text-gray-400">Promotional poster</p>
                </div>

                {/* 2. Row: Wine pairing slider + Speaker poster */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="text-center">
                    <ImageSlider
                      images={[
                        'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/266d5d16-d918-4b90-a23b-55a2384e0c5c_Screenshot-2026-05-03-at-8.57.12PM.png?v=85853838daaf4c6a0f52e069a3a13809',
                        'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/40950ddd-ab0e-4da5-92b2-3648986ec6f2_Screenshot-2026-05-03-at-8.57.19PM.png?v=81e289b4750ed01ab321f1ef6dadb1ca',
                      ]}
                      label="Wine × movie pairing poster"
                    />
                    <p className="mt-2 text-[11px] text-gray-400">Wine × movie pairing poster</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/a42ccd10-6dfc-4792-bff6-783f4c41cc14_Screenshot-2026-05-03-at-9.35.19PM.png?v=850b39189fc77236f9e6e68de05f07d3"
                      alt="Speaker poster"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                    <p className="mt-2 text-[11px] text-gray-400">Speaker poster</p>
                  </div>
                </div>

                {/* 3. Row: Event description + Alumni letter */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="text-center">
                    <img
                      src="https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/a77d5605-7b4e-412c-87b8-2ca15431b1fe_Screenshot-2026-05-03-at-3.17.55PM.png?v=f2dbd344ac6eb678eb64af33d7a1be0f"
                      alt="Event description"
                      className="w-full h-auto object-contain max-h-[600px] rounded-xl"
                    />
                    <p className="mt-2 text-[11px] text-gray-400">Event program</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/78a21235-4944-4ff7-813a-46c340efff71_Screenshot-2026-05-03-at-3.18.02PM.png?v=ef36af42ce2e8f5eba2ce6c392bf45d3"
                      alt="Alumni letter"
                      className="w-full h-auto object-contain max-h-[600px] rounded-xl"
                    />
                    <p className="mt-2 text-[11px] text-gray-400">Alumni letter</p>
                  </div>
                </div>

                {/* 4. Name tag (2025) — full width */}
                <div className="text-center">
                  <img
                    src="https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/6113ee22-5502-4942-b726-2b7302fdc054_Screenshot-2026-05-03-at-9.12.39PM.png?v=3a50e035994cf300f386251a220938f7"
                    alt="Name tag (2025)"
                    className="w-full h-auto object-contain max-h-[600px] rounded-xl"
                  />
                  <p className="mt-2 text-[11px] text-gray-400">Name tag</p>
                </div>
              </div>
            </div>

            {/* AREA 3 — 2026 Optimization */}
            <div
              ref={(el) => { sectionRefs.current.optimization2026 = el; }}
              className="mb-14"
            >
              <h2 className="text-xs font-semibold tracking-[0.2em] text-[#600f26] uppercase mb-5 text-center">
                2026 Optimization
              </h2>
              <p className="text-gray-500 text-sm mb-4 text-center">
                Refined based on user behavior, focusing on clarity and engagement.
              </p>
              <p className="text-[11px] text-gray-400 mb-6 italic text-center">
                Simplified materials replaced low-engagement formats.
              </p>

              {/* 2026 Layout — matching user's attached images */}
              <div className="flex flex-col gap-8 max-w-[900px] mx-auto">
                {/* 1. Promotional poster (2026) — full width */}
                <div className="text-center">
                  <img
                    src={newImage2026Poster}
                    alt="Promotional poster (2026)"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                  <p className="mt-2 text-[11px] text-gray-400">Promotional poster</p>
                </div>

                {/* 2. Row: Wine × Chocolate pairing poster + Speaker poster */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="text-center">
                    <img
                      src={newImageChocolate}
                      alt="Wine × Chocolate pairing poster"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                    <p className="mt-2 text-[11px] text-gray-400">Wine × Chocolate pairing poster</p>
                  </div>
                  <div className="text-center">
                    <img
                      src={newImageSpeaker}
                      alt="Speaker poster"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                    <p className="mt-2 text-[11px] text-gray-400">Speaker poster</p>
                  </div>
                </div>

                {/* 3. Pamphlet — two pages side by side with horizontal scroll on mobile */}
                <div className="text-center">
                  <div className="flex gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2">
                    <div className="flex-1 min-w-[280px] md:min-w-0 snap-center">
                      <img
                        src={newImagePamphlet[0]}
                        alt="Pamphlet page 1"
                        className="w-full h-auto object-contain rounded-xl"
                      />
                    </div>
                    <div className="flex-1 min-w-[280px] md:min-w-0 snap-center">
                      <img
                        src={newImagePamphlet[1]}
                        alt="Pamphlet page 2"
                        className="w-full h-auto object-contain rounded-xl"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] text-gray-400">Pamphlet</p>
                </div>

                {/* 4. Name tag — full width */}
                <div className="text-center">
                  <img
                    src={newImageNameTag}
                    alt="Updated name tag"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                  <p className="mt-2 text-[11px] text-gray-400">Name tag</p>
                </div>

                {/* 5. Online invitation — website iframe */}
                <div className="text-center">
                  <div className="relative w-full h-[75vh] min-h-[600px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                    <iframe
                      src={newVideoUrl}
                      className="w-full h-full border-0"
                      style={{ overflow: 'auto', WebkitOverflowScrolling: 'touch' }}
                      scrolling="yes"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Online invitation"
                    />
                  </div>
                  <p className="mt-2 text-[11px] text-gray-400">Online invitation</p>
                </div>
              </div>
            </div>

            {/* AREA 4 — Campaign Strategy */}
            <div
              ref={(el) => { sectionRefs.current.strategy = el; }}
              className="mb-14"
            >
              <h2 className="text-xs font-semibold tracking-[0.2em] text-[#600f26] uppercase mb-6 text-center">
                Campaign Strategy
              </h2>

              {/* Impact cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                {strategyItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl border border-[#600f26]/10 bg-[#fafafa] hover:border-[#600f26]/25 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#600f26] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              {/* Color System — interactive */}
              <div className="mb-6">
                <h3 className="text-[11px] font-semibold tracking-wider text-[#600f26] uppercase mb-4 text-center">
                  Color System
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {colors.map((c, idx) => (
                    <button
                      key={idx}
                      onClick={() => copyToClipboard(c.hex)}
                      className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-100 hover:border-[#600f26]/30 hover:shadow-md transition-all cursor-pointer active:scale-95"
                    >
                      <div
                        className="w-14 h-14 rounded-full border border-gray-200 group-hover:scale-110 transition-transform shadow-sm"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-[10px] text-gray-500 font-mono">{c.hex}</span>
                      <span className="text-[10px] text-gray-400">{c.name}</span>
                      {copiedColor === c.hex && (
                        <span className="text-[10px] text-green-600 font-medium">Copied!</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-gray-400 italic text-center">
                Replaced UTKCC navy palette with wine-inspired tones.
              </p>
            </div>

            {/* AREA 5 — Outcome */}
            <div
              ref={(el) => { sectionRefs.current.outcome = el; }}
              className="mb-4"
            >
              <h2 className="text-xs font-semibold tracking-[0.2em] text-[#600f26] uppercase mb-6 text-center">
                Outcome
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {outcomeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-gradient-to-br from-[#600f26] to-[#490000] text-white text-center flex flex-col items-center justify-center min-h-[160px]"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                      <i className={`${item.icon} text-lg`} />
                    </div>
                    <span className="block text-3xl md:text-4xl font-serif leading-none mb-2">
                      {item.value}
                    </span>
                    <span className="block text-sm font-medium text-white/90 mb-1">
                      {item.label}
                    </span>
                    <span className="block text-[11px] text-white/60 leading-tight">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}