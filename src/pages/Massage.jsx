import React from 'react';
import './styles/Massage.css';
import { useEffect } from 'react';

const MassageTherapy = () => {
  useEffect(() => {
      scrollTo(0,0);
    }, []);
  return (
    <div className="massage-page">
        <h1 className="massage-heading">Massage Therapy Program</h1>
        
      {/* Introduction Section */}
      <div className="massage-container">
          <div className="massage-content">
            <p>
            The MSEF Massage Therapy Program is designed to promote relaxation, relieve stress, and support physical recovery through professional therapeutic massage techniques. 
            This program ensures that financial constraints do not prevent anyone from benefiting from the healing effects of massage therapy.
            <br /><br />
            Our certified massage therapists offer various techniques tailored to meet individual needs, helping clients improve circulation, reduce pain, and achieve overall well-being.
            </p>
          </div>
          <div className="massage-image">
            <img src="/assets/massage.jpg" alt="Massage Therapy"/>
          </div>
        </div>

      {/* Massage Therapy Services */}
      <div className='massage-services-container'>
        {/* Swedish Massage */}
        <section className="massage-section">
            <h2>Swedish Massage</h2>
            <ul className="massage-list">
            <li>Relaxation-focused full-body massage</li>
            <li>Improves blood circulation and reduces tension</li>
            <li>Gentle pressure for stress relief</li>
            </ul>
        </section>

        {/* Deep Tissue Massage */}
        <section className="massage-section">
            <h2>Deep Tissue Massage</h2>
            <ul className="massage-list">
            <li>Targets deep muscle layers and tension points</li>
            <li>Effective for chronic pain and muscle recovery</li>
            <li>Uses firm pressure to release tight knots</li>
            </ul>
        </section>

        {/* Sports Massage */}
        <section className="massage-section">
            <h2>Sports Massage</h2>
            <ul className="massage-list">
            <li>Designed for athletes and active individuals</li>
            <li>Prevents injuries and enhances performance</li>
            <li>Focuses on muscle flexibility and recovery</li>
            </ul>
        </section>

        {/* Reflexology */}
        <section className="massage-section">
            <h2>Reflexology</h2>
            <ul className="massage-list">
            <li>Pressure-point therapy for hands and feet</li>
            <li>Promotes internal organ health</li>
            <li>Balances body energy and relieves stress</li>
            </ul>
        </section>

        {/* Prenatal Massage */}
        <section className="massage-section">
            <h2>Prenatal Massage</h2>
            <ul className="massage-list">
            <li>Safe and gentle massage for expectant mothers</li>
            <li>Reduces pregnancy-related back pain and swelling</li>
            <li>Enhances relaxation and blood circulation</li>
            </ul>
        </section>

        {/* Aromatherapy Massage */}
        <section className="massage-section">
            <h2>Aromatherapy Massage</h2>
            <ul className="massage-list">
            <li>Uses essential oils to enhance relaxation</li>
            <li>Boosts mood and alleviates anxiety</li>
            <li>Perfect for stress relief and deep relaxation</li>
            </ul>
        </section>
      </div>
      
      {/* Call to Action */}
      <div className="cta-container">
          <a href="/book-massage" className="cta-button" onClick={"disable"}>Coming Soon</a>
        </div>
    </div>
  );
};

export default MassageTherapy;
