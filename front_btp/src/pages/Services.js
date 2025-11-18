import React from 'react';
import '../styles/Service.css';

// ✅ Import des images (ou icônes si tu préfères)
import btp from '../assets/images/btp.jpg';
import importe from '../assets/images/importe.jpg';
import transport from '../assets/images/transport.jpg';
import agric from '../assets/images/agric.jpg';

function Services() {
  const services = [
    {
      title: "Bâtiments et Travaux Publics (BTP)",
      description: `Chez VISION OPA SARL, nous plaçons l’excellence au cœur de nos projets de construction et de rénovation.
      Nous concevons et réalisons des bâtiments modernes, durables et adaptés aux besoins de nos clients, tout en respectant
      les normes de qualité et de sécurité les plus strictes. Notre expertise couvre aussi bien les infrastructures publiques
      (routes, ponts, ouvrages hydrauliques) que les projets privés (immeubles, habitations, complexes industriels).
      Chaque projet est mené avec rigueur et innovation afin d’offrir des solutions fiables et durables qui contribuent
      au développement du pays.`,
      image: btp,
    },
    {
      title: "Import-Export",
      description: `Nous facilitons les échanges commerciaux en reliant la Guinée au reste du monde grâce à des services d’import-export
      fiables et transparents. VISION OPA SARL assure la logistique, la gestion des formalités douanières et l’acheminement
      de divers produits essentiels (matériaux de construction, équipements, biens de consommation). Notre objectif est
      d’accompagner nos partenaires avec efficacité, en leur garantissant des opérations rapides, sécurisées et conformes
      aux standards internationaux.`,
      image: importe,
    },
    {
      title: "Transport",
      description: `Le transport est au cœur du développement économique. VISION OPA SARL propose des solutions adaptées et sécurisées
      pour répondre aux besoins variés de nos clients : transport de marchandises, logistique industrielle, et mobilité de
      personnes. Nous disposons d’une organisation moderne et d’une équipe qualifiée, assurant ponctualité et fiabilité
      dans nos services. Notre ambition est de contribuer à la fluidité des échanges et au désenclavement des zones rurales
      et urbaines, en apportant des solutions innovantes et accessibles.`,
      image: transport,
    },
    {
      title: "Agriculture",
      description: `Consciente de l’importance stratégique du secteur agricole pour l’avenir de la Guinée, VISION OPA SARL s’investit
      dans la promotion d’une agriculture moderne et durable. Nous accompagnons les producteurs locaux dans la mise en place
      de techniques respectueuses de l’environnement, tout en renforçant la productivité et la sécurité alimentaire. Nos actions
      englobent l’appui aux cultures vivrières et de rente, le développement de filières agricoles porteuses, et la valorisation
      de la transformation locale.`,

      image: agric,
    },
  ];

  return (
    <div className="services-page">
      <h1>Nos Secteurs d’Activité</h1>
      {services.map((service, index) => (
        <div key={index} className="service-block">
          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>
          <div className="service-content">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {/* ✅ Bouton contact après chaque service */}
            <a href="/contact#contact-form" className="contact-button">
              Nous Contacter
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;