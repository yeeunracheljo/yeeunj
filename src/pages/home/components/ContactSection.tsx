import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation('home');

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-white via-[#f8fbff] to-[#eef5ff] relative overflow-hidden">
      {/* Subtle decorative shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1876fb]/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1876fb]/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Centered header */}
        <div className="text-center mb-14 md:mb-16">
          <span className="text-xs tracking-[0.2em] text-[#1876fb] uppercase font-semibold mb-4 block">
            {t('contact.sectionTitle')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#333] mb-5 leading-tight">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <a
            href="mailto:yeeunrchl@gmail.com"
            className="group flex flex-col items-center text-center p-8 md:p-10 bg-white rounded-2xl border border-gray-100 hover:border-[#1876fb]/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-[#1876fb]/10 flex items-center justify-center mb-5 group-hover:bg-[#1876fb]/15 transition-colors">
              <i className="ri-mail-line text-[#1876fb] text-2xl" />
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {t('contact.email')}
            </span>
            <span className="text-sm md:text-base text-[#333] font-medium group-hover:text-[#1876fb] transition-colors">
              {t('contact.emailValue')}
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yeeun-rachel-jo/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-8 md:p-10 bg-white rounded-2xl border border-gray-100 hover:border-[#1876fb]/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-[#1876fb]/10 flex items-center justify-center mb-5 group-hover:bg-[#1876fb]/15 transition-colors">
              <i className="ri-linkedin-fill text-[#1876fb] text-2xl" />
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {t('contact.linkedin')}
            </span>
            <span className="text-sm md:text-base text-[#333] font-medium group-hover:text-[#1876fb] transition-colors">
              Yeeun Jo
            </span>
          </a>

          {/* Phone */}
          <div className="group flex flex-col items-center text-center p-8 md:p-10 bg-white rounded-2xl border border-gray-100 hover:border-[#1876fb]/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-[#1876fb]/10 flex items-center justify-center mb-5 group-hover:bg-[#1876fb]/15 transition-colors">
              <i className="ri-phone-line text-[#1876fb] text-2xl" />
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {t('contact.phone')}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#333] font-medium">{t('contact.phoneKr')}</span>
              <span className="text-sm text-[#333] font-medium">{t('contact.phoneCa')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
