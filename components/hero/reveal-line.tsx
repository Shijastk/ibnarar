import type { CSSProperties, ReactNode } from "react";
import styles from "./hero.module.css";

type RevealLineProps = {
  children: ReactNode;
  delay: number;
  kind: "heading" | "description";
};

export function RevealLine({ children, delay, kind }: RevealLineProps) {
  return (
    <span
      className={`${styles.revealLine} ${kind === "heading" ? styles.headingLine : styles.descriptionLine}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      <span className={styles.revealText}>{children}</span>
    </span>
  );
}
