import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface NewsletterItem {
  id: number;
  imageUrl: string;
  linkUrl: string;
  alt: string;
}

const newsletters: NewsletterItem[] = [
  { id: 6, imageUrl: 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/9351638a-60b0-4e55-a95a-48f90040e4dd_Screenshot-2026-05-03-at-1.04.18AM.png?v=ed6a8c06408b2026139bdbc3f9345416', linkUrl: 'https://drive.google.com/file/d/1dzeAWKSGOJnzTOgRD60-NHZOS2ropJXZ/view?usp=sharing', alt: 'Newsletter Issue 6' },
  { id: 7, imageUrl: 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/5ab10f20-298f-44e3-bf90-96314eadc777_Screenshot-2026-05-03-at-12.59.53AM.png?v=06d78f223db15c4d692003833b5d8295', linkUrl: 'https://drive.google.com/file/d/1aZ3NRo-xwwT9BulXSe1_8G0HNUpvwxz9/view?usp=sharing', alt: 'Newsletter Issue 7' },
  { id: 8, imageUrl: 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/3f616e71-89e9-4cc9-92a5-7daf53c693f8_Screenshot-2026-05-03-at-1.00.10AM.png?v=a74fa03c08ec026d7e037ca31ad69161', linkUrl: 'https://drive.google.com/file/d/1ZXHGcyG_Xn1-KxF15uVBII3kt0t30Dzo/view?usp=sharing', alt: 'Newsletter Issue 8' },
  { id: 9, imageUrl: 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/decc3052-c5ae-421b-bac2-831877b89b51_Screenshot-2026-05-03-at-1.00.27AM.png?v=29172ba7a22dc1c70834f4c39e99e13a', linkUrl: 'https://drive.google.com/file/d/1xRiUtg3JkgM7wZbOg55fiYIRHDnYdIpK/view?usp=sharing', alt: 'Newsletter Issue 9' },
  { id: 10, imageUrl: 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/23ff6e6b-0365-49be-bab1-898741796a2d_Screenshot-2026-05-03-at-1.00.41AM.png?v=42dae8eda3e86b08f4bad29a96e62b1e', linkUrl: 'https://drive.google.com/file/d/1LiE08QLLIGweilWHBOfowK2oetCKT3Em/view?usp=sharing', alt: 'Newsletter Issue 10' },
  { id: 11, imageUrl: 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/58989882-324a-44e8-b0f6-37210a78e40b_Screenshot-2026-05-03-at-1.00.56AM.png?v=327828c13ec4470938f75c392fb50b50', linkUrl: 'https://drive.google.com/file/d/1RKpm87wyq_Y4ZdZtxKzXN1WPFIj5LSst/view?usp=sharing', alt: 'Newsletter Issue 11' },
  { id: 12, imageUrl: 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/fd4c5cbd-5688-4818-a56b-eaeaae43c57d_Screenshot-2026-05-03-at-1.01.37AM.png?v=3487c6e387cddded03e70a077b4de9fc', linkUrl: 'https://drive.google.com/file/d/1JSwCAVUv9fodCq2eEAloyJU8yyz49JZn/view?usp=sharing', alt: 'Newsletter Issue 12' },
  { id: 2, imageUrl: 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/5e8ab3f2-e97a-4231-a13e-c14e5c7de0bd_Screenshot-2026-05-03-at-1.01.58AM.png?v=f2992f2b5a6002e3c25f5c6ec6ce9c66', linkUrl: 'https://drive.google.com/file/d/1GNe_oNKSHe3UnW4C2KMIJ7LZu-G1XS4J/view?usp=sharing', alt: 'Newsletter Issue 2' },
  { id: 3, imageUrl: 'https://storage.readdy-site.link/project_files/07b89831-c27b-4b81-9be5-c903a970e81b/98217d73-d46f-40c6-9724-27ef08337ee2_Screenshot-2026-05-03-at-1.02.11AM.png?v=8cb344a2699710afe64b452ff6df5e4e', linkUrl: 'https://drive.google.com/file/d/1XRxR1tb6qik8uRlQTfWH7I1YeaxNaifw/view?usp=sharing', alt: 'Newsletter Issue 3' },
];

export default function NewsletterSection() {
  const { t } = useTranslation('workUtkcc');
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? newsletters.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === newsletters.length - 1 ? 0 : c + 1));

  const active = newsletters[current];

  return (
    <section id="newsletter" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-[#013385] uppercase mb-6 block font-medium text-center">
          {t('newsletter.sectionTitle')}
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-3 text-center">
          {t('newsletter.title')}
        </h2>
        <p className="text-gray-500 text-center text-sm max-w-xl mx-auto mb-10">
          {t('newsletter.desc')}
        </p>

        {/* Single newsletter viewer */}
        <div className="relative max-w-md mx-auto">
          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#013385] hover:border-[#013385]/30 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            aria-label={t('newsletter.prev')}
          >
            <i className="ri-arrow-left-s-line text-lg" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#013385] hover:border-[#013385]/30 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            aria-label={t('newsletter.next')}
          >
            <i className="ri-arrow-right-s-line text-lg" />
          </button>

          {/* Current newsletter card */}
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            <div className="relative aspect-[420/594] overflow-hidden bg-gray-50">
              <img
                src={active.imageUrl}
                alt={active.alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-4 text-center">
              <a
                href={active.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#013385] text-white text-sm font-medium rounded-lg hover:bg-[#013385]/90 transition-colors cursor-pointer"
              >
                {t('newsletter.viewLink')}
                <i className="ri-external-link-line" />
              </a>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {newsletters.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                i === current ? 'bg-[#013385]' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to newsletter ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}