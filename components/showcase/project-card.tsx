import Image from "next/image";
import { ProjectLogoOrIcon } from "./division-icon";
import { ProjectCTA } from "./showcase-cta";
import type { ShowcaseItem } from "./showcase-data";
import styles from "./showcase.module.css";

export function ProjectContent({ item }: { item: ShowcaseItem }) {
  return (
    <div className={styles.content}>
      <div className={styles.titleRow}>
        <ProjectLogoOrIcon name={item.icon} />
        <h3 className={styles.cardTitle}>{item.title}</h3>
      </div>
      <span className={styles.divider} aria-hidden="true" />
      <p className={styles.description}>{item.description}</p>
      <ProjectCTA href={item.href} label={item.ctaLabel} />
    </div>
  );
}

export function ProjectCard({ item, active, onActivate }: {
  item: ShowcaseItem;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <article
      className={`${styles.card} ${styles[item.position]} ${active ? styles.active : styles.light}`}
      data-active={active}
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
    >
      <Image
        src={item.image}
        alt={active ? item.imageAlt : ""}
        fill
        sizes="(max-width: 700px) 100vw, 34vw"
        className={styles.cardImage}
      />
      <span className={styles.overlay} aria-hidden="true" />
      <ProjectContent item={item} />
    </article>
  );
}
