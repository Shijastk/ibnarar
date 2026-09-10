"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import aboutImage from "@/public/images/about/ebn-arar-industrial-site.webp";
import { ProjectCTA } from "@/components/showcase/showcase-cta";
import styles from "./about.module.css";

function AboutVisual() {
  return (
    <div className={styles.visual}>
      <Image
        src={aboutImage}
        alt="Excavator and transport truck at a structural construction site in Qatar"
        fill
        sizes="(max-width: 760px) 100vw, 56vw"
        className={styles.image}
      />
    </div>
  );
}

function AboutEyebrow() {
  return (
    <p className={styles.eyebrow}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M4 20h16M6 20V8l6-4 6 4v12M9 10h2m2 0h2m-6 4h2m2 0h2" />
      </svg>
      About Company
    </p>
  );
}

function AboutContent() {
  return (
    <div className={styles.content}>
      <AboutEyebrow />
      <h2 id="about-company-heading" className={styles.heading}>
        Serving Qatar Across Three Core Divisions.
      </h2>
      <span className={styles.divider} aria-hidden="true" />
      <p className={styles.paragraph}>
        EBN ARAR Trading, Contracting &amp; Transporting Co. W.L.L. is a Qatar-based
        company providing trading services, transportation and contracting solutions.
        Since its inception in 2003, the group has expanded to meet customers&apos;
        increasing demands.
      </p>
      <p className={styles.paragraph}>
        Its three core divisions cover Trading &amp; Services, Engineering &amp;
        Contracting, and Heavy Equipment &amp; Transportation, supported by a focus on
        quality, efficiency and reliable resources.
      </p>
      <div className={styles.ctaWrap}>
        <ProjectCTA href="/#what-we-do" label="Explore Our Capabilities" />
      </div>
    </div>
  );
}

export function AboutCompanySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${revealed ? styles.revealed : ""}`}
      aria-labelledby="about-company-heading"
    >
      <div className={styles.layout}>
        <AboutVisual />
        <AboutContent />
      </div>
    </section>
  );
}
