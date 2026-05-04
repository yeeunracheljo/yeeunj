import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export interface EventItem {
  id: string;
  label: string;
  tag?: string;
  images: string[];
  alt: string;
}

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  const { t } = useTranslation('workUtkcc');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [event?.id]);

  useEffect(() => {
    if (!event) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [event, onClose]);

  const nextImage = useCallback(() => {
    if (!event) return;
    setCurrentIndex((prev) => (prev + 1) % event.images.length);
  }, [event]);

  const prevImage = useCallback(() => {
    if (!event) return;
    setCurrentIndex((prev) => (prev - 1 + event.images.length) % event.images.length);
  }, [event]);

  if (!event) return null;

  const hasMultipleImages = event.images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 text-gray-600 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <i className="ri-close-line text-lg" />
        </button>

        {/* Image Carousel */}
        <div className="relative w-full aspect-square bg-gray-50 overflow-hidden rounded-t-2xl">
          <img
            src={event.images[currentIndex]}
            alt={`${event.alt} ${currentIndex + 1}/${event.images.length}`}
            className="w-full h-full object-cover object-top transition-opacity duration-300"
          />

          {/* Navigation Arrows */}
          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center transition-all shadow-md cursor-pointer"
                aria-label="Previous image"
              >
                <i className="ri-arrow-left-s-line text-xl" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center transition-all shadow-md cursor-pointer"
                aria-label="Next image"
              >
                <i className="ri-arrow-right-s-line text-xl" />
              </button>
            </>
          )}

          {/* Dot Indicators */}
          {hasMultipleImages && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {event.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex ? 'bg-white w-5' : 'bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Image counter */}
          {hasMultipleImages && (
            <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-black/50 text-white text-xs font-medium">
              {currentIndex + 1} / {event.images.length}
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            {event.tag && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#013385]/10 text-[#013385]">
                {event.tag}
              </span>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            {event.label}
          </h3>

          <div className="space-y-3 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>{t(`eventModal.${event.id}.desc`)}</p>
            <p>{t(`eventModal.${event.id}.impact`)}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {Array.from({ length: 3 }).map((_, i) => {
              const stat = t(`eventModal.${event.id}.stat${i + 1}`);
              if (!stat || stat === `eventModal.${event.id}.stat${i + 1}`) return null;
              return (
                <div
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-[#013385]/5 border border-[#013385]/10 text-[#013385] text-xs md:text-sm font-medium"
                >
                  {stat}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}