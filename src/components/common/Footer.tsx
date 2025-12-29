import React from 'react';
import { PROFILE_INFO } from '../../data/constants';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} {PROFILE_INFO.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
