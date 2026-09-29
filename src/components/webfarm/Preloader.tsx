import { useEffect, useRef, useState, type RefObject } from "react";
import {
  INTRO_PANEL_HOLD_SECONDS,
  INTRO_PANEL_RADIUS_REM,
  INTRO_PANEL_SCALE,
  INTRO_PANEL_TRAVEL_VW,
  INTRO_PROGRESS_HOLD_SECONDS,
  INTRO_PROGRESS_SECONDS,
  INTRO_SESSION_KEY,
  INTRO_SETTLE_SECONDS,
  INTRO_STATEMENT_HOLD_SECONDS,
  INTRO_SURROUND_SECONDS,
  INTRO_SWAP_SECONDS,
  INTRO_TRANSFORM_SECONDS,
} from "@/animations/intro";

type PreloaderProps = {
  shellRef: RefObject<HTMLDivElement | null>;
  backdropRef: RefObject<HTMLDivElement | null>;
  onComplete: () => void;
};

/**
 * Cinematic opening sequence:
 *
 * 1. Warm grey/off-white fullscreen
 * 2. "WebFarm" centered stationary wordmark
 * 3. Percentage + thin horizontal progress line climbs smoothly 0 -> 100%
 * 4. Percentage reaches 100% and holds
 * 5. "WebFarm" transforms into: "Your Ideas, Our Technology." (centered, editorial scale)
 * 6. Statement holds alone
 * 7. Dark surround appears, statement panel insets with large rounded corners
 * 8. ACTUAL WEBFARM HERO PANEL IS ALREADY PREPARED off-screen right
 * 9. Physical horizontal panel exchange on the same timeline:
 *    Panel A (statement) -> LEFT (-105vw)
 *    Panel B (hero) -> CENTER (0vw)
 *    Both panels are visible during transit with a continuous dark surround gap
 * 10. Hero panel reaches center and settles to fullscreen
 * 11. Normal homepage scrolling commences
 */
export function Preloader({ shellRef, backdropRef, onComplete }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
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

      if (typeof window !== "undefined") {
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
      }

      const statementPanel = rootRef.current;
      const websitePanel = shellRef.current;
      const backdrop = backdropRef.current;

      const context = gsap.context(() => {
        // Station Panel B off-screen right from the very beginning, prepared and rendering
        gsap.set(websitePanel, {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          scale: INTRO_PANEL_SCALE,
          borderRadius: `${INTRO_PANEL_RADIUS_REM}rem`,
          x: `${INTRO_PANEL_TRAVEL_VW}vw`,
          overflow: "hidden",
          zIndex: 101,
          willChange: "transform",
        });

        const timeline = gsap.timeline({
          defaults: { ease: "power3.inOut" },
          onComplete: () => {
            document.body.classList.remove("intro-active");
            window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
            gsap.set(websitePanel, {
              clearProps: "position,top,left,right,bottom,transform,borderRadius,willChange,zIndex,overflow",
            });
            setVisible(false);
            onComplete();
          },
        });

        const progressState = { value: 0 };

        // 1. Loader climbs smoothly (0% -> 100%), line scales 0 -> 1
        timeline.to(progressState, {
          value: 100,
          duration: INTRO_PROGRESS_SECONDS,
          ease: "power2.inOut",
          onUpdate: () => {
            const val = Math.round(progressState.value);
            if (percentRef.current) percentRef.current.textContent = `${val}%`;
            if (lineRef.current) lineRef.current.style.transform = `scaleX(${val / 100})`;
          },
        });

        // 2. Brief hold at 100%
        timeline.to({}, { duration: INTRO_PROGRESS_HOLD_SECONDS });

        // 3. WebFarm transforms into: "Your Ideas, Our Technology."
        timeline
          .to(".preloader__brand", {
            yPercent: -100,
            opacity: 0,
            duration: INTRO_TRANSFORM_SECONDS * 0.8,
            ease: "power2.in",
          })
          .fromTo(
            ".preloader__statement",
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: INTRO_TRANSFORM_SECONDS, ease: "power2.out" },
            `-=${INTRO_TRANSFORM_SECONDS * 0.4}`,
          )
          .to(".preloader__progress-wrap", { opacity: 0, duration: 0.3 }, "<");

        // 4. Statement holds alone in warm ivory panel
        timeline.to({}, { duration: INTRO_STATEMENT_HOLD_SECONDS });

        // 5. Dark surround appears as statement panel becomes a rounded inset card
        timeline
          .to(backdrop, { autoAlpha: 1, duration: INTRO_SURROUND_SECONDS, ease: "power3.inOut" }, ">")
          .to(
            statementPanel,
            {
              scale: INTRO_PANEL_SCALE,
              borderRadius: `${INTRO_PANEL_RADIUS_REM}rem`,
              duration: INTRO_SURROUND_SECONDS,
              ease: "power3.inOut",
            },
            "<",
          );

        // 6. Statement panel holds inside dark surround
        timeline.to({}, { duration: INTRO_PANEL_HOLD_SECONDS });

        // 7. Simultaneous horizontal panel exchange:
        // Panel A exits left, Panel B enters from right on the same timeline
        timeline
          .to(
            statementPanel,
            {
              x: `-${INTRO_PANEL_TRAVEL_VW}vw`,
              duration: INTRO_SWAP_SECONDS,
              ease: "power3.inOut",
            },
            ">",
          )
          .to(
            websitePanel,
            {
              x: "0vw",
              duration: INTRO_SWAP_SECONDS,
              ease: "power3.inOut",
            },
            "<",
          );

        // 8. Website panel settles: expands from rounded inset to fullscreen,
        // and dark surround fades out into the live page
        timeline
          .to(
            websitePanel,
            {
              scale: 1,
              borderRadius: 0,
              duration: INTRO_SETTLE_SECONDS,
              ease: "power3.out",
            },
            ">-0.05",
          )
          .to(backdrop, { autoAlpha: 0, duration: INTRO_SETTLE_SECONDS * 0.7 }, "<")
          .to(statementPanel, { autoAlpha: 0, duration: 0.2 }, "<");
      }, rootRef);

      cleanup = () => context.revert();
    });

    return () => {
      disposed = true;
      cleanup();
      document.body.classList.remove("intro-active");
    };
  }, [onComplete, shellRef, backdropRef]);

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
      <div className="preloader__inner">
        <div className="preloader__word-wrap">
          <h2 className="preloader__brand">WebFarm</h2>
          <h2 className="preloader__statement">Your Ideas, Our Technology.</h2>
        </div>
        <div className="preloader__progress-wrap">
          <div className="preloader__progress-line" aria-hidden="true">
            <div className="preloader__progress-fill" ref={lineRef} />
          </div>
          <span className="preloader__counter" ref={percentRef}>
            0%
          </span>
        </div>
      </div>
    </div>
  );
}
