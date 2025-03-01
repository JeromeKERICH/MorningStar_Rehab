import React from "react";
import "./styles/Inpatient.css"
import inpatientImg from "/assets/support.jpg"; // Make sure to add an image to the assets folder

const InpatientRehab = () => {
  return (
    <section className="inpatient-rehab">
      <div className="container">
        {/* Left Side - Text Content */}
        <div className="text-content">
          <h2>🏥 Inpatient Rehabilitation (3-Month Program)</h2>
          <p className="intro-text">
            A structured residential program** designed for individuals struggling with alcohol and substance addiction. Our approach combines medical, psychological, and lifestyle support to ensure long-term recovery.
          </p>

          <div className="features-section">
            <h3>📌 Key Features:</h3>
            <ul className="feature-list">
              <li><strong>Medical Detox:</strong> Supervised withdrawal process.</li>
              <li><strong>Psychotherapy & Counseling:</strong> Individual and group therapy.</li>
              <li><strong>Life Skills & Coping Strategies:</strong> Building self-control & resilience.</li>
              <li><strong>Healthy Routine & Activities:</strong> Includes fitness, wellness, and spiritual programs.</li>
              <li><strong>Follow-Up Support:</strong> 6-month monitoring after discharge.</li>
            </ul>
          </div>

          <div className="process-section">
            <h3>📌 Process:</h3>
            <ol className="process-list">
              <li><strong>Admission & Assessment:</strong> Initial medical & psychological evaluation.</li>
              <li><strong>Detox & Stabilization:</strong> Medical intervention if necessary.</li>
              <li><strong>Treatment & Therapy:</strong> CBT, group therapy, and spiritual guidance.</li>
              <li><strong>Recovery & Reintegration:</strong> Skills training & reintegration into society.</li>
              <li><strong>Post-Treatment Monitoring:</strong> Follow-up support & family engagement.</li>
            </ol>
          </div>

          <div className="cta">
            <a href="/enroll-inpatient" className="btn btn-primary">
              Enroll in the Inpatient Program
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="image-content">
          <img src={inpatientImg} alt="Inpatient Rehabilitation" />
        </div>
      </div>
    </section>
  );
};

export default InpatientRehab;
