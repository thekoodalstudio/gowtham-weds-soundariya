import React from 'react';
import { INVITATION_DATA } from '../data/invitationData';
import { MapPin, Navigation, ExternalLink, QrCode } from 'lucide-react';

export default function VenueNavigation({ onOpenCardModal }) {
  const { venue } = INVITATION_DATA;

  return (
    <section className="venue-section">
      <div className="venue-card">
        <div className="venue-pin-badge">
          <MapPin size={22} className="animate-pulse-glow" />
        </div>

        <span className="venue-subtitle">Solemnization & Celebrations at</span>
        <h3 className="venue-name">{venue.name}</h3>
        <p className="venue-city">{venue.city}</p>

        <p className="venue-full-address">
          {venue.fullAddress}
        </p>

        <div className="venue-actions">
          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal"
          >
            <Navigation size={16} />
            <span>Open in Google Maps</span>
          </a>

          <button
            type="button"
            onClick={onOpenCardModal}
            className="btn-royal btn-outline"
          >
            <QrCode size={16} />
            <span>Scan Location QR</span>
          </button>
        </div>
      </div>

      <style>{`
        .venue-section {
          margin: 1.5rem 0;
        }

        .venue-card {
          background: #ffffff;
          border: 1.5px solid rgba(201, 154, 76, 0.4);
          border-radius: 16px;
          padding: 1.8rem 1.4rem;
          text-align: center;
          position: relative;
          box-shadow: 0 6px 20px rgba(104, 19, 33, 0.04);
        }

        .venue-pin-badge {
          width: 46px;
          height: 46px;
          margin: -2.8rem auto 0.6rem auto;
          background: linear-gradient(135deg, var(--color-maroon) 0%, var(--color-maroon-dark) 100%);
          border: 2px solid var(--color-gold-light);
          border-radius: 50%;
          color: var(--color-gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(104, 19, 33, 0.3);
        }

        .venue-subtitle {
          font-family: var(--font-royal);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-gold-dark);
          display: block;
          margin-bottom: 0.3rem;
        }

        .venue-name {
          font-family: var(--font-royal);
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--color-maroon);
          letter-spacing: 0.04em;
          margin-bottom: 0.1rem;
        }

        .venue-city {
          font-family: var(--font-royal);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-text-dark);
          letter-spacing: 0.06em;
          margin-bottom: 0.6rem;
        }

        .venue-full-address {
          font-family: var(--font-serif);
          font-size: 0.98rem;
          color: var(--color-text-muted);
          max-width: 420px;
          margin: 0 auto 1.4rem auto;
          line-height: 1.45;
        }

        .venue-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
      `}</style>
    </section>
  );
}
