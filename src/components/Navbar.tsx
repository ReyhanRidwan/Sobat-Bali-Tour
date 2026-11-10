import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Sparkles } from 'lucide-react';

interface NavbarProps {
  activePage: 'home' | 'tours' | 'rental' | 'about' | 'gallery' | 'whyus' | 'contact';
  setActivePage: (page: 'home' | 'tours' | 'rental' | 'about' | 'gallery' | 'whyus' | 'contact') => void;
  onBookNow: () => void;
}

export default function Navbar({ activePage, setActivePage, onBookNow }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: Array<{ id: typeof activePage; label: string }> = [
    { id: 'home', label: 'Beranda' },
    { id: 'tours', label: 'Paket Tour' },
    { id: 'rental', label: 'Sewa & Layanan' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'whyus', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: typeof activePage) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-gold-900/15 py-4 shadow-xl'
          : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/20 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 select-none group text-left cursor-pointer"
          id="nav-logo"
        >
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-wider text-gold-200 group-hover:text-gold-400 transition-colors duration-300 font-bold">
              Sobat Bali Tour
            </span>
            <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-gold-300/80 -mt-0.5 font-semibold group-hover:text-gold-100 transition-colors duration-300">
              Premium Tour & Travel
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" id="desktop-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-[11px] uppercase tracking-[0.2em] font-mono font-semibold transition-all duration-300 cursor-pointer relative py-1 ${
                activePage === item.id
                  ? 'text-gold-400 font-bold'
                  : 'text-gold-100/75 hover:text-gold-300'
              }`}
            >
              {item.label}
              {activePage === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onBookNow}
            id="btn-nav-book"
            className="bg-gold-400 hover:bg-gold-500 text-neutral-950 font-mono text-[10px] uppercase tracking-[0.2em] font-bold px-6 py-3 transition-all duration-300 shadow-md hover:shadow-gold-500/10 cursor-pointer rounded-sm active:scale-95"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gold-200 hover:text-gold-400 transition-colors focus:outline-none p-1 cursor-pointer"
          aria-label="Toggle menu"
          id="btn-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] z-40 bg-neutral-950/95 backdrop-blur-xl md:hidden flex flex-col justify-between py-12 px-6 border-t border-gold-900/15 animate-fade-in"
          id="mobile-nav-panel"
        >
          <div className="flex flex-col space-y-7 items-center mt-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-base uppercase tracking-[0.2em] font-mono font-bold transition-colors cursor-pointer ${
                  activePage === item.id ? 'text-gold-400' : 'text-gold-100/80 hover:text-gold-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col space-y-6 items-center">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookNow();
              }}
              className="w-full max-w-xs bg-gold-400 hover:bg-gold-500 text-neutral-950 font-mono text-xs uppercase tracking-[0.2em] font-bold py-4 transition-all rounded-sm shadow-md cursor-pointer"
            >
              Book Now
            </button>
            <div className="flex items-center space-x-2 text-[9px] font-mono text-gold-300/40">
              <Sparkles size={11} className="text-gold-400" />
              <span>Sobat Bali Tour 24/7 Concierge Hotline</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
