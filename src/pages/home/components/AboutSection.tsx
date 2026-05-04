import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation('home');

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-white via-[#f8fbff]/60 to-[#f0f5ff]/30 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_#1876fb_0%,_rgba(24,118,251,0.06)_40%,_transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_rgba(24,118,251,0.08)_0%,_transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <p className="text-[11px] font-mono text-gray-400 tracking-[0.25em] uppercase mb-10">
          {t('about.sectionTitle')}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <div className="w-full aspect-[3/4] max-w-sm bg-gray-100 rounded-2xl overflow-hidden mb-10 shadow-sm">
              <img
                src="https://static.readdy.ai/image/e679ae5d6390c98981290ae1f1ab73f8/29de5527db790049bee38e42064d02ac.jpeg"
                alt="Yeeun Jo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Compact Info Cards */}
            <div className="space-y-3 max-w-sm">
              <div className="flex items-center gap-4 px-4 py-3 bg-white rounded-xl border border-gray-100 hover:border-[#1876fb]/20 transition-all">
                <div className="w-9 h-9 rounded-lg bg-[#1876fb]/5 flex items-center justify-center shrink-0">
                  <i className="ri-map-pin-line text-[#1876fb]" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{t('about.location')}</span>
              </div>

              <div className="flex items-center gap-4 px-4 py-3 bg-white rounded-xl border border-gray-100 hover:border-[#1876fb]/20 transition-all">
                <div className="w-9 h-9 rounded-lg bg-[#1876fb]/5 flex items-center justify-center shrink-0">
                  <i className="ri-global-line text-[#1876fb]" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{t('about.languages')}</span>
              </div>

              <a
                href="https://www.linkedin.com/in/yeeun-rachel-jo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-4 py-3 bg-white rounded-xl border border-gray-100 hover:border-[#1876fb]/30 hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-[#1876fb]/5 flex items-center justify-center shrink-0">
                  <i className="ri-linkedin-box-line text-[#1876fb]" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{t('about.linkedin')}</span>
                <i className="ri-arrow-right-up-line text-[#1876fb]/50 ml-auto text-sm group-hover:text-[#1876fb]" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#333] leading-tight">
                {t('about.name')}
              </h2>
            </div>

            {/* Bio */}
            <div>
              <p className="text-gray-600 leading-relaxed">
                {t('about.bio')}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200" />

            <div className="space-y-6">
              {/* Education */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1876fb]" />
                  {t('about.educationTitle')}
                </h3>
                <div className="p-5 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1876fb]/5 flex items-center justify-center shrink-0">
                      <i className="ri-graduation-cap-line text-[#1876fb]" />
                    </div>
                    <div>
                      <p className="text-gray-800 text-sm leading-relaxed font-medium">
                        {t('about.degree')}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        {t('about.university')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificates */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1876fb]" />
                  {t('about.certificatesTitle')}
                </h3>
                <div className="p-5 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 text-sm text-gray-700">
                      <div className="w-10 h-10 rounded-lg bg-[#1876fb]/5 flex items-center justify-center shrink-0">
                        <i className="ri-award-line text-[#1876fb]" />
                      </div>
                      <span className="leading-relaxed pt-1">{t('about.cert1')}</span>
                    </li>
                    <li className="flex items-start gap-4 text-sm text-gray-700">
                      <div className="w-10 h-10 rounded-lg bg-[#1876fb]/5 flex items-center justify-center shrink-0">
                        <i className="ri-award-line text-[#1876fb]" />
                      </div>
                      <span className="leading-relaxed pt-1">{t('about.cert2')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Resume CTA */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1876fb]" />
                  {t('about.resumeLabel')}
                </h3>
                <a
                  href="https://drive.google.com/uc?export=download&id=11ISdfobzlD0cdID67ffzwFt8-NSu6wyZ"
                  download
                  className="group flex items-center gap-4 px-5 py-4 bg-[#1876fb] rounded-xl hover:bg-[#1463d5] transition-all cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                    <i className="ri-download-line text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white font-semibold">{t('about.viewResume')}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
