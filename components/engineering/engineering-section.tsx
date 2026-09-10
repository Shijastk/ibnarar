import Image from "next/image";
import Link from "next/link";
import styles from "./engineering-section.module.css";

type IconProps = {
  size?: number;
  className?: string;
};

function BuildingIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 21h16" />
      <path d="M6 21V5l6-2v18" />
      <path d="M12 8h6v13" />
      <path d="M8.5 8h1" />
      <path d="M8.5 12h1" />
      <path d="M8.5 16h1" />
      <path d="M15 11h1" />
      <path d="M15 15h1" />
    </svg>
  );
}

function ClipboardIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4.5V3h6v1.5" />
      <path d="m8.5 12 2 2 5-5" />
      <path d="M9 18h6" />
    </svg>
  );
}

function ShieldIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 5.5 5.5v5.3c0 4.4 2.7 8.3 6.5 10.2 3.8-1.9 6.5-5.8 6.5-10.2V5.5L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function HardHatIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 14a8 8 0 0 1 16 0" />
      <path d="M8 14V9.5" />
      <path d="M16 14V9.5" />
      <path d="M3 14h18v3H3z" />
    </svg>
  );
}

function ArrowUpRightIcon({ size = 17, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

const engineeringCards = [
  {
    title: "Civil & Construction Works",
    description:
      "Construction capabilities spanning civil works, residential buildings, villas and industrial steel structures, delivered with close attention to quality and safety.",
    icon: BuildingIcon,
  },
  {
    title: "Project Management & Coordination",
    description:
      "Planning, organizing, programming and resourcing projects with coordinated support across consultants, subcontractors, suppliers and construction activities.",
    icon: ClipboardIcon,
  },
] as const;

const executionFocus = [
  { label: "Quality & Safety", icon: ShieldIcon },
  { label: "Cost-Effective Execution", icon: HardHatIcon },
] as const;

export function EngineeringSection() {
  return (
    <section className={styles.section} aria-labelledby="engineering-title">
      <div className={styles.inner}>
        <div className={styles.leftColumn}>
          <div className={styles.kicker}>Engineering & Contracting</div>
          <h2 id="engineering-title" className={styles.title}>
            Civil, Construction & Industrial Engineering Works
          </h2>
          <p className={styles.intro}>
            EBN ARAR Engineering & Contracting delivers civil and construction work ranging from residential buildings and villas to industrial steel structures, supported by experienced project management and dependable resources.
          </p>

          <div className={styles.visualWrap} aria-hidden="true">
            <Image
              src="/images/hero/engineering-contracting.webp"
              alt=""
              className={styles.visual}
              width={900}
              height={620}
              priority={false}
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.cards}>
            {engineeringCards.map(({ title, description, icon: Icon }) => (
              <article className={styles.card} key={title}>
                <div className={styles.iconBox} aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>

          <div className={styles.focusBand}>
            <span className={styles.focusLabel}>Execution Focus</span>
            <div className={styles.focusItems}>
              {executionFocus.map(({ label, icon: Icon }) => (
                <div className={styles.focusItem} key={label}>
                  <Icon size={20} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <Link className={styles.cta} href="/contracting">
            Explore Contracting <ArrowUpRightIcon size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
