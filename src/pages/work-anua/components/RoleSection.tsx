import { useTranslation } from 'react-i18next';

export default function RoleSection() {
  const { t } = useTranslation('workAnua');

  return (
    <section id="role" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="text-xs tracking-[0.2em] text-[#14B8A6] uppercase mb-8 block font-medium">
          {t('role.sectionTitle')}
        </span>

        <div className="group rounded-2xl border border-gray-200 p-10 md:p-12 transition-all duration-500 hover:border-[#14B8A6]/30 cursor-default bg-white">
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] mx-auto mb-5 transition-transform duration-500 group-hover:scale-110">
            <i className="ri-survey-line text-lg" />
          </div>

          <h2 className="text-xl md:text-2xl font-serif text-gray-900 mb-3">
            {t('role.title')}
          </h2>

          <div className="w-6 h-px bg-[#14B8A6]/40 mx-auto my-4" />

          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto">
            {t('role.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
