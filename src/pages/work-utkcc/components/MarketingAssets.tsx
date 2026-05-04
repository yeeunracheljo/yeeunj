import { useTranslation } from 'react-i18next';

export default function MarketingAssets() {
  const { t } = useTranslation('workUtkcc');

  const assets = [
    { text: t('assets.item1'), icon: 'ri-image-2-line' },
    { text: t('assets.item2'), icon: 'ri-instagram-line' },
    { text: t('assets.item3'), icon: 'ri-mail-line' },
    { text: t('assets.item4'), icon: 'ri-send-plane-line' },
    { text: t('assets.item5'), icon: 'ri-id-card-line' },
    { text: t('assets.item6'), icon: 'ri-money-dollar-circle-line' },
  ];

  return (
    <section id="assets" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#013385] uppercase mb-6 block font-medium text-center">
          {t('assets.sectionTitle')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-4 text-center">
          {t('assets.title')}
        </h2>

        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-xl mx-auto text-center">
          {t('assets.desc')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {assets.map((asset, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-xl border border-[#013385]/15 hover:border-[#013385]/30 transition-colors flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center text-xl mb-3">
                <i className={asset.icon} />
              </div>
              <p className="text-gray-700 text-sm font-medium leading-relaxed">{asset.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}