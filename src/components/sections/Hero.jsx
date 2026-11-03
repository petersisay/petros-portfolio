import React, { useState, useEffect } from 'react'
import { ArrowDownRight, FileText, Mail, Sparkles, Terminal } from 'lucide-react'
import { Github, Linkedin, Telegram } from '../common/Icons'
import { siteConfig } from '../../data/config'
import styles from './Hero.module.css'

const ROLES = [
  'Full-Stack Developer',
  'Software Engineering Student',
  'React & Node.js Engineer',
  'Flutter Mobile Developer',
  'API & Database Architect',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
        setIsFading(false)
      }, 300)
    }, 3200)

    return () => clearInterval(interval)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className={styles.heroSection}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <div className={styles.sectionBadge}>
              <span className="mono">01 —</span>
              <span className={styles.subTitle}>ASTU · Software Engineering · 4th Year</span>
            </div>

            <div className={styles.headerBlock}>
              <h2 className={styles.name}>{siteConfig.name}</h2>
              <div className={styles.typewriterRow}>
                <Terminal size={18} className={styles.termIcon} aria-hidden="true" />
                <span className={`${styles.roleText} ${isFading ? styles.fadeOut : styles.fadeIn}`}>
                  {ROLES[roleIndex]}
                </span>
                <span className={styles.cursor} aria-hidden="true" />
              </div>
            </div>

            <h1 className={styles.headline}>
              Building Digital Products That Solve Real Problems.
            </h1>

            <p className={styles.bio}>
              I design, develop, and deploy practical software solutions using modern technologies,
              combining thoughtful engineering, problem-solving, and user-centered design.
            </p>

            <div className={styles.metaStrip}>
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>Institution:</span>
                <span className={styles.metaVal}>ASTU (Adama, Ethiopia)</span>
              </div>
              <span className={styles.metaDivider}>·</span>
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>Status:</span>
                <span className={styles.statusPill}>
                  <span className={styles.statusDot} />
                  Open to Internships &amp; Roles
                </span>
              </div>
            </div>

            <div className={styles.ctaRow}>
              <a href="#projects" onClick={(e) => scrollTo(e, 'projects')} className={styles.primaryBtn}>
                Explore My Work
                <ArrowDownRight size={18} />
              </a>
              <a href={siteConfig.cvPath} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                <FileText size={18} />
                Download CV
              </a>
              <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className={styles.tertiaryBtn}>
                <Mail size={16} />
                Contact Me
              </a>
            </div>

            <div className={styles.socialRow}>
              <span className={styles.socialLabel}>Direct Profiles:</span>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub Profile"
              >
                <Github size={17} />
                <span>GitHub</span>
              </a>
              <span className={styles.divider}>/</span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={17} />
                <span>LinkedIn</span>
              </a>
              <span className={styles.divider}>/</span>
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Telegram Profile"
              >
                <Telegram size={17} />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightCol}>
            <div className={styles.avatarWrapper}>
              <div className={styles.glowRing} />
              <img
                src={siteConfig.profilePhoto}
                alt={siteConfig.name}
                className={styles.avatar}
                width="340"
                height="340"
              />

              {/* 3 Genuine Verified Chips */}
              <div className={`${styles.floatingChip} ${styles.chipOne}`}>
                <Sparkles size={14} className={styles.chipIcon} />
                <span>A+ Intern · AIG-Tech</span>
              </div>

              <div className={`${styles.floatingChip} ${styles.chipTwo}`}>
                <span className={styles.dotAccent} />
                <span>ASTU 4th Year</span>
              </div>

              <div className={`${styles.floatingChip} ${styles.chipThree}`}>
                <span className={styles.dotAccent} />
                <span>Full-Stack &amp; Flutter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
