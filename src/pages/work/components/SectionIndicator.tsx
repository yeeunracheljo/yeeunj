import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface SectionMap {
  id: string;
  num: string;
  labelKey: string;
}

const sections: SectionMap[] = [
  { id: 'role', num: '01', labelKey: 'role.sectionTitle' },
  { id: 'introduction', num: '02', labelKey: 'intro.sectionTitle' },
  { id: 'problem', num: '03', labelKey: 'problem.sectionTitle' },
  { id: 'analysis', num: '04', labelKey: 'swot.sectionTitle' },
  { id: 'strategy', num: '05', labelKey: 'demand.sectionTitle' },
  { id: 'execution', num: '06', labelKey: 'activation.sectionTitle' },
  { id: 'results', num: '07', labelKey: 'results.sectionTitle' },
  { id: 'metrics', num: '08', labelKey: 'metrics.sectionTitle' },
  { id: 'marketing', num: '09', labelKey: 'marketing.sectionTitle' },
  { id: 'scaling', num: '10', labelKey: 'scaling.sectionTitle' },
  { id: 'insight', num: '11', labelKey: 'takeaway.sectionTitle' },
];

export default function SectionIndicator() {
  const { t } = useTranslation('work');
  const [activeId, setActiveId] = useState<string>('role');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const active = sections.find((s) => s.id === activeId);
  if (!active) return null;

  return (
    <div className="hidden md:flex items-center gap-2 ml-8">
      <span className="text-2xl font-bold text-[#FF7900] tabular-nums leading-none">
        {active.num}
      </span>
      <div className="w-px h-6 bg-[#FF7900]/20" />
      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider leading-none">
        {t(active.labelKey).replace(/^\d{2}\s*—\s*/, '')}
      </span>
    </div>
  );
}