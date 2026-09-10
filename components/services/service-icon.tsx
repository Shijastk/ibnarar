import type { ReactNode } from "react";
import type { ServiceIconName } from "./services-data";
import styles from "./services.module.css";

const iconPaths: Record<ServiceIconName, ReactNode> = {
  industrial: (
    <>
      <path d="M3 20V9l6 3V8l6 3V5h6v15H3Z" />
      <path d="M6 16h3m3 0h3m3 0h1M18 8h3" />
    </>
  ),
  construction: (
    <>
      <path d="M4 20V5m16 15V5M4 8h16M4 16h16" />
      <path d="m4 8 16 8M20 8 4 16M9 20v-4m6 4v-4" />
    </>
  ),
  equipment: (
    <>
      <path d="M3 19h11M6 19l2-8h6l3 4" />
      <path d="M14 11 17 4h2l-2 11m0 0 4 2-2 3-4-2 2-3Z" />
      <path d="M5 22h10" />
    </>
  ),
  transport: (
    <>
      <path d="M3 6h11v10H3V6Zm11 4h4l3 3v3h-7v-6Z" />
      <path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <span className={styles.icon} aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {iconPaths[name]}
      </svg>
    </span>
  );
}
