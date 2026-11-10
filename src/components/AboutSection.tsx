import React from 'react';
import { ShieldCheck, Compass, Users, Star, Award, Heart } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { label: 'PRO GUIDE BERSERTIFIKAT', value: '100%' },
    { label: 'TETAMU VIP TAHUNAN', value: '5,000+' },
    { label: 'KEPUASAN MAKSIMAL', value: '4.95/5' },
    { label: 'ARMADA LUXURY PRIBADI', value: '25+' },
  ];

  return (
    <div className="pt-28 pb-24 bg-neutral-950 text-gold-100 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-4 mb-20 text-left">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400 font-bold bg-gold-500/5 px-4 py-2 border border-gold-400/10 rounded-full inline-block">
            Our Noble Story
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-gold-100 font-medium tracking-tight leading-tight">
            Pelopor Layanan Tour Privat Luxury di Bali
          </h1>
          <p className="font-sans text-sm md:text-base text-gold-200/60 leading-relaxed font-light">
            Didirikan dengan visi untuk mendefinisikan kembali arti kemewahan perjalanan, Sobat Bali Tour menghadirkan pengalaman liburan privat yang eksklusif, aman, dan dirancang khusus untuk memenuhi ekspektasi tertinggi Anda.
          </p>
        </div>

        {/* Brand Core Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24" id="about-brand-grid">
          {/* Left Column Text details */}
          <div className="space-y-8 text-left">
            <h2 className="font-serif text-2xl md:text-3xl text-gold-200 font-medium tracking-wide">
              Misi Kami: Menghadirkan Momen Liburan Tanpa Batas
            </h2>
            
            <p className="text-gold-200/70 text-sm leading-relaxed">
              Di Sobat Bali Tour, kami percaya bahwa setiap detik perjalanan Anda di Bali adalah berharga. Kami menolak paket wisata massal yang penuh sesak dan terburu-buru. Itulah sebabnya setiap itinerary yang kami buat bersifat 100% privat, fleksibel, dan ditemani oleh pemandu bersertifikasi internasional.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold-400/10 border border-gold-400/20 text-gold-400 rounded-sm mt-1">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gold-100 font-medium">Prioritas Keamanan & Kenyamanan</h3>
                  <p className="text-gold-200/50 text-xs leading-relaxed mt-1">
                    Semua armada kami melalui pemeriksaan keamanan berkala standar tinggi. Pemandu off-road dan instruktur selam kami memiliki lisensi resmi internasional.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold-400/10 border border-gold-400/20 text-gold-400 rounded-sm mt-1">
                  <Compass size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gold-100 font-medium">Eksplorasi yang Dipersonalisasi</h3>
                  <p className="text-gold-200/50 text-xs leading-relaxed mt-1">
                    Rencana perjalanan bersifat santai dan fleksibel. Anda dapat meminta penyesuaian menu kuliner, waktu penjemputan, atau rute tambahan secara langsung selama perjalanan.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold-400/10 border border-gold-400/20 text-gold-400 rounded-sm mt-1">
                  <Heart size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gold-100 font-medium">Berdampak pada Lingkungan Lokal</h3>
                  <p className="text-gold-200/50 text-xs leading-relaxed mt-1">
                    Sebagian hasil dari pesanan Anda disalurkan langsung untuk pelestarian terumbu karang di Nusa Penida serta kesejahteraan komunitas adat pemandu lokal di Kintamani.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative rounded-lg overflow-hidden border border-gold-500/10 h-[480px] group shadow-2xl" id="about-visual-panel">
            <img
              src="/bali_jungle_bg_1783528784335.jpg"
              alt="Sobat Bali Tour Team Work"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-left space-y-2">
              <span className="font-mono text-[10px] text-gold-400 font-bold uppercase tracking-widest">Luxury Hospitality</span>
              <h3 className="font-serif text-2xl text-gold-100 font-medium">Di Balik Layar Kemewahan</h3>
              <p className="text-gold-200/70 text-xs leading-relaxed">
                Tim perancang perjalanan, supir VIP, fotografer profesional, dan pramutamu hotel kami siap menyambut kedatangan Anda 24 jam sehari.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-neutral-900/40 border border-gold-400/10 p-8 rounded-lg text-center" id="about-stats-strip">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="font-mono text-2xl md:text-4xl text-gold-400 font-bold tracking-tight">
                {stat.value}
              </p>
              <p className="font-mono text-[9px] md:text-[11px] text-gold-200/40 tracking-wider uppercase font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
