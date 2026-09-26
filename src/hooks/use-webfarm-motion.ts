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

          // The hero and header are already visible the moment the intro panel opens
          // (see Preloader) — no separate fade-in here, so the reveal itself is the
          // only "entrance" the hero gets. Only its parallax lives in this hook.

          const reveal = (
            trigger: string,
            targets: string,
            options: Record<string, unknown> = {},
          ) => {
            gsap.from(targets, {
              y: 26,
              autoAlpha: 0,
              duration: 0.85,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: { trigger, start: "top 78%", once: true },
              ...options,
            });
          };

          // Hero -> intro-statement: one continuous scroll-linked handoff instead of
          // a blanket fade-up. The hero settles back as the statement masks into view.
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".hero",
                start: "bottom bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            })
            .to(".hero__media", { scale: 0.93, yPercent: -5, autoAlpha: 0.55, ease: "none" })
            .to(
              ".hero__headline, .hero__foot",
              { yPercent: -6, autoAlpha: 0.6, ease: "none" },
              "<",
            );

          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".intro-statement",
                start: "top 92%",
                end: "top 38%",
                scrub: 0.6,
              },
            })
            .fromTo(
              ".intro-statement h2",
              { clipPath: "inset(0 0 100% 0)", yPercent: 14 },
              { clipPath: "inset(0 0 0% 0)", yPercent: 0, ease: "none" },
            )
            .fromTo(
              ".intro-statement .section-label, .intro-statement p",
              { autoAlpha: 0, y: 22 },
              { autoAlpha: 1, y: 0, ease: "none" },
              "<0.15",
            );

          reveal(".services", ".services .section-heading > *", { y: 30 });

          gsap.utils.toArray<HTMLElement>(".service-row").forEach((row) => {
            gsap.from(row.children, {
              x: (index) => (index === 1 ? 24 : 10),
              autoAlpha: 0,
              duration: 0.65,
              stagger: 0.07,
              ease: "power2.out",
              scrollTrigger: { trigger: row, start: "top 86%", once: true },
            });
          });

          // Secondary media system: each service row has a matching thumbnail in the
          // sticky stack beside it. The one nearest the reading line stays emphasized;
          // the rest stay quiet, so typography and image move through the section together.
          const mediaTiles = gsap.utils.toArray<HTMLElement>(".service-media__tile");
          if (mediaTiles.length) {
            gsap.utils.toArray<HTMLElement>(".service-row").forEach((row) => {
              const index = row.dataset["serviceIndex"];
              const tile = mediaTiles.find((el) => el.dataset["serviceMedia"] === index);
              if (!tile) return;
              ScrollTrigger.create({
                trigger: row,
                start: "top 60%",
                end: "bottom 40%",
                onEnter: () => setActiveTile(mediaTiles, tile),
                onEnterBack: () => setActiveTile(mediaTiles, tile),
              });
            });
          }

          gsap
            .timeline({
              scrollTrigger: { trigger: ".service-visual", start: "top 78%", once: true },
              defaults: { ease: "power3.out" },
            })
            .from(".service-visual__image", { clipPath: "inset(0 100% 0 0)", duration: 1.15 })
            .from(".service-visual__image img", { scale: 1.12, duration: 1.35 }, "<")
            .from(
              ".service-visual__copy > *",
              { y: 28, autoAlpha: 0, stagger: 0.12, duration: 0.7 },
              "-=0.55",
            );

          reveal(".capabilities", ".capabilities .section-heading > *", { y: 30 });
          gsap.from(".capability-list li", {
            x: 22,
            autoAlpha: 0,
            duration: 0.55,
            stagger: 0.055,
            ease: "power2.out",
            scrollTrigger: { trigger: ".capability-list", start: "top 76%", once: true },
          });

          // Typography-as-visual: capabilities nearest the reading line stay bright,
          // the rest go quiet — a continuous spotlight rather than a static list.
          const capabilityItems = gsap.utils.toArray<HTMLElement>(".capability-list li");
          if (capabilityItems.length) {
            ScrollTrigger.create({
              trigger: ".capability-list",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              onUpdate: () => {
                const centerY = window.innerHeight / 2;
                const spread = window.innerHeight * 0.55;
                capabilityItems.forEach((item) => {
                  const rect = item.getBoundingClientRect();
                  const itemCenter = rect.top + rect.height / 2;
                  const distance = Math.min(Math.abs(itemCenter - centerY) / spread, 1);
                  gsap.to(item, { opacity: 1 - distance * 0.68, duration: 0.2, overwrite: "auto" });
                });
              },
            });
          }

          reveal(".process", ".process .section-heading > *", { y: 28 });
          gsap.from(".process li", {
            y: 24,
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.11,
            ease: "power3.out",
            scrollTrigger: { trigger: ".process ol", start: "top 82%", once: true },
          });

          // Active stage emphasis: the stage nearest the reading line brightens while
          // the rest of the sequence stays quiet, so the process reads as one timeline.
          gsap.utils.toArray<HTMLElement>(".process li").forEach((step) => {
            ScrollTrigger.create({
              trigger: step,
              start: "top 68%",
              end: "bottom 38%",
              toggleClass: { targets: step, className: "is-active" },
            });
          });

          gsap
            .timeline({
              scrollTrigger: { trigger: ".trust", start: "top 78%", once: true },
              defaults: { ease: "power3.out" },
            })
            .from(".trust__media", { clipPath: "inset(0 0 0 100%)", duration: 1.05 })
            .from(".trust__media img", { scale: 1.12, duration: 1.3 }, "<")
            .from(
              ".trust__copy > *",
              { y: 24, autoAlpha: 0, stagger: 0.12, duration: 0.65 },
              "-=0.55",
            );

          gsap.from(".process__media", {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: ".process__media", start: "top 88%", once: true },
          });

          gsap.from(".metrics__grid > div", {
            y: 18,
            autoAlpha: 0,
            duration: 0.65,
            stagger: 0.09,
            ease: "power2.out",
            scrollTrigger: { trigger: ".metrics", start: "top 82%", once: true },
          });

          reveal(".work", ".work > .section-heading > *", { y: 32 });
          gsap.utils.toArray<HTMLElement>(".project").forEach((project, index) => {
            const visual = project.querySelector(".project__visual");
            const media = project.querySelector(
              ".project__visual > img, .project__visual > .spokes-art",
            );
            const copy = project.querySelectorAll(".project__meta > *, .project__copy > *");
            const timeline = gsap.timeline({
              scrollTrigger: { trigger: project, start: "top 76%", once: true },
              defaults: { ease: "power3.out" },
            });
            timeline
              .from(visual, {
                clipPath: index % 2 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
                duration: 1.05,
              })
              .from(media, { scale: 1.1, xPercent: index % 2 ? 2 : -2, duration: 1.25 }, "<")
              .from(copy, { y: 16, autoAlpha: 0, duration: 0.55, stagger: 0.045 }, "-=0.55");
          });

          reveal(".contact", ".contact > .section-label, .contact > h2", { y: 40, stagger: 0.14 });
          reveal(".contact", ".contact__actions > *", { y: 22, stagger: 0.1 });

          gsap
            .timeline({
              scrollTrigger: { trigger: ".footer", start: "top 85%", once: true },
              defaults: { ease: "power3.out" },
            })
            .from(".footer__intro > *, .footer__columns > div", {
              y: 20,
              autoAlpha: 0,
              stagger: 0.06,
              duration: 0.6,
            })
            .fromTo(
              ".footer__wordmark",
              { clipPath: "inset(0 0 100% 0)" },
              { clipPath: "inset(0 0 0% 0)", duration: 0.9 },
              "-=0.25",
            )
            .from(".footer__bottom > *", { autoAlpha: 0, duration: 0.5 }, "-=0.3");

          mm.add("(min-width: 768px)", () => {
            gsap.to(".hero__media img", {
              yPercent: 7,
              scale: 1.035,
              ease: "none",
              scrollTrigger: {
                trigger: ".hero__media",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            });
            gsap.to(".service-visual__image img", {
              yPercent: 6,
              scale: 1.04,
              ease: "none",
              scrollTrigger: {
                trigger: ".service-visual",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
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

function setActiveTile(tiles: HTMLElement[], active: HTMLElement) {
  tiles.forEach((tile) => tile.classList.toggle("is-active", tile === active));
}
