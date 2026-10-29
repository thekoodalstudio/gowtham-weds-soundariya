import React from 'react';
import { INVITATION_DATA } from '../data/invitationData';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

export default function EventCards() {
  const { events, venue } = INVITATION_DATA;

  return (
    <section className="events-section">
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            {/* Title & Badge */}
            <div className="event-card-header">
              <span className="event-badge">{event.badge}</span>
              <h3 className="event-title">{event.title}</h3>
            </div>

            {/* Date Row */}
            <div className="event-row">
              <div className="event-icon-box">
                <Calendar size={18} />
              </div>
              <div className="event-text-group">
                <span className="event-date-main">{event.dateFormatted}</span>
                <span className="event-day-sub">({event.dayOfWeek})</span>
              </div>
            </div>

            {/* Time Row */}
            <div className="event-row">
              <div className="event-icon-box">
                <Clock size={18} />
              </div>
              <div className="event-text-group">
                <span className="event-time-main">{event.time}</span>
              </div>
            </div>

            {/* Description */}
            <p className="event-desc">{event.description}</p>
          </div>
        ))}
      </div>

      <style>{`
        .events-section {
          margin: 1.5rem 0;
        }

        .events-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.2rem;
        }

        @media (min-width: 600px) {
          .events-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .event-card {
          background: #ffffff;
          border: 1.5px solid rgba(201, 154, 76, 0.4);
          border-radius: 16px;
          padding: 1.5rem 1.2rem;
          position: relative;
          box-shadow: 0 6px 20px rgba(104, 19, 33, 0.04);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .event-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-gold);
          box-shadow: 0 10px 25px rgba(201, 154, 76, 0.2);
        }

        .event-card-header {
          text-align: center;
          margin-bottom: 1.2rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px dashed rgba(201, 154, 76, 0.35);
        }

        .event-badge {
          display: inline-block;
          font-family: var(--font-royal);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-gold-dark);
          background: rgba(201, 154, 76, 0.12);
          border: 1px solid rgba(201, 154, 76, 0.3);
          border-radius: 9999px;
          padding: 0.2rem 0.65rem;
          margin-bottom: 0.4rem;
        }

        .event-title {
          font-family: var(--font-script);
          font-size: 2.3rem;
          color: var(--color-maroon);
          margin-top: 0.2rem;
          line-height: 1;
        }

        .event-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .event-icon-box {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(201, 154, 76, 0.12);
          color: var(--color-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .event-text-group {
          display: flex;
          flex-direction: column;
        }

        .event-date-main {
          font-family: var(--font-royal);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-text-dark);
        }

        .event-day-sub {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .event-time-main {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-maroon);
        }

        .event-desc {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.4;
          margin-top: 0.8rem;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(201, 154, 76, 0.15);
        }
      `}</style>
    </section>
  );
}
