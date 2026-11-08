import { ExternalLink, Star, Code2 } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { siteConfig } from '../../data/config';
import { useIntersection } from '../../hooks/useIntersection';
import styles from './GithubActivity.module.css';

const REPOS = [
  {
    name: 'App-revola',
    desc: 'Cross-platform Flutter mobile client for Revola circular marketplace with Riverpod 2.6 and OpenStreetMap GIS navigation.',
    lang: 'Dart',
    url: 'https://github.com/petersisay/App-revola',
    stars: 1,
  },
  {
    name: 'AdamaMaterials-E-commerce-',
    desc: 'Full-stack circular construction materials trade marketplace with MongoDB 2dsphere mapping and Chapa API.',
    lang: 'TypeScript',
    url: 'https://github.com/petersisay/AdamaMaterials-E-commerce-',
    stars: 1,
  },
  {
    name: 'flutter_todo_pro',
    desc: 'Production-grade Flutter mobile application delivering Kanban boards, Pomodoro timer, and Clean Architecture.',
    lang: 'Dart',
    url: 'https://github.com/petersisay/flutter_todo_pro',
    stars: 1,
  },
  {
    name: 'promodoro-timer1',
    desc: 'Modern glassmorphic Pomodoro focus timer web app with session tracking and localStorage persistence on Vercel.',
    lang: 'JavaScript',
    url: 'https://github.com/petersisay/promodoro-timer1',
    stars: 1,
  },
  {
    name: 'student-registration-system',
    desc: 'Modern Ethiopian elementary school management & student registration system (Grades 1–8) with Amharic UI on Render.',
    lang: 'Java',
    url: 'https://github.com/petersisay/student-registration-system',
    stars: 1,
  },
  {
    name: 'Food-Ordering-App',
    desc: 'Coral Food — Full-stack food ordering platform with customer mobile app, restaurant portal, and admin business suite.',
    lang: 'JavaScript',
    url: 'https://github.com/petersisay/Food-Ordering-App',
    stars: 1,
  },
  {
    name: 'Web-based-project',
    desc: 'Campus Facility Maintenance System with request lifecycle tracking, inventory management, and Docker deployment.',
    lang: 'PHP / PostgreSQL',
    url: 'https://github.com/petersisay/Web-based-project',
    stars: 1,
  },
  {
    name: 'petros-portfolio',
    desc: 'Personal developer portfolio built with React 19, Vite, custom tokens, keyboard command palette, and dark theme.',
    lang: 'JavaScript',
    url: 'https://github.com/petersisay/petros-portfolio',
    stars: 1,
  },
];

export default function GithubActivity() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="github" className="section section--alt">
      <div className="container">
        {/* Heading */}
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">Developer Activity</p>
          <h2 className="section-title">
            Open Source & <span>GitHub Work</span>
          </h2>
          <p className="section-subtitle">
            Exploring code repositories and practical projects on GitHub. Connect with me @{siteConfig.githubUsername}.
          </p>
        </div>

        {/* GitHub Banner */}
        <div className={`${styles.banner} reveal ${isVisible ? 'visible' : ''}`}>
          <div className={styles.bannerLeft}>
            <div className={styles.ghIconWrap}>
              <GithubIcon size={28} />
            </div>
            <div>
              <h3 className={styles.ghUsername}>@{siteConfig.githubUsername}</h3>
              <p className={styles.ghBio}>Building software projects, exploring backend & database engineering.</p>
            </div>
          </div>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileBtn}
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Repo Cards Grid */}
        <div className={styles.repoGrid}>
          {REPOS.map((repo, idx) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.repoCard} reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className={styles.repoHeader}>
                <Code2 size={18} className={styles.repoIcon} />
                <h4 className={styles.repoName}>{repo.name}</h4>
              </div>
              <p className={styles.repoDesc}>{repo.desc}</p>
              <div className={styles.repoFooter}>
                <span className={styles.repoLang}>{repo.lang}</span>
                <span className={styles.repoMeta}>
                  <Star size={13} /> {repo.stars}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
