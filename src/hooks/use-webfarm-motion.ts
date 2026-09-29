import { useEffect, type RefObject } from "react";

export function useWebFarmMotion(rootRef: RefObject<HTMLElement | null>, ready: boolean) {
  useEffect(() => {
    if (!ready || !rootRef.current) return;

    let disposed = false;
    let cleanup = () => {};

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger"), import("lenis")]).then(
      ([gsapModule, scrollTriggerModule, lenisModule]) => {
        if (disposed || !rootRef.current) return;

        const gsap = gsapModule.gsap;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        const Lenis = lenisModule.default;
        const root = rootRef.current;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        gsap.registerPlugin(ScrollTrigger);

        if (reduceMotion) {
          document.documentElement.classList.add("motion-reduced");
          ScrollTrigger.refresh();
          cleanup = () => document.documentElement.classList.remove("motion-reduced");
          return;
        }

        document.documentElement.classList.add("motion-enhanced");
        const lenis = new Lenis({
          duration: 1.05,
          smoothWheel: true,
          syncTouch: false,
          wheelMultiplier: 0.9,
          anchors: { offset: 0 },
        });

        const onLenisScroll = () => ScrollTrigger.update();
        const onTick = (time: number) => lenis.raf(time * 1000);
        lenis.on("scroll", onLenisScroll);
        gsap.ticker.add(onTick);
        gsap.ticker.lagSmoothing(0);

        const context = gsap.context(() => {
          const mm = gsap.matchMedia();

          // 1. HERO -> EDITORIAL INTRO CONTINUOUS SCROLL HANDOFF
          // The hero media and text gently translate as the user begins scrolling down
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".home_root__h_YgT",
                start: "bottom bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            })
            .to(".heroShowcase_world__ncTmF", {
              scale: 0.95,
              yPercent: 4,
              ease: "none",
            })
            .to(
              ".home_leftContainer__YulaL, .home_rightContainer__E0__a",
              { yPercent: -8, autoAlpha: 0.55, ease: "none" },
              "<",
            );

          // 2. EDITORIAL STATEMENT REVEAL
          gsap.fromTo(
            ".about_statement__q4ksl",
            { y: 32, autoAlpha: 0.5 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".about_root__PbHfP",
                start: "top 80%",
                once: true,
              },
            },
          );

          gsap.from(".about_tile__FcV_3", {
            scale: 0.8,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: ".about_root__PbHfP",
              start: "top 75%",
              once: true,
            },
          });

          // 3. SERVICES SCROLL CHOREOGRAPHY
          // As user moves through services:
          // Active service row becomes darker/stronger, inactive rows become quieter
          const serviceRows = gsap.utils.toArray<HTMLElement>(".services_row__Ioo7J");
          const serviceTiles = gsap.utils.toArray<HTMLElement>(".services_tile__yGHfn");

          if (serviceRows.length) {
            serviceRows.forEach((row, i) => {
              ScrollTrigger.create({
                trigger: row,
                start: "top 62%",
                end: "bottom 38%",
                onEnter: () => activateService(i),
                onEnterBack: () => activateService(i),
              });
            });

            const activateService = (activeIdx: number) => {
              serviceRows.forEach((r, idx) => {
                gsap.to(r, {
                  opacity: idx === activeIdx ? 1 : 0.42,
                  duration: 0.25,
                  overwrite: "auto",
                });
              });

              // Also subtly accent corresponding service visual tile
              // Tile order:
              // 0: Web (clusterRight first)
              // 1: 04 Disciplines amber card
              // 2: Mobile (stair step 1)
              // 3: AI (stair step 2)
              // 4: Software (stair step 3)
              const tileMapping = [0, 2, 3, 4];
              const targetTileIdx = tileMapping[activeIdx];
              serviceTiles.forEach((tile, tIdx) => {
                if (tIdx === 1) return; // leave amber card untouched
                const isActive = tIdx === targetTileIdx;
                gsap.to(tile, {
                  borderColor: isActive ? "var(--amber)" : "var(--hairline)",
                  scale: isActive ? 1.02 : 1,
                  duration: 0.35,
                  overwrite: "auto",
                });
              });
            };
          }

          // 4. CAPABILITIES EDITORIAL TYPOGRAPHY FIELD
          // Words nearest viewport center stay dark/emphasized, others stay muted
          const capabilityItems = gsap.utils.toArray<HTMLElement>(".services_capability__qNSe5");
          if (capabilityItems.length) {
            ScrollTrigger.create({
              trigger: ".services_capBlock__7EOaR",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              onUpdate: () => {
                const centerY = window.innerHeight / 2;
                const spread = window.innerHeight * 0.48;
                capabilityItems.forEach((item) => {
                  const rect = item.getBoundingClientRect();
                  const itemCenter = rect.top + rect.height / 2;
                  const distance = Math.min(Math.abs(itemCenter - centerY) / spread, 1);
                  const targetOpacity = 1 - distance * 0.62;
                  item.style.opacity = targetOpacity.toFixed(2);
                });
              },
            });
          }

          // 5. HOW WE SHIP (PROCESS SEQUENCE)
          // Discovery -> Design -> Develop -> Test -> Launch activates in sequence
          const processWords = gsap.utils.toArray<HTMLElement>(".process_word__9WpvM");
          if (processWords.length) {
            ScrollTrigger.create({
              trigger: ".process_stack__MO_8E",
              start: "top 70%",
              end: "bottom 30%",
              scrub: true,
              onUpdate: (self) => {
                const activeIndex = Math.min(
                  Math.floor(self.progress * processWords.length),
                  processWords.length - 1,
                );
                processWords.forEach((word, wIdx) => {
                  if (wIdx === activeIndex) {
                    word.classList.add("process_wordActive__2oGF8");
                  } else {
                    word.classList.remove("process_wordActive__2oGF8");
                  }
                });
              },
            });
          }

          // Process media subtle reveal
          gsap.from(".process_mediaWrap", {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".process_mediaWrap",
              start: "top 85%",
              once: true,
            },
          });

          // 6. PROOF / CLIENTS & METRICS
          gsap.from(".clients_content__xDpOO > *", {
            y: 22,
            autoAlpha: 0,
            stagger: 0.08,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".clients_root__4y9IF",
              start: "top 80%",
              once: true,
            },
          });

          gsap.from(".clients_stat__Tc2fs", {
            y: 20,
            autoAlpha: 0,
            stagger: 0.09,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".clients_statGrid__vsdyk",
              start: "top 85%",
              once: true,
            },
          });

          // 7. SELECTED WORK (PROJECTS)
          const projectCards = gsap.utils.toArray<HTMLElement>(".projects_card");
          projectCards.forEach((card, index) => {
            gsap.from(card, {
              y: 28,
              autoAlpha: 0,
              duration: 0.75,
              delay: (index % 2) * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            });
          });

          // 8. PRE-FOOTER (CONTACT CTA)
          gsap.from(".preFooter_panel__FE39v", {
            y: 24,
            autoAlpha: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".preFooter_root__Zxcjj",
              start: "top 82%",
              once: true,
            },
          });

          // 9. FOOTER GIANT WORDMARK
          gsap.fromTo(
            ".footer_brandMark__AjdSf",
            { clipPath: "inset(100% 0 0 0)", yPercent: 12 },
            {
              clipPath: "inset(0% 0 0 0)",
              yPercent: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".footer_root__s8jc0",
                start: "top 78%",
                once: true,
              },
            },
          );

          // Desktop Parallax for Hero & Process Media
          mm.add("(min-width: 812px)", () => {
            gsap.to(".heroShowcase_world__ncTmF", {
              yPercent: 6,
              scale: 1.04,
              ease: "none",
              scrollTrigger: {
                trigger: ".home_bottomContainer__9ptEK",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            });

            gsap.to(".process_mediaWrap img", {
              yPercent: 5,
              scale: 1.03,
              ease: "none",
              scrollTrigger: {
                trigger: ".process_mediaWrap",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            });
          });
        }, root);

        const refresh = () => ScrollTrigger.refresh();
        const images = Array.from(root.querySelectorAll("img"));
        void Promise.all(images.map((image) => image.decode?.().catch(() => undefined))).then(
          refresh,
        );
        window.addEventListener("load", refresh, { once: true });

        cleanup = () => {
          window.removeEventListener("load", refresh);
          context.revert();
          gsap.ticker.remove(onTick);
          lenis.off("scroll", onLenisScroll);
          lenis.destroy();
          document.documentElement.classList.remove("motion-enhanced");
        };
      },
    );

    return () => {
      disposed = true;
      cleanup();
    };
  }, [ready, rootRef]);
}
