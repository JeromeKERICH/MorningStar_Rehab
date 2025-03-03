import React from 'react';
import './styles/Sauna.css';

const SaunaWellness = () => {
  return (
    <div className="wellness-page">
      <h1 className="wellness-heading">Sauna & Wellness Program</h1>

      <div className="rehab-container">
          <div className="rehab-content">
          <p>
            The MSEF Sauna & Wellness Program is designed to promote holistic healing 
            and rejuvenation through advanced wellness therapies. Our program provides 
            individuals with access to detoxifying sauna sessions, guided relaxation therapies, 
            and wellness coaching aimed at improving overall physical and mental well-being.
          </p>
          </div>
          <div className="rehab-image">
            <img src="/assets/sauna.jpg" alt="Support"/>
          </div>
        </div>

      {/* Sauna Therapy */}
      <div className="wellness-container">
        <section className="wellness-section">
          <h2>Sauna Therapy</h2>
          <ul className="wellness-list">
            <li>Full-body detox and improved circulation</li>
            <li>Stress relief and relaxation</li>
            <li>Pain management and muscle recovery</li>
            <li>Boosted immune function</li>
          </ul>
        </section>

        {/* Wellness Coaching */}
        <section className="wellness-section">
          <h2>Wellness Coaching</h2>
          <ul className="wellness-list">
            <li>Personalized health & lifestyle plans</li>
            <li>Mindfulness and stress management techniques</li>
            <li>Holistic nutrition guidance</li>
            <li>Fitness and physical wellness strategies</li>
          </ul>
        </section>

        {/* Specialized Wellness Services */}
        <section className="wellness-section">
          <h2>Specialized Wellness Services</h2>
          <ul className="wellness-list">
            <li>Aromatherapy and essential oil healing</li>
            <li>Hydrotherapy and deep relaxation techniques</li>
            <li>Meditation & guided breathing exercises</li>
            <li>Sleep therapy and energy balancing</li>
          </ul>
        </section>
      </div>

      {/* Call-To-Action */}
      <div className="cta-container">
        <a href="/sauna-wellness-booking" className="cta-button">Book a Wellness Session</a>
      </div>
    </div>
  );
};

export default SaunaWellness;
