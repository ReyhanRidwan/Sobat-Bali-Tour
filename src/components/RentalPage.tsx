import React, { useState, useEffect } from 'react';
import {
  Car, Users, Settings, Fuel, Shield, Calendar,
  Sparkles, ArrowRight, CheckCircle2,
  Info, ArrowLeft, Clock, Search, Star, MessageCircle, AlertTriangle
} from 'lucide-react';
import { VEHICLES } from '../data';
import { Vehicle } from '../types';

interface RentalPageProps {
  initialVehicleId?: string;
}

const WHATSAPP_NUMBER = '6285739399365';

export default function RentalPage({ initialVehicleId }: RentalPageProps) {
  // Page states: 'catalog' | 'booking' | 'success'
  const [step, setStep] = useState<'catalog' | 'booking' | 'success'>('catalog');
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter] = useState<'all' | 'car' | 'motorbike'>('all');
  
  // Active selected vehicle
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(
    VEHICLES.find(v => v.id === initialVehicleId) || VEHICLES[0]
  );

  // Booking details state (cukup isi nama, tanpa KTP)
  const [startDate, setStartDate] = useState('');
  const [durationDays, setDurationDays] = useState(3);
  const [driverOption, setDriverOption] = useState<'with' | 'without'>('without');
  const [fullName, setFullName] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  // Confirmed booking details
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  // Update selected vehicle if initialVehicleId changes
  useEffect(() => {
    if (initialVehicleId) {
      const match = VEHICLES.find(v => v.id === initialVehicleId);
      if (match) {
        setSelectedVehicle(match);
        setStep('booking');
      }
    }
  }, [initialVehicleId]);

  useEffect(() => {
    if (selectedVehicle) {
      setDriverOption(selectedVehicle.priceWithoutDriverPerDay > 0 ? 'without' : 'with');
    }
  }, [selectedVehicle]);

  // Pricing calculations
  const pricePerDay = driverOption === 'with' 
    ? selectedVehicle.priceWithDriverPerDay 
    : selectedVehicle.priceWithoutDriverPerDay;
  const basePriceTotal = pricePerDay * durationDays;
  const deliveryFee = 0; // VIP complimentary service
  const tax = Math.round(basePriceTotal * 0.1); // 10% VAT
  const grandTotal = basePriceTotal + deliveryFee + tax;

  const filteredVehicles = VEHICLES.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          vehicle.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === 'all' ? true : vehicle.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const handleStartBooking = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setStep('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim()) {
      setFormError('Mohon isi nama lengkap Anda.');
      return;
    }
    if (!startDate) {
      setFormError('Mohon pilih tanggal mulai sewa.');
      return;
    }

    const bookingCode = `SBT-RENT-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    const skemaLabel = driverOption === 'with' ? 'Dengan Supir + BBM' : 'Lepas Kunci (Tanpa Sopir)';

    const waMessage = [
      `Halo *Sobat Bali Tour*, saya ingin menyewa kendaraan:`,
      ``,
      `*Kode Reservasi:* ${bookingCode}`,
      `*Nama Penyewa:* ${fullName.trim()}`,
      `*Unit Kendaraan:* ${selectedVehicle.name}`,
      `*Skema Sewa:* ${skemaLabel}`,
      `*Tanggal Mulai:* ${startDate}`,
      `*Durasi Sewa:* ${durationDays} Hari`,
      deliveryLocation.trim() ? `*Lokasi Antar/Jemput:* ${deliveryLocation.trim()}` : null,
      specialNotes.trim() ? `*Catatan Tambahan:* ${specialNotes.trim()}` : null,
      `*Total Estimasi:* Rp ${grandTotal.toLocaleString('id-ID')}`,
      ``,
      `Mohon informasi ketersediaan unit dan konfirmasi selanjutnya. Terima kasih!`
    ]
      .filter(Boolean)
      .join('\n');

    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    setWhatsappUrl(waLink);

    const bookingObj = {
      bookingCode,
      vehicle: selectedVehicle,
      startDate,
      durationDays,
      driverOption,
      fullName: fullName.trim(),
      deliveryLocation: deliveryLocation.trim() || 'Konfirmasi via WhatsApp',
      specialNotes: specialNotes.trim(),
      totalPrice: grandTotal,
      paymentMethod: 'WhatsApp Concierge (+62 857-3939-9365)',
      createdAt: new Date().toISOString()
    };

    setConfirmedBooking(bookingObj);
    setStep('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const linkEl = document.createElement('a');
    linkEl.href = waLink;
    linkEl.target = '_blank';
    linkEl.rel = 'noopener noreferrer';
    document.body.appendChild(linkEl);
    linkEl.click();
    document.body.removeChild(linkEl);
  };

  const handleReset = () => {
    setStep('catalog');
    setStartDate('');
    setDurationDays(3);
    setDriverOption('without');
    setFullName('');
    setDeliveryLocation('');
    setSpecialNotes('');
    setFormError(null);
    setConfirmedBooking(null);
  };

  return (
    <div className="bg-neutral-950 min-h-screen text-gold-100 pt-28 pb-20 font-sans relative">
      
      {/* Top Graphic Banner Accent */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-gold-900/10 via-gold-500/0 to-transparent pointer-events-none" />
      <div className="absolute top-48 left-1/4 w-[350px] h-[350px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ------------------------------------------- */}
        {/* STEP 1: CATALOG VEHICLES LISTING */}
        {/* ------------------------------------------- */}
        {step === 'catalog' && (
          <div className="animate-fade-in text-left">
            {/* Header section */}
            <div className="mb-12">
              <div className="inline-flex items-center space-x-2 bg-gold-400/10 border border-gold-400/20 px-3 py-1 rounded-full mb-4">
                <Sparkles size={11} className="text-gold-400" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-300 font-bold">Armada Eksklusif</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl text-gold-200 tracking-wide font-medium leading-tight">
                Layanan Sewa Mobil Premium Bali
              </h1>
              <p className="font-sans text-sm md:text-base text-gold-100/60 max-w-3xl mt-4 leading-relaxed">
                Nikmati kenyamanan berkendara di pulau dewata dengan unit kendaraan ber-AC dingin, wangi, bersih, dan berperfoma prima. Kami menawarkan skema sewa fleksibel Lepas Kunci (Tanpa Sopir) atau Dengan Supir Profesional beserta bahan bakar (BBM).
              </p>
            </div>

            {/* Filter controls row */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-neutral-900/50 p-4 border border-gold-900/15 rounded-md mb-8">
              <div className="flex bg-neutral-950 p-1 rounded-sm border border-gold-400/10 w-full md:w-auto">
                <span className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-gold-400 flex items-center gap-2">
                  <Car size={13} />
                  Armada Mobil & Transport Premium
                </span>
              </div>

              {/* Search input field */}
              <div className="relative flex-grow md:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-300/40 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Cari kendaraan (misal: Avanza, Alphard)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-950 border border-gold-400/15 pl-10 pr-4 py-2.5 rounded-sm text-xs text-gold-100 focus:outline-none focus:border-gold-400 placeholder-gold-300/20 font-sans"
                />
              </div>
            </div>

            {/* Catalog Grid */}
            {filteredVehicles.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-gold-900/15 rounded-lg bg-neutral-900/20">
                <Info className="mx-auto text-gold-400/50 w-10 h-10 mb-4" />
                <p className="font-serif text-lg text-gold-200">Tidak ada armada ditemukan</p>
                <p className="font-sans text-xs text-gold-100/40 mt-1">Coba gunakan kata kunci pencarian yang lain.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVehicles.map((vehicle) => {
                  const isCar = vehicle.type === 'car';
                  return (
                    <div
                      key={vehicle.id}
                      className="bg-neutral-900/30 border border-gold-900/15 hover:border-gold-400/40 rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold-500/5"
                    >
                      {/* Image Frame */}
                      <div className="relative h-56 bg-neutral-950 overflow-hidden">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {vehicle.passengers && (
                          <span className="absolute top-4 left-4 bg-neutral-950/95 backdrop-blur-md border border-gold-400/25 text-gold-300 font-mono text-[9px] uppercase tracking-wider font-bold py-1.5 px-3 rounded-sm shadow-md">
                            {vehicle.passengers} Penumpang
                          </span>
                        )}
                        
                        {/* Price Tag Overlay */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent p-4 flex items-end justify-between">
                          {vehicle.priceWithoutDriverPerDay > 0 ? (
                            <>
                              <div>
                                <p className="text-[9px] uppercase font-mono tracking-widest text-gold-400/70">Lepas Kunci</p>
                                <p className="font-mono text-sm font-bold text-gold-100">
                                  Rp {vehicle.priceWithoutDriverPerDay.toLocaleString('id-ID')} <span className="text-[9px] font-normal text-gold-100/50">/hari</span>
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-[9px] uppercase font-mono tracking-widest text-gold-400/70">Dengan Sopir + BBM</p>
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

                      {/* Info body */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="font-serif text-xl text-gold-200 group-hover:text-gold-400 transition-colors font-medium">
                              {vehicle.name}
                            </h3>
                            <div className="flex items-center space-x-1">
                              <Star size={11} className="fill-gold-400 text-gold-400" />
                              <span className="text-[10px] font-mono font-bold text-gold-300">4.9</span>
                            </div>
                          </div>
                          <p className="font-sans text-xs text-gold-100/60 mt-2.5 leading-relaxed">
                            {vehicle.description}
                          </p>

                          {/* Technical Features Specs */}
                          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gold-900/10 text-[11px] font-mono text-gold-300/80">
                            {isCar && vehicle.passengers && (
                              <div className="flex items-center gap-2">
                                <Users size={12} className="text-gold-400" />
                                <span>{vehicle.passengers} Kursi Penumpang</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <Settings size={12} className="text-gold-400" />
                              <span>{vehicle.transmission}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Fuel size={12} className="text-gold-400" />
                              <span>{vehicle.engine} Engine</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Shield size={12} className="text-gold-400" />
                              <span>Proteksi All-Risk</span>
                            </div>
                          </div>

                          {/* Bullet points inclusions */}
                          <div className="mt-4 pt-4 border-t border-gold-900/10 space-y-1.5 text-left">
                            {vehicle.features.slice(0, 3).map((feat, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-[10px] font-sans text-gold-100/50">
                                <span className="w-1 h-1 rounded-full bg-gold-400" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA button */}
                        <div className="mt-6 pt-4 border-t border-gold-900/10">
                          <button
                            onClick={() => handleStartBooking(vehicle)}
                            className="w-full bg-gold-400 hover:bg-gold-500 text-neutral-950 font-mono text-xs uppercase tracking-[0.2em] font-bold py-3.5 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-95"
                          >
                            <span>Reservasi Sewa</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

            {/* Why Rent with Us row info */}
            <div className="mt-20 border border-gold-400/20 bg-neutral-900/20 rounded-md p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <h3 className="font-serif text-2xl text-gold-200 tracking-wide font-medium">Layanan Antar Jemput Gratis Se-Bali Selatan</h3>
                  <p className="font-sans text-xs md:text-sm text-gold-100/60 leading-relaxed mt-2.5">
                    Demi kemudahan Anda, kami mengirimkan mobil atau motor secara cuma-cuma ke Bandara Internasional I Gusti Ngurah Rai (DPS), area Kuta, Seminyak, Legian, Sanur, Nusa Dua, Jimbaran, Canggu, hingga Ubud Central. Bebas biaya tersembunyi!
                  </p>
                </div>
                <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="bg-neutral-950/60 border border-gold-900/10 p-4 rounded-sm">
                    <p className="text-gold-400 font-bold mb-1">24/7 SUPPORT</p>
                    <p className="text-gold-100/40 text-[10px]">Bantuan darurat ban bocor & derek di jalan gratis.</p>
                  </div>
                  <div className="bg-neutral-950/60 border border-gold-900/10 p-4 rounded-sm">
                    <p className="text-gold-400 font-bold mb-1">LEPAS KUNCI</p>
                    <p className="text-gold-100/40 text-[10px]">Pilihan mengemudi bebas sendiri tanpa terikat supir.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------- */}
        {/* STEP 2: BOOKING INFORMATION INPUTS */}
        {/* ------------------------------------------- */}
        {step === 'booking' && (
          <div className="animate-fade-in text-left">
            <button
              onClick={() => setStep('catalog')}
              className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gold-400 hover:text-gold-300 mb-8 cursor-pointer group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Kembali Ke Katalog Sewa</span>
            </button>

            <h1 className="font-serif text-3xl md:text-5xl text-gold-200 tracking-wide font-medium mb-10">
              Formulir Reservasi Sewa {selectedVehicle.name}
            </h1>

            <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="form-rental-details">
              
              {/* Left Column inputs */}
              <div className="lg:col-span-7 space-y-6">
                {formError && (
                  <div className="bg-red-950/40 border border-red-500/30 p-3.5 rounded-md text-left text-xs text-red-200 flex items-center gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Nama Penyewa (Cukup isi nama, tanpa KTP) */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-widest text-gold-300 font-semibold font-mono">
                    Nama Lengkap Penyewa
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama Anda"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-neutral-900 border border-gold-400/20 px-4 py-3 text-sm text-gold-100 rounded-sm focus:outline-none focus:border-gold-400 placeholder-gold-300/25"
                  />
                </div>
                
                {/* Driver choice tabs */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-gold-300/70 font-semibold font-mono">
                    Pilihan Skema Berkendara
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedVehicle.priceWithoutDriverPerDay > 0 ? (
                      <button
                        type="button"
                        onClick={() => setDriverOption('without')}
                        className={`p-4 rounded-sm border transition-all flex flex-col justify-between gap-1 text-left cursor-pointer ${
                          driverOption === 'without'
                            ? 'bg-gold-500/5 border-gold-400'
                            : 'bg-neutral-900/20 border-gold-900/10 hover:border-gold-400/30'
                        }`}
                      >
                        <span className="font-serif text-sm font-semibold text-gold-200">Self-Drive (Lepas Kunci)</span>
                        <span className="font-mono text-[10px] text-gold-400">Tanpa Sopir • Rp {selectedVehicle.priceWithoutDriverPerDay.toLocaleString('id-ID')}/hari</span>
                      </button>
                    ) : (
                      <div className="p-4 rounded-sm border border-gold-900/10 bg-neutral-900/10 opacity-50 flex flex-col justify-between gap-1 text-left select-none">
                        <span className="font-serif text-sm font-semibold text-gold-200/55">Self-Drive (Lepas Kunci)</span>
                        <span className="font-mono text-[10px] text-red-400/75">Lepas Kunci Tidak Tersedia</span>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => setDriverOption('with')}
                      className={`p-4 rounded-sm border transition-all flex flex-col justify-between gap-1 text-left cursor-pointer ${
                        driverOption === 'with'
                          ? 'bg-gold-500/5 border-gold-400'
                          : 'bg-neutral-900/20 border-gold-900/10 hover:border-gold-400/30'
                      }`}
                    >
                      <span className="font-serif text-sm font-semibold text-gold-200">Dengan Supir + BBM</span>
                      <span className="font-mono text-[10px] text-gold-400">Sopir VIP Lokal • Rp {selectedVehicle.priceWithDriverPerDay.toLocaleString('id-ID')}/hari</span>
                    </button>
                  </div>
                </div>

                {/* Rental dates and durations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-widest text-gold-300/70 font-semibold font-mono flex items-center gap-1.5">
                      <Calendar size={13} className="text-gold-400" />
                      <span>Mulai Sewa (Start Date)</span>
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-neutral-900 border border-gold-400/15 px-4 py-3 text-sm text-gold-100 rounded-sm focus:outline-none focus:border-gold-400 font-sans [color-scheme:dark] cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-widest text-gold-300/70 font-semibold font-mono flex items-center gap-1.5">
                      <Clock size={13} className="text-gold-400" />
                      <span>Durasi Sewa (Hari)</span>
                    </label>
                    <div className="flex items-center border border-gold-400/15 rounded-sm bg-neutral-900">
                      <button
                        type="button"
                        onClick={() => setDurationDays(Math.max(1, durationDays - 1))}
                        className="px-4 py-3 text-gold-300 hover:text-gold-400 font-bold cursor-pointer"
                      >
                        -
                      </button>
                      <span className="flex-grow text-center text-sm font-semibold text-gold-100 font-mono">
                        {durationDays} Hari
                      </span>
                      <button
                        type="button"
                        onClick={() => setDurationDays(Math.min(30, durationDays + 1))}
                        className="px-4 py-3 text-gold-300 hover:text-gold-400 font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Optional Location & Notes */}
                <div className="space-y-4 pt-4 border-t border-gold-900/10">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-widest text-gold-300/70 font-semibold font-mono">
                      Lokasi Penyerahan / Hotel di Bali (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Bandara Ngurah Rai / Hotel di Seminyak"
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      className="w-full bg-neutral-900 border border-gold-400/15 px-4 py-3 text-sm text-gold-100 rounded-sm focus:outline-none focus:border-gold-400 placeholder-gold-300/20"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-widest text-gold-300/70 font-semibold font-mono">
                      Catatan Tambahan (Opsional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Contoh: jam penjemputan, rute perjalanan, dll."
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full bg-neutral-900 border border-gold-400/15 px-4 py-3 text-sm text-gold-100 rounded-sm focus:outline-none focus:border-gold-400 placeholder-gold-300/20"
                    />
                  </div>
                </div>

                {/* Terms and benefits checklist */}
                <div className="bg-neutral-900/30 border border-gold-900/10 rounded p-4 space-y-2.5">
                  <h4 className="font-serif text-sm text-gold-300 font-medium">Ketentuan Layanan Sewa Sobat Bali Tour:</h4>
                  <div className="space-y-1.5 text-xs text-gold-100/50 pl-1.5 font-sans leading-relaxed">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      <span><strong>Pemesanan Mudah:</strong> Cukup isi nama Anda dan konfirmasi langsung melalui WhatsApp resmi kami.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      <span><strong>Dengan Supir:</strong> Durasi pemakaian maksimal sopir adalah 10 jam per hari.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      <span><strong>Pengiriman Gratis:</strong> Antar-jemput unit gratis ke hotel di Kuta, Canggu, Ubud, Seminyak, Nusa Dua, DPS Airport.</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Panel Summary Invoice */}
              <div className="lg:col-span-5 bg-neutral-900/60 border border-gold-400/15 p-6 rounded-md flex flex-col justify-between h-fit lg:sticky lg:top-24">
                <div>
                  <h3 className="font-serif text-lg text-gold-200 border-b border-gold-900/10 pb-3 mb-4 font-medium tracking-wide">
                    Rincian Estimasi Sewa
                  </h3>

                  {/* Tiny vehicle badge */}
                  <div className="flex items-center space-x-3 mb-6 bg-neutral-900 p-3 border border-gold-900/10 rounded-sm">
                    <img
                      src={selectedVehicle.image}
                      alt={selectedVehicle.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-20 h-14 object-cover rounded-sm border border-gold-400/20 flex-shrink-0"
                    />
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-gold-400">
                        {selectedVehicle.type === 'car' ? 'Car Rental' : 'Motorbike Rental'}
                      </p>
                      <h4 className="font-serif text-sm text-gold-100 font-medium leading-tight">{selectedVehicle.name}</h4>
                      <p className="font-mono text-[10px] text-gold-300 mt-1 uppercase">
                        {driverOption === 'with' ? 'Dengan Supir' : 'Lepas Kunci'}
                      </p>
                    </div>
                  </div>

                  {/* Calculations breakdown */}
                  <div className="space-y-4 text-sm font-mono text-gold-200/60">
                    <div className="flex justify-between">
                      <span>Tarif per hari:</span>
                      <span className="text-gold-100 font-bold">Rp {pricePerDay.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Durasi sewa:</span>
                      <span className="text-gold-100 font-bold">{durationDays} Hari</span>
                    </div>
                    <div className="flex justify-between border-t border-gold-900/10 pt-3">
                      <span>Subtotal sewa:</span>
                      <span className="text-gold-100 font-bold">Rp {basePriceTotal.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pengantaran & Penjemputan:</span>
                      <span className="text-gold-400 font-sans text-xs font-semibold">GRATIS (VIP Promo)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pajak (VAT 10%):</span>
                      <span className="text-gold-100 font-bold">Rp {tax.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-gold-400/20">
                  <div className="flex justify-between items-baseline mb-6">
                    <span className="font-serif text-base text-gold-200">Total Estimasi</span>
                    <span className="font-mono text-2xl md:text-3xl text-gold-400 font-bold">Rp {grandTotal.toLocaleString('id-ID')}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-400 hover:bg-gold-500 text-neutral-950 font-mono text-xs uppercase tracking-[0.15em] font-bold py-4 px-4 rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-md hover:shadow-gold-500/10 active:scale-95"
                  >
                    <MessageCircle size={15} />
                    <span>Pesan Sekarang via WhatsApp</span>
                    <ArrowRight size={14} />
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[9px] text-gold-300/40 font-mono mt-4">
                    <ShieldCheckIcon />
                    <span>WHATSAPP CONCIERGE: +62 857-3939-9365</span>
                  </div>
                </div>
              </div>

            </form>
          </div>
        )}

        {/* ------------------------------------------- */}
        {/* STEP 3: SUCCESS WHATSAPP CONFIRMATION */}
        {/* ------------------------------------------- */}
        {step === 'success' && confirmedBooking && (
          <div className="animate-fade-in max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-emerald-500/15 border border-emerald-400/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <CheckCircle2 size={36} className="stroke-[2.5]" />
            </div>

            <h1 className="font-serif text-3xl md:text-5xl text-gold-200 tracking-wide font-medium">
              Mengarahkan ke WhatsApp!
            </h1>
            <p className="font-sans text-xs md:text-sm text-gold-100/60 mt-3 max-w-lg mx-auto">
              Detail reservasi sewa <strong className="text-gold-200">{confirmedBooking.vehicle.name}</strong> atas nama <strong className="text-gold-200">{confirmedBooking.fullName}</strong> telah siap dikirim ke WhatsApp resmi Sobat Bali Tour.
            </p>

            {/* Premium Paper Receipt Block */}
            <div className="bg-neutral-900 border border-gold-400/25 rounded-lg shadow-2xl p-6 md:p-8 mt-10 text-left relative font-sans overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gold-900/15 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-serif text-xl text-gold-200 tracking-wide font-semibold">Sobat Bali Tour</h3>
                    <p className="font-sans text-[10px] text-gold-400 uppercase tracking-widest font-mono mt-0.5">Mobility Rental Reservation</p>
                  </div>
                </div>
                <div className="text-left sm:text-right font-mono">
                  <span className="text-[9px] uppercase text-gold-300/40 block">Kode Reservasi</span>
                  <span className="text-sm font-extrabold text-gold-400">{confirmedBooking.bookingCode}</span>
                </div>
              </div>

              {/* Grid content specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs leading-relaxed border-b border-gold-900/10 pb-6 mb-6">
                <div className="space-y-2 text-left">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-gold-300/40">Data Kendaraan & Skema</p>
                  <p className="text-gold-200 text-sm font-bold">{confirmedBooking.vehicle.name}</p>
                  <p className="text-gold-100/60 uppercase">Skema: <span className="text-gold-400 font-bold">{confirmedBooking.driverOption === 'with' ? 'Dengan Supir' : 'Lepas Kunci'}</span></p>
                  <p className="text-gold-100/60">Durasi: <span className="text-gold-200 font-bold">{confirmedBooking.durationDays} Hari</span></p>
                </div>

                <div className="space-y-2 text-left">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-gold-300/40">Data Penyewa</p>
                  <p className="text-gold-200 text-sm font-bold">Nama: {confirmedBooking.fullName}</p>
                  <p className="text-gold-100/60">Mulai Sewa: <span className="text-gold-100 font-medium">{confirmedBooking.startDate}</span></p>
                  <p className="text-gold-100/60">Lokasi Drop: <span className="text-gold-100 font-medium">{confirmedBooking.deliveryLocation}</span></p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 text-sm text-gold-100 font-sans">
                <span className="font-serif">Total Estimasi Sewa:</span>
                <span className="font-mono text-lg text-gold-400 font-extrabold">Rp {confirmedBooking.totalPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-mono text-xs uppercase tracking-[0.15em] font-bold py-4 px-8 rounded-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Buka Chat WhatsApp (+62 857-3939-9365)</span>
              </a>
              <button
                onClick={handleReset}
                className="bg-neutral-900 border border-gold-400/20 hover:border-gold-400 text-gold-300 hover:text-gold-100 font-mono text-xs uppercase tracking-[0.15em] font-bold py-4 px-8 rounded-sm transition-all duration-300 cursor-pointer"
              >
                Kembali ke Armada Utama
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function ShieldCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400">
      <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
