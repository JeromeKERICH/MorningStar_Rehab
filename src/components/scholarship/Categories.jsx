import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // FontAwesome Checkmark Icon
import "./styles/Categories.css";

const ScholarshipCategories = () => {
  return (
    <section className="scholarship-categories">
      <h2>Scholarship Categories</h2>

      <div className="scholarship-grid">
        {/* Full Scholarship */}
        <div className="scholarship-box">
          <h3>Full Scholarship</h3>
          <ul>
            <li>Covers 100% of the cost for rehabilitation, counseling, and wellness programs.</li>
            <li>Includes accommodation, meals, therapy, and follow-up care.</li>
            <li>Awarded to individuals in extreme financial distress, such as:</li>
            <ul className="sub-list">
              <li>- Homeless individuals</li>
              <li>- Survivors of trauma and abuse</li>
              <li>- Orphans and vulnerable children (OVCs)</li>
              <li>- People from marginalized communities</li>
            </ul>
          </ul>
        </div>

        {/* Partial Scholarship */}
        <div className="scholarship-box">
          <h3>Partial Scholarship</h3>
          <ul>
            <li>Covers 50% - 75% of the total treatment cost.</li>
            <li>Targeted at individuals who can contribute part of the payment but need financial support.</li>
            <li>Beneficiaries may include:</li>
            <ul className="sub-list">
              <li>- Youth struggling with addiction</li>
              <li>- Low-income working professionals</li>
              <li>- Students facing mental health challenges</li>
            </ul>
          </ul>
        </div>

        {/* Emergency Assistance Fund */}
        <div className="scholarship-box">
          <h3>Emergency Assistance Fund</h3>
          <ul>
            <li>Provides immediate financial aid for individuals in crisis.</li>
            <li>Includes emergency detox programs, short-term counseling, and urgent intervention services.</li>
            <li>Designed for individuals who need immediate intervention but cannot afford it at the moment.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipCategories;
