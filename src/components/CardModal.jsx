import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

export default function CardModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="card-modal-backdrop" onClick={onClose}>
      <div className="card-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="card-modal-header">
          <h3 className="modal-title">Official Wedding Invitation Card</h3>
          <p className="modal-subtitle">You can zoom, scan the venue QR code, or download this card</p>
        </div>

        <div className="card-image-scroll-container">
          <img
            src="/card.jpeg"
            alt="Official Wedding Invitation Card - Gowtham Raj & Soundariya"
            className="modal-card-image"
          />
        </div>

        <div className="card-modal-footer">
          <a
            href="/card.jpeg"
            download="Gowtham-Soundariya-Wedding-Invitation.jpeg"
            className="btn-royal btn-gold"
          >
            <Download size={16} />
            <span>Download High-Res Card</span>
          </a>
        </div>
      </div>

      <style>{`
        .card-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(43, 23, 26, 0.82);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          z-index: 10000;
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .card-modal-content {
          background: #fdfbf7;
          border: 1.5px solid var(--color-gold);
          border-radius: 20px;
          max-width: 480px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }

        .modal-close-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(104, 19, 33, 0.1);
          color: var(--color-maroon);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
          z-index: 10;
        }

        .modal-close-btn:hover {
          background: var(--color-maroon);
          color: #fff;
        }

        .card-modal-header {
          padding: 1.2rem 1.2rem 0.6rem 1.2rem;
          text-align: center;
        }

        .modal-title {
          font-family: var(--font-royal);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-maroon);
          letter-spacing: 0.06em;
        }

        .modal-subtitle {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          color: var(--color-text-muted);
          margin-top: 0.2rem;
        }

        .card-image-scroll-container {
          flex: 1;
          overflow-y: auto;
          padding: 0.5rem 1rem;
          display: flex;
          justify-content: center;
        }

        .modal-card-image {
          width: 100%;
          height: auto;
          max-height: 65vh;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .card-modal-footer {
          padding: 0.8rem 1.2rem 1.2rem 1.2rem;
          display: flex;
          justify-content: center;
          border-top: 1px solid rgba(201, 154, 76, 0.2);
        }
      `}</style>
    </div>
  );
}
