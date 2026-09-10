import Link from "next/link";
import styles from "./showcase.module.css";

export function ProjectCTA({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className={styles.cta} aria-label={`${label} — learn more`}>
      {label}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M6 18 18 6M7 6h11v11" />
      </svg>
    </Link>
  );
}
