import React, { useEffect } from "react";
import "./styles/Overview.css";
import { Link } from "react-router-dom";

const ScholarshipOverview = () => {

  useEffect(() => {
    scrollTo(0,0);
  }, []);
  return (
    <section className="scholarship-hero">
      <div className="scholarship-content">
        <h1>MSEF Scholarship <span>Program</span></h1>
        <p>
          The MSEF Scholarship Program is designed to provide financial assistance to 
          individuals struggling with alcohol and substance abuse, as well as those facing 
          mental health challenges but lacking the means to afford treatment. The program 
          aims to ensure that financial constraints do not prevent anyone from receiving 
          the rehabilitation and counseling they need to transform their lives.
          <br></br>
          <Link to="/donation" className="btn btn-primary">
          Donate Now
        </Link>
        </p>
      </div>
    
    </section>
     
  );
};

export default ScholarshipOverview;
