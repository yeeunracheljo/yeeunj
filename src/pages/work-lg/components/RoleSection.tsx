import { useTranslation } from 'react-i18next';

export default function RoleSection() {
  const { t } = useTranslation('workLG');

  return (
    <section id="role" className="py-20 md:py-28 bg-[#F5F5F5] border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="text-xs tracking-[0.2em] text-[#94173F] uppercase mb-8 block font-medium">
          {t('role.sectionTitle')}
        </span>

        <div className="group rounded-2xl border border-gray-300 p-10 md:p-12 transition-all duration-500 hover:border-[#94173F]/30 cursor-default bg-white">
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#94173F]/10 text-[#94173F] mx-auto mb-5 transition-transform duration-500 group-hover:scale-110">
            <i className="ri-hand-heart-line text-lg" />
          </div>

          <h2 className="text-xl md:text-2xl font-serif text-gray-900 mb-3">
            {t('role.title')}
          </h2>

          <div className="w-6 h-px bg-[#94173F]/40 mx-auto my-4" />

          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto">
            {t('role.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
