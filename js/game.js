/**
 * QuizMaster - Core Game Engine
 * Manages game sessions, question queues, answer evaluation,
 * lifelines, difficulty progression, and state transitions.
 */

const GameEngine = {
  mode: 'standard', // 'standard' (15 Qs) or 'daily' (5 Qs)
  questions: [],
  currentIndex: 0,
  currentQuestion: null,
  selectedOptionIndex: null,
  isLocked: false,
  isAnswerSubmitted: false,
  hasCountedAttemptForCurrentQuestion: false,
  gameActive: false,
  sessionXP: 0,
  sessionCorrect: 0,
  sessionHistory: [], // records each question result
  activeEliminatedOptions: [],

  // XP Tier mapping based on question difficulty
  DIFFICULTY_XP: {
    'Easy': 10,
    'Medium': 20,
    'Hard': 30,
    'Very Hard': 40,
    'Extreme': 50
  },

  // Determine if a question is timed (Q1-Q10 = 45s timer; Q11-Q15 = No timer)
  isTimedQuestion(index = this.currentIndex) {
    if (this.mode === 'daily') return true; // Daily Challenge has 5 questions (Q1-Q5, all timed)
    return index < 10; // Q1 to Q10 (indices 0 to 9) are timed; Q11 to Q15 are untimed
  },

  // Reset all game state variables and UI controls for a fresh match
  resetGameStateForNewGame() {
    // 1. Completely stop and clear any active timer
    if (window.TimerManager) {
      window.TimerManager.stop();
    }

    // 2. Reset engine internal states
    this.currentIndex = 0;
    this.currentQuestion = null;
    this.selectedOptionIndex = null;
    this.isLocked = false;
    this.isAnswerSubmitted = false;
    this.hasCountedAttemptForCurrentQuestion = false;
    this.gameActive = true;
    this.sessionXP = 0;
    this.sessionCorrect = 0;
    this.sessionHistory = [];
    this.activeEliminatedOptions = [];

    // 3. Reset Lifelines
    if (window.LifelineManager) {
      window.LifelineManager.reset();
    }

    // 4. Force Reset Action Buttons Visibility & State
    const lockBtn = document.getElementById('btn-lock-answer');
    if (lockBtn) {
      lockBtn.style.display = 'inline-flex';
      lockBtn.disabled = true;
      lockBtn.classList.remove('active');
      lockBtn.innerHTML = `<span>Lock Answer</span> <span class="lock-icon">🔒</span>`;
    }

    const nextBtn = document.getElementById('btn-next-question');
    if (nextBtn) {
      nextBtn.style.display = 'none';
      nextBtn.onclick = null;
    }

    // 5. Reset Explanation Card
    const explPanel = document.getElementById('explanation-card');
    if (explPanel) {
      explPanel.className = 'explanation-card';
      explPanel.classList.remove('visible', 'card-success', 'card-failure', 'shield-alert');
      explPanel.innerHTML = '';
    }

    // 6. Reset Second Chance Indicator Badge if present
    const scBadge = document.getElementById('second-chance-indicator');
    if (scBadge) {
      scBadge.classList.remove('active');
    }

    // 7. Reset Progress Bar
    const progBar = document.getElementById('game-progress-fill');
    if (progBar) {
      progBar.style.width = '0%';
    }
  },

  // Setup and start a standard 15-question game
  startStandardGame() {
    this.resetGameStateForNewGame();
    this.mode = 'standard';

    // Update Total Games Played whenever a new game starts
    if (window.StorageManager && window.StorageManager.incrementGamesPlayed) {
      window.StorageManager.incrementGamesPlayed();
    }

    // Build the 15-question deck with strict progressive difficulty, mixed topics,
    // and avoidance of questions used in the last 2 completed games.
    this.questions = this.buildStandardDeck();

    // Store question IDs in Local Storage history so consecutive games avoid them
    if (window.StorageManager) {
      window.StorageManager.recordPlayedQuestions(this.questions.map(q => q.id));
    }

    this.loadQuestion(0);
  },

  // Setup and start a 5-question Daily Challenge
  startDailyChallenge() {
    const todayStatus = window.StorageManager ? window.StorageManager.getDailyChallengeStatus() : null;
    if (todayStatus && todayStatus.completed) {
      alert('You have already completed today\'s Daily Challenge! Check back tomorrow.');
      return false;
    }

    this.resetGameStateForNewGame();
    this.mode = 'daily';

    // Update Total Games Played whenever a new game starts
    if (window.StorageManager && window.StorageManager.incrementGamesPlayed) {
      window.StorageManager.incrementGamesPlayed();
    }

    this.questions = this.buildDailyDeck();
    this.loadQuestion(0);
    return true;
  },

  // Build a deck of 15 questions with:
  // - Progressive difficulty (3 Easy, 3 Medium, 3 Hard, 3 Very Hard, 3 Extreme)
  // - Avoid repeating questions from the last 2 completed games when enough questions available
  // - Prioritize questions not used in the immediately previous game
  // - Randomize mixed topics
  // - Zero duplicates within the same game
  // - Graceful fallback if pool is constrained so no empty question can ever occur
  buildStandardDeck() {
    const all = window.QUIZ_QUESTIONS || [];
    const usedIds = new Set();
    const deck = [];

    // Retrieve past 2 games' question IDs from LocalStorage
    const recentGames = window.StorageManager ? window.StorageManager.getRecentPlayedQuestionGames() : [];
    const lastGameIds = new Set(recentGames[0] || []);
    const twoGamesAgoIds = new Set(recentGames[1] || []);
    const last2GamesIds = new Set([...lastGameIds, ...twoGamesAgoIds]);

    const tiers = [
      { diff: 'Easy', count: 3 },
      { diff: 'Medium', count: 3 },
      { diff: 'Hard', count: 3 },
      { diff: 'Very Hard', count: 3 },
      { diff: 'Extreme', count: 3 }
    ];

    tiers.forEach(tier => {
      // 1. All candidates for this tier not already picked in the current game
      const tierCandidates = all.filter(q => q.difficulty === tier.diff && !usedIds.has(q.id));

      // Partition candidates by past history priority:
      // Priority 1 (Fresh): Not played in the last 2 completed games
      const poolFresh = tierCandidates.filter(q => !last2GamesIds.has(q.id));

      // Priority 2 (Two games ago): Played 2 games ago, but NOT in the immediately previous game
      const poolTwoGamesAgo = tierCandidates.filter(q => twoGamesAgoIds.has(q.id) && !lastGameIds.has(q.id));

      // Priority 3 (Last resort): Played in the immediately previous game
      const poolImmediatePrevious = tierCandidates.filter(q => lastGameIds.has(q.id));

      // Helper to pick n questions with topic diversification
      const pickFromPool = (pool, countNeeded, pickedArray) => {
        if (countNeeded <= 0 || pool.length === 0) return 0;
        const shuffled = this.shuffleArray([...pool]);
        const usedCategoriesInTier = new Set(pickedArray.map(q => q.category));
        let added = 0;

        // First pass: pick distinct categories
        for (const q of shuffled) {
          if (added >= countNeeded) break;
          if (!usedIds.has(q.id) && !usedCategoriesInTier.has(q.category)) {
            pickedArray.push(q);
            usedIds.add(q.id);
            usedCategoriesInTier.add(q.category);
            added++;
          }
        }

        // Second pass: fill remaining slots from pool if distinct categories exhausted
        if (added < countNeeded) {
          for (const q of shuffled) {
            if (added >= countNeeded) break;
            if (!usedIds.has(q.id)) {
              pickedArray.push(q);
              usedIds.add(q.id);
              added++;
            }
          }
        }

        return added;
      };

      const pickedForTier = [];
      let needed = tier.count;

      // 1. Try filling from Priority 1 (Fresh - avoiding last 2 games)
      const addedFromFresh = pickFromPool(poolFresh, needed, pickedForTier);
      needed -= addedFromFresh;

      // 2. If needed, fall back to Priority 2 (played 2 games ago, but NOT immediately previous game)
      if (needed > 0) {
        const addedFromTwoAgo = pickFromPool(poolTwoGamesAgo, needed, pickedForTier);
        needed -= addedFromTwoAgo;
      }

      // 3. If still needed (edge case where entire category pool exhausted), fall back to Priority 3
      if (needed > 0) {
        pickFromPool(poolImmediatePrevious, needed, pickedForTier);
      }

      deck.push(...pickedForTier);
    });

    return deck;
  },

  // Build 5 questions for Daily Challenge using date as seed
  buildDailyDeck() {
    const all = window.QUIZ_QUESTIONS || [];
    const todayStr = window.StorageManager ? window.StorageManager.getTodayDateKey() : '2026-11-19';

    // Simple hash function for date string
    let seed = 0;
    for (let i = 0; i < todayStr.length; i++) {
      seed = (seed * 31 + todayStr.charCodeAt(i)) % 100000;
    }

    // Pseudo-random generator using seed
    const pseudoRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    // Pick 1 from each difficulty tier or balanced mix
    const diffSequence = ['Easy', 'Medium', 'Medium', 'Hard', 'Very Hard'];
    const deck = [];
    const usedIds = new Set();

    diffSequence.forEach(diff => {
      const pool = all.filter(q => q.difficulty === diff && !usedIds.has(q.id));
      const sortedPool = [...pool].sort((a, b) => pseudoRandom() - 0.5);
      const chosen = sortedPool[0] || pool[0];
      if (chosen) {
        deck.push(chosen);
        usedIds.add(chosen.id);
      }
    });

    return deck;
  },

  shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  },

  // Load a question into the view
  loadQuestion(index) {
    if (index >= this.questions.length) {
      // Completed all questions in the deck -> Victory!
      this.handleVictory();
      return;
    }

    // Always completely stop and clear any active timer before loading next question
    if (window.TimerManager) {
      window.TimerManager.stop();
    }

    this.currentIndex = index;
    this.currentQuestion = this.questions[index];
    this.selectedOptionIndex = null;
    this.isLocked = false;
    this.isAnswerSubmitted = false;
    this.hasCountedAttemptForCurrentQuestion = false;
    this.activeEliminatedOptions = [];

    // Render Question in UI
    this.renderQuestionUI();

    // Timer logic: Q1 to Q10 are timed (45s). Q11 to Q15 are untimed (unlimited time).
    const timerWidget = document.getElementById('timer-widget');
    const untimedBadge = document.getElementById('untimed-badge');

    if (this.isTimedQuestion(index)) {
      if (timerWidget) timerWidget.style.display = 'flex';
      if (untimedBadge) untimedBadge.style.display = 'none';

      // Start 45s Timer for Q1-Q10
      if (window.TimerManager) {
        window.TimerManager.start(45, {
          onTick: (secs, pct) => this.updateTimerDisplay(secs, pct),
          onWarning: (secs) => this.showTimerWarning(secs),
          onCritical: (secs) => this.showTimerCritical(secs),
          onTimeout: () => this.handleTimeout()
        });
      }
    } else {
      // Q11 to Q15: Completely untimed
      if (timerWidget) timerWidget.style.display = 'none';
      if (untimedBadge) untimedBadge.style.display = 'flex';
      // TimerManager stays stopped, no interval running, no timeout possible
    }
  },

  // Render question card, options, indicators
  renderQuestionUI() {
    const q = this.currentQuestion;
    const totalQuestions = this.questions.length;
    const qNumber = this.currentIndex + 1;

    // Topic badge
    const badgeEl = document.getElementById('question-category-badge');
    if (badgeEl) {
      badgeEl.textContent = q.category.toUpperCase();
    }

    // Question number & count
    const qNumEl = document.getElementById('current-question-num');
    if (qNumEl) {
      qNumEl.textContent = qNumber;
    }
    const qTotalEl = document.getElementById('total-question-num');
    if (qTotalEl) {
      qTotalEl.textContent = totalQuestions;
    }

    // Difficulty badge
    const diffBadge = document.getElementById('difficulty-badge');
    if (diffBadge) {
      diffBadge.textContent = q.difficulty;
      diffBadge.className = `difficulty-pill diff-${q.difficulty.toLowerCase().replace(' ', '-')}`;
    }

    // XP value badge
    const xpBadge = document.getElementById('question-xp-badge');
    const xpForThis = this.DIFFICULTY_XP[q.difficulty] || 10;
    if (xpBadge) {
      xpBadge.textContent = `+${xpForThis} XP`;
    }

    // Question text
    const textEl = document.getElementById('question-text');
    if (textEl) {
      textEl.textContent = q.question;
      // Animate question appearance
      textEl.classList.remove('fade-in');
      void textEl.offsetWidth; // trigger reflow
      textEl.classList.add('fade-in');
    }

    // Options rendering
    const container = document.getElementById('options-container');
    if (container) {
      container.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      q.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.dataset.index = idx;
        btn.innerHTML = `
          <span class="option-badge">${letters[idx]}</span>
          <span class="option-text">${optText}</span>
          <span class="option-state-icon"></span>
        `;
        btn.addEventListener('click', () => this.selectOption(idx));
        container.appendChild(btn);
      });
    }

    // Reset Lock Button & Explanation Panel
    const lockBtn = document.getElementById('btn-lock-answer');
    if (lockBtn) {
      lockBtn.style.display = 'inline-flex';
      lockBtn.disabled = true;
      lockBtn.classList.remove('active');
      lockBtn.innerHTML = `<span>Lock Answer</span> <span class="lock-icon">🔒</span>`;
    }

    const explPanel = document.getElementById('explanation-card');
    if (explPanel) {
      explPanel.className = 'explanation-card';
      explPanel.classList.remove('visible', 'card-success', 'card-failure', 'shield-alert');
      explPanel.innerHTML = '';
    }

    const nextBtn = document.getElementById('btn-next-question');
    if (nextBtn) {
      nextBtn.style.display = 'none';
      nextBtn.onclick = null;
    }

    // Update progress bar
    const progBar = document.getElementById('game-progress-fill');
    if (progBar) {
      const pct = (qNumber / totalQuestions) * 100;
      progBar.style.width = `${pct}%`;
    }
  },

  // Player clicks an answer option
  selectOption(idx) {
    if (this.isLocked || this.activeEliminatedOptions.includes(idx)) return;

    this.selectedOptionIndex = idx;
    if (window.SoundManager) {
      window.SoundManager.playSelect();
    }

    // Update visual selection
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
      const bIdx = parseInt(btn.dataset.index, 10);
      if (bIdx === idx) {
        btn.classList.add('selected');
      } else {
        btn.classList.remove('selected');
      }
    });

    // Enable Lock button and ensure it is visible
    const lockBtn = document.getElementById('btn-lock-answer');
    if (lockBtn) {
      lockBtn.style.display = 'inline-flex';
      lockBtn.disabled = false;
      lockBtn.classList.add('active');
    }
  },

  // Player confirms and locks the selected answer
  confirmAnswer() {
    if (this.selectedOptionIndex === null || this.isLocked) return;

    this.isLocked = true;
    if (window.SoundManager) {
      window.SoundManager.playLock();
    }

    // Stop Timer
    if (window.TimerManager) {
      window.TimerManager.stop();
    }

    // Disable option buttons from clicking
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => btn.classList.add('locked'));

    const lockBtn = document.getElementById('btn-lock-answer');
    if (lockBtn) {
      lockBtn.disabled = true;
      lockBtn.classList.remove('active');
    }

    // Check correctness
    const q = this.currentQuestion;
    const isCorrect = this.selectedOptionIndex === q.correctAnswer;
    const selectedBtn = document.querySelector(`.option-btn[data-index="${this.selectedOptionIndex}"]`);

    // Record attempted question and correct answer in real-time storage
    // Every submitted answer is counted once; Second Chance retry only increments correct answer if right
    if (!this.hasCountedAttemptForCurrentQuestion) {
      this.hasCountedAttemptForCurrentQuestion = true;
      if (window.StorageManager && window.StorageManager.recordAnswerAttempt) {
        window.StorageManager.recordAnswerAttempt({ isCorrect });
      }
    } else if (isCorrect) {
      if (window.StorageManager && window.StorageManager.incrementCorrectAnswers) {
        window.StorageManager.incrementCorrectAnswers();
      }
    }

    if (isCorrect) {
      this.handleCorrectAnswer(selectedBtn);
    } else {
      // Check if Second Chance lifeline is armed
      if (window.LifelineManager && window.LifelineManager.isSecondChanceArmed()) {
        this.handleSecondChanceProtection(selectedBtn);
      } else {
        this.handleWrongAnswer(selectedBtn);
      }
    }
  },

  // Handlers
  handleCorrectAnswer(selectedBtn) {
    this.sessionCorrect += 1;
    const q = this.currentQuestion;
    const xpWon = this.DIFFICULTY_XP[q.difficulty] || 10;
    this.sessionXP += xpWon;

    if (selectedBtn) {
      selectedBtn.classList.add('correct');
      const icon = selectedBtn.querySelector('.option-state-icon');
      if (icon) icon.innerHTML = '✓';
    }

    if (window.SoundManager) {
      window.SoundManager.playCorrect();
    }

    // Record in run history
    this.sessionHistory.push({
      questionNumber: this.currentIndex + 1,
      category: q.category,
      question: q.question,
      options: q.options,
      selectedAnswer: this.selectedOptionIndex,
      correctAnswer: q.correctAnswer,
      isCorrect: true,
      isTimeout: false,
      xpAwarded: xpWon,
      explanation: q.explanation
    });

    // Reveal Explanation Card & Next Question button
    this.showExplanationCard(true, xpWon);
  },

  handleSecondChanceProtection(selectedBtn) {
    if (window.LifelineManager) {
      window.LifelineManager.consumeSecondChance();
    }

    if (selectedBtn) {
      selectedBtn.classList.add('wrong-shielded');
      const icon = selectedBtn.querySelector('.option-state-icon');
      if (icon) icon.innerHTML = '🛡️ ✗';
    }

    // Mark this option as eliminated so player cannot pick it again
    this.activeEliminatedOptions.push(this.selectedOptionIndex);
    this.selectedOptionIndex = null;
    this.isLocked = false; // Allow another attempt!

    // Show temporary shield banner
    const explPanel = document.getElementById('explanation-card');
    if (explPanel) {
      explPanel.className = 'explanation-card visible shield-alert';
      explPanel.innerHTML = `
        <div class="shield-notice">
          <span class="shield-icon">🛡️</span>
          <div class="shield-text">
            <strong>Second Chance Shield Activated!</strong>
            <p>That option was incorrect. Choose another answer and lock it in!</p>
          </div>
        </div>
      `;
    }

    // Resume timer for the second chance attempt only if question is timed
    if (this.isTimedQuestion() && window.TimerManager) {
      window.TimerManager.resume();
    }
  },

  handleWrongAnswer(selectedBtn) {
    const q = this.currentQuestion;

    if (selectedBtn) {
      selectedBtn.classList.add('wrong');
      const icon = selectedBtn.querySelector('.option-state-icon');
      if (icon) icon.innerHTML = '✗';
    }

    // Reveal correct option
    const correctBtn = document.querySelector(`.option-btn[data-index="${q.correctAnswer}"]`);
    if (correctBtn) {
      correctBtn.classList.add('revealed-correct');
      const cIcon = correctBtn.querySelector('.option-state-icon');
      if (cIcon) cIcon.innerHTML = '✓';
    }

    if (window.SoundManager) {
      window.SoundManager.playWrong();
    }

    // Record in run history
    this.sessionHistory.push({
      questionNumber: this.currentIndex + 1,
      category: q.category,
      question: q.question,
      options: q.options,
      selectedAnswer: this.selectedOptionIndex,
      correctAnswer: q.correctAnswer,
      isCorrect: false,
      isTimeout: false,
      xpAwarded: 0,
      explanation: q.explanation
    });

    // Show explanation card with Game Over button
    this.showExplanationCard(false, 0);
  },

  handleTimeout() {
    if (this.isLocked) return;
    this.isLocked = true;

    const q = this.currentQuestion;
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => btn.classList.add('locked'));

    // Reveal correct option
    const correctBtn = document.querySelector(`.option-btn[data-index="${q.correctAnswer}"]`);
    if (correctBtn) {
      correctBtn.classList.add('revealed-correct');
      const cIcon = correctBtn.querySelector('.option-state-icon');
      if (cIcon) cIcon.innerHTML = '✓';
    }

    // Record in history
    this.sessionHistory.push({
      questionNumber: this.currentIndex + 1,
      category: q.category,
      question: q.question,
      options: q.options,
      selectedAnswer: null,
      correctAnswer: q.correctAnswer,
      isCorrect: false,
      isTimeout: true,
      xpAwarded: 0,
      explanation: q.explanation
    });

    this.showTimeoutCard();
  },

  // Display Educational Explanation Card
  showExplanationCard(isCorrect, xpWon) {
    const explPanel = document.getElementById('explanation-card');
    const q = this.currentQuestion;
    if (!explPanel) return;

    explPanel.className = `explanation-card visible ${isCorrect ? 'card-success' : 'card-failure'}`;
    explPanel.innerHTML = `
      <div class="explanation-header">
        <span class="expl-status-pill">${isCorrect ? '✨ CORRECT ANSWER' : '❌ INCORRECT'}</span>
        ${isCorrect ? `<span class="expl-xp-reward">+${xpWon} XP</span>` : ''}
      </div>
      <p class="explanation-text">${q.explanation}</p>
    `;

    // Show appropriate continue / game-over button
    const actionContainer = document.getElementById('game-action-buttons');
    const lockBtn = document.getElementById('btn-lock-answer');
    if (lockBtn) lockBtn.style.display = 'none';

    const nextBtn = document.getElementById('btn-next-question');
    if (nextBtn) {
      nextBtn.style.display = 'inline-flex';
      if (isCorrect) {
        const isFinal = this.currentIndex + 1 >= this.questions.length;
        nextBtn.innerHTML = isFinal
          ? `<span>Claim Victory!</span> <i class="icon-trophy">👑</i>`
          : `<span>Next Question</span> <i class="icon-arrow">➔</i>`;
        nextBtn.className = 'btn-gold primary-action-btn';
        nextBtn.onclick = () => {
          lockBtn.style.display = 'inline-flex';
          nextBtn.style.display = 'none';
          this.loadQuestion(this.currentIndex + 1);
        };
      } else {
        nextBtn.innerHTML = `<span>View Results</span> <i class="icon-results">📊</i>`;
        nextBtn.className = 'btn-crimson primary-action-btn';
        nextBtn.onclick = () => {
          this.handleGameOver();
        };
      }
    }
  },

  // Display Timeout Notification
  showTimeoutCard() {
    const explPanel = document.getElementById('explanation-card');
    const q = this.currentQuestion;
    if (!explPanel) return;

    explPanel.className = 'explanation-card visible card-failure';
    explPanel.innerHTML = `
      <div class="explanation-header">
        <span class="expl-status-pill">⏱️ TIME'S UP!</span>
      </div>
      <p class="explanation-text">${q.explanation}</p>
    `;

    const lockBtn = document.getElementById('btn-lock-answer');
    if (lockBtn) lockBtn.style.display = 'none';

    const nextBtn = document.getElementById('btn-next-question');
    if (nextBtn) {
      nextBtn.style.display = 'inline-flex';
      nextBtn.innerHTML = `<span>View Results</span> <i class="icon-results">📊</i>`;
      nextBtn.className = 'btn-crimson primary-action-btn';
      nextBtn.onclick = () => {
        this.handleGameOver();
      };
    }
  },

  // Victory: all 15 questions answered correctly!
  handleVictory() {
    this.gameActive = false;
    if (window.TimerManager) window.TimerManager.stop();

    // Bonus 100 XP for complete mastery
    const bonusXP = this.mode === 'daily' ? 50 : 100;
    this.sessionXP += bonusXP;

    if (window.SoundManager) {
      window.SoundManager.playVictory();
    }

    // Persist stats
    if (window.StorageManager) {
      if (this.mode === 'standard') {
        window.StorageManager.recordGameCompletion({
          won: true,
          finalQuestion: 15,
          xpEarned: this.sessionXP,
          correctCount: this.sessionCorrect,
          questionsAttempted: 15,
          mode: 'Standard'
        });
      } else {
        window.StorageManager.saveDailyChallengeResult({
          score: this.sessionCorrect,
          total: this.questions.length,
          xpEarned: this.sessionXP,
          answersSummary: this.sessionHistory
        });
        window.StorageManager.addXP(this.sessionXP);
      }
    }

    if (window.ResultsManager) {
      window.ResultsManager.showVictoryScreen({
        mode: this.mode,
        totalQuestions: this.questions.length,
        correctCount: this.sessionCorrect,
        xpEarned: this.sessionXP,
        bonusXP,
        history: this.sessionHistory
      });
    }
  },

  // Game Over: incorrect answer or timeout
  handleGameOver() {
    this.gameActive = false;
    if (window.TimerManager) window.TimerManager.stop();

    if (window.SoundManager) {
      window.SoundManager.playGameOver();
    }

    const finalQNum = this.currentIndex + 1;
    const questionsAttempted = this.sessionHistory.length;

    // Persist stats
    if (window.StorageManager) {
      if (this.mode === 'standard') {
        window.StorageManager.recordGameCompletion({
          won: false,
          finalQuestion: finalQNum,
          xpEarned: this.sessionXP,
          correctCount: this.sessionCorrect,
          questionsAttempted,
          mode: 'Standard'
        });
      } else {
        window.StorageManager.saveDailyChallengeResult({
          score: this.sessionCorrect,
          total: this.questions.length,
          xpEarned: this.sessionXP,
          answersSummary: this.sessionHistory
        });
        window.StorageManager.addXP(this.sessionXP);
      }
    }

    const fatalQuestionData = this.sessionHistory[this.sessionHistory.length - 1];

    if (window.ResultsManager) {
      window.ResultsManager.showGameOverScreen({
        mode: this.mode,
        finalQuestion: finalQNum,
        totalQuestions: this.questions.length,
        correctCount: this.sessionCorrect,
        xpEarned: this.sessionXP,
        fatalQuestion: fatalQuestionData,
        history: this.sessionHistory
      });
    }
  },

  // Lifeline trigger: 50:50
  triggerFiftyFifty() {
    if (!this.gameActive || this.isLocked || !window.LifelineManager) return;
    const result = window.LifelineManager.useFiftyFifty(this.currentQuestion);
    if (!result) return;

    this.activeEliminatedOptions.push(...result.removedIndices);

    result.removedIndices.forEach(idx => {
      const btn = document.querySelector(`.option-btn[data-index="${idx}"]`);
      if (btn) {
        btn.classList.add('eliminated');
        btn.disabled = true;
      }
    });
  },

  // Lifeline trigger: Brain Hint
  triggerBrainHint() {
    if (!this.gameActive || this.isLocked || !window.LifelineManager) return;
    const hintData = window.LifelineManager.useBrainHint(this.currentQuestion);
    if (!hintData) return;

    const modal = document.getElementById('modal-hint');
    const textEl = document.getElementById('hint-modal-text');
    const catEl = document.getElementById('hint-modal-category');

    if (modal && textEl) {
      textEl.textContent = hintData.hint;
      if (catEl) catEl.textContent = hintData.category;
      modal.classList.add('visible');
    }
  },

  // Lifeline trigger: Second Chance
  triggerSecondChance() {
    if (!this.gameActive || this.isLocked || !window.LifelineManager) return;
    const armed = window.LifelineManager.useSecondChance();
    if (!armed) return;

    // Show indicator badge in HUD
    const badge = document.getElementById('second-chance-indicator');
    if (badge) {
      badge.classList.add('active');
    }
  },

  // Timer visual updates
  updateTimerDisplay(secondsLeft, percent) {
    const textEl = document.getElementById('timer-seconds-text');
    if (textEl) {
      textEl.textContent = secondsLeft;
    }

    const ringEl = document.getElementById('timer-svg-circle');
    if (ringEl) {
      const radius = ringEl.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (percent / 100) * circumference;
      ringEl.style.strokeDashoffset = offset;
    }

    const timerWrapper = document.getElementById('timer-widget');
    if (timerWrapper) {
      if (secondsLeft > 15) {
        timerWrapper.className = 'timer-widget timer-normal';
      } else if (secondsLeft > 5) {
        timerWrapper.className = 'timer-widget timer-warning';
      } else {
        timerWrapper.className = 'timer-widget timer-critical';
      }
    }
  },

  showTimerWarning(secs) {
    const timerWrapper = document.getElementById('timer-widget');
    if (timerWrapper) {
      timerWrapper.classList.add('pulse-warning');
    }
  },

  showTimerCritical(secs) {
    const timerWrapper = document.getElementById('timer-widget');
    if (timerWrapper) {
      timerWrapper.classList.add('pulse-critical');
    }
  }
};

if (typeof window !== 'undefined') {
  window.GameEngine = GameEngine;
}
