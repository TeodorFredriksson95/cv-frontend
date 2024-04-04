import "./DashboardHeader.css";
import React, { useEffect, useState, useRef } from "react";

import useAxios from "../../util/useAxios";

const DashboardHeader = () => {
  const [profileImage, setProfileImage] = useState("");
  const [apiAccessKey, setApiAccessKey] = useState("");
  const [isCTCBVisible, setIsCTCBVisible] = useState(false);

  let api = useAxios();

  const handleCopyToClipboard = async () => {
    if (apiAccessKey) {
      try {
        await navigator.clipboard.writeText(apiAccessKey);
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
    let response = await api.get("https://cvidentity20240402010107.azurewebsites.net/api/generate-personal-api-key");

    if (response.status === 200) {
      setApiAccessKey(response.data.apiKey);
    }
  };

  useEffect(() => {
    const profileImage = localStorage.getItem("profileImage");

    if (profileImage) {
      setProfileImage(profileImage);
    }
  }, []);
  return (
    <div className="dashboard-header">
      <h3 className="section-title-h3 dashboard-title">Dashboard</h3>
      <div className="dashboard-grid-layout">
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
              <div>
                <span id="copy-to-clipboard" onClick={handleCopyToClipboard} className="gg--clipboard"></span>
              </div>
            </div>
            <div className="generate-key-button">
              <button onClick={handleButtonFetchApi}>Generate Key</button>
            </div>
          </div>
          <div id="personal-api-key-info-container">
            <p>
              By generating an API key and including it in your authorization header as a bearer token you will gain instant access to the Unidevweb API. For more information about how to use the API,
              please visit the{" "}
              <a className="links" href="/docs">
                documentaion
              </a>{" "}
              page.
              <span id="separate-dashboard-info">
                Remember to always store your API key in a safe place in order to protect it's integrity. You can read more about best practices regarding storage of sensitive information{" "}
                <a className="links" href="/https://medium.com/@satyendra.jaiswal/securing-apis-oauth-2-0-and-api-keys-best-practices-6d779b00d934">
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
