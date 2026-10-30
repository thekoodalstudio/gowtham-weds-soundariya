import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Disc3 } from 'lucide-react';

/**
 * Floating Background Music Controller
 * - Plays Tamil Wedding BGM from public/bgm.mp3
 *   ("Stunning Save the Date Invitation Video _ Premium Wedding Invite _ Tamil wedding BGM")
 * - Strictly set to 50% volume (0.5)
 * - Autoplay attempted on page load with fallback to first user tap/scroll/click
 */
export default function FloatingAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create or reference audio element
    const audio = audioRef.current;
    if (!audio) return;

    // Set 50% volume strictly per user instruction
    audio.volume = 0.5;

    const startPlayback = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          // Remove one-time gesture listeners once successfully playing
          cleanGestureListeners();
        })
        .catch(() => {
          // Browsers block unprompted audio until user gesture
          setIsPlaying(false);
        });
    };

    const cleanGestureListeners = () => {
      window.removeEventListener('click', startPlayback);
      window.removeEventListener('touchstart', startPlayback);
      window.removeEventListener('scroll', startPlayback);
      window.removeEventListener('keydown', startPlayback);
    };

    // Attempt autoplay immediately
    startPlayback();

    // Attach listeners for guaranteed playback on first user touch/click/scroll
    window.addEventListener('click', startPlayback, { once: true });
    window.addEventListener('touchstart', startPlayback, { once: true });
    window.addEventListener('scroll', startPlayback, { once: true });
    window.addEventListener('keydown', startPlayback, { once: true });

    return () => {
      cleanGestureListeners();
      audio.pause();
    };
  }, []);

  const toggleAudio = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.5;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/bgm.mp3"
        loop
        preload="auto"
      />
      <button
        type="button"
        className={`floating-audio-btn ${isPlaying ? 'is-playing' : ''}`}
        onClick={toggleAudio}
        title={isPlaying ? 'Mute Wedding BGM (50% Volume)' : 'Play Wedding BGM (50% Volume)'}
        aria-label="Toggle Background Music"
      >
        {isPlaying ? (
          <Disc3 size={22} className="animate-spin-slow" />
        ) : (
          <VolumeX size={20} />
        )}
      </button>

      <style>{`
        .floating-audio-btn.is-playing {
          box-shadow: 0 0 20px rgba(201, 154, 76, 0.6), 0 8px 25px rgba(104, 19, 33, 0.4);
          border-color: #f3d48d;
        }
      `}</style>
    </>
  );
}
