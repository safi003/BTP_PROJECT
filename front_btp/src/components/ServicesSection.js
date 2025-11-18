import React from 'react';
import ServiceCard from './ServiceCard';
import { useNavigate } from 'react-router-dom'
import '../styles/ServicesSection.css';
import '../styles/ServiceCard.css';

// ✅ Import des images
import btp from '../assets/images/btp.jpg';
import importe from '../assets/images/importe.jpg';
import transport from '../assets/images/transport.jpg';
import agri from '../assets/images/agri.jpg';

function ServicesSection() {
  const navigate = useNavigate();
  const services = [
    {
      id: btp,
      title: 'Bâtiments et Travaux Publics (BTP)',
      description: 'Excellence dans la construction et la rénovation, avec rigueur, innovation et qualité.',
      image: btp,
    },
    {
      id: importe,
      title: 'Import-Export',
      description: 'Facilitons les échanges commerciaux internationaux avec une logistique fiable et transparente.',
      image: importe,
    },
    {
      id: transport,
      title: 'Transport',
      description: 'Solutions de transport sécurisées et adaptées aux besoins de nos clients.',
      image: transport,
    },
    {
      id: agri,
      title: 'Agriculture',
      description: 'Développement agricole durable pour renforcer la sécurité alimentaire en Guinée.',
      image: agri,
    },
  ];

  return (
    <div className="services-container">
  {services.map((service, index) => (
    <div id={service.id} key={index}>
      <ServiceCard
        title={service.title}
        description={service.description}
        image={service.image}
        showButton={true}
        onButtonClick={() => navigate(`/services#${service.id}`)} />
    </div>
  ))}
</div>
  );
}

export default ServicesSection;
