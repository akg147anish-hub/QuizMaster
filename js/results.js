/**
 * QuizMaster - Results & Review Manager
 * Handles Victory Screen, Game Over Screen, and Detailed Question Review.
 */

const ResultsManager = {
  lastSessionData: null,
  currentReviewFilter: 'all',

  // Show Game Over Screen
  showGameOverScreen(data) {
    this.lastSessionData = data;

    // Switch view
    if (window.App) {
      window.App.switchScreen('gameover-screen');
    }

    const accuracy = data.history.length > 0
      ? Math.round((data.correctCount / data.history.length) * 100)
      : 0;
    const incorrectCount = data.history.length - data.correctCount;

    // Populate stat elements
    const finalLevelEl = document.getElementById('gameover-final-level');
    if (finalLevelEl) {
      finalLevelEl.textContent = `Question ${data.finalQuestion} of ${data.totalQuestions}`;
    }

    const correctEl = document.getElementById('gameover-correct');
    if (correctEl) correctEl.textContent = data.correctCount;

    const wrongEl = document.getElementById('gameover-wrong');
    if (wrongEl) wrongEl.textContent = incorrectCount;

    const xpEl = document.getElementById('gameover-xp');
    if (xpEl) xpEl.textContent = `+${data.xpEarned} XP`;

    const accuracyEl = document.getElementById('gameover-accuracy');
    if (accuracyEl) accuracyEl.textContent = `${accuracy}%`;

    // Populate fatal question card
    const fatalCard = document.getElementById('fatal-question-card');
    if (fatalCard && data.fatalQuestion) {
      const fq = data.fatalQuestion;
      const letters = ['A', 'B', 'C', 'D'];
      const playerChoiceText = fq.selectedAnswer !== null 
        ? `${letters[fq.selectedAnswer]}: ${fq.options[fq.selectedAnswer]}`
        : '⏱️ None (Time Expired)';
      const correctChoiceText = `${letters[fq.correctAnswer]}: ${fq.options[fq.correctAnswer]}`;

      fatalCard.innerHTML = `
        <div class="fatal-header">
          <span class="fatal-badge">THE DECISIVE QUESTION</span>
          <span class="topic-pill">${fq.category}</span>
        </div>
        <h4 class="fatal-q-text">${fq.question}</h4>
        <div class="fatal-answers-comparison">
          <div class="answer-box answer-user">
            <span class="box-label">Your Answer:</span>
            <span class="box-value">${playerChoiceText}</span>
          </div>
          <div class="answer-box answer-correct">
            <span class="box-label">Correct Answer:</span>
            <span class="box-value">${correctChoiceText}</span>
          </div>
        </div>
        <div class="fatal-explanation">
          <strong>Key Insight:</strong>
          <p>${fq.explanation}</p>
        </div>
      `;
    }
  },

  // Show Victory Screen
  showVictoryScreen(data) {
    this.lastSessionData = data;

    // Switch view
    if (window.App) {
      window.App.switchScreen('victory-screen');
    }

    // Populate victory statistics
    const xpEl = document.getElementById('victory-xp-earned');
    if (xpEl) xpEl.textContent = `+${data.xpEarned} XP`;

    const correctEl = document.getElementById('victory-correct-count');
    if (correctEl) correctEl.textContent = `${data.correctCount}/${data.totalQuestions}`;

    const accEl = document.getElementById('victory-accuracy');
    if (accEl) accEl.textContent = '100%';

    const bonusEl = document.getElementById('victory-bonus-xp');
    if (bonusEl) bonusEl.textContent = `+${data.bonusXP} XP Victory Bonus included!`;

    // Launch celebratory confetti
    this.triggerVictoryCelebration();
  },

  // Confetti celebration animation using DOM particles
  triggerVictoryCelebration() {
    const container = document.getElementById('victory-confetti-container');
    if (!container) return;

    container.innerHTML = '';
    const colors = ['#f5c542', '#ffd700', '#10b981', '#34d399', '#ffffff', '#e5c158'];

    for (let i = 0; i < 70; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = `${Math.random() * 2}s`;
      piece.style.animationDuration = `${2.5 + Math.random() * 2.5}s`;
      piece.style.transform = `scale(${0.5 + Math.random() * 0.8})`;
      container.appendChild(piece);
    }
  },

  // Answer Review System
  openReviewScreen() {
    if (!this.lastSessionData || !this.lastSessionData.history) return;

    if (window.App) {
      window.App.switchScreen('review-screen');
    }

    this.currentReviewFilter = 'all';
    this.renderReviewList();
  },

  setReviewFilter(filter) {
    this.currentReviewFilter = filter;
    
    // Update active filter pill
    const filterBtns = document.querySelectorAll('.review-filter-btn');
    filterBtns.forEach(btn => {
      if (btn.dataset.filter === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    this.renderReviewList();
  },

  renderReviewList() {
    const container = document.getElementById('review-cards-list');
    if (!container || !this.lastSessionData) return;

    container.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    const items = this.lastSessionData.history;

    const filtered = items.filter(item => {
      if (this.currentReviewFilter === 'correct') return item.isCorrect;
      if (this.currentReviewFilter === 'incorrect') return !item.isCorrect;
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-review">
          <p>No questions match the selected filter.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      const statusClass = item.isCorrect ? 'review-card-correct' : (item.isTimeout ? 'review-card-timeout' : 'review-card-wrong');
      const statusIcon = item.isCorrect ? '✓ Correct' : (item.isTimeout ? '⏱️ Timed Out' : '✗ Incorrect');

      const userChoice = item.selectedAnswer !== null 
        ? `${letters[item.selectedAnswer]}: ${item.options[item.selectedAnswer]}`
        : 'No answer selected (Time Expired)';
      const correctChoice = `${letters[item.correctAnswer]}: ${item.options[item.correctAnswer]}`;

      card.className = `review-item-card ${statusClass}`;
      card.innerHTML = `
        <div class="review-card-header">
          <div class="review-meta">
            <span class="review-q-num">Question ${item.questionNumber}</span>
            <span class="topic-pill">${item.category}</span>
          </div>
          <span class="review-status-tag ${item.isCorrect ? 'status-correct' : 'status-wrong'}">${statusIcon}</span>
        </div>
        
        <h4 class="review-q-text">${item.question}</h4>

        <div class="review-options-grid">
          ${item.options.map((opt, oIdx) => {
            let optClass = 'review-option-pill';
            if (oIdx === item.correctAnswer) {
              optClass += ' is-correct-answer';
            }
            if (oIdx === item.selectedAnswer && !item.isCorrect) {
              optClass += ' is-wrong-answer';
            }
            return `
              <div class="${optClass}">
                <span class="opt-letter">${letters[oIdx]}</span>
                <span class="opt-text">${opt}</span>
              </div>
            `;
          }).join('')}
        </div>

        <div class="review-answers-recap">
          <div class="recap-row">
            <span class="recap-label">Your Selection:</span>
            <span class="recap-val ${item.isCorrect ? 'text-green' : 'text-crimson'}">${userChoice}</span>
          </div>
          ${!item.isCorrect ? `
          <div class="recap-row">
            <span class="recap-label">Correct Solution:</span>
            <span class="recap-val text-gold">${correctChoice}</span>
          </div>
          ` : ''}
        </div>

        <div class="review-explanation-box">
          <span class="expl-heading">💡 Educational Explanation:</span>
          <p>${item.explanation}</p>
        </div>
      `;

      container.appendChild(card);
    });
  }
};

if (typeof window !== 'undefined') {
  window.ResultsManager = ResultsManager;
}

