import ReachOutButton from "../../ReachOutButton/ReachOutButton";
import { Icon } from "@iconify-icon/react";

import "./ContactForm.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const ContactForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Freelance_proposal", // Assuming this as default selected value
    message: "",
    privacyPolicyAgreement: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Simulate form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);

    setFormData({
      name: "",
      email: "",
      category: "Freelance_proposal",
      message: "",
      privacyPolicyAgreement: false,
    });
  };
  return (
    <div>
      <div className="contact-text-container">
        <p className="narrator-paragraph-text">
          Whether you’re looking for a new member to join your team or searching for a freelance developer to help you build a product you’ve come to the right place!
        </p>
      </div>
      <div className="contact-flex-container">
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <label className="input-block">Name</label>
            <input className="input1" type="text" required name="name" value={formData.name} onChange={handleChange} />
            <label className="input-block">Email</label>
            <input className="input2" type="text" required name="email" value={formData.email} onChange={handleChange} />
            <label className="input-block">Category</label>
            <div class="custom-select">
              <select className="select1" required value={formData.category} onChange={handleChange}>
                <option value="Recruiter">Recruiter</option>
                <option value="Freelance_proposal" selected>
                  Freelance proposal
                </option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="text-area-container">
              <label className="input-block">Message</label>
              <textarea className="text-area" required value={formData.message} onChange={handleChange}></textarea>
              <div className="privacy-policy-agreement">
                <input type="checkbox" id="privacyPolicyAgreement" name="privacyPolicyAgreement" required checked={formData.privacyPolicyAgreement} onChange={handleChange} />
                <label className="agree-text" htmlFor="privacyPolicyAgreement">
                  I agree to the{" "}
                  <NavLink to="/privacypolicy">
                    <span className="word-highlight-pink onHover">Privacy Policy</span>
                  </NavLink>
                  .
                </label>
              </div>
              <div className="send-button-container">
                <input type="submit" value="Send" className="send-button" />
              </div>
            </div>
          </form>
        </div>
        <div className="follow-progress-container">
          <div className="follow-progress-text">
            <p className="">Follow my progress</p>
          </div>
          <div className="icons-container">
            <a className="linkedinlink" href="https://www.linkedin.com/in/teodor-fredriksson-919606b9/" target="_blank" rel="noopener noreferrer">
              <span class="devicon-plain--linkedin-wordmark"></span>
            </a>
            <a className="githublink" href="https://github.com/TeodorFredriksson95" target="_blank" rel="noopener noreferrer">
              <span class="logos--github"></span>
            </a>
          </div>
        </div>
      </div>
      <Toast show={showToast} message="Your message has been sent successfully!" />
    </div>
  );
};

const Toast = ({ show, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "blue",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
};

export default ContactForm;
