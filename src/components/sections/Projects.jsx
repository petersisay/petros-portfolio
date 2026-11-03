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
  ShieldCheck,
  AlertCircle,
  Wrench,
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
          <div className="section-label">03 / Featured Projects</div>
          <div className={styles.headerRow}>
            <div>
              <h2 className="section-title">Engineered Digital Products</h2>
              <p className={styles.sectionSubtitle}>
                A curated portfolio of full-stack web platforms, cross-platform Flutter applications,
                and distributed systems built with clean architecture and verified data integrity.
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
        <div className={`${styles.filterRow} reveal`} role="tablist" aria-label="Project categories">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
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
              aria-label={`View detailed case study for ${project.title}`}
            >
              {/* Project Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  loading="lazy"
                  width="600"
                  height="340"
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.viewPrompt}>Open Case Study</span>
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                {/* Meta Badges */}
                <div className={styles.chipsRow}>
                  {project.statusBadge && (
                    <span
                      className={`${styles.statusBadge} ${
                        project.statusBadge.includes('In Development')
                          ? styles.statusDev
                          : styles.statusLive
                      }`}
                    >
                      {project.statusBadge}
                    </span>
                  )}
                  {project.projectType && (
                    <span className={styles.typeBadge}>{project.projectType}</span>
                  )}
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                {/* Tech Pills */}
                <div className={styles.techList}>
                  {project.tech?.slice(0, 4).map((t) => (
                    <span key={t} className={styles.techChip}>
                      {t}
                    </span>
                  ))}
                  {project.tech?.length > 4 && (
                    <span className={styles.techMore}>+{project.tech.length - 4}</span>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className={styles.cardFooter}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkBtn}
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={15} />
                      <span>Source →</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.linkBtn} ${styles.liveBtn}`}
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Live production deployment for ${project.title}`}
                    >
                      <ExternalLink size={15} />
                      <span>Live Site →</span>
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
                aria-label="Close case study dialog"
              >
                <X size={20} />
              </button>

              <div className={styles.modalImageContainer}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={styles.modalImage}
                  width="800"
                  height="450"
                />
              </div>

              <div className={styles.modalBody}>
                <div className={styles.modalMeta}>
                  {selectedProject.statusBadge && (
                    <span
                      className={`${styles.statusBadge} ${
                        selectedProject.statusBadge.includes('In Development')
                          ? styles.statusDev
                          : styles.statusLive
                      }`}
                    >
                      {selectedProject.statusBadge}
                    </span>
                  )}
                  {selectedProject.projectType && (
                    <span className={styles.typeBadge}>{selectedProject.projectType}</span>
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

                {/* Problem & Solution Grid */}
                {(selectedProject.problem || selectedProject.solution) && (
                  <div className={styles.probSolGrid}>
                    {selectedProject.problem && (
                      <div className={styles.probCard}>
                        <div className={styles.probHeader}>
                          <AlertCircle size={16} />
                          <h4 className={styles.probTitle}>The Engineering Problem</h4>
                        </div>
                        <p className={styles.probText}>{selectedProject.problem}</p>
                      </div>
                    )}
                    {selectedProject.solution && (
                      <div className={styles.solCard}>
                        <div className={styles.solHeader}>
                          <ShieldCheck size={16} />
                          <h4 className={styles.solTitle}>The Architectural Solution</h4>
                        </div>
                        <p className={styles.solText}>{selectedProject.solution}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Engineering Contributions */}
                {selectedProject.contributions && selectedProject.contributions.length > 0 && (
                  <div className={styles.featuresSection}>
                    <div className={styles.sectionHeaderRow}>
                      <Wrench size={16} className={styles.sectionIcon} />
                      <h4 className={styles.featuresHeading}>My Engineering Contributions</h4>
                    </div>
                    <ul className={styles.featuresList}>
                      {selectedProject.contributions.map((item, idx) => (
                        <li key={idx} className={styles.featureItem}>
                          <Check size={16} className={styles.checkIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical Challenges */}
                {selectedProject.challenges && (
                  <div className={styles.challengeBox}>
                    <h4 className={styles.challengeHeading}>Technical Challenge Overcome</h4>
                    <p className={styles.challengeText}>{selectedProject.challenges}</p>
                  </div>
                )}

                {/* Core Features List */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className={styles.featuresSection}>
                    <div className={styles.sectionHeaderRow}>
                      <Sparkles size={16} className={styles.sectionIcon} />
                      <h4 className={styles.featuresHeading}>Core Architectural Capabilities</h4>
                    </div>
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
                      <span>Inspect Repository on GitHub</span>
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
