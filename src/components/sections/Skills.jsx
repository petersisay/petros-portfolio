import React from 'react';
import { Layout, Server, Database, Code2, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import styles from './Skills.module.css';

const ICON_MAP = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Code2: Code2,
  Wrench: Wrench,
};

const CATEGORY_COLORS = [
  'var(--accent-violet)',
  'var(--accent-pink)',
  'var(--accent-cyan)',
  'var(--accent-orange)',
  'var(--accent-green)',
];

export default function Skills() {
  const getStatusColor = (status) => {
    if (status === 'Proficient') return styles.statusGreen;
    if (status.includes('Building')) return styles.statusViolet;
    return styles.statusOrange;
  };

  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-label">&lt; Skills &amp; Arsenal /&gt;</div>
          <h2 className="section-title">
            Technologies &amp; <span className="gradient-text">Technical Capabilities</span>
          </h2>
          <p className="section-subtitle">
            Hands-on expertise across modern frontend, server architecture, relational database engineering, and developer tooling.
          </p>

          {/* Proficiency Status Legend */}
          <div className={styles.legendRow}>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.bgGreen}`} />
              <span>Proficient</span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.bgViolet}`} />
              <span>Building Projects</span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.bgOrange}`} />
              <span>Learning &amp; Expanding</span>
            </div>
          </div>
        </div>

        {/* 5 Categories Grid */}
        <div className={styles.skillsGrid}>
          {skillCategories.map((cat, idx) => {
            const IconComponent = ICON_MAP[cat.icon] || Code2;
            const accentColor = CATEGORY_COLORS[idx % CATEGORY_COLORS.length];

            return (
              <div
                key={cat.id}
                className={`${styles.skillCard} reveal`}
                style={{
                  '--card-accent': accentColor,
                  animationDelay: `${idx * 100}ms`
                }}
              >
                {/* Card Top / Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <IconComponent size={22} className={styles.catIcon} />
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>{cat.title}</h3>
                    <p className={styles.cardDesc}>{cat.description}</p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className={styles.pillsContainer}>
                  {cat.skills.map(skill => (
                    <div key={skill.name} className={styles.skillPill}>
                      <span className={`${styles.skillDot} ${getStatusColor(skill.status)}`} />
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
