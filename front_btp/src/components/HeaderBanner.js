import '../styles/HeaderBanner.css';
import { useNavigate } from 'react-router-dom';  // ✅ Import obligatoire

function HeaderBanner() {
  const navigate = useNavigate();  // ✅ Déclaration du hook

  return (
    <div className="header-banner">
      <section className="hero">
        <div className="hero-content">
          <h1>Construisons vos projets avec excellence</h1>
          <p>
            Spécialistes du BTP et multi-secteurs, nous vous accompagnons avec rigueur,
            qualité et innovation pour donner vie à vos ambitions.
          </p>
          <p>
            Votre partenaire multi-sectoriel en Guinée, engagé à transformer vos idées
            en réalisations durables.
          </p>
        </div>
        <div className="hero-button">
          <button onClick={() => navigate("/APropos")}>
            En savoir plus
          </button>
        </div>
      </section>
    </div>
  );
}

export default HeaderBanner;
