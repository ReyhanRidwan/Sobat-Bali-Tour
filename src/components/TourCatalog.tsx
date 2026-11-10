import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Clock, MapPin, ArrowRight, Compass, ShieldCheck, Search, Filter } from 'lucide-react';
import { Experience } from '../types';
import { EXPERIENCES } from '../data';

interface TourCatalogProps {
  onBookNow: (experienceId: string) => void;
  onViewDetails: (experienceId: string) => void;
}

type CategoryFilter = 'all' | 'adventure' | 'beach' | 'culture';

export default function TourCatalog({ onBookNow, onViewDetails }: TourCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Helper to categorize items dynamically
  const getCategoryOfExp = (exp: Experience): CategoryFilter => {
    const id = exp.id;
    if (id === 'jeep-adventure' || id === 'atv-quad' || id === 'river-tubing' || id === 'nusa-penida' || id === 'bali-jungle-swing') {
      return 'adventure';
    }
    if (id === 'ocean-escape' || id === 'nusa-dua' || id === 'uluwatu' || id === 'snorkeling') {
      return 'beach';
    }
    return 'culture'; // bedugul-danau, lempuyang, jungle-retreat (wellness/culture)
  };

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    const matchesSearch = exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    return getCategoryOfExp(exp) === selectedCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400 font-bold bg-gold-500/5 px-4 py-2 border border-gold-400/10 rounded-full inline-block">
            Bespoke VIP Packages
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-gold-100 font-medium tracking-wide">
            Katalog Paket Tour Eksklusif
          </h1>
          <p className="font-sans text-sm md:text-base text-gold-200/60 leading-relaxed font-light">
            Jelajahi keindahan murni alam Bali dengan layanan VIP privat 100%. Mulai dari jalur off-road gunung berapi, pelayaran yacht mewah, hingga ritual suci pura kuno.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center bg-neutral-900/60 p-6 rounded-lg border border-gold-400/10 mb-12" id="catalog-controls">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto" id="catalog-category-filters">
            {[
              { id: 'all', label: 'Semua Paket' },
              { id: 'adventure', label: 'Petualangan & Adrenalin' },
              { id: 'beach', label: 'Pantai & Yacht Mewah' },
              { id: 'culture', label: 'Budaya & Wellness' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as CategoryFilter)}
                className={`px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider font-mono font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gold-400 text-neutral-950 shadow-md font-bold'
                    : 'bg-neutral-800/40 text-gold-200/50 hover:bg-neutral-800 hover:text-gold-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gold-400/40">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Cari destinasi atau paket..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-gold-400/20 rounded-sm pl-10 pr-4 py-2.5 text-sm text-gold-100 placeholder-gold-300/30 focus:outline-none focus:border-gold-400 font-sans transition-colors"
            />
          </div>
        </div>

        {/* Results Info */}
        <div className="text-left mb-6 text-xs text-gold-300/40 font-mono">
          MENAMPILKAN {filteredExperiences.length} DARI 10 PAKET LAYANAN PRIVAT
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="catalog-tours-grid">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, idx) => (
              <motion.div
                layout
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-neutral-900/40 border border-gold-400/10 rounded-lg overflow-hidden flex flex-col justify-between group shadow-lg hover:border-gold-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={exp.cardImage}
                    alt={exp.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  
                  {/* Floating Price Tag */}
                  <div className="absolute top-4 right-4 bg-black/75 border border-gold-400/20 rounded-sm px-3.5 py-2 backdrop-blur-sm">
                    <span className="block text-[9px] font-mono text-gold-400 tracking-widest uppercase font-semibold">Mulai</span>
                    <span className="font-mono text-lg font-bold text-gold-200">${exp.pricePerPerson}</span>
                    <span className="text-[9px] text-gold-100/40 font-light block -mt-1">/ orang</span>
                  </div>

                  {/* Tagline / Category */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center bg-gold-400 text-neutral-950 text-[9px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                      {exp.tagline}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col justify-between text-left">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-gold-400">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-mono text-xs font-bold ml-1">{exp.rating}</span>
                      </div>
                      <span className="text-gold-200/40 text-xs font-mono">({exp.reviewCount} ulasan)</span>
                    </div>

                    <h3 className="font-serif text-xl text-gold-100 font-medium group-hover:text-gold-300 transition-colors duration-300">
                      {exp.title}
                    </h3>

                    <p className="text-gold-200/60 text-xs leading-relaxed font-sans line-clamp-3">
                      {exp.shortDesc}
                    </p>

                    {/* Meta specifications */}
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gold-900/10 text-[11px] font-mono text-gold-200/50">
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-gold-400" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-gold-400" />
                        <span className="truncate">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-gold-900/15">
                    <button
                      onClick={() => onViewDetails(exp.id)}
                      className="border border-gold-400/30 hover:border-gold-400 text-gold-300 hover:text-gold-100 text-xs uppercase tracking-widest font-mono py-3 rounded-sm transition-all duration-300 cursor-pointer hover:bg-gold-500/5 active:scale-95"
                    >
                      Detail Rute
                    </button>
                    <button
                      onClick={() => onBookNow(exp.id)}
                      className="bg-gold-400 hover:bg-gold-500 text-neutral-950 font-bold text-xs uppercase tracking-widest font-mono py-3 rounded-sm transition-all duration-300 shadow-md cursor-pointer hover:shadow-gold-500/10 flex items-center justify-center gap-1 active:scale-95"
                    >
                      <span>Book Now</span>
                      <ArrowRight size={12} className="stroke-[2.5]" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredExperiences.length === 0 && (
          <div className="py-24 text-center space-y-4">
            <Compass className="w-12 h-12 text-gold-400/20 mx-auto animate-pulse" />
            <h3 className="font-serif text-lg text-gold-200">Tidak ada paket yang cocok</h3>
            <p className="text-gold-100/50 text-sm font-sans max-w-sm mx-auto">
              Maaf, paket tour dengan kata kunci tersebut tidak tersedia. Silakan cari dengan istilah lain.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs uppercase tracking-widest font-mono bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/30 text-gold-400 px-5 py-2.5 rounded-sm transition-all"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
