import React from 'react';
import { experiences, otherExperiences } from '../../data/experience';
import { calculateDuration } from '../../utils/date';
import Card from '../common/Card';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  return (
      <section className={styles.experience}>
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.sectionTitle}>Expériences</h2>
          </div>

          <div className={styles.timeline}>
            {experiences.map((exp) => {
              const startDate = new Date(exp.startDate);
              const endDate = exp.endDate ? new Date(exp.endDate) : null;

              const formatDate = (date: Date) => {
                const month = date.toLocaleDateString('fr-FR', { month: 'short' }).replace('.', '').toUpperCase();
                const year = date.getFullYear();
                return `${month}. ${year}`;
              };

              const period = endDate
                ? `${formatDate(startDate)} - ${formatDate(endDate)}`
                : `DEPUIS ${formatDate(startDate)}`;

              const duration = calculateDuration(exp.startDate, exp.endDate);

              return (
                  <div key={exp.id} className={styles.timelineItem}>
                    <div className={styles.meta}>
                      <div className={styles.metaItem}>{period}</div>
                    </div>
                    <div className={styles.timelineContent}>
                      <div className={styles.experienceHeader}>
                        <div className={styles.company}>{exp.company}</div>
                        <h3 className={styles.role}>{exp.role}</h3>
                        <div className={styles.metaInfo}>
                          <span>{duration}</span>
                          <span className={styles.separator}>·</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div
                          className={styles.description}
                          dangerouslySetInnerHTML={{__html: exp.description}}
                      />

                      {exp.skills && exp.skills.length > 0 && (
                          <div className={styles.skills}>
                            <strong className={styles.skillsLabel}>Compétences :</strong>
                            {exp.skills.map((skill, index) => (
                                <span key={index} className={styles.skillTag}>
                          {skill}
                        </span>
                            ))}
                          </div>
                      )}
                    </div>
                  </div>
              );
            })}
          </div>

          {otherExperiences.length > 0 && (
              <div className={styles.otherExperiences}>
                <h3 className={styles.otherTitle}>Autres expériences</h3>

                <div className={styles.otherGrid}>
                  {otherExperiences.map((exp) => {
                    const duration = calculateDuration(exp.startDate, exp.endDate);
                    const year = new Date(exp.startDate).getFullYear();

                    return (
                        <Card
                            key={exp.id}
                            title={exp.role}
                            subtitle={`${exp.company} · ${duration} (${year})`}
                        >
                          <div
                              className={styles.description}
                              dangerouslySetInnerHTML={{__html: exp.description}}
                          />
                          {exp.skills && exp.skills.length > 0 && (
                              <div className={styles.skills}>
                                <strong className={styles.skillsLabel}>Compétences :</strong>
                                {exp.skills.map((skill, index) => (
                                    <span key={index} className={styles.skillTag}>
                                      {skill}
                                    </span>
                                ))}
                              </div>
                          )}
                        </Card>
                    );
                  })}
                </div>
              </div>
          )}

          <div className={styles.formationSection}>
            <h3 className={styles.formationTitle}>Formation</h3>
            <div className={styles.formationContent}>
              <div className={styles.formationItem}>
                <h4 className={styles.formationDegree}>Diplôme d'ingénieur</h4>
                <div className={styles.formationDetails}>
                  <span className={styles.formationField}>Informatique industrielle, microélectronique, automatisme</span>
                  <span className={styles.separator}>·</span>
                  <span className={styles.formationSchool}>Polytech Lille</span>
                  <span className={styles.separator}>·</span>
                  <span className={styles.formationPeriod}>2014 - 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Experience;
