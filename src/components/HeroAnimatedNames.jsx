import React from 'react';
import { INVITATION_DATA } from '../data/invitationData';
import { Heart, Sparkles } from 'lucide-react';

/**
 * Animated Names of Bride & Groom
 * Features:
 * - Dynamic shimmer and floating pulse for Gowtham Raj. P & Soundariya. P
 * - Interlocking golden wedding rings with pulsating glow
 * - Traditional parentage lines and auspicious blessing
 */
export default function HeroAnimatedNames() {
  const { header, groom, bride } = INVITATION_DATA;

  return (
    <section className="hero-names-section">
      {/* Header Badge */}
      <div className="forever-tagline">
        <span className="sparkle-icon">✨</span>
        <span className="tagline-text">{header.tagline}</span>
        <span className="sparkle-icon">✨</span>
      </div>

      <div className="primary-date-text">
        {header.primaryDate}
      </div>

      <div className="floral-divider">
        <span className="motif-leaf">❧</span>
        <span className="motif-dot">❦</span>
        <span className="motif-leaf">☙</span>
      </div>

      {/* Groom's Animated Name */}
      <div className="name-wrapper groom-wrapper animate-float">
        <h1 className="calligraphy-name calligraphy-shimmer" title={groom.name}>
          {groom.name}
        </h1>
        <p className="parent-text">{groom.parentage}</p>
      </div>

      {/* Interlocking Golden Wedding Rings / Heart */}
      <div className="rings-container">
        <div className="rings-graphic animate-pulse-glow">
          <svg width="68" height="42" viewBox="0 0 68 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left Golden Ring */}
            <circle
              cx="26"
              cy="21"
              r="16"
              stroke="url(#goldGradient)"
              strokeWidth="3.5"
              strokeDasharray="100"
              strokeDashoffset="0"
              className="ring-path"
            />
            {/* Right Golden Ring */}
            <circle
              cx="42"
              cy="21"
              r="16"
              stroke="url(#goldGradient2)"
              strokeWidth="3.5"
              strokeDasharray="100"
              strokeDashoffset="0"
              className="ring-path ring-delay"
            />
            {/* Heart in the intersection */}
            <path
              d="M34 16 C34 12, 38 10, 40 13 C42 16, 34 22, 34 22 C34 22, 26 16, 28 13 C30 10, 34 12, 34 16 Z"
              fill="#c99a4c"
              opacity="0.9"
            />
            <defs>
              <linearGradient id="goldGradient" x1="10" y1="5" x2="42" y2="37" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f3d48d" />
                <stop offset="0.5" stopColor="#c99a4c" />
                <stop offset="1" stopColor="#8c6422" />
              </linearGradient>
              <linearGradient id="goldGradient2" x1="26" y1="5" x2="58" y2="37" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8c6422" />
                <stop offset="0.5" stopColor="#f3d48d" />
                <stop offset="1" stopColor="#c99a4c" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Bride's Animated Name */}
      <div className="name-wrapper bride-wrapper animate-float" style={{ animationDelay: '1.8s' }}>
        <h2 className="calligraphy-name calligraphy-shimmer" title={bride.name}>
          {bride.name}
        </h2>
        <p className="parent-text">{bride.parentage}</p>
      </div>

      <div className="floral-divider">
        <span className="motif-leaf">❧</span>
        <span className="motif-dot">❦</span>
        <span className="motif-leaf">☙</span>
      </div>

      {/* Auspicious Blessing Quote */}
      <div className="blessing-quote-container">
        <p className="blessing-quote">
          "{header.subBlessing}"
        </p>
      </div>

      <style>{`
        .hero-names-section {
          text-align: center;
          padding: 1rem 0 1.5rem 0;
          position: relative;
        }

        .forever-tagline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-royal);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--color-gold-dark);
          margin-bottom: 0.3rem;
        }

        .sparkle-icon {
          font-size: 0.75rem;
        }

        .primary-date-text {
          font-family: var(--font-royal);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--color-text-dark);
          margin-bottom: 0.5rem;
        }

        .name-wrapper {
          margin: 0.4rem 0;
          position: relative;
        }

        .parent-text {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          color: var(--color-text-muted);
          font-weight: 500;
          letter-spacing: 0.03em;
          margin-top: -4px;
        }

        .rings-graphic {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.2rem 0;
        }

        .ring-path {
          animation: ringDraw 3s ease-in-out infinite alternate;
        }

        @keyframes ringDraw {
          0% {
            stroke-dashoffset: 20;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .blessing-quote-container {
          max-width: 460px;
          margin: 0 auto;
          padding: 0 0.5rem;
        }

        .blessing-quote {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.15rem;
          color: var(--color-maroon);
          line-height: 1.55;
          letter-spacing: 0.02em;
        }
      `}</style>
    </section>
  );
}
