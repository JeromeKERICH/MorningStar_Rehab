import React from 'react';
import './styles/CounselOverview.css';

const CounselingServices = () => {
  return (
    <div className="counseling-page">
        <h1 className="rehab-heading">Counseling Program</h1>
      {/* Page Heading */}
      <div className="rehab-container">
          <div className="rehab-content">
            <p>
            The MSEF Counseling Program is designed to provide professional support and guidance to individuals, families, and groups struggling with mental health challenges, emotional distress, and life transitions. The program ensures that financial limitations do not prevent anyone from accessing the counseling and therapy they need to heal, grow, and build resilience.

            Through individual, family, and specialized counseling services, we offer a safe space where clients can work through their challenges with the help of certified professionals.
            </p>
          </div>
          <div className="rehab-image">
            <img src="/assets/therapy3.jpg" alt="Support"/>
          </div>
        </div>

      {/* Individual Counseling */}
      <div className='counseling-container'>
        <section className="counseling-section">
            <h2>Individual Counseling</h2>
            <ul className="counseling-list">
            <li>Depression, anxiety, and stress management</li>
            <li>Trauma and PTSD recovery</li>
            <li>Addiction recovery support</li>
            <li>Career and life coaching</li>
            </ul>

            
        </section>

        {/* Family & Group Counseling */}
        <section className="counseling-section">
            <h2>Family & Group Counseling</h2>
            <ul className="counseling-list">
            <li>Families dealing with addiction or mental health issues</li>
            <li>Married couples facing relationship struggles</li>
            <li>Parents & children needing better communication</li>
            </ul>

            
        </section>

        {/* Specialized Counseling Services */}
        <section className="counseling-section">
            <h2>Specialized Counseling Services</h2>
            <ul className="counseling-list">
            <li>Relationship Counseling</li>
            <li>Academic & Career Counseling</li>
            <li>Spiritual Counseling</li>
            <li>Economic & Financial Therapy</li>
            <li>Bereavement Counseling:</li>
            </ul>

            
        </section>
      </div>
      
      <div className="cta-container">
          <a href="/specialized-counseling" className="cta-button">Book a Session</a>
        </div>
    </div>
  );
};

export default CounselingServices;
