/**
 * QuizMaster - Storage Management Module
 * Robust LocalStorage abstraction for Player Profile, Game Stats, History & Settings.
 */

const STORAGE_KEYS = {
  PROFILE: 'quizmaster_profile',
  STATS: 'quizmaster_stats',
  HISTORY: 'quizmaster_history',
  DAILY: 'quizmaster_daily',
  SETTINGS: 'quizmaster_settings',
  PLAYED_QUESTIONS: 'quizmaster_played_questions'
};

// Rank tiers based on total XP
const RANKS = [
  { minXP: 0, title: 'Rookie', badge: '🌱', nextXP: 100 },
  { minXP: 100, title: 'Explorer', badge: '🧭', nextXP: 300 },
  { minXP: 300, title: 'Thinker', badge: '💡', nextXP: 600 },
  { minXP: 600, title: 'Scholar', badge: '📜', nextXP: 1000 },
  { minXP: 1000, title: 'Mastermind', badge: '⚡', nextXP: 2000 },
  { minXP: 2000, title: 'Knowledge Champion', badge: '👑', nextXP: null }
];

const DEFAULT_PROFILE = {
  name: 'Quiz Explorer',
  avatar: 'crown', // crown, scholar, knight, wizard, lion, falcon, empress, champion
  totalXP: 0,
  level: 1
};

const DEFAULT_STATS = {
  totalGamesPlayed: 0,
  gamesWon: 0,
  gamesLost: 0,
  totalXPEarned: 0,
  totalCorrectAnswers: 0,
  totalQuestionsAttempted: 0,
  totalLifelinesUsed: 0,
  highestLevelReached: 0,
  bestWinStreak: 0,
  currentWinStreak: 0
};

const DEFAULT_SETTINGS = {
  soundEnabled: true
};

const StorageManager = {
  // Safe JSON getter
  _get(key, defaultValue) {
    try {
      const data = localStorage.getItem(key);
      if (data) return JSON.parse(data);
      return (typeof defaultValue === 'object' && defaultValue !== null)
        ? JSON.parse(JSON.stringify(defaultValue))
        : defaultValue;
    } catch (e) {
      console.warn(`Error reading key ${key} from localStorage:`, e);
      return (typeof defaultValue === 'object' && defaultValue !== null)
        ? JSON.parse(JSON.stringify(defaultValue))
        : defaultValue;
    }
  },

  // Safe JSON setter
  _set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error(`Error saving key ${key} to localStorage:`, e);
      return false;
    }
  },

  // Calculate Rank and level details from XP
  getRankInfo(xp) {
    let currentRank = RANKS[0];
    for (let i = 0; i < RANKS.length; i++) {
      if (xp >= RANKS[i].minXP) {
        currentRank = RANKS[i];
      }
    }
    
    // Level calculation: level 1 + every 100 XP
    const level = Math.floor(xp / 100) + 1;
    const currentTierBaseXP = currentRank.minXP;
    const nextTierXP = currentRank.nextXP;
    let progressPercent = 100;
    
    if (nextTierXP !== null) {
      const xpInTier = xp - currentTierBaseXP;
      const tierSpan = nextTierXP - currentTierBaseXP;
      progressPercent = Math.min(100, Math.max(0, Math.round((xpInTier / tierSpan) * 100)));
    }

    return {
      rank: currentRank.title,
      badge: currentRank.badge,
      level,
      currentXP: xp,
      nextRankXP: nextTierXP,
      progressPercent
    };
  },

  // Profile
  getProfile() {
    const profile = this._get(STORAGE_KEYS.PROFILE, DEFAULT_PROFILE);
    const rankInfo = this.getRankInfo(profile.totalXP);
    return { ...profile, ...rankInfo };
  },

  saveProfile(profileData) {
    const current = this._get(STORAGE_KEYS.PROFILE, DEFAULT_PROFILE);
    const updated = { ...current, ...profileData };
    this._set(STORAGE_KEYS.PROFILE, updated);
    return this.getProfile();
  },

  addXP(amount) {
    const current = this._get(STORAGE_KEYS.PROFILE, DEFAULT_PROFILE);
    current.totalXP = Math.max(0, (current.totalXP || 0) + amount);
    current.level = Math.floor(current.totalXP / 100) + 1;
    this._set(STORAGE_KEYS.PROFILE, current);
    return this.getProfile();
  },

  // Statistics
  getStats() {
    const stats = this._get(STORAGE_KEYS.STATS, DEFAULT_STATS);
    
    // Ensure all metrics are initialized with historical data fallback if needed
    if (stats.totalQuestionsAttempted === undefined || stats.totalQuestionsAttempted === null) {
      const history = this._get(STORAGE_KEYS.HISTORY, []);
      if (Array.isArray(history) && history.length > 0) {
        stats.totalQuestionsAttempted = history.reduce((sum, h) => sum + (h.questionsAttempted || 0), 0);
      } else {
        stats.totalQuestionsAttempted = 0;
      }
    }

    if (stats.totalLifelinesUsed === undefined || stats.totalLifelinesUsed === null) {
      stats.totalLifelinesUsed = 0;
    }

    // Answer Accuracy: total correct answers divided by total attempted questions
    const accuracy = stats.totalQuestionsAttempted > 0
      ? Math.round((stats.totalCorrectAnswers / stats.totalQuestionsAttempted) * 100)
      : 0;

    return {
      ...stats,
      accuracy
    };
  },

  // Increment games played whenever a new match starts
  incrementGamesPlayed() {
    const stats = this._get(STORAGE_KEYS.STATS, DEFAULT_STATS);
    stats.totalGamesPlayed = (stats.totalGamesPlayed || 0) + 1;
    this._set(STORAGE_KEYS.STATS, stats);
    return stats.totalGamesPlayed;
  },

  // Record an answer submission in real time (each question attempt counted once)
  recordAnswerAttempt({ isCorrect }) {
    const stats = this._get(STORAGE_KEYS.STATS, DEFAULT_STATS);
    stats.totalQuestionsAttempted = (stats.totalQuestionsAttempted || 0) + 1;
    if (isCorrect) {
      stats.totalCorrectAnswers = (stats.totalCorrectAnswers || 0) + 1;
    }
    this._set(STORAGE_KEYS.STATS, stats);
    return stats;
  },

  // Increment correct answers (e.g. for Second Chance retry without recounting attempt)
  incrementCorrectAnswers() {
    const stats = this._get(STORAGE_KEYS.STATS, DEFAULT_STATS);
    stats.totalCorrectAnswers = (stats.totalCorrectAnswers || 0) + 1;
    this._set(STORAGE_KEYS.STATS, stats);
    return stats;
  },

  // Increment lifelines counter whenever a lifeline is activated
  incrementLifelinesUsed() {
    const stats = this._get(STORAGE_KEYS.STATS, DEFAULT_STATS);
    stats.totalLifelinesUsed = (stats.totalLifelinesUsed || 0) + 1;
    this._set(STORAGE_KEYS.STATS, stats);
    return stats.totalLifelinesUsed;
  },

  recordGameCompletion({ won, finalQuestion, xpEarned, correctCount, questionsAttempted, mode = 'Standard' }) {
    const stats = this._get(STORAGE_KEYS.STATS, DEFAULT_STATS);
    
    // Total Games Played, Total Questions Attempted, and Total Correct Answers
    // are recorded in real-time as games start and answers are submitted.
    // They are not re-incremented here to avoid double counting.

    if (won) {
      stats.gamesWon = (stats.gamesWon || 0) + 1;
      stats.currentWinStreak = (stats.currentWinStreak || 0) + 1;
      if (stats.currentWinStreak > (stats.bestWinStreak || 0)) {
        stats.bestWinStreak = stats.currentWinStreak;
      }
    } else {
      stats.gamesLost = (stats.gamesLost || 0) + 1;
      stats.currentWinStreak = 0;
    }

    stats.totalXPEarned = (stats.totalXPEarned || 0) + xpEarned;
    stats.highestLevelReached = Math.max(stats.highestLevelReached || 0, finalQuestion);

    this._set(STORAGE_KEYS.STATS, stats);
    this.addXP(xpEarned);

    // Record into History (Preserve Recent Games table unchanged)
    this.addGameHistory({
      date: new Date().toISOString(),
      mode,
      won,
      correctCount,
      questionsAttempted,
      finalQuestion,
      xpEarned
    });

    return this.getStats();
  },

  // Game History
  getGameHistory(limit = 15) {
    const history = this._get(STORAGE_KEYS.HISTORY, []);
    return history.slice(0, limit);
  },

  addGameHistory(entry) {
    const history = this._get(STORAGE_KEYS.HISTORY, []);
    history.unshift({
      id: Date.now(),
      ...entry
    });
    // Keep max 30 entries
    if (history.length > 30) {
      history.length = 30;
    }
    this._set(STORAGE_KEYS.HISTORY, history);
  },

  // Daily Challenge
  getTodayDateKey() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  getDailyChallengeStatus() {
    const todayKey = this.getTodayDateKey();
    const dailyData = this._get(STORAGE_KEYS.DAILY, {});
    return dailyData[todayKey] || null;
  },

  saveDailyChallengeResult({ score, total, xpEarned, answersSummary }) {
    const todayKey = this.getTodayDateKey();
    const dailyData = this._get(STORAGE_KEYS.DAILY, {});
    dailyData[todayKey] = {
      completed: true,
      date: todayKey,
      completedAt: new Date().toISOString(),
      score,
      total,
      xpEarned,
      answersSummary
    };
    this._set(STORAGE_KEYS.DAILY, dailyData);

    const stats = this._get(STORAGE_KEYS.STATS, DEFAULT_STATS);
    stats.totalXPEarned = (stats.totalXPEarned || 0) + xpEarned;
    this._set(STORAGE_KEYS.STATS, stats);
  },

  // Settings
  getSettings() {
    return this._get(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS);
  },

  saveSettings(settings) {
    const current = this.getSettings();
    const updated = { ...current, ...settings };
    this._set(STORAGE_KEYS.SETTINGS, updated);
    return updated;
  },

  // Question History Management (Avoid repeats across consecutive games)
  getRecentPlayedQuestionGames() {
    const list = this._get(STORAGE_KEYS.PLAYED_QUESTIONS, []);
    return Array.isArray(list) ? list : [];
  },

  recordPlayedQuestions(questionIds) {
    if (!Array.isArray(questionIds) || questionIds.length === 0) return;
    const currentList = this.getRecentPlayedQuestionGames();
    // Keep up to the last 2 completed games
    const updated = [questionIds, ...currentList].slice(0, 2);
    this._set(STORAGE_KEYS.PLAYED_QUESTIONS, updated);
  },

  clearPlayedQuestionsHistory() {
    try {
      localStorage.removeItem(STORAGE_KEYS.PLAYED_QUESTIONS);
    } catch (e) {
      console.warn('Could not clear played questions history:', e);
    }
  },

  // Reset all data
  resetAllData() {
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.STATS);
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
    localStorage.removeItem(STORAGE_KEYS.DAILY);
    localStorage.removeItem(STORAGE_KEYS.PLAYED_QUESTIONS);
    // Keep settings (e.g. sound preference) or reset as well
    return true;
  }
};

if (typeof window !== 'undefined') {
  window.StorageManager = StorageManager;
}

