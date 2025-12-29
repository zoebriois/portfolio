import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  to,
  onClick,
  disabled = false,
  type = 'button'
}) => {
  const className = `${styles.button} ${styles[variant]} ${size !== 'medium' ? styles[size] : ''}`;

  // Lien externe
  if (href) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // Lien interne (React Router)
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  // Bouton standard
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
