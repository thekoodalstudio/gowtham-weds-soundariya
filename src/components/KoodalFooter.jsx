import React from 'react';
import { Heart } from 'lucide-react';

export default function KoodalFooter() {
  return (
    <footer className="koodal-footer">
      <div className="footer-blessing">
        <span>Made with</span>
        <Heart size={14} className="footer-heart" />
        <span>for Gowtham Raj & Soundariya</span>
      </div>
      <p className="footer-brand">
        Crafted with love by <strong>The Koodal Studio</strong>
      </p>

      <style>{`
        .koodal-footer {
          margin-top: 2rem;
          text-align: center;
          padding: 1rem 0;
          font-family: var(--font-sans);
          font-size: 0.76rem;
          color: var(--color-text-muted);
        }

        .footer-blessing {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          margin-bottom: 0.3rem;
          font-weight: 500;
        }

        .footer-heart {
          color: #e25569;
          fill: #e25569;
        }

        .footer-brand strong {
          color: var(--color-maroon);
          font-family: var(--font-royal);
          letter-spacing: 0.05em;
        }
      `}</style>
    </footer>
  );
}
