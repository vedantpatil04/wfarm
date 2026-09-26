# WebFarm Phase 2

## Goal
Layer a production-safe GSAP, ScrollTrigger, and Lenis motion system onto the completed Phase 1 site without changing its content, section order, responsive composition, or visual identity.

## Implementation
- Install GSAP and Lenis, then add small animation hooks/utilities rather than embedding large timelines inside page components.
- Replace the timer/CSS-driven preloader with one scoped GSAP timeline: smooth numeric progress, synchronized line, masked WebFarm-to-statement handoff, physical panel clip/scale/translation reveal, then a staggered hero entrance. Preserve one-play-per-session and provide an immediate reduced-motion path.
- Add a single global Lenis lifecycle synchronized to ScrollTrigger through the GSAP ticker, with natural touch behavior, working anchors, refresh handling, and complete ticker/listener cleanup.
- Add scoped, responsive scroll choreography for the existing intro, services, service media, capabilities, process, trust, placeholder metrics, projects, contact, and footer. Use masks, small spatial offsets, controlled image movement, and restrained stagger rather than blanket fade-ups.
- Refine existing desktop project and navigation interactions, plus the mobile menu opening sequence, focus behavior, Escape handling, body scroll lock, and cleanup.
- Use GSAP matchMedia for shorter mobile movement and fewer effects; avoid pinning unless reference comparison proves it materially improves a section.
- Keep essential content visible before JavaScript and reveal it only after animation initialization, preventing blank content, layout jumps, or hydration issues.

## Technical details
- Explicitly register ScrollTrigger and scope all timelines/triggers with gsap.context(), reverting them on unmount or hot reload.
- Organize shared motion in dedicated hooks and animation modules; add only minimal data attributes/classes to existing markup.
- Remove native CSS smooth scrolling where Lenis owns anchor movement, while retaining normal behavior for reduced motion and touch usability.
- Keep transforms and opacity GPU-friendly, avoid continuous offscreen work, and refresh ScrollTrigger after images/fonts settle.

## Validation
- Compare the complete opening and scroll sequence against the supplied recording at 1920×1080 and 390×844, then adjust timing, travel, clipping, and stagger.
- Verify reload/session skipping, reduced motion, anchor navigation, mobile menu keyboard/Escape behavior, focus visibility, overflow, layout stability, and project hover states.
- Check console/runtime output and inspect trigger counts through navigation/reload to confirm no duplicate ScrollTriggers or orphaned Lenis ticker callbacks.
