import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Calendar, Compass, ShieldCheck } from 'lucide-react';
import { Experience } from '../types';
import { EXPERIENCES } from '../data';

interface HeroSectionProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  onExploreClick: (experience: Experience) => void;
  onBookNowClick: () => void;
}

export default function HeroSection({
  activeIndex,
  setActiveIndex,
  onExploreClick,
  onBookNowClick,
}: HeroSectionProps) {
  const currentExp = EXPERIENCES[activeIndex];

  const containerRef = useRef<HTMLDivElement>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const startXRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      setActiveIndex((activeIndex + 1) % EXPERIENCES.length);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [activeIndex, setActiveIndex]);

  const getCardTag = (exp: Experience) => {
    if (exp.id === 'jeep-adventure') return 'Rental';
    if (exp.id === 'ocean-escape') return 'Ocean';
    if (exp.id === 'jungle-retreat') return 'Jungle';
    if (exp.id === 'nusa-penida') return 'Ocean';
    if (exp.id === 'nusa-dua') return 'Beach';
    if (exp.id === 'bedugul-danau') return 'Lake';
    if (exp.id === 'lempuyang') return 'Temple';
    if (exp.id === 'uluwatu') return 'Cliff';
    if (exp.id === 'atv-quad') return 'Adventure';
    if (exp.id === 'river-tubing') return 'Wilderness';
    return exp.tagline;
  };

  const getCardTitle = (exp: Experience) => {
    if (exp.id === 'jeep-adventure') return 'Sewa Mobil Kijang Innova';
    if (exp.id === 'ocean-escape') return 'Ocean Luxury Escape';
    if (exp.id === 'jungle-retreat') return 'Serene Jungle Retreat';
    return exp.title;
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      setContainerWidth(containerRef.current?.parentElement?.getBoundingClientRect().width || 0);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    // Extra timeout to capture layout after mount
    const timer = setTimeout(updateWidth, 100);
    return () => {
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timer);
    };
  }, []);

  const cardWidth = isMobile ? 144 : 192; // w-36 is 144px, w-48 is 192px
  const gap = 16; // gap-4 is 16px

  const targetTranslate = containerWidth > 0
    ? (containerWidth / 2) - (activeIndex * (cardWidth + gap) + cardWidth / 2)
    : 0;

  const totalTranslate = targetTranslate + dragOffset;

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    stopAutoplay();
    setIsDragging(true);
    startXRef.current = e.clientX;
    hasDraggedRef.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    
    if (Math.abs(deltaX) > 10) {
      hasDraggedRef.current = true;
    }
    
    let finalDelta = deltaX;
    if (activeIndex === 0 && deltaX > 0) {
      finalDelta = deltaX * 0.4;
    } else if (activeIndex === EXPERIENCES.length - 1 && deltaX < 0) {
      finalDelta = deltaX * 0.4;
    }
    
    setDragOffset(finalDelta);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    const swipeThreshold = 50;
    if (dragOffset < -swipeThreshold) {
      if (activeIndex < EXPERIENCES.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    } else if (dragOffset > swipeThreshold) {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
    setDragOffset(0);
    startAutoplay();
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    setDragOffset(0);
    e.currentTarget.releasePointerCapture(e.pointerId);
    startAutoplay();
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('experiences');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to highlight parts of text matching the screenshot
  const formatHighlightedText = (text: string) => {
    if (text.includes('Toyota Kijang Innova premium')) {
      const parts = text.split(/(Toyota Kijang Innova premium|kenyamanan ekstra)/g);
      return parts.map((part, index) => {
        if (part === 'Toyota Kijang Innova premium' || part === 'kenyamanan ekstra') {
          return (
            <span key={index} className="text-gold-300 font-semibold italic">
              {part}
            </span>
          );
        }
        return part;
      });
    }
    if (text.includes('private luxury 4x4')) {
      const parts = text.split(/(private luxury 4x4|Conquer volcanic trails)/g);
      return parts.map((part, index) => {
        if (part === 'private luxury 4x4' || part === 'Conquer volcanic trails') {
          return (
            <span key={index} className="text-gold-300 font-semibold italic">
              {part}
            </span>
          );
        }
        return part;
      });
    }
    if (text.includes('premium yacht')) {
      const parts = text.split(/(premium yacht|dine under the sunset)/g);
      return parts.map((part, index) => {
        if (part === 'premium yacht' || part === 'dine under the sunset') {
          return (
            <span key={index} className="text-gold-300 font-semibold italic">
              {part}
            </span>
          );
        }
        return part;
      });
    }
    if (text.includes('tropical rainforests')) {
      const parts = text.split(/(tropical rainforests|holistic wellness therapies)/g);
      return parts.map((part, index) => {
        if (part === 'tropical rainforests' || part === 'holistic wellness therapies') {
          return (
            <span key={index} className="text-gold-300 font-semibold italic">
              {part}
            </span>
          );
        }
        return part;
      });
    }
    return text;
  };

  return (
    <section
      id="hero-top"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-luxury-dark"
    >
      {/* Background Images with Cross-fade Animation */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentExp.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img
              src={currentExp.bgImage}
              alt={currentExp.tagline}
              loading="eager"
              // @ts-ignore
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Ambient Dark Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/95 via-luxury-dark/40 to-luxury-dark/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-luxury-dark/30" />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>

        {/* Eager preloading for the other carousel slides to make transitions instant */}
        <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
          {EXPERIENCES.map((exp, idx) => (
            idx !== activeIndex && (
              <img
                key={exp.id}
                src={exp.bgImage}
                alt=""
                loading="eager"
                referrerPolicy="no-referrer"
              />
            )
          ))}
        </div>
      </div>

      {/* Main Content Arena */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col justify-center pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 flex flex-col items-start text-left" id="hero-text-block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentExp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Dynamic Category/Tagline */}
                <div className="flex items-center space-x-3">
                  <span className="h-[1px] w-5 bg-gold-400" />
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
                    {currentExp.tagline}
                  </span>
                </div>

                {/* Hero Title */}
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-gold-100 font-medium tracking-wide">
                  {currentExp.title}
                </h1>

                {/* Hero Description */}
                <p className="font-sans text-xs md:text-sm text-gold-100/75 leading-relaxed max-w-sm font-light">
                  {formatHighlightedText(currentExp.shortDesc)}
                </p>

                {/* Buttons container */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                  <button
                    onClick={() => onExploreClick(currentExp)}
                    id="btn-start-adventure"
                    className="bg-gold-400 hover:bg-gold-500 text-luxury-dark font-sans text-xs uppercase tracking-[0.2em] font-bold py-3.5 px-8 transition-all duration-300 rounded-sm active:scale-95 hover:shadow-lg hover:shadow-gold-500/10 text-center cursor-pointer"
                  >
                    Booking Sekarang
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Interactive Slider Cards matching the screenshot */}
          <div className="lg:col-span-7 flex flex-col space-y-4" id="hero-slider-block">
            {/* Visual Header for Cards Block */}
            <div className="flex items-center justify-between pb-2 border-b border-gold-900/10 max-w-md ml-auto mr-0 w-full">
              <span className="font-mono text-[10px] text-gold-300/40 uppercase tracking-widest">
                Curated Destinations
              </span>
              <span className="font-mono text-[10px] text-gold-400 font-semibold tracking-widest">
                {String(activeIndex + 1).padStart(2, '0')} / {String(EXPERIENCES.length).padStart(2, '0')}
              </span>
            </div>

            {/* Floating Row of portrait cards stacked beautifully */}
            <div className="w-full max-w-md md:max-w-lg xl:max-w-xl lg:ml-auto overflow-hidden relative pb-4 pt-6" id="hero-slider-container">

              <div
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
                style={{
                  transform: `translateX(${totalTranslate}px)`,
                  transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  touchAction: 'none',
                }}
                className={`flex items-end justify-start gap-4 select-none ${
                  isDragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
              >
                {EXPERIENCES.map((exp, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={exp.id}
                      onClick={(e) => {
                        if (hasDraggedRef.current) {
                          e.preventDefault();
                          return;
                        }
                        setActiveIndex(index);
                      }}
                      id={`hero-card-${exp.id}`}
                      className={`relative flex-shrink-0 w-36 md:w-48 h-[210px] md:h-[270px] rounded-sm overflow-hidden text-left transition-all duration-500 transform select-none cursor-pointer group ${
                        isActive
                          ? 'ring-2 ring-gold-400/80 scale-102 -translate-y-2 z-20 shadow-2xl shadow-black/80'
                          : 'opacity-50 hover:opacity-85 hover:-translate-y-1 z-10 scale-95 shadow-lg shadow-black/50'
                      }`}
                    >
                      {/* Card Image */}
                      <img
                        src={exp.cardImage}
                        alt={exp.tagline}
                        loading="eager"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Dark gradient vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      
                      {/* Hover gold shimmer overlay */}
                      <div className="absolute inset-0 bg-gold-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Card Content focused at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
                        <p className="font-mono text-[9px] uppercase tracking-widest text-gold-300/80 font-bold mb-1">
                          {getCardTag(exp)}
                        </p>
                        <h3 className="font-serif text-base md:text-lg text-gold-100 font-medium tracking-wide leading-snug">
                          {getCardTitle(exp)}
                        </h3>
                        {isActive && (
                          <span className="font-mono text-[8px] text-gold-400 uppercase tracking-wider mt-1 flex items-center space-x-1">
                            <span>Active Experience</span>
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll/Chevron Pill matching the screenshot */}
      <div className="relative z-10 w-full flex justify-center pb-8">
        <button
          onClick={handleScrollDown}
          id="btn-scroll-down"
          className="flex flex-col items-center group cursor-pointer"
          aria-label="Scroll to experiences"
        >
          <div className="w-6 h-10 border border-gold-300/40 rounded-full flex justify-center items-start p-1 hover:border-gold-400 transition-colors duration-300">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ChevronDown size={12} className="text-gold-300 group-hover:text-gold-400 transition-colors" />
            </motion.div>
          </div>
        </button>
      </div>
    </section>
  );
}
