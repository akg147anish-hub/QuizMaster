/**
 * QuizMaster - Lifeline System
 * Manages 50:50, Brain Hint, and Second Chance lifelines.
 * Exactly three lifelines, usable once per game session.
 */

const LifelineManager = {
  state: {
    fiftyFifty: false,     // true if used
    brainHint: false,      // true if used
    secondChance: false,   // true if used
    secondChanceActive: false // true if shield is currently armed for the question
  },

  reset() {
    this.state = {
      fiftyFifty: false,
      brainHint: false,
      secondChance: false,
      secondChanceActive: false
    };
    this.updateUI();
  },

  isAvailable(lifelineName) {
    return !this.state[lifelineName];
  },

  // 1. 50:50 Lifeline
  useFiftyFifty(question) {
    if (this.state.fiftyFifty) return null;

    const correctIndex = question.correctAnswer;
    const incorrectIndices = [0, 1, 2, 3].filter(idx => idx !== correctIndex);

    // Shuffle incorrect indices and pick 2 to remove
    const shuffledIncorrect = [...incorrectIndices].sort(() => Math.random() - 0.5);
    const toRemove = [shuffledIncorrect[0], shuffledIncorrect[1]];

    this.state.fiftyFifty = true;
    if (window.StorageManager && window.StorageManager.incrementLifelinesUsed) {
      window.StorageManager.incrementLifelinesUsed();
    }
    if (window.SoundManager) {
      window.SoundManager.playLifeline();
    }
    this.updateUI();

    return {
      removedIndices: toRemove,
      keptIndices: [correctIndex, shuffledIncorrect[2]]
    };
  },

  // 2. Brain Hint Lifeline
  useBrainHint(question) {
    if (this.state.brainHint) return null;

    this.state.brainHint = true;
    if (window.StorageManager && window.StorageManager.incrementLifelinesUsed) {
      window.StorageManager.incrementLifelinesUsed();
    }
    if (window.SoundManager) {
      window.SoundManager.playLifeline();
    }
    this.updateUI();

    return {
      hint: question.hint,
      category: question.category
    };
  },

  // 3. Second Chance Lifeline
  useSecondChance() {
    if (this.state.secondChance) return false;

    this.state.secondChance = true;
    this.state.secondChanceActive = true;
    if (window.StorageManager && window.StorageManager.incrementLifelinesUsed) {
      window.StorageManager.incrementLifelinesUsed();
    }

    if (window.SoundManager) {
      window.SoundManager.playShield();
    }
    this.updateUI();

    return true;
  },

  consumeSecondChance() {
    this.state.secondChanceActive = false;
    this.updateUI();
  },

  isSecondChanceArmed() {
    return this.state.secondChanceActive;
  },

  // Sync DOM buttons with current state
  updateUI() {
    if (typeof document === 'undefined') return;
    const btn5050 = document.getElementById('lifeline-5050');
    const btnHint = document.getElementById('lifeline-hint');
    const btnSecondChance = document.getElementById('lifeline-second-chance');

    if (btn5050) {
      if (this.state.fiftyFifty) {
        btn5050.classList.add('used');
        btn5050.disabled = true;
        btn5050.setAttribute('title', '50:50 (Used)');
      } else {
        btn5050.classList.remove('used');
        btn5050.disabled = false;
        btn5050.setAttribute('title', '50:50 - Remove two incorrect options');
      }
    }

    if (btnHint) {
      if (this.state.brainHint) {
        btnHint.classList.add('used');
        btnHint.disabled = true;
        btnHint.setAttribute('title', 'Brain Hint (Used)');
      } else {
        btnHint.classList.remove('used');
        btnHint.disabled = false;
        btnHint.setAttribute('title', 'Brain Hint - Receive an insightful clue');
      }
    }

    if (btnSecondChance) {
      if (this.state.secondChance) {
        btnSecondChance.classList.add('used');
        btnSecondChance.disabled = true;
        btnSecondChance.setAttribute('title', 'Second Chance (Used)');
      } else {
        btnSecondChance.classList.remove('used');
        btnSecondChance.disabled = false;
        btnSecondChance.setAttribute('title', 'Second Chance - Retry if your answer is incorrect');
      }

      if (this.state.secondChanceActive) {
        btnSecondChance.classList.add('active-shield');
      } else {
        btnSecondChance.classList.remove('active-shield');
      }
    }
  }
};

if (typeof window !== 'undefined') {
  window.LifelineManager = LifelineManager;
}