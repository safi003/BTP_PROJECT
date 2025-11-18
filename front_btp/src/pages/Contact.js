import React , { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "swiper/css";
import "../styles/Contact.css";


export default function Carousel3D() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form") {
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // ✅ scroll automatique
      }
    }
  }, [location]);

  return (
    <div>
      <h2>Nos coordonnées de contact</h2>
      <div className="contact-section">
        <div className="contact-info">
          <h3>N'hésitez surtout pas à nous contacter</h3>
          <div className="info-block">
            <p className="label1">Téléphone</p>
            <p className="value">+224 628 20 6079 / 662 40 35 11</p>
          </div>
          <div className="info-block">
            <p className="label1">Email</p>
            <p className="value">opabtp3@gmail.com</p>
          </div>
          <div className="info-block">
            <p className="label1">Adresse</p>
            <p className="value">
              Simbaya Gare, commune de Ratoma, <br />
              Conakry, République de Guinée
            </p>
          </div>
        </div>

        {/* ✅ Formulaire avec ID */}
        <div className="contact-form">
          <h3>Contact</h3>
          <form id="contact-form" action="mailto:safiadiaraye03@gmail.com" method="post" enctype="text/plain">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" /><br />
            <input type="text" placeholder="Téléphone" /><br />
            <input type="text" placeholder="Objet" /><br />
            <textarea placeholder="Dites-nous ce qui vous intéresse"></textarea>
            <button type="submit" >Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}
