import "./DashboardHeader.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const DashboardHeader = () => {
  const [profileImage, setProfileImage] = useState("");
  const [apiAccesKey, setApiAccessKey] = useState("");

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
      <Navbar />
      <div className="dashboard-grid-layout">
        <div className="dashboard-sidebar">
          <div className="profile-header">
            <div className="profile-image">
              <img src={profileImage} />
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
              <input id="api-key-input" type="text" value={apiAccesKey} readOnly placeholder="[your-personal-api-key]"></input>
              <div>
                <span className="gg--clipboard"></span>
              </div>
            </div>
            <div className="generate-key-button">
              <button onClick={handleButtonFetchApi}>Generate Key</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardHeader;
