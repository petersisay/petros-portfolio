import React from 'react'
import {
  Layout,
  Server,
  Database,
  Smartphone,
  Wrench,
  ShieldCheck,
  Quote,
  CheckCircle2,
} from 'lucide-react'
import { skillCategories } from '../../data/skills'
import styles from './Skills.module.css'

const ICONS_MAP = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Smartphone: Smartphone,
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
}

const CORE_TECH_PILLS = [
  { name: 'React 19', tag: 'Frontend Library' },
  { name: 'Node.js & Express', tag: 'Backend Runtime' },
  { name: 'Flutter 3 & Dart', tag: 'Mobile Ecosystem' },
  { name: 'Java (Core & OOP)', tag: 'Enterprise & Sockets' },
  { name: 'MongoDB Atlas', tag: 'NoSQL & Geospatial' },
  { name: 'MySQL Database', tag: 'Relational & SQL' },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">04 / Technical Arsenal</div>
          <h2 className="section-title">Technical Skills &amp; Engineering Practices</h2>
          <p className={styles.sectionSubtitle}>
            A structured, authentic inventory of languages, frameworks, architectural patterns, and
            developer platforms applied across verified production systems.
          </p>
        </div>

        <div className={styles.twoColLayout}>
          {/* LEFT: 6 Categorized Skill Groups */}
          <div className={`${styles.treeColumn} reveal`}>
            <div className={styles.categoryList}>
              {skillCategories.map((cat) => {
                const IconComponent = ICONS_MAP[cat.icon] || Layout
                return (
                  <div key={cat.id} className={styles.categoryCard}>
                    <div className={styles.categoryHeader}>
                      <div className={styles.categoryTitleGroup}>
                        <IconComponent size={18} className={styles.categoryIcon} />
                        <span className={styles.categoryTitle}>{cat.title}</span>
                      </div>
                      <span className={styles.skillCount}>{cat.skills.length} competencies</span>
                    </div>

                    <p className={styles.categoryDesc}>{cat.description}</p>

                    <div className={styles.chipsWrap}>
                      {cat.skills.map((skill) => (
                        <span key={skill.name} className={styles.skillChip}>
                          <CheckCircle2 size={13} className={styles.chipCheck} />
                          <span className={styles.skillName}>{skill.name}</span>
                          {skill.level && (
                            <span className={styles.levelBadge}>{skill.level}</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT: Engineering Philosophy & Core Pillars */}
          <div className={`${styles.quoteColumn} reveal`}>
            {/* Engineering Philosophy Card */}
            <div className={styles.quoteCard}>
              <div className={styles.quoteCardTop}>
                <Quote size={36} className={styles.quoteIcon} />
                <span className={styles.philosophyTag}>Engineering Philosophy</span>
              </div>
              <blockquote className={styles.quoteText}>
                &ldquo;I believe in learning by building.
                <br />
                Every project is a lesson.
                <br />
                Every bug is a teacher.&rdquo;
              </blockquote>
              <div className={styles.quoteAuthor}>— Petros Sisay Gelan</div>
              <p className={styles.philosophyNote}>
                Software engineering is more than syntax — it is the disciplined application of
                computational logic to build dependable, maintainable solutions for real humans.
              </p>
            </div>

            {/* Core Specialization Pills */}
            <div className={styles.coreBadgesSection}>
              <h4 className={styles.coreBadgesTitle}>Primary Architectural Focus</h4>
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
