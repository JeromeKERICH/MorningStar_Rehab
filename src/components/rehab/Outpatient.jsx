import React from 'react';
import './styles/Outpatient.css';


const OutpatientRehab = () => {
  return (
    <section className="outpatient-rehab">
      {/* Heading */}
      <h1 className="rehab-heading">Outpatient Rehabilitation</h1>

      {/* Description */}
      <p className="rehab-description">
        Our outpatient program is designed for individuals who need structured addiction recovery 
        but cannot commit to full-time inpatient care. This flexible approach allows participants 
        to continue their daily responsibilities while receiving professional support.
      </p>

      {/* Key Features Grid */}
      <div className="rehab-grid">
        <div className="rehab-box">
          <h2>Personalized Psychoeducation</h2>
          <p>Participants receive tailored education on addiction, coping strategies, and relapse prevention. 
            These sessions are designed to empower individuals with knowledge and tools to sustain long-term recovery.</p>
        </div>
        <div className="rehab-box">
          <h2>Flexible Scheduling</h2>
          <p>We offer sessions in the morning, evening, and weekends, allowing professionals, students, and 
            parents to attend without disrupting their daily responsibilities.</p>
        </div>
        <div className="rehab-box">
          <h2>One-on-One & Group Therapy</h2>
          <p>Participants engage in both individualized counseling and group therapy, providing a balanced approach 
            to emotional healing, peer support, and personal growth.</p>
        </div>
        <div className="rehab-box">
          <h2>Holistic Approach</h2>
          <p>Our program includes physical wellness, nutrition, financial planning, and academic counseling to 
            ensure a well-rounded recovery journey that addresses all aspects of life.</p>
        </div>
      </div>

      {/* Who It's For Section */}
      <div className="who-for">
        <h2>Who It’s For</h2>
        <ul>
          <li>Individuals in the early stages of addiction who need structured support.</li>
          <li>Working professionals, students, and parents seeking flexible recovery options.</li>
          <li>Those transitioning from inpatient rehab and need continued guidance.</li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="cta-container">
        <a href="/registration" className="cta-button">Join the Outpatient Program</a>
      </div>
    </section>
  );
}

export default OutpatientRehab;
