"use client";

import { navItems } from "./navigation";
import { NavCTA, NavDivider, NavItem } from "./nav-item";
import styles from "./header.module.css";

export function DesktopNavigation({ pathname }: { pathname: string }) {
  return (
    <nav className={styles.desktopNavigation} aria-label="Primary navigation">
      <ul className={styles.desktopList}>
        {navItems.map((item, index) => (
          <li className={styles.desktopItem} key={item.label}>
            {index > 1 && <NavDivider />}
            <NavItem item={item} pathname={pathname} />
          </li>
        ))}
        <li className={styles.ctaItem}><NavCTA /></li>
      </ul>
    </nav>
  );
}
