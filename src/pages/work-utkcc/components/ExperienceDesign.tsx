import { useTranslation } from 'react-i18next';
import EventGallery from './EventGallery';

export default function ExperienceDesign() {
  const { t } = useTranslation('workUtkcc');

  return (
    <section id="events" className="py-16 md:py-24 bg-[#013385]/[0.03]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#013385] uppercase mb-6 block font-medium text-center">
          06 — {t('toc.events')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-4 text-center">
          {t('toc.events')}
        </h2>

        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-2xl mx-auto text-center">
          진행한 다양한 아카데믹 및 소셜 이벤트들입니다.
        </p>

        <EventGallery />
      </div>
    </section>
  );
}
