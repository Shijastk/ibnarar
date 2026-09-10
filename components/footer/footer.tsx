import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import logo from "@/public/logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
] as const;

const divisions = [
  { label: "Trading & Services", href: "/trading" },
  { label: "Engineering & Contracting", href: "/contracting" },
  { label: "Heavy Equipment & Transportation", href: "/transportation" },
] as const;

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.35 6-11a6 6 0 1 0-12 0c0 5.65 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.8 3.5 9.6 7l-1.7 2.2c1.3 2.8 3 4.5 5.8 5.8l2.2-1.7 3.5 2.8c.2.2.3.5.2.8-.5 1.4-1.6 3.1-3.5 3.3C10 20.9 3.1 14 3.8 7.9 4 6 5.7 4.9 7 4.4c.3-.1.6-.1.8.1Z" />
    </svg>
  );
}

function FaxIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h10v5H7z" />
      <path d="M5 9h14a2 2 0 0 1 2 2v6h-4" />
      <path d="M7 15h10v6H7z" />
      <path d="M3 17v-6a2 2 0 0 1 2-2" />
      <circle cx="17.5" cy="12.5" r=".6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.brandColumn}>
          <Link href="/" className={styles.brand} aria-label="EBN ARAR home">
            <Image src={logo} alt="EBN ARAR" className={styles.logo} priority={false} />
          </Link>
          <p>
            EBN ARAR Trading, Contracting &amp; Transporting Co. W.L.L. is a Qatar-based company serving clients through trading, engineering, contracting, heavy-equipment and transportation solutions since 2003.
          </p>
        </div>

        <div className={styles.column}>
          <h2>Quick Links</h2>
          <nav aria-label="Footer quick links">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        </div>

        <div className={styles.column}>
          <h2>Contact Info</h2>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <PinIcon />
              <span>Furoosia Street, Building No. 7, Flat No. 10, P.B. No. 357, Qatar</span>
            </div>
            <a className={styles.contactItem} href="mailto:info@ebnarar.com">
              <MailIcon />
              <span>info@ebnarar.com</span>
            </a>
            <a className={styles.contactItem} href="tel:+9744800876">
              <PhoneIcon />
              <span>+974 55577458</span>
            </a>
            <div className={styles.contactItem}>
              <FaxIcon />
              <span>Fax: +974 55577458</span>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <h2>Our Divisions</h2>
          <nav aria-label="Footer divisions">
            {divisions.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <span>Established in Qatar since 2003</span>
        <span>© 2003 EBN ARAR Trading, Contracting &amp; Transporting Co. W.L.L. All rights reserved.</span>
        <span>State of Qatar</span>
      </div>
    </footer>
  );
}
