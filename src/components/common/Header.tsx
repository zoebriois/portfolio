import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PROFILE_INFO } from '../../data/constants';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Accueil', external: false },
    { path: '/experience', label: 'Expérience', external: false },
    { path: '/projects', label: 'Projets', external: false },
    { path: '/contact', label: 'Contact', external: false },
    { path: '/cv', label: 'CV', external: false }
  ];

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>
            <img
              src={`${process.env.PUBLIC_URL}/profile-photo.jpg`}
              alt={PROFILE_INFO.name}
              className={styles.profilePhoto}
            />
            <span>{PROFILE_INFO.name}</span>
          </Link>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
            {navItems.map((item) => (
              <li key={item.path}>
                {item.external ? (
                  <a
                    href={item.path}
                    className={styles.navLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
