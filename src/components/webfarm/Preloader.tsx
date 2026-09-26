import { useEffect, useRef, useState, type RefObject } from "react";
import {
  INTRO_PANEL_RADIUS_REM,
  INTRO_PANEL_SCALE,
  INTRO_PROGRESS_SECONDS,
  INTRO_SESSION_KEY,
} from "@/animations/intro";

type PreloaderProps = {
  shellRef: RefObject<HTMLDivElement | null>;
  backdropRef: RefObject<HTMLDivElement | null>;
  onComplete: () => void;
};

/**
 * Cinematic opening sequence.
 *
 * The "panel" the user sees is not a separate graphic — it is the real
 * `.site-shell` element (which wraps the header, hero and every section of
 * the live page) being scaled down and rounded. This overlay only ever
 * renders the loader UI (brand, progress, statement) on top of it.
 *
 * Technique: while `.site-shell` has an active `transform`, it becomes the
 * containing block for this overlay's `position: fixed`. That means the
 * overlay is clipped to the shell's rounded corners and shrinks in lock-step
 * with it — a physical "panel" reveal with no duplicated markup and no
 * separate screenshot/clone of the hero underneath. When the sequence ends
 * we clear the shell's transform, so normal fixed-position UI (e.g. the
 * mobile menu) goes back to being relative to the real viewport.
 */
export function Preloader({ shellRef, backdropRef, onComplete }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (window.sessionStorage.getItem(INTRO_SESSION_KEY) || reduced) {
      setVisible(false);
      onComplete();
      return;
    }

    document.body.classList.add("intro-active");
    let disposed = false;
    let cleanup = () => {};

    void import("gsap").then(({ gsap }) => {
      if (disposed || !rootRef.current || !shellRef.current) return;

      const shell = shellRef.current;
      const backdrop = backdropRef.current;

      const context = gsap.context(() => {
        const timeline = gsap.timeline({
          defaults: { ease: "power3.inOut" },
          onComplete: () => {
            document.body.classList.remove("intro-active");
            window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
            gsap.set(shell, { clearProps: "transform,borderRadius,willChange" });
            setVisible(false);
            onComplete();
          },
        });

        const progressState = { value: 0 };

        // 1 — fullscreen off-white, brand centered, progress + percentage climb together
        timeline.to(progressState, {
          value: 100,
          duration: INTRO_PROGRESS_SECONDS,
          ease: "power2.inOut",
          onUpdate: () => {
            const value = Math.round(progressState.value);
            if (percentRef.current) percentRef.current.textContent = `${value}%`;
            if (lineRef.current) lineRef.current.style.transform = `scaleX(${value / 100})`;
          },
        });

        // 2 — WebFarm word transforms into the statement (one continuous move, not a cross-fade)
        timeline
          .to(
            ".preloader__brand",
            { yPercent: -125, scale: 0.9, autoAlpha: 0, duration: 0.6 },
            "+=0.14",
          )
          .fromTo(
            ".preloader__statement",
            { yPercent: 125, scale: 1.08, clipPath: "inset(100% 0 0 0)", autoAlpha: 0 },
            { yPercent: 0, scale: 1, clipPath: "inset(0% 0 0 0)", autoAlpha: 1, duration: 0.8 },
            "<-0.42",
          )
          .to(".preloader__progress", { y: 14, autoAlpha: 0, duration: 0.3 }, "<-0.18");

        // 3 — dark outer surround appears as the shell shrinks into a rounded panel
        timeline
          .to(
            shell,
            {
              scale: INTRO_PANEL_SCALE,
              borderRadius: `${INTRO_PANEL_RADIUS_REM}rem`,
              duration: 1,
              ease: "power4.inOut",
            },
            "+=0.35",
          )
          .to(backdrop, { autoAlpha: 1, duration: 0.7 }, "<")
          .to(".preloader__statement", { scale: 0.94, autoAlpha: 0, duration: 0.55 }, "<0.1");

        // 4 — hero is already mounted behind the overlay; fading the overlay's own
        // fill exposes it directly inside the still-inset rounded panel
        timeline.to(rootRef.current, { autoAlpha: 0, duration: 0.45 }, "<0.05");

        // 5 — the panel physically expands back out until it *is* the website viewport
        timeline
          .to(
            shell,
            {
              scale: 1,
              borderRadius: 0,
              duration: 1.05,
              ease: "power4.inOut",
            },
            "-=0.1",
          )
          .to(backdrop, { autoAlpha: 0, duration: 0.6 }, "-=0.65");
      }, rootRef);

      cleanup = () => context.revert();
    });

    return () => {
      disposed = true;
      cleanup();
      document.body.classList.remove("intro-active");
    };
    // Refs are stable for the component's lifetime; this effect is intentionally run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className="preloader"
      ref={rootRef}
      role="progressbar"
      aria-label="Loading WebFarm"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
    >
      <div className="preloader__word-wrap">
        <span className="preloader__brand">WebFarm</span>
        <span className="preloader__statement">Your Ideas, Our Technology.</span>
      </div>
      <div className="preloader__progress">
        <span className="preloader__line">
          <span ref={lineRef} />
        </span>
        <span ref={percentRef}>0%</span>
      </div>
    </div>
  );
}
