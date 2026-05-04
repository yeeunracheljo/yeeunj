import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function PortfolioHero() {
  const { t } = useTranslation('home');
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 3, y: x * -3 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[68vh] flex items-center justify-center px-6 md:px-12 lg:px-20 pt-20 pb-16 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* ── Background Gradients ── */}
      {/* Top accent line */}
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1876fb] to-transparent opacity-30" />

      {/* Left-top corner blue glow */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_#1876fb_0%,_rgba(24,118,251,0.05)_40%,_transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      {/* Right-bottom soft white glow */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      {/* Decorative floating shapes */}
      <div className={`absolute top-28 left-[15%] w-3 h-3 rounded-full border border-[#1876fb]/30 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} />
      <div className={`absolute bottom-32 left-[25%] w-4 h-4 rounded-lg border border-[#1876fb]/15 rotate-45 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} />
      <div className={`absolute bottom-24 right-[15%] w-2.5 h-2.5 rounded-full bg-[#1876fb]/10 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} />

      {/* Location label */}
      <p className={`absolute top-6 right-8 text-xs text-gray-400 tracking-widest uppercase transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}>
        {t('hero.location')}
      </p>

      <div
        className="max-w-6xl mx-auto w-full transition-transform duration-300 ease-out will-change-transform"
        style={{ transform: `translateY(8px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* ── Left — Name + Role Badge ── */}
          <div className={`flex-shrink-0 transition-all duration-1000 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#333] leading-none tracking-tight cursor-default select-none group">
              <span className="inline-block transition-all duration-700 hover:drop-shadow-[0_0_40px_rgba(24,118,251,0.15)] hover:scale-[1.02]">
                {t('hero.name')}
              </span>
            </h1>

          </div>

          {/* ── Right — Tagline + Graphic strip + Button ── */}
          <div className="text-right flex flex-col items-end gap-4 max-w-sm md:translate-y-3">
            <p className={`text-lg md:text-xl lg:text-xl text-gray-500 font-light leading-relaxed tracking-wide transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block">{t('hero.tagline1')}</span>
              <span className="block">{t('hero.tagline2')}</span>
            </p>

            <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1876fb] text-white rounded-full text-lg font-bold overflow-hidden hover:bg-[#1463d5] hover:scale-105 hover:shadow-[0_0_40px_rgba(24,118,251,0.4)] active:scale-95 transition-all duration-500 whitespace-nowrap cursor-pointer shadow-lg"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 via-transparent to-white/10" />

                {/* Top shimmer line on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:w-full transition-all duration-700" />

                <span className="relative z-10">View Work</span>
                <span className="relative z-10 w-5 h-5 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-lg transition-transform duration-300 group-hover:translate-x-1" />
                </span>

                {/* Border ring on hover */}
                <span className="absolute inset-0 rounded-full border-2 border-white/0 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
