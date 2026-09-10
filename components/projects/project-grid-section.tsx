import styles from "./project-grid.module.css";

const projectCapabilities = [
  {
    title: "Civil & Construction Works",
    description: "Residential buildings, villas and civil construction delivered with dependable project coordination, quality and safety in focus.",
    image:
      "https://images.unsplash.com/photo-1694521787162-5373b598945c?auto=format&fit=crop&w=1400&q=82",
    position: "center 45%",
  },
  {
    title: "Industrial Steel Structures",
    description: "Industrial steel-structure work supported by experienced planning, resourcing and coordination across project stakeholders.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1400&q=82",
    position: "center",
  },
  {
    title: "Heavy Equipment & Site Support",
    description: "Equipment and transportation support for construction and excavation requirements, including rental and sales capabilities.",
    image:
      "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=1400&q=82",
    position: "center 55%",
  },
  {
    title: "Industrial Supply & Trading",
    description: "Supply of industrial products, electrical items, hardware, tools, equipment, vehicles, consumables and safety products.",
    image:
      "https://images.unsplash.com/photo-1635335874521-7987db781153?auto=format&fit=crop&w=1400&q=82",
    position: "center",
  },
] as const;

export function ProjectGridSection() {
  return (
    <section className={styles.section} aria-labelledby="project-capabilities-title">
      <div className={styles.container}>
        <div className={styles.headingWrap}>
          <p className={styles.eyebrow}>Our Capabilities</p>
          <h2 id="project-capabilities-title" className={styles.heading}>
            Project &amp; Work Capabilities
          </h2>
        </div>

        <div className={styles.grid}>
          {projectCapabilities.map((item) => (
            <article className={styles.card} key={item.title}>
              <img
                className={styles.image}
                src={item.image}
                alt=""
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                style={{ objectPosition: item.position }}
              />
              <div className={styles.overlay} aria-hidden="true" />
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
