import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div className="container">
        <nav style={styles.nav}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>🎨</div>
            <h2 style={styles.logoText}>GRIS</h2>
          </div>
          <ul style={styles.navLinks}>
            <li><a href="#features" style={styles.link}>Características</a></li>
            <li><a href="#comprar" style={styles.link}>Comprar</a></li>
            <li><a href="#galeria" style={styles.link}>Galería</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    padding: '15px 0',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoIcon: {
    fontSize: '28px',
  },
  logoText: {
    background: 'linear-gradient(45deg, #FF6B95, #FF9770)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontSize: '28px',
    fontWeight: '700',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '40px',
  },
  link: {
    color: '#666',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    padding: '8px 16px',
    borderRadius: '20px',
  },
  linkHover: {
    color: '#FF6B95',
    background: 'rgba(255, 107, 149, 0.1)',
  },
};

// Añadir hover effect
const originalStyles = { ...styles };
styles.link = {
  ...originalStyles.link,
  ':hover': originalStyles.linkHover
};

export default Header;