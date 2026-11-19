# QuizMaster Audio Engine

QuizMaster implements a procedural Web Audio API audio synthesis engine in `js/sounds.js`.

### Why Procedural Audio Synthesis?
1. **Zero Missing Assets**: Eliminates 404 network errors and broken links.
2. **Instant Low-Latency Response**: Zero network lag or buffering; sounds play synchronously with clicks, timer alerts, and answer reveals.
3. **True Cross-Platform Offline Capability**: Works reliably across all operating systems without requiring audio codecs or external asset downloads.
4. **Volume and Harmony Control**: Fine-tuned musical harmonics (chords, arpeggios, frequency envelopes) perfectly matching the Royal Emerald Green and Gold gaming theme.

### Sound FX Synthesized:
- `playClick()`: Crisp mechanical tactile UI click.
- `playSelect()`: Subtle harmonic option highlight tap.
- `playLock()`: Rising resonant golden frequency sweep.
- `playCorrect()`: Ascending major triad arpeggio (C5 - E5 - G5 - C6) with warm chime decay.
- `playWrong()`: Low sawtooth frequency descent and buzz.
- `playShield()`: Deflection chime for Second Chance lifeline activation.
- `playLifeline()`: Celestial harp sparkle flourish (E5, G5, B5, D6, E6).
- `playTimerTick()`: Mechanical woodblock tick for the 15-second warning.
- `playTimerUrgent()`: Dual-frequency urgent pulsing alarm for the 5-second critical zone.
- `playTimeout()`: Deep resonance gong.
- `playVictory()`: Heraldic royal fanfare progression.
- `playGameOver()`: Descending mellow chime.

