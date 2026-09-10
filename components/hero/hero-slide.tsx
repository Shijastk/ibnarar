import Link from "next/link";
import type { CSSProperties } from "react";
import type { HeroSlideData } from "./hero-data";
import { RevealLine } from "./reveal-line";
import styles from "./hero.module.css";

const START_DELAY = 120;
const HEADING_STAGGER = 190;
const DESCRIPTION_STAGGER = 150;

export function HeroSlide({ slide, slideNumber, slideCount }: {
  slide: HeroSlideData;
  slideNumber: number;
  slideCount: number;
}) {
  const descriptionStart = START_DELAY + slide.headingLines.length * HEADING_STAGGER + 60;
  const ctaDelay = descriptionStart + slide.descriptionLines.length * DESCRIPTION_STAGGER + 140;

  return (
    <div
      className={styles.slideContent}
      role="group"
      aria-roledescription="slide"
      aria-label={`${slideNumber} of ${slideCount}`}
    >
      <span className={styles.srOnly}>{slide.imageAlt}</span>
      <h1 className={styles.heading}>
        {slide.headingLines.map((line, index) => (
          <RevealLine key={line} kind="heading" delay={START_DELAY + index * HEADING_STAGGER}>
            {line}
          </RevealLine>
        ))}
      </h1>

      <p className={styles.description}>
        {slide.descriptionLines.map((line, index) => (
          <RevealLine key={line} kind="description" delay={descriptionStart + index * DESCRIPTION_STAGGER}>
            {line}
          </RevealLine>
        ))}
      </p>

      <Link
        href={slide.cta.href}
        className={styles.cta}
        style={{ "--cta-delay": `${ctaDelay}ms` } as CSSProperties}
      >
        {slide.cta.label}
      </Link>
    </div>
  );
}
