"use client";

import Link from "next/link";
import { useId, useRef, type KeyboardEvent } from "react";
import { enquiryLink, isActiveRoute, type NavigationItem, type NavigationLink } from "./navigation";
import { useDisclosure } from "./use-disclosure";
import styles from "./header.module.css";

export function NavDivider() {
  return <span className={styles.divider} aria-hidden="true" />;
}

export function NavCTA({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link href={enquiryLink.href} className={styles.cta} onNavigate={onNavigate}>
      {enquiryLink.label}
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M6 18 18 6M6 6h12v12" />
      </svg>
    </Link>
  );
}

export function NavDropdown({ item, pathname, onNavigate }: {
  item: { label: string; children: readonly NavigationLink[] };
  pathname: string;
  onNavigate?: () => void;
}) {
  const { open, setOpen, rootRef, buttonRef, onBlur, onKeyDown } = useDisclosure();
  const id = useId();
  const menuRef = useRef<HTMLUListElement>(null);
  const active = item.children.some(({ href }) => isActiveRoute(pathname, href));

  function focusItem(index: number) {
    const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a");
    if (links?.length) links[(index + links.length) % links.length].focus();
  }

  function handleMenuKeys(event: KeyboardEvent<HTMLUListElement>) {
    const links = Array.from(menuRef.current?.querySelectorAll("a") ?? []);
    const index = links.indexOf(document.activeElement as HTMLAnchorElement);
    const destinations: Record<string, number> = {
      ArrowDown: index + 1, ArrowUp: index - 1, Home: 0, End: links.length - 1,
    };
    if (event.key in destinations) {
      event.preventDefault();
      focusItem(destinations[event.key]);
    }
  }

  return (
    <div className={styles.dropdown} ref={rootRef} onBlur={onBlur} onKeyDown={onKeyDown}>
      <button
        ref={buttonRef}
        id={`${id}-trigger`}
        type="button"
        className={`${styles.navLink} ${active ? styles.active : ""}`}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={`${id}-menu`}
        onClick={() => setOpen(!open)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setOpen(true);
            const index = event.key === "ArrowUp" ? item.children.length - 1 : 0;
            requestAnimationFrame(() => focusItem(index));
          }
        }}
      >
        {item.label}
        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d={open ? "m6 15 6-6 6 6" : "m6 9 6 6 6-6"} />
        </svg>
      </button>
      <ul ref={menuRef} id={`${id}-menu`} className={styles.dropdownMenu} role="menu" aria-labelledby={`${id}-trigger`} hidden={!open} onKeyDown={handleMenuKeys}>
        {item.children.map((child) => (
          <li key={child.href} role="none">
            <Link
              href={child.href}
              role="menuitem"
              className={styles.dropdownLink}
              aria-current={isActiveRoute(pathname, child.href) ? "page" : undefined}
              onNavigate={() => { setOpen(false); onNavigate?.(); }}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NavItem({ item, pathname, onNavigate }: {
  item: NavigationItem; pathname: string; onNavigate?: () => void;
}) {
  if ("children" in item) return <NavDropdown item={item} pathname={pathname} onNavigate={onNavigate} />;
  const active = isActiveRoute(pathname, item.href);
  return (
    <Link href={item.href} className={`${styles.navLink} ${active ? styles.active : ""}`} aria-current={active ? "page" : undefined} onNavigate={onNavigate}>
      {item.label}
    </Link>
  );
}
