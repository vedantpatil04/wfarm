import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
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
    <header className="site-header">
      <a href="#top" className="wordmark" aria-label="WebFarm home">
        WebFarm<span>.</span>
      </a>
      <div className="site-header__controls">
        <a href="mailto:hello@webfarm.in" className="header-cta">
          <span>Get in touch</span>
          <ArrowUpRight />
        </a>
        <button
          ref={triggerRef}
          type="button"
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-nav-overlay"
        >
          <span>{open ? "Close" : "Menu"}</span>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div
        id="site-nav-overlay"
        ref={menuRef}
        className={`nav-overlay ${open ? "nav-overlay--open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="mailto:hello@webfarm.in" className="nav-overlay__email">
          hello@webfarm.in <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}
