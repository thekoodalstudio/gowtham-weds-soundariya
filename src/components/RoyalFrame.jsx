import React from 'react';

/**
 * Royal Architectural Frame & Ornate Motifs
 * Emulates the golden temple arch, hanging bells, and royal palace crest from the wedding card.
 */
export default function RoyalFrame({ children }) {
  return (
    <div className="royal-frame-wrapper">
      {/* Top Palace Dome / Arch Motif */}
      <div className="top-arch-motif">
        <svg
          viewBox="0 0 400 60"
          className="arch-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main golden curved arch */}
          <path
            d="M 20 55 C 80 50, 140 20, 200 10 C 260 20, 320 50, 380 55"
            stroke="#c99a4c"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 35 58 C 90 53, 145 25, 200 16 C 255 25, 310 53, 365 58"
            stroke="#e6be75"
            strokeWidth="0.8"
            strokeDasharray="4 3"
          />

          {/* Central Royal Kalasam / Crest */}
          <g transform="translate(200, 10)">
            <circle cx="0" cy="0" r="4" fill="#c99a4c" />
            <path d="M 0 -8 L 4 -2 L -4 -2 Z" fill="#c99a4c" />
            <circle cx="-12" cy="4" r="2" fill="#c99a4c" />
            <circle cx="12" cy="4" r="2" fill="#c99a4c" />
          </g>

          {/* Left Floral Scroll */}
          <path
            d="M 120 32 C 140 26, 160 22, 180 20"
            stroke="#c99a4c"
            strokeWidth="1"
          />
          {/* Right Floral Scroll */}
          <path
            d="M 280 32 C 260 26, 240 22, 220 20"
            stroke="#c99a4c"
            strokeWidth="1"
          />
        </svg>

        {/* Hanging Golden Bells (Manigal) */}
        <div className="hanging-bells-container">
          <div className="hanging-bell bell-left animate-bell">
            <svg width="22" height="34" viewBox="0 0 24 36" fill="none">
              <line x1="12" y1="0" x2="12" y2="14" stroke="#c99a4c" strokeWidth="1" />
              <path d="M6 18 C6 14, 18 14, 18 18 L20 24 L4 24 Z" fill="#d4a656" stroke="#9f7530" strokeWidth="0.8" />
              <circle cx="12" cy="27" r="2.5" fill="#c99a4c" />
            </svg>
          </div>
          <div className="hanging-bell bell-right animate-bell" style={{ animationDelay: '1.2s' }}>
            <svg width="22" height="34" viewBox="0 0 24 36" fill="none">
              <line x1="12" y1="0" x2="12" y2="14" stroke="#c99a4c" strokeWidth="1" />
              <path d="M6 18 C6 14, 18 14, 18 18 L20 24 L4 24 Z" fill="#d4a656" stroke="#9f7530" strokeWidth="0.8" />
              <circle cx="12" cy="27" r="2.5" fill="#c99a4c" />
            </svg>
          </div>
        </div>
      </div>

      {/* Frame Content */}
      <div className="royal-frame-body">{children}</div>

      {/* Bottom Auspicious Diya / Kalasam Motif */}
      <div className="bottom-arch-motif">
        <svg viewBox="0 0 200 40" className="bottom-svg" fill="none">
          <path
            d="M 20 15 C 60 18, 80 28, 100 28 C 120 28, 140 18, 180 15"
            stroke="#c99a4c"
            strokeWidth="1"
          />
          <circle cx="100" cy="28" r="3" fill="#c99a4c" />
          <circle cx="85" cy="25" r="1.8" fill="#e6be75" />
          <circle cx="115" cy="25" r="1.8" fill="#e6be75" />
        </svg>
      </div>

      <style>{`
        .royal-frame-wrapper {
          position: relative;
          width: 100%;
        }

        .top-arch-motif {
          position: relative;
          width: 100%;
          text-align: center;
          margin-bottom: -15px;
          z-index: 2;
        }

        .arch-svg {
          width: 100%;
          max-width: 380px;
          height: auto;
          margin: 0 auto;
          display: block;
        }

        .hanging-bells-container {
          position: absolute;
          top: 15px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          padding: 0 10%;
          pointer-events: none;
        }

        .bottom-arch-motif {
          text-align: center;
          margin-top: 1rem;
        }

        .bottom-svg {
          width: 160px;
          height: auto;
          margin: 0 auto;
          display: block;
        }
      `}</style>
    </div>
  );
}
