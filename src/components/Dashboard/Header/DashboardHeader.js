import "./DashboardHeader.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const DashboardHeader = () => {
  const [profileImage, setProfileImage] = useState("");
  const [apiAccessKey, setApiAccessKey] = useState("");
  const [isCTCBVisible, setIsCTCBVisible] = useState(false);

  const handleCopyToClipboard = async () => {
    if (apiAccessKey) {
      try {
        await navigator.clipboard.writeText(apiAccessKey);
        console.log(isCTCBVisible);
        setIsCTCBVisible(true);
        setTimeout(() => {
          setIsCTCBVisible(false);
        }, "5000");
      } catch (error) {
        console.error("Failed to copy API key:", error);
      }
    }
  };

  const handleButtonFetchApi = async () => {
    const token = localStorage.getItem("authToken");
    console.log(token);

    const response = await axios.get(process.env.REACT_APP_AUTHENTICATION_SERVICE_BASE_URL + "/api/generate-personal-api-key", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    setApiAccessKey(response.data.apiKey);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const decodedToken = jwtDecode(token);

    const userProfileImage = decodedToken.profileImage;
    if (userProfileImage) {
      setProfileImage(userProfileImage);
    }
    console.log(userProfileImage);
  }, []);
  return (
    <div className="dashboard-header">
      <div className="dashboard-grid-layout">
        <div className="dashboard-sidebar">
          <div className="profile-header">
            <div className="profile-image">
              <img src={profileImage} alt="Profile image" />
            </div>
            <h4 id="profile-name">Teodor Fredriksson</h4>
          </div>
        </div>
        <div className="dashboard-main-section">
          <div className="generate-api-key-section">
            <div className="api-key-header">
              <h4 className="section-title-h4">Generate Api Key</h4>
            </div>
            <div className="generate-api-key-bar">
              <div className="input-notification-container">
                <input id="api-key-input" type="text" value={apiAccessKey} readOnly placeholder="[your-personal-api-key]"></input>
                {isCTCBVisible && <div id="copied-notification">Copied to clipboard!</div>}
              </div>
              <span id="copy-to-clipboard" onClick={handleCopyToClipboard} className="gg--clipboard"></span>
            </div>
            <div className="generate-key-button">
              <button onClick={handleButtonFetchApi}>Generate Key</button>
            </div>
          </div>
          <div id="personal-api-key-info-container">
            <p>
              By generating an API key and including it in your authorization header as a bearer token you will gain instant access to the Unidevweb API. For more information about how to use the API,
              please visit the{" "}
              <a className="links" href="/doc">
                documentaion
              </a>{" "}
              page.
              <span id="separate-dashboard-info">
                Remember to always store your API key in a safe in order to protect it's integrity. You can read more about best practices regarding storage of sensitive information{" "}
                <a className="links" href="/linktobestpractices">
                  here.
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardHeader;
