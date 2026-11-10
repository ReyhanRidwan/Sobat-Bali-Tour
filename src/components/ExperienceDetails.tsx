import React from 'react';
import { Clock, MapPin, Star, Sparkles, Check, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { EXPERIENCES } from '../data';

interface ExperienceDetailsProps {
  onBookNow: (experienceId: string) => void;
}

export default function ExperienceDetails({ onBookNow }: ExperienceDetailsProps) {
  // Only showcase the 3 core signature packages on the landing page
  const signatureExperiences = EXPERIENCES.slice(0, 3);

  return (
    <section id="experiences" className="py-24 bg-neutral-900 border-t border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
            Signature Expeditions
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-gold-100 font-medium tracking-wide">
            Our Elite Expeditions
          </h2>
          <p className="font-sans text-sm md:text-base text-gold-100/50 leading-relaxed font-light">
            Masing-masing petualangan dirancang privat, berkelas tinggi, dan didedikasikan sepenuhnya untuk mewujudkan impian perjalanan tak terlupakan Anda di pulau dewata.
          </p>
        </div>

        {/* 3-Column Luxury Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="signature-experiences-deck">
          {signatureExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-neutral-950 border border-gold-400/10 rounded-lg overflow-hidden flex flex-col justify-between group shadow-xl hover:border-gold-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/60 text-left"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exp.cardImage}
                  alt={exp.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                {/* Float Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center bg-gold-400 text-neutral-950 text-[10px] font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-sm">
                    {exp.tagline}
                  </span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Rating & Location Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-gold-400">
                      <Star size={14} className="fill-gold-400" />
                      <span className="font-mono text-xs font-bold">{exp.rating}</span>
                      <span className="text-gold-200/40 text-[10px]">({exp.reviewCount} ulasan)</span>
                    </div>
                    <div className="flex items-center text-gold-200/50 text-[11px] font-mono gap-1">
                      <MapPin size={12} className="text-gold-400" />
                      <span className="truncate max-w-[120px]">{exp.location.split(',')[0]}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl md:text-2xl text-gold-100 font-medium group-hover:text-gold-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-gold-200/60 text-xs md:text-sm font-sans leading-relaxed line-clamp-3">
                      {exp.shortDesc}
                    </p>
                  </div>

                  {/* Highlights Bullet list */}
                  <div className="space-y-3 pt-4 border-t border-gold-900/10">
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-gold-400 font-bold flex items-center gap-1.5">
                      <Sparkles size={11} />
                      <span>Sorotan Utama Paket</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-gold-200/70 font-sans font-light">
                      {exp.highlights.slice(0, 3).map((high, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-gold-400 mt-0.5">•</span>
                          <span className="leading-relaxed line-clamp-2">{high}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Section: Pricing and Book Now */}
                <div className="pt-6 mt-8 border-t border-gold-900/15 flex items-center justify-between gap-4">
                  <div className="text-left">
                    <span className="block text-[9px] font-mono text-gold-300/40 tracking-widest uppercase font-semibold">Mulai</span>
                    <span className="font-mono text-xl font-bold text-gold-300">${exp.pricePerPerson}</span>
                    <span className="text-[10px] text-gold-200/40 font-light"> / orang</span>
                  </div>

                  <button
                    onClick={() => onBookNow(exp.id)}
                    className="bg-gold-400 hover:bg-gold-500 text-neutral-950 font-mono text-xs uppercase tracking-widest font-extrabold px-6 py-3.5 rounded-sm transition-all shadow-md cursor-pointer hover:shadow-gold-500/10 flex items-center gap-1.5 active:scale-95"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={12} className="stroke-[2.5]" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footnote comfort seal */}
        <div className="flex items-center justify-center space-x-2 text-[10px] text-gold-300/30 font-mono mt-12">
          <ShieldCheck size={12} className="text-gold-400" />
          <span>GARANSI 100% PRIVATE TOUR TANPA DICAMPUR PESERTA LAIN</span>
        </div>

      </div>
    </section>
  );
}
