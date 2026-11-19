/**
 * QuizMaster - Sound System
 * Pure Web Audio API synthesis.
 * Guarantees zero missing audio files, zero network latency, and 100% offline reliability.
 */

const SoundManager = {
  ctx: null,
  enabled: true,

  init() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    } catch (e) {
      console.warn('Web Audio API not supported in this browser:', e);
    }

    // Sync with settings
    if (window.StorageManager) {
      const settings = window.StorageManager.getSettings();
      this.enabled = settings.soundEnabled !== false;
    }
  },

  _ensureContext() {
    if (!this.ctx) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      } catch (e) {
        return false;
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return !!this.ctx;
  },

  setEnabled(state) {
    this.enabled = !!state;
    if (window.StorageManager) {
      window.StorageManager.saveSettings({ soundEnabled: this.enabled });
    }
  },

  toggleSound() {
    this.setEnabled(!this.enabled);
    if (this.enabled) {
      this.playClick();
    }
    return this.enabled;
  },

  // Button Click
  playClick() {
    if (!this.enabled || !this._ensureContext()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(480, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.05);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  },

  // Answer Option Select
  playSelect() {
    if (!this.enabled || !this._ensureContext()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.06); // E5

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  },

  // Lock Answer
  playLock() {
    if (!this.enabled || !this._ensureContext()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(392.00, now); // G4
    osc.frequency.exponentialRampToValueAtTime(587.33, now + 0.15); // D5

    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.15);
  },

  // Correct Answer (Royal Chime / Fanfare Arpeggio)
  playCorrect() {
    if (!this.enabled || !this._ensureContext()) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + idx * 0.08;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.25, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.36);
    });
  },

  // Wrong Answer (Dramatic low drop buzz)
  playWrong() {
    if (!this.enabled || !this._ensureContext()) return;
    const now = this.ctx.currentTime;
    
    // Low saw sound
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.4);

    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.4);
  },

  // Second Chance Shield Activated
  playShield() {
    if (!this.enabled || !this._ensureContext()) return;
    const notes = [440, 554.37, 659.25, 880];
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + idx * 0.06;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.18, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.25);
    });
  },

  // Lifeline Usage (Mystic Harp / Sparkle)
  playLifeline() {
    if (!this.enabled || !this._ensureContext()) return;
    const notes = [659.25, 783.99, 987.77, 1174.66, 1318.51]; // E5, G5, B5, D6, E6
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + idx * 0.07;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.15, startTime);
      gain.gain.exponentialRampToValueAtTime(0.005, startTime + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.3);
    });
  },

  // Timer Tick Warning (<= 15 seconds)
  playTimerTick() {
    if (!this.enabled || !this._ensureContext()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(750, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  },

  // Timer Critical Alarm (<= 5 seconds)
  playTimerUrgent() {
    if (!this.enabled || !this._ensureContext()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(950, now);
    osc.frequency.setValueAtTime(1200, now + 0.04);

    gain.gain.setValueAtTime(0.16, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  },

  // Timeout (Gong / deep chime)
  playTimeout() {
    if (!this.enabled || !this._ensureContext()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.6);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.6);
  },

  // Victory Fanfare
  playVictory() {
    if (!this.enabled || !this._ensureContext()) return;
    const now = this.ctx.currentTime;
    // Ascending celebratory chords
    const chord1 = [523.25, 659.25, 783.99]; // C5 major
    const chord2 = [587.33, 739.99, 880.00]; // D5 major
    const chord3 = [659.25, 830.61, 987.77]; // E5 major
    const chord4 = [1046.50, 1318.51, 1567.98]; // C6 major triumph

    const sequences = [
      { chord: chord1, time: 0, dur: 0.2 },
      { chord: chord2, time: 0.22, dur: 0.2 },
      { chord: chord3, time: 0.44, dur: 0.2 },
      { chord: chord4, time: 0.70, dur: 0.8 }
    ];

    sequences.forEach(seq => {
      seq.chord.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + seq.time;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + seq.dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + seq.dur);
      });
    });
  },

  // Game Over Sound
  playGameOver() {
    if (!this.enabled || !this._ensureContext()) return;
    const now = this.ctx.currentTime;
    const notes = [440, 392, 349.23, 311.13, 261.63]; // Descending mellow notes
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + idx * 0.12;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.15, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.35);
    });
  }
};

// Auto-initialize on first user interaction to comply with browser audio autoplay policy
if (typeof window !== 'undefined') {
  window.SoundManager = SoundManager;
  const unlockAudio = () => {
    SoundManager.init();
    window.removeEventListener('click', unlockAudio);
    window.removeEventListener('keydown', unlockAudio);
    window.removeEventListener('touchstart', unlockAudio);
  };
  window.addEventListener('click', unlockAudio);
  window.addEventListener('keydown', unlockAudio);
  window.addEventListener('touchstart', unlockAudio);
}

