import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function IndividualProject() {
  const { t } = useTranslation('home');
  const navigate = useNavigate();

  return (
    <section id="individual" className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">
          {t('individual.sectionTitle')}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#333] mb-12">
          {t('individual.title')}
        </h2>

        <div
          onClick={() => navigate('/work/reta')}
          className="bg-white rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="h-80 md:h-[28rem] overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=A%20minimal%20editorial%20style%20illustration%20of%20a%20person%20working%20on%20a%20laptop%20with%20marketing%20analytics%20charts%20and%20graphs%20floating%20around%2C%20clean%20monochrome%20palette%20with%20soft%20warm%20tones%2C%20modern%20flat%20design%2C%20no%20text%2C%20professional%20workspace%20aesthetic%2C%20light%20cream%20background&width=900&height=500&seq=individual-thumb&orientation=landscape"
                alt={t('individual.projectTitle')}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-5 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {t('individual.projectOrg')}
                </p>
                <span className="text-gray-200">|</span>
                <p className="text-xs text-gray-400">{t('individual.projectPeriod')}</p>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-[#333] mb-4 leading-snug">
                {t('individual.projectTitle')}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {t('individual.projectDesc')}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {t('individual.projectTags').split(',').map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#333]">
                <span>{t('individual.viewLabel')}</span>
                <i className="ri-arrow-right-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}