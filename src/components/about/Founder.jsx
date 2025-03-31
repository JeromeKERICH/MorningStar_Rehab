
import { Link } from "react-router-dom";
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
          <Link to="/founderbio" className="founder-cta">Learn More</Link>
        </div>

        {/* Right Side: Image */}
        <div className="founder-image">
          <img src="/assets/founder1.jpg" alt="Pastor Stephen Rotich" />
        </div>
      </div>

      {/* Video Section */}
    </section>
  );
};

export default FounderStory;
