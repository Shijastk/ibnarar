"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type FocusEvent } from "react";
import { heroSlides } from "./hero-data";
import { HeroSlide } from "./hero-slide";
import { SliderArrow } from "./slider-arrow";
import styles from "./hero.module.css";

const AUTOPLAY_INTERVAL = 6500;

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const showSlide = useCallback((direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => showSlide(1), AUTOPLAY_INTERVAL);
    return () => window.clearInterval(timer);
  }, [activeIndex, paused, reducedMotion, showSlide]);

  function handleBlur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
  }

  const activeSlide = heroSlides[activeIndex];

  return (
    <div className={styles.heroFrame}>
      <section
        className={styles.hero}
        aria-roledescription="carousel"
        aria-label="EBN ARAR business divisions"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={handleBlur}
      >
        <div className={styles.images} aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.imageLayer} ${index === activeIndex ? styles.imageActive : ""}`}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                preload={index === 0}
                sizes="100vw"
                className={styles.image}
                style={{ objectPosition: slide.imagePosition }}
              />
            </div>
          ))}
        </div>

        <HeroSlide
          key={activeSlide.id}
          slide={activeSlide}
          slideNumber={activeIndex + 1}
          slideCount={heroSlides.length}
        />

        <SliderArrow direction="previous" onClick={() => showSlide(-1)} />
        <SliderArrow direction="next" onClick={() => showSlide(1)} />

        <span className={styles.srOnly} aria-live={paused ? "polite" : "off"} aria-atomic="true">
          Slide {activeIndex + 1} of {heroSlides.length}: {activeSlide.headingLines.join(" ")}
        </span>
      </section>
    </div>
  );
}
