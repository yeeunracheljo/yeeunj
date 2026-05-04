import { useTranslation } from 'react-i18next';

export default function ExecutionSection() {
  const { t } = useTranslation('workMacsLearning');

  const steps = [
    t('execution.step1'),
    t('execution.step2'),
    t('execution.step3'),
    t('execution.step4'),
  ];

  const images = [
    'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/39cc6756-1d28-4a85-a7eb-72d1f1604cf8_Screenshot-2026-05-04-at-12.28.14AM.png?v=e0e3705c44b29f62bc783b94cefbc3d9',
    'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/8698f6f7-c64c-4d40-a1d1-ec5b660177b4_Screenshot-2026-05-04-at-12.28.59AM.png?v=0b79549e4eb45e8e9733248fc9b434cf',
    'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/dca13792-c5ec-4166-9e13-3fb8dbadb392_Screenshot-2026-05-04-at-12.29.13AM.png?v=194c64b131d11f8c932654a699175628',
    'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/8444f591-14f4-402f-bfd7-f0c211a2256d_Screenshot-2026-05-04-at-12.29.24AM.png?v=37414c748debb8d37bc2ffb7a387e9f2',
    'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/a4998f86-d8a0-466c-b5f2-9872b1f65b9d_Screenshot-2026-05-04-at-12.29.44AM.png?v=91b83700ade0af1c03a8d2efae156626',
    'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/7ee55e25-8367-42b8-96a0-09fdabf84aee_Screenshot-2026-05-04-at-12.30.02AM.png?v=ed3c83b0b094d0c17c2866bab75d91e9',
  ];

  return (
    <section id="execution" className="py-24 md:py-32 bg-[#fbffab]/5">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#8B6914] uppercase mb-8 block font-medium text-center">
          {t('execution.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-16 text-center">
          {t('execution.title')}
        </h2>

        {/* Execution Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#fbffab] transition-all hover:shadow-md"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#fbffab] flex items-center justify-center text-base font-bold text-[#8B6914]">
                {index + 1}
              </div>
              <p className="text-gray-800 text-base leading-relaxed font-medium pt-1">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Content Samples */}
        <h3 className="text-2xl font-serif text-gray-900 mb-10 text-center">
          {t('execution.bookTitle')}
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((src, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[210/297] rounded-xl overflow-hidden bg-[#fbffab]/50 shadow-sm group-hover:shadow-lg transition-shadow">
                <img
                  src={src}
                  alt={`Content Sample ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}