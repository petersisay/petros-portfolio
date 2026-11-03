import React, { useState, useEffect } from 'react'
import { ArrowDownRight, FileText, Sparkles } from 'lucide-react'
import { Github, Linkedin, Telegram } from '../common/Icons'
import styles from './Hero.module.css'

const ROLES = [
  'Full-Stack Developer',
  'React & Node.js Dev',
  'Flutter Mobile Engineer',
  'Java Software Engineer',
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
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = (e) => {
    e.preventDefault()
    const el = document.getElementById('projects')
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
              <span className={styles.subTitle}>Software Engineering Student · ASTU, Ethiopia</span>
            </div>

            <h1 className={styles.name}>Petros Sisay Gelan</h1>

            <div className={styles.typewriterRow}>
              <span className={`${styles.roleText} ${isFading ? styles.fadeOut : styles.fadeIn}`}>
                {ROLES[roleIndex]}
              </span>
              <span className={styles.cursor} aria-hidden="true" />
            </div>

            <p className={styles.bio}>
              Building real-world digital products — from civic platforms to mobile apps — with clean
              code, thoughtful architecture, and a passion for solving problems that matter in
              Ethiopia and beyond.
            </p>

            <div className={styles.statusPill}>
              <span className={styles.statusDot} />
              <span>Open to Internships & Junior Roles</span>
            </div>

            <div className={styles.ctaRow}>
              <a href="#projects" onClick={scrollToProjects} className={styles.primaryBtn}>
                View Projects
                <ArrowDownRight size={18} />
              </a>
              <a href="/cv.html" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                <FileText size={18} />
                Download CV
              </a>
            </div>

            <div className={styles.socialRow}>
              <span className={styles.socialLabel}>Connect:</span>
              <a
                href="https://github.com/petrossisay1646"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <span className={styles.divider}>/</span>
              <a
                href="https://www.linkedin.com/in/petros-sisay-gelan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <span className={styles.divider}>/</span>
              <a
                href="https://t.me/Petros_sisay"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Telegram"
              >
                <Telegram size={18} />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightCol}>
            <div className={styles.avatarWrapper}>
              <div className={styles.glowRing} />
              <img
                src="/profile.jpg"
                alt="Petros Sisay Gelan"
                className={styles.avatar}
                width="340"
                height="340"
              />

              {/* 3 Floating Info Chips */}
              <div className={`${styles.floatingChip} ${styles.chipOne}`}>
                <Sparkles size={14} className={styles.chipIcon} />
                <span>A+ Intern · AIG-Tech</span>
              </div>

              <div className={`${styles.floatingChip} ${styles.chipTwo}`}>
                <span className={styles.dotAccent} />
                <span>MERN Stack</span>
              </div>

              <div className={`${styles.floatingChip} ${styles.chipThree}`}>
                <span className={styles.dotAccent} />
                <span>Flutter Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
