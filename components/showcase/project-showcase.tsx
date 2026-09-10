"use client";

import { useState, type FocusEvent } from "react";
import { ProjectCard } from "./project-card";
import { defaultShowcaseItemId, showcaseItems } from "./showcase-data";
import styles from "./showcase.module.css";

export function ProjectShowcase() {
  const [activeId, setActiveId] = useState(defaultShowcaseItemId);

  function restoreDefault(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActiveId(defaultShowcaseItemId);
    }
  }

  return (
    <section className={styles.section} aria-labelledby="capabilities-heading">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>What We Do</p>
        <h2 id="capabilities-heading" className={styles.sectionTitle}>Our Core Capabilities</h2>
      </div>
      <div
        className={styles.grid}
        onMouseLeave={() => setActiveId(defaultShowcaseItemId)}
        onBlurCapture={restoreDefault}
      >
        {showcaseItems.map((item) => (
          <ProjectCard
            key={item.id}
            item={item}
            active={item.id === activeId}
            onActivate={() => setActiveId(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
