import type { DivisionIconName } from "./showcase-data";
import styles from "./showcase.module.css";

const paths: Record<DivisionIconName, React.ReactNode> = {
  trading: (
    <>
      <path d="m5 8 7-4 7 4-7 4-7-4Z" />
      <path d="m5 8 7 4 7-4v8l-7 4-7-4V8Zm7 4v8" />
    </>
  ),
  contracting: (
    <>
      <path d="M4 20h16M6 20V8l6-4 6 4v12M9 10h2m2 0h2m-6 4h2m2 0h2m-6 6v-3h6v3" />
    </>
  ),
  transportation: (
    <>
      <path d="M3 6h11v10H3V6Zm11 4h4l3 3v3h-7v-6Z" />
      <path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </>
  ),
};

export function ProjectLogoOrIcon({ name }: { name: DivisionIconName }) {
  return (
    <span className={styles.iconBadge} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </svg>
    </span>
  );
}
