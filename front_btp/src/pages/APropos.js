import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/APropos.css';
import { FaQuoteLeft } from "react-icons/fa";
import MonImage1 from '../assets/images/des.jpeg';
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
const slides = [
  { img: p1, label: "M. Mamadou Alpha BALDE\nGérant\nStratégie d'entreprise" },
  { img: p2, label: "M. Oumar Diakhaby\nCo-gérant\nGestion de projet" },
  { img: p3, label: "M. Abdoulaye Pathé BALDE\nCo-gérant\nFinance internationale" },
];
// Témoignages sous forme de tableau pour cleaner le code
const temoignages = [
  { nom: 'Jean Dupont', role: 'Architecte', message: 'Une équipe très professionnelle, attentive à nos besoins.' },
  { nom: 'Safiatou', role: 'Cliente', message: 'La collaboration était efficace, j’ai beaucoup apprécié leur accompagnement.' },
  { nom: 'Hadja', role: 'Entrepreneuse', message: 'Service impeccable et équipe réactive. Je recommande sans hésiter.' },
  { nom: 'Mamadouba', role: 'Client', message: 'Très bonne expérience, ils ont su répondre à mes attentes rapidement.' },
  { nom: 'Kadiatou', role: 'Cliente', message: 'Un travail sérieux et une équipe à l’écoute. Merci encore pour le suivi !' },
];


const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="About_hero">
        <h1>À propos</h1>
      </section>

      {/* Intro */}
    <section className="intro">
    <div className="expertises">
      <h2>Notre Expertise</h2>
      <div className="expertises-row">
        <div className='exp-items'>
           <p><span>Expertise Technique</span><br/>
          Utilisation de technologies de pointe pour des constructions durables et innovantes
        </p>
        </div>
         <div className='exp-items'>
           <p><span>Gestion de Projet</span><br/>
          Équipe expérimentée assurant la livraison dans les délais et le respect du budget.
        </p>
        </div>
      </div>
      <div className="expertises-row">
        <div className='exp-items'>
           <p><span>Qualité des Matériaux</span><br/>
          Sélection rigoureuse de matériaux de construction pour des structures pérennes
        </p>
        </div>
         <div className='exp-items'>
           <p><span>Sécurité</span><br/>
          Priorité absolue à la sécurité sur tous nos chantiers, dépassant les normes.
        </p>
        </div>
    </div>

  </div>
</section>


      {/* Call to action */}
      <section>
        <div className='intro-deux'>
          <div className='intro-d'>
            <p>Nous avons des solutions adaptées à tous vos projets de construction</p>
            <button onClick={() => navigate("/Service")}>Découvrir Nos Services</button>
          </div>
          <img src={MonImage1} alt='maquette' loading="lazy"/> 
        </div>
      </section>
      {/* Equipe */}
      <section>
            <p className="carou">
              Chez <span>V</span>ision <span>O</span>pa <span>S</span>arl vous avez une équipe à votre écoute
            </p>
        
            <Swiper
              spaceBetween={40}
                slidesPerView={"3"}
                centeredSlides={false}
                loop={true}
                className="carousel3d"
                modules={[Mousewheel]}
              >
                {slides.map((slide, i) => (
                  <SwiperSlide key={i} className="carousel-slide">
                    <div className="slide-content">
                      <img src={slide.img} alt={`Hero ${i}`} />
                      <div className="slide-label">{slide.label}</div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
      </section>

      {/* Témoignages */}
      <section className="temoignage">
        <h2>Nos Clients parlent pour nous</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {temoignages.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="temoignage-card">
                <FaQuoteLeft className="quote-icon" />
                <p>{t.message}</p>
                <h4>{t.nom}</h4>
                <span>{t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default AboutPage;
