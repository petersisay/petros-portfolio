import React from 'react'
import { Terminal, Sparkles, Layers, Quote } from 'lucide-react'
import styles from './Skills.module.css'

const SKILL_DOMAINS = [
  {
    category: 'Frontend Engineering',
    skills: [
      { name: 'TypeScript', level: 'proficient' },
      { name: 'React 19', level: 'proficient' },
      { name: 'JavaScript (ES6+)', level: 'proficient' },
      { name: 'HTML5 & CSS3', level: 'proficient' },
      { name: 'Vite', level: 'proficient' },
      { name: 'Responsive Design', level: 'proficient' },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Node.js', level: 'proficient' },
      { name: 'Express 5', level: 'proficient' },
      { name: 'REST APIs', level: 'proficient' },
      { name: 'Socket.IO', level: 'proficient' },
      { name: 'JWT Auth', level: 'proficient' },
      { name: 'CSRF Protection', level: 'proficient' },
    ],
  },
  {
    category: 'Mobile App Development',
    skills: [
      { name: 'Flutter 3', level: 'proficient' },
      { name: 'Dart', level: 'proficient' },
      { name: 'Riverpod', level: 'proficient' },
      { name: 'Material 3', level: 'proficient' },
      { name: 'Clean Architecture', level: 'proficient' },
    ],
  },
  {
    category: 'Databases & Storage',
    skills: [
      { name: 'MongoDB Atlas', level: 'proficient' },
      { name: 'Mongoose', level: 'proficient' },
      { name: 'MySQL', level: 'proficient' },
      { name: 'SQL', level: 'proficient' },
      { name: '2dsphere Geospatial', level: 'building' },
    ],
  },
  {
    category: 'Java Systems & Enterprise',
    skills: [
      { name: 'Java (Core + OOP)', level: 'proficient' },
      { name: 'JDBC', level: 'proficient' },
      { name: 'Java Swing', level: 'proficient' },
      { name: 'Java Servlets', level: 'proficient' },
      { name: 'JSP', level: 'proficient' },
      { name: 'Apache Tomcat', level: 'learning' },
    ],
  },
  {
    category: 'Tools & Ecosystem',
    skills: [
      { name: 'Git & GitHub', level: 'proficient' },
      { name: 'Vitest', level: 'proficient' },
      { name: 'VS Code', level: 'proficient' },
      { name: 'IntelliJ IDEA', level: 'proficient' },
      { name: 'Chapa API', level: 'proficient' },
      { name: 'Telebirr', level: 'proficient' },
    ],
  },
]

const CORE_TECH_PILLS = [
  { name: 'React 19', tag: 'UI Library' },
  { name: 'Node.js', tag: 'Runtime' },
  { name: 'Flutter', tag: 'Mobile' },
  { name: 'Java', tag: 'Enterprise' },
  { name: 'MongoDB', tag: 'NoSQL' },
  { name: 'MySQL', tag: 'RDBMS' },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">05 / Skills</div>
          <h2 className="section-title">Technical Expertise</h2>
          <p className={styles.sectionSubtitle}>
            A structured breakdown of languages, frameworks, and developer tools applied in real
            production systems.
          </p>
        </div>

        <div className={styles.twoColLayout}>
          {/* LEFT: Visual Skill Tree */}
          <div className={`${styles.treeColumn} reveal`}>
            {/* Legend */}
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dotGreen}`} />
                <span>Proficient</span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dotViolet}`} />
                <span>Building</span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dotOrange}`} />
                <span>Learning</span>
              </div>
            </div>

            <div className={styles.categoryList}>
              {SKILL_DOMAINS.map((domain) => (
                <div key={domain.category} className={styles.categoryCard}>
                  <div className={styles.categoryHeader}>
                    <span className={styles.categoryTitle}>{domain.category}</span>
                    <span className={styles.skillCount}>{domain.skills.length} skills</span>
                  </div>

                  <div className={styles.chipsWrap}>
                    {domain.skills.map((skill) => (
                      <span key={skill.name} className={styles.skillChip}>
                        <span
                          className={`${styles.dot} ${
                            skill.level === 'proficient'
                              ? styles.dotGreen
                              : skill.level === 'building'
                              ? styles.dotViolet
                              : styles.dotOrange
                          }`}
                        />
                        <span className={styles.skillName}>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Quote Block & Core Logos */}
          <div className={`${styles.quoteColumn} reveal`}>
            <div className={styles.quoteCard}>
              <Quote size={40} className={styles.quoteIcon} />
              <blockquote className={styles.quoteText}>
                &ldquo;I believe in learning by building.
                <br />
                Every project is a lesson.
                <br />
                Every bug is a teacher.&rdquo;
              </blockquote>
              <div className={styles.quoteAuthor}>— Petros Sisay Gelan</div>
            </div>

            <div className={styles.coreBadgesSection}>
              <h4 className={styles.coreBadgesTitle}>Core Specializations</h4>
              <div className={styles.badgeGrid}>
                {CORE_TECH_PILLS.map((tech) => (
                  <div key={tech.name} className={styles.techPillLarge}>
                    <span className={styles.largePillName}>{tech.name}</span>
                    <span className={styles.largePillTag}>{tech.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
