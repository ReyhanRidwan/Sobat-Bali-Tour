import React, { useState, useEffect } from 'react';
import {
  X, Check, Calendar, Users, ArrowRight, ShieldCheck,
  Sparkles, AlertTriangle, MessageCircle, CheckCircle2
} from 'lucide-react';
import { BookingDetails } from '../types';
import { EXPERIENCES, BOOKING_ADDONS } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialExperienceId?: string;
  onBookingSuccess: (booking: BookingDetails) => void;
}

const WHATSAPP_NUMBER = '6285739399365';

export default function BookingModal({
  isOpen,
  onClose,
  initialExperienceId,
  onBookingSuccess,
}: BookingModalProps) {
  const [step, setStep] = useState<'details' | 'success'>('details');

  // Booking fields state
  const [selectedExpId, setSelectedExpId] = useState(initialExperienceId || EXPERIENCES[0].id);
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [fullName, setFullName] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  // Blocked Dates State Warning
  const [dateWarning, setDateWarning] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Confirmed booking state
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  // Sync initial experience ID
  useEffect(() => {
    if (initialExperienceId) {
      setSelectedExpId(initialExperienceId);
    }
  }, [initialExperienceId, isOpen]);

  // Check for fully booked dates
  useEffect(() => {
    if (!date) {
      setDateWarning(null);
      return;
    }
    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getDay();

    if (dayOfWeek === 1) {
      setDateWarning('⚠️ Hari Senin adalah jadwal pemeliharaan berkala yacht & area konservasi gunung berapi. Jadwal ini terisi penuh (Fully Booked). Silakan pilih tanggal lain.');
      return;
    }

    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const year = selectedDate.getFullYear();

    if (year === 2026 && month === 7 && (day === 12 || day === 15 || day === 20)) {
      setDateWarning('⚠️ Tanggal ini sudah dipesan penuh oleh tamu kenegaraan (Fully Booked). Silakan pilih tanggal lain.');
      return;
    }

    setDateWarning(null);
  }, [date]);

  if (!isOpen) return null;

  const currentExp = EXPERIENCES.find((e) => e.id === selectedExpId) || EXPERIENCES[0];

  // Price calculations
  const basePrice = currentExp.pricePerPerson * guests;
  const selectedAddonObjects = BOOKING_ADDONS.filter((addon) => selectedAddons.includes(addon.id));
  const addonsPrice = selectedAddonObjects.reduce((total, addon) => total + addon.price, 0);
  const subtotal = basePrice + addonsPrice;
  const tax = Math.round(subtotal * 0.1);
  const grandTotal = subtotal + tax;

  const handleAddonToggle = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const getAddonDisplayName = (name: string) => {
    if (name === 'Bespoke Private Photographer') return 'Fotografer Pribadi Profesional';
    if (name === 'Cinematic Drone Videography') return 'Videografi Drone Sinematik 4K';
    if (name === 'Veuve Clicquot Champagne & Caviar') return 'Champagne Premium & Kaviar';
    return 'Transfer Helikopter Eksklusif (1 Arah)';
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim()) {
      setFormError('Mohon masukkan nama Anda.');
      return;
    }
    if (!date) {
      setFormError('Mohon pilih tanggal perjalanan Anda.');
      return;
    }
    if (dateWarning) {
      setFormError('Tanggal yang Anda pilih sedang penuh (Fully Booked). Silakan pilih tanggal lain.');
      return;
    }

    const bookingCode = `SBT-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    const addonText = selectedAddonObjects.length > 0
      ? selectedAddonObjects.map((a) => `- ${getAddonDisplayName(a.name)} (+$${a.price})`).join('\n')
      : '-';

    const waMessage = [
      `Halo *Sobat Bali Tour*, saya ingin melakukan reservasi paket tour:`,
      ``,
      `*Kode Booking:* ${bookingCode}`,
      `*Nama Pemesan:* ${fullName.trim()}`,
      `*Paket Tour:* ${currentExp.title}`,
      `*Tanggal Perjalanan:* ${date}`,
      `*Jumlah Peserta:* ${guests} Orang`,
      selectedAddonObjects.length > 0 ? `*Upgrade VIP:*\n${addonText}` : null,
      specialNotes.trim() ? `*Catatan Khusus:* ${specialNotes.trim()}` : null,
      `*Total Estimasi:* $${grandTotal} USD`,
      ``,
      `Mohon informasi ketersediaan dan konfirmasi selanjutnya. Terima kasih!`
    ]
      .filter(Boolean)
      .join('\n');

    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    setWhatsappUrl(waLink);

    const bookingObj: BookingDetails = {
      id: `booking-${Date.now()}`,
      experienceId: selectedExpId,
      date,
      guests,
      addons: selectedAddons,
      fullName: fullName.trim(),
      email: '',
      phone: '',
      specialNotes: specialNotes.trim(),
      totalPrice: grandTotal,
      bookingCode,
      paymentMethod: 'WhatsApp Concierge (+62 857-3939-9365)',
      createdAt: new Date().toISOString(),
    };

    setConfirmedBooking(bookingObj);
    setStep('success');
    onBookingSuccess(bookingObj);

    // Trigger anchor click to open WhatsApp in new tab
    const linkEl = document.createElement('a');
    linkEl.href = waLink;
    linkEl.target = '_blank';
    linkEl.rel = 'noopener noreferrer';
    document.body.appendChild(linkEl);
    linkEl.click();
    document.body.removeChild(linkEl);
  };

  const handleReset = () => {
    setStep('details');
    setDate('');
    setGuests(2);
    setSelectedAddons([]);
    setFullName('');
    setSpecialNotes('');
    setFormError(null);
    setConfirmedBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/90 backdrop-blur-sm animate-fade-in text-gold-100 font-sans">
      <div
        id="booking-modal-container"
        className="relative bg-neutral-950 border border-gold-400/25 w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden flex flex-col my-8 max-h-[92vh]"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-900 border-b border-gold-900/10">
          <div className="flex items-center space-x-2">
            <Sparkles size={16} className="text-gold-400" />
            <h2 className="font-serif text-lg text-gold-200 tracking-wide font-medium">
              {step === 'details' ? 'Reservasi Paket Tour via WhatsApp' : 'Konfirmasi Reservasi WhatsApp'}
            </h2>
          </div>
          <button
            onClick={handleReset}
            className="text-gold-300/60 hover:text-gold-400 transition-colors p-1 cursor-pointer"
            aria-label="Tutup"
            id="btn-close-booking"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Box */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8">
          {step === 'details' && (
            <form onSubmit={handleDetailsSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="form-booking-details">
              {/* Left Column Form inputs */}
              <div className="lg:col-span-7 space-y-6">
                {formError && (
                  <div className="bg-red-950/40 border border-red-500/30 p-3.5 rounded-md text-left text-xs text-red-200 flex items-center gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Nama Lengkap Input (Cukup isi nama, tanpa KTP) */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs uppercase tracking-widest text-gold-300 font-semibold font-mono">
                    Nama Lengkap Pemesan
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama Anda"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    id="booking-input-name"
                    className="w-full bg-neutral-900 border border-gold-400/20 px-4 py-3 text-sm text-gold-100 rounded-sm focus:outline-none focus:border-gold-400 placeholder-gold-300/25"
                  />
                </div>

                {/* Select Package Dropdown */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs uppercase tracking-widest text-gold-300/70 font-semibold font-mono">
                    Pilih Paket Perjalanan Eksklusif
                  </label>
                  <select
                    value={selectedExpId}
                    onChange={(e) => {
                      setSelectedExpId(e.target.value);
                      setSelectedAddons([]);
                    }}
                    id="booking-select-experience"
                    className="w-full bg-neutral-900 border border-gold-400/20 px-4 py-3 text-sm text-gold-100 rounded-sm focus:outline-none focus:border-gold-400 font-sans cursor-pointer"
                  >
                    {EXPERIENCES.map((exp) => (
                      <option key={exp.id} value={exp.id}>
                        {exp.title} — ${exp.pricePerPerson} per orang
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Guest Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-widest text-gold-300/70 font-semibold font-mono flex items-center gap-1.5">
                      <Calendar size={13} className="text-gold-400" />
                      <span>Pilih Tanggal</span>
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      id="booking-input-date"
                      className="w-full bg-neutral-900 border border-gold-400/20 px-4 py-3 text-sm text-gold-100 rounded-sm focus:outline-none focus:border-gold-400 font-sans [color-scheme:dark] cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-widest text-gold-300/70 font-semibold font-mono flex items-center gap-1.5">
                      <Users size={13} className="text-gold-400" />
                      <span>Jumlah Peserta</span>
                    </label>
                    <div className="flex items-center border border-gold-400/20 rounded-sm bg-neutral-900">
                      <button
                        type="button"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="px-4 py-3 text-gold-300 hover:text-gold-400 font-bold cursor-pointer"
                      >
                        -
                      </button>
                      <span className="flex-grow text-center text-sm font-semibold text-gold-100 font-mono">
                        {guests} Orang
                      </span>
                      <button
                        type="button"
                        onClick={() => setGuests(Math.min(20, guests + 1))}
                        className="px-4 py-3 text-gold-300 hover:text-gold-400 font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Date Warning blockouts */}
                {dateWarning && (
                  <div className="bg-red-950/40 border border-red-500/30 p-4 rounded-md text-left text-xs text-red-200 flex items-start gap-2.5 animate-pulse">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{dateWarning}</p>
                  </div>
                )}

                {/* Catatan Tambahan (Opsional) */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs uppercase tracking-widest text-gold-300/70 font-semibold font-mono">
                    Permintaan Khusus / Lokasi Jemput (Opsional)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Jemput di Hotel Seminyak, request makan siang halal, dll."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full bg-neutral-900 border border-gold-400/15 px-4 py-3 text-sm text-gold-100 rounded-sm focus:outline-none focus:border-gold-400 placeholder-gold-300/20"
                  />
                </div>

                {/* VIP Upgrades Checklist */}
                <div className="space-y-3 text-left pt-2 border-t border-gold-900/10">
                  <h3 className="text-xs uppercase tracking-widest text-gold-300 font-bold font-mono">
                    Peningkatan Premium (Opsional)
                  </h3>
                  <div className="space-y-3">
                    {BOOKING_ADDONS.map((addon) => {
                      const isChecked = selectedAddons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => handleAddonToggle(addon.id)}
                          className={`flex items-start justify-between p-4 border rounded-sm transition-all duration-300 cursor-pointer ${
                            isChecked
                              ? 'bg-gold-500/5 border-gold-400'
                              : 'bg-neutral-900/20 border-gold-900/10 hover:border-gold-400/30'
                          }`}
                        >
                          <div className="flex items-start space-x-3 pr-4">
                            <div
                              className={`mt-1 w-4 h-4 rounded-sm border flex items-center justify-center transition-all ${
                                isChecked ? 'bg-gold-400 border-gold-400 text-neutral-950' : 'border-gold-400/30'
                              }`}
                            >
                              {isChecked && <Check size={12} className="stroke-[3]" />}
                            </div>
                            <div className="text-left">
                              <h4 className="font-serif text-sm text-gold-200 font-medium">
                                {getAddonDisplayName(addon.name)}
                              </h4>
                              <p className="font-sans text-[11px] text-gold-100/50 leading-relaxed mt-0.5">
                                {addon.description === 'A professional travel photographer to capture candid moments of your adventure (Includes 50+ edited high-res digital shots).' ? 'Dokumentasikan momen-momen emas perjalanan privat Anda dengan fotografer berpengalaman (Termasuk 50+ file digital diedit high-res).' :
                                 addon.description === 'Aerial video shooting utilizing 4K cinema drones for dramatic landscape memories (Includes a 1-minute social media reel).' ? 'Video udara berkelas tinggi menggunakan drone sinematik 4K untuk klip memori lanskap spektakuler.' :
                                 addon.description === 'A chilled bottle of premium champagne accompanied by gourmet local caviar and fresh strawberries on ice.' ? 'Sajian sebotol Champagne mewah dingin dipadukan kaviar lokal segar di atas es serut.' :
                                 'Lewati lalu lintas jalan raya Bali. Terbang langsung dari pelabuhan heli langsung ke helipad resort Anda.'}
                              </p>
                            </div>
                          </div>
                          <span className="font-mono text-sm font-semibold text-gold-400 flex-shrink-0">
                            +${addon.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Panel Summary Invoice */}
              <div className="lg:col-span-5 bg-neutral-900/60 border border-gold-400/15 p-6 rounded-md flex flex-col justify-between h-fit lg:sticky lg:top-4 text-left">
                <div>
                  <h3 className="font-serif text-lg text-gold-200 border-b border-gold-900/10 pb-3 mb-4 font-medium tracking-wide">
                    Ringkasan Pemesanan
                  </h3>

                  <div className="flex items-center space-x-3 mb-6 bg-neutral-900 p-3 border border-gold-900/10 rounded-sm">
                    <img
                      src={currentExp.cardImage}
                      alt={currentExp.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-12 h-16 object-cover rounded-sm border border-gold-400/20 flex-shrink-0"
                    />
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-gold-400">Private Experience</p>
                      <h4 className="font-serif text-sm text-gold-100 font-medium leading-tight">{currentExp.title}</h4>
                      <p className="font-sans text-[11px] text-gold-200/40 mt-0.5">{currentExp.location}</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center text-gold-100/60">
                      <span>Tarif Dasar ({guests} Orang)</span>
                      <span className="font-mono text-gold-100">${basePrice}</span>
                    </div>

                    {selectedAddonObjects.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-gold-900/10">
                        <span className="text-[10px] uppercase font-mono text-gold-400 tracking-wider block">Upgrade Tambahan</span>
                        {selectedAddonObjects.map((addon) => (
                          <div key={addon.id} className="flex justify-between items-start text-xs text-gold-100/50 pl-2">
                            <span>{getAddonDisplayName(addon.name)}</span>
                            <span className="font-mono text-gold-300">+${addon.price}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex justify-between items-center text-gold-100/60 pt-4 border-t border-gold-900/10">
                      <span>Subtotal</span>
                      <span className="font-mono text-gold-100">${subtotal}</span>
                    </div>

                    <div className="flex justify-between items-center text-gold-100/60">
                      <span className="flex items-center gap-1">
                        <span>Pajak Pariwisata & Layanan VIP</span>
                        <span className="bg-gold-500/10 text-gold-300 font-mono text-[9px] px-1.5 py-0.5 rounded">10%</span>
                      </span>
                      <span className="font-mono text-gold-100">${tax}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-gold-400/20">
                  <div className="flex justify-between items-baseline mb-6">
                    <span className="font-serif text-base text-gold-200">Total Estimasi</span>
                    <span className="font-mono text-2xl md:text-3xl text-gold-400 font-bold">${grandTotal}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={!!dateWarning}
                    id="btn-confirm-details"
                    className={`w-full font-mono text-xs uppercase tracking-[0.15em] font-bold py-4 px-4 rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer active:scale-95 ${
                      dateWarning
                        ? 'bg-neutral-800 text-gold-100/35 border border-gold-900/10 cursor-not-allowed'
                        : 'bg-gold-400 hover:bg-gold-500 text-neutral-950 shadow-md hover:shadow-gold-500/10'
                    }`}
                  >
                    <MessageCircle size={15} />
                    <span>Pesan Sekarang via WhatsApp</span>
                    <ArrowRight size={14} />
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[9px] text-gold-300/50 font-mono mt-4">
                    <ShieldCheck size={12} className="text-gold-400" />
                    <span>WHATSAPP CONCIERGE: +62 857-3939-9365</span>
                  </div>
                </div>
              </div>
            </form>
          )}

          {/* STEP 2: WHATSAPP REDIRECT CONFIRMATION */}
          {step === 'success' && confirmedBooking && (
            <div className="space-y-8 text-center py-6 animate-fade-in max-w-xl mx-auto" id="booking-success-layout">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold">
                  Kode Booking: {confirmedBooking.bookingCode}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-gold-100 font-medium">
                  Mengarahkan ke WhatsApp Sobat Bali Tour
                </h3>
                <p className="text-gold-200/60 text-xs md:text-sm font-sans leading-relaxed">
                  Halo <strong className="text-gold-200">{confirmedBooking.fullName}</strong>, detail pesanan Anda untuk paket <strong className="text-gold-200">{currentExp.title}</strong> pada tanggal <strong className="text-gold-200">{confirmedBooking.date}</strong> ({confirmedBooking.guests} orang) telah disiapkan.
                </p>
              </div>

              <div className="bg-neutral-900 border border-gold-400/20 rounded-md p-5 text-left space-y-2 text-xs font-mono text-gold-200/70">
                <div className="flex justify-between">
                  <span>Nama Pemesan:</span>
                  <span className="text-gold-100 font-bold">{confirmedBooking.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Paket Tour:</span>
                  <span className="text-gold-100 font-bold">{currentExp.title}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tanggal & Peserta:</span>
                  <span className="text-gold-100 font-bold">{confirmedBooking.date} • {confirmedBooking.guests} Orang</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gold-900/15 text-sm">
                  <span>Total Estimasi:</span>
                  <span className="text-gold-400 font-bold">${confirmedBooking.totalPrice} USD</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-mono text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle size={15} />
                  <span>Buka Chat WhatsApp (+62 857-3939-9365)</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-neutral-900 border border-gold-400/20 hover:border-gold-400 text-gold-300 hover:text-gold-100 font-mono text-xs uppercase tracking-widest px-6 py-4 rounded-sm transition-all cursor-pointer"
                >
                  Selesai & Tutup
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
