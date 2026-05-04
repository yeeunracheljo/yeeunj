import { useTranslation } from 'react-i18next';

export default function RoleSummary() {
  const { t } = useTranslation('workUtkcc');

  const roles = [
    { title: t('summary.role1Title'), desc: t('summary.role1Desc') },
    { title: t('summary.role2Title'), desc: t('summary.role2Desc') },
    { title: t('summary.role3Title'), desc: t('summary.role3Desc') },
  ];

  return (
    <section id="summary" className="py-16 md:py-24 bg-[#013385]/[0.03]">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#013385] uppercase mb-6 block font-medium text-center">
          {t('summary.sectionTitle')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-10 text-center">
          {t('summary.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {roles.map((role, index) => (
            <div
              key={index}
              className="p-6 bg-[#013385] rounded-xl text-white text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center text-sm font-semibold mx-auto mb-3">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-base font-semibold mb-1">{role.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto p-5 bg-white rounded-xl border border-[#013385]/15">
          <p className="text-gray-800 text-base leading-relaxed font-medium text-center">
            {t('summary.final')}
          </p>
        </div>
      </div>
    </section>
  );
}
