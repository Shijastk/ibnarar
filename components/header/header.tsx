"use client";

import { usePathname } from "next/navigation";
import { BrandLogo } from "./brand-logo";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import styles from "./header.module.css";
import logo from "@/public/logo.png";

export function Header() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <BrandLogo src={logo} />
      <DesktopNavigation key={`desktop-${pathname}`} pathname={pathname} />
      <MobileNavigation key={`mobile-${pathname}`} pathname={pathname} />
    </header>
  );
}
