/**
 * QuizMaster - Player Profile Dashboard
 * Real-time statistics, rank progression, avatar customization,
 * game history log, and statistical reset operations.
 */

const AVATARS = [
  { id: 'crown', icon: '👑', label: 'Crown Emperor' },
  { id: 'scholar', icon: '📜', label: 'Grand Sage' },
  { id: 'knight', icon: '⚔️', label: 'Royal Knight' },
  { id: 'wizard', icon: '🔮', label: 'Mystic Wizard' },
  { id: 'lion', icon: '🦁', label: 'Royal Lion' },
  { id: 'falcon', icon: '🦅', label: 'Golden Falcon' },
  { id: 'empress', icon: '👸', label: 'Emerald Empress' },
  { id: 'champion', icon: '🏆', label: 'Grand Champion' }
];

const DashboardManager = {
  currentProfile: null,
  currentStats: null,

  init() {
    this.renderDashboard();
    this.setupEventListeners();
  },

  setupEventListeners() {
    // Save editable player name on input change or blur
    const nameInput = document.getElementById('dashboard-player-name-input');
    if (nameInput) {
      nameInput.addEventListener('change', (e) => {
        this.savePlayerName(e.target.value.trim());
      });
      nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          nameInput.blur();
        }
      });
    }

    // Avatar change trigger
    const avatarBtn = document.getElementById('dashboard-avatar-picker-btn');
    if (avatarBtn) {
      avatarBtn.addEventListener('click', () => {
        this.openAvatarModal();
      });
    }

    // Reset statistics triggers
    const resetBtn = document.getElementById('btn-reset-stats');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.openResetModal();
      });
    }

    const confirmResetBtn = document.getElementById('btn-confirm-reset');
    if (confirmResetBtn) {
      confirmResetBtn.addEventListener('click', () => {
        this.executeReset();
      });
    }

    const cancelResetBtn = document.getElementById('btn-cancel-reset');
    if (cancelResetBtn) {
      cancelResetBtn.addEventListener('click', () => {
        this.closeResetModal();
      });
    }
  },

  renderDashboard() {
    if (!window.StorageManager) return;

    this.currentProfile = window.StorageManager.getProfile();
    this.currentStats = window.StorageManager.getStats();
    const history = window.StorageManager.getGameHistory(15);

    // Profile Card Rendering
    this.renderProfileCard(this.currentProfile);

    // 4 Prominent Stat Cards
    this.renderStatCards(this.currentStats);

    // Secondary Metrics
    this.renderSecondaryStats(this.currentStats);

    // Recent Game History Table
    this.renderHistoryTable(history);
  },

  renderProfileCard(profile) {
    // Avatar
    const avatarEl = document.getElementById('dashboard-profile-avatar-icon');
    const avatarObj = AVATARS.find(a => a.id === profile.avatar) || AVATARS[0];
    if (avatarEl) {
      avatarEl.textContent = avatarObj.icon;
    }

    // Name Input
    const nameInput = document.getElementById('dashboard-player-name-input');
    if (nameInput) {
      nameInput.value = profile.name || 'Quiz Explorer';
    }

    // Rank Badge & Title
    const rankBadgeEl = document.getElementById('dashboard-rank-badge');
    if (rankBadgeEl) {
      rankBadgeEl.textContent = profile.badge;
    }

    const rankTitleEl = document.getElementById('dashboard-rank-title');
    if (rankTitleEl) {
      rankTitleEl.textContent = profile.rank;
    }

    // Level
    const levelEl = document.getElementById('dashboard-player-level');
    if (levelEl) {
      levelEl.textContent = `Level ${profile.level}`;
    }

    // Total XP
    const xpTotalEl = document.getElementById('dashboard-total-xp');
    if (xpTotalEl) {
      xpTotalEl.textContent = `${profile.totalXP.toLocaleString()} XP`;
    }

    // Progress to Next Rank
    const progressFill = document.getElementById('dashboard-rank-progress-fill');
    const progressLabel = document.getElementById('dashboard-rank-progress-text');
    if (progressFill && progressLabel) {
      if (profile.nextRankXP) {
        progressFill.style.width = `${profile.progressPercent}%`;
        progressLabel.textContent = `${profile.totalXP} / ${profile.nextRankXP} XP to next rank (${profile.progressPercent}%)`;
      } else {
        progressFill.style.width = '100%';
        progressLabel.textContent = 'Maximum Rank Achieved! 👑';
      }
    }
  },

  renderStatCards(stats) {
    const elGamesPlayed = document.getElementById('stat-total-games');
    if (elGamesPlayed) elGamesPlayed.textContent = (stats.totalGamesPlayed || 0).toLocaleString();

    const elAttempted = document.getElementById('stat-total-attempted');
    if (elAttempted) elAttempted.textContent = (stats.totalQuestionsAttempted || 0).toLocaleString();

    const elTotalXP = document.getElementById('stat-total-xp-earned');
    if (elTotalXP) elTotalXP.textContent = (stats.totalXPEarned || 0).toLocaleString();

    const elLifelines = document.getElementById('stat-total-lifelines');
    if (elLifelines) elLifelines.textContent = (stats.totalLifelinesUsed || 0).toLocaleString();
  },

  renderSecondaryStats(stats) {
    const elAccuracy = document.getElementById('stat-accuracy-rate');
    if (elAccuracy) elAccuracy.textContent = `${stats.accuracy}%`;

    const elHighestLevel = document.getElementById('stat-highest-level');
    if (elHighestLevel) {
      elHighestLevel.textContent = stats.highestLevelReached > 0
        ? `Question ${stats.highestLevelReached}`
        : '-';
    }

    const elTotalCorrect = document.getElementById('stat-total-correct');
    if (elTotalCorrect) elTotalCorrect.textContent = (stats.totalCorrectAnswers || 0).toLocaleString();
  },

  renderHistoryTable(history) {
    const container = document.getElementById('history-table-body');
    if (!container) return;

    if (!history || history.length === 0) {
      container.innerHTML = `
        <tr>
          <td colspan="6" class="text-center empty-history-msg">
            No games recorded yet. Tap "Play Now" to embark on your first challenge!
          </td>
        </tr>
      `;
      return;
    }

    container.innerHTML = history.map(item => {
      const dateObj = new Date(item.date);
      const formattedDate = dateObj.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const resultBadge = item.won
        ? '<span class="history-pill won">🏆 VICTORY</span>'
        : '<span class="history-pill lost">❌ DEFEAT</span>';

      const modeLabel = item.mode === 'daily'
        ? '<span class="history-mode-pill daily">Daily Challenge</span>'
        : '<span class="history-mode-pill standard">Standard Game</span>';

      return `
        <tr>
          <td class="history-date">${formattedDate}</td>
          <td>${modeLabel}</td>
          <td>${resultBadge}</td>
          <td><strong>${item.correctCount}</strong> / ${item.questionsAttempted}</td>
          <td>Question ${item.finalQuestion}</td>
          <td class="history-xp text-gold">+${item.xpEarned} XP</td>
        </tr>
      `;
    }).join('');
  },

  savePlayerName(name) {
    if (!name || !window.StorageManager) return;
    window.StorageManager.saveProfile({ name });
    this.renderDashboard();
    // Also sync header preview
    if (window.App) window.App.syncHeaderProfile();
  },

  openAvatarModal() {
    const modal = document.getElementById('modal-avatar-picker');
    const grid = document.getElementById('avatar-picker-grid');
    if (!modal || !grid) return;

    const currentAvatar = this.currentProfile ? this.currentProfile.avatar : 'crown';

    grid.innerHTML = AVATARS.map(a => `
      <div class="avatar-option-card ${a.id === currentAvatar ? 'selected' : ''}" data-avatar-id="${a.id}">
        <span class="avatar-big-icon">${a.icon}</span>
        <span class="avatar-card-label">${a.label}</span>
      </div>
    `).join('');

    // Attach click handlers
    const cards = grid.querySelectorAll('.avatar-option-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.avatarId;
        this.selectAvatar(id);
      });
    });

    modal.classList.add('visible');
  },

  selectAvatar(avatarId) {
    if (window.StorageManager) {
      window.StorageManager.saveProfile({ avatar: avatarId });
      this.renderDashboard();
      if (window.App) window.App.syncHeaderProfile();
      if (window.SoundManager) window.SoundManager.playClick();
    }
    const modal = document.getElementById('modal-avatar-picker');
    if (modal) modal.classList.remove('visible');
  },

  openResetModal() {
    const modal = document.getElementById('modal-reset-confirm');
    if (modal) modal.classList.add('visible');
    if (window.SoundManager) window.SoundManager.playClick();
  },

  closeResetModal() {
    const modal = document.getElementById('modal-reset-confirm');
    if (modal) modal.classList.remove('visible');
    if (window.SoundManager) window.SoundManager.playClick();
  },

  executeReset() {
    if (window.StorageManager) {
      window.StorageManager.resetAllData();
      this.closeResetModal();
      this.renderDashboard();
      if (window.App) {
        window.App.syncHeaderProfile();
        window.App.updateDailyChallengeWidget();
      }
      if (window.SoundManager) window.SoundManager.playClick();
      alert('All statistics, progress, and history have been successfully reset.');
    }
  }
};

if (typeof window !== 'undefined') {
  window.DashboardManager = DashboardManager;
}
