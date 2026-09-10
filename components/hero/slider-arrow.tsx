import styles from "./hero.module.css";

export function SliderArrow({ direction, onClick }: {
  direction: "previous" | "next";
  onClick: () => void;
}) {
  const previous = direction === "previous";
  return (
    <button
      type="button"
      className={`${styles.arrow} ${previous ? styles.arrowPrevious : styles.arrowNext}`}
      aria-label={previous ? "Previous slide" : "Next slide"}
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d={previous ? "m15 5-7 7 7 7" : "m9 5 7 7-7 7"} />
      </svg>
    </button>
  );
}
