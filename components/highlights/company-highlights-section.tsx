"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectCTA } from "@/components/showcase/showcase-cta";
import { HighlightIcon } from "./highlight-icon";
import { companyHighlights, type CompanyHighlight } from "./highlights-data";
import styles from "./highlights.module.css";

function HighlightItem({ highlight }: { highlight: CompanyHighlight }) {
  return (
    <article className={styles.item}>
      <HighlightIcon name={highlight.icon} />
      <strong className={styles.value}>{highlight.value}</strong>
      <p className={styles.label}>{highlight.label}</p>
    </article>
  );
}

function HighlightsGrid() {
  return (
    <div className={styles.grid}>
      {companyHighlights.map((highlight) => (
        <HighlightItem key={`${highlight.value}-${highlight.label}`} highlight={highlight} />
      ))}
    </div>
  );
}

export function CompanyHighlightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${revealed ? styles.revealed : ""}`}
      aria-labelledby="company-highlights-heading"
    >
      <div className={styles.inner}>
        <h2 id="company-highlights-heading" className={styles.heading}>
          Experience You Can Trust. Capability You Can Count On.
        </h2>
        <HighlightsGrid />
        <div className={styles.ctaWrap}>
          <ProjectCTA href="/about" label="Explore Our Company" />
        </div>
      </div>
    </section>
  );
}
