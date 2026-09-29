export const INTRO_SESSION_KEY = "webfarm-intro-seen";

// Precise cinematic opening timing matching the 6-second reference sequence:
// 1. Warm grey/ivory screen with stationary centered WebFarm, smooth 0->100% count + thin line
// 2. Percentage reaches 100% and holds briefly
// 3. WebFarm transforms into centered editorial statement: "Your Ideas, Our Technology."
// 4. Statement holds clearly readable
// 5. Dark surround appears as statement panel becomes rounded inset card
// 6. Simultaneous horizontal panel swap: Panel A -> left (-105vw), Panel B (live hero) -> center (0vw)
// 7. Hero panel settles into fullscreen and normal homepage commences
export const INTRO_PROGRESS_SECONDS = 1.9; // Smooth 0 -> 100% climb
export const INTRO_PROGRESS_HOLD_SECONDS = 0.3; // Hold at 100%
export const INTRO_TRANSFORM_SECONDS = 0.55; // WebFarm transforms into statement
export const INTRO_STATEMENT_HOLD_SECONDS = 0.5; // Statement holds alone in warm ivory
export const INTRO_SURROUND_SECONDS = 0.45; // Dark surround appears, statement panel insets & rounds
export const INTRO_PANEL_HOLD_SECONDS = 0.3; // Brief pause with statement panel framed in dark surround
export const INTRO_SWAP_SECONDS = 0.75; // Simultaneous horizontal panel carousel exchange
export const INTRO_SETTLE_SECONDS = 0.55; // Hero panel expands to fullscreen and settles

// Panel geometry for the physical panel swap inside dark surround
export const INTRO_PANEL_RADIUS_REM = 1.5; // Rounded corners while inset (~24px)
export const INTRO_PANEL_SCALE = 0.92; // Inset scale showing dark surround
export const INTRO_PANEL_TRAVEL_VW = 105; // Horizontal travel ensuring continuous gap during swap
