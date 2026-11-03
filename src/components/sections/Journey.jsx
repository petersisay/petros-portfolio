import React from 'react';
import { Calendar, GraduationCap, Award, Compass, CheckCircle2 } from 'lucide-react';
import { journeyItems } from '../../data/journey';
import styles from './Journey.module.css';

export default function Journey() {
  return (
    <section id="journey" className={`section ${styles.journeySection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-label">&lt; Engineering Path /&gt;</div>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Growth Journey</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of academic achievements, technical milestones, and hands-on software development experience.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className={styles.timelineWrapper}>
          {/* Continuous Gradient Center Line */}
          <div className={styles.timelineLine} aria-hidden="true" />

          {/* Timeline Nodes & Cards */}
          <div className={styles.timelineList}>
            {journeyItems.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`${styles.timelineItem} ${isEven ? styles.timelineItemLeft : styles.timelineItemRight}`}
                >
                  {/* Timeline Center Node with Pulsing Ring */}
                  <div className={styles.nodeWrapper}>
                    <div className={styles.timelineNode}>
                      <div className={styles.nodeInnerDot} />
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div className={`${styles.timelineCard} ${isEven ? 'reveal-left' : 'reveal-right'}`}>
                    {/* Header: Year Badge & Category */}
                    <div className={styles.cardHeader}>
                      <div className={styles.yearBadge}>
                        <Calendar size={13} />
                        <span>{item.year}</span>
                      </div>
                      <span className={styles.categoryBadge}>{item.category}</span>
                    </div>

                    {/* Title & Institution */}
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.institution}>
                      <GraduationCap size={15} />
                      <span>{item.institution}</span>
                    </p>

                    {/* Description */}
                    <p className={styles.description}>{item.description}</p>

                    {/* Skill Tags */}
                    {item.tags && (
                      <div className={styles.tagsRow}>
                        {item.tags.map(tag => (
                          <span key={tag} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
