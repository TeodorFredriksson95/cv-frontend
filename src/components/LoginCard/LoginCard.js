import "./LoginCard.css";
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const LoginCard = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <Navbar />

      <div className="login-card-container">
        <h2 className="section-title-h3 login-card-title">Login</h2>
        <div className="login-img-logo">
          <img src="physicalCVlogo.png" />
        </div>
        <div className="oAuth-providers-container">
          <div className="oauth-provider-flex-container google-button">
            <div className="icon-wrapper">
              <div id="google-icon">
                <span className="devicon--google"></span>
              </div>
            </div>
            <div className="oauth-text google">
              <p>Continue with Google </p>
            </div>
          </div>
          <div className="oauth-facebook-container">
            <div className="oauth-provider-flex-container facebook-button">
              <div className="icon-wrapper">
                <div id="facebook-icon">
                  <span className="devicon--facebook"></span>
                </div>
              </div>
              <div className="oauth-text facebook">
                <p>Continue with Facebook </p>
              </div>
            </div>
          </div>
          <div className="oauth-linkedin-container">
            <div className="oauth-provider-flex-container linkedin-button">
              <div className="icon-wrapper">
                <div id="linkedin-icon">
                  <span class="devicon--linkedin"></span>
                </div>
              </div>
              <div className="oauth-text linkedin">
                <p>Continue with Linkedin </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginCard;
