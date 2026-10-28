import { ExternalLink, Star, Code2 } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { siteConfig } from '../../data/config';
import { useIntersection } from '../../hooks/useIntersection';
import styles from './GithubActivity.module.css';

const REPOS = [
  {
    name: 'CodeTogether',
    desc: 'Real-time collaborative code editor & pair programming workspace with WebRTC video/voice calls and ZIP export.',
    lang: 'JavaScript',
    url: 'https://github.com/petersisay/CodeTogether',
    stars: 1,
  },
  {
    name: 'TemariHub',
    desc: 'Full-stack opportunity discovery & 7-stage application tracking platform for Ethiopian STEM students with 125+ tests.',
    lang: 'TypeScript',
    url: 'https://github.com/petersisay/TemariHub',
    stars: 1,
  },
  {
    name: 'lehulu',
    desc: 'Production-grade digital marketplace connecting households with verified local service professionals across Ethiopian cities.',
    lang: 'TypeScript',
    url: 'https://github.com/petersisay/lehulu',
    stars: 1,
  },
  {
    name: 'StudentRegisterSystem',
    desc: 'Enterprise-grade Java EE student registration and academic lifecycle management web application with MVC & MySQL.',
    lang: 'Java',
    url: 'https://github.com/petersisay/StudentRegisterSystem',
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
