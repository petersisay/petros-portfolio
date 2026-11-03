import React from 'react'
import { GitBranch, GitFork, Star, Terminal, ExternalLink, Code2 } from 'lucide-react'
import { Github } from '../common/Icons'
import { siteConfig } from '../../data/config'
import styles from './EngineeringActivity.module.css'

const PUBLIC_REPOS = [
  {
    name: 'AdamaMaterials-E-commerce-',
    desc: 'Full-Stack circular construction materials marketplace with Leaflet mapping and Chapa API.',
    lang: 'TypeScript',
    url: 'https://github.com/petersisay/AdamaMaterials-E-commerce-',
    type: 'Full-Stack Platform',
  },
  {
    name: 'flutter_todo_pro',
    desc: 'Mobile productivity suite built on Flutter 3, Dart, Riverpod, and Clean Architecture.',
    lang: 'Dart',
    url: 'https://github.com/petersisay/flutter_todo_pro',
    type: 'Mobile Application',
  },
  {
    name: 'TemariHub',
    desc: 'STEM opportunity discovery platform for Ethiopian students backed by 125+ Vitest suites.',
    lang: 'TypeScript',
    url: 'https://github.com/petersisay/TemariHub',
    type: 'Web Platform',
  },
  {
    name: 'lehulu',
    desc: 'Local services marketplace with municipal boundary matching for Ethiopian cities.',
    lang: 'TypeScript',
    url: 'https://github.com/petersisay/lehulu',
    type: 'Full-Stack Web',
  },
  {
    name: 'CodeTogether',
    desc: 'Real-time collaborative code editor with Socket.IO room sync and WebRTC calling.',
    lang: 'JavaScript',
    url: 'https://github.com/petersisay/CodeTogether',
    type: 'Real-Time Workspace',
  },
  {
    name: 'StudentRegisterSystem',
    desc: 'Java EE academic lifecycle management web app with MVC pattern, Servlets, and MySQL.',
    lang: 'Java',
    url: 'https://github.com/petersisay/StudentRegisterSystem',
    type: 'Java EE / MVC',
  },
  {
    name: 'GroupChatApp',
    desc: 'Multi-threaded desktop TCP socket chat application built with core Java and Swing.',
    lang: 'Java',
    url: 'https://github.com/petersisay/GroupChatApp',
    type: 'Desktop Networking',
  },
  {
    name: 'petros-portfolio',
    desc: 'Production SPA portfolio built with React 19, Vite 8, and custom CSS design system.',
    lang: 'JavaScript',
    url: 'https://github.com/petersisay/petros-portfolio',
    type: 'Portfolio / SPA',
  },
]

const TECH_DISTRIBUTION = [
  { lang: 'TypeScript & JavaScript', share: '45%', color: '#3B82F6' },
  { lang: 'Dart (Flutter 3)', share: '25%', color: '#06B6D4' },
  { lang: 'Java (Core & EE)', share: '20%', color: '#F59E0B' },
  { lang: 'SQL / Relational Schema', share: '10%', color: '#10B981' },
]

export default function EngineeringActivity() {
  return (
    <section id="engineering-activity" className={styles.activitySection}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">06 / Engineering Activity</div>
          <div className={styles.headerRow}>
            <div>
              <h2 className="section-title">Open Source &amp; Repository Portfolio</h2>
              <p className={styles.sectionSubtitle}>
                Authentic public codebases and repositories maintained under GitHub profile{' '}
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.userHighlight}
                >
                  @{siteConfig.githubUsername}
                </a>
                .
              </p>
            </div>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileBtn}
            >
              <Github size={18} />
              <span>Visit GitHub Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Technology Stack Distribution Bar */}
        <div className={`${styles.distributionCard} reveal`}>
          <div className={styles.distHeader}>
            <span className={styles.distTitle}>Codebase Technology Distribution</span>
            <span className={styles.distMeta}>Public Repositories Breakdown</span>
          </div>

          <div className={styles.distBar}>
            {TECH_DISTRIBUTION.map((item) => (
              <div
                key={item.lang}
                className={styles.distSegment}
                style={{ width: item.share, backgroundColor: item.color }}
                title={`${item.lang}: ${item.share}`}
              />
            ))}
          </div>

          <div className={styles.distLegend}>
            {TECH_DISTRIBUTION.map((item) => (
              <div key={item.lang} className={styles.legendItem}>
                <span className={styles.legendDot} style={{ backgroundColor: item.color }} />
                <span className={styles.legendName}>{item.lang}</span>
                <span className={styles.legendShare}>{item.share}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Public Repository Grid */}
        <div className={styles.repoGrid}>
          {PUBLIC_REPOS.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.repoCard} reveal`}
              aria-label={`Open repository ${repo.name} on GitHub`}
            >
              <div className={styles.repoTop}>
                <div className={styles.repoNameGroup}>
                  <GitBranch size={16} className={styles.branchIcon} />
                  <span className={styles.repoName}>{repo.name}</span>
                </div>
                <span className={styles.repoTypeBadge}>{repo.type}</span>
              </div>

              <p className={styles.repoDesc}>{repo.desc}</p>

              <div className={styles.repoBottom}>
                <div className={styles.langItem}>
                  <span className={styles.langDot} />
                  <span className={styles.langName}>{repo.lang}</span>
                </div>

                <div className={styles.viewRepo}>
                  <span>Inspect Code</span>
                  <ExternalLink size={13} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
