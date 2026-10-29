import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

/**
 * Procedural Auspicious Melody Synthesizer (Carnatic Mohanam / Wedding Scale)
 * Uses pure Web Audio API with zero external audio assets required.
 * Sounds like gentle temple bells, harp, and auspicious flute.
 */
class WeddingMelodyPlayer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.noteIndex = 0;

    // Frequencies (Hz) for Auspicious Mohanam scale: Sa Ri2 Ga3 Pa Dha2 (C, D, E, G, A)
    this.notes = [
      261.63, // C4 (Sa)
      293.66, // D4 (Ri)
      329.63, // E4 (Ga)
      392.00, // G4 (Pa)
      440.00, // A4 (Dha)
      523.25, // C5 (High Sa)
      587.33, // D5 (High Ri)
      659.25, // E5 (High Ga)
      783.99  // G5 (High Pa)
    ];

    // Traditional gentle melodic motif progression
    this.pattern = [
      0, 2, 3, 4, 5, 4, 3, 2,
      2, 3, 5, 7, 5, 3, 2, 0,
      1, 3, 4, 6, 4, 3, 1, 0,
      0, 3, 5, 8, 7, 5, 3, 2
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playNote(freq, time, duration = 1.8) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    // Warm resonant tone filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, time);
    filter.Q.setValueAtTime(4, time);

    // Smooth envelope attack and gentle decay
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.08, time + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + duration);
  }

  start() {
    this.init();
    if (!this.ctx) return;
    this.isPlaying = true;
    this.noteIndex = 0;

    const playLoop = () => {
      if (!this.isPlaying || !this.ctx) return;

      const now = this.ctx.currentTime;
      const noteOffset = this.pattern[this.noteIndex % this.pattern.length];
      const freq = this.notes[noteOffset % this.notes.length];

      this.playNote(freq, now, 1.6);

      // Play soft harmonizing lower tone occasionally
      if (this.noteIndex % 4 === 0) {
        this.playNote(this.notes[0] / 2, now, 2.4);
      }

      this.noteIndex++;
      this.timer = setTimeout(playLoop, 580);
    };

    playLoop();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}

export default function FloatingAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current = new WeddingMelodyPlayer();

    // Auto-attempt start on first click or touch
    const handleFirstGesture = () => {
      if (playerRef.current && !playerRef.current.isPlaying) {
        playerRef.current.start();
        setIsPlaying(true);
      }
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };

    window.addEventListener('click', handleFirstGesture, { once: true });
    window.addEventListener('touchstart', handleFirstGesture, { once: true });

    return () => {
      if (playerRef.current) {
        playerRef.current.stop();
      }
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };
  }, []);

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.stop();
      setIsPlaying(false);
    } else {
      playerRef.current.start();
      setIsPlaying(true);
    }
  };

  return (
    <button
      type="button"
      className="floating-audio-btn"
      onClick={toggleAudio}
      title={isPlaying ? "Mute Auspicious Music" : "Play Auspicious Music"}
      aria-label="Toggle Background Music"
    >
      {isPlaying ? (
        <Volume2 size={20} className="animate-spin-slow" />
      ) : (
        <VolumeX size={20} />
      )}
    </button>
  );
}
