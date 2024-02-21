import ReachOutButton from "../../ReachOutButton/ReachOutButton";
import { Icon } from "@iconify-icon/react";
import emailjs from "emailjs-com";

import "./ContactForm.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const ContactForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Freelance Proposal", // Assuming this as default selected value
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

    emailjs.sendForm("service_ixdgdqm", "template_z5geyda", event.target, "Q7PgfF7xgu_nHDpPV").then(
      (result) => {
        console.log(result);
        console.log(result.text);
        console.log(event.target);
        setShowToast(true); // Show success toast
        setTimeout(() => setShowToast(false), 5000); // Hide toast after 5 seconds
        // Clear the form fields here
        setFormData({
          name: "",
          email: "",
          category: "Freelance Proposal",
          message: "",
          privacyPolicyAgreement: false,
        });
      },
      (error) => {
        console.log(error.text);
        // Optionally, show an error toast if the email sending fails
      }
    );
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
            <div className="custom-select">
              <select name="category" className="select1" required value={formData.category} onChange={handleChange}>
                <option value="Recruiter">Recruiter</option>
                <option value="Freelance Proposal">Freelance Proposal</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="text-area-container">
              <label className="input-block">Message</label>
              <textarea name="message" className="text-area" required value={formData.message} onChange={handleChange} />
              <div className="privacy-policy-agreement">
                <input type="checkbox" id="privacyPolicyAgreement" name="privacyPolicyAgreement" required />
                <label className="agree-text" htmlFor="privacyPolicyAgreement">
                  I agree to the{" "}
                  <NavLink to="/privacypolicy" className="privacy-link">
                    <span className="word-highlight-pink onHover">Privacy Policy</span>
                  </NavLink>
                  .
                </label>
              </div>
              <div className="send-button-container">
                <input type="submit" value="send" className="send-button" />
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
              <span className="devicon-plain--linkedin-wordmark"></span>
            </a>
            <a className="githublink" href="https://github.com/TeodorFredriksson95" target="_blank" rel="noopener noreferrer">
              <span className="logos--github"></span>
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
