
import "./styles/CTA2.css";
import { Link } from "react-router-dom";

const CTA2 = () => {
  return (
    <section className="cta-containers">
      <h2 className="cta-h">Take the First Step Towards Recovery</h2>
      <p className="cta-p">
        Whether you're seeking rehabilitation or counseling, MSEF is here to support you. 
        Join our program today or talk with a professional counselor to get started on your journey to healing.
      </p>
      <div className="cta-clicks">
        <Link to="/rehabilitation" className="cta-click primary">Join the Program</Link>
        <a href="tel:+254742935769" className="cta-click secondary">Talk With a Counselor</a>
      </div>
    </section>
  );
};

export default CTA2;
