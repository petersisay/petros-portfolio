import React from 'react'
import { Award, Code2, GraduationCap, ArrowUpRight, Hammer } from 'lucide-react'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">02 / About</div>
          <h2 className="section-title">Architecting with Purpose</h2>
        </div>

        <div className={styles.bentoGrid}>
          {/* 1. Large cell: Who I Am */}
          <div className={`${styles.bentoCard} ${styles.cellBio} reveal`}>
            <div className={styles.cardHeader}>
              <Code2 size={22} className={styles.headerIcon} />
              <span className={styles.cardTag}>Engineering Philosophy</span>
            </div>
            <h3 className={styles.bioHeading}>Who I Am</h3>
            <p className={styles.bioText}>
              I&apos;m a 3rd-year Software Engineering student at Adama Science and Technology
              University (ASTU) in Adama, Ethiopia. My focus is on constructing resilient,
              production-grade web platforms and native mobile applications that solve tangible
              infrastructure challenges across Ethiopia and Africa.
            </p>
            <p className={styles.bioText}>
              During my engineering internship at <strong>AIG-Tech Enterprise</strong> (Adama
              Investment Group), I engineered high-throughput Express REST APIs with MongoDB Atlas
              and 2dsphere geospatial indexing, implemented real-time Socket.IO courier tracking
              with municipal boundary geofencing, and integrated Chapa and Telebirr payment webhooks
              — earning an exemplary <strong>A+ evaluation</strong>.
            </p>
            <p className={styles.bioText}>
              I approach software with strict architectural discipline: strict type safety, modular
              separation of concerns, comprehensive automated test coverage, and clean, intuitive user
              interfaces.
            </p>
          </div>

          {/* 2. Tall cell: Profile Photo with decorative frame */}
          <div className={`${styles.bentoCard} ${styles.cellPhoto} reveal`}>
            <div className={styles.photoContainer}>
              <img
                src="/profile.jpg"
                alt="Petros Sisay Gelan portrait"
                className={styles.portraitImg}
                loading="lazy"
              />
              <div className={styles.photoPatternOverlay} />
              <div className={styles.photoCaption}>
                <span className={styles.photoName}>Petros Sisay Gelan</span>
                <span className={styles.photoRole}>ASTU · Software Engineering</span>
              </div>
            </div>
          </div>

          {/* 3. Stat cell: Projects Built */}
          <div className={`${styles.bentoCard} ${styles.cellStat} reveal`}>
            <div className={styles.statIconWrapper}>
              <Code2 size={20} />
            </div>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Projects Built</div>
            <div className={styles.statDesc}>Web, mobile & systems</div>
          </div>

          {/* 4. Stat cell: Internship Grade */}
          <div className={`${styles.bentoCard} ${styles.cellStat} ${styles.statAccentCard} reveal`}>
            <div className={styles.statIconWrapper}>
              <Award size={20} />
            </div>
            <div className={`${styles.statNumber} ${styles.accentNumber}`}>A+</div>
            <div className={styles.statLabel}>Internship Grade</div>
            <div className={styles.statDesc}>AIG-Tech Enterprise</div>
          </div>

          {/* 5. Stat cell: Year at ASTU */}
          <div className={`${styles.bentoCard} ${styles.cellStat} reveal`}>
            <div className={styles.statIconWrapper}>
              <GraduationCap size={20} />
            </div>
            <div className={styles.statNumber}>3rd</div>
            <div className={styles.statLabel}>Year at ASTU</div>
            <div className={styles.statDesc}>B.Sc. Software Engineering</div>
          </div>

          {/* 6. Wide cell: Currently Building */}
          <div className={`${styles.bentoCard} ${styles.cellBuilding} reveal`}>
            <div className={styles.buildingHeader}>
              <div className={styles.buildingTitleRow}>
                <Hammer size={18} className={styles.buildingIcon} />
                <span className={styles.buildingTitle}>Currently Building in Production</span>
              </div>
              <span className={styles.buildingBadge}>Active Engineering</span>
            </div>

            <div className={styles.chipsGrid}>
              <div className={styles.projectPill}>
                <div className={styles.pillTop}>
                  <span className={styles.pillName}>TemariHub</span>
                  <span className={styles.pillTag}>STEM Tracker</span>
                </div>
                <p className={styles.pillDesc}>
                  Ethiopian STEM opportunity discovery platform with 125+ automated Vitest tests and
                  bilingual interface.
                </p>
              </div>

              <div className={styles.projectPill}>
                <div className={styles.pillTop}>
                  <span className={styles.pillName}>Lehulu</span>
                  <span className={styles.pillTag}>Services Marketplace</span>
                </div>
                <p className={styles.pillDesc}>
                  Trust-first local services marketplace featuring municipal geospatial boundaries across
                  Adama & Addis Ababa.
                </p>
              </div>

              <div className={styles.projectPill}>
                <div className={styles.pillTop}>
                  <span className={styles.pillName}>Revola</span>
                  <span className={styles.pillTag}>Circular Economy</span>
                </div>
                <p className={styles.pillDesc}>
                  Circular materials marketplace with Chapa ETB payment gateway and Leaflet depot mapping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
