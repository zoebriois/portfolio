import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { CONTACT_INFO, PROFILE_INFO } from '../../data/constants';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>À l'écoute d'opportunités produit/tech</h2>
          <p className={styles.subtitle}>
            {PROFILE_INFO.currentFocus}
          </p>

          <div className={styles.cta}>
            <a
              href={CONTACT_INFO.linkedin.url}
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> Échanger sur LinkedIn
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Discutons par email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
