import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Github, Linkedin, Telegram } from '../common/Icons'
import { siteConfig } from '../../data/config'
import styles from './MobileNav.module.css'

const NAV_ITEMS = [
  { id: 'hero', number: '01', label: 'Hero' },
  { id: 'about', number: '02', label: 'About' },
  { id: 'experience', number: '03', label: 'Experience' },
  { id: 'projects', number: '04', label: 'Projects' },
  { id: 'skills', number: '05', label: 'Arsenal' },
  { id: 'contact', number: '06', label: 'Contact' },
]

export default function MobileNav({ active, theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={styles.mobileNav}>
      <div className={styles.bar}>
        <a href="#hero" onClick={() => handleNavClick('hero')} className={styles.logo}>
          <span className={styles.logoAccent}>P</span>SG
        </a>

        <div className={styles.actions}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.menuToggle}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={styles.overlay}>
          <nav className={styles.navList} aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
                className={`${styles.navItem} ${active === item.id ? styles.active : ''}`}
              >
                <span className={styles.navNumber}>{item.number}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className={styles.bottomSocials}>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={styles.socialBtn}
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={styles.socialBtn}
            >
              <Linkedin size={20} />
            </a>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram Profile"
              className={styles.socialBtn}
            >
              <Telegram size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
