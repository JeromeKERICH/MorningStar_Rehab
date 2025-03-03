import React from 'react';
import './styles/Inpatient.css'; // Import CSS file

const RehabInpatient = () => {
  return (
    <section className="rehab-inpatient">
      {/* Heading */}
      <h1 className="rehab-heading">Inpatient (3-Month Program)</h1>

      {/* Description */}
      <p className="rehab-description">
        A structured residential program for individuals struggling with alcohol and substance addiction.
      </p>

      {/* Key Features Grid */}
      <div className="rehab-grid">
        <div className="rehab-box">
          <h2>Medical Detox</h2>
          <p>A supervised withdrawal process that helps individuals safely manage withdrawal symptoms while their body clears substances.</p>
        </div>
        <div className="rehab-box">
          <h2>Psychotherapy & Counseling</h2>
          <p>Professional therapy sessions, both individual and group, to address the root causes of addiction and provide emotional support.</p>
        </div>
        <div className="rehab-box">
          <h2>Life Skills & Coping Strategies</h2>
          <p>Training on self-control, decision-making, and resilience to help individuals reintegrate into society and avoid relapse. </p>
        </div>
        <div className="rehab-box">
          <h2>Healthy Routine & Activities</h2>
          <p>A structured daily schedule that includes physical fitness, wellness programs, and spiritual practices to promote overall well-being.</p>
        </div>
        <div className="rehab-box">
          <h2>Follow-Up Support</h2>
          <p>A post-rehabilitation monitoring program for six months to ensure long-term recovery and provide ongoing guidance and encouragement.</p>
        </div>

      </div>
      {/* CTA Button */}
      <a href="registration" className="cta-button">
        Enroll in the Inpatient Program
      </a>
    </section>
  );
}

export default RehabInpatient;
