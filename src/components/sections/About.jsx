import React from 'react';
import { MapPin, GraduationCap, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import styles from './About.module.css';

const TECH_MARQUEE = [
  'React.js',
  'TypeScript',
  'JavaScript (ES6+)',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Flutter & Dart',
  'Java (OOP & Swing)',
  'MySQL & SQL',
  'JDBC',
  'REST APIs',
  'Git & GitHub',
  'Vite',
  'HTML5 & Modern CSS',
  'Clean Architecture',
  'Riverpod',
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-label">&lt; About Me /&gt;</div>
          <h2 className="section-title">
            Passionate Engineer Crafting <span className="gradient-text">Impactful Software</span>
          </h2>
          <p className="section-subtitle">
            Bridging theoretical computer science principles with high-performance practical applications.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className={styles.aboutGrid}>
          {/* Left Column: Visual Frame */}
          <div className={`${styles.aboutVisual} reveal-left`}>
            <div className={styles.imageCard}>
              <div className={styles.imageBackdrop} />
              <img
                src="/profile.jpg"
                alt="Petros Sisay Gelan"
                className={styles.aboutImg}
                onError={(e) => {
                  e.target.src = '/profile.webp';
                }}
              />
              {/* Overlaid Geometric Decorations */}
              <div className={styles.decoSquare1} />
              <div className={styles.decoSquare2} />

              {/* Floating "3rd Year" Badge */}
              <div className={styles.floatingYearBadge}>
                <span className={styles.yearIcon}>🎓</span>
                <div>
                  <strong>3rd Year Student</strong>
                  <span>B.Sc. Software Engineering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Fact Cards */}
          <div className={`${styles.aboutDetails} reveal-right`}>
            <div className={styles.bioBlock}>
              <p className={styles.bioText}>
                I am a 3rd Year Software Engineering student at <strong>Adama Science and Technology University (ASTU)</strong> in Ethiopia.
                My developer philosophy focuses on crafting reliable, responsive, and aesthetically pleasing software systems
                that solve concrete real-world problems.
              </p>
              <p className={styles.bioText}>
                From engineering full-stack MERN task workflows to developing cross-platform Flutter mobile clients and multi-threaded Java systems,
                I am deeply committed to writing clean, maintainable code with strict attention to user experience and performance.
              </p>
            </div>

            {/* 3 Quick-Fact Cards */}
            <div className={styles.factsGrid}>
              <div className={styles.factCard}>
                <div className={styles.factIconWrap}>
                  <MapPin className={styles.factIconCyan} size={22} />
                </div>
                <div>
                  <h4 className={styles.factTitle}>Location</h4>
                  <p className={styles.factValue}>Adama, Ethiopia</p>
                  <span className={styles.factSub}>ASTU Campus</span>
                </div>
              </div>

              <div className={styles.factCard}>
                <div className={styles.factIconWrap}>
                  <GraduationCap className={styles.factIconViolet} size={22} />
                </div>
                <div>
                  <h4 className={styles.factTitle}>University</h4>
                  <p className={styles.factValue}>ASTU</p>
                  <span className={styles.factSub}>Software Engineering</span>
                </div>
              </div>

              <div className={styles.factCard}>
                <div className={styles.factIconWrap}>
                  <Briefcase className={styles.factIconPink} size={22} />
                </div>
                <div>
                  <h4 className={styles.factTitle}>Availability</h4>
                  <p className={styles.factValue}>Open to Work</p>
                  <span className={styles.factSub}>Internships & Junior Roles</span>
                </div>
              </div>
            </div>

            {/* "What Drives Me" Paragraph */}
            <div className={styles.driverCard}>
              <div className={styles.driverHeader}>
                <Sparkles size={18} className={styles.driverSparkle} />
                <h4 className={styles.driverTitle}>What Drives Me</h4>
              </div>
              <p className={styles.driverText}>
                I am driven by the thrill of turning complex ideas into elegant, functioning software. Whether it's optimizing SQL schemas,
                architecting scalable REST APIs, or polishing micro-interactions in React and Flutter, I continuously push my boundaries to become a world-class engineer.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Scrolling Tech Marquee */}
        <div className={`${styles.marqueeWrapper} reveal`}>
          <div className={styles.marqueeTrack}>
            {/* Duplicated list for infinite seamless loop */}
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, idx) => (
              <div key={`${tech}-${idx}`} className={styles.techPill}>
                <span className={styles.techDot} />
                <span className={styles.techName}>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
