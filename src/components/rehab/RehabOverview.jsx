import React from 'react';
import './styles/RehabOverview.css'; // Import CSS file
import { useEffect } from 'react';

const RehabOverview = () => {
  useEffect(() => {
    scrollTo(0,0);
    
  }, [])
  return (
    <div>
      <section className="rehab-hero">
        {/* Heading centered above both elements */}
        <h1 className="rehab-heading">Rehabilitation Program</h1>

        <div className="rehab-container">
          <div className="rehab-content">
            <p>
              The MSEF Scholarship Program is designed to provide financial assistance to 
              individuals struggling with alcohol and substance abuse, as well as those facing 
              mental health challenges but lacking the means to afford treatment. The program 
              aims to ensure that financial constraints do not prevent anyone from receiving 
              the rehabilitation and counseling they need to transform their lives.
            </p>
          </div>
          <div className="rehab-image">
            <img src="/assets/rehab.jpg" alt="Support"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RehabOverview;
