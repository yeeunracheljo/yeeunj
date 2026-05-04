import { useTranslation } from 'react-i18next';
import { anuaCampaign } from "@/mocks/work-anua";

export default function CampaignSection() {
  const { t } = useTranslation('workAnua');

  return (
    <section id="campaign" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-8 block text-center">
          {t('campaign.sectionTitle')}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-10">
          {t('campaign.title')}
        </h2>

        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl">
          {t('campaign.description')}
        </p>

        <div className="w-full max-w-lg mx-auto">
          <img
            src={anuaCampaign.imageUrl}
            alt="Anua Meta Ad Campaign"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}