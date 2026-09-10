import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, ClipboardCheck, HardHat, ShieldCheck } from "lucide-react";
import engineeringVisual from "../../Industrial Warehouse Inventory Showcase.png";
import styles from "./engineering-section.module.css";

const engineeringCards = [
  {
    title: "Civil & Construction Works",
    description:
      "Construction capabilities spanning civil works, residential buildings, villas and industrial steel structures, delivered with close attention to quality and safety.",
    icon: Building2,
  },
  {
    title: "Project Management & Coordination",
    description:
      "Planning, organizing, programming and resourcing projects with coordinated support across consultants, subcontractors, suppliers and construction activities.",
    icon: ClipboardCheck,
  },
] as const;

const executionFocus = [
  { label: "Quality & Safety", icon: ShieldCheck },
  { label: "Cost-Effective Execution", icon: HardHat },
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
              src={engineeringVisual}
              alt=""
              className={styles.visual}
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
                  <Icon size={24} strokeWidth={1.9} />
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
                  <Icon size={20} aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <Link className={styles.cta} href="/contracting">
            Explore Contracting <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
