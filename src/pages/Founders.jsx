import React from "react";
import "./styles/Founders.css"

const FounderBio = () => {
  return (
    <section className="founder-bio-section">
      <div className="founder-bio-container">
        <div className="founder-bio-content">
          {/* Text Section */}
          <div className="founder-bio-text">
            
            <p>
              Pastor Stephen Rotich founded MSEF with a mission to provide
              compassionate rehabilitation and counseling services to those
              struggling with addiction and mental health challenges. His
              unwavering dedication has transformed countless lives, bringing
              hope and healing to individuals and families.
            </p>
            <p>
              With years of experience in ministry and counseling, Pastor Rotich
              has developed a holistic approach that integrates spiritual
              guidance, professional counseling, and community support. His work
              has impacted not only those battling addiction but also their
              families, fostering a ripple effect of positive change.
            </p>
           
          </div>

          {/* Video Section */}
          <div className="founder-bio-video">
            <iframe
              src="https://www.youtube.com/embed/CV-axQOthRs"
              title="Pastor Stephen Rotich - MSEF Visionary"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderBio;
