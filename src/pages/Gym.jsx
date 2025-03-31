import React from 'react';
import './styles/Gym.css';
import { useEffect } from 'react';

const GymExercise = () => {
  useEffect(() => {
      scrollTo(0,0);
    }, []);
  return (
    <div className="gym-page">
        <h1 className="gym-heading">Gym & Physical Exercise Program</h1>
        <div className="rehab-container">
          <div className="rehab-content">
             <p>   The MSEF Gym & Physical Exercise Program is designed to promote physical well-being, mental resilience, and overall health. We provide structured fitness sessions, rehabilitation exercises, and wellness training tailored to individuals at different fitness levels.  
              <br />
              Whether you are recovering from addiction, managing mental health challenges, or simply seeking a healthier lifestyle, our program offers expert guidance, personalized workout plans, and a supportive environment to help you achieve your fitness goals.
            </p>
          </div>
          <div className="rehab-image">
            <img src="/assets/gym.jpg" alt="Support"/>
          </div>
        </div>
    

      {/* Fitness & Exercise Programs */}
      <div className='gym-container'>
        
        {/* Strength & Endurance Training */}
        <section className="gym-section">
            <h2>Strength & Endurance Training</h2>
            <ul className="gym-list">
              <li>Weightlifting & resistance training</li>
              <li>Cardio workouts (running, cycling, jump rope)</li>
              <li>Interval & endurance-based exercises</li>
              <li>Bodyweight strength training</li>
            </ul>
        </section>

        {/* Rehabilitation & Recovery Exercises */}
        <section className="gym-section">
            <h2>Rehabilitation & Recovery Exercises</h2>
            <ul className="gym-list">
              <li>Physiotherapy & mobility exercises</li>
              <li>Post-injury recovery & flexibility training</li>
              <li>Breathwork & meditation for stress relief</li>
              <li>Low-impact exercises for seniors & beginners</li>
            </ul>
        </section>

        {/* Specialized Wellness Programs */}
        <section className="gym-section">
            <h2>Specialized Wellness Programs</h2>
            <ul className="gym-list">
              <li>Yoga & Pilates for mental and physical balance</li>
              <li>Personalized weight loss & nutrition guidance</li>
              <li>Sports-specific training (athletes, runners, swimmers)</li>
              <li>Group fitness classes & community workouts</li>
            </ul>
        </section>
      </div>

      {/* Call to Action */}
      <div className="cta-container">
          <a href="/fitness-program" className="cta-button">Coming Soon</a>
      </div>
    </div>
  );
};

export default GymExercise;
