import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export interface BrandColor {
  name: string;
  hex: string;
}

export interface TouchpointItem {
  label: string;
  type: 'nameTag' | 'menu' | 'invite' | 'poster' | 'backdrop' | 'letter' | 'badge' | 'ticket' | 'flyer';
}

export interface ScrollImage {
  src: string;
  alt: string;
  caption: string;
}

export interface SignatureEvent {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  alt: string;
  touchpoints: TouchpointItem[];
  brandColors: BrandColor[];
  videoUrl?: string;
  scrollImages?: ScrollImage[];
  stats?: string[];
  overview?: string[];
}

interface SignatureEventModalProps {
  event: SignatureEvent | null;
  onClose: () => void;
}

export default function SignatureEventModal({ event, onClose }: SignatureEventModalProps) {
  const { t } = useTranslation('workUtkcc');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [event?.id]);

  useEffect(() => {
    if (!event) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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
  const hasScrollImages = event.scrollImages && event.scrollImages.length > 0;

  const touchpointIcons: Record<string, string> = {
    nameTag: 'ri-id-card-line',
    menu: 'ri-restaurant-line',
    invite: 'ri-mail-send-line',
    poster: 'ri-image-2-line',
    backdrop: 'ri-picture-in-picture-line',
    letter: 'ri-file-text-line',
    badge: 'ri-award-line',
    ticket: 'ri-coupon-line',
    flyer: 'ri-booklet-line',
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 text-gray-600 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
          aria-label="Close"
        >
          <i className="ri-close-line text-lg" />
        </button>

        {/* Title Section - centered, no thumbnail */}
        <div className="pt-10 pb-6 px-6 md:px-8 text-center border-b border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {event.title}
          </h3>
          {event.subtitle && (
            <p className="text-gray-400 text-sm mt-2">{event.subtitle}</p>
          )}
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          {/* Overview */}
          {event.overview && event.overview.map((paragraph, idx) => (
            <p key={idx} className="text-gray-600 text-sm leading-relaxed mb-3">
              {paragraph}
            </p>
          ))}

          {/* Fallback description from i18n */}
          {!event.overview && (
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed mb-4">
              <p>{t(`signatureModal.${event.id}.desc`)}</p>
              <p>{t(`signatureModal.${event.id}.impact`)}</p>
            </div>
          )}

          {/* Stats */}
          <div className="flex flex-wrap gap-2 mb-6">
            {event.stats && event.stats.map((stat, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-[#013385]/5 border border-[#013385]/10 text-[#013385] text-xs font-medium"
              >
                {stat}
              </span>
            ))}
            {!event.stats && Array.from({ length: 3 }).map((_, i) => {
              const stat = t(`signatureModal.${event.id}.stat${i + 1}`);
              if (!stat || stat === `signatureModal.${event.id}.stat${i + 1}`) return null;
              return (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-[#013385]/5 border border-[#013385]/10 text-[#013385] text-xs font-medium"
                >
                  {stat}
                </span>
              );
            })}
          </div>

          {/* Brand Color Palette */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-gray-900 mb-3 uppercase tracking-wider">
              {t('signatureModal.brandColorsTitle')}
            </h4>
            <div className="flex flex-wrap gap-4">
              {event.brandColors.map((color, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full border border-gray-200 shadow-sm shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-900">{color.name}</span>
                    <span className="text-[11px] text-gray-500 font-mono">{color.hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Touchpoints Grid */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-gray-900 mb-3 uppercase tracking-wider">
              {t('signatureModal.touchpointTitle')}
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {event.touchpoints.map((tp, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white rounded-lg border border-[#013385]/15 hover:border-[#013385]/30 transition-colors flex flex-col items-center text-center"
                >
                  <div className="w-8 h-8 rounded-full bg-[#013385]/10 text-[#013385] flex items-center justify-center text-base mb-1.5">
                    <i className={touchpointIcons[tp.type] || 'ri-shapes-line'} />
                  </div>
                  <span className="text-gray-700 text-[11px] font-medium leading-snug">
                    {tp.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-gray-500 text-xs leading-relaxed">
              {t(`signatureModal.${event.id}.touchpointDesc`)}
            </p>
          </div>

          {/* Event Page Embed */}
          {event.videoUrl && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                Event Page
              </h4>
              <div className="relative w-full h-[75vh] min-h-[600px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src={event.videoUrl}
                  className="w-full h-full border-0"
                  style={{ overflow: 'auto', WebkitOverflowScrolling: 'touch' }}
                  scrolling="yes"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Event page"
                />
              </div>
            </div>
          )}

          {/* Scrollable Asset Gallery */}
          {hasScrollImages && (
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                Event Assets
              </h4>
              <div className="space-y-5">
                {event.scrollImages!.map((img, idx) => (
                  <div key={idx} className="text-center">
                    <div className="relative rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <p className="mt-2 text-gray-500 text-xs font-medium">{img.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}