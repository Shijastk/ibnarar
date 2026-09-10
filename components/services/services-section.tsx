"use client";

import { useEffect, useRef } from "react";
import { ServiceCard } from "./service-card";
import { serviceItems } from "./services-data";
import styles from "./services.module.css";

function SectionHeader() {
  return (
    <div className={styles.header}>
      <p className={styles.eyebrow}>Our Services</p>
      <h2 id="services-heading" className={styles.heading}>Services Across Our Three Core Divisions</h2>
      <p className={styles.intro}>
        Trading supply, construction capabilities, and equipment support organized around the needs of clients in Qatar.
      </p>
    </div>
  );
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>("[data-service-card]");
    if (!cards?.length) return;

    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.setAttribute("data-visible", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="services-heading">
      <div className={styles.inner}>
        <SectionHeader />
        <div className={styles.grid}>
          {serviceItems.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
