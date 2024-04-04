import "./LoginCard.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LoadingComponent } from "../LoadingComponent/LoadingComponent";

function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const generateOAuthStateWithProvider = (provider) => {
  const state = {
    provider: provider,
    nonce: generateRandomString(16),
  };
  localStorage.setItem("oauth_state", JSON.stringify(state));
  return encodeURIComponent(JSON.stringify(state));
};

const LoginCard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const oauthResponseHandled = useRef(false);

  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "https://accounts.google.com/gsi/client";
    // script.onload = () => initializeGoogleSignIn();
    // script.async = true;
    // document.body.appendChild(script);

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const encodedState = params.get("state");

    const storedStateRaw = localStorage.getItem("oauth_state");
    const storedState = storedStateRaw ? JSON.parse(storedStateRaw) : null;

    if (code && encodedState && storedState) {
      const { provider, nonce } = JSON.parse(decodeURIComponent(encodedState));
      const storedState = JSON.parse(localStorage.getItem("oauth_state"));

      if (nonce === storedState.nonce) {
        switch (provider) {
          case "github":
            handleGithubAuthResponse(code, encodedState);
            break;
          case "linkedin":
            handleLinkedinOAuthResponse(code, encodedState);
            break;
          default:
            console.error("Unknown or unsupported provider.");
            break;
        }
        localStorage.removeItem("oauth_state");
      } else {
        console.error("State mismatch or missing state. Potential CSRF attack detected.");
      }
    }
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);

  // const initializeGoogleSignIn = () => {
  //   window.google.accounts.id.initialize({
  //     client_id: "590785779954-5gusittjkdj2ci5tf5d5ker9nnqimdju.apps.googleusercontent.com",
  //     callback: handleCredentialResponse,
  //     auto_select: false,
  //     credential_manifest: "https://unidevweb.com/.well-known/credential-manifest.json",
  //   });
  // };

  const handleGithubAuthResponse = async (code) => {
    const params = new URLSearchParams(window.location.search);
    // const code = params.get("code");
    const state = params.get("state");
    setIsLoading(true);

    try {
      const response = await axios.post(`https://cvidentity20240402010107.azurewebsites.net/api/auth/github`, {
        code: code,
      });
      console.log(code);
      if (response.data.accessToken) {
        login(response.data.accessToken, response.data.refreshToken.token);
        navigate("/dashboard");
      } else {
        console.error("Authentication failed: No access token provided.");
      }
    } catch (error) {
      console.error("OAuth callback error:", error);
    }
    setIsLoading(false);
  };

  const handleGitHubLogin = () => {
    const state = generateOAuthStateWithProvider("github");
    const clientId = "9ddff8bc7ebe96a759b3";
    const redirectUri = encodeURIComponent("https://unidevweb.com/login");
    const scope = encodeURIComponent("user:email");
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
  };

  const handleLinkedInLogin = () => {
    const state = generateOAuthStateWithProvider("linkedin");
    window.location.href = `https://cvidentity20240402010107.azurewebsites.net/api/auth/linkedin/initiate?state=${encodeURIComponent(state)}`;
  };

  const handleLinkedinOAuthResponse = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");

    setIsLoading(true);
    try {
      const response = await axios.post(`https://cvidentity20240402010107.azurewebsites.net/api/authenticate/linkedin`, {
        code: code,
      });
      if (response.data.accessToken) {
        login(response.data.accessToken, response.data.refreshToken.token);
        navigate("/dashboard");
      } else {
        console.error("Authentication failed: No access token provided.");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
    setIsLoading(false);
  };

  const handleCredentialResponse = async (response) => {
    setIsLoading(true);
    const authResponse = await axios.post(process.env.REACT_APP_AUTHENTICATION_SERVICE_BASE_URL + "/api/authenticate/google", {
      token: response.credential,
    });

    if (authResponse.data.accessToken) {
      login(authResponse.data.accessToken, authResponse.data.refreshToken.token);
      navigate("/dashboard");
      setIsLoading(false);
    }
  };
  const handleSignInClick = () => {
    if (window.google && window.google.accounts && window.google.accounts.id) {
      window.google.accounts.id.prompt();
    } else {
      console.log("Google Accounts SDK not ready");
    }
  };

  return (
    <div>
      {isLoading && <LoadingComponent />}
      <div id="g_id_onload" data-client_id="590785779954-5gusittjkdj2ci5tf5d5ker9nnqimdju.apps.googleusercontent.com" data-prompt_parent_id="g_id_onload"></div>
      <div className="login-card-container">
        <h2 className="section-title-h3 login-card-title">Sign in</h2>
        <div className="login-img-logo">
          <img src="physicalCVlogo.png" />
        </div>
        <div className="oAuth-providers-container">
          {/* NEED TO WAIT FOR GOOGLE VERIFICATION BEFORE I CAN USE IT */}
          {/* <div className="oauth-provider-flex-container google-button" onClick={handleSignInClick}>
            <div className="icon-wrapper">
              <div id="google-icon">
                <span className="devicon--google"></span>
              </div>
            </div>
            <div className="oauth-text google">
              <p>Sign in with Google </p>
            </div>
          </div> */}
          <div className="oauth-facebook-container">
            <div className="oauth-provider-flex-container github-button" onClick={handleGitHubLogin}>
              <div className="icon-wrapper">
                <div id="github-icon">
                  <span className="bytesize--github"></span>{" "}
                </div>
              </div>
              <div className="oauth-text facebook">
                <p>Sign in with Github </p>
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
                <p>Sign in with Linkedin </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginCard;
