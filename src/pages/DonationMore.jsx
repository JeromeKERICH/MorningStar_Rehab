import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/DonationImpact.css";
import { useEffect } from "react";

const faqsData = [
  {
    question: "How do I know my donation makes an impact?",
    answer: "We provide regular reports and updates on how funds are used.",
  },
  {
    question: "Can I donate anonymously?",
    answer: "Yes, we respect donor privacy and allow anonymous donations.",
  },
  {
    question: "Are donations tax-deductible?",
    answer: "Yes, all donations to MSEF are tax-deductible.",
  },
  {
    question: "Can I visit the projects I support?",
    answer: "Yes! Donors are welcome to visit our rehab centers.",
  },
];

const DonationImpact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
        scrollTo(0, 0);
         }, []);

  return (
    <section className="donation-impact">
      {/* Hero Section */}
      <div className="impact-hero">
        <h1>Your Support is Transforming Lives!</h1>
        <p>
          Thanks to generous donors like you, we have helped countless
          individuals break free from addiction and rebuild their lives.
        </p>
        <Link to="/donation" className="btn btn-primary">Donate Now</Link>
      </div>

      {/* Impactful Projects */}
      <div className="impact-projects">
        <h2>How Your Donations Are Used</h2>
        <div className="impact-grid">
          <div className="impact-box">
            <h3>Medical & Rehabilitation</h3>
            <p>Providing medical care, therapy, and inpatient rehabilitation.</p>
          </div>
          <div className="impact-box">
            <h3>Education & Skills</h3>
            <p>Offering scholarships and vocational training for a better future.</p>
          </div>
          <div className="impact-box">
            <h3>Community Outreach</h3>
            <p>Supporting addiction prevention programs in schools and communities.</p>
          </div>
            <div className="impact-box">
            <h3>Therapy & Counseling</h3>
            <p>Providing mental health support and counseling services.</p>
        </div>
        <div className="impact-box">
            <h3>Family Reunification</h3>
            <p>Reuniting families and rebuilding relationships.</p>
        </div>

        <div className="impact-box">
            <h3>Aftercare Support</h3>
            <p>Continued support and mentorship for long-term recovery.</p>
        </div>

        </div>

      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h2>Real Stories of Change</h2>
        <div className="testimonial-box">
          <p>"I was lost in addiction, but thanks to MSEF, I found hope again. I am drug-free and reunited with my family." – <b>James M.</b></p>
        </div>
        <div className="testimonial-box">
          <p>"Donations helped me get therapy sessions I couldn't afford. Now, I mentor others." – <b>Esther A.</b></p>
        </div>
      </div>

      {/* FAQs */}
      <div className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqsData.map((faq, index) => (
            <div key={index} className={`faq-box ${openFaq === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
              <h3>
                {faq.question}
                <span className="faq-toggle">{openFaq === index ? "−" : "+"}</span>
              </h3>
              {openFaq === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Financial Transparency */}
      <div className="transparency">
        <h2>Where Your Money Goes</h2>
        <p>90% of funds go directly to rehab and outreach programs.</p>
        <p>Annual reports are available for full transparency.</p>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Be Part of the Change – Donate Today!</h2>
        <Link to="/donate" className="btn btn-primary">Donate Now</Link>
      </div>
    </section>
  );
};

export default DonationImpact;
