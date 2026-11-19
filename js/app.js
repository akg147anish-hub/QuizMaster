/**
 * QuizMaster - Main Application Coordinator
 * Handles screen transitions, header state sync, modals,
 * sound controls, and event delegations.
 */

const App = {
  activeScreen: 'home-screen',

  init() {
    // 1. Initialize Subsystems
    if (window.SoundManager) window.SoundManager.init();
    if (window.DashboardManager) window.DashboardManager.init();

    // 2. Setup Navigation and Global Listeners
    this.setupNavigation();
    this.setupModals();
    this.setupGameControls();
    this.setupSoundToggle();

    // 3. Sync UI with Persisted Data
    this.syncHeaderProfile();
    this.updateDailyChallengeWidget();

    // 4. Show Home Screen by default
    this.switchScreen('home-screen');
  },

  // Screen Switching
  switchScreen(screenId) {
    const screens = document.querySelectorAll('.app-screen');
    screens.forEach(screen => {
      if (screen.id === screenId) {
        screen.classList.add('active');
        screen.classList.remove('hidden');
      } else {
        screen.classList.remove('active');
        screen.classList.add('hidden');
      }
    });

    this.activeScreen = screenId;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Screen-specific refreshes
    if (screenId === 'dashboard-screen' && window.DashboardManager) {
      window.DashboardManager.renderDashboard();
    }
    if (screenId === 'home-screen') {
      this.syncHeaderProfile();
      this.updateDailyChallengeWidget();
    }
  },

  // Navigation handlers
  setupNavigation() {
    // Header navigation
    document.querySelectorAll('[data-navigate]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = btn.dataset.navigate;
        if (target) {
          if (window.SoundManager) window.SoundManager.playClick();
          this.switchScreen(target);
        }
      });
    });

    // Home "Play Now" button
    const playBtn = document.getElementById('btn-home-play-now');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        if (window.SoundManager) window.SoundManager.playClick();
        this.startStandardGameFlow();
      });
    }

    // Home "Daily Challenge" button
    const dailyBtn = document.getElementById('btn-home-daily-challenge');
    if (dailyBtn) {
      dailyBtn.addEventListener('click', () => {
        if (window.SoundManager) window.SoundManager.playClick();
        this.startDailyChallengeFlow();
      });
    }

    // "How to Play" button
    const howToBtn = document.getElementById('btn-how-to-play');
    if (howToBtn) {
      howToBtn.addEventListener('click', () => {
        if (window.SoundManager) window.SoundManager.playClick();
        this.openModal('modal-how-to-play');
      });
    }

    // Results screen actions (Game Over & Victory)
    document.querySelectorAll('.btn-play-again').forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.SoundManager) window.SoundManager.playClick();
        this.startStandardGameFlow();
      });
    });

    document.querySelectorAll('.btn-review-answers').forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.SoundManager) window.SoundManager.playClick();
        if (window.ResultsManager) window.ResultsManager.openReviewScreen();
      });
    });

    // Dashboard "Play Next Challenge" button
    const dashPlayBtn = document.getElementById('btn-dashboard-play');
    if (dashPlayBtn) {
      dashPlayBtn.addEventListener('click', () => {
        if (window.SoundManager) window.SoundManager.playClick();
        this.startStandardGameFlow();
      });
    }

    // Review Screen Filter Buttons
    document.querySelectorAll('.review-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.SoundManager) window.SoundManager.playClick();
        const filter = btn.dataset.filter;
        if (window.ResultsManager) window.ResultsManager.setReviewFilter(filter);
      });
    });
  },

  // In-Game button handlers
  setupGameControls() {
    // Lock Answer button
    const lockBtn = document.getElementById('btn-lock-answer');
    if (lockBtn) {
      lockBtn.addEventListener('click', () => {
        if (window.GameEngine) window.GameEngine.confirmAnswer();
      });
    }

    // Lifelines
    const btn5050 = document.getElementById('lifeline-5050');
    if (btn5050) {
      btn5050.addEventListener('click', () => {
        if (window.GameEngine) window.GameEngine.triggerFiftyFifty();
      });
    }

    const btnHint = document.getElementById('lifeline-hint');
    if (btnHint) {
      btnHint.addEventListener('click', () => {
        if (window.GameEngine) window.GameEngine.triggerBrainHint();
      });
    }

    const btnSecondChance = document.getElementById('lifeline-second-chance');
    if (btnSecondChance) {
      btnSecondChance.addEventListener('click', () => {
        if (window.GameEngine) window.GameEngine.triggerSecondChance();
      });
    }

    // Quit current game confirmation
    const quitBtn = document.getElementById('btn-quit-game');
    if (quitBtn) {
      quitBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to forfeit this game? The match will count as a loss.')) {
          if (window.GameEngine) window.GameEngine.handleGameOver();
        }
      });
    }
  },

  // Modal setup
  setupModals() {
    document.querySelectorAll('.modal-close-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = btn.closest('.modal-overlay');
        if (modal) {
          modal.classList.remove('visible');
          if (window.SoundManager) window.SoundManager.playClick();
        }
      });
    });

    // Close on backdrop click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('visible');
        }
      });
    });
  },

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('visible');
  },

  // Sound toggle
  setupSoundToggle() {
    const soundToggleBtns = document.querySelectorAll('.btn-sound-toggle');
    const updateIcons = (enabled) => {
      soundToggleBtns.forEach(btn => {
        btn.innerHTML = enabled 
          ? `<span class="sound-icon">🔊</span><span class="sound-text">Sound ON</span>` 
          : `<span class="sound-icon">🔇</span><span class="sound-text">Sound OFF</span>`;
        if (enabled) {
          btn.classList.remove('sound-muted');
        } else {
          btn.classList.add('sound-muted');
        }
      });
    };

    if (window.SoundManager) {
      updateIcons(window.SoundManager.enabled);
    }

    soundToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.SoundManager) {
          const newState = window.SoundManager.toggleSound();
          updateIcons(newState);
        }
      });
    });
  },

  // Sync header profile widgets
  syncHeaderProfile() {
    if (!window.StorageManager) return;
    const profile = window.StorageManager.getProfile();

    const avatarMap = {
      crown: '👑', scholar: '📜', knight: '⚔️', wizard: '🔮',
      lion: '🦁', falcon: '🦅', empress: '👸', champion: '🏆'
    };

    const headerAvatar = document.getElementById('header-avatar-icon');
    if (headerAvatar) {
      headerAvatar.textContent = avatarMap[profile.avatar] || '👑';
    }

    const headerName = document.getElementById('header-player-name');
    if (headerName) {
      headerName.textContent = profile.name || 'Player';
    }

    const headerRank = document.getElementById('header-player-rank');
    if (headerRank) {
      headerRank.textContent = `${profile.badge} ${profile.rank}`;
    }

    const headerXP = document.getElementById('header-player-xp');
    if (headerXP) {
      headerXP.textContent = `${profile.totalXP.toLocaleString()} XP`;
    }

    // Home screen preview card
    const homeRankBadge = document.getElementById('home-rank-badge');
    if (homeRankBadge) homeRankBadge.textContent = profile.badge;

    const homeRankTitle = document.getElementById('home-rank-title');
    if (homeRankTitle) homeRankTitle.textContent = profile.rank;

    const homeTotalXP = document.getElementById('home-total-xp');
    if (homeTotalXP) homeTotalXP.textContent = `${profile.totalXP.toLocaleString()} XP`;

    const homeLevel = document.getElementById('home-player-level');
    if (homeLevel) homeLevel.textContent = `Level ${profile.level}`;

    const homeProgress = document.getElementById('home-xp-progress-fill');
    if (homeProgress) {
      homeProgress.style.width = `${profile.progressPercent}%`;
    }
  },

  // Daily Challenge status on home screen
  updateDailyChallengeWidget() {
    if (!window.StorageManager) return;
    const status = window.StorageManager.getDailyChallengeStatus();
    const statusText = document.getElementById('daily-challenge-status-text');
    const playBtn = document.getElementById('btn-home-daily-challenge');
    const badgeEl = document.getElementById('daily-challenge-badge');

    if (status && status.completed) {
      if (statusText) {
        statusText.innerHTML = `<strong>Challenge Completed!</strong> Today's Score: ${status.score}/${status.total} (+${status.xpEarned} XP)`;
      }
      if (playBtn) {
        playBtn.innerHTML = `<span>View Daily Result</span> <i class="icon-check">✓</i>`;
        playBtn.className = 'btn-gold-outline';
        playBtn.onclick = () => {
          if (window.ResultsManager) {
            window.ResultsManager.showGameOverScreen({
              mode: 'daily',
              finalQuestion: status.total,
              totalQuestions: status.total,
              correctCount: status.score,
              xpEarned: status.xpEarned,
              fatalQuestion: status.answersSummary[status.answersSummary.length - 1],
              history: status.answersSummary
            });
          }
        };
      }
      if (badgeEl) {
        badgeEl.textContent = 'COMPLETED';
        badgeEl.className = 'daily-badge completed';
      }
    } else {
      if (statusText) {
        statusText.innerHTML = `5 Mixed Questions • Test your daily knowledge & earn <strong>+100 Bonus XP</strong>!`;
      }
      if (playBtn) {
        playBtn.innerHTML = `<span>Play Daily Challenge</span> <i class="icon-play">➔</i>`;
        playBtn.className = 'btn-gold-pulse';
        playBtn.onclick = () => {
          this.startDailyChallengeFlow();
        };
      }
      if (badgeEl) {
        badgeEl.textContent = 'TODAY\'S CHALLENGE';
        badgeEl.className = 'daily-badge available';
      }
    }
  },

  startStandardGameFlow() {
    this.switchScreen('game-screen');
    if (window.GameEngine) {
      window.GameEngine.startStandardGame();
    }
  },

  startDailyChallengeFlow() {
    const started = window.GameEngine ? window.GameEngine.startDailyChallenge() : false;
    if (started) {
      this.switchScreen('game-screen');
    }
  }
};

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

if (typeof window !== 'undefined') {
  window.App = App;
}