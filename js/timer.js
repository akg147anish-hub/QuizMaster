/**
 * QuizMaster - 45-Second Real-Time Countdown Timer
 * Drives the circular SVG progress ring, text readout, audio ticks, and timeout detection.
 */

const TimerManager = {
  duration: 45,
  timeLeft: 45,
  startTime: null,
  animationFrameId: null,
  intervalId: null,
  isRunning: false,
  lastWarningTickSecond: null,
  callbacks: {
    onTick: null,
    onWarning: null,
    onCritical: null,
    onTimeout: null
  },

  start(duration = 45, callbacks = {}) {
    this.stop();
    this.duration = duration;
    this.timeLeft = duration;
    this.callbacks = { ...this.callbacks, ...callbacks };
    this.isRunning = true;
    this.lastWarningTickSecond = null;
    this.startTime = Date.now();

    // Broadcast initial state
    if (this.callbacks.onTick) {
      this.callbacks.onTick(this.timeLeft, 100);
    }

    // Interval running at 100ms for smooth UI display
    this.intervalId = setInterval(() => {
      if (!this.isRunning) return;

      const elapsed = (Date.now() - this.startTime) / 1000;
      this.timeLeft = Math.max(0, this.duration - elapsed);
      const secondsCeil = Math.ceil(this.timeLeft);
      const percent = Math.max(0, (this.timeLeft / this.duration) * 100);

      if (this.callbacks.onTick) {
        this.callbacks.onTick(secondsCeil, percent);
      }

      // Audio & visual warnings
      if (secondsCeil <= 15 && secondsCeil > 5) {
        if (this.lastWarningTickSecond !== secondsCeil) {
          this.lastWarningTickSecond = secondsCeil;
          if (this.callbacks.onWarning) {
            this.callbacks.onWarning(secondsCeil);
          }
          if (window.SoundManager) {
            window.SoundManager.playTimerTick();
          }
        }
      } else if (secondsCeil <= 5 && secondsCeil > 0) {
        if (this.lastWarningTickSecond !== secondsCeil) {
          this.lastWarningTickSecond = secondsCeil;
          if (this.callbacks.onCritical) {
            this.callbacks.onCritical(secondsCeil);
          }
          if (window.SoundManager) {
            window.SoundManager.playTimerUrgent();
          }
        }
      }

      // Timeout detection
      if (this.timeLeft <= 0) {
        this.stop();
        if (window.SoundManager) {
          window.SoundManager.playTimeout();
        }
        if (this.callbacks.onTimeout) {
          this.callbacks.onTimeout();
        }
      }
    }, 100);
  },

  stop() {
    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    const elapsed = this.startTime ? (Date.now() - this.startTime) / 1000 : 0;
    return Math.min(this.duration, elapsed);
  },

  pause() {
    this.isRunning = false;
  },

  resume() {
    if (this.timeLeft > 0 && !this.isRunning) {
      this.isRunning = true;
      this.startTime = Date.now() - ((this.duration - this.timeLeft) * 1000);
    }
  },

  reset() {
    this.stop();
    this.timeLeft = this.duration;
  }
};

if (typeof window !== 'undefined') {
  window.TimerManager = TimerManager;
}

