import React, { useState } from 'react';
import { Car, Bike, Users, Settings, Fuel, ArrowRight, Shield, Check, Sparkles } from 'lucide-react';
import { VEHICLES } from '../data';
import { Vehicle } from '../types';

interface RentalSectionProps {
  onSelectVehicle: (vehicleId: string) => void;
  onNavigateToRentalPage: () => void;
}

export default function RentalSection({ onSelectVehicle, onNavigateToRentalPage }: RentalSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'car' | 'motorbike'>('all');

  const filteredVehicles = activeTab === 'all'
    ? VEHICLES
    : VEHICLES.filter(v => v.type === activeTab);

  const handleBookVehicle = (id: string) => {
    onSelectVehicle(id);
  };

  return (
    <section id="rental-home-section" className="py-24 bg-neutral-950 border-t border-gold-900/15 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-400/10 border border-gold-400/20 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles size={12} className="text-gold-400 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-300 font-bold">
              Premium Mobility Solutions
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-gold-200 tracking-wide font-medium">
            Layanan Sewa Mobil & Motor Bali
          </h2>
          <p className="font-sans text-sm md:text-base text-gold-100/60 leading-relaxed mt-4">
            Jelajahi keindahan Bali dengan kebebasan penuh. Kami menyediakan armada mobil premium dan motor modis dengan opsi berkendara sendiri (lepas kunci) atau layanan supir VIP dengan bahan bakar.
          </p>
        </div>

        {/* Filters and View All Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gold-900/15 pb-6 mb-12">
          {/* Tab Filters */}
          <div className="flex bg-neutral-900/80 p-1.5 rounded-md border border-gold-400/10 w-full md:w-auto">
            <span className="px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-gold-400 flex items-center gap-2">
              <Car size={13} />
              Armada Transportasi Premium
            </span>
          </div>

          {/* View All CTA */}
          <button
            onClick={onNavigateToRentalPage}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-bold text-gold-400 hover:text-gold-300 group transition-colors cursor-pointer"
          >
            <span>Selengkapnya & Booking</span>
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLES.map((vehicle) => {
            const isCar = vehicle.type === 'car';
            const hasSelfDrive = vehicle.priceWithoutDriverPerDay > 0;

            return (
              <div
                key={vehicle.id}
                className="bg-neutral-900/40 border border-gold-900/15 hover:border-gold-400/40 rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold-500/5"
              >
                {/* Vehicle Image Container */}
                <div className="relative h-56 overflow-hidden bg-neutral-950">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Category Badge */}
                  {vehicle.passengers && (
                    <span className="absolute top-4 left-4 bg-neutral-950/95 backdrop-blur-md border border-gold-400/25 text-gold-300 font-mono text-[9px] uppercase tracking-wider font-bold py-1.5 px-3 rounded-sm shadow-md">
                      {vehicle.passengers} Penumpang
                    </span>
                  )}
                  
                  {/* Custom pricing display over image */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-transparent p-4 flex items-end justify-between">
                    {hasSelfDrive ? (
                      <>
                        <div>
                          <p className="text-[9px] uppercase font-mono tracking-widest text-gold-400/70">Lepas Kunci</p>
                          <p className="font-mono text-sm font-bold text-gold-100">
                            Rp {vehicle.priceWithoutDriverPerDay.toLocaleString('id-ID')} <span className="text-[9px] font-normal text-gold-100/50">/hari</span>
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[9px] uppercase font-mono tracking-widest text-gold-400/70">Dengan Supir + BBM</p>
                          <p className="font-mono text-sm font-bold text-gold-300">
                            Rp {vehicle.priceWithDriverPerDay.toLocaleString('id-ID')} <span className="text-[9px] font-normal text-gold-300/60">/hari</span>
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="w-full flex justify-between items-end">
                        <div>
                          <p className="text-[9px] uppercase font-mono tracking-widest text-gold-400/70">Layanan Eksklusif</p>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20 rounded-sm">Sopir + BBM Termasuk</span>
                        </div>
                        <div className="text-right">
                          <p className="text-[9px] uppercase font-mono tracking-widest text-gold-400/70">Tarif Harian</p>
                          <p className="font-mono text-base font-bold text-gold-300">
                            Rp {vehicle.priceWithDriverPerDay.toLocaleString('id-ID')} <span className="text-[9px] font-normal text-gold-300/60">/hari</span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-serif text-xl text-gold-200 group-hover:text-gold-400 transition-colors font-medium">
                      {vehicle.name}
                    </h3>
                    <p className="font-sans text-xs text-gold-100/60 line-clamp-2 mt-2 leading-relaxed">
                      {vehicle.description}
                    </p>

                    {/* Specifications */}
                    <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gold-900/10 text-[11px] font-mono text-gold-300/80">
                      {isCar && vehicle.passengers && (
                        <div className="flex items-center gap-2">
                          <Users size={12} className="text-gold-400" />
                          <span>{vehicle.passengers} Penumpang</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Settings size={12} className="text-gold-400" />
                        <span>{vehicle.transmission}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel size={12} className="text-gold-400" />
                        <span>{vehicle.engine}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield size={12} className="text-gold-400" />
                        <span>Asuransi All-Risk</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-gold-900/10 flex items-center justify-between gap-4">
                    <button
                      onClick={() => handleBookVehicle(vehicle.id)}
                      className="flex-1 bg-gold-400 hover:bg-gold-500 text-neutral-950 font-mono text-[10px] uppercase tracking-widest font-bold py-3 px-4 rounded-sm transition-all duration-300 text-center cursor-pointer shadow-sm hover:shadow-gold-500/10 active:scale-95"
                    >
                      Sewa Sekarang
                    </button>
                    <button
                      onClick={onNavigateToRentalPage}
                      className="border border-gold-400/20 hover:border-gold-400/50 hover:bg-gold-400/5 text-gold-300 px-3 py-3 rounded-sm text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Detail rute
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Footnote Benefits banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 bg-neutral-900/30 border border-gold-900/10 rounded-md p-6">
          <div className="flex items-start space-x-3 text-left">
            <div className="p-2 rounded bg-gold-400/10 text-gold-400 flex-shrink-0">
              <Check size={16} />
            </div>
            <div>
              <h4 className="font-serif text-sm text-gold-200 font-medium">Bebas Repot & On-Time</h4>
              <p className="font-sans text-xs text-gold-100/50 leading-relaxed mt-1">Layanan antar-jemput kendaraan gratis ke hotel Anda di seluruh area Bali Selatan & Ubud.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 text-left border-t md:border-t-0 md:border-l border-gold-900/10 pt-4 md:pt-0 md:pl-6">
            <div className="p-2 rounded bg-gold-400/10 text-gold-400 flex-shrink-0">
              <Check size={16} />
            </div>
            <div>
              <h4 className="font-serif text-sm text-gold-200 font-medium">Supir Berbahasa Inggris</h4>
              <p className="font-sans text-xs text-gold-100/50 leading-relaxed mt-1">Supir VIP kami profesional, sopan, dan berwawasan luas mengenai tempat wisata tersembunyi.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 text-left border-t md:border-t-0 md:border-l border-gold-900/10 pt-4 md:pt-0 md:pl-6">
            <div className="p-2 rounded bg-gold-400/10 text-gold-400 flex-shrink-0">
              <Check size={16} />
            </div>
            <div>
              <h4 className="font-serif text-sm text-gold-200 font-medium">Kondisi Bersih & Prima</h4>
              <p className="font-sans text-xs text-gold-100/50 leading-relaxed mt-1">Seluruh kendaraan disinfeksi lengkap dan diservis berkala demi keselamatan prima di jalan.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
