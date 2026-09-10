"use client";

import { useEffect, useId } from "react";
import { navItems } from "./navigation";
import { NavCTA, NavItem } from "./nav-item";
import { useDisclosure } from "./use-disclosure";
import styles from "./header.module.css";

export function MobileNavigation({ pathname }: { pathname: string }) {
  const { open, setOpen, rootRef, buttonRef, onBlur, onKeyDown } = useDisclosure();
  const id = useId();

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1100px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, [setOpen]);

  return (
    <div className={styles.mobileNavigation} ref={rootRef} onBlur={onBlur} onKeyDown={onKeyDown}>
      <button ref={buttonRef} className={styles.menuToggle} type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d={open ? "m6 6 12 12M6 18 18 6" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      <nav id={id} className={styles.mobilePanel} aria-label="Primary navigation" hidden={!open}>
        <ul className={styles.mobileList}>
          {navItems.map((item) => (
            <li key={item.label}><NavItem item={item} pathname={pathname} onNavigate={() => setOpen(false)} /></li>
          ))}
          <li><NavCTA onNavigate={() => setOpen(false)} /></li>
        </ul>
      </nav>
    </div>
  );
}
