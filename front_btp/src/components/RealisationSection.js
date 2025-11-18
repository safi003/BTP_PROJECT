import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Realisation.css";

function ProjetRealisation({ title, description, images, reverse = false }) {
  return (
    <div className="realisation-block">
      <div className={`realisation-grid ${reverse ? "reverse" : ""}`}>
        <div className="grid-p">
          <h3>{title}</h3>
          <p>{description}</p>
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

export default ProjetRealisation;
