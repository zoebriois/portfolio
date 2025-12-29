import React from 'react';
import { PROFILE_INFO } from '../../data/constants';
import styles from './Availability.module.css';

const Availability: React.FC = () => {
  return (
    <div className={styles.availabilityContainer}>
      <div className="container">
        <div className={styles.availability}>
          <p className={styles.availabilityText}>
            <strong>Disponibilité :</strong> {PROFILE_INFO.currentFocus}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Availability;
