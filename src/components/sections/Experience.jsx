import React from 'react'
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  BookOpen,
  Building2,
  Code2,
} from 'lucide-react'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">05 / Experience &amp; Education</div>
          <h2 className="section-title">Academic &amp; Professional Milestones</h2>
          <p className={styles.sectionSubtitle}>
            A verified timeline distinguishing formal university engineering education, industrial
            internship contributions, and independent software development.
          </p>
        </div>

        {/* 1. Academic Education Card */}
        <div className={`${styles.mainCard} ${styles.eduCard} reveal`}>
          <div className={`${styles.accentBar} ${styles.eduAccentBar}`} />

          <div className={styles.cardContent}>
            <div className={styles.cardTop}>
              <div>
                <span className={styles.typePill}>Formal University Education</span>
                <h3 className={styles.companyName}>Adama Science and Technology University (ASTU)</h3>
                <div className={styles.roleName}>
                  B.Sc. in Software Engineering — Fourth-Year, First-Semester Student
                </div>
              </div>

              <div className={styles.badgeCol}>
                <div className={styles.statusBadge}>
                  <GraduationCap size={16} />
                  <span>Senior Undergrad</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaItem}>
                    <Calendar size={14} /> 2023 – Present
                  </span>
                  <span className={styles.metaDivider}>•</span>
                  <span className={styles.metaItem}>
                    <MapPin size={14} /> Adama, Ethiopia
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.departmentNote}>
              Department of <strong>Software Engineering</strong>, School of Electrical Engineering &amp; Computing.
            </div>

            <div className={styles.achievements}>
              <h4 className={styles.achievementsTitle}>Core Academic Pillars &amp; Disciplines:</h4>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={18} className={styles.bulletIcon} />
                  <span>
                    Mastered computational fundamentals: <strong>Data Structures &amp; Algorithms</strong>,{' '}
                    <strong>Object-Oriented Analysis &amp; Design (OOAD)</strong>, and formal{' '}
                    <strong>Software Engineering Methodologies</strong>.
                  </span>
                </li>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={18} className={styles.bulletIcon} />
                  <span>
                    Designed relational databases using <strong>MySQL</strong> with strict 3NF normalization,
                    indexing, transactions, and JDBC persistence layers.
                  </span>
                </li>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={18} className={styles.bulletIcon} />
                  <span>
                    Completed advanced coursework in <strong>Operating Systems</strong>,{' '}
                    <strong>Computer Networking (TCP/IP, Sockets)</strong>, and <strong>Distributed Web Architecture</strong>.
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.techPillRow}>
              {[
                'Data Structures',
                'Algorithms',
                'Software Architecture',
                'Java EE',
                'MySQL / SQL',
                'Operating Systems',
                'Computer Networks',
                'Object-Oriented Design',
              ].map((topic) => (
                <span key={topic} className={styles.techPill}>
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Professional Internship Card */}
        <div className={`${styles.mainCard} reveal`}>
          <div className={styles.accentBar} />

          <div className={styles.cardContent}>
            <div className={styles.cardTop}>
              <div>
                <span className={styles.companySub}>Adama Investment Group</span>
                <h3 className={styles.companyName}>AIG-Tech Enterprise</h3>
                <div className={styles.roleName}>Full-Stack Web Development Intern</div>
              </div>

              <div className={styles.badgeCol}>
                <div className={styles.gradeBadge}>
                  <Award size={16} />
                  <span>Evaluation: A+</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaItem}>
                    <Calendar size={14} /> Aug – Sep 2026
                  </span>
                  <span className={styles.metaDivider}>•</span>
                  <span className={styles.metaItem}>
                    <MapPin size={14} /> Adama, Ethiopia
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.departmentNote}>
              Completed practical industrial training in the <strong>Innovation &amp; Development Department</strong> under
              the mentorship of <strong>Mr. Million Sime</strong>.
            </div>

            <div className={styles.achievements}>
              <h4 className={styles.achievementsTitle}>Key Deliverables &amp; Systems Engineered:</h4>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={18} className={styles.bulletIcon} />
                  <span>
                    Engineered high-throughput <strong>Express REST APIs</strong> backed by{' '}
                    <strong>MongoDB Atlas</strong> with <strong>2dsphere geospatial indexing</strong> for
                    rapid location-based spatial queries.
                  </span>
                </li>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={18} className={styles.bulletIcon} />
                  <span>
                    Architected <strong>Socket.IO real-time courier tracking</strong> pipelines integrated
                    with municipal boundary geofencing to dispatch delivery telemetry with sub-second latency.
                  </span>
                </li>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={18} className={styles.bulletIcon} />
                  <span>
                    Integrated secure fintech payment webhooks for <strong>Chapa</strong> and{' '}
                    <strong>Telebirr</strong>, ensuring cryptographic payload validation and transactional
                    idempotency.
                  </span>
                </li>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={18} className={styles.bulletIcon} />
                  <span>
                    Designed end-to-end geospatial data ingestion pipelines supporting scalable urban delivery
                    and localized routing services in regional hubs.
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.techPillRow}>
              {[
                'Node.js',
                'Express 5',
                'MongoDB Atlas',
                'Socket.IO',
                '2dsphere Geospatial',
                'Chapa API',
                'Telebirr',
                'REST APIs',
              ].map((tech) => (
                <span key={tech} className={styles.techPill}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Engineering Work Classification Note */}
        <div className={`${styles.classificationBox} reveal`}>
          <div className={styles.classHeader}>
            <Building2 size={20} className={styles.classIcon} />
            <h4 className={styles.classTitle}>Engineering Distinction Protocol</h4>
          </div>
          <p className={styles.classDesc}>
            To maintain complete transparency and professional integrity, every item in this portfolio
            is strictly categorized:
          </p>
          <div className={styles.classGrid}>
            <div className={styles.classCard}>
              <span className={styles.classCardTag}>Industry Internship</span>
              <p className={styles.classCardText}>
                Production enterprise services developed under direct supervision at AIG-Tech Enterprise.
              </p>
            </div>
            <div className={styles.classCard}>
              <span className={styles.classCardTag}>Independent Full-Stack</span>
              <p className={styles.classCardText}>
                Autonomous production deployments addressing civic, educational, and logistics needs (Revola, PetroFlow, TemariHub, Lehulu, CodeTogether).
              </p>
            </div>
            <div className={styles.classCard}>
              <span className={styles.classCardTag}>Academic &amp; In-Development</span>
              <p className={styles.classCardText}>
                University laboratory architectures and course projects (EngiLab, Student Registration System, Java Multi-Client Chat).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
