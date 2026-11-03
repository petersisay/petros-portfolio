import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Maximize2,
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Layers,
  HelpCircle
} from 'lucide-react';
import { Github } from '../common/Icons';
import { projects, filterCategories } from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category && project.category.includes(activeFilter);
  });

  // Modal accessibility: disable body scroll & handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-label">&lt; Portfolio Showcases /&gt;</div>
          <h2 className="section-title">
            Featured Projects &amp; <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive collection of production-grade full-stack web applications, Flutter mobile suites,
            Java desktop systems, and client solutions.
          </p>

          {/* Filter Tabs */}
          <div className={styles.filterTabs}>
            {filterCategories.map(cat => {
              const count = cat.id === 'all'
                ? projects.length
                : projects.filter(p => p.category && p.category.includes(cat.id)).length;
              const isActive = activeFilter === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className={styles.filterCount}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid (2 cols desktop, 1 col mobile) */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`${styles.projectCard} reveal`}
              style={{ animationDelay: `${(idx % 4) * 100}ms` }}
            >
              {/* Media Header / Image */}
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={styles.projectImage}
                  onError={(e) => {
                    // Fallback to a placeholder gradient if image is missing
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add(styles.imageFallback);
                  }}
                />

                {/* Gradient Hover Overlay with View Details Trigger */}
                <div
                  className={styles.imageOverlay}
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${project.title}`}
                  onKeyDown={(e) => { if (e.key === 'Enter') setSelectedProject(project); }}
                >
                  <button type="button" className={styles.viewDetailsBtn}>
                    <Maximize2 size={16} />
                    <span>View Case Study</span>
                  </button>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className={styles.featuredBadge}>
                    <Sparkles size={12} />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                {/* Categories */}
                <div className={styles.badgeRow}>
                  {project.category.map(cat => (
                    <span key={cat} className={styles.categoryPill}>
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Title & Tagline */}
                <h3 className={styles.projectTitle}>
                  <button
                    type="button"
                    className={styles.titleBtn}
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </button>
                </h3>
                <p className={styles.projectTagline}>{project.tagline}</p>
                <p className={styles.projectDescription}>{project.description}</p>

                {/* Tech Stack Pills */}
                <div className={styles.techStack}>
                  {project.tech.slice(0, 5).map(tech => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className={styles.techBadgeMore}>
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                {/* Action Buttons Row */}
                <div className={styles.cardActions}>
                  <div className={styles.externalLinks}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionIconBtn}
                        aria-label={`GitHub repository for ${project.title}`}
                        title="Source Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.liveDemoBtn}
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    className={styles.detailsTextBtn}
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div>
                <div className={styles.modalCategories}>
                  {selectedProject.category.map(c => (
                    <span key={c} className={styles.categoryPill}>{c}</span>
                  ))}
                </div>
                <h2 id="modal-title" className={styles.modalTitle}>
                  {selectedProject.title}
                </h2>
                <p className={styles.modalTagline}>{selectedProject.tagline}</p>
              </div>

              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image */}
            <div className={styles.modalImageWrap}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className={styles.modalImage}
              />
            </div>

            {/* Modal Body */}
            <div className={styles.modalBody}>
              {/* Problem & Solution Callouts */}
              <div className={styles.probSolGrid}>
                {selectedProject.problem && (
                  <div className={styles.problemBox}>
                    <h4 className={styles.boxTitle}>
                      <HelpCircle size={16} />
                      <span>The Challenge</span>
                    </h4>
                    <p>{selectedProject.problem}</p>
                  </div>
                )}
                {selectedProject.solution && (
                  <div className={styles.solutionBox}>
                    <h4 className={styles.boxTitle}>
                      <Sparkles size={16} />
                      <span>The Solution</span>
                    </h4>
                    <p>{selectedProject.solution}</p>
                  </div>
                )}
              </div>

              {/* Long Description */}
              <div className={styles.modalSection}>
                <h4 className={styles.sectionHeading}>About This Project</h4>
                <p className={styles.modalText}>{selectedProject.longDescription}</p>
              </div>

              {/* Key Features List */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className={styles.modalSection}>
                  <h4 className={styles.sectionHeading}>Key Features &amp; Architecture</h4>
                  <ul className={styles.featuresList}>
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} className={styles.featureItem}>
                        <CheckCircle2 size={16} className={styles.featureCheck} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Complete Tech Stack */}
              <div className={styles.modalSection}>
                <h4 className={styles.sectionHeading}>Technologies Used</h4>
                <div className={styles.modalTechGrid}>
                  {selectedProject.tech.map(t => (
                    <span key={t} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.modalFooterActions}>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink size={18} />
                    <span>Launch Live Demo</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <Github size={18} />
                    <span>View GitHub Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
