import React from 'react'
import { Award, Code2, GraduationCap, Hammer, Layers, Cpu } from 'lucide-react'
import { siteConfig } from '../../data/config'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">02 / About Me</div>
          <h2 className="section-title">Engineering Practical Solutions</h2>
        </div>

        <div className={styles.bentoGrid}>
          {/* 1. Large cell: Who I Am */}
          <div className={`${styles.bentoCard} ${styles.cellBio} reveal`}>
            <div className={styles.cardHeader}>
              <Code2 size={22} className={styles.headerIcon} />
              <span className={styles.cardTag}>Professional Introduction</span>
            </div>
            <h3 className={styles.bioHeading}>Who I Am</h3>
            <p className={styles.bioText}>
              I&apos;m a <strong>Fourth-year, first-semester Software Engineering student</strong> at{' '}
              <strong>Adama Science and Technology University (ASTU)</strong> in Adama, Ethiopia.
              My work centers on designing, engineering, and deploying practical software products
              that combine rigorous computational architecture with intuitive, accessible user
              experiences.
            </p>
            <p className={styles.bioText}>
              My engineering interests span the full application lifecycle:
            </p>
            <ul className={styles.focusList}>
              <li>
                <strong>Full-Stack &amp; Architecture:</strong> Developing scalable React 19 and
                TypeScript web platforms with clear separation of concerns.
              </li>
              <li>
                <strong>Backend &amp; API Engineering:</strong> Architecting resilient Node.js, Express,
                and Java backend services, event-driven Socket.IO channels, and secure RESTful APIs.
              </li>
              <li>
                <strong>Database Modeling:</strong> Designing normalized relational MySQL schemas and
                high-throughput MongoDB Atlas document stores with 2dsphere geospatial indexing.
              </li>
              <li>
                <strong>Mobile Engineering:</strong> Building cross-platform Flutter applications
                structured around Clean Architecture, Riverpod state management, and offline SQLite caching.
              </li>
              <li>
                <strong>Practical Digital Solutions:</strong> Delivering civic and educational platforms
                specifically tailored to solve regional infrastructure bottlenecks in Ethiopia.
              </li>
            </ul>
            <p className={styles.bioText}>
              During my industrial internship at <strong>AIG-Tech Enterprise</strong> (Adama
              Investment Group) within the Innovation &amp; Development Department, I engineered
              express REST services, municipal geospatial geofencing, real-time courier telemetry,
              and Chapa payment webhooks, earning an <strong>A+ performance evaluation</strong>.
            </p>
          </div>

          {/* 2. Tall cell: Portrait with technical frame */}
          <div className={`${styles.bentoCard} ${styles.cellPhoto} reveal`}>
            <div className={styles.photoContainer}>
              <img
                src={siteConfig.profilePhoto}
                alt={siteConfig.name}
                className={styles.portraitImg}
                loading="lazy"
                width="380"
                height="460"
              />
              <div className={styles.photoPatternOverlay} />
              <div className={styles.photoCaption}>
                <span className={styles.photoName}>{siteConfig.name}</span>
                <span className={styles.photoRole}>ASTU · 4th Year Software Engineering</span>
              </div>
            </div>
          </div>

          {/* 3. Stat cell: Projects Built */}
          <div className={`${styles.bentoCard} ${styles.cellStat} reveal`}>
            <div className={styles.statIconWrapper}>
              <Layers size={20} />
            </div>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Projects Built</div>
            <div className={styles.statDesc}>Web, mobile, desktop &amp; systems</div>
          </div>

          {/* 4. Stat cell: Internship Evaluation */}
          <div className={`${styles.bentoCard} ${styles.cellStat} ${styles.statAccentCard} reveal`}>
            <div className={styles.statIconWrapper}>
              <Award size={20} />
            </div>
            <div className={`${styles.statNumber} ${styles.accentNumber}`}>A+</div>
            <div className={styles.statLabel}>Internship Evaluation</div>
            <div className={styles.statDesc}>AIG-Tech Enterprise (Innovation Dept)</div>
          </div>

          {/* 5. Stat cell: Academic Year */}
          <div className={`${styles.bentoCard} ${styles.cellStat} reveal`}>
            <div className={styles.statIconWrapper}>
              <GraduationCap size={20} />
            </div>
            <div className={styles.statNumber}>4th</div>
            <div className={styles.statLabel}>Year at ASTU</div>
            <div className={styles.statDesc}>B.Sc. Software Engineering</div>
          </div>

          {/* 6. Wide cell: Active Engineering Focus */}
          <div className={`${styles.bentoCard} ${styles.cellBuilding} reveal`}>
            <div className={styles.buildingHeader}>
              <div className={styles.buildingTitleRow}>
                <Cpu size={18} className={styles.buildingIcon} />
                <span className={styles.buildingTitle}>Active Engineering Focus</span>
              </div>
              <span className={styles.buildingBadge}>4th Year Senior Engineering</span>
            </div>

            <div className={styles.chipsGrid}>
              <div className={styles.projectPill}>
                <div className={styles.pillTop}>
                  <span className={styles.pillName}>TemariHub</span>
                  <span className={styles.pillTag}>STEM Discovery</span>
                </div>
                <p className={styles.pillDesc}>
                  Bilingual career discovery &amp; 7-stage application tracking platform with 125+
                  automated Vitest tests.
                </p>
              </div>

              <div className={styles.projectPill}>
                <div className={styles.pillTop}>
                  <span className={styles.pillName}>Revola</span>
                  <span className={styles.pillTag}>Circular Economy</span>
                </div>
                <p className={styles.pillDesc}>
                  Managed materials marketplace with Chapa ETB payment processing and Leaflet geospatial
                  depot mapping.
                </p>
              </div>

              <div className={styles.projectPill}>
                <div className={styles.pillTop}>
                  <span className={styles.pillName}>EngiLab</span>
                  <span className={styles.pillTag}>In Development</span>
                </div>
                <p className={styles.pillDesc}>
                  Academic engineering laboratory management and experiment learning platform for ASTU.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
