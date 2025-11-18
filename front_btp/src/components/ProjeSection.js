import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {useNavigate} from "react-router-dom";
import "../styles/Service.css";

function ProjetService({ sectionTitle, title, description, images, reverse = false }) {
  const navigate = useNavigate();
  return (
    <div className="service-block">
      {sectionTitle && <h2 className="service-section-title">{sectionTitle}</h2>}
      
      <div className={`service-grid ${reverse ? "reverse" : ""}`}>
        <div className="grid-p">
          <p>{description}</p>
          <button onClick={() => navigate("/Contact")}>Contactez Nous!</button>
        </div>
        <div className="grid-im">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={img} alt={`${title} ${idx + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ProjetService;
