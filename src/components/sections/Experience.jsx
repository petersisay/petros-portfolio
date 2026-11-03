import React from 'react'
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react'
import styles from './Experience.module.css'

const IN_PROGRESS_PROJECTS = [
  {
    title: 'TemariHub',
    tagline: 'STEM Opportunity Tracker',
    desc: 'Bilingual opportunity platform for Ethiopian STEM students with 125+ automated Vitest tests, CSRF security, and 7-stage application tracking.',
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB Atlas', 'Vitest'],
    link: '#projects',
  },
  {
    title: 'Lehulu',
    tagline: 'Services Marketplace',
    desc: 'Local services marketplace with geospatial municipal boundaries across Adama, Bishoftu, and Addis Ababa, connecting households with verified specialists.',
    tech: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB Atlas', 'Geospatial'],
    link: '#projects',
  },
  {
    title: 'Revola',
    tagline: 'Circular Marketplace',
    desc: 'Circular materials marketplace with Chapa ETB payment gateway, Leaflet depot mapping with 2dsphere indexing, and companion Flutter mobile app.',
    tech: ['React 19', 'TypeScript', 'Express', 'MongoDB Atlas', 'Chapa API', 'Flutter'],
    link: '#projects',
  },
]

export default function Experience() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    const el = document.getElementById('projects')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">03 / Experience</div>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        {/* Featured Internship Card */}
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
              Worked in the <strong>Innovation & Development Department</strong> under the mentorship of{' '}
              <strong>Mr. Million Sime</strong>.
            </div>

            <div className={styles.achievements}>
              <h4 className={styles.achievementsTitle}>Key Deliverables & Systems Built:</h4>
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
                    with municipal boundary geofencing to dispatch delivery events with low latency.
                  </span>
                </li>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={18} className={styles.bulletIcon} />
                  <span>
                    Integrated secure fintech payment webhooks for <strong>Chapa</strong> and{' '}
                    <strong>Telebirr</strong>, ensuring cryptographic payload validation and transactional
                    reliability.
                  </span>
                </li>
                <li className={styles.bulletItem}>
                  <CheckCircle2 size={18} className={styles.bulletIcon} />
                  <span>
                    Designed end-to-end geospatial data ingestion pipelines supporting scalable urban delivery
                    and localized routing services.
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

        {/* Currently Building Sub-section */}
        <div className={styles.inProgressSection}>
          <div className="reveal">
            <div className={styles.subHeader}>
              <h3 className={styles.subHeading}>Currently Building (4th Year Engineering)</h3>
              <span className={styles.inProgressBadge}>🔨 In Progress</span>
            </div>
            <p className={styles.subDesc}>
              Large-scale systems currently undergoing active development, testing, and production
              rollout.
            </p>
          </div>

          <div className={styles.inProgressGrid}>
            {IN_PROGRESS_PROJECTS.map((proj) => (
              <div key={proj.title} className={`${styles.inProgressCard} reveal`}>
                <div className={styles.inProgressCardHeader}>
                  <span className={styles.inProgressCardTag}>🔨 In Progress</span>
                  <span className={styles.inProgressCategory}>{proj.tagline}</span>
                </div>
                <h4 className={styles.inProgressTitle}>{proj.title}</h4>
                <p className={styles.inProgressDesc}>{proj.desc}</p>

                <div className={styles.inProgressTech}>
                  {proj.tech.map((t) => (
                    <span key={t} className={styles.miniTechPill}>
                      {t}
                    </span>
                  ))}
                </div>

                <a href={proj.link} onClick={scrollToProjects} className={styles.viewLink}>
                  <span>Explore details</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
