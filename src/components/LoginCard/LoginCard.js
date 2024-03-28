import "./LoginCard.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const LoginCard = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const oauthResponseHandled = useRef(false);

  useEffect(() => {
    if (window.google.accounts) {
      window.google.accounts.id.initialize({
        client_id: "590785779954-5gusittjkdj2ci5tf5d5ker9nnqimdju.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
    }

    if (!oauthResponseHandled.current) {
      handleLinkedinOAuthResponse();
      oauthResponseHandled.current = true; // Mark the OAuth response as handled
    }
  }, []);

  const handleLinkedinOAuthResponse = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");
    console.log("before state check");
    console.log(code);
    console.log(state);

    if (code && state) {
      const storedState = localStorage.getItem("linkedin_oauth_state");
      if (state === storedState) {
        console.log("code", code);
        try {
          console.log("after state check");
          const response = await axios.post(`${process.env.REACT_APP_AUTHENTICATION_SERVICE_BASE_URL}/api/authenticate/linkedin`, {
            code: code,
          });
          console.log(response);
          if (response.data.accessToken) {
            login(response.data.accessToken, response.data.refreshToken.token);
            navigate("/dashboard");
          } else {
            console.error("Authentication failed: No access token provided.");
          }
        } catch (error) {
          console.error("Authentication error:", error);
        } finally {
          localStorage.removeItem("linkedin_oauth_state");
        }
      } else {
        console.error("State mismatch or missing state. Potential CSRF attack detected.");
      }
    }
  };

  const handleLinkedInLogin = () => {
    const state = generateRandomString(16);
    localStorage.setItem("linkedin_oauth_state", state);
    console.log("first statre");
    window.location.href = `${process.env.REACT_APP_AUTHENTICATION_SERVICE_BASE_URL}/api/auth/linkedin/initiate?state=${encodeURIComponent(state)}`;
  };

  const handleCredentialResponse = async (response) => {
    console.log("Encoded JWT ID token from Google: " + response.credential);
    const authResponse = await axios.post(process.env.REACT_APP_AUTHENTICATION_SERVICE_BASE_URL + "/api/authenticate/google", {
      token: response.credential,
    });

    if (authResponse.data.accessToken) {
      console.log("jwt token from auth service: ", authResponse.data.accessToken);
      console.log("refresh token: " + authResponse.data.refreshToken.token);
      login(authResponse.data.accessToken, authResponse.data.refreshToken.token);
      navigate("/dashboard");
    }
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
            <div className="oauth-provider-flex-container linkedin-button" onClick={handleLinkedInLogin}>
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
