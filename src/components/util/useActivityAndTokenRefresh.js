// // useActivityAndTokenRefresh.js
// import { useCallback, useEffect } from "react";
// import axios from "axios";
// import { useAuth } from "../../context/AuthContext";
// import { jwtDecode } from "jwt-decode";
// import { useThrottle } from "./useThrottle"; // Adjust the import path accordingly
// import { useNavigate } from "react-router-dom";

// const useActivityAndTokenRefresh = () => {
//   const { accessToken, refreshToken, setAccessToken, logout } = useAuth();
//   const baseURL = process.env.REACT_APP_AUTHENTICATION_SERVICE_BASE_URL;

//   const navigate = useNavigate();

//   const refreshAccessToken = useCallback(async () => {
//     console.log("refreshtokenactivity");

//     try {
//       const response = await axios.post(`${baseURL}/refresh`, { refreshToken });
//       const newAccessToken = response.data.accessToken;
//       localStorage.setItem("authToken", newAccessToken);
//       setAccessToken(newAccessToken);
//     } catch (error) {
//       console.error("Failed to refresh token:", error);
//       logout();
//       navigate("/login");
//     }
//   }, [baseURL, refreshToken, setAccessToken, logout]);

//   const checkTokenAndActivity = useCallback(() => {
//     console.log("checktokenactivity");
//     if (accessToken) {
//       const { exp } = jwtDecode(accessToken);
//       if (Date.now() >= exp * 1000) {
//         refreshAccessToken();
//       }
//     }
//   }, [accessToken, refreshAccessToken]);

//   // Use `useThrottle` hook
//   const throttledCheck = useThrottle(checkTokenAndActivity, 10000);

//   useEffect(() => {
//     window.addEventListener("mousemove", throttledCheck);
//     window.addEventListener("keypress", throttledCheck);

//     return () => {
//       window.removeEventListener("mousemove", throttledCheck);
//       window.removeEventListener("keypress", throttledCheck);
//     };
//   }, [throttledCheck]);
// };

// export default useActivityAndTokenRefresh;

//////////////////////////////////////////////////////////////////////////////////

// import { useCallback, useEffect, useRef } from "react";
// import axios from "axios";
// import { useAuth } from "../../context/AuthContext";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";
// import { useThrottle } from "./useThrottle"; // Adjust the import path accordingly

// const useActivityAndTokenRefresh = () => {
//   const { accessToken, refreshToken, setAccessToken, logout } = useAuth();
//   const navigate = useNavigate();
//   const lastActivityRef = useRef(Date.now());
//   const activityCheckInterval = 10000; // 10 seconds
//   const inactivityThreshold = 3600000; // 1 hour
//   const baseURL = process.env.REACT_APP_AUTHENTICATION_SERVICE_BASE_URL;

//   const refreshTokenIfNeeded = useCallback(async () => {
//     if (!refreshToken || !accessToken) return;

//     const { exp } = jwtDecode(accessToken);
//     const currentTime = Date.now() / 1000;

//     if (exp - currentTime < 300) {
//       // 5 minutes before token expiration
//       try {
//         const response = await axios.post(`${baseURL}/refresh`, { refreshToken });
//         const newAccessToken = response.data.accessToken;
//         localStorage.setItem("authToken", newAccessToken);
//         setAccessToken(newAccessToken);
//       } catch (error) {
//         console.error("Failed to refresh token", error);
//         logout();
//         navigate("/login");
//       }
//     }
//   }, [accessToken, refreshToken, setAccessToken, logout, navigate]);

//   useEffect(() => {
//     const handleActivity = () => {
//       lastActivityRef.current = Date.now();
//     };

//     const checkActivityAndToken = () => {
//       const timeSinceLastActivity = Date.now() - lastActivityRef.current;

//       if (timeSinceLastActivity > inactivityThreshold) {
//         logout();
//         navigate("/login");
//       } else {
//         refreshTokenIfNeeded();
//       }
//     };

//     // Set up event listeners for user activity
//     window.addEventListener("mousemove", handleActivity);
//     window.addEventListener("keypress", handleActivity);

//     // Set up interval to check activity and token
//     const intervalId = setInterval(checkActivityAndToken, activityCheckInterval);

//     return () => {
//       window.removeEventListener("mousemove", handleActivity);
//       window.removeEventListener("keypress", handleActivity);
//       clearInterval(intervalId);
//     };
//   }, [refreshTokenIfNeeded, logout, navigate]);
// };

// export default useActivityAndTokenRefresh;

import { useCallback, useEffect, useRef } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

// Custom throttle function
function throttle(callback, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    callback(...args);
  };
}

const useActivityAndTokenRefresh = () => {
  const { accessToken, refreshToken, setAccessToken, logout } = useAuth();
  const navigate = useNavigate();
  const lastActivityRef = useRef(Date.now());
  const inactivityThreshold = 3600000; // 1 hour in milliseconds
  const activityCheckInterval = 10000; // Throttle activity checks to every 10 seconds
  const baseURL = process.env.REACT_APP_AUTHENTICATION_SERVICE_BASE_URL;

  const refreshTokenIfNeeded = useCallback(async () => {
    if (!refreshToken || !accessToken) return;

    const { exp } = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    if (exp - currentTime < 300) {
      // 5 minutes before token expiration
      try {
        const response = await axios.post(`${baseURL}/refresh`, { refreshToken });
        const newAccessToken = response.data.accessToken;
        localStorage.setItem("authToken", newAccessToken);
        setAccessToken(newAccessToken);
      } catch (error) {
        console.error("Failed to refresh token", error);
        logout();
        navigate("/login");
      }
    }
  }, [accessToken, refreshToken, setAccessToken, logout, navigate, baseURL]);

  // Throttled function to handle user activity
  const throttledActivityHandler = throttle(() => {
    console.log("acthivity");
    lastActivityRef.current = Date.now();
  }, activityCheckInterval);

  useEffect(() => {
    // Set up throttled event listeners for user activity
    window.addEventListener("mousemove", throttledActivityHandler);
    window.addEventListener("keypress", throttledActivityHandler);

    const intervalId = setInterval(() => {
      const timeSinceLastActivity = Date.now() - lastActivityRef.current;
      if (timeSinceLastActivity > inactivityThreshold) {
        logout();
        navigate("/login");
      } else {
        refreshTokenIfNeeded();
      }
    }, activityCheckInterval);

    return () => {
      window.removeEventListener("mousemove", throttledActivityHandler);
      window.removeEventListener("keypress", throttledActivityHandler);
      clearInterval(intervalId);
    };
  }, [refreshTokenIfNeeded, logout, navigate, throttledActivityHandler]);
};

export default useActivityAndTokenRefresh;
