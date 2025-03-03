import { useEffect } from "react";
import "./styles/AboutMSEF.css";


const AboutMSEF = () => {
    useEffect(() => {
        scrollTo(0, 0);
       }, []);
  return (
    <section className="about-section">
      <h1 className="about-title">About MSEF Rehab & Counseling Centre</h1>
      <div className="about-container">
        <div className="about-content">
          <h2>Forefront</h2>
          <p>
            MSEF Rehab and Counseling Centre is an initiative of{" "}
            <strong>MorningStar Empowerment Foundation (MSEF)</strong>, a
            non-governmental organization committed to transforming lives. As
            one of MSEF’s five core objectives, the Rehab and Counseling Centre
            was established to provide <strong>compassionate, professional
            support</strong> for individuals struggling with addiction and
            mental health challenges. Through structured rehabilitation
            programs, personalized counseling, and holistic wellness approaches,
            we empower individuals on their journey to recovery and lasting
            transformation.
          </p>
          <a href="/path-to-document.pdf" download className="btn btn-primary">
            Download Full Document
          </a>
        </div>
        <div className="about-image">
          <img src="assets/main1.jpg" alt="MSEF Rehab and Counseling" />
        </div>
      </div>
    </section>
  );
};

export default AboutMSEF;
