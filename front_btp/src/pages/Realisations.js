import React from "react";
import "../styles/Realisation.css";
import ProjetRealisation from "../components/RealisationSection";
import { useNavigate } from 'react-router-dom'; 

import p1_1 from "../assets/images/p1.jpeg";
import p1_2 from "../assets/images/p2.jpeg";
import p2_1 from "../assets/images/p3.jpeg";
import p2_2 from "../assets/images/p4.jpeg";
import p3_1 from "../assets/images/p4.jpeg";
import p3_2 from "../assets/images/p1.jpeg";

function Realisation() {
  const navigate = useNavigate();

  return (
    <section className="realisation">
      {/* En-tête */}
      <div className="realisation-header">
        <h1>Nos Réalisations</h1>
      </div>

      <div className="realisation-container">
        {/* Projet 1 */}
        <ProjetRealisation
          title="Construction d’un complexe résidentiel"
          description="Ce projet résidentiel moderne a été conçu pour répondre aux besoins d’une clientèle exigeante. Avec des finitions haut de gamme, une architecture contemporaine et des espaces optimisés, il reflète notre savoir-faire dans le domaine de la construction durable."
          images={[p1_1, p1_2]}
        />

        {/* Projet 2 */}
        <ProjetRealisation
          title="Rénovation d’un bâtiment historique"
          description="Nous avons pris en charge la restauration complète de ce bâtiment classé patrimoine. L’objectif était de préserver son authenticité tout en intégrant des solutions modernes pour améliorer le confort et la sécurité des occupants."
          images={[p2_1, p2_2]}
          reverse
        />
         <section className="intro-deuxx">
          <div className="intro-dd">
            <p>
              Puisque chaque projet est unique, il possède sa propre histoire,
              son étude et son identité. Derrière chaque plan et chaque chantier,
              il y a une vision précise, un besoin particulier et un objectif
              clair à atteindre.
            </p>
            <p>
              Nos équipes travaillent main dans la main avec les clients afin de
              comprendre leurs attentes, anticiper les défis et proposer des
              solutions adaptées. Un projet ne se limite pas seulement à la
              construction, il reflète des ambitions, des valeurs et parfois même
              un héritage qui se transmet.
            </p>
            <p>
              Chez <strong>Vision Opa Sarl</strong>, nous croyons que bâtir, ce
              n’est pas seulement assembler des matériaux, c’est donner vie à une
              idée, transformer un rêve en réalité et créer des espaces qui
              inspirent et qui durent.
            </p>
            <button onClick={() => navigate("/Contact")}>
              Un projet ? Contactez-nous
            </button>
          </div>
        </section>
        {/* Projet 3 */}
        <ProjetRealisation
          title="Aménagement d’espaces professionnels"
          description="Ce projet visait à transformer des locaux bruts en espaces de travail modernes et fonctionnels. Grâce à un design épuré et des solutions techniques adaptées, nous avons créé un environnement favorisant la productivité et le bien-être."
          images={[p3_1, p3_2]}
        />
      </div>
    </section>
  );
}

export default Realisation;
