import React from 'react';
import { Send, Mail, Heart, FileText, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import styles from './Footer.module.css';

const QUICK_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      {/* Top Gradient Divider Line */}
      <div className={styles.gradientDivider} aria-hidden="true" />

      <div className="container">
        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          {/* Left Block: Brand & Tagline */}
          <div className={styles.brandBlock}>
            <div className={styles.logoRow}>
              <div className={styles.logoBadge}>&lt;P/&gt;</div>
              <span className={styles.logoText}>
                Petros Sisay Gelan<span className={styles.logoDot}>.</span>
              </span>
            </div>
            <p className={styles.tagline}>
              3rd Year Software Engineering Student at Adama Science and Technology University (ASTU).
              Passionate about building scalable full-stack applications, Flutter mobile apps, and robust systems.
            </p>
            <div className={styles.universityBadge}>
              <span>🎓 Adama Science and Technology University, Ethiopia</span>
            </div>
          </div>

          {/* Center Block: Quick Navigation */}
          <div className={styles.linksBlock}>
            <h4 className={styles.blockTitle}>Quick Navigation</h4>
            <ul className={styles.linksList}>
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Block: Social & Resources */}
          <div className={styles.socialBlock}>
            <h4 className={styles.blockTitle}>Connect &amp; Resources</h4>
            <div className={styles.socialIcons}>
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
                <Send size={18} />
              </a>
              <a
                href="mailto:petrossisay7164@gmail.com"
                className={styles.socialBtn}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <a
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cvLink}
            >
              <FileText size={16} />
              <span>View Full Curriculum Vitae</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Petros Sisay Gelan. Built with React 19 &amp; Vite.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
