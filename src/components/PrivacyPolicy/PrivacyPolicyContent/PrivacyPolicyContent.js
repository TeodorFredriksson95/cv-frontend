import "./PrivacyPolicyContent.css";
import React, { useEffect } from "react";

const PrivacyPolicyContent = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <div className="contact-text-container">
        <p className="narrator-paragraph-text">
          Digital privacy, what we choose to share and with who we share it with is more important than ever before.{" "}
          <span className="skillset-entry-text-separator">
            This Privacy Policy outlines the types of personal information collected throughout the usage of this website, how it's being used and the steps taken in order to ensure its protection.
          </span>
        </p>
      </div>
      <div className="policy-content-section">
        <div className="policy-section-container">
          <h2 className="section-title-h3">1. Personal Information Collected</h2>
          <p className="bread-text">When you use the contact form, I ask for the following:</p>
          <ul className="policy-list">
            <li className="policy-list-item">Name: To address you personally in our communications.</li>
            <li className="policy-list-item">Email Address: To reply to your inquiries, comments, or feedback.</li>
            <li className="policy-list-item">Message: To understand the context of your inquiry or feedback.</li>
          </ul>
        </div>
        <div className="policy-section-container">
          <h2 className="section-title-h3">2. Use of Your Personal Information</h2>
          <p className="bread-text">The personal information you provide through the contact form is used for the following purposes:</p>
          <ul className="policy-list">
            <li className="policy-list-item">To review and consider potential recruitment offers.</li>
            <li className="policy-list-item">To review your message for potential business inquiries.</li>
            <li className="policy-list-item">To improve features and the quality of the website based on your feedback.</li>
          </ul>
        </div>
        <div className="policy-section-container">
          <h2 className="section-title-h3">3. Storage of Your Personal Information</h2>
          <p className="bread-text">
            Your personal information is stored securely and is only accessed by the author of this website who is committed to respecting your privacy and complying with data protection laws. I
            retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
        </div>
        <div className="policy-section-container">
          <h2 className="section-title-h3">4. Protection of Your Personal Information</h2>
          <p className="bread-text">
            I take appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no
            internet transmission is entirely secure or error-free; therefore, I cannot guarantee the absolute security of the information transmitted to and from this website.
          </p>
        </div>
        <div className="policy-section-container">
          <h2 className="section-title-h3">5. Your Rights</h2>
          <p className="bread-text">
            You have the right to access, correct, or delete your personal information that I hold. You also have the right to restrict or object to certain processing of your personal information. If
            you wish to exercise any of these rights, please contact me at Teofredev@gmail.com.
          </p>
        </div>
        <div className="policy-section-container">
          <h2 className="section-title-h3">6. Changes to This Privacy Policy</h2>
          <p className="bread-text">
            I may update this Privacy Policy from time to time to reflect changes in my practices or legal requirements. I encourage you to review this Privacy Policy periodically for the latest
            information on privacy practices being used on this website.
          </p>
        </div>
        <div className="policy-section-container">
          <h2 className="section-title-h3">7. Contact Me</h2>
          <p className="bread-text">If you have any questions or concerns about this Privacy Policy or the treatment of your personal information, please contact me at Teofredev@gmail.com. </p>
        </div>
        <div className="policy-section-container">
          <p className="bread-text">This Privacy Policy is effective as of [2024-02-20].</p>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicyContent;
