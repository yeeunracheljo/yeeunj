import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState('0');
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);

  const numericPart = value.replace(/[^0-9.]/g, '');
  const suffix = value.replace(/[0-9.]/g, '');
  const target = parseFloat(numericPart) || 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsAnimating(true);
          const duration = 1200;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target * 10) / 10;

            if (target >= 1000) {
              setDisplay(Math.round(current).toLocaleString() + suffix);
            } else {
              setDisplay(current + suffix);
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplay(value);
              setTimeout(() => setIsAnimating(false), 600);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, value]);

  return (
    <p
      ref={ref}
      className={`text-xs md:text-sm font-serif font-light text-[#333]/75 tracking-tight transition-all duration-500 ${isAnimating ? 'scale-105 drop-shadow-[0_0_14px_rgba(24,118,251,0.16)] text-[#1876fb]/80' : ''}`}
    >
      {display}
    </p>
  );
}

const stats = [
  { value: '3+', label: 'projects' },
  { value: '1.7K+', label: 'reach' },
  { value: '3X', label: 'conversion' },
  { value: '200+', label: 'growth' },
];

export default function QuickStats() {
  const { t } = useTranslation('home');
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  const statItems = stats.map((stat) => ({
    ...stat,
    label: t(`stats.${stat.label}`),
  }));

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          statItems.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newArr = [...prev];
                newArr[i] = true;
                return newArr;
              });
            }, i * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [statItems]);

  return (
    <section ref={sectionRef} className="relative h-[156px] md:h-[164px] overflow-hidden flex items-center">
      {/* Full-width subtle blue gradient base */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1876fb]/[0.018] via-transparent to-[#1876fb]/[0.018] pointer-events-none" />

      {/* Top edge gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1876fb]/10 to-transparent" />

      {/* Subtle blue glow on left - expanded */}
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] -translate-y-1/2 bg-[radial-gradient(circle_at_center,_#1876fb_0%,_rgba(24,118,251,0.025)_50%,_transparent_70%)] rounded-full blur-3xl pointer-events-none opacity-20" />

      {/* Subtle blue glow on right - expanded */}
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] -translate-y-1/2 bg-[radial-gradient(circle_at_center,_#1876fb_0%,_rgba(24,118,251,0.018)_50%,_transparent_70%)] rounded-full blur-3xl pointer-events-none opacity-16" />

      <div className="max-w-5xl mx-auto md:px-16 lg:px-20 relative z-10 flex w-full flex-col items-center justify-center">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {statItems.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative min-h-[84px] md:min-h-[90px] rounded-xl border border-[#ececec] bg-white/85 hover:bg-white hover:border-[#dddddd] hover:scale-[1.015] hover:shadow-[0_0_28px_rgba(0,0,0,0.035)] transition-all duration-700 cursor-default ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Subtle blue gradient tint */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1876fb]/5 via-transparent to-[#1876fb]/3" />
              
              {/* Top blue shimmer line on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-[#1876fb]/25 to-transparent group-hover:w-full transition-all duration-700" />

              <div className="relative h-full px-4 py-3 md:px-5 md:py-3 text-center flex flex-col items-center justify-center">
                {/* Number */}
                <div className="mb-2">
                  <AnimatedNumber value={stat.value} />
                </div>

                {/* Label */}
                <p className="text-[9px] md:text-[10px] text-[#333]/45 tracking-[0.16em] uppercase font-medium leading-snug group-hover:text-[#333]/65 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
