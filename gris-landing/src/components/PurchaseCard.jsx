import React, { useState } from 'react';

const PurchaseCard = ({ title, price, discountPrice }) => {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const handlePurchase = () => {
    setIsPurchasing(true);
    setTimeout(() => {
      setIsPurchasing(false);
      setPurchaseComplete(true);
    }, 2000);
  };

  if (purchaseComplete) {
    return (
      <section id="comprar" style={styles.purchase}>
        <div className="container">
          <div style={styles.success}>
            <div style={styles.successIcon}>🎉</div>
            <h2 style={styles.successTitle}>¡Compra Exitosa!</h2>
            <p style={styles.successText}>Gracias por adquirir {title}. El juego se ha añadido a tu biblioteca.</p>
            <p style={styles.successSubtext}>Recibirás un email de confirmación shortly</p>
            <button 
              className="btn btn-primary"
              onClick={() => setPurchaseComplete(false)}
              style={styles.successButton}
            >
              Seguir Explorando
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="comprar" style={styles.purchase}>
      <div className="container">
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Adquirir {title}</h2>
            <div style={styles.editionTag}>Edición Definitiva</div>
          </div>
          
          <div style={styles.priceSection}>
            <div style={styles.priceContainer}>
              <span style={styles.originalPrice}>${price}</span>
              <span style={styles.discountPrice}>${discountPrice}</span>
              <span style={styles.discountBadge}>-25% OFF</span>
            </div>
            <div style={styles.timer}>Oferta termina en 02:15:33</div>
          </div>

          <div style={styles.features}>
            <h3 style={styles.featuresTitle}>🎁 Incluye:</h3>
            <ul style={styles.featuresList}>
              <li style={styles.listItem}>✅ Juego completo para siempre</li>
              <li style={styles.listItem}>✅ Soundtrack digital (MP3/FLAC)</li>
              <li style={styles.listItem}>✅ Wallpapers exclusivos en 4K</li>
              <li style={styles.listItem}>✅ Libro de arte digital</li>
              <li style={styles.listItem}>✅ Soporte técnico permanente</li>
            </ul>
          </div>

          <button 
            style={{
              ...styles.purchaseBtn,
              ...(isPurchasing && styles.purchaseBtnLoading)
            }}
            onClick={handlePurchase}
            disabled={isPurchasing}
          >
            {isPurchasing ? (
              <>
                <span style={styles.spinner}>⏳</span>
                Procesando tu compra...
              </>
            ) : (
              <>
                <span style={styles.cartIcon}>🛒</span>
                Comprar Ahora - ${discountPrice}
              </>
            )}
          </button>

          <div style={styles.security}>
            <div style={styles.securityItem}>🔒 Pago 100% seguro SSL</div>
            <div style={styles.securityItem}>⭐ Garantía de reembolso 30 días</div>
            <div style={styles.securityItem}>📧 Entrega instantánea por email</div>
          </div>

          <div style={styles.platforms}>
            <div style={styles.platformsTitle}>Disponible en:</div>
            <div style={styles.platformIcons}>
              <span style={styles.platformIcon}>🎮</span>
              <span style={styles.platformIcon}>💻</span>
              <span style={styles.platformIcon}>📱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  purchase: {
    padding: '80px 0',
    background: 'linear-gradient(135deg, rgba(142, 197, 252, 0.5) 0%, rgba(224, 195, 252, 0.5) 100%)',
  },
  card: {
    maxWidth: '500px',
    margin: '0 auto',
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '40px',
    borderRadius: '30px',
    textAlign: 'center',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  cardHeader: {
    marginBottom: '30px',
  },
  cardTitle: {
    fontSize: '2.2rem',
    fontWeight: '700',
    background: 'linear-gradient(45deg, #FF6B95, #FF9770)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    marginBottom: '10px',
  },
  editionTag: {
    background: 'linear-gradient(45deg, #FF6B95, #FF9770)',
    color: 'white',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'inline-block',
  },
  priceSection: {
    marginBottom: '30px',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '10px',
    position: 'relative',
  },
  originalPrice: {
    fontSize: '1.4rem',
    color: '#999',
    textDecoration: 'line-through',
  },
  discountPrice: {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#FF6B95',
  },
  discountBadge: {
    background: '#FF6B95',
    color: 'white',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '0.9rem',
    fontWeight: '600',
    position: 'absolute',
    top: '-10px',
    right: '0',
  },
  timer: {
    color: '#666',
    fontSize: '0.9rem',
    fontStyle: 'italic',
  },
  features: {
    marginBottom: '30px',
    textAlign: 'left',
  },
  featuresTitle: {
    color: '#333',
    marginBottom: '15px',
    fontSize: '1.2rem',
  },
  featuresList: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    padding: '8px 0',
    color: '#555',
    fontSize: '1rem',
  },
  purchaseBtn: {
    width: '100%',
    padding: '20px',
    background: 'linear-gradient(45deg, #FF6B95, #FF9770)',
    color: 'white',
    border: 'none',
    borderRadius: '15px',
    fontSize: '1.3rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginBottom: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  purchaseBtnLoading: {
    opacity: '0.7',
    cursor: 'not-allowed',
  },
  cartIcon: {
    fontSize: '1.2rem',
  },
  spinner: {
    animation: 'spin 1s linear infinite',
  },
  security: {
    borderTop: '1px solid #eee',
    paddingTop: '20px',
    marginBottom: '20px',
  },
  securityItem: {
    color: '#666',
    margin: '8px 0',
    fontSize: '0.9rem',
  },
  platforms: {
    borderTop: '1px solid #eee',
    paddingTop: '20px',
  },
  platformsTitle: {
    color: '#666',
    marginBottom: '10px',
    fontSize: '0.9rem',
  },
  platformIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  platformIcon: {
    fontSize: '1.5rem',
  },
  success: {
    textAlign: 'center',
    color: '#333',
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '50px 40px',
    borderRadius: '30px',
    maxWidth: '500px',
    margin: '0 auto',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
  },
  successIcon: {
    fontSize: '4rem',
    marginBottom: '20px',
  },
  successTitle: {
    fontSize: '2.5rem',
    color: '#27ae60',
    marginBottom: '15px',
    fontWeight: '700',
  },
  successText: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#555',
    lineHeight: '1.6',
  },
  successSubtext: {
    fontSize: '1rem',
    color: '#777',
    marginBottom: '30px',
    fontStyle: 'italic',
  },
  successButton: {
    padding: '15px 30px',
    fontSize: '1.1rem',
  },
};

export default PurchaseCard;