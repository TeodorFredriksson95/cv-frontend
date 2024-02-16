import ReachOutButton from "../../ReachOutButton/ReachOutButton";
import { Icon } from "@iconify-icon/react";

import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div>
      <div className="contact-text-container">
        <p className="narrator-paragraph-text">
          Whether you’re looking for a new member to join your team or searching for a freelance developer to help you build a product you’ve come to the right place!
        </p>
      </div>
      <div className="contact-flex-container">
        <div className="contact-form-container">
          <form>
            <label className="input-block">Name</label>
            <input className="input1" type="text" name="name" />
            <label className="input-block">Email</label>
            <input className="input2" type="text" name="email" />
            <label className="input-block">Category</label>
            <div class="custom-select">
              <select className="select1">
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
              <textarea className="text-area"></textarea>
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
            <span class="devicon-plain--linkedin-wordmark"></span>
            <span class="logos--github"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

// width={250} height={250} className="linkedin"
export default ContactForm;
