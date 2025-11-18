import React from 'react';
import '../styles/Historique.css';

function Historique() {
  return (
    <div className="historique">
      <div className="historique-item">
        <strong>1</strong>
        <h4>Fondation</h4>
        <p>Le 11 janvier 2024, VISION OPA SARL voit le jour à Conakry.</p>
      </div>
      <div className="historique-item">
        <strong>2</strong>
        <h4>Expansion</h4>
        <p>Rapide diversification dans six secteurs clés du marché guinéen.</p>
      </div>
      <div className="historique-item">
        <strong>3</strong>
        <h4>Aujourd'hui</h4>
        <p>Acteur majeur de l'économie guinéenne, contribuant au développement national.</p>
      </div>
    </div>
  );
}

export default Historique;
