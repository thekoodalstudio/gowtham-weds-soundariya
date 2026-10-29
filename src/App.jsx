import React, { useState } from 'react';
import BackgroundMotion from './components/BackgroundMotion';
import RoyalFrame from './components/RoyalFrame';
import HeroAnimatedNames from './components/HeroAnimatedNames';
import CountdownTimer from './components/CountdownTimer';
import EventCards from './components/EventCards';
import VenueNavigation from './components/VenueNavigation';
import SaveCalendarShare from './components/SaveCalendarShare';
import CardModal from './components/CardModal';
import FloatingAudio from './components/FloatingAudio';
import KoodalFooter from './components/KoodalFooter';

import './styles/global.css';
import './styles/animations.css';

export default function App() {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  return (
    <div className="app-wrapper">
      {/* 1. Motion Background with Falling 3D Rose Petals & Golden Sparkles */}
      <BackgroundMotion />

      {/* 2. Floating Ambient Music Toggle */}
      <FloatingAudio />

      {/* 3. Main Center Invitation Card */}
      <main className="invitation-main animate-fade-in">
        <div className="royal-card">
          <RoyalFrame>
            {/* Animated Bride & Groom Names with Rings */}
            <HeroAnimatedNames />

            {/* Live Countdown to Muhurtham */}
            <CountdownTimer />

            {/* Reception & Wedding Schedule Cards */}
            <EventCards />

            {/* Venue & Navigation */}
            <VenueNavigation onOpenCardModal={() => setIsCardModalOpen(true)} />

            {/* Save Calendar, WhatsApp RSVP & Share Controls */}
            <SaveCalendarShare onOpenCardModal={() => setIsCardModalOpen(true)} />
          </RoyalFrame>
        </div>

        {/* Footer */}
        <KoodalFooter />
      </main>

      {/* 4. High-Res Official Card & QR Code Modal */}
      <CardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
      />
    </div>
  );
}
