import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 'web-dev',
    emoji: '🌐',
    title: 'Full-Stack Web Development',
    description:
      'Designing and developing modern, responsive web applications with React.js, Node.js, and Express. Delivering fast page loads, stateful user interfaces, and clean REST APIs.',
    tech: ['React.js', 'Node.js', 'Express', 'TypeScript', 'REST APIs', 'CSS Modules'],
    color: 'var(--accent-violet)',
  },
  {
    id: 'mobile-dev',
    emoji: '📱',
    title: 'Cross-Platform Mobile Apps',
    description:
      'Engineering native-feel Android & iOS applications using Flutter and Dart. Incorporating Clean Architecture, Riverpod state management, offline SQLite caching, and Material 3 design.',
    tech: ['Flutter', 'Dart', 'Riverpod', 'Clean Architecture', 'Material 3', 'SQLite'],
    color: 'var(--accent-pink)',
  },
  {
    id: 'java-eng',
    emoji: '☕',
    title: 'Java Software Engineering',
    description:
      'Building robust object-oriented desktop applications, concurrent multi-client TCP socket servers, and enterprise JDBC database integrations with Java Swing.',
    tech: ['Java OOP', 'Java Swing', 'TCP Sockets', 'Multithreading', 'JDBC'],
    color: 'var(--accent-cyan)',
  },
  {
    id: 'database-design',
    emoji: '🗄️',
    title: 'Relational Database Architecture',
    description:
      'Modeling relational database schemas, normalizing entity relationships (ER diagrams), crafting performant SQL queries, and optimizing indexes for MySQL and SQL Server.',
    tech: ['MySQL', 'SQL Server', 'Schema Design', 'Normalization', 'Indexing'],
    color: 'var(--accent-orange)',
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-label">&lt; What I Offer /&gt;</div>
          <h2 className="section-title">
            Specialized <span className="gradient-text">Engineering Services</span>
          </h2>
          <p className="section-subtitle">
            Delivering high quality software engineering solutions from concept to deployment with modern frameworks,
            clean architecture, and reliable systems.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className={styles.servicesGrid}>
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} reveal`}
              style={{
                '--card-glow': service.color,
                animationDelay: `${idx * 120}ms`
              }}
            >
              {/* Top Row: Emoji Icon + Corner Arrow */}
              <div className={styles.cardTop}>
                <div className={styles.emojiWrapper}>
                  <span className={styles.emoji}>{service.emoji}</span>
                </div>
                <div className={styles.cornerArrow}>
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.description}</p>

              {/* Tech Stack Pills */}
              <div className={styles.techPills}>
                {service.tech.map(t => (
                  <span key={t} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
