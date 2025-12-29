import React from 'react';
import styles from './ProjectsPage.module.css';

const ProjectsPage: React.FC = () => {
  return (
    <div className={styles.projectsPage}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Projets & Études de cas</h1>
        </div>

        <div className={styles.construction}>
          <p className={styles.constructionText}>
            Cette section est en cours de construction.
          </p>
          <p className={styles.constructionSubtext}>
            Les projets seront bientôt disponibles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
