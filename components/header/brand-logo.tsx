import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export function BrandLogo({ src }: { src: string | StaticImageData }) {
  return (
    <Link
      href="/"
      className={styles.brand}
      aria-label="EBN ARAR Trading, Contracting and Transport Company — Home"
    >
      <span className={styles.brandMark}>
        <Image src={src} alt="" fill sizes="84px" preload className={styles.logo} />
      </span>
      <span className={styles.wordmark}>
        <span className={styles.wordmarkArabic} lang="ar" dir="rtl">
          شركة ابن عرار للتجارة والمقاولات والنقليات
        </span>
        <span className={styles.wordmarkEnglish} lang="en">
          EBN ARAR TRADING &amp; CONT&amp; TRANSPORT CO.
        </span>
      </span>
    </Link>
  );
}
