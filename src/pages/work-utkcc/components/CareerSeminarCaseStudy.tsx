import { useEffect, useRef, useState, useCallback } from 'react';

const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'earlier', label: '2024' },
  { id: 'refined', label: '2025' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'insight', label: 'Insight' },
];

const colors = [
  { hex: '#ffffff', name: 'Paper White' },
  { hex: '#e8e8e8', name: 'Light Grey' },
  { hex: '#aebdd6', name: 'Pale Blue' },
  { hex: '#15549f', name: 'Medium Blue' },
  { hex: '#073a77', name: 'Dark Blue' },
  { hex: '#03264e', name: 'Navy' },
];

const strategyItems = [
  'Maintained a structured format (panel, breakout sessions, interactive discussion)',
  'Built around the theme "Fail Forward," reframing failure as part of growth',
  'Focused on delivering career insights through alumni speakers',
  'Used clean, information-focused visuals aligned with a professional tone',
];

const outcomeItems = [
  { value: '~70', label: 'Attendees', desc: 'Students & alumni professionals', icon: 'ri-group-line' },
  { value: '4', label: 'Alumni Speakers', desc: 'Shared career insights', icon: 'ri-mic-line' },
  { value: 'Virtual', label: 'Format', desc: 'Accessible across regions', icon: 'ri-global-line' },
];

const IMG_2024_POSTER = 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/47955702-7e13-4c30-910d-6007212cc796_Screenshot-2026-05-03-at-11.22.07PM.png?v=819a678fd604c1259f5458ecba97c4b2';
const IMG_2024_SPEAKER = 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/ef4b09f9-0c86-4010-baa1-c14d576eb40a_Screenshot-2026-05-03-at-11.22.20PM.png?v=635c8559794bd8d437c77245ba4fb16d';
const IMG_2025_POSTER = 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/5323b407-e03d-46b6-93c8-2ce1c6f434e3_Screenshot-2026-05-03-at-11.36.08PM.png?v=efd3a2a983898a49f3d3933b4de978b4';
const IMG_2025_SPEAKER = 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/bc50c9c5-bb30-4184-ab5f-94d9711e830c_Screenshot-2026-05-03-at-11.38.10PM.png?v=507a80ca077e9052edec67f67e46f9d8';
const CAREER_SEMINAR_SITE = 'https://uoft-kcc.github.io/19-career-seminar/index2.html';

interface CareerSeminarCaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CareerSeminarCaseStudy({ isOpen, onClose }: CareerSeminarCaseStudyProps) {
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
        {/* Left dot navigation */}
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
                      ? 'bg-[#15549f] scale-125'
                      : 'bg-gray-300 group-hover:bg-[#15549f]/60'
                  }`}
                />
              </button>
              <span className="absolute left-7 top-1/2 -translate-y-1/2 bg-[#15549f] text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg z-50">
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
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-40 w-8 h-8 rounded-full bg-white/90 text-gray-600 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer shadow-sm border border-gray-100"
            aria-label="Close"
          >
            <i className="ri-close-line text-lg" />
          </button>

          <div className="px-8 md:px-14 py-10 md:py-14">
            {/* TITLE */}
            <div className="mb-12 text-center">
              <h1 className="font-serif text-5xl md:text-6xl text-[#15549f] tracking-tight leading-none">
                Career Seminar
              </h1>
              <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mt-3">
                networking event case study
              </p>
            </div>

            {/* AREA 1 — Intro */}
            <div ref={(el) => { sectionRefs.current.intro = el; }} className="mb-14">
              <div className="relative rounded-2xl border border-[#15549f]/15 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] p-8 md:p-10 text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#15549f]/8 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#15549f]/8 via-transparent to-transparent pointer-events-none" />
                <div className="relative flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#15549f]/10 flex items-center justify-center mb-1">
                    <i className="ri-briefcase-line text-[#15549f] text-xl" />
                  </div>
                  <p className="text-[#03264e] text-base md:text-lg leading-relaxed max-w-lg mx-auto font-medium">
                    A virtual seminar designed to improve accessibility for students outside Canada, delivering career insights through alumni speakers while exploring how content-driven formats impact engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* AREA 2 — 2024 Execution */}
            <div ref={(el) => { sectionRefs.current.earlier = el; }} className="mb-14">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-[#15549f] uppercase mb-5 text-center">
                2024 Execution
              </h2>
              <p className="text-gray-500 text-sm mb-6 text-center">
                Initial promotional materials focused on posters and speaker announcements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
                <div className="text-center">
                  <div className="w-full h-auto bg-gray-100 rounded-xl overflow-hidden">
                    <img src={IMG_2024_POSTER} alt="Promotional poster" className="w-full h-auto object-contain" />
                  </div>
                  <p className="mt-2 text-[11px] text-gray-400">Promotional poster</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-auto bg-gray-100 rounded-xl overflow-hidden">
                    <img src={IMG_2024_SPEAKER} alt="Speaker poster" className="w-full h-auto object-contain" />
                  </div>
                  <p className="mt-2 text-[11px] text-gray-400">Speaker poster</p>
                </div>
              </div>
            </div>

            {/* AREA 3 — 2025 Optimization */}
            <div ref={(el) => { sectionRefs.current.refined = el; }} className="mb-14">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-[#15549f] uppercase mb-5 text-center">
                2025 Optimization
              </h2>
              <p className="text-gray-500 text-sm mb-6 text-center">
                Expanded materials with an online invitation to improve accessibility and clarity.
              </p>
              {/* Top row: Promotional poster + Speaker poster side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                <div className="text-center">
                  <div className="w-full h-auto bg-gray-100 rounded-xl overflow-hidden">
                    <img src={IMG_2025_POSTER} alt="Promotional poster 2025" className="w-full h-auto object-contain" />
                  </div>
                  <p className="mt-2 text-[11px] text-gray-400">Promotional poster</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-auto bg-gray-100 rounded-xl overflow-hidden">
                    <img src={IMG_2025_SPEAKER} alt="Speaker poster 2025" className="w-full h-auto object-contain" />
                  </div>
                  <p className="mt-2 text-[11px] text-gray-400">Speaker poster</p>
                </div>
              </div>
              {/* Bottom: Online invitation iframe */}
              <div className="max-w-[900px] mx-auto mt-8">
                <div className="text-center">
                  <div className="relative w-full h-[75vh] min-h-[600px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                    <iframe
                      src={CAREER_SEMINAR_SITE}
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

            {/* AREA 4 — Strategy */}
            <div ref={(el) => { sectionRefs.current.strategy = el; }} className="mb-14">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-[#15549f] uppercase mb-6 text-center">
                Strategy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                {strategyItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl border border-[#15549f]/10 bg-[#fafafa] hover:border-[#15549f]/25 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#15549f] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AREA 5 — Color System */}
            <div className="mb-14">
              <h3 className="text-[11px] font-semibold tracking-wider text-[#15549f] uppercase mb-4 text-center">
                Color System
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
                {colors.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => copyToClipboard(c.hex)}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-100 hover:border-[#15549f]/30 hover:shadow-md transition-all cursor-pointer active:scale-95"
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
              <p className="text-[11px] text-gray-400 italic text-center">
                Used a cool-toned, professional palette to reflect a more formal and informational setting.
              </p>
            </div>

            {/* AREA 6 — Outcome */}
            <div ref={(el) => { sectionRefs.current.outcome = el; }} className="mb-14">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-[#15549f] uppercase mb-6 text-center">
                Outcome
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {outcomeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-gradient-to-br from-[#073a77] to-[#03264e] text-white text-center flex flex-col items-center justify-center min-h-[160px]"
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

            {/* AREA 7 — Insight */}
            <div ref={(el) => { sectionRefs.current.insight = el; }} className="mb-4">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-[#15549f] uppercase mb-6 text-center">
                Insight
              </h2>
              <div className="p-6 md:p-8 rounded-xl bg-[#f8fafc] border border-[#15549f]/10 text-center">
                <p className="text-[#03264e] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                  Revealed that accessibility alone does not drive participation — students engage more with experience-driven formats than purely informational sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}