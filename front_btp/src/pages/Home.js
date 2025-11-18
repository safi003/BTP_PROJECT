import React from 'react';

// Composants
import HeaderBanner from '../components/HeaderBanner';
import Historique from '../components/Historique';
import HomeSection from '../components/HomeSection';
import CarouselRealisations from '../components/CarouselRealisations';
import ServicesSection from '../components/ServicesSection';
// CSS de la page Home (sections globales)
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Bannière principale */}
      <HeaderBanner />

      {/* Historique de l'entreprise */}
      <Historique />

      {/* Section Services */}
      <ServicesSection />

      {/* Section Réalisations avec carrousel */}
      <CarouselRealisations />

      {/* Section Services */}
      <HomeSection />
    </div>
  );
}

export default Home;
