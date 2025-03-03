import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "./styles/HeroSection.css";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    age: "",
    problem: "",
  });

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const testimonials = [
    "MSEF saved my life. Their counseling helped me rebuild from scratch. - Jane D.",
    "I found hope and healing when I thought it was impossible. - David M.",
    "The support I received from MSEF changed my perspective on life. - Sarah K.",
  ];

  // Handles form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Sends the form data to WhatsApp
  const sendToWhatsApp = () => {
    const { name, contact, age, problem } = formData;
    if (!name || !contact || !age || !problem) {
      alert("Please fill all fields.");
      return;
    }

    const message = `Hello, I need help.\n\n👤 Name: ${name}\n📞 Contact: ${contact}\n🎂 Age: ${age}\n🩺 Problem: ${problem}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "254742935769"; // Change to your WhatsApp number
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank"); // Opens WhatsApp chat
  };

  return (
    <section className="hero gradient-gold-orange">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1><strong>Find Hope.</strong> <br />Embrace Healing. Experience Renewal.</h1>
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
          <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Get Help Now</button>
          <Link to="/donation" className="btn btn-secondary">Donate & Change Lives</Link>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Get Help Now</h2>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
            <input type="text" name="contact" placeholder="Phone Number" onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
            <textarea name="problem" placeholder="Describe Your Problem" onChange={handleChange} required></textarea>

            <div className="modal-buttons">
              <button className="btn btn-primary" onClick={sendToWhatsApp}>Send via WhatsApp</button>
              <button className="btn btn-secondary" onClick={() => setModalOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
