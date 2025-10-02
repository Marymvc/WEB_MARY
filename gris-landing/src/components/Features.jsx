import React from 'react';

const FeatureItem = ({ feature, index, icon }) => {
  return (
    <div style={styles.featureItem}>
      <div style={styles.featureIcon}>
        {icon}
      </div>
      <h3 style={styles.featureTitle}>{feature}</h3>
      <p style={styles.featureDescription}>{getFeatureDescription(feature)}</p>
    </div>
  );
};

const getFeatureDescription = (feature) => {
  const descriptions = {
    "Arte visual estilo acuarela": "Paisajes pintados a mano que cobran vida en cada nivel",
    "Banda sonora emotiva premiada": "Música que acompaña cada emoción del viaje",
    "Gameplay sin palabras ni texto": "Una historia contada through imágenes y sonidos",
    "Experiencia relajante sin muerte": "Disfruta del viaje sin presión ni game over",
    "Puzzles elegantes y atmosféricos": "Desafíos que se integran naturalmente en el mundo"
  };
  return descriptions[feature] || "Característica única del juego Gris";
};

const Features = ({ features }) => {
  const icons = ["🎨", "🎵", "💫", "🌙", "🔮"];
  
  return (
    <section id="features" style={styles.features}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>Descubre la Magia de Gris</h2>
          <p style={styles.subtitle}>Una experiencia que redefine lo que un juego puede ser</p>
        </div>
        <div style={styles.grid}>
          {features.map((feature, index) => (
            <FeatureItem 
              key={index} 
              feature={feature} 
              index={index} 
              icon={icons[index]} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  features: {
    padding: '100px 0',
    background: 'linear-gradient(135deg, rgba(255, 222, 233, 0.7) 0%, rgba(181, 255, 252, 0.7) 100%)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#FF6B95',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '1.3rem',
    color: '#666',
    fontWeight: '300',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
  },
  featureItem: {
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '40px 30px',
    borderRadius: '25px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  featureItemHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  featureTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '15px',
  },
  featureDescription: {
    color: '#666',
    lineHeight: '1.6',
    fontSize: '1rem',
  },
};

export default Features;