import React from "react";
import "./styles/Application.css"; // Import Application styles
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const HowToApply = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="how-to-apply">
      <h2>How to Apply</h2>
      <p>The application process is designed to be simple and accessible:</p>

      <div className="steps-container">
        {/* Step 1 */}
        <div className="step">
         
          <div>
            <h3>Step 1: Fill Out the Application Form</h3>
            <p>
              Applicants (or their guardians) will submit an online form on the MSEF website.
              <br /><strong>Required details:</strong>
            </p>
            <ul>
              <li>Personal Information (Name, Age, Contact)</li>
              <li>Financial Background</li>
              <li>Addiction/Mental Health History</li>
              <li>Reason for Applying</li>
              <li>Referral (if applicable)</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step">
       
          <div>
            <h3>Step 2: Verification Process</h3>
            <p>
              MSEF’s team will review applications and conduct interviews (online or in-person).
              For extreme cases, home visits or reference checks may be conducted.
            </p>
            <p><strong>May require:</strong> Medical or legal documents to confirm eligibility.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step">
        
          <div>
            <h3>Step 3: Approval & Onboarding</h3>
            <p>
              Approved applicants will receive an acceptance letter and be assigned a counselor.
              For full scholarships, MSEF may assist with transportation to the rehabilitation center.
              <br />Each recipient must sign an agreement committing to program completion.
            </p>
          </div>
        </div>
      </div>

      <button className="btn btn-primary"  onClick={openModal}>Apply Now</button>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <FaTimes className="close-btn" onClick={closeModal} />
            <h2>Apply for MSEF Scholarship</h2>
            <form>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />

              <label>Age</label>
              <input type="number" placeholder="Enter your age" required />

              <label>Contact Information</label>
              <input type="email" placeholder="Enter your email or phone" required />

              <label>Financial Background</label>
              <textarea placeholder="Briefly describe your financial situation" required></textarea>

              <label>Reason for Applying</label>
              <textarea placeholder="Explain why you need this scholarship" required></textarea>

              <button type="submit" className="btn btn-primary">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HowToApply;
