import React from 'react';
import { ShieldCheck, Compass, Sparkles, ChefHat, Camera, CalendarDays, Award } from 'lucide-react';

export default function WhyUsSection() {
  const points = [
    {
      icon: <Award className="w-6 h-6 text-gold-400" />,
      title: '100% Layanan Privat VIP',
      desc: 'Tidak ada rombongan lain. Seluruh kendaraan, pemandu, dan akomodasi selama perjalanan adalah hak eksklusif Anda demi privasi mutlak.'
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-gold-400" />,
      title: 'Garansi Fleksibilitas Jadwal',
      desc: 'Ubah tanggal perjalanan atau jadwal tur Anda secara gratis jika terjadi cuaca buruk, kendala penerbangan, atau perubahan rencana mendadak.'
    },
    {
      icon: <ChefHat className="w-6 h-6 text-gold-400" />,
      title: 'Kurasi Kuliner Kelas Bintang 5',
      desc: 'Mulai dari lobster panggang segar di tepi pantai Jimbaran hingga piknik gourmet hangat di lereng kawah gunung berapi. Pilihan vegan dan bebas alergi selalu tersedia.'
    },
    {
      icon: <Camera className="w-6 h-6 text-gold-400" />,
      title: 'Dokumentasi Profesional Eksklusif',
      desc: 'Lupakan foto selfie buram. Opsi add-on fotografer handal dengan kamera DSLR profesional dan drone 4K siap mengabadikan petualangan emas Anda.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-400" />,
      title: 'Keamanan Standar Internasional',
      desc: 'Semua armada penjelajah 4x4, speed boat, dan yacht telah tersertifikasi kelayakan laut & darat serta dilengkapi asuransi perjalanan penuh.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold-400" />,
      title: 'Pemandu Lokal Berlisensi Resmi',
      desc: 'Pemandu kami bukan sekadar supir biasa. Mereka adalah ahli sejarah lokal, instruktur bersertifikasi nasional, dan pengamat budaya Bali yang berpengetahuan luas.'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-neutral-900 text-gold-100 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="max-w-3xl space-y-4 mb-20 text-left">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400 font-bold bg-gold-500/5 px-4 py-2 border border-gold-400/10 rounded-full inline-block">
            Elite Advantages
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-gold-100 font-medium tracking-tight leading-tight">
            Standar Pelayanan yang Berbeda
          </h1>
          <p className="font-sans text-sm md:text-base text-gold-200/60 leading-relaxed font-light">
            Mengapa memilih Sobat Bali Tour? Kami tidak sekadar merancang tur, melainkan menciptakan karya seni petualangan pribadi yang tak lekang oleh waktu.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="whyus-cards-grid">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-neutral-950/50 p-8 rounded-lg border border-gold-400/10 hover:border-gold-400/35 transition-all duration-500 hover:shadow-xl hover:shadow-black/50 group flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                <div className="p-3 bg-gold-400/5 border border-gold-400/20 rounded-sm w-fit transition-transform duration-500 group-hover:scale-105">
                  {point.icon}
                </div>
                <h3 className="font-serif text-xl text-gold-200 font-medium tracking-wide">
                  {point.title}
                </h3>
                <p className="text-gold-200/50 text-xs md:text-sm leading-relaxed font-sans">
                  {point.desc}
                </p>
              </div>

              <div className="w-full h-[1px] bg-gold-500/10 mt-6 group-hover:bg-gold-500/30 transition-colors" />
            </div>
          ))}
        </div>

        {/* Feature Highlight Block */}
        <div className="mt-20 bg-neutral-950 border border-gold-400/10 rounded-xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="whyus-highlight-block">
          <div className="lg:col-span-8 text-left space-y-4">
            <h3 className="font-serif text-2xl lg:text-3xl text-gold-200 font-medium tracking-wide">
              Butuh Rencana Perjalanan Custom di Luar Paket?
            </h3>
            <p className="text-gold-200/60 text-xs md:text-sm font-sans leading-relaxed">
              Tim perancang perjalanan VIP kami siap menyusun program liburan eksklusif multi-hari yang disesuaikan dengan jenis hobi, minat, atau perayaan romantis khusus Anda di pulau Bali. Hubungi kami kapan pun secara langsung.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-end">
            <a
              href="#contact"
              className="w-full lg:w-auto text-center bg-gold-400 hover:bg-gold-500 text-neutral-950 text-xs uppercase tracking-widest font-mono font-bold px-8 py-4 rounded-sm transition-all shadow-md cursor-pointer active:scale-95"
              id="whyus-btn-custom-consult"
            >
              Konsultasi Privat Gratis
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
