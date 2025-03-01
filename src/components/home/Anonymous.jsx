import { useEffect } from "react"; // Import the useEffect hook
import "./styles/Anonymous.css"; // Import the styles
import { Link } from "react-router-dom"; // Import the Link component

const AnonymousCounseling = () => {
 
 
  return (
    <section className="anonymous-counseling gradient-navy-gold">
      <div className="container">
        {/* Section Content */}
        <div className="anonymous-content">
          <h2>Need Help? Ask Anonymously</h2>
          <p>
            Struggling with addiction, mental health, or personal challenges?
            Submit your question anonymously, and our experts will respond via
            blog posts and video content.
          </p>

          {/* Call-to-Action Button */}
          <Link to="/anonymousform" className="btn btn-primary">
            Ask Your Question
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnonymousCounseling;
