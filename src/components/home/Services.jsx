import React from "react";
import { FaHospital, FaComments, FaHotTub, FaDumbbell, FaSpa } from "react-icons/fa";
import { TbMassage } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5"; // Import arrow icon
import "./styles/Services.css";

const services = [
  {
    icon: <FaHospital />,
    title: "Rehabilitation (Inpatient & Outpatient)",
    description: "Personalized treatment programs for substance abuse recovery.",
    link: "/rehabilitation",
  },
  {
    icon: <FaComments />,
    title: "Counseling & Therapy",
    description: "Expert counseling for emotional, social, and mental well-being.",
    link: "/services/counseling",
  },
  {
    icon: <FaHotTub />,
    title: "Sauna & Wellness Programs",
    description: "Physical and mental wellness through relaxation therapies.",
    link: "/services/sauna",
  },
  {
    icon: <FaDumbbell />,
    title: "Gym & Fitness",
    description: "Supporting recovery through physical fitness and stress management.",
    link: "/services/gym",
  },
  {
    icon: <TbMassage />,
    title: "Massage Therapy",
    description: "Healing and relaxation for mental and physical health.",
    link: "/services/massage",
  },
];

const ServicesOverview = () => {
  return (
    <section className="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <a href={service.link} className="learn-more">
              Learn More <IoArrowForward className="arrow-icon" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
