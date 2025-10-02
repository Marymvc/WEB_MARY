import React from 'react';

const Hero = ({ title, description }) => {
  return (
    <section style={styles.hero}>
      <div className="container">
        <div style={styles.content}>
          <div style={styles.titleContainer}>
            <h1 style={styles.title}>{title}</h1>
            <div style={styles.subtitle}>Una experiencia visual y emocional única</div>
          </div>
          <p style={styles.description}>{description}</p>
          <div style={styles.buttons}>
            <a href="#comprar" className="btn btn-primary" style={styles.ctaButton}>
              🎮 Comprar Ahora - Oferta Especial
            </a>
          </div>
          <div style={styles.rating}>
            <div style={styles.stars}>★★★★★</div>
            <div style={styles.ratingText}>4.8/5 - Mejor Juego Indie 2018</div>
          </div>
        </div>
        <div style={styles.heroImage}>
          <div style={styles.imagePlaceholder}>
            <div style={styles.gameArt}></div>
            <div style={styles.floatingElements}>
              <div style={styles.floatingElement1}>🎨</div>
              <div style={styles.floatingElement2}>✨</div>
              <div style={styles.floatingElement3}>🌊</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    padding: '120px 0 80px',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, rgba(142, 197, 252, 0.3) 0%, rgba(224, 195, 252, 0.3) 100%)',
  },
  content: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  titleContainer: {
    marginBottom: '30px',
  },
  title: {
    fontSize: '5rem',
    fontWeight: '700',
    background: 'linear-gradient(45deg, #FF6B95, #FF9770, #FFD26F)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  subtitle: {
    fontSize: '1.4rem',
    color: '#666',
    fontWeight: '300',
    fontStyle: 'italic',
  },
  description: {
    fontSize: '1.3rem',
    color: '#555',
    marginBottom: '40px',
    lineHeight: '1.8',
    background: 'rgba(255, 255, 255, 0.7)',
    padding: '25px',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '40px',
  },
  ctaButton: {
    fontSize: '1.2rem',
    padding: '18px 40px',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    color: '#666',
  },
  stars: {
    color: '#FFD700',
    fontSize: '1.5rem',
  },
  ratingText: {
    fontSize: '1.1rem',
  },
  heroImage: {
    display: 'none', // Ocultamos el placeholder de imagen
  },
};

export default Hero;