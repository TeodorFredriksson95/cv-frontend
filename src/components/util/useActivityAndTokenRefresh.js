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
  const inactivityThreshold = 3600000;
  const activityCheckInterval = 10000;
  const baseURL = process.env.REACT_APP_AUTHENTICATION_SERVICE_BASE_URL_PRODUCTION;

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

  const throttledActivityHandler = throttle(() => {
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
