import React from 'react';
import ServiceCard from './ServiceCard';
import '../styles/ServicesSection.css';

// ✅ Import des icônes depuis React Icons
import { FaLeaf, FaSeedling, FaHandsHelping, FaLightbulb } from 'react-icons/fa';

function ServicesSection() {
  const services = [
    {
      title: "Pratiques Écologiques",
      description: "Adoption de méthodes de construction écoresponsables et de technologies vertes.",
      icon: <FaLeaf size={50} color="#4CAF50" />, // icône verte
    },
    {
      title: "Agriculture Durable",
      description: "Promotion de techniques agricoles respectueuses de l'environnement et de la biodiversité.",
      icon: <FaSeedling size={50} color="#8BC34A" />,
    },
    {
      title: "Responsabilité Sociale",
      description: "Programmes de formation et d'emploi pour les communautés locales.",
      icon: <FaHandsHelping size={50} color="#FF9800" />,
    },
    {
      title: "Innovation",
      description: "Investissement continu dans la recherche pour des solutions durables et innovantes.",
      icon: <FaLightbulb size={50} color="#FFC107" />,
    },
  ];

  return (
    <section className="services-section">
      <h2>Notre engagement Envers le Développement Durable</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            description={service.description} 
            icon={service.icon} // on passe l'icône à la place de l'image
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
