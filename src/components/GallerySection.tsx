import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data';

export default function GallerySection() {
  const [filter, setFilter] = useState<'all' | 'volcano' | 'ocean' | 'jungle'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = GALLERY_PHOTOS.filter(
    (photo) => filter === 'all' || photo.category === filter
  );

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIdx = (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setLightboxIndex(prevIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIdx = (lightboxIndex + 1) % filteredPhotos.length;
    setLightboxIndex(nextIdx);
  };

  return (
    <section id="gallery" className="py-24 bg-luxury-dark/95 border-t border-gold-900/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Gallery Headers */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left space-y-4 max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
              Visual Narrative
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gold-100 font-medium tracking-wide">
              Capturing Divine Moments
            </h2>
            <p className="font-sans text-sm text-gold-100/50 leading-relaxed font-light">
              Explore actual high-fidelity photographs of our bespoke private charters. Experience rugged volcanic textures, marine waters, and Ubud’s deep mist valleys.
            </p>
          </div>

          {/* Filter Toggles */}
          <div className="flex flex-wrap gap-2 md:gap-4 pb-px" id="gallery-filters">
            {(['all', 'volcano', 'ocean', 'jungle'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`py-2 px-5 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all border cursor-pointer ${
                  filter === cat
                    ? 'bg-gold-400 border-gold-400 text-luxury-dark font-bold'
                    : 'border-gold-900/25 text-gold-100/40 hover:text-gold-200 hover:border-gold-400/40'
                }`}
              >
                {cat === 'all' ? 'All Snapshots' : `${cat}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Photogrid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">
          {filteredPhotos.map((photo, index) => {
            // Find global index in all photos for absolute reference
            const globalIndex = GALLERY_PHOTOS.findIndex((p) => p.url === photo.url);

            return (
              <div
                key={index}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-[4/3] bg-luxury-gray border border-gold-900/10 rounded-sm overflow-hidden cursor-pointer shadow-lg hover:shadow-gold-500/5 hover:border-gold-400/30 transition-all duration-500"
              >
                {/* Image */}
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Cover Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Details overlays */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold-400 font-bold mb-1">
                    {photo.category}
                  </span>
                  <h3 className="font-serif text-base text-gold-100 font-medium tracking-wide leading-tight">
                    {photo.title}
                  </h3>
                  
                  {/* Eye symbol */}
                  <div className="mt-3 flex items-center space-x-1 text-[10px] uppercase font-mono tracking-widest text-gold-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye size={12} className="text-gold-400" />
                    <span>Enlarge Snapshot</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty search fallback */}
        {filteredPhotos.length === 0 && (
          <div className="py-16 text-center text-gold-100/40 font-mono text-sm space-y-2">
            <ImageIcon size={32} className="mx-auto text-gold-900/30" />
            <p>No photos matched this category yet.</p>
          </div>
        )}

        {/* Full screen Lightbox overlay */}
        {lightboxIndex !== null && (
          <div
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-fade-in select-none"
            id="gallery-lightbox"
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-gold-200/60 hover:text-gold-400 transition-colors p-2 z-50 cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Prev Trigger */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-luxury-gray/50 border border-gold-900/20 hover:border-gold-400 text-gold-200 p-3 rounded-full transition-colors z-50 cursor-pointer"
              aria-label="Previous photograph"
            >
              <ChevronLeft size={20} />
            </button>

            {/* active slide */}
            <div className="relative max-w-5xl max-h-[80vh] flex flex-col items-center">
              <img
                src={filteredPhotos[lightboxIndex].url}
                alt={filteredPhotos[lightboxIndex].title}
                referrerPolicy="no-referrer"
                onClick={(e) => e.stopPropagation()}
                className="object-contain max-h-[75vh] w-auto border border-gold-400/20 shadow-2xl"
              />
              <div className="mt-4 text-center" onClick={(e) => e.stopPropagation()}>
                <span className="font-mono text-[9px] uppercase tracking-widest text-gold-400 font-bold mb-1 block">
                  {filteredPhotos[lightboxIndex].category} snapshot
                </span>
                <h4 className="font-serif text-lg text-gold-100 font-medium tracking-wide">
                  {filteredPhotos[lightboxIndex].title}
                </h4>
              </div>
            </div>

            {/* Next Trigger */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-luxury-gray/50 border border-gold-900/20 hover:border-gold-400 text-gold-200 p-3 rounded-full transition-colors z-50 cursor-pointer"
              aria-label="Next photograph"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
