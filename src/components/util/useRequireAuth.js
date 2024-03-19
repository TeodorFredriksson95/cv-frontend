import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const useRequireAuth = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      const { exp } = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (exp < currentTime) {
        // Token has expired
        navigate("/login");
      }
    } else {
      // No token found, redirect to login
      navigate("/login");
    }
  }, [navigate, token]);
};
