import { useEffect, useRef, useState } from "react";

type HeaderProps = {
  onDark?: boolean;
};

export function Header({ onDark = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className={`styles_root__E_BhR ${onDark ? "styles_onDark__amswT" : ""}`} role="banner">
        <div className="styles_innerHeader___7yW2">
          <a aria-label="Go home" href="#top" className="styles_logoLink">
            <span className="styles_logoText">
              WebFarm<span className="text-amber">.</span>
            </span>
          </a>

          <div className="styles_rightContainer__n0Mv9">
            <a aria-label="GET IN TOUCH" href="mailto:hello@webfarm.in">
              <button type="button" aria-label="GET IN TOUCH" className="p-xs buttonLink_btnPosnawr__CNjFx">
                <span className="p-x buttonLink_labelClassic__aHoA6">GET IN TOUCH</span>
                <svg className="buttonLink_arrowClassic__Slo_3" viewBox="0 0 26 27" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" />
                </svg>
                <span className="buttonLink_ball__aTBoa" />
              </button>
            </a>

            <button
              ref={triggerRef}
              type="button"
              aria-label={open ? "Close Menu" : "Open Menu"}
              aria-expanded={open}
              aria-controls="menu"
              className="p-xs menu-pill menuButton_button__BA6ZV"
              onClick={() => setOpen((prev) => !prev)}
            >
              <div className="perspectiveText_root__Ncs_Y">
                <div className="p-x menuButton_label__IJwbs perspectiveText_perspectiveText__fVDC2">
                  <p>{open ? "Close" : "Menu"}</p>
                  <p>{open ? "Close" : "Menu"}</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Menu Overlay */}
      <nav
        id="menu"
        ref={menuRef}
        className={`menuLinks_menu__Pitki ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="menuLinks_menuWrapper__FGdxP layout-block-inner">
          <div className="menuLinks_menuList__Vhw2z menuLinks_sitemap">
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="Go Home" href="#top" onClick={close}>
                <span>Home</span>
              </a>
            </div>
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="Go Work" href="#work" onClick={close}>
                <span>Work</span>
              </a>
            </div>
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="Go Services" href="#services" onClick={close}>
                <span>Services</span>
              </a>
            </div>
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="Go Contact" href="#contact" onClick={close}>
                <span>Contact</span>
              </a>
            </div>
          </div>

          <div className="menuLinks_menuList__Vhw2z menuLinks_projects">
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="Visit Earneazi" href="https://earneazi.com" target="_blank" rel="noopener noreferrer" onClick={close}>
                <span>Earneazi (earneazi.com)</span>
              </a>
            </div>
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="Visit GreenGuard AI" href="https://greenguardai.in" target="_blank" rel="noopener noreferrer" onClick={close}>
                <span>GreenGuard AI (greenguardai.in)</span>
              </a>
            </div>
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="Visit 36 Spokes" href="#work" onClick={close}>
                <span>36 Spokes</span>
              </a>
            </div>
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="Visit MedFind" href="#work" onClick={close}>
                <span>MedFind</span>
              </a>
            </div>
          </div>

          <div className="menuLinks_menuList__Vhw2z menuLinks_services">
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="Web Development" href="#services" onClick={close}>
                <span>Web Development</span>
              </a>
            </div>
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="Mobile Apps" href="#services" onClick={close}>
                <span>Mobile Apps</span>
              </a>
            </div>
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="AI & Automation" href="#services" onClick={close}>
                <span>AI & Automation</span>
              </a>
            </div>
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="Business Software" href="#services" onClick={close}>
                <span>Business Software</span>
              </a>
            </div>
          </div>

          <div className="menuLinks_menuList__Vhw2z menuLinks_follow">
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="WebFarm on LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/webfarm">
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="WebFarm on Instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/webfarm.in">
                <span>Instagram</span>
              </a>
            </div>
            <div className="menuLinks_menuListItem__Qbh_w">
              <a aria-label="WebFarm on X" target="_blank" rel="noopener noreferrer" href="https://x.com/webfarm_in">
                <span>X (Twitter)</span>
              </a>
            </div>
          </div>

          <div className="menuLinks_emailSection">
            <span className="p-xs menuLinks_emailLabel">Direct inquiry:</span>
            <a aria-label="Send email" href="mailto:hello@webfarm.in" className="menuLinks_emailLink">
              <span>hello@webfarm.in</span>
            </a>
          </div>

          <button
            type="button"
            className="menuLinks_menuClose__cP4YF"
            aria-label="Close menu"
            onClick={close}
          >
            <p>✕</p>
          </button>
        </div>
      </nav>
    </>
  );
}
