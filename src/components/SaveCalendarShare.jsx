import React, { useState } from 'react';
import { INVITATION_DATA } from '../data/invitationData';
import { CalendarPlus, MessageCircle, Share2, Copy, Check, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SaveCalendarShare({ onOpenCardModal }) {
  const [isCopied, setIsCopied] = useState(false);
  const { inviter, brideRsvp, closingMessage } = INVITATION_DATA;

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

  // WhatsApp Share Invite handler
  const handleWhatsAppShare = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#c99a4c', '#e27284', '#681321']
    });

    const shareText = encodeURIComponent(
      `💌 With a Happy Heart, Here's My Invitation❤️💍\n\n` +
      `A beautiful new chapter is about to begin… 🥹✨\n` +
      `Yes, I'm getting married 💃🏻💍❤️\n\n` +
      `💐 Reception: 19th November 2026 (Thursday) | 6:00 PM onwards\n` +
      `💍 Wedding: 20th November 2026 (Friday) | 9:15 AM onwards\n` +
      `📍 Venue: ARS Mahal, Vriddhachalam\n\n` +
      `View our digital animated invitation here: ${window.location.href}`
    );

    window.open(`https://api.whatsapp.com/send?text=${shareText}`, '_blank');
  };

  // Generic Share or Copy Link handler
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
        <div className="contact-info-pills">
          <div className="contact-pill">
            <span>RSVP & Wishes: </span>
            <strong>{brideRsvp.name}</strong>
            <a href={`tel:${brideRsvp.phone}`} className="contact-link">{brideRsvp.formattedPhone}</a>
          </div>
          <div className="contact-pill sub-pill">
            <span>Invited by: </span>
            <strong>{inviter.name}</strong>
            <a href={`tel:${inviter.phone}`} className="contact-link">{inviter.formattedPhone}</a>
          </div>
        </div>
      </div>

      {/* Action Buttons Grid */}
      <div className="action-buttons-grid">
        {/* Direct One-Tap WhatsApp Wishes to Soundariya */}
        <a
          href={brideRsvp.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-royal btn-whatsapp"
        >
          <MessageCircle size={18} />
          <span>Send Wishes to Soundariya</span>
        </a>

        {/* Share Invite directly to WhatsApp */}
        <button
          type="button"
          onClick={handleWhatsAppShare}
          className="btn-royal btn-whatsapp-share"
        >
          <Share2 size={16} />
          <span>Share on WhatsApp</span>
        </button>

        {/* Save to Calendar */}
        <button
          type="button"
          onClick={handleGoogleCalendar}
          className="btn-royal btn-gold"
        >
          <CalendarPlus size={16} />
          <span>Save to Calendar</span>
        </button>

        {/* View Original Physical Card */}
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

        .contact-info-pills {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          align-items: center;
          justify-content: center;
        }

        .contact-pill {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .contact-pill.sub-pill {
          font-size: 0.78rem;
          opacity: 0.88;
        }

        .contact-pill strong {
          color: var(--color-maroon);
          font-weight: 700;
        }

        .contact-link {
          margin-left: 0.35rem;
          color: var(--color-gold-dark);
          font-weight: 600;
          text-decoration: none;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .btn-whatsapp {
          background: linear-gradient(135deg, #1e7e43 0%, #155d31 100%);
          border-color: #48c774;
          box-shadow: 0 4px 16px rgba(30, 126, 67, 0.28);
        }

        .btn-whatsapp:hover {
          background: linear-gradient(135deg, #239650 0%, #1b6f3c 100%);
          border-color: #6fe096;
          box-shadow: 0 6px 22px rgba(30, 126, 67, 0.4);
        }

        .btn-whatsapp-share {
          background: linear-gradient(135deg, var(--color-maroon) 0%, var(--color-maroon-dark) 100%);
          border-color: var(--color-gold);
        }

        .btn-whatsapp-share:hover {
          background: linear-gradient(135deg, var(--color-maroon-light) 0%, var(--color-maroon) 100%);
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
