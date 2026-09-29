# WebFarm Phase 2

- [x] Build scoped GSAP opening and hero sequence
- [x] Integrate Lenis with ScrollTrigger and anchor navigation
- [x] Add responsive section and project choreography
- [x] Refine mobile menu motion and accessibility
- [x] Validate desktop, mobile, reduced motion, and cleanup

## Phase 3 — reference fidelity pass

Re-audited against the ReliaBuilds reference recordings (desktop 1918×1026 +
mobile 393×852 device-frame, both frame-stepped) with the opening/panel-swap
timing already tuned in `src/animations/intro.ts`. This pass closed the
remaining structural gaps below the fold:

- [x] Hero: description moved beside the headline (top-right, matching the
      reference's split header row) instead of living below the media;
      hero media now carries a centered floating "Now building" chip and a
      small continue affordance, both hidden on mobile
- [x] Services media system: replaced the single switching photo with an
      asymmetric stack — an icon stage (`ServiceIcon.tsx`, one original
      line-art mark per discipline) plus a yellow highlight card — instead
      of a plain photo swap; numbered rows now read "/ 01" etc.
- [x] Process ("How we ship"): rebuilt from a 5-card grid into a stacked,
      right-aligned typographic scene (Discovery/Design/Develop/Test/
      Launch), background back to the paper surface — yellow is an accent,
      not a section fill
- [x] Menu overlay: dark full-screen surface (was accent-yellow) grouped
      into Sitemap / Selected work / Services / Follow, matching the
      reference's structure and this project's own content
- [x] Footer: added a back-to-top control and a subtle radial-glow
      background treatment
- [x] Capabilities: trailing "." per term to match the reference's rhythm

Not changed this pass (lower priority per the difference-ranking, or already
close enough to the reference to leave alone): hero/project art direction
(current 3D-render style kept — legitimate alternative to pixel art, not a
stock-photo violation), Work section grid (existing alternating single
column is a valid editorial rhythm for 4 items), exact type family.

Verified: `npm run build` (client + SSR + nitro) and `tsc --noEmit` both
clean; `eslint src` has no errors (only pre-existing shadcn fast-refresh
warnings in untouched `components/ui/*`). No headless browser was available
in the build sandbox to capture pixel-diff screenshots — changes were
verified by reading the compiled structure/CSS against frame-stepped stills
from both reference recordings; a final visual pass in an actual browser is
still worth doing before shipping.
