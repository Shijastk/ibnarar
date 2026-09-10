import type { ReactNode } from "react";
import type { HighlightIconName } from "./highlights-data";
import styles from "./highlights.module.css";

const paths: Record<HighlightIconName, ReactNode> = {
  experience: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2M9 2h6" />
    </>
  ),
  projects: (
    <>
      <rect x="4" y="7" width="16" height="13" rx="1" />
      <path d="M9 7V4h6v3M4 12h16M10 12v2h4v-2" />
    </>
  ),
  clients: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20v-2a5.5 5.5 0 0 1 11 0v2M16 5.5a3 3 0 0 1 0 5.5M17 14a5 5 0 0 1 3.5 4.8V20" />
    </>
  ),
  equipment: (
    <>
      <path d="M3 6h11v10H3V6Zm11 4h4l3 3v3h-7v-6Z" />
      <path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </>
  ),
};

export function HighlightIcon({ name }: { name: HighlightIconName }) {
  return (
    <span className={styles.iconBadge} aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[name]}
      </svg>
    </span>
  );
}
