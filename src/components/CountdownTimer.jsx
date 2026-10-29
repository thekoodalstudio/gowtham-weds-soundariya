import React, { useState, useEffect } from 'react';
import { INVITATION_DATA } from '../data/invitationData';
import { Clock } from 'lucide-react';

export default function CountdownTimer() {
  const weddingEvent = INVITATION_DATA.events.find(e => e.isPrimaryCountdown) || INVITATION_DATA.events[1];
  const targetDate = new Date(weddingEvent.isoDateTime).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-section">
      <div className="countdown-header">
        <Clock className="countdown-clock-icon" size={16} />
        <span className="countdown-title">Counting Down to the Muhurtham</span>
      </div>

      <div className="countdown-grid">
        <div className="time-box">
          <span className="time-number">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="time-label">Days</span>
        </div>
        <div className="time-divider">:</div>
        <div className="time-box">
          <span className="time-number">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="time-label">Hours</span>
        </div>
        <div className="time-divider">:</div>
        <div className="time-box">
          <span className="time-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="time-label">Mins</span>
        </div>
        <div className="time-divider">:</div>
        <div className="time-box">
          <span className="time-number seconds-pulse">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="time-label">Secs</span>
        </div>
      </div>

      <style>{`
        .countdown-section {
          margin: 1.5rem 0;
          padding: 1.2rem 1rem;
          background: rgba(201, 154, 76, 0.08);
          border: 1px solid rgba(201, 154, 76, 0.35);
          border-radius: 14px;
          text-align: center;
        }

        .countdown-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.8rem;
          color: var(--color-maroon);
        }

        .countdown-title {
          font-family: var(--font-royal);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .countdown-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }

        .time-box {
          background: #fff;
          border: 1px solid rgba(201, 154, 76, 0.4);
          border-radius: 8px;
          min-width: 58px;
          padding: 0.5rem 0.2rem;
          box-shadow: 0 4px 10px rgba(104, 19, 33, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 480px) {
          .time-box {
            min-width: 68px;
            padding: 0.6rem 0.3rem;
          }
        }

        .time-number {
          font-family: var(--font-royal);
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--color-maroon);
          line-height: 1;
        }

        .seconds-pulse {
          color: var(--color-gold-dark);
        }

        .time-label {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-text-muted);
          margin-top: 0.25rem;
          font-weight: 600;
        }

        .time-divider {
          font-family: var(--font-royal);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-gold);
        }
      `}</style>
    </div>
  );
}
