import React from "react";
import "./styles/Why.css";

const whyReasons = [
  { title: "Holistic Approach", items: ["Medical Detox", "Counseling & Therapy", "Spiritual Healing", "Physical Wellness", "Aftercare Support"] },
  { title: "Professional Team", items: ["Medical Doctors & Psychiatrists", "Certified Addiction Counselors", "Licensed Psychologists", "Spiritual Advisors", "Wellness Coaches"] },
  { title: "Personalized Treatment", items: ["Comprehensive Assessments", "Custom Therapy Programs", "Flexible Options", "Specialized Programs"] },
  { title: "State-of-the-Art Facilities", items: ["Spacious Accommodation", "Wellness Services", "Resource Library", "Nature Therapy"] },
  { title: "Aftercare & Follow-Up", items: ["Regular Check-ins", "Home Visits", "Alumni Support Groups", "Career Coaching"] },
  { title: "Community Outreach", items: ["Education & Prevention", "School & Workplace Counseling", "Free Screenings", "Motivational Talks"] },
  { title: "Affordable Payment Plans", items: ["Installment Options", "Sponsorships", "Corporate Partnerships", "Insurance Assistance"] },
  { title: "Confidential Treatment", items: ["100% Confidential", "Anonymous Therapy", "No Data Sharing"] },
  { title: "Online Therapy & Support", items: ["Virtual Therapy", "Live Chat Support", "Anonymous Q&A Videos"] },
];

const WhyMSEF = () => {
  return (
    <section className="why-box">
      <h1 className="why-title">Why You Should Consider MSEF</h1>
      <div className="why-grid">
        {whyReasons.map((reason, index) => (
          <div key={index} className="why-card">
            <h3>{reason.title}</h3>
            <ul>
              {reason.items.map((item, idx) => (
                <li key={idx}>✅ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyMSEF;
