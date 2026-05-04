import { useTranslation } from 'react-i18next';

export default function Introduction() {
  const { t } = useTranslation('workAnua');

  return (
    <section id="introduction" className="py-24 md:py-32 bg-[#F0FAFA]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-8 block text-center">
          {t('intro.sectionTitle')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-relaxed mb-10">
          {t('intro.title')}
        </h2>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          {t('intro.content')}
        </p>
      </div>
    </section>
  );
}