import React from 'react';
import Button from '../common/Button';
import { PROFILE_INFO } from '../../data/constants';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>

          <p className={styles.kicker}>
            {PROFILE_INFO.tagline}
          </p>

          <h1 className={styles.title}>
            {PROFILE_INFO.headline}
          </h1>

          <p className={styles.subtitle}>
            Lead développeuse backend avec une forte sensibilité produit.
            J'aide les équipes à transformer des besoins business complexes
            en solutions techniques fiables, évolutives et mesurables.
          </p>

          <div className={styles.cta}>
            <Button to="/projects" size="large">
              Voir mes projets
            </Button>
            <Button to="/experience" variant="secondary" size="large">
              Mon parcours
            </Button>
          </div>

          <p className={styles.footnote}>
            {PROFILE_INFO.experience}
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
