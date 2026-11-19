# QuizMaster – The Ultimate Knowledge Challenge 👑

QuizMaster is a royal gaming web application built from the ground up to deliver a competitive, educational, and engaging knowledge-based experience. Inspired by the playful, royal gaming atmosphere of classics like Ludo King, QuizMaster introduces an original identity crafted with a **Royal Emerald Green + Golden Theme**.

---

## 🌟 Key Features

### 1. Mixed Question Gameplay (No Category Selection)
- Pure gaming experience: players face **15 mixed questions** with randomized topic progression.
- Prominent category badges: `[ GENERAL KNOWLEDGE ]`, `[ RAMAYANA ]`, `[ MAHABHARATA ]`, `[ SPORTS ]`, `[ SCIENCE ]`, `[ HISTORY & GEOGRAPHY ]`, `[ ENTERTAINMENT ]`, `[ TECHNOLOGY ]`.
- **Zero repeats** within a match.

### 2. Progressive Challenge Ladder
Questions become progressively harder:
- **Questions 1–3**: Easy (+10 XP)
- **Questions 4–6**: Medium (+20 XP)
- **Questions 7–9**: Hard (+30 XP)
- **Questions 10–12**: Very Hard (+40 XP)
- **Questions 13–15**: Extreme (+50 XP)
- **Flawless Victory Bonus**: +100 XP for completing all 15 questions correctly!

### 3. Dynamic Timer Rules (Q1–Q10 Timed, Q11–Q15 Untimed)
- **Questions 1–10 (45s Timer)**: Real-time circular animated SVG timer countdown.
  - **15-second warning**: Visual amber glow + audible clock tick.
  - **5-second critical alert**: Intense crimson pulse + urgent audio alarm.
  - Immediate timeout handling on expiration (stops instantly on answer confirmation).
- **Questions 11–15 (Untimed Challenge)**: Circular timer is completely hidden and disabled. Players have unlimited time to deliberate and conquer the hardest questions without timeout pressure!

### 4. Click & Lock Answer Confirmation Flow
- Tap option to select -> highlighted with golden aura.
- Press golden **Lock Answer** button to confirm.
- **Robust Multi-Game Initialization**: Reliable state management ensures the lock button resets and functions seamlessly across any number of consecutive game restarts without requiring page refreshes.
- **Correct**: Bright emerald green flare, confetti shimmer, chime fanfare, XP toast, and educational explanation card.
- **Incorrect**: Crimson red highlight, reveals correct answer, educational explanation, and transitions to game over.

### 5. Exactly 3 Strategic Lifelines (1x Per Match)
- ✂️ **50:50**: Vanishes 2 incorrect options, leaving the correct answer and 1 distractor.
- 💡 **Brain Hint**: Opens an ornate hint card with a thoughtful clue without revealing the answer.
- 🛡️ **Second Chance**: Arms an active shield. If the player locks a wrong answer, the shield triggers, absorbs the error, and grants one more attempt on the question!

### 6. Comprehensive Question Database (279 Verified Questions) & Smart History
- **279 factually accurate questions** across 9 comprehensive categories:
  - **General Knowledge**: India, World, Personalities, Awards, Countries & Capitals, Indian Constitution.
  - **Indian Culture**: Classical dance traditions (Bharatanatyam, Kathakali), architectural marvels (Konark Sun Temple, Meenakshi Temple, Kailash Temple, Brihadisvara), Vedas, Upanishads, and festivals.
  - **Bollywood & Music**: Blockbusters, iconic directors, playback legends (Kishore Kumar, Mohammed Rafi, Lata Mangeshkar), composers, Oscars.
  - **Ramayana**: Characters, Events, Places, Relationships, Stories.
  - **Mahabharata**: Pandavas, Kauravas, Krishna, Gita, Kurukshetra, Events.
  - **Sports**: Cricket (1983 World Cup, Sachin, Bradman), Football (World Cups), Olympics, Records.
  - **Science**: Physics (Planck's constant, Newton, Einstein), Chemistry (C-14 dating), Biology, Space (JWST).
  - **History & Geography**: Indian History (Haldighati, Chola naval empire, Indus Valley), World History (Hammurabi), Geography (Angel Falls, Sargasso Sea).
  - **Technology**: Computers, AI, Internet, Programming (TypeScript, C, Python), Distributed systems (Paxos).
- **Smart History & Anti-Repetition**:
  - Automatically records played question IDs in `localStorage`.
  - Prioritizes questions unused in the immediately previous game.
  - Avoids repeating questions from the last 2 completed games whenever enough unused questions are available.
  - Gracefully evicts oldest history if a tier's pool is ever constrained.

### 7. XP & Progression System
- Cumulative XP permanently stored in `localStorage`.
- Progressive Player Ranks:
  - 🌱 **Rookie** (0–99 XP)
  - 🧭 **Explorer** (100–299 XP)
  - 💡 **Thinker** (300–599 XP)
  - 📜 **Scholar** (600–999 XP)
  - ⚡ **Mastermind** (1000–1999 XP)
  - 👑 **Knowledge Champion** (2000+ XP)
- Level progression bar tracking progress toward the next rank.

### 8. Dedicated Player Profile Dashboard
- **Avatar Selection**: 8 royal avatars (👑 Crown Emperor, 📜 Grand Sage, ⚔️ Royal Knight, 🔮 Mystic Wizard, 🦁 Royal Lion, 🦅 Golden Falcon, 👸 Emerald Empress, 🏆 Grand Champion).
- **Editable Player Name**: Tap-to-edit with persistent storage.
- **4 Prominent Career Cards**:
  1. Total Games Played
  2. Games Won (15/15)
  3. Games Lost
  4. Total XP Earned
- **Secondary Metrics**: Win Percentage, Answer Accuracy %, Highest Level Reached, Total Correct Answers, Best Win Streak.
- **Recent Games History**: Table logging the last 15 matches (Date, Mode, Result, Score, Highest Question, XP).
- **Reset Statistics**: Safety-gated confirmation modal to wipe stats cleanly.

### 9. Daily Challenge Mode
- 5 curated mixed questions generated deterministically each day.
- Playable once per day with persistent completion status.
- Rewards **+100 Bonus XP** upon completion.

### 10. Match Answer Review System
- Complete post-game review of every question played.
- Highlights: Question, Topic badge, Player Choice, Correct Answer, Status, and Educational Explanations.
- Interactive filter pills: All Questions, Correct Only, Incorrect Only.

### 11. Procedural Web Audio Sound Engine
- Built with HTML5 Web Audio API oscillators and gain envelopes.
- Zero external audio files required — immune to 404s and network lag.
- Includes a global sound toggle persisted in `localStorage`.

---

## 🎨 Design & Theme

- **Primary Background**: Deep emerald green (`#042617`)
- **Secondary Background**: Dark forest green (`#02170e`)
- **Cards & Surfaces**: Rich emerald green (`#073822`, `#094027`)
- **Primary Accent**: Royal gold (`#f5c542`, `#ffd700`)
- **Correct Answer**: Bright emerald green (`#10b981`)
- **Wrong Answer**: Crimson red (`#ef4444`)
- **Typography**: Google Fonts Cinzel (headings) & Outfit (body & UI)

---

## 📁 Project Structure

```
QuizMaster/
│
├── index.html              # Main application shell with all game screens & modals
│
├── css/
│   ├── style.css           # Royal Emerald & Gold theme, header, home & dashboard styles
│   ├── game.css            # 45s timer, answer options, lifelines, results & review cards
│   └── responsive.css      # Fluid layouts for Desktop, Laptop, Tablet, and Mobile
│
├── js/
│   ├── app.js              # Application coordinator & event bindings
│   ├── game.js             # 15-question & Daily Challenge gameplay engines
│   ├── questions.js        # 225+ verified question database across 8 topics
│   ├── lifelines.js        # 50:50, Brain Hint, and Second Chance lifeline logic
│   ├── timer.js            # 45-second circular real-time countdown timer
│   ├── results.js          # Game Over, Victory, and Answer Review managers
│   ├── dashboard.js        # Career statistics, avatar picker & player profile
│   ├── storage.js          # LocalStorage persistence & rank calculations
│   └── sounds.js           # Procedural Web Audio API sound synthesizer
│
├── assets/
│   ├── icons/              # SVG icons & favicon
│   ├── images/             # Visual graphic assets
│   └── sounds/             # Sound engine documentation
│
└── README.md
```

---

## 🚀 How to Run

1. Open `index.html` directly in any modern web browser (Google Chrome, Firefox, Microsoft Edge, Safari).
2. No backend, Node.js server, or build step is required!
3. Click **Play Now** on the Home Screen to begin your quest!
