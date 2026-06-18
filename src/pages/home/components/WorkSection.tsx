import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import drRejuallCover from '@/assets/dr-rejuall-cover.svg';

export default function WorkSection() {
  const { t } = useTranslation('home');
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: t('work.utkcc.title'),
      org: t('work.utkcc.org'),
      orgLink: "https://utkcc.ca",
      period: t('work.utkcc.period'),
      tags: t('work.utkcc.tags').split(','),
      hoverAccent: 'group-hover:text-[#1876fb]',
      category: t('work.utkcc.category'),
      path: "/work/utkcc",
      imageUrl: "https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/6b354ca68abc2d6aabf0ece5d2e4646b.jpeg",
    },
    {
      title: t('work.karrot.title'),
      org: t('work.karrot.org'),
      orgLink: null,
      period: t('work.karrot.period'),
      tags: t('work.karrot.tags').split(','),
      hoverAccent: 'group-hover:text-[#1876fb]',
      category: t('work.karrot.category'),
      path: "/work/karrot-campus-sprint",
      imageUrl: "https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/6246451938110c926cae48ea9f3eee7b.png",
    },
    {
      title: t('work.anua.title'),
      org: t('work.anua.org'),
      orgLink: "https://utkcc.ca",
      period: t('work.anua.period'),
      tags: t('work.anua.tags').split(','),
      hoverAccent: 'group-hover:text-[#1876fb]',
      category: t('work.anua.category'),
      path: "/work/anua-consumer-report",
      imageUrl: "https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/ebb58bd370aa5de35209540241967e8e.png",
    },
    {
      title: t('work.drRejuall.title'),
      org: t('work.drRejuall.org'),
      orgLink: null,
      period: t('work.drRejuall.period'),
      tags: t('work.drRejuall.tags').split(','),
      hoverAccent: 'group-hover:text-[#1876fb]',
      category: t('work.drRejuall.category'),
      path: "/work/dr-rejuall",
      imageUrl: drRejuallCover,
    },
    {
      title: t('work.lg.title'),
      org: t('work.lg.org'),
      orgLink: "https://utkcc.ca",
      period: t('work.lg.period'),
      tags: t('work.lg.tags').split(','),
      hoverAccent: 'group-hover:text-[#1876fb]',
      category: t('work.lg.category'),
      path: "/work/lg-interbrand-strategy",
      imageUrl: "https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/ed4e070f64995898c87ee223963d7c62.png",
    },
    {
      title: t('work.macslearning.title'),
      org: t('work.macslearning.org'),
      orgLink: null,
      period: t('work.macslearning.period'),
      tags: t('work.macslearning.tags').split(','),
      hoverAccent: 'group-hover:text-[#1876fb]',
      category: t('work.macslearning.category'),
      path: "/work/macslearning",
      imageUrl: "https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/98876e68674bdb4973499dc752c109db.png",
    },
    {
      title: t('work.reta.title'),
      org: t('work.reta.org'),
      orgLink: null,
      period: t('work.reta.period'),
      tags: t('work.reta.tags').split(','),
      hoverAccent: 'group-hover:text-[#1876fb]',
      category: 'ESG / App Concept',
      path: "/work/reta",
      imageUrl: "https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/8602130bb8279728e0c2c6c7e44bcdd3.png",
    },
  ];

  return (
    <section ref={sectionRef} id="work" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-12 md:mb-16">
          <p className="text-xs text-gray-400 tracking-widest uppercase mb-3">
            {t('index.work')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#333]">
            {t('work.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => project.path !== '#' && navigate(project.path)}
              className={`group block w-full text-left bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 md:h-64 overflow-hidden shrink-0">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />


              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base md:text-lg font-semibold text-[#333] mb-2 leading-snug">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {project.orgLink ? (
                    <a
                      href={project.orgLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-[#1876fb] transition-colors underline decoration-gray-300 hover:decoration-[#1876fb]"
                    >
                      {project.org}
                    </a>
                  ) : (
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{project.org}</p>
                  )}
                  <span className="text-gray-200">|</span>
                  <p className="text-xs text-gray-400">{project.period}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium border bg-gray-50 text-gray-600 border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`flex items-center gap-2 text-sm font-medium text-[#1876fb] transition-all mt-auto group-hover:gap-3`}>
                  <span>View Project</span>
                  <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
