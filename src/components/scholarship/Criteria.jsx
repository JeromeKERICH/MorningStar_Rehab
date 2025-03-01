import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import checkmark icon
import "./styles/Criteria.css"; // Import Criteria styles

const EligibilityCriteria = () => {
  return (
    <section className="eligibility-section">
      <h2>Eligibility Criteria</h2>
      <p>To qualify for an MSEF scholarship, applicants must meet one or more of the following conditions:</p>

      <div className="criteria-list">
        <div className="criteria-item">
          <FaCheckCircle className="icon" />
          <div>
            <h3>Financial Need</h3>
            <p>Demonstrated inability to afford rehabilitation or counseling.</p>
          </div>
        </div>

        <div className="criteria-item">
          <FaCheckCircle className="icon" />
          <div>
            <h3>Medical Necessity</h3>
            <p>Diagnosed or suspected addiction/mental health disorder requiring urgent intervention.</p>
          </div>
        </div>

        <div className="criteria-item">
          <FaCheckCircle className="icon" />
          <div>
            <h3>Commitment to Recovery</h3>
            <p>Willingness to complete the program and adhere to treatment guidelines.</p>
          </div>
        </div>

        <div className="criteria-item">
          <FaCheckCircle className="icon" />
          <div>
            <h3>Referral from a Partner Organization</h3>
            <p>Recommendation from a school, religious institution, community leader, or social worker.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;
