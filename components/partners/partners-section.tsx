import Image from "next/image";
import styles from "./partners.module.css";

const mockPartners = [
  { name: "Northstar", src: "/mock-partners/northstar.svg" },
  { name: "Axis", src: "/mock-partners/axis.svg" },
  { name: "Vector", src: "/mock-partners/vector.svg" },
  { name: "Portline", src: "/mock-partners/portline.svg" },
  { name: "Structa", src: "/mock-partners/structa.svg" },
] as const;

/**
 * MOCK partner logos only.
 * Replace these entries with verified EBN ARAR partner logos before production.
 */
export function PartnersSection() {
  return (
    <section className={styles.section} aria-labelledby="partners-title">
      <div className={styles.container}>
        <h2 id="partners-title" className={styles.title}>
          Our Strategic Partners
        </h2>

        <div className={styles.grid}>
          {mockPartners.map((partner) => (
            <div className={styles.logoBox} key={partner.name}>
              <Image
                className={styles.logo}
                src={partner.src}
                alt={`${partner.name} logo — mock placeholder`}
                width={220}
                height={64}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
