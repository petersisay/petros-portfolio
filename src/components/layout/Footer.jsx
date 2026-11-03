import React from 'react'
import { ArrowUp } from 'lucide-react'
import { Github, Linkedin, Telegram } from '../common/Icons'
import { siteConfig } from '../../data/config'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.infoCol}>
            <div className={styles.nameRow}>
              <span className={styles.nameAccent}>{siteConfig.name}</span>
              <span className={styles.dotSeparator}>•</span>
              <span className={styles.roleText}>
                Fourth-Year Software Engineering Student @ ASTU
              </span>
            </div>
            <p className={styles.builtInfo}>
              Designed &amp; Engineered by {siteConfig.name} · {currentYear}
            </p>
            <p className={styles.techInfo}>
              Built with React 19 + Vite 8 + CSS Modules · Deployed on Vercel
            </p>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.socials}>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Telegram Profile"
              >
                <Telegram size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className={styles.backToTopBtn}
              aria-label="Return to top of page"
              title="Return to top"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
