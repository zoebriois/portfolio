import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  footer,
  onClick,
  className = ''
}) => {
  const cardClassName = `${styles.card} ${onClick ? styles.clickable : ''} ${className}`;

  return (
    <div className={cardClassName} onClick={onClick}>
      {(title || subtitle) && (
        <div className={styles.cardHeader}>
          {title && <h3 className={styles.cardTitle}>{title}</h3>}
          {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
        </div>
      )}

      <div className={styles.cardContent}>
        {children}
      </div>

      {footer && (
        <div className={styles.cardFooter}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
