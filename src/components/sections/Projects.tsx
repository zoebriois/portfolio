import React from 'react';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Projets & Études de cas</h2>
          <p className={styles.sectionSubtitle}>
            Problème → Décisions → Impact : comment je pense produit dans mes projets techniques
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionHeading}>Problème</h4>
                <div className={styles.sectionContent}>
                  <p>{project.problem}</p>
                </div>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionHeading}>Contexte</h4>
                <div className={styles.sectionContent}>
                  <p>{project.context}</p>
                </div>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionHeading}>Décisions clés</h4>
                <div className={styles.decisionsGrid}>
                  <div className={styles.decisionColumn}>
                    <h4>Produit</h4>
                    <ul>
                      {project.decisions.product.map((decision, index) => (
                        <li key={index}>{decision}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.decisionColumn}>
                    <h4>Technique</h4>
                    <ul>
                      {project.decisions.technical.map((decision, index) => (
                        <li key={index}>{decision}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionHeading}>Impact</h4>
                <ul className={styles.impactList}>
                  {project.impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionHeading}>Apprentissages</h4>
                <ul className={styles.impactList}>
                  {project.learnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
