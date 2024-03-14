import "./LoginCard.css";
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const LoginCard = () => {
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: "590785779954-5gusittjkdj2ci5tf5d5ker9nnqimdju.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
  }, []);

  const handleCredentialResponse = async (response) => {
    console.log("Encoded JWT ID token from Google: " + response.credential);
    const authResponse = await axios.post(process.env.REACT_APP_AUTHENTICATION_SERVICE_BASE_URL + "/api/authenticate/google", {
      token: response.credential,
    });
    console.log("jwt token from auth service: ", authResponse.data.token);
  };
  const handleSignInClick = () => {
    if (window.google.accounts.id) {
      window.google.accounts.id.prompt();
    }
  };
  return (
    <div>
      <Navbar />
      <div id="g_id_onload" data-client_id="590785779954-5gusittjkdj2ci5tf5d5ker9nnqimdju.apps.googleusercontent.com" data-prompt_parent_id="g_id_onload"></div>
      <div className="login-card-container">
        <h2 className="section-title-h3 login-card-title">Login</h2>
        <div className="login-img-logo">
          <img src="physicalCVlogo.png" />
        </div>
        <div className="oAuth-providers-container">
          <div className="oauth-provider-flex-container google-button" onClick={handleSignInClick}>
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
                  <span className="devicon--linkedin"></span>
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
