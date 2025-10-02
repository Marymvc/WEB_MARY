import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PurchaseCard from './components/PurchaseCard';
import './App.css';

function App() {
  const gameInfo = {
    title: "GRIS",
    description: "Un viaje emocional a través de la esperanza y la tristeza. Descubre un mundo de belleza serena y paisajes impresionantes en esta experiencia única.",
    price: 19.99,
    discountPrice: 14.99,
    features: [
      "Arte visual estilo acuarela",
      "Banda sonora emotiva premiada", 
      "Gameplay sin palabras ni texto",
      "Experiencia relajante sin muerte",
      "Puzzles elegantes y atmosféricos"
    ]
  };

  return (
    <div className="App">
      <Header />
      <Hero title={gameInfo.title} description={gameInfo.description} />
      <Features features={gameInfo.features} />
      <PurchaseCard 
        title={gameInfo.title}
        price={gameInfo.price}
        discountPrice={gameInfo.discountPrice}
      />
    </div>
  );
}

export default App;