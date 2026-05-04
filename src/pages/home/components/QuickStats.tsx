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
      className={`text-sm md:text-base font-serif text-[#333] tracking-tight transition-all duration-500 ${isAnimating ? 'scale-105 drop-shadow-[0_0_20px_rgba(24,118,251,0.3)] text-[#1876fb]' : ''}`}
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
    <section ref={sectionRef} className="pt-20 pb-10 md:pt-24 md:pb-14 relative overflow-hidden">
      {/* Full-width subtle blue gradient base */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1876fb]/[0.04] via-transparent to-[#1876fb]/[0.04] pointer-events-none" />

      {/* Top edge gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1876fb]/20 to-transparent" />

      {/* Subtle blue glow on left - expanded */}
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] -translate-y-1/2 bg-[radial-gradient(circle_at_center,_#1876fb_0%,_rgba(24,118,251,0.05)_50%,_transparent_70%)] rounded-full blur-3xl pointer-events-none opacity-40" />

      {/* Subtle blue glow on right - expanded */}
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] -translate-y-1/2 bg-[radial-gradient(circle_at_center,_#1876fb_0%,_rgba(24,118,251,0.03)_50%,_transparent_70%)] rounded-full blur-3xl pointer-events-none opacity-30" />

      <div className="max-w-5xl mx-auto md:px-16 lg:px-20 relative z-10 flex flex-col items-center">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {statItems.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative min-h-[96px] md:min-h-[104px] rounded-2xl border border-[#e5e5e5] bg-white hover:bg-[#fafafa] hover:border-[#ccc] hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(0,0,0,0.06)] transition-all duration-700 cursor-default ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Subtle blue gradient tint */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1876fb]/8 via-transparent to-[#1876fb]/5" />
              
              {/* Top blue shimmer line on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#1876fb]/50 to-transparent group-hover:w-full transition-all duration-700" />

              <div className="relative h-full px-4 py-4 md:px-5 md:py-4 text-center flex flex-col items-center justify-center">
                {/* Number */}
                <div className="mb-3">
                  <AnimatedNumber value={stat.value} />
                </div>

                {/* Label */}
                <p className="text-[10px] md:text-[11px] text-[#333]/60 tracking-[0.14em] uppercase font-semibold leading-snug group-hover:text-[#333]/90 transition-colors duration-300">
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
