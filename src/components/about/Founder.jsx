import React from "react";
import "./styles/Founder.css";

const FounderStory = () => {
  return (
    <section className="founder-section">
      <h1 className="founder-title">Founder Story</h1>
      
      <div className="founder-container">
        {/* Left Side: Story & CTA */}
        <div className="founder-content">
          <h2>Pastor Stephen Rotich – The Visionary Behind MSEF</h2>
          <p>
            Pastor Stephen Rotich founded MSEF with a mission to provide 
            compassionate rehabilitation and counseling services to those 
            struggling with addiction and mental health challenges. 
            His unwavering dedication has transformed countless lives, 
            bringing hope and healing to individuals and families.
          </p>
          <a href="/about" className="founder-cta">Learn More</a>
        </div>

        {/* Right Side: Image */}
        <div className="founder-image">
          <img src="/assets/founder1.jpg" alt="Pastor Stephen Rotich" />
        </div>
      </div>

      {/* Video Section */}
      <div className="founder-video">
        <h2>A Message from the Founder</h2>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/lGeuQurEzqg"
          title="Message from the Founder"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default FounderStory;
