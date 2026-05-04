import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const tagIcons: Record<string, string> = {
  "Adobe Photoshop": "ri-image-edit-line",
  "Figma": "ri-pen-nib-line",
  "Microsoft Office": "ri-file-list-line",
  "Tableau": "ri-bar-chart-box-line",
  "Instagram": "ri-camera-3-line",
  "YouTube": "ri-video-line",
  "Cross-functional Communication": "ri-exchange-line",
  "Collaboration": "ri-team-line",
  "Presentation & Synthesis": "ri-slideshow-line",
  "Adaptability": "ri-refresh-line",
  "Time Management": "ri-time-line",
  "기능 간 커뮤니케이션": "ri-exchange-line",
  "협업": "ri-team-line",
  "프레젠테이션 및 종합": "ri-slideshow-line",
  "적응력": "ri-refresh-line",
  "시간 관리": "ri-time-line",
};

function getIcon(tag: string): string {
  return tagIcons[tag.trim()] || "ri-circle-line";
}

export default function SkillsSection() {
  const { t } = useTranslation('home');
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  const skills = [
    {
      icon: "ri-tools-line",
      title: t('skills.tools.title'),
      description: t('skills.tools.desc'),
      tags: t('skills.tools.tags').split(',').map(s => s.trim()),
    },
    {
      icon: "ri-user-heart-line",
      title: t('skills.soft.title'),
      description: t('skills.soft.desc'),
      tags: t('skills.soft.tags').split(',').map(s => s.trim()),
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs tracking-[0.2em] text-gray-400 uppercase font-medium">
            {t('skills.sectionTitle')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#333] mt-3 leading-tight">
            {t('skills.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-br from-white via-[#f8fbff]/70 to-[#eef5ff]/50 rounded-2xl border border-gray-100 p-8 md:p-10">
              {/* Card header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1876fb] flex items-center justify-center shrink-0">
                  <i className={`${skill.icon} text-white text-xl`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#333]">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-0.5 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Tags in boxes - 3 columns horizontal grid */}
              <div className="grid grid-cols-3 gap-3">
                {skill.tags.map((tag) => {
                  const isHovered = hoveredTag === tag;
                  return (
                    <div
                      key={tag}
                      onMouseEnter={() => setHoveredTag(tag)}
                      onMouseLeave={() => setHoveredTag(null)}
                      className="flex flex-col items-center gap-2 px-3 py-5 rounded-xl border transition-all duration-300 cursor-default text-center bg-gradient-to-br from-white via-[#f8fbff]/60 to-[#f0f5ff]/40"
                      style={{
                        backgroundColor: isHovered ? '#EDF4FF' : undefined,
                        borderColor: isHovered ? '#1876fb' : '#f3f4f6',
                        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                      }}
                    >
                      <i
                        className={`${getIcon(tag)} text-xl`}
                        style={{ color: isHovered ? '#1876fb' : '#6b7280' }}
                      />
                      <span
                        className="text-xs font-medium leading-tight"
                        style={{ color: isHovered ? '#4b5563' : '#9ca3af' }}
                      >
                        {tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
