// useUserActivity.js
import { useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../context/AuthContext";

const useUserActivity = (timeout = 3600) => {
  const { accessToken, setAccessToken, setRefreshToken, logout } = useAuth();
  useEffect(() => {
    let activityTimer;

    const throttle = (func, limit) => {
      let lastFunc;
      let lastRan;
      return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(function () {
            if (Date.now() - lastRan >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      };
    };

    const refreshTokensIfNeeded = async () => {
      if (accessToken) {
        const { exp } = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000;

        if (exp - currentTime < 300) {
          try {
            const refreshToken = localStorage.getItem("refreshToken");

            const response = await axios.post(process.env.REACT_APP_AUTHENTICATION_SERVICE_BASE_URL + "/refresh", { refreshToken });
            const newAccessToken = response.data.accessToken;
            const newRefreshToken = response.data.refreshToken;
            localStorage.setItem("authToken", newAccessToken);
            setAccessToken(newAccessToken);

            if (newRefreshToken !== refreshToken) {
              localStorage.setItem("refreshToken", newRefreshToken);
              setRefreshToken(newRefreshToken);
            }
          } catch (error) {
            console.error("Error refreshing token", error);
            logout();
          }
        }
      }
    };

    const handleUserActivity = throttle(() => {
      clearTimeout(activityTimer);
      refreshTokensIfNeeded();
      activityTimer = setTimeout(() => logout(), timeout * 1000);
    }, 10000);

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keypress", handleUserActivity);

    return () => {
      clearTimeout(activityTimer);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keypress", handleUserActivity);
    };
  }, [accessToken, setAccessToken, logout, timeout]);
};

export default useUserActivity;
