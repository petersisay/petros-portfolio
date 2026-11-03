import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  FileDown,
  Send,
  Sparkles,
  Layers,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import styles from './Hero.module.css';

const ROLES = [
  'Full-Stack Developer',
  'React & Node.js',
  'Flutter Mobile Dev',
  'Java Engineer',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className={styles.heroSection}>
      {/* 3 Animated Background Blobs */}
      <div className={styles.blobContainer} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blobViolet}`} />
        <div className={`${styles.blob} ${styles.blobPink}`} />
        <div className={`${styles.blob} ${styles.blobCyan}`} />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        {/* Left Content (60%) */}
        <div className={styles.heroContent}>
          {/* Status Badge */}
          <div className={styles.badgeWrapper}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <Sparkles size={14} className={styles.badgeIcon} />
              <span>Open to Internships & Junior Roles</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className={styles.title}>
            Hi, I'm <br />
            <span className="gradient-text">Petros Sisay Gelan</span>
          </h1>

          {/* Dynamic Typewriter Role */}
          <h2 className={styles.typewriterWrapper}>
            <span className={styles.typewriterPrefix}>I am a </span>
            <span className={styles.typewriterText}>{text}</span>
            <span className={styles.typewriterCursor}>|</span>
          </h2>

          {/* Short Bio */}
          <p className={styles.bio}>
            3rd Year Software Engineering Student at <strong>Adama Science and Technology University (ASTU)</strong>, Ethiopia.
            Specializing in modern full-stack web applications, cross-platform Flutter mobile experiences,
            and reliable backend database architectures.
          </p>

          {/* Call to Actions */}
          <div className={styles.ctaGroup}>
            <a href="#projects" className="btn-primary">
              <span>View My Work</span>
              <ArrowDown size={18} />
            </a>
            <a
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FileDown size={18} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className={styles.socialRow}>
            <a
              href="https://github.com/petrossisay1646"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={styles.socialLink}
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/petros-sisay-gelan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={styles.socialLink}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://t.me/Petros_sisay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram Profile"
              className={styles.socialLink}
            >
              <Send size={20} />
            </a>
            <a
              href="mailto:petrossisay7164@gmail.com"
              aria-label="Direct Email"
              className={styles.socialLink}
            >
              <span className={styles.emailPill}>petrossisay7164@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Right Side (40%): Profile Photo & Rotating Gradient Frame */}
        <div className={styles.heroMedia}>
          <div className={styles.avatarWrapper}>
            {/* Rotating gradient ring */}
            <div className={styles.rotatingRing} aria-hidden="true" />

            {/* Profile Photo Image */}
            <div className={styles.photoContainer}>
              <img
                src="/profile.jpg"
                alt="Petros Sisay Gelan"
                className={styles.profileImg}
                onError={(e) => {
                  // Fallback in case of missing asset
                  e.target.src = '/profile.webp';
                }}
              />
            </div>

            {/* Floating Stats Badges */}
            <div className={`${styles.floatingBadge} ${styles.badgeTopRight}`}>
              <div className={styles.floatingIconViolet}>⚡</div>
              <div>
                <strong className={styles.floatingTitle}>10+ Projects</strong>
                <span className={styles.floatingSubtitle}>Shipped & Live</span>
              </div>
            </div>

            <div className={`${styles.floatingBadge} ${styles.badgeBottomLeft}`}>
              <div className={styles.floatingIconCyan}>⚛️</div>
              <div>
                <strong className={styles.floatingTitle}>MERN Stack</strong>
                <span className={styles.floatingSubtitle}>React 19 & Node</span>
              </div>
            </div>

            <div className={`${styles.floatingBadge} ${styles.badgeBottomRight}`}>
              <div className={styles.floatingIconPink}>📱</div>
              <div>
                <strong className={styles.floatingTitle}>Flutter Dev</strong>
                <span className={styles.floatingSubtitle}>Android & iOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className={styles.scrollIndicator} aria-label="Scroll to About section">
        <span className={styles.scrollText}>Scroll Down</span>
        <ArrowDown size={18} className={styles.scrollArrow} />
      </a>
    </section>
  );
}
