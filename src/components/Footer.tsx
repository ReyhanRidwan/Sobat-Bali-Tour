import React, { useState, useEffect } from 'react';
import { Mail, Compass, Globe, Send, Sun, CloudRain, HelpCircle, Check, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [baliTime, setBaliTime] = useState('');

  useEffect(() => {
    // Show current local time in Bali (WITA - UTC+8)
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Makassar',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setBaliTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      setEmail('');
      setSuccess(false);
    }, 3000);
  };

  return (
    <footer id="about" className="bg-luxury-dark border-t border-gold-400/20 pt-20 pb-10 text-left relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/[0.02] rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gold-900/10">
        
        {/* Brand Description Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center space-x-3.5">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-wide text-gold-200 font-bold">
                Sobat Bali Tour
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-300/80 -mt-0.5 font-semibold">
                Premium Tour & Travel
              </span>
            </div>
          </div>
          <p className="font-sans text-xs md:text-sm text-gold-100/55 leading-relaxed font-light">
            Sobat Bali Tour is the premier bespoke private charter and luxury tour operator on the Island of Gods. We tailor highly specialized off-road, yacht sailing, and wellness retreats to cater to high-society tourists seeking pristine ecological wonders.
          </p>

          {/* Social icons or badges */}
          <div className="flex items-center space-x-3 text-gold-400 font-mono text-[9px] uppercase tracking-widest">
            <Compass size={12} />
            <span>Sustainable Luxury Tourism Registered</span>
          </div>
        </div>

        {/* Contact Coordinates Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-serif text-base text-gold-200 tracking-wide font-semibold">
            The Head Office
          </h4>
          <ul className="space-y-3 text-xs md:text-sm text-gold-100/60 font-light">
            <li className="flex items-start space-x-2.5">
              <MapPin size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
              <span>Jalan Raya Seminyak No. 14A, Kuta, Bali 80361, Indonesia</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone size={14} className="text-gold-400 flex-shrink-0" />
              <span>+62 857-3939-9365</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail size={14} className="text-gold-400 flex-shrink-0" />
              <span>concierge@balibydriver.com</span>
            </li>
          </ul>
        </div>

        {/* Real-time Simulated Bali Weather Microclimate Widget */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-serif text-base text-gold-200 tracking-wide font-semibold">
            Bali Microclimates
          </h4>
          <div className="space-y-3 bg-luxury-gray/40 border border-gold-900/10 p-4 rounded-sm text-xs font-sans">
            <div className="flex justify-between items-center text-gold-100/40">
              <span>Local Time (WITA)</span>
              <span className="font-mono text-gold-300 font-semibold">{baliTime || '12:00 PM'}</span>
            </div>
            
            <div className="space-y-2 pt-2 border-t border-gold-900/5">
              <div className="flex justify-between items-center">
                <span className="text-gold-100/70 font-light">Kuta Beach (Ocean)</span>
                <span className="flex items-center space-x-1 text-gold-400 font-mono font-medium">
                  <Sun size={12} />
                  <span>30°C</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gold-100/70 font-light">Mount Batur (Volcano)</span>
                <span className="flex items-center space-x-1 text-gold-400/70 font-mono font-medium">
                  <Sun size={12} className="opacity-50" />
                  <span>22°C</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gold-100/70 font-light">Tegallalang (Jungle)</span>
                <span className="flex items-center space-x-1 text-sky-400 font-mono font-medium">
                  <CloudRain size={12} />
                  <span>26°C</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Private Newsletter Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-serif text-base text-gold-200 tracking-wide font-semibold">
            The Private Ledger
          </h4>
          <p className="font-sans text-xs text-gold-100/50 leading-relaxed font-light">
            Subscribe to receive exclusive off-market luxury travel offers, helicopter transfers announcements, and private yacht seasonal discounts.
          </p>

          {success ? (
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 p-3 rounded-sm border border-emerald-400/20">
              <Check size={14} className="stroke-[3]" />
              <span>Added to Elite Ledger.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex items-center border border-gold-400/20 bg-luxury-gray rounded-sm overflow-hidden focus-within:border-gold-400 transition-colors">
              <input
                type="email"
                required
                placeholder="vanderbilt@estate.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="newsletter-email-input"
                className="flex-grow bg-transparent px-3 py-3 text-xs text-gold-100 placeholder-gold-300/30 focus:outline-none font-sans"
              />
              <button
                type="submit"
                className="bg-gold-400 hover:bg-gold-500 text-luxury-dark px-4 py-3 cursor-pointer transition-colors"
                aria-label="Subscribe to newsletter"
                id="btn-newsletter-subscribe"
              >
                <Send size={12} />
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Copyright area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-gold-300/30 gap-4">
        <span>© {new Date().getFullYear()} Sobat Bali Tour. All Rights Reserved.</span>
        
        <div className="flex space-x-6">
          <span className="flex items-center space-x-1.5">
            <Globe size={12} />
            <span>Bali, Indonesia</span>
          </span>
          <a href="#faq" className="hover:text-gold-400 transition-colors">Safety Protocols</a>
          <a href="#faq" className="hover:text-gold-400 transition-colors">Charter Terms</a>
        </div>
      </div>
    </footer>
  );
}
