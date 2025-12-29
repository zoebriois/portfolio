import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { aboutData } from '../data/about';
import { CONTACT_INFO } from '../data/constants';
import styles from './ContactPage.module.css';

const ContactPage: React.FC = () => {
  return (
    <div className={styles.contactPage}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Contact</h1>
        </div>

        <div className={styles.contactMethods}>
          <a
            href={CONTACT_INFO.linkedin.url}
            className={styles.contactCard}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </div>
            <div>
              <h3 className={styles.cardTitle}>LinkedIn</h3>
              <span className={styles.cardLink}>{CONTACT_INFO.linkedin.displayUrl}</span>
            </div>
          </a>

          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className={styles.contactCard}
          >
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </div>
            <div>
              <h3 className={styles.cardTitle}>Email</h3>
              <span className={styles.cardLink}>{CONTACT_INFO.email}</span>
            </div>
          </a>

          <a
            href={CONTACT_INFO.github.url}
            className={styles.contactCard}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </div>
            <div>
              <h3 className={styles.cardTitle}>GitHub</h3>
              <span className={styles.cardLink}>{CONTACT_INFO.github.displayUrl}</span>
            </div>
          </a>
        </div>

        <div className={styles.availability}>
          <p className={styles.availabilityText}>
            <strong>Disponibilité :</strong> {aboutData.currentFocus}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
