import { useEffect, useRef, useState } from 'react';

interface MetricBar {
  label: string;
  value: number;
  color: string;
}

const metrics: MetricBar[] = [
  { label: 'Chat Initiation', value: 72, color: '#FF7900' },
  { label: 'User Curiosity', value: 65, color: '#E85D04' },
  { label: 'Seller Response', value: 28, color: '#F4A261' },
  { label: 'Transaction Complete', value: 15, color: '#C84A00' },
];

export default function MetricsChart() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      <div className="space-y-5">
        {metrics.map((m) => (
          <div key={m.label} className="group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{m.label}</span>
              <span className="text-sm font-bold text-gray-900">{m.value}%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out relative"
                style={{
                  width: animated ? `${m.value}%` : '0%',
                  backgroundColor: m.color,
                }}
              >
                <div className="absolute inset-0 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-white/60 rounded-lg border border-orange-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#FF7900]/10 flex items-center justify-center">
            <i className="ri-bar-chart-box-line text-[#FF7900]" />
          </div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Key Insight:</span>{' '}
            Demand visibility drove engagement, but low seller response rate (28%) revealed the supply-demand gap
          </p>
        </div>
      </div>
    </div>
  );
}