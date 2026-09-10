import Link from "next/link";
import type { CSSProperties } from "react";
import { ServiceIcon } from "./service-icon";
import type { ServiceItem } from "./services-data";
import styles from "./services.module.css";

export function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <article
      className={styles.card}
      data-service-card
      data-visible="false"
      style={{ "--service-delay": `${index * 55}ms` } as CSSProperties}
    >
      <ServiceIcon name={service.icon} />
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
      <Link href={service.href} className={styles.link} aria-label={`Learn more about ${service.title}`}>
        Learn More
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M6 18 18 6M7 6h11v11" />
        </svg>
      </Link>
    </article>
  );
}
