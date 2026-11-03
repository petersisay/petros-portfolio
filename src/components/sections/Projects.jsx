import React, { useState, useEffect, useRef } from 'react'
import {
  ExternalLink,
  X,
  Check,
  Sparkles,
  LayoutGrid,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { Github } from '../common/Icons'
import { projects, filterCategories } from '../../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'strip'
  const stripRef = useRef(null)

  // Filter projects by active category
  const filteredProjects = projects.filter((proj) => {
    if (activeCategory === 'all') return true
    if (Array.isArray(proj.category)) {
      return proj.category.includes(activeCategory)
    }
    return proj.category === activeCategory
  })

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedProject(null)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const scrollStrip = (direction) => {
    if (stripRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420
      stripRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">04 / Work</div>
          <div className={styles.headerRow}>
            <div>
              <h2 className="section-title">Featured Engineering Projects</h2>
              <p className={styles.sectionSubtitle}>
                A curated selection of full-stack platforms, cross-platform mobile apps, and distributed
                systems built with clean architecture and modern tooling.
              </p>
            </div>

            {/* View Mode Switcher (Desktop) */}
            <div className={styles.viewControls}>
              <div className={styles.viewSwitcher}>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.activeViewBtn : ''}`}
                  aria-label="Grid View"
                  title="2-Column Grid View"
                >
                  <LayoutGrid size={16} />
                  <span>Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('strip')}
                  className={`${styles.viewBtn} ${viewMode === 'strip' ? styles.activeViewBtn : ''}`}
                  aria-label="Horizontal Strip View"
                  title="Horizontal Scroll Strip View"
                >
                  <SlidersHorizontal size={16} />
                  <span>Strip</span>
                </button>
              </div>

              {viewMode === 'strip' && (
                <div className={styles.arrowGroup}>
                  <button
                    onClick={() => scrollStrip('left')}
                    className={styles.arrowBtn}
                    aria-label="Scroll Left"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => scrollStrip('right')}
                    className={styles.arrowBtn}
                    aria-label="Scroll Right"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={`${styles.filterRow} reveal`}>
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`${styles.filterPill} ${activeCategory === cat.id ? styles.activeFilter : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Container (Grid or Horizontal Strip) */}
        <div
          ref={stripRef}
          className={`${viewMode === 'strip' ? styles.stripGrid : styles.grid}`}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`${styles.card} ${viewMode === 'strip' ? styles.stripCard : ''} reveal`}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedProject(project)
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              {/* Project Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.viewPrompt}>Click for Case Study</span>
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                {/* Categories & Tech chips */}
                <div className={styles.chipsRow}>
                  {project.featured && (
                    <span className={styles.featuredBadge}>
                      <Sparkles size={11} /> Featured
                    </span>
                  )}
                  {project.tech?.slice(0, 3).map((t) => (
                    <span key={t} className={styles.techChip}>
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                {/* Footer Buttons */}
                <div className={styles.cardFooter}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkBtn}
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`GitHub repo for ${project.title}`}
                    >
                      <Github size={15} />
                      <span>Code →</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.linkBtn} ${styles.liveBtn}`}
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo →</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Dialog for Project Case Study */}
        {selectedProject && (
          <div
            className={styles.modalOverlay}
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <div className={styles.modalImageContainer}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={styles.modalImage}
                />
              </div>

              <div className={styles.modalBody}>
                <div className={styles.modalMeta}>
                  {selectedProject.category && (
                    <span className={styles.modalCategory}>
                      {Array.isArray(selectedProject.category)
                        ? selectedProject.category.join(' · ')
                        : selectedProject.category}
                    </span>
                  )}
                </div>

                <h3 id="modal-title" className={styles.modalTitle}>
                  {selectedProject.title}
                </h3>

                {selectedProject.tagline && (
                  <p className={styles.modalTagline}>{selectedProject.tagline}</p>
                )}

                <p className={styles.modalLongDesc}>
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                {/* Problem & Solution */}
                {(selectedProject.problem || selectedProject.solution) && (
                  <div className={styles.probSolGrid}>
                    {selectedProject.problem && (
                      <div className={styles.probCard}>
                        <h4 className={styles.probTitle}>The Engineering Problem</h4>
                        <p className={styles.probText}>{selectedProject.problem}</p>
                      </div>
                    )}
                    {selectedProject.solution && (
                      <div className={styles.solCard}>
                        <h4 className={styles.solTitle}>The Architectural Solution</h4>
                        <p className={styles.solText}>{selectedProject.solution}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Features List */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className={styles.featuresSection}>
                    <h4 className={styles.featuresHeading}>Core Architectural Features</h4>
                    <ul className={styles.featuresList}>
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className={styles.featureItem}>
                          <Check size={16} className={styles.checkIcon} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Full Tech Stack */}
                <div className={styles.modalTechSection}>
                  <h4 className={styles.techHeading}>Technology Stack</h4>
                  <div className={styles.modalTechRow}>
                    {selectedProject.tech?.map((t) => (
                      <span key={t} className={styles.modalTechPill}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className={styles.modalActions}>
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.modalPrimaryBtn}
                    >
                      <Github size={18} />
                      <span>View Source on GitHub</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.modalSecondaryBtn}
                    >
                      <ExternalLink size={18} />
                      <span>Open Live Production Site</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
