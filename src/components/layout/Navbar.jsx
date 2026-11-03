import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = ['hero', 'about', 'skills', 'projects', 'services', 'journey', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo */}
        <a href="#hero" className={styles.logo} onClick={closeMobileMenu}>
          <div className={styles.logoBadge}>&lt;P/&gt;</div>
          <span className={styles.logoText}>
            Petros<span className={styles.logoDot}>.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={styles.navLinks} aria-label="Main Navigation">
          {NAV_LINKS.map(link => {
            const sectionKey = link.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className={styles.rightActions}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className={styles.themeIcon} size={19} />
            ) : (
              <Moon className={styles.themeIcon} size={19} />
            )}
          </button>

          <a href="#contact" className={styles.hireBtn}>
            <Sparkles size={16} />
            <span>Hire Me</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className={styles.mobileNavLinks}>
          {NAV_LINKS.map(link => {
            const sectionKey = link.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className={`btn-primary ${styles.mobileHireBtn}`}
            onClick={closeMobileMenu}
          >
            <Sparkles size={18} />
            <span>Hire Me</span>
          </a>
        </div>
      </div>
    </header>
  );
}
