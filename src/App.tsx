import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DestinationGrid from './components/DestinationGrid';
import ActivitySection from './components/ActivitySection';
import ExperienceDetails from './components/ExperienceDetails';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

// Brand New Multi-page components
import TourCatalog from './components/TourCatalog';
import AboutSection from './components/AboutSection';
import WhyUsSection from './components/WhyUsSection';
import ContactSection from './components/ContactSection';
import RentalSection from './components/RentalSection';
import RentalPage from './components/RentalPage';

import { Experience, BookingDetails } from './types';
import { EXPERIENCES } from './data';

type Page = 'home' | 'tours' | 'rental' | 'about' | 'gallery' | 'whyus' | 'contact';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [heroActiveIndex, setHeroActiveIndex] = useState<number>(0);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preSelectedExperienceId, setPreSelectedExperienceId] = useState<string>('jeep-adventure');
  const [preSelectedVehicleId, setPreSelectedVehicleId] = useState<string>('toyota-avanza');

  // Open booking modal preselected with a specific experience
  const handleOpenBooking = (experienceId: string) => {
    setPreSelectedExperienceId(experienceId);
    setIsBookingOpen(true);
  };

  // General booking click (pre-select current active experience in hero)
  const handleGeneralBookNow = () => {
    if (activePage === 'home') {
      const currentId = EXPERIENCES[heroActiveIndex]?.id || 'nusa-penida';
      handleOpenBooking(currentId);
    } else {
      // Default to first experience on other pages
      handleOpenBooking(EXPERIENCES[0]?.id || 'nusa-penida');
    }
  };

  const handleBookingSuccess = (booking: BookingDetails) => {
    console.log('Premium booking finalized:', booking);
  };

  const handleViewDetails = (expId: string) => {
    // When clicking "Detail Rute", scroll up and open booking as primary action
    handleOpenBooking(expId);
  };

  const handleSelectVehicle = (vehicleId: string) => {
    setPreSelectedVehicleId(vehicleId);
    setActivePage('rental');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-gold-100 font-sans selection:bg-gold-500/20 selection:text-gold-200">
      
      {/* 1. Universal Luxury Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onBookNow={handleGeneralBookNow}
      />

      {/* 2. Page Content Switcher Router */}
      <main className="min-h-[80vh]">
        {activePage === 'home' && (
          <div className="animate-fade-in">
            {/* Showstopper Hero Carousel */}
            <HeroSection
              activeIndex={heroActiveIndex}
              setActiveIndex={setHeroActiveIndex}
              onExploreClick={(exp) => handleOpenBooking(exp.id)}
              onBookNowClick={handleGeneralBookNow}
            />

            {/* Bento Grid "Our Elite Expeditions" Quick Showcase */}
            <DestinationGrid onBookNow={handleOpenBooking} />

            {/* Premium Outdoor Adventure & Wilderness Activities */}
            <ActivitySection onBookNow={handleOpenBooking} />

            {/* Signature 3-Column Experience Spec Sheets */}
            <ExperienceDetails onBookNow={handleOpenBooking} />

            {/* Premium Car & Motorbike Rental Section */}
            <RentalSection
              onSelectVehicle={handleSelectVehicle}
              onNavigateToRentalPage={() => {
                setPreSelectedVehicleId('toyota-avanza');
                setActivePage('rental');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Testimonials Review section */}
            <ReviewsSection />
          </div>
        )}

        {activePage === 'tours' && (
          <div className="animate-fade-in">
            <TourCatalog
              onBookNow={handleOpenBooking}
              onViewDetails={handleViewDetails}
            />
          </div>
        )}

        {activePage === 'rental' && (
          <div className="animate-fade-in">
            <RentalPage initialVehicleId={preSelectedVehicleId} />
          </div>
        )}

        {activePage === 'about' && (
          <div className="animate-fade-in">
            <AboutSection />
          </div>
        )}

        {activePage === 'gallery' && (
          <div className="animate-fade-in">
            <GallerySection />
          </div>
        )}

        {activePage === 'whyus' && (
          <div className="animate-fade-in">
            <WhyUsSection />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="animate-fade-in">
            <ContactSection />
          </div>
        )}
      </main>

      {/* 3. Universal Coordinates Footer */}
      <Footer />

      {/* 4. The Dynamic Booking & Checkout Modal System */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialExperienceId={preSelectedExperienceId}
        onBookingSuccess={handleBookingSuccess}
      />

    </div>
  );
}
