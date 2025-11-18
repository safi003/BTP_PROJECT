import React from 'react';
import '../styles/ServiceCard.css';

function ServiceCard({ title, description, image, icon, showButton, onButtonClick }) {
  return (
    <div className="service-card">
      <div className="service-media">
        {icon ? icon : image && <img src={image} alt={title} />}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>

      {/* Bouton optionnel */}
      {showButton && (
        <button className="service-btn" onClick={onButtonClick}>
          En savoir plus
        </button>
      )}
    </div>
  );
}

export default ServiceCard;
