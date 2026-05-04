import { useTranslation } from 'react-i18next';

export default function ExperienceSection() {
  const { t } = useTranslation('home');

  const experiences = [
    {
      role: t('exp.utkccDirector.role'),
      org: t('exp.utkccDirector.org'),
      period: t('exp.utkccDirector.period'),
      category: t('experience.leadership'),
      skills: t('exp.utkccDirector.skills').split(','),
    },
    {
      role: t('exp.utkccCommittee.role'),
      org: t('exp.utkccCommittee.org'),
      period: t('exp.utkccCommittee.period'),
      category: t('experience.leadership'),
      skills: t('exp.utkccCommittee.skills').split(','),
    },
    {
      role: t('exp.utkccDirector.role'),
      org: t('exp.utkccDirector.org'),
      period: t('exp.utkccDirector.period'),
      category: t('experience.leadership'),
      skills: t('exp.utkccDirector.skills').split(','),
    },
    {
      role: t('exp.macs.role'),
      org: t('exp.macs.org'),
      period: t('exp.macs.period'),
      category: t('experience.workExperience'),
      skills: t('exp.macs.skills').split(','),
    },
    {
      role: t('exp.beyond.role'),
      org: t('exp.beyond.org'),
      period: t('exp.beyond.period'),
      category: t('experience.workExperience'),
      skills: t('exp.beyond.skills').split(','),
    },
    {
      role: t('exp.karrot.role'),
      org: t('exp.karrot.org'),
      period: t('exp.karrot.period'),
      category: t('experience.selectedProject'),
      skills: t('exp.karrot.skills').split(','),
    },
    {
      role: t('exp.anua.role'),
      org: t('exp.anua.org'),
      period: t('exp.anua.period'),
      category: t('experience.selectedProject'),
      skills: t('exp.anua.skills').split(','),
    },
    {
      role: t('exp.lg.role'),
      org: t('exp.lg.org'),
      period: t('exp.lg.period'),
      category: t('experience.selectedProject'),
      skills: t('exp.lg.skills').split(','),
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">
          {t('experience.sectionTitle')}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#333] mb-16">
          {t('experience.title')}
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-white rounded-xl border border-gray-100 hover:border-[#1876fb]/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="md:w-48 shrink-0">
                  <span className="text-xs font-semibold text-[#1876fb] uppercase tracking-wider">
                    {exp.category}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#333] mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{exp.org}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-[#1876fb]/10 text-[#1876fb] text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
