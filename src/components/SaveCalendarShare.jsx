import React, { useState } from 'react';
import { INVITATION_DATA } from '../data/invitationData';
import { CalendarPlus, MessageCircle, Share2, Copy, Check, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SaveCalendarShare({ onOpenCardModal }) {
  const [isCopied, setIsCopied] = useState(false);
  const { inviter, closingMessage } = INVITATION_DATA;

  // Add to Google Calendar handler
  const handleGoogleCalendar = () => {
    // 2026-11-20 09:15 to 14:00 IST (+05:30) => UTC 03:45 to 08:30
    const startUtc = '20261120T034500Z';
    const endUtc = '20261120T083000Z';
    const title = encodeURIComponent('Gowtham Raj & Soundariya Wedding Ceremony');
    const details = encodeURIComponent('Wedding ceremony of Gowtham Raj. P & Soundariya. P at ARS Mahal, Vriddhachalam. Reception on 19th Nov 6 PM onwards.');
    const location = encodeURIComponent('ARS Mahal, Vriddhachalam');
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startUtc}/${endUtc}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  // Download ICS File for Apple / Outlook
  const handleIcsDownload = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Koodal Studio//Wedding Invitation//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      'SUMMARY:Wedding Ceremony - Gowtham Raj & Soundariya',
      'DESCRIPTION:Wedding of Gowtham Raj. P and Soundariya. P\\nReception: 19th Nov 6 PM onwards\\nWedding: 20th Nov 9:15 AM onwards',
      'LOCATION:ARS Mahal\\, Vriddhachalam',
      'DTSTART:20261120T034500Z',
      'DTEND:20261120T083000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Gowtham-Soundariya-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Share Invitation handler
  const handleShare = async () => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#c99a4c', '#e27284', '#681321']
      });

      if (navigator.share) {
        await navigator.share({
          title: 'Gowtham Raj ❤️ Soundariya | Wedding E-Invitation',
          text: 'With a Happy Heart, Here is the Invitation for Gowtham Raj & Soundariya Wedding on 19th & 20th Nov 2026 at ARS Mahal, Vriddhachalam!',
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      }
    } catch {
      // User cancelled share
    }
  };

  return (
    <section className="share-calendar-section">
      {/* Warm Personal Closing Note */}
      <div className="closing-note-box">
        <p className="closing-main-quote">
          "{closingMessage.quote}"
        </p>
        <p className="closing-personal-note">
          {closingMessage.closingNote}
        </p>
        <div className="inviter-line">
          <span>Invited by: </span>
          <strong>{inviter.name}</strong>
          <span className="inviter-phone">({inviter.formattedPhone})</span>
        </div>
      </div>

      {/* Action Buttons Grid */}
      <div className="action-buttons-grid">
        <button
          type="button"
          onClick={handleGoogleCalendar}
          className="btn-royal btn-gold"
        >
          <CalendarPlus size={16} />
          <span>Save to Calendar</span>
        </button>

        <a
          href={inviter.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-royal"
        >
          <MessageCircle size={16} />
          <span>Send Blessings on WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={handleShare}
          className="btn-royal btn-outline"
        >
          {isCopied ? <Check size={16} /> : <Share2 size={16} />}
          <span>{isCopied ? 'Link Copied!' : 'Share Invitation'}</span>
        </button>

        <button
          type="button"
          onClick={onOpenCardModal}
          className="btn-royal btn-outline"
        >
          <Eye size={16} />
          <span>View Original Card</span>
        </button>
      </div>

      <style>{`
        .share-calendar-section {
          margin: 1.8rem 0 1rem 0;
        }

        .closing-note-box {
          background: rgba(201, 154, 76, 0.08);
          border: 1px dashed rgba(201, 154, 76, 0.45);
          border-radius: 14px;
          padding: 1.4rem 1.2rem;
          text-align: center;
          margin-bottom: 1.4rem;
        }

        .closing-main-quote {
          font-family: var(--font-royal);
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--color-maroon);
          letter-spacing: 0.04em;
          margin-bottom: 0.5rem;
        }

        .closing-personal-note {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          color: var(--color-text-dark);
          line-height: 1.5;
          margin-bottom: 0.8rem;
        }

        .inviter-line {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .inviter-line strong {
          color: var(--color-maroon);
          font-weight: 700;
        }

        .inviter-phone {
          margin-left: 0.3rem;
          color: var(--color-gold-dark);
          font-weight: 600;
        }

        .action-buttons-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.8rem;
        }

        @media (min-width: 520px) {
          .action-buttons-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
