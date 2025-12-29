import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { aboutData, skills } from '../../data/about';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Pourquoi je suis faite pour le produit</h2>
          <p className={styles.sectionSubtitle}>
            Développeuse backend senior avec une vision business et un leadership orienté impact
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.intro}>
            <p>{aboutData.introduction}</p>
            <p><strong>Mes forces :</strong></p>
            <ul>
              {aboutData.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          <div className={styles.values}>
            {aboutData.values.map((value, index) => (
              <div key={index} className={styles.value}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skills}>
          {skills.map((skillCategory, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{skillCategory.category}</h3>
              <ul className={styles.skillList}>
                {skillCategory.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className={styles.skillTag}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.education}>
          <h3 className={styles.educationTitle}>
            <FontAwesomeIcon icon={faGraduationCap} /> Formation
          </h3>
          <div className={styles.educationCard}>
            <div className={styles.educationDegree}>{aboutData.education.degree}</div>
            <div className={styles.educationField}>{aboutData.education.field}</div>
            <div className={styles.educationMeta}>
              <span className={styles.educationSchool}>{aboutData.education.school}</span>
              <span className={styles.educationSeparator}>·</span>
              <span><FontAwesomeIcon icon={faCalendar} /> {aboutData.education.period}</span>
              <span className={styles.educationSeparator}>·</span>
              <span><FontAwesomeIcon icon={faLocationDot} /> {aboutData.education.location}</span>
            </div>
          </div>
        </div>

        <div className={styles.currentFocus}>
          <p>{aboutData.currentFocus}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
