import React from 'react'
import { ArrowUp } from 'lucide-react'
import { Github, Linkedin, Telegram } from '../common/Icons'
import styles from './Footer.module.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.infoCol}>
            <div className={styles.nameRow}>
              <span className={styles.nameAccent}>Petros Sisay Gelan</span>
              <span className={styles.dotSeparator}>•</span>
              <span className={styles.roleText}>Software Engineering Student @ ASTU</span>
            </div>
            <p className={styles.builtInfo}>Designed &amp; Built by Petros Sisay Gelan · 2026</p>
            <p className={styles.techInfo}>Built with React 19 + Vite · Deployed on Vercel</p>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.socials}>
              <a
                href="https://github.com/petrossisay1646"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/petros-sisay-gelan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://t.me/Petros_sisay"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Telegram"
              >
                <Telegram size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className={styles.backToTopBtn}
              aria-label="Back to top"
              title="Back to top"
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
