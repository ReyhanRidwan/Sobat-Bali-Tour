import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';

interface DestinationCard {
  id: string;
  title: string;
  tagline: string;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  cols: string;
  rows: string;
  heightClass: string;
}

interface DestinationGridProps {
  onBookNow: (experienceId: string) => void;
}

export default function DestinationGrid({ onBookNow }: DestinationGridProps) {
  const destinations: DestinationCard[] = [
    {
      id: 'jeep-adventure', // matches ocean-escape or jeep-adventure to map booking modal pre-selection
      title: 'Nusa Penida Golden Beach',
      tagline: 'EXPLORASI PREMIUM',
      rating: 4.9,
      reviews: 340,
      description: 'Petualangan eksklusif menyusuri tebing purba Kelingking Beach yang dramatis, berenang di antara penyu liar, dan menatap laut safir yang membentang luas.',
      image: '/nusa_penida_golden_beach_1783579187768.jpg',
      cols: 'lg:col-span-2',
      rows: 'lg:row-span-2',
      heightClass: 'h-[420px] lg:h-[520px]',
    },
    {
      id: 'ocean-escape',
      title: 'Nusa Dua Exclusive Beach',
      tagline: 'ELITE RESORTS',
      rating: 4.8,
      reviews: 180,
      description: 'Kawasan pantai pasir putih nan tenang yang dikelilingi oleh jajaran resort mewah bertaraf internasional.',
      image: '/nusa_dua_beach_1783579200979.jpg',
      cols: 'lg:col-span-1',
      rows: 'lg:row-span-1',
      heightClass: 'h-[240px]',
    },
    {
      id: 'jungle-retreat',
      title: 'Bedugul Danau Beratan',
      tagline: 'SACRED TEMPLES',
      rating: 4.7,
      reviews: 220,
      description: 'Pura terapung legendaris berselimut kabut lembut di antara pegunungan sejuk yang asri.',
      image: '/bedugul_danau_beratan_1783579216449.jpg',
      cols: 'lg:col-span-1',
      rows: 'lg:row-span-1',
      heightClass: 'h-[264px] lg:h-[256px]', // offsets perfectly to match double row on left
    },
    {
      id: 'jeep-adventure',
      title: 'Lempuyang Luhur Temple',
      tagline: 'PHOTO INSPIRED',
      rating: 4.9,
      reviews: 410,
      description: 'Abadikan momen magis di Gerbang Surga berlatar megahnya Gunung Agung yang sakral.',
      image: '/lempuyang_temple_1783579255281.jpg',
      cols: 'lg:col-span-1',
      rows: 'lg:row-span-1',
      heightClass: 'h-[256px]',
    },
    {
      id: 'ocean-escape',
      title: 'Uluwatu Sunset Horizon',
      tagline: 'ROMANTIC OCEAN CLIFF',
      rating: 4.8,
      reviews: 290,
      description: 'Saksikan pertunjukan tari Kecak legendaris di atas tebing karang terjal setinggi 70 meter di atas Samudra Hindia.',
      image: '/uluwatu_cliff_1783579271777.jpg',
      cols: 'lg:col-span-2',
      rows: 'lg:row-span-1',
      heightClass: 'h-[256px]',
    }
  ];

  return (
    <section id="exclusive-destinations" className="py-20 px-4 md:px-8 bg-neutral-900 border-t border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Elegant Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-gold-400" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400 font-bold">
                Bespoke Curations
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-gold-100 font-medium tracking-wide">
              Eksplorasi Destinasi Elit Bali
            </h2>
          </div>
          <p className="max-w-md text-gold-200/60 text-sm font-sans leading-relaxed">
            Pilihan eksklusif tempat-tempat terindah di Bali yang telah kami rancang khusus untuk menghadirkan keajaiban murni di setiap detiknya.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="bento-grid-destinations">
          {destinations.map((dest, idx) => (
            <motion.div
              key={`${dest.id}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className={`${dest.cols} ${dest.rows} ${dest.heightClass} relative rounded-xl overflow-hidden group shadow-xl shadow-black/40 cursor-pointer border border-gold-500/10`}
              onClick={() => onBookNow(dest.id)}
            >
              {/* Background Image */}
              <img
                src={dest.image}
                alt={dest.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Dark Overlays & Gradients to match screenshot precisely */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25 transition-opacity duration-300 group-hover:via-black/50" />
              <div className="absolute inset-0 bg-gold-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Section: Pill Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center bg-black/60 backdrop-blur-md text-[9px] font-mono uppercase tracking-[0.18em] text-gold-300 font-bold px-3 py-1.5 rounded-sm border border-gold-500/20">
                  {dest.tagline}
                </span>
              </div>

              {/* Bottom Section: Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-3/4 z-10">
                
                {/* Rating Badge */}
                <div className="flex items-center gap-1.5 mb-2">
                  <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  <span className="font-mono text-[11px] text-gold-300 font-bold">
                    {dest.rating.toFixed(1)}
                  </span>
                  <span className="text-gold-200/50 text-[10px]">
                    ({dest.reviews} ulasan)
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-gold-100 font-medium tracking-wide mb-2 group-hover:text-gold-300 transition-colors duration-300">
                  {dest.title}
                </h3>

                {/* Description */}
                <p className="text-gold-200/70 text-xs md:text-sm font-sans line-clamp-2 md:line-clamp-3 mb-4 leading-relaxed group-hover:text-gold-100/90 transition-colors duration-300">
                  {dest.description}
                </p>

                {/* Action CTA */}
                <div className="flex items-center gap-1.5 text-gold-400 text-xs font-mono uppercase tracking-wider group-hover:text-gold-300 transition-colors duration-300 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Amankan Kursi Sekarang</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Gold border accent that glows on hover */}
              <div className="absolute inset-0 border border-gold-400/0 group-hover:border-gold-400/30 rounded-xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
