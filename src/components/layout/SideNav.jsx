import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { Github, Linkedin, Telegram } from '../common/Icons'
import styles from './SideNav.module.css'

const NAV_ITEMS = [
  { id: 'hero', number: '01', label: 'Hero' },
  { id: 'about', number: '02', label: 'About' },
  { id: 'experience', number: '03', label: 'Experience' },
  { id: 'projects', number: '04', label: 'Work' },
  { id: 'skills', number: '05', label: 'Skills' },
  { id: 'contact', number: '06', label: 'Contact' },
]

export default function SideNav({ active, theme, toggleTheme }) {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <aside className={styles.sideNav}>
      <div className={styles.top}>
        <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className={styles.logo}>
          <span className={styles.logoAccent}>P</span>SG
        </a>
        <div className={styles.roleSub}>Full-Stack Developer</div>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollTo(e, item.id)}
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
            >
              <span className={styles.navNumber}>{item.number}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </a>
          )
        })}
      </nav>

      <div className={styles.bottom}>
        <div className={styles.socials}>
          <a
            href="https://github.com/petrossisay1646"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={styles.socialBtn}
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/petros-sisay-gelan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={styles.socialBtn}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://t.me/Petros_sisay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram Profile"
            className={styles.socialBtn}
          >
            <Telegram size={18} />
          </a>
        </div>

        <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </aside>
  )
}
