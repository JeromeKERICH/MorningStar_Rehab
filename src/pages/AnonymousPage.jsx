import { useState, useEffect} from "react";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
import "./styles/AnonymousPage.css";

const AnonymousForm = () => {
    useEffect(() => {
        scrollTo(0, 0);
       }, []);

  const [formData, setFormData] = useState({
    concernType: "",
    message: "",
    email: "",
    captchaVerified: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (value) => {
    setFormData({ ...formData, captchaVerified: !!value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.captchaVerified) {
      alert("Please complete the captcha verification.");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Your question has been submitted anonymously!");
    setFormData({ concernType: "", message: "", email: "", captchaVerified: false });
  };

  return (
    <section className="anonymous-help">
      <div className="container">
        <h2>Ask for Help Anonymously</h2>
        <p>Submit your concern privately, and our counselors will respond in our blog and videos.</p>

        <form onSubmit={handleSubmit} className="help-form">
          {/* Concern Type Dropdown */}
          <div className="form-group">
            <label htmlFor="concernType">Type of Concern</label>
            <select name="concernType" id="concernType" required value={formData.concernType} onChange={handleChange}>
              <option value="">Select Concern</option>
              <option value="Addiction">Addiction</option>
              <option value="Mental Health">Mental Health</option>
              <option value="Family">Family Issues</option>
              <option value="Relationships">Relationships</option>
              <option value="Financial Stress">Financial Stress</option>
            </select>
          </div>

          {/* Message Box */}
          <div className="form-group">
            <label htmlFor="message">Your Question</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Write your question here..."
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Optional Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email (Optional for Private Response)</label>
            <input type="email" name="email" id="email" placeholder="Enter your email (optional)" value={formData.email} onChange={handleChange} />
          </div>

          {/* Captcha Verification */}
          <div className="captcha-box">
            <ReCAPTCHA sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY" onChange={handleCaptcha} />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">Submit Question</button>
        </form>
      </div>
    </section>
  );
};

export default AnonymousForm;
