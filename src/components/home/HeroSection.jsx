import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "./styles/HeroSection.css";

const HeroSection = () => {

  useEffect(() => {
         scrollTo(0, 0);
          }, []);
    
  
  const testimonials = [
    "MSEF saved my life. Their counseling helped me rebuild from scratch. - Jane D.",
    "I found hope and healing when I thought it was impossible. - David M.",
    "The support I received from MSEF changed my perspective on life. - Sarah K.",
  ];

  return (
    <section className="hero gradient-gold-orange">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1><strong>Find Hope.</strong> <br></br>Embrace Healing. Experience Renewal.</h1>
        <p className="head-p">Transforming lives through rehabilitation, counseling, and wellness.</p>

        

        {/* Testimonial Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="testimonial-slider"
        >
          {testimonials.map((text, index) => (
            <SwiperSlide key={index}>
              <p className="testimonial">{text}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Call-to-Action Buttons */}
        <div className="hero-buttons">
          <Link to="/" className="btn btn-primary">Get Help Now</Link>
          <Link to="donation" className="btn btn-secondary">Donate & Change Lives</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
